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
                    {headerName: "Product Name", field: "product_name", minWidth: 90, headerClass: 'resizable-header',onCellDoubleClicked: this.openProduct},
                    {headerName: "Product Type", field: "product_type", minWidth: 110, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Wine Farm", field: "wine_farm", minWidth: 110, rowGroup: true, headerClass: 'resizable-header',onCellDoubleClicked: this.openWineFarm},
                    {headerName: "Description", field: "description", minWidth: 110, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Vintage", field: "vintage", minWidth: 110, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Blend", field: "blend", minWidth: 110, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Color", field: "color", minWidth: 110, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Item Code", field: "item_code", minWidth: 110, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Size", field: "size", minWidth: 110, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Volume", field: "volume", minWidth: 110, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Status", field: "status", minWidth: 90, headerClass: 'resizable-header'}
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
            openProduct(params){
                console.log(params);
                this.$router.push("/product/" + params.data.product_id);
            },
            openWineFarm(params){
                console.log(params);
                this.$router.push("/farm/" + params.data.wine_farm_id);
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

