<template>
	<div>
		<h1>Stats</h1>
		<!-- Global -->
		<div>
			<h4>Global Metrics</h4>
			<GlobalMetrics class="global"></GlobalMetrics>
		</div>
		<!-- Breakdown -->
		<div>
			<h4>Stat Breakdown</h4>
		</div>
	</div>
</template>

<script>
import GlobalMetrics from '../components/GlobalMetrics';

	export default {
		name: 'stats',
		components: {GlobalMetrics}
	}
</script>

<style lang="scss">
.global {
	width: 50%;
}
</style>