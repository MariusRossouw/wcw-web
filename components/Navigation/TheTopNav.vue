<template>
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
        <nav class="uk-navbar-container" uk-navbar>
            <div class="uk-navbar-left">
                <img src="@/assets/svg/logo.svg" @click="goHome()" class="logo-image"/>
            </div>
            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li v-for="route in $store.state.session.navbar" :key="route.to" exact><nuxt-link v-bind:to="route.to">{{route.description}}</nuxt-link></li>
                    <li v-if="$store.state.session.authed" exact><a @click="logout()"> Logout</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>

export default {
    methods: {
        goHome() {
            this.$router.push("/");
        },
        logout() {
            this.$store.state.session = {
                navbar: [
                    {to:"/", description:"Home"},
                    {to:"/aboutUs", description:"About"},
                    {to:"/contactUs", description:"Contact Us"},
                    {to:"/login", description:"Login"}
                ],
                authed: false
            };
            localStorage.setItem("State", JSON.stringify(this.$store.state.session));
            this.$router.push("/");
        }
    }
}
</script>


<style>

</style>
