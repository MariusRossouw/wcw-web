<template>
	<nav>
		<div>
			<img src="@/static/WCW.png" @click="goHome()" />
		</div>
		<div>
			<hr/>
			<!-- <h5>{{this.$store.state.session.entity.first_name}} {{this.$store.state.session.entity.last_name}}</h5> -->
			<hr/>
		</div>
		<div class="sideNav">
			<ul class="uk-nav uk-nav-default">
				<li v-for="route in $store.state.session.navbar" :key="route.to" exact>
					<nuxt-link v-bind:to="route.to">{{route.description}}</nuxt-link>
				</li>
				<li v-if="!$store.state.session.authed" exact><a @click="login()"> Login</a></li>
				<li v-if="$store.state.session.authed" exact><a @click="logout()"> Logout</a></li>
			</ul>
		</div>
	</nav>
</template>

<script>
	export default {
		methods: {
			goHome() {
				this.$router.push("/");
			},
			logout() {
				this.$store.state.session = {
					navbar: [{
							to: "/",
							description: "Home"
						},
						// {to:"/aboutUs", description:"About"},
						// {to:"/contactUs", description:"Contact Us"},
						// {to:"/login", description:"Login"}
					],
					authed: false
				};
				localStorage.setItem("State", JSON.stringify(this.$store.state.session));
				this.$router.push("/");
			},
			login() {
				this.$router.push("/login");
			}
		}
	}
</script>

<style>
	
</style>
