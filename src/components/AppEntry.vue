<template>
	<div>
		<div class="columns">
			<div class="column is-one-quarter">
				<form class="has-background-white-ter">
					<h3>Enter Metrics</h3>
					<div class="field">
						<div class="control">
							<input class="input" type="text">
						</div>
					</div>
					<div class="field">
						<div class="control">
							<input class="input" type="text">
						</div>
					</div>
					<div class="field">
						<div class="control">
							<input class="input" type="text">
						</div>
					</div>
					<div class="field">
						<div class="control">
							<label class="label">Date and Time of Event</label>
							<input class="input" type="datetime-local">
						</div>
					</div>
					<div class="field">
						<div class="control">
							<div class="select">
								<select>
									<option>Tag 1</option>
									<option>Tag 2</option>
								</select>
							</div>
						</div>
					</div>
					<div class="field">
						<div class="control">
							<textarea class="textarea" placeholder="Detailed description of events leading up to event and what you did afterwards..."></textarea>
						</div>
					</div>
					<div class="field">
						<div class="control">
							<button class="button">Add</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'habit-entry',
	}
</script>
<style lang="scss" scoped>
form {
	border: thin solid lightgrey;
	border-radius: 5px;
	padding: .5em;
}
</style>
