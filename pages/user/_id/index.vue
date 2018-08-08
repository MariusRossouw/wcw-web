<template>
    <div class="container">
        <div class="content-background">
            <div class="uk-container uk-container-large uk-padding-remove">
                <div class="uk-card uk-card-default card_create" >
                    <div class="uk-card-body">
                        <!-- <div uk-grid> -->
                            <h1 style="margin-left: 40px;">{{ user.first_name + ' ' + user.last_name}}</h1>
                            <h5>{{user.email}}</h5>
                            <h5>{{user.mobile_country_code}}{{user.mobile_no_exl}}</h5>
                            <button class="uk-button uk-button-default" @click="updateProfile()">Update Profile</button>
                        <!-- </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import AddressForm from '@/components/Forms/AddressForm'
    import { AgGridVue } from "ag-grid-vue";
    import axios from 'axios';
    // import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete'
    export default {
        components: {
            // "address-form": AddressForm,
            "ag-grid-vue": AgGridVue,
            "axios": axios
        },
        head() {
            return {
                title: this.user.first_name + ' ' + this.user.last_name
            };
        },
        data() {
            return {
                user: {
                    first_name: "",
                    last_name: ""
                },
                addresses: [{city: '', street: '' , address_type_id: ''}],
                itemList: [
                    { id: '', description: 'Select an Address Type'},
                    { id: 1, description: 'One'},
                    { id: 2, description: 'Two'},
                    { id: 3, description: 'Three'}
                ],
                address: ''
            };  
        },
        methods: {
            addAddress(){
                this.addresses.push({city: '', street: '' , address_type_id: ''});
            },
            removeAddress(index){
                this.addresses.splice(index,1);
            },
            checkAuthState() {
                let ls = JSON.parse(localStorage.getItem("State"));
                console.log(ls);
                if(!ls){
                    this.$router.push("/login");
                } else {
                    this.$store.replaceState(ls);
                }
            },
            loadUserProfile() {
                var _this = this;
                let request = {
                    profile_id: _this.$route.params.id
                };
                console.log(request);
                axios.post(this.$store.state.api_url + '/user_profile', request)
                .then(response => {
                    console.log(response);
                    _this.user = response.data.data;
                })
                .catch(error => {
                    console.log(error.response);
                });
            },
            updateProfile(){
                this.$router.push("/user/" + this.$route.params.id + "/update");
            }
        },
        beforeMount() {
            this.checkAuthState();
        },
        mounted() {
            this.loadUserProfile();
        }
    };
</script>
<style>

</style>

