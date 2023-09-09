import SearchForm from "./components/SearchForm/SearchForm";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { useState } from "react";
import Results from "./components/results/Results";
import fetchSearch from "./utils/fetchSearch";

export interface Flight {
	departure: {
		code: string;
		time: Date;
	};
	arrival: {
		code: string;
		time: Date;
	};
	duration: string;
	price: {
		currency: string;
		total: string;
	};
}

function App() {
	const [resultPropsData, setResultPropsData] = useState<Flight[]>();
	const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined);

	async function onSubmitHandler(url: string) {
		const response = await fetchSearch(url);
		if (response === -1) {
			console.error("Error fetching data");
			return;
		}
		setResultPropsData(response);
		setIsLoading(false);
		console.log("fetch avvenuta con successo");
	}

	return (
		<div>
			<Navbar></Navbar>
			<SearchForm submitPassUrl={onSubmitHandler}></SearchForm>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				resultPropsData &&
				resultPropsData!.map((flight, index) => <Results key={index} {...flight}></Results>)
			)}
		</div>
	);
}

export default App;
