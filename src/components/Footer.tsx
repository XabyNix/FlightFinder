import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Divider, IconButton } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const links = ["Tutti i Viaggi", "Su di noi", "Contattaci", "Termini e condizioni"];
const indirizzo = "Via Roma 38, Catania (CT) 95125";
const contatti = " Dalle 9:00 alle 17:00 dal Lunedì al Venerdì Cell: +39 1234567890";
const icons = [<InstagramIcon />, <TwitterIcon />, <FacebookIcon />];

function Footer() {
	return (
		<Stack
			width={"100%"}
			spacing={2}
			useFlexGap
			bgcolor={(theme) => theme.palette.primary.main}
			color={(theme) => theme.palette.primary.contrastText}
			paddingY={3}
		>
			<Stack direction={{ xs: "column", md: "row" }} justifyContent={"center"}>
				{links.map((link, index) => (
					<Button key={index}>
						<Typography color={"secondary"} variant="subtitle2">
							{link}
						</Typography>
					</Button>
				))}
			</Stack>

			<Stack
				direction={{ xs: "column", md: "row" }}
				spacing={3}
				justifyContent="center"
				textAlign="center"
				useFlexGap
			>
				<Typography variant="caption">{indirizzo}</Typography>
				<Typography variant="caption">{contatti}</Typography>
			</Stack>

			<Stack direction={"row"} justifyContent={"center"}>
				{icons.map((icon, index) => (
					<IconButton key={index}>{icon}</IconButton>
				))}
			</Stack>
			<Divider
				sx={{
					borderBottomWidth: "thin",
					borderColor: (theme) => theme.palette.primary.contrastText,
				}}
			/>
		</Stack>
	);
}

export default Footer;
