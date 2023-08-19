import "./SearchForm.css";
import DateSelect from "./DateSelect/DateSelect";
import Options from "./options/Options";

const SearchForm = () => {
	return (
		<form action="#">
			<div className="searchFrame">
				<div className="inputContainer">
					<input className="inputControl" type="text" name="destination" placeholder="Dove vuoi andare?" />
				</div>
				<DateSelect placeholder="Data di partenza" name="departureDate"></DateSelect>
				<DateSelect placeholder="Data di ritorno" name="returnDate"></DateSelect>

				<Options></Options>

				<div className="inputContainer">
					<button className="inputControl btn" type="submit">
						Cerca
					</button>
				</div>
			</div>
		</form>
	);
};

export default SearchForm;
