<template>
    <div class="container">
        <div class="content-background">
            <div class="uk-container uk-container-large uk-padding-remove">
                <div class="uk-card uk-card-default card_create" >
                    <div class="uk-card-body">
                        <div uk-grid>
                            <h1>Place your Order</h1>
                            <div class="uk-card-body" style="width: 100%; height: 75vh;">
                            <input type="text" v-model="search" placeholder="Search" style="width: 500px; height: 50px;">
                                <div style="width: 100%; height: 50vh; overflow-y: scroll;">
                                    <table
                                      class="uk-table uk-table-divider"
                                      style="height: 48vh;">
                                      <thead>
                                        <tr>
                                          <th>Group Description</th>
                                          <th>Description</th>
                                          <th>Product Name</th>
                                          <th>Item Code</th>
                                          <th>Quantity</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr
                                          v-for="t in filteredCustomers"
                                          :key="t.id">
                                          <td>{{ t.product_classification }}</td>  <!-- width="20%"  -->
                                          <td>{{ t.description }}</td>
                                          <td>{{ t.product_name }}</td>
                                          <td>{{ t.item_code }}</td>
                                          <td><input type="number" v-model="t.quantity"></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                </div>
                              </div>
                              <h1>Order</h1>
                              <div class="uk-card-body" style="width: 100%; height: 75vh;">
                                <div style="width: 100%; height: 50vh; overflow-y: scroll;">
                                    <table
                                      name="myText"
                                      id="myText"
                                      class="uk-table uk-table-divider"
                                      style="height: 48vh;">
                                      <thead>
                                        <tr>
                                          <th>Group Description</th>
                                          <th>Description</th>
                                          <th>Product Name</th>
                                          <th>Item Code</th>
                                          <th>Quantity</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr
                                          v-for="t in toOrder"
                                          :key="t.id">
                                          <td>{{ t.product_classification }}</td>  <!-- width="20%"  -->
                                          <td>{{ t.description }}</td>
                                          <td>{{ t.product_name }}</td>
                                          <td>{{ t.item_code }}</td>
                                          <td>{{ t.quantity }}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                </div>
                                <button class="uk-button uk-button-default" @click="orderMe()">Order</button>
                            </div>
                        </div>
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
      title: 'WCW Permissions',
    };
  },
  data() {
    return {
      search: '',
      rowData: [],
    };
  },
  computed: {
    filteredCustomers: function() {
      var self = this;
      return this.rowData.filter(function(cust) {
        return (
          cust.product_name.toLowerCase().indexOf(self.search.toLowerCase()) >=
          0
        );
      });
      //return this.customers;
    },
    toOrder: function() {
      return this.rowData.filter(function(i) {
        return i.quantity > 0;
      });
    },
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
    mobileValueGetter(params) {
      if (params.data.mobile_country_code && params.data.mobile_no_exl) {
        return (
          '+' +
          params.data.mobile_country_code +
          ' ' +
          params.data.mobile_no_exl
        );
      } else {
        return 'No mobile number';
      }
    },
    loadProductList() {
      var _this = this;
      let request = {};
      axios
        .post(this.$store.state.api_url + '/product_list', request)
        .then(response => {
          console.log(response);
          for (var i = 0; i < response.data.data.records.length; i++) {
            response.data.data.records[
              i
            ].wine_farm = response.data.data.records[i].description.substring(
              0,
              2
            );
            response.data.data.records[
              i
            ].description = response.data.data.records[i].description.replace(
              /@@@@@@@@@@@@@@/g,
              '@-@-@-@-@-@-@-@'
            );
            response.data.data.records[
              i
            ].description = response.data.data.records[i].description.replace(
              /@@@@@@@@@@@@@/g,
              '@-@-@-@-@-@-@'
            );
            response.data.data.records[
              i
            ].description = response.data.data.records[i].description.replace(
              /@@@@@@@@@@@/g,
              '@-@-@-@-@-@'
            );
            response.data.data.records[
              i
            ].description = response.data.data.records[i].description.replace(
              /@@@@@@@@@/g,
              '@-@-@-@-@'
            );
            response.data.data.records[
              i
            ].description = response.data.data.records[i].description.replace(
              /@@@@@@@/g,
              '@-@-@-@'
            );
            response.data.data.records[
              i
            ].description = response.data.data.records[i].description.replace(
              /@@@@@/g,
              '@-@-@'
            );
            response.data.data.records[
              i
            ].description = response.data.data.records[i].description.replace(
              /@@@@/g,
              '@-@-@'
            );
            response.data.data.records[
              i
            ].description = response.data.data.records[i].description.replace(
              /@@@/g,
              '@-@'
            );
            var str_arr = response.data.data.records[i].description.split(
              /[@]+/
            );
            response.data.data.records[i].cultivar = str_arr[4];
            response.data.data.records[
              i
            ].description = response.data.data.records[i].description.replace(
              /@@@@@@@@@@@@@@/g,
              ' '
            );
            response.data.data.records[
              i
            ].description = response.data.data.records[i].description.replace(
              /@@@@@@@@@@@@@/g,
              ' '
            );
            response.data.data.records[
              i
            ].description = response.data.data.records[i].description.replace(
              /@@@@@@@@@@@/g,
              ' '
            );
            response.data.data.records[
              i
            ].description = response.data.data.records[i].description.replace(
              /@@@@@@@@@/g,
              ' '
            );
            response.data.data.records[
              i
            ].description = response.data.data.records[i].description.replace(
              /@@@@@@@/g,
              ' '
            );
            response.data.data.records[
              i
            ].description = response.data.data.records[i].description.replace(
              /@@@@@/g,
              ' '
            );
            response.data.data.records[
              i
            ].description = response.data.data.records[i].description.replace(
              /@@@@/g,
              ' '
            );
            response.data.data.records[
              i
            ].description = response.data.data.records[i].description.replace(
              /@@@/g,
              ' '
            );
            response.data.data.records[
              i
            ].description = response.data.data.records[i].description.replace(
              /@@/g,
              ' '
            );
            response.data.data.records[
              i
            ].description = response.data.data.records[i].description.replace(
              /@/g,
              ' '
            );
          }
          _this.rowData = response.data.data.records;
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    sizeToFit() {
      gridOptions.api.sizeColumnsToFit();
    },
    autoSizeAll() {
      var allColumnIds = [];
      gridOptions.columnApi.getAllColumns().forEach(function(column) {
        allColumnIds.push(column.colId);
      });
      gridOptions.columnApi.autoSizeColumns(allColumnIds);
    },
    orderMe() {
      var link =
        'mailto:me@example.com' +
        '?cc=myCCaddress@example.com' +
        '&subject=' +
        escape('This is my subject') +
        '&body=' +
        escape(`
          <h1>Order</h1>
          <table>
            <thead>
              <tr>
                <th>Group Description</th>
                <th>Description</th>
                <th>Product Name</th>
                <th>Item Code</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <% for (var i = 0; i < toOrder.length; i++) { %>
                <%=toOrder[i].amenities_name%>
              <tr>
                <td><%=toOrder[i].product_classification%></td>
                <td><%=toOrder[i].description%></td>
                <td><%=toOrder[i].product_name%></td>
                <td><%=toOrder[i].item_code%></td>
                <td><%=toOrder[i].quantity%></td>
              </tr>
              <% } %>
            </tbody>
          </table>
        `);
      window.location.href = link;
    },
  },
  beforeMount() {
    this.checkAuthState();
  },
  mounted() {
    this.loadProductList();
  },
};
</script>
<style>
</style>
