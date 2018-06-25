<template>
    <div class="container">
        <div class="uk-card-body">
            <button @click="onBtNormal()">1 - Grouping Active</button>
            <button @click="onBtPivotMode()">2 - Grouping Active with Pivot Mode</button>
            <button @click="onBtFullPivot()">3 - Grouping Active with Pivot Mode and Pivot Active</button>
            <div style="width: 100%; height: 400px;">
                <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptions" :columnDefs="columnDefs" :rowData="rowData">
                </ag-grid-vue>
            </div>
            <button @click="onBtExport()">Export</button>
        </div>
        <div class="uk-card-body">
            <div style="width: 100%; height: 400px;">
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
                // columnDefs: [
                //     {headerName: "Province", field: "province", width: 120, rowGroup: true},
                //     {headerName: "Region", field: "region", width: 90, rowGroup: true},
                //     {headerName: "Store", field: "store", width: 110, rowGroup: true},
                //     {headerName: "Year", field: "year", width: 110, rowGroup: true},
                //     {headerName: "Month", field: "month", width: 100, rowGroup: true},
                //     {headerName: "Value", field: "value", width: 100, aggFunc: 'sum'},
                //     {headerName: "Volume", field: "volume", width: 100, aggFunc: 'sum'},
                //     {headerName: "Percentage", field: "percentage", width: 100, aggFunc: 'sum'} // of budget
                // ],
                // columnDefs: [
                //     {headerName: "Type", field: "type", width: 120, rowGroup: true}, // red/white/mcc
                //     {headerName: "Year", field: "year", width: 110, rowGroup: true},
                //     {headerName: "Month", field: "month", width: 100, rowGroup: true},
                //     {headerName: "Value", field: "value", width: 100, aggFunc: 'sum'},
                //     {headerName: "Volume", field: "volume", width: 100, aggFunc: 'sum'},
                //     {headerName: "Percentage", field: "percentage", width: 100, aggFunc: 'sum'} // of budget
                // ],
                columnDefs: [
                    {headerName: "Country", field: "country", width: 120, rowGroup: true},
                    {headerName: "Year", field: "year", width: 90, rowGroup: true},
                    {headerName: "Date", field: "date", width: 110},
                    {headerName: "Sport", field: "sport", width: 110, rowGroup: true},
                    {headerName: "Gold", field: "gold", width: 100, aggFunc: 'sum'},
                    {headerName: "Silver", field: "silver", width: 100, aggFunc: 'sum'},
                    {headerName: "Bronze", field: "bronze", width: 100, aggFunc: 'sum'}
                ],
                rowData:[],
                show_results_filter_selected: 0,
                search_text: '',
                gridOptions: {},
                columnDefs2: [
                    {headerName: "Country", field: "country", width: 120, rowGroup: true},
                    {headerName: "Year", field: "year", width: 90, rowGroup: true},
                    {headerName: "Date", field: "date", width: 110},
                    {headerName: "Sport", field: "sport", width: 110},
                    {headerName: "Gold", field: "gold", width: 100, aggFunc: 'sum'},
                    {headerName: "Silver", field: "silver", width: 100, aggFunc: 'sum'},
                    {headerName: "Bronze", field: "bronze", width: 100, aggFunc: 'sum'}
                ],
                rowData2:[],
                show_results_filter_selected2: 0,
                search_text2: '',
                gridOptions2: {}
            };  
        },
        methods: {
            onBtNormal() {
                this.gridOptions.columnApi.setPivotMode(false);
                this.gridOptions.columnApi.setPivotColumns([]);
                this.gridOptions.columnApi.setRowGroupColumns(['country','year']);
            },
            onBtPivotMode() {
                this.gridOptions.columnApi.setPivotMode(true);
                this.gridOptions.columnApi.setPivotColumns([]);
                this.gridOptions.columnApi.setRowGroupColumns(['country','year']);
            },
            onBtFullPivot() {
                this.gridOptions.columnApi.setPivotMode(true);
                this.gridOptions.columnApi.setPivotColumns(['year']);
                this.gridOptions.columnApi.setRowGroupColumns(['country']);
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
            var _this = this;
            axios.get(`https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinners.json`)
            .then(response => {
                console.log(response);
                _this.gridOptions.api.setColumnDefs(_this.columnDefs);
                _this.gridOptions.api.setRowData(response.data);
                _this.gridOptions2.api.setColumnDefs(_this.columnDefs2)
                _this.gridOptions2.api.setRowData(response.data);
            })
            .catch(error => {
                console.log(error.response);
            });
        }
    };
</script>
<style>
    .container {
        height: 550px;
    }
</style>

