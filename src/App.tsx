import SearchForm from "./components/SearchForm/SearchForm";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { useState } from "react";
import fetchSearch from "./utils/fetchSearch";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import * as type from "./common/types.ts";
import { cyan } from "@mui/material/colors";
import DataDisplay from "./components/dataDisplay/DataDisplay";
/* import FlightModal from "./components/flightModal/FlightModal.tsx"; */
import { dataContext } from "./common/contexts.ts";

function App() {
	const [resultPropsData, setResultPropsData] = useState<type.Root>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isDataUndefined, setIsDataUndefined] = useState<boolean>(false);

	const theme = createTheme({
		palette: {
			mode: "light",
			primary: cyan,
		},
	});

	async function onSubmitHandler1(url: string) {
		setIsLoading(true);
		const response = await fetchSearch(url).catch((err) => {
			console.log(err);
		});

		if (Object.keys(response.data).length === 0) {
			setIsDataUndefined(true);
		} else {
			setIsDataUndefined(false);
			setResultPropsData(response.data);
		}

		console.log("fetch avvenuta");
		setIsLoading(false);
	}

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className="pageContainer">
				<Navbar></Navbar>
				<SearchForm submitPassUrl={onSubmitHandler1}></SearchForm>
				<dataContext.Provider value={resultPropsData || null}>
					{isLoading && <p>Loading...</p>}
					{resultPropsData && <DataDisplay />}
					{isDataUndefined && <p>Non ci sono voli</p>}
					{/* <FlightModal></FlightModal> */}
				</dataContext.Provider>
			</div>
		</ThemeProvider>
	);
}

export default App;
