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
import Cards from "./components/cards/Cards.tsx";
import Footer from "./components/Footer.tsx";
/* 
Creare route per le varie pagine e aggiungere la lista dei voli in una nuova route in modo da usare anche
 l'ordinamento
 Aggiungere che quando si clicca sul pulsante ci si sposta direttamente alla ricerca e quando si clicca sul form
 ci si sposta atuomaticamente su di esso.
*/
function App() {
	const [resultPropsData, setResultPropsData] = useState<type.Root>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isDataUndefined, setIsDataUndefined] = useState<boolean>(false);

	let theme = createTheme({
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
		},
	});

	theme = createTheme(theme, {
		palette: {
			myGray: {
				main: "#8a8888",
			},
		},
	});

	async function onSubmitHandler1(url: string) {
		setIsLoading(true);
		setIsDataUndefined(false);
		const response = await fetchSearch(url).catch((err) => {
			console.log(err);
		});

		if (Object.keys(response.data).length === 0) {
			setIsDataUndefined(true);
		} else {
			setResultPropsData(response.data);
		}

		console.log("fetch avvenuta");
		setIsLoading(false);
	}

	return (
		<ThemeProvider theme={theme}>
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

				<PopularDestination></PopularDestination>
				<Cards></Cards>
			</Box>
			<Footer></Footer>
		</ThemeProvider>
	);
}

export default App;
