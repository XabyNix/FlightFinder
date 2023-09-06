import SearchForm from "./components/SearchForm/SearchForm";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
	return (
		<div>
			<Navbar></Navbar>
			<SearchForm></SearchForm>

			{/* {resultPropsData!.map((flight, index) => (
				<Results key={index} {...flight}></Results>
			))} */}
		</div>
	);
}

export default App;
