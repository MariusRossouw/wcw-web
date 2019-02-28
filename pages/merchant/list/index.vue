<template>
    <div class="container">
        <div class="content-background">
            <div class="uk-container uk-container-large uk-padding-remove">
                <div class="uk-card uk-card-default card_create" >
                    <div class="uk-card-body">
                        <div uk-grid>
                            <h1>List of Merchants</h1>
                            <div class="uk-card-body" style="width: 100%; height: 75vh;">
                                <div style="width: 100%; height: 70vh;">
                                    <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptions" :columnDefs="columnDefs" :rowData="rowData">
                                    </ag-grid-vue>
                                </div>
                                <button class="uk-button uk-button-default" @click="onBtExport()">Export</button>
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
      title: 'WCW Users List',
    };
  },
  data() {
    return {
      columnDefs: [
        {
          headerName: 'Merchant Name',
          field: 'merchant_name',
          minWidth: 90,
          headerClass: 'resizable-header',
          onCellDoubleClicked: this.openMerchant,
        },
        {
          headerName: 'Address 1',
          field: 'address_line_1',
          minWidth: 110,
          headerClass: 'resizable-header',
        },
        {
          headerName: 'Address 2',
          field: 'address_line_2',
          minWidth: 110,
          headerClass: 'resizable-header',
        },
        {
          headerName: 'Address 3',
          field: 'address_line_3',
          minWidth: 110,
          headerClass: 'resizable-header',
        },
        {
          headerName: 'Address 4',
          field: 'address_line_4',
          minWidth: 110,
          headerClass: 'resizable-header',
        },
        {
          headerName: 'Mobile Number',
          field: 'mobile_number',
          minWidth: 110,
          headerClass: 'resizable-header',
        },
        {
          headerName: 'Email',
          field: 'email',
          minWidth: 110,
          headerClass: 'resizable-header',
        },
        {
          headerName: 'Region',
          field: 'region',
          minWidth: 110,
          headerClass: 'resizable-header',
        },
        {
          headerName: 'Division',
          field: 'division',
          minWidth: 110,
          headerClass: 'resizable-header',
        },
        {
          headerName: 'Province',
          field: 'province',
          minWidth: 110,
          headerClass: 'resizable-header',
        },
        {
          headerName: 'Merchant Group',
          field: 'merchant_group',
          minWidth: 110,
          headerClass: 'resizable-header',
          onCellDoubleClicked: this.openMerchantGroup,
        },
      ],
      rowData: [],
      show_results_filter_selected: 0,
      search_text: '',
      gridOptions: {
        rowSelection: 'single',
        suppressPropertyNamesCheck: true,
      },
    };
  },
  methods: {
    onBtNormal() {
      this.gridOptions.columnApi.setPivotMode(false);
      this.gridOptions.columnApi.setPivotColumns([]);
      this.gridOptions.columnApi.setRowGroupColumns(['country', 'year']);
    },
    onBtPivotMode() {
      this.gridOptions.columnApi.setPivotMode(true);
      this.gridOptions.columnApi.setPivotColumns([]);
      this.gridOptions.columnApi.setRowGroupColumns(['country', 'year']);
    },
    onBtFullPivot() {
      this.gridOptions.columnApi.setPivotMode(true);
      this.gridOptions.columnApi.setPivotColumns(['year']);
      this.gridOptions.columnApi.setRowGroupColumns(['country']);
    },
    onBtExport() {
      var params = {
        fileName: 'Merchant list',
        sheetName: 'List of merchant',
      };

      this.gridOptions.api.exportDataAsExcel(params);
    },
    loadMerchantList() {
      var _this = this;
      let request = {};
      axios
        .post(this.$store.state.api_url + '/merchant_list', request)
        .then(response => {
          console.log(response);
          _this.gridOptions.api.setColumnDefs(_this.columnDefs);
          _this.gridOptions.api.setRowData(response.data.data.records);
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    openMerchant(params) {
      console.log(params);
      this.$router.push('/merchant/' + params.data.merchant_id);
    },
    openMerchantGroup(params) {
      console.log(params);
      this.$router.push('/merchantGroup/' + params.data.merchant_group_id);
    },
  },
  // beforeMount() {
  //     let ls = JSON.parse(localStorage.getItem("State"));
  //     console.log(ls);
  //     if(!ls){
  //         this.$router.push("/login");
  //     } else {
  //         this.gridOptions = {
  //             // set rowData to null or undefined to show loading panel by default\
  //             enableColResize: true,
  //             enableSorting: true
  //         };
  //         this.gridOptions2 = {
  //             // set rowData to null or undefined to show loading panel by default
  //             enableColResize: true,
  //             enableSorting: true
  //         };
  //     }
  // },
  mounted() {
    this.loadMerchantList();
  },
};
</script>
<style>
</style>
