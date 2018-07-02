<template>
    <div>
        <h1 style="margin-left: 40px;">{{ wine_farm.farm_name }}</h1>
        <div class="uk-card-body" style="width: 100%; height: 400px">
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

