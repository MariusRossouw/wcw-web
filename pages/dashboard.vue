<template>
    <div >
        <div class="uk-card-body uk-width-1-1">
            <button @click="onBtNormal()">1 - Grouping Active</button>
            <button @click="onBtPivotMode()">2 - Grouping Active with Pivot Mode</button>
            <button @click="onBtFullPivot()">3 - Grouping Active with Pivot Mode and Pivot Active</button>
            <div class="gridSize">
                <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptions" :columnDefs="columnDefs" :rowData="rowData">
                </ag-grid-vue>
            </div>
            <button @click="onBtExport()">Export</button>
        </div>
        <div class="uk-card-body uk-width-1-1">
            <div class="gridSize">
                <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptions2" :columnDefs="columnDefs2" :rowData="rowData2">
                </ag-grid-vue>
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
                title: "WCW Dashboard"
            };
        },
        data() {
            return {
                columnDefs: [
                    {headerName: "Province", field: "province_name", minWidth: 120, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Region", field: "region_name", minWidth: 90, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Group", field: "group_name", minWidth: 110, rowGroup: true, headerClass: 'resizable-header', onCellDoubleClicked: this.openGroup},
                    {headerName: "Merchant", field: "merchant_name", minWidth: 110, rowGroup: true, headerClass: 'resizable-header', onCellDoubleClicked: this.openMerchant},
                    {headerName: "Rep", field: "rep_name", minWidth: 110, rowGroup: true, headerClass: 'resizable-header', onCellDoubleClicked: this.openRep},
                    {headerName: "Farm", field: "farm_name", minWidth: 110, rowGroup: true, headerClass: 'resizable-header', onCellDoubleClicked: this.openFarm},
                    {headerName: "Year", field: "transaction_year", minWidth: 110, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Month", field: "transaction_month", minWidth: 100, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Value", field: "sale", minWidth: 100, aggFunc: 'sum', headerClass: 'resizable-header'},
                    {headerName: "Volume", field: "litres", minWidth: 100, aggFunc: 'sum', headerClass: 'resizable-header'},
                    {headerName: "Percentage", field: "percentage", minWidth: 100, aggFunc: 'sum', headerClass: 'resizable-header'} // of budget
                ],
                columnDefs2: [
                    {headerName: "Type", field: "color", minWidth: 120, rowGroup: true, headerClass: 'resizable-header'}, // red/white/mcc
                    {headerName: "Group", field: "group_name", minWidth: 110, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Product", field: "product_name", minWidth: 110, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Year", field: "transaction_year", minWidth: 110, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Month", field: "transaction_month", minWidth: 100, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Value", field: "sale", minWidth: 100, aggFunc: 'sum', headerClass: 'resizable-header'},
                    {headerName: "Volume", field: "litres", minWidth: 100, aggFunc: 'sum', headerClass: 'resizable-header'},
                    {headerName: "Percentage", field: "percentage", minWidth: 100, aggFunc: 'sum', headerClass: 'resizable-header'} // of budget
                    
                    
                ],
                // columnDefs: [
                //     {headerName: "Country", field: "country", width: 120, rowGroup: true},
                //     {headerName: "Year", field: "year", width: 90, rowGroup: true},
                //     {headerName: "Date", field: "date", width: 110},
                //     {headerName: "Sport", field: "sport", width: 110, rowGroup: true},
                //     {headerName: "Gold", field: "gold", width: 100, aggFunc: 'sum'},
                //     {headerName: "Silver", field: "silver", width: 100, aggFunc: 'sum'},
                //     {headerName: "Bronze", field: "bronze", width: 100, aggFunc: 'sum'}
                // ],
                rowData:[],
                show_results_filter_selected: 0,
                search_text: '',
                gridOptions: {
                    // onRowDoubleClicked: this.openProfile,
                    suppressPropertyNamesCheck: true,
                    enableColResize: true,
                    onGridReady: function(params) {
                        params.api.sizeColumnsToFit();
                    }
                },
                // columnDefs2: [
                //     {headerName: "Country", field: "country", width: 120, rowGroup: true},
                //     {headerName: "Year", field: "year", width: 90, rowGroup: true},
                //     {headerName: "Date", field: "date", width: 110},
                //     {headerName: "Sport", field: "sport", width: 110},
                //     {headerName: "Gold", field: "gold", width: 100, aggFunc: 'sum'},
                //     {headerName: "Silver", field: "silver", width: 100, aggFunc: 'sum'},
                //     {headerName: "Bronze", field: "bronze", width: 100, aggFunc: 'sum'}
                // ],
                rowData2:[],
                show_results_filter_selected2: 0,
                search_text2: '',
                gridOptions2: {
                    // onRowDoubleClicked: this.openProfile,
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
            openGroup(params){
                console.log(params);
                this.$router.push("/group/" + params.data.group_id);
            },
            openMerchant(params){
                console.log(params);
                this.$router.push("/merchant/" + params.data.merchant_id);
            },
            openRep(params){
                console.log(params);
                this.$router.push("/user/" + params.data.profile_id);
            },
            openFarm(params){
                console.log(params);
                this.$router.push("/farm/" + params.data.farm_id);
            },
            getData1() {
                var _this = this;
                let request = {};
                axios.post(this.$store.state.api_url + '/transactions_province', request)
                .then(response => {
                    console.log(response);
                    _this.gridOptions.api.setColumnDefs(_this.columnDefs);
                    _this.gridOptions.api.setRowData(response.data.data.records);
                })
                .catch(error => {
                    console.log(error.response);
                });
            },
            getData2() {
                var _this = this;
                let request = {};
                axios.post(this.$store.state.api_url + '/transactions', request)
                .then(response => {
                    console.log(response);
                    _this.gridOptions2.api.setColumnDefs(_this.columnDefs2)
                    _this.gridOptions2.api.setRowData(response.data.data.records);
                })
                .catch(error => {
                    console.log(error.response);
                });
            },
            onBtNormal() {
                this.gridOptions.columnApi.setPivotMode(false);
                this.gridOptions.columnApi.setPivotColumns([]);
                this.gridOptions.columnApi.setRowGroupColumns(['province_name','transaction_year']);
            },
            onBtPivotMode() {
                this.gridOptions.columnApi.setPivotMode(true);
                this.gridOptions.columnApi.setPivotColumns([]);
                this.gridOptions.columnApi.setRowGroupColumns(['province_name','transaction_year']);
            },
            onBtFullPivot() {
                this.gridOptions.columnApi.setPivotMode(true);
                this.gridOptions.columnApi.setPivotColumns(['transaction_year']);
                this.gridOptions.columnApi.setRowGroupColumns(['province_name', 'region_name', 'group_name', 'merchant_name']);
            },
            onBtExport() {
                var params = {
                    // skipHeader: getBooleanValue('#skipHeader'),
                    // columnGroups: getBooleanValue('#columnGroups'),
                    // skipFooters: getBooleanValue('#skipFooters'),
                    // skipGroups: getBooleanValue('#skipGroups'),
                    // skipPinnedTop: getBooleanValue('#skipPinnedTop'),
                    // skipPinnedBottom: getBooleanValue('#skipPinnedBottom'),
                    // allColumns: getBooleanValue('#allColumns'),
                    // onlySelected: getBooleanValue('#onlySelected'),
                    fileName: "filename",
                    sheetName: 'sheetName'
                };

                // if (getBooleanValue('#skipGroupR')) {
                //     params.shouldRowBeSkipped = function(params) {
                //         return params.node.data.country.charAt(0) === 'R'
                //     };
                // }

                // if (getBooleanValue('#useCellCallback')) {
                //     params.processCellCallback = function(params) {
                //         if (params.value && params.value.toUpperCase) {
                //             return params.value.toUpperCase();
                //         } else {
                //             return params.value;
                //         }
                //     };
                // }

                // if (getBooleanValue('#useSpecificColumns')) {
                //     params.columnKeys = ['country','bronze'];
                // }

                // if (getBooleanValue('#processHeaders')) {
                //     params.processHeaderCallback  = function(params) {
                //         return params.column.getColDef().headerName.toUpperCase();
                //     };
                // }

                // if (getBooleanValue('#appendHeader')) {
                //     params.customHeader  = [
                //         [],
                //         [{data:{type:'String', value:'Summary'}}],
                //         [
                //             {data:{type:'String', value:'Sales'}, mergeAcross:2},
                //             {data:{type:'Number', value:'3695.36'}}
                //         ],
                //         []
                //     ];
                // }

                // if (getBooleanValue('#appendFooter')) {
                //     params.customFooter  = [
                //         [],
                //         [{data:{type:'String', value:'Footer'}}],
                //         [
                //             {data:{type:'String', value:'Purchases'}, mergeAcross:2},
                //             {data:{type:'Number', value:'7896.35'}}
                //         ],
                //         []
                //     ];
                // }

                this.gridOptions.api.exportDataAsExcel(params);
            }
        },
        beforeMount() {
            this.checkAuthState();
        },
        mounted() {
            this.getData1();
            this.getData2();
        }
    };
</script>
<style>

</style>

