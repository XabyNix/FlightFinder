import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const slogan = { main: "Il tuo Viaggio la tua Storia", subTitle: "Scegli la tua destinazione" };

export default function Main({ formRef }: { formRef: React.RefObject<HTMLFormElement> }) {
	const theme = useTheme();

	function handleClick() {
		formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
	}

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
			<Typography
				variant="h2"
				sx={{ paddingY: 3, color: "white", textShadow: theme.textShadow.main }}
			>
				{slogan.main}
			</Typography>
			<Typography
				variant="h5"
				sx={{
					paddingBottom: 2,
					fontWeight: "bold",
					color: "white",
					textShadow: theme.textShadow.darker,
				}}
			>
				{slogan.subTitle}
			</Typography>
			<Button
				variant="contained"
				sx={{ padding: 2, width: "120px", fontSize: "1rem" }}
				onClick={handleClick}
			>
				Prenota
			</Button>
		</Box>
	);
}
