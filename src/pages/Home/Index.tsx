import Box from "@mui/material/Box";
import Cards from "../../components/cards/Cards";
import PopularDestination from "../../components/PopularDestination";
import SearchForm from "../../components/SearchForm/SearchForm";
import Main from "../../components/Main";
import MainBgImage from "../../components/MainBgImage";
import CircularProgress from "@mui/material/CircularProgress";
import fetchSearch from "../../utils/fetchSearch";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Index() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isDataUndefined, setIsDataUndefined] = useState<boolean>(false);

	const formRef = useRef<HTMLFormElement>(null);

	const navigate = useNavigate();

	async function onSubmitHandler1(url: string) {
		setIsLoading(true);
		setIsDataUndefined(false);

		const response = await fetchSearch(url).catch((err) => {
			console.log(err);
		});

		if (Object.keys(response.data).length === 0) {
			setIsDataUndefined(true);
		} else {
			navigate("/flight-list", { state: response.data });
		}

		console.log("fetch avvenuta");
		setIsLoading(false);
	}

	return (
		<>
			<MainBgImage />
			<Box className="pageContainer">
				<Main formRef={formRef}></Main>
				<SearchForm ref={formRef} submitPassUrl={onSubmitHandler1}></SearchForm>

				{isLoading && <CircularProgress sx={{ margin: "auto" }}></CircularProgress>}
				{isDataUndefined && <p>Non ci sono voli</p>}

				<PopularDestination></PopularDestination>
				<Cards></Cards>
			</Box>
		</>
	);
}

export default Index;
