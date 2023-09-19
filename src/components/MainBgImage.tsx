import { Box } from "@mui/material";
import backgroundImg from "../assets/photo-1503220317375-aaad61436b1b.jpeg";

function MainBgImage() {
	return (
		<Box
			sx={{
				position: "absolute",
				left: 0,
				top: 0,
				width: "100%",
				height: "90vh",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundImage: `url(${backgroundImg})`,
				zIndex: -2,
			}}
		></Box>
	);
}

export default MainBgImage;
