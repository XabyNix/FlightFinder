import { useEffect, useState } from "react";
import fetchSearch from "../../../utils/fetchSearch";
import { endpoints } from "../../../endpoints";
import "./inputSearch.css";
import { Autocomplete, TextField } from "@mui/material";
/* import { setTimeout } from "timers/promises"; */

interface props {
	changeLocation(location: string): void;
	label: string;
	id: string;
}

type searchType = {
	name: string;
	countryName: string;
	iataCode: string;
	city: string;
};

function InputSearch({ label, id, changeLocation }: props) {
	const [options, setOptions] = useState<searchType[]>([]);
	const [inputValue, setInputValue] = useState<string>("");

	useEffect(() => {
		async function fetching() {
			const res = await fetchSearch(endpoints.airport_code, inputValue).catch((err) =>
				console.log(err)
			);
			res && setOptions(res);
		}
		console.log(options);
		inputValue.length > 0 && fetching();
	}, [inputValue]);

	return (
		<div className="inputContainer" id={id}>
			<Autocomplete
				onInputChange={(_, value, reason) => {
					reason === "input" && setInputValue(value);
				}}
				options={options}
				getOptionLabel={(option) => `${option.city} (${option.name}) - ${option.countryName}`}
				onChange={(_, newValue) => {
					newValue && changeLocation(newValue.iataCode);
				}}
				noOptionsText="Nulla da mostrare"
				renderInput={(params) => <TextField {...params} required label={label}></TextField>}
				filterOptions={(x) => x}
			></Autocomplete>
		</div>
	);
}

export default InputSearch;
