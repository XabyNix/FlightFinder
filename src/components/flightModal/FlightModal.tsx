import { TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator } from "@mui/lab";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import { Button, Dialog } from "@mui/material";
import { useContext, useState } from "react";
import { flightContext } from "../../common/contexts";
import { format } from "date-fns";

function FlightModal() {
	const [open, setOpen] = useState<boolean>(false);

	function handleClickOpen() {
		setOpen(true);
	}
	function handleClose() {
		setOpen(false);
	}

	const flightData = useContext(flightContext);

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
						{flightData.data.itineraries.map((value, index) => (
							<div key={index}>
								{index === 0 ? "Partenza" : "Ritorno"}
								{value.segments.flatMap((segment, segmentIndex) => {
									const depIataCode = segment.departure.iataCode;
									const arrIataCode = segment.arrival.iataCode;

									const departure = flightData.cityInfo[depIataCode]
										? flightData.cityInfo[depIataCode]
										: depIataCode;

									const arrival = flightData.cityInfo[arrIataCode]
										? flightData.cityInfo[arrIataCode]
										: arrIataCode;

									return [
										<TimelineItem key={`segment-${segmentIndex}-departure`}>
											<TimelineSeparator>
												<TimelineDot variant="outlined" color="primary"></TimelineDot>
												<TimelineConnector />
											</TimelineSeparator>
											<TimelineContent>
												{departure}
												{format(new Date(segment.departure.at), "dd-MM-yyyy 'alle' HH:mm")}
											</TimelineContent>
										</TimelineItem>,
										<TimelineItem key={`segment-${segmentIndex}-arrival`}>
											<TimelineSeparator>
												<TimelineDot variant="outlined" color="primary"></TimelineDot>
												<TimelineConnector
													sx={{
														background: "none",
														border: "1px #bdbdbd dashed",
													}}
												/>
											</TimelineSeparator>
											<TimelineContent>{arrival}</TimelineContent>
										</TimelineItem>,
									];
								})}
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
