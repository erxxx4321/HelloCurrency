<template>
	<div id="app">
		<b-container fluid="md sm">
			<h1 class="text-center mb-5">Hello Currency</h1>
			<b-row id="from" class="m-3" align-v="center">
				<b-col>
					<b-form-input v-model="from"></b-form-input>
				</b-col>
				<b-col>
					<b-form-select
						v-model="fromSelect"
						:options="options"
					></b-form-select>
				</b-col>
			</b-row>
			<b-row id="to" class="m-3" align-v="center">
				<b-col>
					<b-form-input :placeholder="to" :value="to"></b-form-input>
				</b-col>
				<b-col>
					<b-form-select
						v-model="toSelect"
						:options="options"
					></b-form-select>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import axios from "axios";
import { currencyList } from "./currency";

const currencyOptions = currencyList.map((item) => {
	return {
		value: item.cc,
		text: `${item.cc} - ${item.name}`,
		symbol: item.symbol,
	};
});

export default {
	data() {
		return {
			from: 1,
			fromSelect: "AUD",
			toSelect: "USD",
			options: currencyOptions,
		};
	},
	methods: {
		async fetchApi() {
			try {
				const response = await axios.get(this.url);
				return response;
			} catch (error) {
				console.log("Error: ", error);
			}
		},
	},
	computed: {
		url: {
			get() {
				return `https://www.frankfurter.app/latest?amount=${this.from}&from=${this.fromSelect}&to=${this.toSelect}`;
			},
		},
	},
	asyncComputed: {
		to: {
			get() {
				const selectOption = this.options.filter(
					(item) => item.value === this.toSelect
				);

				return this.fetchApi().then(
					(output) =>
						selectOption[0].symbol +
						" " +
						output.data.rates[`${this.toSelect}`].toFixed(3)
				);
			},
		},
	},
};
</script>

<style>
.selector-for-some-widget {
	box-sizing: content-box;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
