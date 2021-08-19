<template>
	<b-container
		fluid="md sm"
		class="p-4 d-flex flex-column align-items-center w-75"
	>
		<b-row id="from" class="m-3" align-v="center" align-h="center">
			<b-col>
				<b-form-input
					class="border border-light p-2 mb-3 shadow-sm"
					v-model="from"
				></b-form-input>
			</b-col>
			<b-col>
				<b-form-select
					class="border border-light p-2 mb-3 shadow-sm"
					v-model="fromSelect"
					:options="currencyOptions"
				>
				</b-form-select>
			</b-col>
		</b-row>
		<b-row id="to" align-v="center" align-h="center">
			<b-col>
				<b-form-input
					class="border border-light p-2 mb-3 shadow-sm"
					:placeholder="convertedRate"
					:value="convertedRate"
				></b-form-input>
			</b-col>
			<b-col>
				<b-form-select
					class="border border-light p-2 mb-3 shadow-sm"
					v-model="toSelect"
					:options="currencyOptions"
				></b-form-select>
			</b-col>
		</b-row>
	</b-container>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
	name: "Converter",
	methods: {
		...mapActions(["getCurrencyOptions", "getConvertedRate"]),
	},
	created() {
		this.getCurrencyOptions();
	},
	computed: {
		...mapState(["currencyOptions", "convertedRate"]),
		from: {
			get() {
				return this.$store.state.from;
			},
			set(val) {
				this.$store.state.from = val;
			},
		},
		fromSelect: {
			set(val) {
				this.$store.commit("setFromSelect", val);
			},
			get() {
				return this.$store.state.fromSelect;
			},
		},
		toSelect: {
			set(val) {
				this.$store.commit("setToSelect", val);
			},
			get() {
				return this.$store.state.toSelect;
			},
		},
	},
	beforeUpdate() {
		this.getConvertedRate({
			from: this.from,
			fromSelect: this.fromSelect,
			toSelect: this.toSelect,
		});
	},
};
</script>
