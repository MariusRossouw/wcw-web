<template>
    <div>
        <h1 style="margin-left: 40px;">List of Products</h1>
        <div class="uk-card-body" style="width: 100%; height: 400px">
            <div style="width: 100%; height: 60vh;">
                <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptions" :columnDefs="columnDefs" :rowData="rowData">
                </ag-grid-vue>
            </div>
            <button @click="onBtExport()">Export</button>
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
                title: "WCW Permissions"
            };
        },
        data() {
            return {
                columnDefs: [
                    {headerName: "Farm Name", field: "farm_name", minWidth: 90, headerClass: 'resizable-header'},
                    // {headerName: "Farm Name", field: "farm_name", minWidth: 90, headerClass: 'resizable-header'} add contact person / sales on farm
                ],
                rowData:[],
                show_results_filter_selected: 0,
                search_text: '',
                gridOptions: {
                    onRowDoubleClicked: this.openFarm,
                    rowSelection: 'single',
                    suppressPropertyNamesCheck: true,
                    enableColResize: true,
                    onGridReady: function(params) {
                        params.api.sizeColumnsToFit();
                    }
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
            mobileValueGetter(params) {
                if(params.data.mobile_country_code && params.data.mobile_no_exl){
                    return '+' + params.data.mobile_country_code + ' ' + params.data.mobile_no_exl;
                } else {
                    return 'No mobile number';
                }
            },
            openFarm(params){
                console.log(params);
                this.$router.push("/farm/" + params.data.product_id);
            },
            onBtExport() {
                var params = {
                    fileName: "Users list",
                    sheetName: 'List of users'
                };
                this.gridOptions.api.exportDataAsExcel(params);
            },
            loadProductList() {
                var _this = this;
                let request = {};
                axios.post(this.$store.state.api_url + '/product_list', request)
                .then(response => {
                    console.log(response);
                    _this.gridOptions.api.setColumnDefs(_this.columnDefs);
                    _this.gridOptions.api.setRowData(response.data.data.records);
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
            }
        },
        beforeMount() {
            this.checkAuthState();
        },
        mounted() {
            this.loadProductList();
        }
    };
</script>
<style>

</style>

