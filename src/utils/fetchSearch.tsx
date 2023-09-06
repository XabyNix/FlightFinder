import axios from "axios";

export default async function fetchSearch(paramUrl: string, keyword?: string) {
	if (keyword) {
		const url = paramUrl + keyword;
		try {
			const response = await axios.get(url);
			return response.data;
		} catch (error) {
			return -1;
		}
	}
	try {
		const response = await axios.get(paramUrl);
		return response.data;
	} catch (error) {
		return -1;
	}
}
