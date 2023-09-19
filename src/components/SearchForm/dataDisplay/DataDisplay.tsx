import { Container, Divider, Paper, Stack } from "@mui/material";
import Results from "./results/Results.tsx";
import { useContext } from "react";
import { dataContext, dictionariesContext } from "../../../common/contexts.ts";

/* props: type.Root */
function DataDisplay() {
	const dataFromContext = useContext(dataContext);

	return (
		<Container
			maxWidth="md"
			sx={{ maxHeight: "700px", marginTop: "1rem", overflowY: "auto", p: 2 }}
		>
			<Paper variant="elevation" elevation={3} sx={{ p: 2 }}>
				<Stack direction="column" divider={<Divider flexItem />} spacing={3}>
					{dataFromContext && (
						<dictionariesContext.Provider value={dataFromContext.dictionaries}>
							{dataFromContext.data.map((flight, index) => {
								return <Results key={index} data={{ ...flight }}></Results>;
							})}
						</dictionariesContext.Provider>
					)}
				</Stack>
			</Paper>
		</Container>
	);
}

export default DataDisplay;
