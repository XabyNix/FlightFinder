import { Box, Card, CardContent, CardHeader, CardMedia, Typography, useTheme } from "@mui/material";
import gela from "../../assets/gela.jpeg";
import berlino from "../../assets/berlino.jpg";
import barcellona from "../../assets/barcellona.jpg";

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

const text = {
	title: "Voli in sconto",
	paragraph: "Viaggia a basso costo verso le migliori destinazioni scelte per te",
};

const hoverStyle = {
	":hover .overlay": { top: "50%" },
	":hover .header": { height: "50%" },
};

function Cards() {
	const theme = useTheme();
	return (
		<>
			<Box
				sx={{
					textAlign: "center",
					marginBottom: 10,
				}}
			>
				<Typography color="primary" variant="h3">
					{text.title}
				</Typography>
				<Typography variant="h6">{text.paragraph}</Typography>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					justifyContent: "center",
					gap: 5,
					alignItems: "center",
				}}
			>
				{cards.map((card) => (
					<Card
						key={card.place}
						elevation={10}
						sx={{
							...hoverStyle,
							width: 250,
							height: 300,
							position: "relative",
						}}
					>
						<CardHeader
							className="header"
							sx={{
								position: "absolute",
								bgcolor: "rgba(255, 255, 255, 0.5)",
								width: "100%",
								transition: theme.transitions.create("all", {
									duration: theme.transitions.duration.short,
								}),
								height: "3rem",
							}}
							title={<Typography variant="h5">{card.place}</Typography>}
						></CardHeader>
						<CardMedia height="100%" component="img" src={card.img}></CardMedia>
						<CardContent
							className="overlay"
							sx={{
								position: "absolute",
								top: "100%",
								width: "100%",
								bgcolor: theme.palette.primary.light,
								transition: theme.transitions.create("all", {
									duration: theme.transitions.duration.standard,
								}),
							}}
						>
							<Typography variant="subtitle1" color="secondary.dark">
								L'hai trovato brav* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
								quam dicta sit ex a
							</Typography>
						</CardContent>
					</Card>
				))}
			</Box>
		</>
	);
}

export default Cards;
