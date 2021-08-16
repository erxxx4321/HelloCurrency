<template>
	<b-container fluid="md sm" class="w-75 p-5">
		<h1 class="text-center mb-5 text-primary">Hello Currency</h1>
		<Converter />
		<div class="d-flex flex-row justify-content-center align-items-center">
			<label>Start date: </label>
			<input
				type="date"
				class="m-2"
				v-model="startDate"
				:max="startDate"
			/>
			<button @click="updateChart">refresh</button>
		</div>
		<LineChart
			:chartData="chartData"
			:options="chartOptions"
			:height="200"
		/>
	</b-container>
</template>
<script>
import Converter from "./currency/Converter.vue";
import LineChart from "./currency/LineChart.vue";
import { mapActions, mapState } from "vuex";

export default {
	components: { Converter, LineChart },
	data() {
		return {
			...mapState(["from", "chartData"]),
			chartOptions: {
				legend: {
					display: false,
				},
			},
		};
	},
	computed: {
		startDate: {
			get() {
				return this.$store.state.startDate;
			},
			set(val) {
				this.$store.state.startDate = val;
			},
		},
	},
	methods: {
		...mapActions(["getHistoryRate", "getStartDate"]),
		updateChart() {
			this.getHistoryRate({
				startDate: this.startDate,
				fromSelect: this.$store.state.fromSelect,
				toSelect: this.$store.state.toSelect,
			});
		},
	},
	created() {
		this.getStartDate();
	},
	mounted() {
		this.getHistoryRate({
			startDate: this.startDate,
			fromSelect: this.$store.state.fromSelect,
			toSelect: this.$store.state.toSelect,
		});
	},
};
</script>
