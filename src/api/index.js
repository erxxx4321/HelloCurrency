import axios from "axios";
const baseUrl = "https://www.frankfurter.app/";

export default {
	async getCurrencyList() {
		try {
			const response = await axios.get(`${baseUrl}currencies`);
			return response.data;
		} catch (error) {
			console.log("Error on getCurrencyOptions", error);
		}
	},
	async getConvertedData({ from, fromSelect, toSelect }) {
		try {
			const response = await axios.get(
				`${baseUrl}latest?amount=${from}&from=${fromSelect}&to=${toSelect}`
			);
			return response.data;
		} catch (error) {
			console.log("Error on getConvertedData", error);
		}
	},
	async getHistoryData({ startDate, fromSelect, toSelect }) {
		try {
			const response = await axios.get(
				`${baseUrl}${startDate}..?from=${fromSelect}&to=${toSelect}`
			);

			return response.data;
		} catch (error) {
			console.log("Error on getHistoryData", error);
		}
	},
};
