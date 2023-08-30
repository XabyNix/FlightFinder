import "./SearchForm.css";
//import DateSelect from "./DateSelect/DateSelect";
import Calendar from "./calendar/Calendar";
import Options from "./options/Options";
import { useState } from "react";

interface props {
	submitPassUrl(argUrl: string): void;
}

const SearchForm = ({ submitPassUrl }: props) => {
	const [departure, setDeparture] = useState<string>();
	const [destination, setDestination] = useState<string>();
	const [departureDate, setDepartureDate] = useState<string>();
	const [adult, setAdult] = useState<number>(1);
	const [children, setChildren] = useState<number>(0);

	function changeDate(date: string) {
		setDepartureDate(date);
	}
	function submitHandler(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const url = `http://localhost:3000/flights?from=${departure}&to=${destination}&departureDate=${departureDate}&adults=${adult}`;
		submitPassUrl(url);
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="searchFrame">
				<div className="inputContainer">
					<input
						className="inputControl"
						type="text"
						name="from"
						placeholder="Da dove parti?"
						onChange={(e) => setDeparture(e.target.value)}
					/>
				</div>
				<div className="inputContainer">
					<input
						className="inputControl"
						type="text"
						name="destination"
						placeholder="Dove vuoi andare?"
						onChange={(e) => setDestination(e.target.value)}
					/>
				</div>

				<Calendar passDate={changeDate}></Calendar>
				{/* <DateSelect
					setDate={changeDate}
					placeholder="Data di partenza"
					name="departureDate"
				></DateSelect> */}

				<Options
					adult={adult}
					setAdult={setAdult}
					children={children}
					setChildren={setChildren}
				></Options>

				<div className="inputContainer">
					<button className="inputControl btn" type="submit">
						Cerca
					</button>
				</div>
			</div>
		</form>
	);
};

export default SearchForm;
