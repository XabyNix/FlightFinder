import Calendar from "./calendar/Calendar";
import InputSearch from "./inputSearch/InputSearch";
import Options from "./options/Options";
import { useState } from "react";
import "./SearchForm.css";
import { endpoints } from "../../endpoints";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { it } from "date-fns/locale";
import { format } from "date-fns";
import { Button, Paper } from "@mui/material";

interface props {
	submitPassUrl(argUrl: string): void;
}

const SearchForm = ({ submitPassUrl }: props) => {
	const [departure, setDeparture] = useState<string>();
	const [destination, setDestination] = useState<string>();
	const [departureDate, setDepartureDate] = useState<Date>();
	const [returnDate, setReturnDate] = useState<Date>();
	const [adults, setAdults] = useState<number>(1);
	const [children, setChildren] = useState<number>(0);

	function changeDeparture(location: string) {
		setDeparture(location);
	}

	function changeDestination(location: string) {
		setDestination(location);
	}

	function changeDepartureDate(dateOfDeparture: Date) {
		setDepartureDate(dateOfDeparture);
	}
	function changeReturnDate(dateOfReturn: Date) {
		setReturnDate(dateOfReturn);
	}

	function changePeopleNumberCallback(bigPeople: number, littlePeople: number) {
		setAdults(bigPeople);
		setChildren(littlePeople);
	}

	function submitHandler(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formatedDepartureDate = format(departureDate!, "yyyy-MM-dd");
		const formattedReturnDate = returnDate ? format(returnDate, "yyyy-MM-dd") : undefined;
		console.log(
			departure,
			destination,
			formatedDepartureDate,
			formattedReturnDate,
			adults,
			children
		);
		const url =
			endpoints.flight_data +
			`from=${departure}` +
			`&to=${destination}` +
			`&departureDate=${formatedDepartureDate}` +
			(returnDate ? `&returnDate=${formattedReturnDate}` : "") +
			`&adults=${adults}` +
			`&children=${children}`;
		submitPassUrl(url);
	}

	return (
		<form onSubmit={submitHandler}>
			<Paper className="searchFrame" elevation={4} sx={{ borderRadius: 3 }}>
				<LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={it}>
					<InputSearch
						id="departureLocation"
						label="Aereoporto partenza"
						changeLocation={(location) => changeDeparture(location)}
					></InputSearch>

					<InputSearch
						id="destinationLocation"
						label="Aereoporto destinazione"
						changeLocation={changeDestination}
					></InputSearch>

					<Calendar
						isRequired={true}
						gridArea="departureDate"
						label="Data di partenza"
						stateDate={departureDate!}
						changeStateDate={changeDepartureDate}
					></Calendar>

					<Calendar
						disabled={departureDate ? false : true}
						isRequired={false}
						gridArea="returnDate"
						label="Data di ritorno"
						stateDate={returnDate!}
						changeStateDate={changeReturnDate}
						minDate={departureDate}
					></Calendar>

					<Options changePeopleNumber={changePeopleNumberCallback}></Options>

					<Button
						type="submit"
						id="searchButton"
						variant="contained"
						fullWidth
						sx={{
							height: "100%",
							fontSize: "1rem",
						}}
					>
						Cerca
					</Button>
				</LocalizationProvider>
			</Paper>
		</form>
	);
};

export default SearchForm;
