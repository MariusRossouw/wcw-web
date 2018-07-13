<template>
    <div>
        <h1 style="margin-left: 40px;">{{ user.first_name + ' ' + user.last_name}}</h1>
        <div class="uk-card-body" style="width: 100%; height: 400px">
        </div>
        <address-form v-for="(address, index) in addresses"
                :itemdata="itemList"
                :address="address"  
                :count="index+1"                
                v-on:removeAddressItem="removeAddress(index)" :key="index">
        </address-form>
        <!-- {{addresses}} -->
        <div>
            <button @click="addAddress"> Add Address </button>
        </div>
    </div>
</template>

<script>
    import AddressForm from '@/components/Forms/AddressForm'
    import { AgGridVue } from "ag-grid-vue";
    import axios from 'axios';
    // import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete'
    export default {
        components: {
            "address-form": AddressForm,
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
            loadWineFarm() {
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
            }
        },
        beforeMount() {
            this.checkAuthState();
        },
        mounted() {
            this.loadWineFarm();
        }
    };
</script>
<style>

</style>

