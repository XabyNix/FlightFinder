import { useEffect, useState } from "react";
import fetchSearch from "../../../utils/fetchSearch";
import { endpoints } from "../../../endpoints";
import FocusTrap from "focus-trap-react";
import "./inputSearch.css";

interface props {
	changeLocation(location: string): void;
	placeholder: string;
}

type searchType = {
	city: string;
	countryName: string;
	iataCode: string;
	name: string;
};

function InputSearch({ changeLocation, placeholder }: props) {
	const [searchResults, setSearchResults] = useState<searchType[]>();
	const [inputValue, setInputValue] = useState<string>("");
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		if (inputValue) {
			console.log(inputValue);
			const delayFn = setTimeout(async () => {
				setSearchResults(await fetchSearch(endpoints.airport_code, inputValue));
			}, 1000);
			return () => clearTimeout(delayFn);
		}
	}, [inputValue]);

	function handleAirportClick(e: React.MouseEvent<HTMLParagraphElement>, code: string) {
		changeLocation(code);
		setInputValue(e.currentTarget.textContent!);
	}

	return (
		<div className="inputContainer">
			<input
				placeholder={placeholder}
				className="inputControl"
				value={inputValue}
				type="text"
				onChange={(e) => setInputValue(e.target.value)}
				onClick={() => setIsOpen(true)}
			/>

			{isOpen && (
				<FocusTrap
					focusTrapOptions={{
						initialFocus: false,
						allowOutsideClick: true,
						clickOutsideDeactivates: true,
						onDeactivate: () => setIsOpen(false),
					}}
				>
					<div className="info_container">
						{searchResults?.length ? (
							searchResults.map((airport, index) => (
								<p
									tabIndex={0}
									key={index}
									className="info"
									onClick={(event) => handleAirportClick(event, airport.iataCode)}
								>
									{airport.city}{" "}
									<span>
										{airport.name} ({airport.iataCode})
									</span>
								</p>
							))
						) : (
							<p tabIndex={0} className="info nothing">
								Nothing to show...
							</p>
						)}
					</div>
				</FocusTrap>
			)}
		</div>
	);
}

export default InputSearch;
