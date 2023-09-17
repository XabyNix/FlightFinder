import { useState } from "react";
import "react-day-picker/dist/style.css";
import "./calendar.css";
import { DatePicker } from "@mui/x-date-pickers";

interface props {
	isRequired: boolean;
	gridArea: string;
	label: string;
	stateDate: Date;
	changeStateDate(from: Date): void;
	minDate?: Date;
	disabled?: boolean;
}

function Calendar(prop: props) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className="inputContainer" id={prop.gridArea}>
			<DatePicker
				disabled={prop.disabled}
				label={prop.label}
				open={isOpen}
				onAccept={(value) => value && prop.changeStateDate(value)}
				onClose={() => setIsOpen(false)}
				disablePast
				minDate={prop.minDate}
				showDaysOutsideCurrentMonth
				slotProps={{
					textField: {
						required: prop.isRequired,
						onClick: () => setIsOpen(true),
						fullWidth: true,
					},
				}}
			></DatePicker>
		</div>
	);
}

export default Calendar;
