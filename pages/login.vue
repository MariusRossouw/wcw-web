<template>
    <div class="loginContainer">
        <center>
            <span uk-icon="icon: user; ratio: 3.5"></span>
            <div class="uk-margin">
                <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: mail"></span>
                    <input class="uk-input" type="text" placeholder="Email" v-model="email">
                </div>
            </div>

            <!-- <div class="uk-margin">
                <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: phone"></span>
                    <input class="uk-input" type="number" placeholder="Mobile Number" v-model="mobile_number">
                </div>
            </div> -->

            <div class="uk-margin">
                <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: lock"></span>
                    <input class="uk-input" type="password" placeholder="Password" v-model="password">
                </div>
            </div>

            <div class="uk-margin">
                <div class="uk-inline">
                    <button class="uk-button uk-button-default" @click="loginButton()">Login</button>
                </div>
            </div>
        </center>
    </div>        
</template>

<script>
    import axios from 'axios';
    export default {
        components: {
            "axios": axios
        },
        data() {
            return {
                email: '',
                mobile_number: '',
                password: ''
            };  
        },
        methods: {
            loginButton() {
                let request = {
                    email: this.email,
                    mobile_number: this.mobile_number,
                    password: this.password
                };
                console.log("Request: ", request);
                axios.post(this.$store.state.api_url + '/login', request)
                    .then(response => {
                        // Add entity to session in vuex
                        console.log('Response: ', response);
                        this.$store.state.session.entity = response.data.data;
                        this.$store.state.session.authed = true;
                        this.$store.state.session.navbar = [
                            {to:"/", description:"Home"},
                            {to:"/dashboard", description:"Dashboard"},
                            {to:"/distributor/list", description:"Distributors"},
                            {to:"/farm/list", description:"Wine Farms"},
                            {to:"/merchant/list", description:"Merchants"},
                            {to:"/user/list", description:"Users"},
                            {to:"/upload", description:"Upload"},
                        ];
                        localStorage.setItem("State", JSON.stringify(this.$store.state));
                        this.$router.push("/dashboard");
                    })
                    .catch(error => {
                        console.log(error.response);
                        if(error.response.status == 400){
                            console.log(error.response);
                        }
                        if(error.response.status == 401){
                            console.log(error.response);
                            // login / session expired
                        }
                        if(error.response.status == 403){
                            console.log(error.response);
                            // broke a rule
                            new Error();
                            // this.$router.push("/error");
                        }
                        if(error.response.status == 404){
                            console.log(error.response);
                            // page not found / not there
                        }
                        if(error.response.status == 500){
                            console.log(error.response);
                            // server error / db error
                        }
                    });
            }
        },
        beforeMount() {
            let ls = JSON.parse(localStorage.getItem("State"));
            console.log(ls);
            if(ls && ls.entity && ls.entity.id > 0){
                this.$router.push("/dashboard");
            }
        },
        mounted() {

        }
    };
</script>

<style>
.loginContainer {
    margin-top: 10%;
}
</style>
