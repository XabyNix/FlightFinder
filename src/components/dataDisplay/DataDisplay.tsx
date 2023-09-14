import { Container, Divider, Paper, Stack } from "@mui/material";
import * as type from "../../common/types.ts";
import Results from "../results/Results.tsx";

function DataDisplay(props: type.Root) {
	return (
		<Container maxWidth="md" sx={{ marginTop: "1rem" }}>
			<Paper variant="elevation" elevation={3} sx={{ p: 2 }}>
				<Stack direction="column" divider={<Divider variant="middle" />} spacing={3}>
					{props.data.map((flight, index) => {
						return <Results key={index} data={flight} cityInfo={props.city}></Results>;
					})}
				</Stack>
			</Paper>
		</Container>
	);
}

export default DataDisplay;
