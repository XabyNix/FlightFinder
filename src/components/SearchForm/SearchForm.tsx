import Calendar from "./calendar/Calendar";
import InputSearch from "./inputSearch/InputSearch";
import Options from "./options/Options";
import { useState } from "react";
import "./SearchForm.css";

interface props {
	submitPassUrl(argUrl: string): void;
}

const SearchForm = ({ submitPassUrl }: props) => {
	const [departure, setDeparture] = useState<string>();
	const [destination, setDestination] = useState<string>();
	const [departureDate, setDepartureDate] = useState<string>();
	const [adults, setAdults] = useState<number>(1);
	const [children, setChildren] = useState<number>(0);

	function changeDeparture(location: string) {
		setDeparture(location);
	}

	function changeDestination(location: string) {
		setDestination(location);
	}

	function changeDate(date: string) {
		setDepartureDate(date);
	}

	function changePeopleNumberCallback(bigPeople: number, littlePeople: number) {
		setAdults(bigPeople);
		setChildren(littlePeople);
	}
	function submitHandler(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		console.log(departure, destination, departureDate, adults, children);
		const url = `http://localhost:3000/flights?from=${departure}&to=${destination}&departureDate=${departureDate}&adults=${adults}`;
		submitPassUrl(url);
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="searchFrame">
				<InputSearch
					placeholder="Departure Airport"
					changeLocation={(location) => changeDeparture(location)}
				></InputSearch>

				<InputSearch placeholder="Destination" changeLocation={changeDestination}></InputSearch>

				<Calendar passDate={changeDate}></Calendar>

				<Options changePeopleNumber={changePeopleNumberCallback}></Options>

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
