import { useState } from "react";
import "react-day-picker/dist/style.css";
import { DatePicker } from "@mui/x-date-pickers";
import useTheme from "@mui/material/styles/useTheme";
import Box from "@mui/material/Box";

interface props {
	isRequired: boolean;
	area: string;
	label: string;
	stateDate: Date;
	changeStateDate(from: Date): void;
	minDate?: Date;
	disabled?: boolean;
}

function Calendar(prop: props) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const theme = useTheme();
	return (
		<Box position={"relative"} gridArea={prop.area}>
			<DatePicker
				disabled={prop.disabled}
				label={prop.label}
				open={isOpen}
				desktopModeMediaQuery={theme.breakpoints.up("md")}
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
		</Box>
	);
}

export default Calendar;
