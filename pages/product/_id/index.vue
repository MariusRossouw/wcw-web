<template>
    <div>
        <div class="content-background">
            <div class="uk-container uk-container-large uk-padding-remove">
                <div class="uk-card uk-card-default card_create" >
                    <div class="uk-card-body">
                        <div uk-grid>
                            <h5>Abrv: {{product.abrv}}</h5>
                            <h5>Product Name: {{product.product_name}}</h5>
                            <h5>Cultivar: {{product.cultivar}}</h5>
                            <h5>Special: {{product.special}}</h5>
                            <h5>Description: {{product.description}}</h5>
                            <h5>Product Classification: {{product.product_classification}}</h5>
                            <h5>Vintage: {{product.vintage}}</h5>
                            <h5>Blend: {{product.blend}}</h5>
                            <h5>Color: {{product.color}}</h5>
                            <h5>Item Code: {{product.item_code}}</h5>
                            <h5>Size: {{product.size}}</h5>
                            <h5>Volume: {{product.volume}}</h5>
                            <h5>Measurement: {{product.measurement}}</h5>
                            <h5>Case Size: {{product.case_size}}</h5>
                            <h5>Status: {{product.status}}</h5>
                            <h5>Create Time{{product.create_time}}</h5>
                            <button class="uk-button uk-button-default" @click="updateProduct()">Update Product</button>
                        </div>
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
                title: this.product.product_name
            };
        },
        data() {
            return {
                product: {
                    product_name: ""
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
                    product_id: _this.$route.params.id
                };
                console.log(request);
                axios.post(this.$store.state.api_url + '/product', request)
                .then(response => {
                    console.log(response);
                    _this.product = response.data.data;
                })
                .catch(error => {
                    console.log(error.response);
                });
            },
            updateProduct(){
                this.$router.push("/product/" + this.$route.params.id + "/update");
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

