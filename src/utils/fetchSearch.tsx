import axios from "axios";

export default async function fetchSearch(paramUrl: string, keyword?: string) {
	if (keyword) {
		const url = paramUrl + keyword;

		const response = await axios.get(url).catch(() => {
			throw new Error("Error fetching airport_dropdown_list");
		});
		return response.data;
	}

	const response = await axios.get(paramUrl).catch(() => {
		throw new Error("Problem fetching Flight_data_list");
	});
	return response.data;
}
