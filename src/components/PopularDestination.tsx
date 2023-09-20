import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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

function PopularDestination(props: prop) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: { xs: "column-reverse", md: props.reverse ? "row-reverse" : "row" },
				height: { xs: 1100, md: 500 },
				marginY: { xs: 5, md: 10 },
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
				<Typography variant="subtitle1">{props.paragraph}</Typography>
			</Box>
		</Box>
	);
}

export default PopularDestination;
