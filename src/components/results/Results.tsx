import "./Results.css";
import "../SearchForm/SearchForm.css";
import { Flight } from "../../App";
/*
export interface ResponseType {
	departure: {
		code: string;
		time: Date;
	};
	arrival: {
		code: string;
		time: Date;
	};
	duration: Date;
	price: {
		currency: string;
		total: string;
	};
}*/

const Results = (props: Flight) => {
	const arrow = "--->>>";

	const newDepartureDate = new Date(props.departure.time);
	const newArrivalDate = new Date(props.arrival.time);

	const departureDate = newDepartureDate.toLocaleDateString(undefined, { dateStyle: "medium" });
	const departureTime = newDepartureDate.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
	const formattedDepartureDate = `${departureDate} alle ${departureTime}`;

	const arrivalDate = newArrivalDate.toLocaleDateString(undefined, { dateStyle: "medium" });
	const arrivalTime = newArrivalDate.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
	const formattedArrivalDate = `${arrivalDate} alle ${arrivalTime}`;
	return (
		<div className="container">
			<div className="leftSide">
				<div className="hourDestination">
					<p>{props.departure.code}</p>
					<h4>{formattedDepartureDate}</h4>
				</div>
				<div className="hourDestination">
					<p>{arrow}</p>
					<p>{props.duration}</p>
				</div>
				<div className="hourDestination">
					<p>{props.arrival.code}</p>
					<h4>{formattedArrivalDate}</h4>
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
