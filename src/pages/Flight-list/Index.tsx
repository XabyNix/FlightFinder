import { Container, Divider, Paper, Stack } from "@mui/material";
import Results from "../../components/results/Results.tsx";
import { dictionariesContext } from "../../common/contexts.ts";
import { useLocation } from "react-router-dom";
import * as type from "../../common/types.ts";
function DataDisplay() {
	const { state }: { state: type.Root } = useLocation();
	return (
		<Container
			maxWidth="md"
			sx={{ maxHeight: "700px", marginTop: "1rem", overflowY: "auto", p: 2 }}
		>
			<Paper variant="elevation" elevation={3} sx={{ p: 2 }}>
				<Stack direction="column" divider={<Divider flexItem />} spacing={3}>
					<dictionariesContext.Provider value={state.dictionaries}>
						{state.data.map((flight, index) => {
							return <Results key={index} data={{ ...flight }}></Results>;
						})}
					</dictionariesContext.Provider>
				</Stack>
			</Paper>
		</Container>
	);
}

export default DataDisplay;
