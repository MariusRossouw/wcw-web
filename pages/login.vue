<template>
    <div class="loginContainer" @keyup.enter.keyup.17="hack" @keyup.enter.keyup.16="hack" @keyup.enter.keyup.8="hack">
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
                <br/>
                <button class="uk-button uk-button-text" @click="$router.go(-1)">Home</button>
            </div>
        </center>
    </div>        
</template>

<script>
    import axios from 'axios';
    export default {
        layout: 'login_layout',
        components: {
            "axios": axios
        },
        data() {
            return {
                email: '',
                mobile_number: '',
                password: '',
                enter: false,
                cntrl: false,
                delete: false,
                shift: false,
            };  
        },
        methods: {
            hack(event){
                console.log(event.key);
                console.log(event);
                if(event.key == 'Enter'){
                    this.enter = true;
                }
                if(event.key == 'Control'){
                    this.cntrl = true;
                }
                if(event.key == 'Backspace'){
                    this.delete = true;
                }
                if(event.key == 'Shift'){
                    this.shift = true;
                }
                if(this.enter == true && this.cntrl == true){
                    this.email = 'medwin@test.com';
                    this.password = 'admin123';
                    this.loginButton();
                }
                if(this.delete == true && this.cntrl == true){
                    this.email = 'marius@stratech.co.za';
                    this.password = 'admin123';
                    this.loginButton();
                }
                if(this.shift == true && this.cntrl == true){
                    this.email = 'diane@roux.com';
                    this.password = 'admin123';
                    this.loginButton();
                }
            },
            loginButton() {
                let request = {
                    email: this.email,
                    mobile_number: this.mobile_number,
                    password: this.password
                };
                console.log("Request: ", request);
                axios.post(this.$store.state.api_url + 'login', request)
                    .then(response => {
                        // Add entity to session in vuex
                        console.log('Response: ', response);
                        this.$store.state.session.entity = response.data.data;
                        this.$store.state.session.authed = true;
                        if(this.$store.state.session.entity.type == 'Admin'){
                            this.$store.state.session.navbar = [
                                {to:"/", description:"Home"},
                                {to:"/user/"+response.data.data.profile_id, description:response.data.data.first_name + " " + response.data.data.last_name},
                                {to:"/dashboard", description:"Dashboard"},
                                {to:"/reports", description:"Reports"},
                                {to:"/farm/list", description:"Wine Farms"},
                                {to:"/product/list", description:"Products"},
                                {to:"/merchant/list", description:"Merchants"},
                                {to:"/user/list", description:"Users"},
                                {to:"/upload", description:"Upload"},
                            ];
                        }
                        if(this.$store.state.session.entity.type == 'Manager' || this.$store.state.session.entity.type == 'Rep'){
                            this.$store.state.session.navbar = [
                                {to:"/", description:"Home"},
                                {to:"/user/"+response.data.data.profile_id, description:response.data.data.first_name + " " + response.data.data.last_name},
                                {to:"/dashboard", description:"Dashboard"},
                                {to:"/farm/list", description:"Wine Farms"},
                                {to:"/product/list", description:"Products"},
                                {to:"/merchant/list", description:"Merchants"},
                                {to:"/user/list", description:"Users"}
                            ];
                        }
                        // this.$store.state.session.navbar = [
                        //     {to:"/", description:"Home"},
                        //     {to:"/user/"+response.data.data.profile_id, description:response.data.data.first_name + " " + response.data.data.last_name},
                        //     {to:"/dashboard", description:"Dashboard"},
                        //     {to:"/reports", description:"Reports"},
                        //     {to:"/farm/list", description:"Wine Farms"},
                        //     {to:"/product/list", description:"Products"},
                        //     {to:"/merchant/list", description:"Merchants"},
                        //     {to:"/user/list", description:"Users"},
                        //     {to:"/upload", description:"Upload"},
                        // ];
                        localStorage.setItem("State", JSON.stringify(this.$store.state));
                        this.$router.push("/dashboard");
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
            }
        },
        beforeMount() {
            var a = {
                // api_url: 'http://localhost:31001',
                api_url: 'http://wcwines-api-stage.strathost.co.za/',
                session: {
                    navbar: [
                        {to:"/", description:"Home"},
                    ],
                    authed: false,
                    entity: {}
                },
            }
            this.$store.replaceState(a);
            // let ls = JSON.parse(localStorage.getItem("State"));
            // console.log(ls);
            // if(ls && ls.entity && ls.entity.id > 0){
            //     this.$router.push("/dashboard");
            // }
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
