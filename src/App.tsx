import SearchForm from "./components/SearchForm/SearchForm";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { useState } from "react";
import Results from "./components/results/Results";
import fetchSearch from "./utils/fetchSearch";

export interface Flight {
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
}

function App() {
	const [resultPropsData, setResultPropsData] = useState<responseType>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isDataUndefined, setIsDataUndefined] = useState<boolean>(false);

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
		<div>
			<Navbar></Navbar>
			<SearchForm submitPassUrl={onSubmitHandler1}></SearchForm>

			{isLoading && <p>Loading...</p>}
			{resultPropsData &&
				resultPropsData.data.map((flight, index) => (
					<Results key={index} data={{ ...flight }} cityInfo={resultPropsData.city}></Results>
				))}
			{isDataUndefined && <p>Non ci sono voli</p>}
		</div>
	);
}

export default App;
