import { TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator } from "@mui/lab";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import { Box, Button, Dialog } from "@mui/material";
import { useContext, useState } from "react";
import { dictionariesContext } from "../../../common/contexts.ts";
import { format } from "date-fns";
import * as type from "../../../common/types.ts";

interface prop {
	flightData: type.Daum;
}

function FlightModal({ flightData }: prop) {
	const [open, setOpen] = useState<boolean>(false);

	function handleClickOpen() {
		setOpen(true);
	}
	function handleClose() {
		setOpen(false);
	}

	const dictionaries = useContext(dictionariesContext);

	return (
		<>
			<Button sx={{ width: "100%" }} variant="contained" onClick={handleClickOpen}>
				Seleziona
			</Button>

			<Dialog open={open} onClose={handleClose} fullWidth>
				{flightData ? (
					<Timeline
						position="right"
						sx={{
							[`& .${timelineItemClasses.root}:before`]: {
								flex: 0,
								padding: 0,
							},
						}}
					>
						{flightData.itineraries.map((value, index) => (
							<div key={index}>
								{index === 0 ? "Partenza" : "Ritorno"}

								{value.segments.flatMap((segment, segmentIndex) => {
									const depIataCode = segment.departure.iataCode;
									const retIataCode = segment.arrival.iataCode;

									const dataToDisplay = {
										departure: {
											location: dictionaries?.locations[depIataCode]
												? dictionaries.locations[depIataCode].cityName
												: depIataCode,
											date: format(new Date(segment.departure.at), "dd-MM-yyyy 'alle' HH:mm"),
											company: dictionaries?.carriers[segment.carrierCode] || "N/A",
										},
										arrival: {
											location: dictionaries?.locations[retIataCode]
												? dictionaries.locations[retIataCode].cityName
												: retIataCode,
											date: format(new Date(segment.departure.at), "dd-MM-yyyy 'alle' HH:mm"),
											company: dictionaries?.carriers[segment.carrierCode] || "N/A",
										},
									};
									return [
										<TimelineItem key={`segment-${segmentIndex}-departure`}>
											<TimelineSeparator>
												<TimelineDot variant="outlined" color="primary"></TimelineDot>
												<TimelineConnector />
											</TimelineSeparator>
											<TimelineContent>
												{dataToDisplay.departure.location}
												{dataToDisplay.departure.date}
												{dataToDisplay.departure.company}
											</TimelineContent>
										</TimelineItem>,
										<TimelineItem key={`segment-${segmentIndex}-arrival`}>
											<TimelineSeparator>
												<TimelineDot variant="outlined" color="primary"></TimelineDot>
												{/* <TimelineConnector
													sx={{
														background: "none",
														border: "1px #bdbdbd dashed",
													}}
												/> */}
											</TimelineSeparator>
											<TimelineContent>
												{dataToDisplay.arrival.location}
												{dataToDisplay.arrival.date}
												{dataToDisplay.arrival.company}
											</TimelineContent>
										</TimelineItem>,
									];
								})}
								<Box></Box>
							</div>
						))}
					</Timeline>
				) : (
					<p>dati non disponibili</p>
				)}
			</Dialog>
		</>
	);
}

export default FlightModal;
