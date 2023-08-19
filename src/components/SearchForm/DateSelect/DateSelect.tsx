import { DayPicker } from "react-day-picker";
import { it } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import { useState, useRef, useEffect } from "react";

interface props {
	placeholder: string;
	name: string;
}

const DateSelect = ({ placeholder, name }: props) => {
	const [isVisible, setIsVisible] = useState(false);
	const [displayDate, setDisplayDate] = useState<Date>();
	const clickRef = useRef<HTMLInputElement | null>(null);

	const handleDaySelect = (date: Date | undefined) => {
		if (date) {
			setDisplayDate(date);
			console.log(date);
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
	});

	return (
		<div className="inputContainer" ref={clickRef}>
			<input value={displayDate?.toLocaleDateString()} className="inputControl" name={name} type="text" placeholder={placeholder} onClick={() => setIsVisible(!isVisible)} />
			{isVisible && <DayPicker mode="single" onSelect={handleDaySelect} locale={it} className="calendar"></DayPicker>}
		</div>
	);
};

export default DateSelect;
