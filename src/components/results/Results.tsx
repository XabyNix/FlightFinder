import "./Results.css";
import "../SearchForm/SearchForm.css";
import { Flight, CityInfo } from "../../App";
import { format } from "date-fns";
import { it } from "date-fns/locale";

interface prop {
	data: Flight;
	cityInfo: CityInfo;
}

const Results = ({ data, cityInfo }: prop) => {
	const arrow = "--->>>";
	const formatString = "dd-MM-yyyy 'alle' HH:mm";

	const newDepartureDate = new Date(data.departure.time);
	const newArrivalDate = new Date(data.arrival.time);

	const departureDate = format(newDepartureDate, formatString, { locale: it });

	const arrivalDate = format(newArrivalDate, formatString);
	return (
		<div className="container">
			<div className="leftSide">
				<div className="hourDestination">
					<p>
						{cityInfo[data.departure.code].name} ({data.departure.code})
					</p>
					<h4>{departureDate}</h4>
				</div>
				<div className="hourDestination">
					<p>{arrow}</p>
					<p>{data.duration}</p>
				</div>
				<div className="hourDestination">
					<p>
						{cityInfo[data.arrival.code].name} ({data.arrival.code})
					</p>
					<h4>{arrivalDate}</h4>
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
