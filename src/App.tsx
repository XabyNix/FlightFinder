import Navbar from "./components/navbar/Navbar";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { teal } from "@mui/material/colors";
import Footer from "./components/Footer.tsx";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Index.tsx";
import About from "./pages/About/Index.tsx";
import Register from "./pages/Register/Index.tsx";
import LogIn from "./pages/LogIn/Index.tsx";
import DataDisplay from "./pages/Flight-list/Index.tsx";

/* 
1: ordinamento
 Aggiungere che quando si clicca sul pulsante ci si sposta direttamente alla ricerca e quando si clicca sul form
 ci si sposta atuomaticamente su di esso.
 Aggiungere pulsante dark mode e pulsante per la ricerca di voli sola andata o andata e ritorno.
 Creare l'effetto a sega nel footer.
 l'immagine di sfondo non si ridemnsiona insieme allo zoom errore ? boh
*/

declare module "@mui/material/styles" {
	interface Theme {
		textShadow: {
			main: string;
			darker: string;
		};
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		textShadow?: {
			main?: string;
		};
	}
}

function App() {
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
		textShadow: {
			main: "-2px 5px 10px rgba(0,0,0,0.6)",
			darker: "4px 4px 5px rgba(0,0,0,0.5)",
		},
		palette: {
			myGray: {
				main: "#8a8888",
			},
		},
	});

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Navbar></Navbar>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<LogIn />} />
					<Route path="/flight-list" element={<DataDisplay />} />
				</Routes>

				<Footer></Footer>
			</ThemeProvider>
		</>
	);
}

export default App;
