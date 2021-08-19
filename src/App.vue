<template>
	<div class="hc-bg p-2">
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
html {
	background: #3c6e71;
}
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
