import axios from "axios";

export const axiosWithAuth = () => {
	const token = localStorage.getItem("token");

	return axios.create({
		headers: {
			"Content-Type": "application/json",
			Authorization: `${token}`,
		},
		baseUrl: "https://lifegpa-api.herokuapp.com",
	});
};
