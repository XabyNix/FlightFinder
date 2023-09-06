import { ChangeEventHandler, useState } from "react";
import { DayPicker, DateRange, SelectRangeEventHandler } from "react-day-picker";
import { format, parse, isAfter, isBefore, addYears } from "date-fns";
import "react-day-picker/dist/style.css";
import { it } from "date-fns/locale";
import FocusTrap from "focus-trap-react";
import "./calendar.css";

interface props {
	passDate(date?: string, returnDate?: string): void;
}

function Calendar({ passDate }: props) {
	const [selected, setSelected] = useState<DateRange>();
	const [fromValue, setFromValue] = useState<string>("");
	const [toValue, setToValue] = useState<string>("");

	const [footer, setFooter] = useState<string | undefined>();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [anyError, setAnyError] = useState<boolean>(false);

	const dateFormat = "dd-MM-yyyy";

	const handleOnSelectRange: SelectRangeEventHandler = (date) => {
		setSelected(date);
		if (date?.from) {
			setFromValue(format(date.from, dateFormat));
		} else {
			setFromValue("");
		}
		if (date?.to) {
			setToValue(format(date.to, dateFormat));
		} else {
			setToValue("");
		}
		if (date?.from && date?.to)
			if (!anyError) passDate(format(date.from, "yyyy-MM-dd"), format(date.to, "yyyy-MM-dd"));
	};

	const handleFromChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setFromValue(e.target.value);
		const parsedDate = parse(e.target.value, dateFormat, new Date());

		if (selected?.to && isAfter(parsedDate, selected.to)) {
			setFooter("La data di partenza è dopo la data di arrivo");
			setAnyError(true);
		} else {
			setSelected({ from: parsedDate, to: selected?.to });
			setFooter(undefined);
			setAnyError(false);
		}
		passDate(format(parsedDate, "yyyy-MM-dd"));
	};

	const handleToChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setToValue(e.target.value);
		const parsedDate = parse(e.target.value, dateFormat, new Date());

		if (selected?.from && isBefore(parsedDate, selected.from)) {
			setFooter("La data di partenza è dopo la data di arrivo");
			setAnyError(true);
		} else {
			setSelected({ from: selected?.from, to: parsedDate });
			setFooter(undefined);
			setAnyError(false);
		}
		passDate(format(parsedDate, "yyyy-MM-dd"));
	};

	return (
		<div className="inputContainer">
			<input
				className="inputControl"
				value={fromValue}
				onChange={handleFromChange}
				type="text"
				placeholder="From Date"
				name="dayPickerInput"
				onClick={() => setIsOpen(true)}
			/>
			<input
				className="inputControl"
				value={toValue}
				onChange={handleToChange}
				type="text"
				placeholder="To Date"
				name="dayPickerInput"
				onClick={() => setIsOpen(true)}
			/>
			{isOpen && (
				<FocusTrap
					focusTrapOptions={{
						initialFocus: false,
						allowOutsideClick: true,
						clickOutsideDeactivates: true,
						onDeactivate: () => setIsOpen(false),
					}}
				>
					<div className="calendar calendar-positioning">
						<DayPicker
							modifiersClassNames={{
								today: "my-today",
								selected: "my-selected",
							}}
							numberOfMonths={2}
							locale={it}
							showOutsideDays
							mode="range"
							selected={selected}
							onSelect={handleOnSelectRange}
							fromDate={new Date()}
							toDate={addYears(new Date(), 1)}
							footer={footer}
						></DayPicker>
					</div>
				</FocusTrap>
			)}
		</div>
	);
}

export default Calendar;
