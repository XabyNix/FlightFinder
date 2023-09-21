import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import newYork from "../assets/istockphoto-1406960186-612x612.jpg";
import roma from "../assets/istockphoto-539115110-612x612.jpg";
import bahamas from "../assets/bahamas.jpg";
import parigi from "../assets/parigi.jpg";

const styleImage = {
	backgroundPosition: "center",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	borderRadius: 2,
};

interface prop {
	reverse?: boolean;
	title: string;
	paragraph: string;
	imgOne: string;
	imgTwo: string;
}

const popularData = [
	{
		title: "Roma, New York",
		paragraph:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit eveniet similique eius rem officiis deleniti tenetur cum excepturi! Natus nihil cumque, doloremque non provident earum voluptas ducimus magni! Eius!Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit eveniet similique eius rem officiis deleniti tenetur cum excepturi! Natus nihil cumque, doloremque non provident earum voluptas ducimus magni! Eius!Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit eveniet similique eius rem officiis deleniti tenetur cum excepturi! Natus nihil cumque, doloremque non provident earum voluptas ducimus magni! Eius!",
		imgOne: roma,
		imgTwo: newYork,
	},
	{
		title: "Pargi, Bahamas",
		paragraph:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit eveniet similique eius rem officiis deleniti tenetur cum excepturi! Natus nihil cumque, doloremque non provident earum voluptas ducimus magni! Eius!Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit eveniet similique eius rem officiis deleniti tenetur cum excepturi! Natus nihil cumque, doloremque non provident earum voluptas ducimus magni! Eius!Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit eveniet similique eius rem officiis deleniti tenetur cum excepturi! Natus nihil cumque, doloremque non provident earum voluptas ducimus magni! Eius!",
		imgOne: parigi,
		imgTwo: bahamas,
	},
];

const text = {
	title: "Viaggi più popolari",
	paragraph: "Viagga seguendo le mete più richieste",
};

function PopularDestination() {
	return (
		<>
			<Box
				sx={{
					textAlign: "center",
					marginY: 10,
				}}
			>
				<Typography color="secondary" variant="h3">
					{text.title}
				</Typography>
				<Typography variant="h6">{text.paragraph}</Typography>
			</Box>

			{popularData.map((value, index) => (
				<PopularSection key={index} reverse={index % 2 ? true : false} {...value}></PopularSection>
			))}
		</>
	);
}

export default PopularDestination;

function PopularSection(props: prop) {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column-reverse", md: props.reverse ? "row-reverse" : "row" },
					height: { xs: 1100, md: 500 },
					marginBottom: { xs: 5, md: 20 },
				}}
			>
				<Box
					sx={{
						width: "100%",
						height: "100%",
						display: "grid",
						gap: "0 1.5rem",
						gridTemplateColumns: "repeat(2, 1fr)",
						gridTemplateRows: "1fr 6fr 1fr",
					}}
				>
					<Box
						sx={{
							...styleImage,
							gridColumn: "1",
							gridRow: "1 / 3",
							backgroundImage: `url(${props.imgOne})`,
						}}
					></Box>
					<Box
						sx={{
							...styleImage,
							gridColumn: "2",
							gridRow: "2 / 4",
							backgroundImage: `url(${props.imgTwo})`,
						}}
					></Box>
				</Box>

				<Box sx={{ flexShrink: 2, margin: { xs: "2rem 0", md: "0 1rem" } }}>
					<Typography variant="h4">{props.title}</Typography>
					<Typography variant="subtitle1" sx={{ color: "myGray.main" }}>
						{props.paragraph}
					</Typography>
				</Box>
			</Box>
		</>
	);
}
