<template>
     <div class="content-background">
      <div class="uk-container uk-container-large uk-padding-remove">
        <div class="uk-card uk-card-default card_create" >
          <div class="uk-card-body">
            <div uk-grid>

              <div class="uk-form-stacked">
                  
                  <div class="uk-margin">
                      <label class="uk-form-label" for="form-stacked-text">Winefarm Name</label>
                      <div class="uk-form-controls">
                          <input class="uk-input" type="text" placeholder="Winefarm Name" v-model="farm_name">
                      </div>
                  </div>
                  <div class="uk-margin">
                      <label class="uk-form-label" for="form-stacked-text">Address line 1</label>
                      <div class="uk-form-controls">
                          <input class="uk-input" type="text" placeholder="Address line 1" v-model="address_line_1">
                      </div>
                  </div>
                  <div class="uk-margin">
                      <label class="uk-form-label" for="form-stacked-text">Address line 2</label>
                      <div class="uk-form-controls">
                          <input class="uk-input" type="text" placeholder="Address line 2" v-model="address_line_2">
                      </div>
                  </div>
                  <div class="uk-margin">
                      <label class="uk-form-label" for="form-stacked-text">Address line 3</label>
                      <div class="uk-form-controls">
                          <input class="uk-input" type="text" placeholder="Address line 3" v-model="address_line_3">
                      </div>
                  </div>
                  <div class="uk-margin">
                      <label class="uk-form-label" for="form-stacked-text">Address line 4</label>
                      <div class="uk-form-controls">
                          <input class="uk-input" type="text" placeholder="Address line 4" v-model="address_line_4">
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
                          <input class="uk-input" type="text" placeholder="Mobile Number" v-model="mobile_number">
                      </div>
                  </div>
                  <div class="uk-margin">
                      <label class="uk-form-label" for="form-stacked-text">Status</label>
                      <div class="uk-form-controls">
                          <input class="uk-input" type="text" placeholder="Status" v-model="status">
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
          "axios": axios
      },

    data() {
        return {
            farm_name:"",
            address_line_1:"",
            address_line_2:"",
            address_line_3:"",
            address_line_4:"",
            email:"",
            mobile_number:"",
            status:""
        }
    },
    methods: {
        updateProduct(){
            let request = {
                    farm_name: this.farm_name,
                    address_line_1: this.address_line_1,
                    address_line_2: this.address_line_2,
                    address_line_3: this.address_line_3,
                    address_line_4: this.address_line_4,
                    email: this.email,
                    mobile_number: this.mobile_number,
                    status: this.status,
                    wine_farm_id: this.$route.params.id
                };
                console.log("Request: ", request);
                axios.post(this.$store.state.api_url + '/wine-farm_update', request)
                    .then(response => {
                        // Add entity to session in vuex
                        console.log('Response: ', response);
                        this.$router.push("/farm/" + this.$route.params.id);
                    })
                    .catch(error => {
                        console.log(error.response);
                        if(error.response.status == 400){
                            console.log(error.response);
                        }
                        if(error.response.status == 401){
                            console.log(error.response);
                            // login / session expired
                        }
                        if(error.response.status == 403){
                            console.log(error.response);
                            // broke a rule
                            new Error();
                            // this.$router.push("/error");
                        }
                        if(error.response.status == 404){
                            console.log(error.response);
                            // page not found / not there
                        }
                        if(error.response.status == 500){
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

