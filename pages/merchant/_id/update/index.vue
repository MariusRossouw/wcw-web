<template>
     <div class="container">
      <div class="uk-container uk-container-large uk-padding-remove">
        <div class="uk-card uk-card-default card_create" >
          <div class="uk-card-body">
            <div uk-grid>

              <div class="uk-form-stacked">
                  <div class="uk-margin">
                      <label class="uk-form-label" for="form-stacked-text">Code</label>
                      <div class="uk-form-controls">
                          {{ merchant.code }}
                      </div>
                  </div>
                  <div class="uk-margin">
                      <label class="uk-form-label" for="form-stacked-text">Account</label>
                      <div class="uk-form-controls">
                          {{ merchant.account }}
                      </div>
                  </div>
                  <div class="uk-margin">
                      <label class="uk-form-label" for="form-stacked-text">Abrv</label>
                      <div class="uk-form-controls">
                          {{ merchant.abrv }}
                      </div>
                  </div>
                  <div class="uk-margin">
                      <label class="uk-form-label" for="form-stacked-text">Merchant Name</label>
                      <div class="uk-form-controls">
                      {{ merchant.merchant_name }}
                      </div>
                  </div>
                  <div class="uk-margin">
                      <label class="uk-form-label" for="form-stacked-text">Address line 1</label>
                      <div class="uk-form-controls">
                          <input class="uk-input" type="text" placeholder="Address line 1" v-model="merchant.address_line_1">
                      </div>
                  </div>
                  <div class="uk-margin">
                      <label class="uk-form-label" for="form-stacked-text">Address line 2</label>
                      <div class="uk-form-controls">
                          <input class="uk-input" type="text" placeholder="Address line 2" v-model="merchant.address_line_2">
                      </div>
                  </div>
                  <div class="uk-margin">
                      <label class="uk-form-label" for="form-stacked-text">Address line 3</label>
                      <div class="uk-form-controls">
                          <input class="uk-input" type="text" placeholder="Address line 3" v-model="merchant.address_line_3">
                      </div>
                  </div>
                  <div class="uk-margin">
                      <label class="uk-form-label" for="form-stacked-text">Address line 4</label>
                      <div class="uk-form-controls">
                          <input class="uk-input" type="text" placeholder="Address line 4" v-model="merchant.address_line_4">
                      </div>
                  </div>
                  <div class="uk-margin">
                      <label class="uk-form-label" for="form-stacked-text">Email</label>
                      <div class="uk-form-controls">
                          <input class="uk-input" type="text" placeholder="Email" v-model="merchant.email">
                      </div>
                  </div>
                  <div class="uk-margin">
                      <label class="uk-form-label" for="form-stacked-text">Mobile Number</label>
                      <div class="uk-form-controls">
                          <input class="uk-input" type="text" placeholder="Mobile Number" v-model="merchant.mobile_number">
                      </div>
                  </div>
                  <div class="uk-margin">
                      <label class="uk-form-label" for="form-stacked-text">Status</label>
                      <div class="uk-form-controls">
                          <input class="uk-input" type="text" placeholder="Status" v-model="merchant.status">
                      </div>
                  </div>
                  <div class="uk-margin" uk-margin>
                      <button class="uk-button uk-button-default" @click="updateProduct()">Submit</button>
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
    axios: axios,
  },

  data() {
    return {
      merchant: {
        code: '',
        account: '',
        abrv: '',
        merchant_name: '',
        address_line_1: '',
        address_line_2: '',
        address_line_3: '',
        address_line_4: '',
        email: '',
        mobile_number: '',
        status: '',
      },
    };
  },
  mounted() {
    this.loadMerchant();
  },
  methods: {
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
    updateProduct() {
      let request = {
        update: {
          code: this.merchant.code,
          account: this.merchant.account,
          abrv: this.merchant.abrv,
          merchant_name: this.merchant.merchant_name,
          address_line_1: this.merchant.address_line_1,
          address_line_2: this.merchant.address_line_2,
          address_line_3: this.merchant.address_line_3,
          address_line_4: this.merchant.address_line_4,
          email: this.merchant.email,
          mobile_number: this.merchant.mobile_number,
          status: this.merchant.status,
        },
        merchant_id: this.$route.params.id,
      };
      console.log('Request: ', request);
      axios
        .post(this.$store.state.api_url + '/merchant_update', request)
        .then(response => {
          // Add entity to session in vuex
          console.log('Response: ', response);
          this.$router.push('/merchant/' + this.$route.params.id);
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
    },
  },
};
</script>

<style>
</style>
