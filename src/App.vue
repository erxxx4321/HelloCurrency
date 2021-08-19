<template>
	<div class="hc-bg p-2" style="height: 100vh">
		<Index />
	</div>
</template>

<script>
import Index from "./components/index.vue";

export default {
	components: { Index },
};
</script>
<style>
.hc-bg {
	background: #3c6e71;
}
.hc-text {
	color: #3c6e71;
}
.hc-hover:hover {
	background: #4d9193;
	transition: 0.3s;
}
</style>
