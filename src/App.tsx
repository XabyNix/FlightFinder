import SearchForm from "./components/SearchForm/SearchForm";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { useState } from "react";
import fetchSearch from "./utils/fetchSearch";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import * as type from "./common/types.ts";
import { cyan } from "@mui/material/colors";
import DataDisplay from "./components/dataDisplay/DataDisplay";

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

				{isLoading && <p>Loading...</p>}
				{resultPropsData && <DataDisplay {...resultPropsData} />}
				{isDataUndefined && <p>Non ci sono voli</p>}
			</div>
		</ThemeProvider>
	);
}

export default App;
