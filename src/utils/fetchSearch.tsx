import axios from "axios";

export default async function fetchSearch(paramUrl: string, keyword?: string) {
	if (keyword) {
		const url = paramUrl + keyword;
		const response = await axios.get(url).catch((err) => {
			throw err;
		});
		return response.data;
	}
	const response = await axios.get(paramUrl).catch((err) => {
		throw err;
	});
	return response;
}
