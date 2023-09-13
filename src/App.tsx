import SearchForm from "./components/SearchForm/SearchForm";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { useState } from "react";
import Results from "./components/results/Results";
import fetchSearch from "./utils/fetchSearch";
import {
	Container,
	CssBaseline,
	Divider,
	Paper,
	Stack,
	ThemeProvider,
	createTheme,
} from "@mui/material";
import * as type from "./common/types.ts";
import { cyan } from "@mui/material/colors";
import DataDisplay from "./components/dataDisplay/DataDisplay";

/* export interface Flight {
	departure: {
		code: string;
		time: string;
	};
	arrival: {
		code: string;
		time: string;
	};
	duration: string;
	price: {
		currency: string;
		total: string;
	};
}
export interface CityInfo {
	[key: string]: {
		name: string;
		country: string;
	};
}

interface responseType {
	data: Flight[];
	city: CityInfo;
} */

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
				{/* {resultPropsData &&
				resultPropsData.data.map((flight, index) => (
					<Results key={index} data={{ ...flight }} cityInfo={resultPropsData.city}></Results>
				))} */}
				{resultPropsData && <DataDisplay {...resultPropsData} />}

				<Container maxWidth="md" sx={{ marginTop: "1rem" }}>
					<Paper variant="elevation" elevation={3} sx={{ py: 1.5 }}>
						<Stack direction="column" divider={<Divider variant="middle" />} spacing={3}>
							<Results></Results>
							<Results></Results>
							<Results></Results>
							<Results></Results>
							<Results></Results>
							<Results></Results>
							<Results></Results>
						</Stack>
					</Paper>
				</Container>

				{isDataUndefined && <p>Non ci sono voli</p>}
			</div>
		</ThemeProvider>
	);
}

export default App;
