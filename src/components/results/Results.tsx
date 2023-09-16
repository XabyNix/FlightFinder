import "./Results.css";
import { Box } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import FlightModal from "../flightModal/FlightModal";
import * as type from "../../common/types.ts";
import format from "date-fns/format";

interface prop {
	data: type.Daum;
	cityInfo: type.City;
}

const Results = ({ data, cityInfo }: prop) => {
	const formatString = "dd-MM-yyyy 'alle' HH:mm";

	return (
		<Box
			sx={{
				display: "grid",
				gridTemplateColumns: { xs: "repeat(3, 1fr)", md: "repeat(3, 2fr) 1fr 2fr" },
				rowGap: "1vh",
				gridTemplateAreas: {
					xs: ' "dep0 dur0 ret0" "dep1 dur1 ret1" "rs rs rs"',
					md: ' "dep0 dur0 ret0 . rs" "dep1 dur1 ret1 . rs"',
				},
			}}
		>
			{data.itineraries.flatMap((value, index) => {
				const departureTime = value.segments[0].departure.at;
				const returnTime = value.segments[value.segments.length - 1].arrival.at;
				const departureLocation =
					cityInfo[value.segments[0].departure.iataCode].name +
					" - " +
					value.segments[0].departure.iataCode;
				const returnLocation =
					cityInfo[value.segments[value.segments.length - 1].arrival.iataCode].name +
					" - " +
					value.segments[value.segments.length - 1].arrival.iataCode;
				const departureDateTime = new Date(departureTime);
				const returnDateTime = new Date(returnTime);
				return [
					<Box
						key={`departure-${index}`}
						sx={{ gridArea: `dep${index}` }}
						className="hourDestination"
					>
						<p>{departureLocation}</p>
						<h4>{format(departureDateTime, formatString)}</h4>
					</Box>,
					<Box
						key={`duration-${index}`}
						sx={{ gridArea: `dur${index}`, alignItems: "center" }}
						className="hourDestination"
					>
						{value.segments.length > 1 ? `${value.segments.length} scali` : "Diretto"}
						<KeyboardDoubleArrowRightIcon />
						<p>{value.duration}</p>
					</Box>,

					<Box key={`return-${index}`} sx={{ gridArea: `ret${index}` }} className="hourDestination">
						<p>{returnLocation}</p>
						<h4>{format(returnDateTime, formatString)}</h4>
					</Box>,
				];
			})}

			<Box className="rightSide" gridArea="rs">
				<p className="price">
					{data.price.total} {data.price.currency}
				</p>
				<FlightModal />
			</Box>
		</Box>
	);
};

export default Results;
