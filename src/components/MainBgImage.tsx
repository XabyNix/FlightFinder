import { Box } from "@mui/material";
import backgroundImg from "../assets/photo-1503220317375-aaad61436b1b.jpeg";

function MainBgImage() {
	return (
		<Box
			component={"img"}
			position="absolute"
			top={0}
			width="100vw"
			height="90vh"
			zIndex={-2}
			src={backgroundImg}
			sx={{ objectFit: "cover" }}
		></Box>
	);
}

export default MainBgImage;
