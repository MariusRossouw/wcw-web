<template>
    <div>
        <a href="#offcanvas-slide" class="uk-button uk-button-default" uk-toggle>Open</a>

        <div id="offcanvas-slide" uk-offcanvas>
            <div class="uk-offcanvas-bar">

                <ul class="uk-nav uk-nav-default">
                    <li v-for="route in $store.state.session.navbar" :key="route.to" exact><nuxt-link v-bind:to="route.to">{{route.description}}</nuxt-link></li>
                    <li v-if="!$store.state.session.authed" exact><a @click="login()"> Login</a></li>
                    <li v-if="$store.state.session.authed" exact><a @click="logout()"> Logout</a></li>
                </ul>

            </div>
        </div>
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
