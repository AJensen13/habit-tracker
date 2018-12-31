<template>
<div class="container">
	<h1 class="is-size-1">Profile</h1>
		<div class="columns">
			<div class="column is-one-quarter is-offset-one-quarter">
				<img class="profile-pic is-one-quarter" alt="profile pic" src="../assets/avatar.png" />
			</div>
			<div class="column is-half">
				<h3 class="is-size-3">Person Name</h3>
				<!-- User Info -->
				<div>
					<h4 class="is-size-4">Info</h4>
					<p>Person Email</p>
					<p>Person Username</p>
					<p>Person Password</p>
					<p>Person Age</p>
				</div>
			</div>
		</div>
</div>
</template>

<script>
	export default {
		name: 'profile',
	}
</script>

<style lang="scss">
.profile-pic {
	border: thin solid darkgray;
	border-radius: 50%;
}
</style>
