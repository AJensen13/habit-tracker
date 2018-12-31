<template>
	<div>
		<h1>Stats</h1>
		<!-- Global -->
		<div class="columns">
			<div class="column is-half">
				<h4>Global Metrics</h4>
				<GlobalMetrics></GlobalMetrics>
			</div>
			<!-- Breakdown -->
			<div class="column is-half">
				<h4>Stat Breakdown</h4>
			</div>
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
</style>