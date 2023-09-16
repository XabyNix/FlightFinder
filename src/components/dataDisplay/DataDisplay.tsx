import { Container, Divider, Paper, Stack } from "@mui/material";
import Results from "../results/Results.tsx";
import { useContext } from "react";
import { dataContext } from "../../common/contexts.ts";

/* props: type.Root */
function DataDisplay() {
	const dataFromContext = useContext(dataContext);
	console.log(dataFromContext);
	return (
		<Container maxWidth="md" sx={{ marginTop: "1rem" }}>
			<Paper variant="elevation" elevation={3} sx={{ p: 2 }}>
				<Stack direction="column" divider={<Divider variant="middle" />} spacing={3}>
					{dataFromContext &&
						dataFromContext.data.map((flight, index) => {
							return <Results key={index} data={flight} cityInfo={dataFromContext.city}></Results>;
						})}
				</Stack>
			</Paper>
		</Container>
	);
}

export default DataDisplay;
