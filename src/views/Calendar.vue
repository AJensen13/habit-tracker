<template>
	<div>
		<h1 class="is-size-1">Calendar</h1>
		<habit-entry></habit-entry>
	</div>
</template>
<script>
import HabitEntry from "../components/AppEntry";
	export default {
		name: 'calendar',
		components: {HabitEntry}
	}
</script>