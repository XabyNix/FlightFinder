import "./Results.css";
import "../SearchForm/SearchForm.css";
import { Flight, CityInfo } from "../../App";

interface prop {
	data: Flight;
	cityInfo: CityInfo[];
}

const Results = ({ data, cityInfo }: prop) => {
	const arrow = "--->>>";

	const newDepartureDate = new Date(data.departure.time);
	const newArrivalDate = new Date(data.arrival.time);

	const departureDate = newDepartureDate.toLocaleDateString(undefined, { dateStyle: "medium" });
	const departureTime = newDepartureDate.toLocaleTimeString(undefined, {
		hour: "2-digit",
		minute: "2-digit",
	});
	const formattedDepartureDate = `${departureDate} alle ${departureTime}`;

	const arrivalDate = newArrivalDate.toLocaleDateString(undefined, { dateStyle: "medium" });
	const arrivalTime = newArrivalDate.toLocaleTimeString(undefined, {
		hour: "2-digit",
		minute: "2-digit",
	});
	const formattedArrivalDate = `${arrivalDate} alle ${arrivalTime}`;
	return (
		<div className="container">
			<div className="leftSide">
				<div className="hourDestination">
					<p>{data.departure.code}</p>
					<h4>{formattedDepartureDate}</h4>
				</div>
				<div className="hourDestination">
					<p>{arrow}</p>
					<p>{data.duration}</p>
				</div>
				<div className="hourDestination">
					<p>{data.arrival.code}</p>
					<h4>{formattedArrivalDate}</h4>
				</div>
			</div>
			<div className="rightSide">
				<p className="price">{data.price.total}</p>
				<button type="button" className="btn btnSelect">
					Seleziona
				</button>
			</div>
		</div>
	);
};

export default Results;
