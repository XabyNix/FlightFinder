import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const slogan = { main: "Il tuo Viaggio la tua Storia", subTitle: "Scegli la tua destinazione" };

export default function Main() {
	return (
		<Box
			sx={{
				display: "grid",
				placeContent: "center",
				justifyItems: "center",
				height: "90vh",
				width: "100%",
			}}
		>
			<Typography variant="h2" sx={{ paddingY: 3, color: "white" }}>
				{slogan.main}
			</Typography>
			<Typography variant="h5" sx={{ paddingBottom: 2, color: "white" }}>
				{slogan.subTitle}
			</Typography>
			<Button variant="contained" sx={{ padding: 2, width: "120px", fontSize: "1rem" }}>
				Prenota
			</Button>
		</Box>
	);
}
