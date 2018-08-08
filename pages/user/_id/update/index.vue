<template>
    <div class="container">
        <div class="uk-container uk-container-large uk-padding-remove">
            <div class="uk-card uk-card-default card_create">
                <div class="uk-card-body">
                    <div uk-grid>
    
                        <div class="uk-form-stacked">
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">First Name</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="First Name" v-model="first_name">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Last Name</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Last Name" v-model="last_name">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Email</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Email" v-model="email">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Mobile Number</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Mobile Number" v-model="mobile_no">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Password</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="password" placeholder="Password" v-model="password">
                                </div>
                            </div>
                            <div class="uk-margin" uk-margin>
                                <button class="uk-button uk-button-default" @click="createProfile()">Submit</button>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    
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
                first_name: "",
                last_name: "",
                email: "",
                mobile_no: "",
                password: ""
            }
        },
        methods: {
            createProfile() {
                let request = {
                    email: this.email,
                    mobile_no: this.mobile_no,
                    password: this.password,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    profile_id: this.$route.params.id
                };
                console.log("Request: ", request);
                axios.post(this.$store.state.api_url + '/user_profile_update', request)
                    .then(response => {
                        // Add entity to session in vuex
                        console.log('Response: ', response);
                        this.$router.push("/user/" + this.$route.params.id);
                    })
                    .catch(error => {
                        console.log(error.response);
                        if (error.response.status == 400) {
                            console.log(error.response);
                        }
                        if (error.response.status == 401) {
                            console.log(error.response);
                            // login / session expired
                        }
                        if (error.response.status == 403) {
                            console.log(error.response);
                            // broke a rule
                            new Error();
                            // this.$router.push("/error");
                        }
                        if (error.response.status == 404) {
                            console.log(error.response);
                            // page not found / not there
                        }
                        if (error.response.status == 500) {
                            console.log(error.response);
                            // server error / db error
                        }
                    });
            }
        }
    }
</script>

<style>
    
</style>

