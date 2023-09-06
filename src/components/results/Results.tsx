import format from "date-fns/format";
import { useRef } from "react";
import { endpoints } from "../../endpoints";
import "./Results.css";
import "../SearchForm/SearchForm.css";

interface props {
	departureProp: string;
	destinationProp: string;
	departureDateProp: string;
	returnDateProp: string;
	adultsProp: number;
	childProp: number;
}

interface Flight {
	departure: {
		code: string;
		time: Date;
	};
	arrival: {
		code: string;
		time: Date;
	};
	duration: string;
	price: {
		currency: string;
		total: string;
	};
}
const Results = (states: props) => {
	const resultData = useRef<Flight[]>();

	const arrow = "--->>>";
	const dateFormat = "d-MMM-yyyy HH:mm";

	const date = { departure: new Date(props.departure.time), arrival: new Date(props.arrival.time) };

	const departureDateString = format(date.departure, dateFormat);
	const arrivalDateString = format(date.arrival, dateFormat);

	async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		console.log({ ...states });

		const url = `${endpoints.flight_data}from=${states.departureProp}&to=${states.destinationProp}&departureDate=${states.departureDateProp}&adults=${states.adultsProp}`;
		resultData.current = await fetchSearch(url);
	}
	return (
		<div className="container">
			<div className="leftSide">
				<div className="hourDestination">
					<p>{props.departure.code}</p>
					<h4>{departureDateString}</h4>
				</div>
				<div className="hourDestination">
					<p>{arrow}</p>
					<p>{props.duration}</p>
				</div>
				<div className="hourDestination">
					<p>{props.arrival.code}</p>
					<h4>{arrivalDateString}</h4>
				</div>
			</div>
			<div className="rightSide">
				<p className="price">{props.price.total}</p>
				<button type="button" className="btn btnSelect">
					Seleziona
				</button>
			</div>
		</div>
	);
};

export default Results;
/* const departureTime = newDepartureDate.toLocaleTimeString(undefined, {
		hour: "2-digit",
		minute: "2-digit",
	});
	const formattedDepartureDate = `${departureDate} alle ${departureTime}`;

	const arrivalDate = newArrivalDate.toLocaleDateString(undefined, { dateStyle: "medium" });
	const arrivalTime = newArrivalDate.toLocaleTimeString(undefined, {
		hour: "2-digit",
		minute: "2-digit",
	});
	const formattedArrivalDate = `${arrivalDate} alle ${arrivalTime}`; */
