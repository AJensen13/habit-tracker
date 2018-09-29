<template>
	<div class="container">
		<h1 class="is-size-1">Calendar</h1>
		<div class="columns">
			<habit-entry></habit-entry>
			<div class="column is-three-quarters">
				<full-calendar :config="config"></full-calendar>
			</div>
		</div>
	</div>
</template>
<script>
import HabitEntry from "../components/AppEntry";
import { FullCalendar } from 'vue-full-calendar';

	export default {
		name: 'calendar',
		data() {
			return {
				config: {
					defaultView: 'month'
				}
			}
		},
		components: {HabitEntry, FullCalendar}
	}
</script>