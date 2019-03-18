<template>
    <div class="container">
        <div class="uk-container uk-container-large uk-padding-remove">
            <div class="uk-card uk-card-default card_create">
                <div class="uk-card-body">
                    <div uk-grid>

                        <div class="uk-form-stacked">
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">abrv</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Abrv" v-model="abrv">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Product Name</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Product Name" v-model="product_name">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Cultivar</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Cultivar" v-model="cultivar">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Special</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Special" v-model="special">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Description</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Description" v-model="description">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Product Classification</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Product Classification" v-model="product_classification">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Vintage</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Vintage" v-model="vintage">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Blend</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Blend" v-model="blend">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Color</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Color" v-model="color">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Item Code</label>
                                <div class="uk-form-controls">
                                    {{ item_code }}
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Size</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Size" v-model="size">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Volume</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Volume" v-model="volume">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Measurement</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Measurement" v-model="measurement">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Case Size</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Case Size" v-model="case_size">
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
    axios: axios,
  },

  data() {
    return {
      abrv: '',
      product_name: '',
      cultivar: '',
      special: '',
      description: '',
      product_classification: '',
      vintage: '',
      blend: '',
      color: '',
      item_code: '',
      size: '',
      volume: '',
      measurement: '',
      case_size: '',
      status: '',
    };
  },
  methods: {
    updateProduct() {
      let request = {
        product_id: this.$route.params.id,
        update: {
          abrv: this.abrv,
          product_name: this.product_name,
          cultivar: this.cultivar,
          special: this.special,
          description: this.description,
          product_classification: this.product_classification,
          vintage: this.vintage,
          blend: this.blend,
          color: this.color,
          size: this.size,
          volume: this.volume,
          measurement: this.measurement,
          case_size: this.case_size,
          status: this.status,
          product_id: this.$route.params.id,
        },
      };
      console.log('Request: ', request);
      axios
        .post(this.$store.state.api_url + '/product_update', request)
        .then(response => {
          // Add entity to session in vuex
          console.log('Response: ', response);
          this.$router.push('/product/' + this.$route.params.id);
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
