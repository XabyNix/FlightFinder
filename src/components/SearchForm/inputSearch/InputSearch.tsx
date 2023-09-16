import { useEffect, useState } from "react";
import fetchSearch from "../../../utils/fetchSearch";
import { endpoints } from "../../../endpoints";
import "./inputSearch.css";
import { Autocomplete, TextField } from "@mui/material";

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
	const [searchResults, setSearchResults] = useState<searchType[]>([]);
	const [value, setValue] = useState<searchType | null>(null);

	useEffect(() => {
		value && changeLocation(value.iataCode);
	});

	return (
		<div className="inputContainer" id={id}>
			<Autocomplete
				onInputChange={async (event, newValue) => {
					if (newValue.length > 2) {
						const res = await fetchSearch(endpoints.airport_code, newValue).catch((err) =>
							console.log(err)
						);
						res && setSearchResults(res);
					}
				}}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				value={value}
				noOptionsText="Non c'è nulla da mostrare "
				options={searchResults && searchResults}
				getOptionLabel={(option) => `${option.city} (${option.name}) - ${option.countryName}`}
				renderInput={(params) => <TextField {...params} required label={label}></TextField>}
				filterOptions={(x) => x}
			></Autocomplete>
		</div>
	);
}

export default InputSearch;
