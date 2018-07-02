<template>
    <div>
        <h1 style="margin-left: 40px;">{{ user.first_name + ' ' + user.last_name}}</h1>
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
                title: this.user.first_name + ' ' + this.user.last_name
            };
        },
        data() {
            return {
                user: {
                    first_name: "",
                    last_name: ""
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

