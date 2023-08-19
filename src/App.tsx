import SearchForm from "./components/SearchForm/SearchForm";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { useEffect, useState } from "react";
import Results from "./components/results/Results";
import getData from "./fetchData";

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

type ResponseType = Flight[];

function App() {
	const [resultPropsData, setResultPropsData] = useState<ResponseType>();
	const [isLoading, setIsLoading] = useState(true);
	const url = "http://localhost:3000/flights/data";

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await getData(url);
				setResultPropsData(response.data);
				setIsLoading(false);
			} catch (error) {
				console.error("Error fetching data", error);
				setIsLoading(false);
			}
		}
		fetchData();
	}, []);

	resultPropsData && console.log(resultPropsData);
	return (
		<div>
			<Navbar></Navbar>
			<SearchForm></SearchForm>

			{isLoading ? <p>Loading...</p> : resultPropsData && resultPropsData.map((flight, index) => <Results key={index} {...flight}></Results>)}
		</div>
	);
}

export default App;
