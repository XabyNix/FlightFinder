import SearchForm from "./components/SearchForm/SearchForm";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import fetchSearch from "./utils/fetchSearch";
import { Box, CircularProgress, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import * as type from "./common/types.ts";
import DataDisplay from "./components/SearchForm/dataDisplay/DataDisplay.tsx";
import { dataContext } from "./common/contexts.ts";
import { teal } from "@mui/material/colors";
import MainBgImage from "./components/MainBgImage.tsx";
import Main from "./components/Main.tsx";
import "./App.css";
import PopularDestination from "./components/PopularDestination.tsx";
import { popular } from "./common/localesPhrases.ts";
import newYork from "./assets/istockphoto-1406960186-612x612.jpg";
import roma from "./assets/istockphoto-539115110-612x612.jpg";
import bahamas from "./assets/bahamas.jpg";
import parigi from "./assets/parigi.jpg";
import Cards from "./components/cards/Cards.tsx";

function App() {
	const [resultPropsData, setResultPropsData] = useState<type.Root>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isDataUndefined, setIsDataUndefined] = useState<boolean>(false);

	const myTheme = createTheme({
		components: {
			MuiButtonBase: {
				defaultProps: {
					disableRipple: true,
				},
			},
		},
		palette: {
			mode: "light",
			primary: teal,
			secondary: { main: "#96000f" },
		},
		typography: {
			fontFamily: "Poppins",
			h2: {
				fontWeight: 600,
			},
			h3: {
				fontWeight: 800,
			},
			h4: {
				fontWeight: 600,
			},
			subtitle1: { color: "GrayText" },
		},
	});

	const popularData1 = {
		title: popular[0].title,
		paragraph: popular[0].paragraph,
		imgOne: roma,
		imgTwo: newYork,
	};
	const popularData2 = {
		title: popular[1].title,
		paragraph: popular[1].paragraph,
		imgOne: parigi,
		imgTwo: bahamas,
	};

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
		<ThemeProvider theme={myTheme}>
			<CssBaseline />
			<Navbar></Navbar>
			<MainBgImage></MainBgImage>
			<Box className="pageContainer">
				<Main></Main>
				<SearchForm submitPassUrl={onSubmitHandler1}></SearchForm>

				<dataContext.Provider value={resultPropsData || null}>
					{isLoading && <CircularProgress sx={{ margin: "auto" }}></CircularProgress>}
					{resultPropsData && <DataDisplay />}
					{isDataUndefined && <p>Non ci sono voli</p>}
				</dataContext.Provider>
				<PopularDestination {...popularData1}></PopularDestination>
				<PopularDestination {...popularData2} reverse={true}></PopularDestination>
				<Cards></Cards>
			</Box>
		</ThemeProvider>
	);
}

export default App;
