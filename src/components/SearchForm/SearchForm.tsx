import { useState } from "react";
import Calendar from "./calendar/Calendar";
import InputSearch from "./inputSearch/InputSearch";
import Options from "./options/Options";
import Results from "../results/Results";
import "./SearchForm.css";

/* interface props {
	submitPassUrl(argUrl: string): void;
} */

const SearchForm = () => {
	const [departure, setDeparture] = useState<string>("");
	const [destination, setDestination] = useState<string>("");
	const [departureDate, setDepartureDate] = useState<string>("");
	const [returnDate, setReturnDate] = useState<string>("");
	const [adults, setAdults] = useState<number>(1);
	const [child, setChild] = useState<number>(0);

	const myObj = {
		departureProp: departure,
		destinationProp: destination,
		departureDateProp: departureDate,
		returnDateProp: returnDate,
		adultsProp: adults,
		childProp: child,
	};
	//const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined);

	function changeDeparture(location: string) {
		setDeparture(location);
	}

	function changeDestination(location: string) {
		setDestination(location);
	}

	function changeDate(date?: string, dateOfReturn?: string) {
		date && setDepartureDate(date);
		dateOfReturn && setReturnDate(dateOfReturn);
	}

	function changePeopleNumberCallback(bigPeople: number, littlePeople: number) {
		setAdults(bigPeople);
		setChild(littlePeople);
	}
	function submitHandler() {}

	return (
		<>
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
			<Results {...myObj}></Results>
		</>
	);
};

export default SearchForm;
