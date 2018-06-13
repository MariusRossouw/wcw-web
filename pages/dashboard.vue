<template>
    <div class="container">
        <button type="button" class="uk-button uk-button-default" @click="logoutButton()">Logout</button>
        <div class="uk-card-body">
            <div style="width: 100%; height: 400px;">
                <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptions" :columnDefs="columnDefs" :rowData="rowData">
                </ag-grid-vue>
            </div>
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
        data() {
            return {
                columnDefs: [
                    {headerName: "Country", field: "country", width: 120, rowGroup: true},
                    {headerName: "Year", field: "year", width: 90, rowGroup: true},
                    {headerName: "Date", field: "date", width: 110},
                    {headerName: "Sport", field: "sport", width: 110},
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
            logoutButton() {
                localStorage.removeItem("State");
                this.$router.push("/login");
            },
            onBtNormal() {
                gridOptions.columnApi.setPivotMode(false);
                gridOptions.columnApi.setPivotColumns([]);
                gridOptions.columnApi.setRowGroupColumns(['country','year']);
            },
            onBtPivotMode() {
                gridOptions.columnApi.setPivotMode(true);
                gridOptions.columnApi.setPivotColumns([]);
                gridOptions.columnApi.setRowGroupColumns(['country','year']);
            },
            onBtFullPivot() {
                gridOptions.columnApi.setPivotMode(true);
                gridOptions.columnApi.setPivotColumns(['year']);
                gridOptions.columnApi.setRowGroupColumns(['country']);
            }
        },
        beforeMount() {
            let ls = JSON.parse(localStorage.getItem("State"));
            console.log(ls);
            if(!ls){
                this.$router.push("/login");
            } else {
                this.gridOptions = {
                    // set rowData to null or undefined to show loading panel by default\
                    enableColResize: true,
                    enableSorting: true
                };
                this.gridOptions2 = {
                    // set rowData to null or undefined to show loading panel by default
                    enableColResize: true,
                    enableSorting: true
                };
            }
        },
        mounted() {
            var _this = this;
            axios.get(`https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinners.json`).then(function(response) {
                console.log(response);
                gridOptions.api.setColumnDefs(_this.columnDefs);
                gridOptions.api.setRowData(JSON.parse(response));
                gridOptions2.api.setColumnDefs(_this.columnDefs2)
                gridOptions2.api.setRowData(JSON.parse(response));

                // _this.rowData = response.data.data;
                // _this.rowData2 = response.data.data;
            });
        }
    };
</script>
<style>
    .container {
        height: 550px;
    }
</style>

