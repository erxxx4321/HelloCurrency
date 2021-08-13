<template>
	<div id="app">
		<b-container fluid="md sm">
			<img src="./currency.png" alt="curerncy" class="m-5" />
			<h1 class="text-center mb-5 text-primary">Hello Currency</h1>
			<b-container
				fluid="md sm"
				class="shadow p-4 mb-5 bg-primary rounded"
			>
				<b-row id="from" class="m-3" align-v="center">
					<b-col>
						<b-form-input
							class="border border-light p-2 mb-3"
							v-model="from"
						></b-form-input>
					</b-col>
					<b-col>
						<b-form-select
							class="border border-light p-2 mb-3"
							v-model="fromSelect"
							:options="options"
						></b-form-select>
					</b-col>
				</b-row>
				<b-row id="to" class="m-3" align-v="center">
					<b-col>
						<b-form-input
							class="border border-light p-2 mb-3"
							:placeholder="to"
							:value="to"
						></b-form-input>
					</b-col>
					<b-col>
						<b-form-select
							class="border border-light p-2 mb-3"
							v-model="toSelect"
							:options="options"
						></b-form-select>
					</b-col>
				</b-row>
			</b-container>
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
input {
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	margin-top: 60px;
	max-width: 700px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	height: 90vh;
	align-items: center;
	justify-content: center;
}
</style>
