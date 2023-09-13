import "./Results.css";
import "../SearchForm/SearchForm.css";
import { Flight, CityInfo } from "../../App";
import { Box } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import FlightModal from "../flightModal/FlightModal";
import * as type from "../../common/types.ts"
/* import { format } from "date-fns";
import { it } from "date-fns/locale"; */

const Results = (prop:) => {
	const arrow = "--->>>";
	const formatString = "dd-MM-yyyy 'alle' HH:mm";

	/* const newDepartureDate = new Date(data.departure.time);
	const newArrivalDate = new Date(data.arrival.time);

	const departureDate = format(newDepartureDate, formatString, { locale: it });

	const arrivalDate = format(newArrivalDate, formatString); */
	return (
		<Box
			display="flex"
			flexWrap="wrap"
			flexDirection={{ xs: "column", md: "row" }}
			justifyContent="space-between"
			px={3}
		>
			<Box
				className="leftSide"
				textAlign={{ xs: "center", md: "start" }}
				justifyContent={{ xs: "center" }}
			>
				<div className="hourDestination">
					<p>CATANIA - CTA{/* {cityInfo[data.departure.code].name} ({data.departure.code}) */}</p>
					<h4>30-05-2024 alle 06:02{/* {departureDate} */}</h4>
				</div>
				<div className="hourDestination">
					<KeyboardDoubleArrowRightIcon />
					<p>1H{/* {data.duration} */}</p>
				</div>
				<div className="hourDestination">
					<p>MILANO - MXP{/* {cityInfo[data.arrival.code].name} ({data.arrival.code}) */}</p>
					<h4>30-05-2024 alle 07:02{/* {arrivalDate} */}</h4>
				</div>
			</Box>
			<div className="rightSide">
				<p className="price">102,02{/* {data.price.total} */}</p>
				<FlightModal />
			</div>
		</Box>
	);
};

export default Results;
