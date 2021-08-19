<template>
	<div>
		<h1 class="text-center p-4 text-light">Hello Currency</h1>
		<b-container class="shadow rounded w-75 bg-light">
			<Converter />
			<div class="d-flex flex-column justify-content-center p-3">
				<div
					class="
						d-flex
						flex-row
						justify-content-center
						align-items-center
					"
				>
					<label>Start date: </label>
					<input
						type="date"
						class="m-2 border border-light shadow-sm p-1"
						v-model="startDate"
						:max="maxDate"
						:min="minDate"
					/>
					<button
						@click="updateChart"
						class="
							hc-bg
							text-light
							border border-light
							rounded
							p-1
							shadow
							hc-hover
						"
					>
						refresh
					</button>
				</div>
				<LineChart
					:chartData="chartData"
					:options="chartOptions"
					:height="80"
					:width="220"
				/>
			</div>
		</b-container>
	</div>
</template>
<script>
import Converter from "./currency/Converter.vue";
import LineChart from "./currency/LineChart.vue";
import { getSpecificDate } from "@/utils";
import { mapActions, mapState } from "vuex";

export default {
	components: { Converter, LineChart },
	data() {
		return {
			...mapState(["from", "chartData", "chartOptions"]),
			chartOptions: {
				legend: {
					display: false,
				},
			},
			maxDate: getSpecificDate(3),
			minDate: getSpecificDate(360),
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
		...mapActions(["getHistoryRate"]),
		updateChart() {
			this.getHistoryRate({
				startDate: this.startDate,
				fromSelect: this.$store.state.fromSelect,
				toSelect: this.$store.state.toSelect,
			});
		},
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
<style lang="css"></style>
