import { DayPicker } from "react-day-picker";
import { it } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import { useState, useRef, useEffect, ChangeEventHandler } from "react";
import { format, isValid, parse } from "date-fns";

interface props {
	placeholder: string;
	name: string;
	setDate: (date: string) => void;
}

const DateSelect = ({ setDate, placeholder, name }: props) => {
	const [isVisible, setIsVisible] = useState(false);
	const [selectedDate, setSelectedDate] = useState<Date>();
	const [displayDate, setDisplayDate] = useState<string>("");
	const clickRef = useRef<HTMLInputElement | null>(null);

	const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const parsedDate = parse(e.currentTarget.value, "dd-MM-yyyy", new Date());
		//console.log(parsedDate);
		setDisplayDate(e.currentTarget.value);
		if (isValid(parsedDate)) {
			setSelectedDate(parsedDate);
			setDate(e.currentTarget.value);
		} else {
			setSelectedDate(undefined);
		}
	};

	const handleDaySelect = (date: Date | undefined) => {
		if (date) {
			setSelectedDate(date);
			setDisplayDate(format(date, "dd-MM-yyyy"));
			setDate(format(date, "yyyy-MM-dd"));
		} else {
			setDisplayDate("");
		}
	};

	useEffect(() => {
		const handleClickDocument = (e: MouseEvent) => {
			if (!clickRef.current?.contains(e.target as Node)) {
				setIsVisible(false);
			}
		};
		document.addEventListener("click", handleClickDocument);

		return () => {
			document.removeEventListener("click", handleClickDocument);
		};
	}, []);

	return (
		<div className="inputContainer" ref={clickRef}>
			<input
				value={displayDate}
				onChange={handleOnChange}
				className="inputControl"
				name={name}
				type="text"
				placeholder={placeholder}
				onClick={() => setIsVisible(!isVisible)}
			/>
			{isVisible && (
				<DayPicker
					mode="single"
					selected={selectedDate}
					onSelect={handleDaySelect}
					locale={it}
					className="calendar"
					modifiersClassNames={{ selected: "selectedDay" }}
				></DayPicker>
			)}
		</div>
	);
};

export default DateSelect;
