<template>
	<div id="app">
		<b-container fluid="md sm">
			<h1 class="text-center mb-5">Hello Currency</h1>
			<b-row class="m-3" align-v="center">
				<b-col>
					<b-form-input placeholder="from"></b-form-input>
				</b-col>
				<b-col>
					<b-form-select
						v-model="selected"
						:options="options"
					></b-form-select>
				</b-col>
			</b-row>
			<b-row class="m-3" align-v="center">
				<b-col>
					<b-form-input placeholder="to"></b-form-input>
				</b-col>
				<b-col>
					<b-form-select
						v-model="selected"
						:options="options"
					></b-form-select>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import { currency } from "./currency";
const currencyOptions = currency.map((item) => {
	return { value: item, text: item };
});

export default {
	data() {
		return {
			selected: "AUD",
			options: currencyOptions,
		};
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
