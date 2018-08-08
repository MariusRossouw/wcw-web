<template>
    <div class="container">
        <div class="content-background">
            <div class="uk-container uk-container-large uk-padding-remove">
                <div class="uk-card uk-card-default card_create" >
                    <div class="uk-card-body">
                        <!-- <div uk-grid> -->
                            <h5>Winefarm Name: {{wine_farm.wine_farm_name}}</h5>
                            <h5>Address line 1: {{wine_farm.address_line_1}}</h5>
                            <h5>Address line 2: {{wine_farm.address_line_2}}</h5>
                            <h5>Address line 3: {{wine_farm.address_line_3}}</h5>
                            <h5>Address line 4: {{wine_farm.address_line_4}}</h5>
                            <h5>Email: {{wine_farm.email}}</h5>
                            <h5>Mobile Number: {{wine_farm.mobile_number}}</h5>
                            <h5>Status: {{wine_farm.status}}</h5>
                            <button class="uk-button uk-button-default" @click="updateWinefarm()">Update Product</button>
                        <!-- </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { AgGridVue } from "ag-grid-vue";
    import axios from 'axios';
    export default {
        components: {
            "ag-grid-vue": AgGridVue,
            "axios": axios
        },
        head() {
            return {
                title: this.wine_farm.farm_name
            };
        },
        data() {
            return {
                wine_farm: {
                    farm_name: ""
                }
            };  
        },
        methods: {
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
                    wine_farm_id: _this.$route.params.id
                };
                console.log(request);
                axios.post(this.$store.state.api_url + '/wine_farm', request)
                .then(response => {
                    console.log(response);
                    _this.wine_farm = response.data.data;
                })
                .catch(error => {
                    console.log(error.response);
                });
            },
            updateWinefarm(){
                this.$router.push("/farm/" + this.$route.params.id + "/update");
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

