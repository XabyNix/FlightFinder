import { Box, Typography, useTheme } from "@mui/material";
import gela from "../../assets/gela.jpeg";
import berlino from "../../assets/berlino.jpg";
import barcellona from "../../assets/barcellona.jpg";
import "./cards.css";

const cards = [
	{
		place: "Barcellona",
		img: barcellona,
		description: "ciasjiodfhaslfhlahuifhaioufoahuiofofhewfwe",
	},
	{
		place: "Berlino",
		img: berlino,
		description: "ciasjiodfhaslfhlahuifhaioufoahuiofofhewfwe",
	},
	{
		place: "Gela",
		img: gela,
		description: "ciasjiodfhaslfhlahuifhaioufoahuiofofhewfwe",
	},
];

function Cards() {
	const theme = useTheme();
	return (
		<Box sx={{ display: "flex", justifyContent: "space-around" }}>
			{cards.map((card) => (
				<Box
					sx={{
						borderRadius: theme.shape.borderRadius,
						marginBottom: 20,
						width: 300,
						maxHeight: 300,
						overflow: "hidden",
						position: "relative",
						":hover .overlay": { bottom: 0 },
					}}
				>
					<Box
						component="img"
						src={card.img}
						sx={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
					/>
					<Box
						className="overlay"
						sx={{
							bgcolor: theme.palette.primary.main,
							padding: 2,
							width: "100%",
							position: "absolute",
							zIndex: 2,
							bottom: "-30%",
							transition: theme.transitions.create("all", {
								duration: theme.transitions.duration.standard,
							}),
						}}
					>
						<Typography variant="h5">{card.place}</Typography>

						<Typography variant="subtitle1" color="secondary">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quam dicta sit ex a
						</Typography>
					</Box>
				</Box>
			))}
		</Box>
	);
}

export default Cards;
/* <Card variant="outlined" sx={{ maxWidth: 250 }}>
					<Box>ciao</Box>
					<CardMedia component="img" height={250} image={card.img} />
				</Card> */
