<script>
import { Line, mixins } from "vue-chartjs";
import { mapState } from "vuex";
const { reactiveProp } = mixins;

export default {
	name: "Chart",
	data() {
		return {
			chartOptions: {
				legend: {
					display: false,
				},
			},
		};
	},
	mixins: [Line, reactiveProp],
	props: {
		chartdata: {
			type: Object,
			default: null,
		},
		options: {
			type: Object,
			default: null,
		},
	},
	computed: {
		...mapState(["chartData"]),
	},

	mounted() {
		this.renderChart(this.chartData);
	},
};
</script>
