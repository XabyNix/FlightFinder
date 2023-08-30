import axios from "axios";

/* const getToken = async () => {
	const tokenUrl = "https://test.api.amadeus.com/v1/security/oauth2/token";

	const tokenConfig = {
		headers: {
			"content-type": "application/x-www-form-urlencoded",
		},
	};
	const tokenData = {
		grant_type: "client_credentials",
		client_id: "CMqKkoSAVs03BGt8A2HezE2kgbcYVB3x",
		client_secret: "f75tVARqKxLyVFGg",
	};

	const token = await axios.post(tokenUrl, tokenData, tokenConfig);
	console.log(token.data.access_token);
	return "Bearer " + token.data.access_token;
}; */

const fetchData = (url: string) => {
	/* const token = await getToken();
	const conf = {
		headers: {
			...headers,
			Authorization: token,
		},
	}; 

	const urlNew = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MXP&destinationLocationCode=LGA&departureDate=2023-09-02&adults=1&max=${max}`;
	*/
	return axios.get(url);
};
export default fetchData;
