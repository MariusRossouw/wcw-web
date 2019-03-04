<template>
    <div class="container">
        <div class="content-background">
            <div class="uk-container uk-container-large uk-padding-remove">
                <div class="uk-card uk-card-default card_create" >
                    <div class="uk-card-body">
                        <!-- <div uk-grid> -->
                            <h5>Code: {{merchant.code}}</h5>
                            <h5>Account: {{merchant.account}}</h5>
                            <h5>Abrv: {{merchant.abrv}}</h5>
                            <h5>Merchant Name: {{merchant.merchant_name}}</h5>
                            <h5>Address line 1: {{merchant.address_line_1}}</h5>
                            <h5>Address line 2: {{merchant.address_line_2}}</h5>
                            <h5>Address line 3: {{merchant.address_line_3}}</h5>
                            <h5>Address line 4: {{merchant.address_line_4}}</h5>
                            <h5>Email: {{merchant.email}}</h5>
                            <h5>Mobile Number: {{merchant.mobile_number}}</h5>
                            <h5>Status: {{merchant.status}}</h5>
                            <button class="uk-button uk-button-default" @click="updateMerchant()">Update Merchant</button>
                            <button class="uk-button uk-button-default" @click="order()">Order</button>
                        <!-- </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import axios from 'axios';
export default {
  components: {
    'ag-grid-vue': AgGridVue,
    axios: axios,
  },
  head() {
    return {
      title: this.merchant.merchant_name,
    };
  },
  data() {
    return {
      merchant: {
        name: '',
      },
    };
  },
  methods: {
    checkAuthState() {
      let ls = JSON.parse(localStorage.getItem('State'));
      console.log(ls);
      if (!ls) {
        this.$router.push('/login');
      } else {
        this.$store.replaceState(ls);
      }
    },
    loadMerchant() {
      var _this = this;
      let request = {
        merchant_id: _this.$route.params.id,
      };
      console.log(request);
      axios
        .post(this.$store.state.api_url + '/merchant', request)
        .then(response => {
          console.log(response);
          _this.merchant = response.data.data;
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    updateMerchant() {
      this.$router.push('/merchant/' + this.$route.params.id + '/update');
    },
    order() {
      this.$store.state.session.merchant = this.merchant;
      localStorage.setItem(
        'Merchant',
        JSON.stringify(this.$store.state.session.merchant)
      );
      this.$router.push('/order/' + this.$route.params.id);
    },
  },
  beforeMount() {
    this.checkAuthState();
  },
  mounted() {
    this.loadMerchant();
  },
};
</script>
<style>
</style>
