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
export default {
	data() {
		return {
			selected: null,
			options: [
				{ value: null, text: "Please select an option" },
				{ value: "a", text: "This is First option" },
				{ value: "b", text: "Selected Option" },
				{
					value: { C: "3PO" },
					text: "This is an option with object value"
				},
				{ value: "d", text: "This one is disabled" },
				{
					label: "Grouped options",
					options: [
						{ value: { C: "3PO" }, text: "Option with value" }
					]
				}
			]
		};
	}
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
