import Vue from "vue";
import Vuex from "vuex";
import currencyApi from "@/api";
import { getSpecificDate } from "@/utils";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		from: 1,
		fromSelect: "AUD",
		toSelect: "USD",
		currencyOptions: [],
		convertedRate: "",
		chartData: null,
		startDate: getSpecificDate(6),
	},
	mutations: {
		setFromSelect(state, newValue) {
			state.fromSelect = newValue;
		},
		setToSelect(state, newValue) {
			state.toSelect = newValue;
		},
		setCurrencyOptions(state, newValue) {
			state.currencyOptions = newValue;
		},
		setConvertedRate(state, newValue) {
			state.convertedRate = newValue;
		},
		setChartData(state, newValue) {
			state.chartData = newValue;
		},
	},
	actions: {
		async getCurrencyOptions({ commit }) {
			const currencies = await currencyApi.getCurrencyList();
			const currenciesFormat = Object.entries(currencies).map((item) => {
				return {
					value: item[0],
					text: `${item[0]} - ${item[1]}`,
				};
			});

			commit("setCurrencyOptions", currenciesFormat);
		},
		async getConvertedRate({ commit }, { from, fromSelect, toSelect }) {
			const convertedData = await currencyApi.getConvertedData({
				from,
				fromSelect,
				toSelect,
			});

			const convertedRate = convertedData.rates[toSelect].toFixed(3);

			commit("setConvertedRate", convertedRate);
		},
		async getHistoryRate({ commit }, { startDate, fromSelect, toSelect }) {
			const historyData = await currencyApi.getHistoryData({
				startDate,
				fromSelect,
				toSelect,
			});
			const historyRate = historyData.rates;

			const dates = [];
			const currencyRate = [];
			Object.keys(historyRate).forEach((element) => {
				dates.push(element);
				currencyRate.push(historyRate[element][toSelect]);
			});

			commit("setChartData", {
				labels: dates,
				datasets: [
					{
						data: currencyRate,
						backgroundColor: "rgba(0, 0, 0, 0.0)",
						borderColor: "#3c6e71",
						lineTension: 0,
						pointBorderColor: "#284b63",
						pointBackgroundColor: "#fff",
						color: "#fff",
					},
				],
			});
		},
	},
});
