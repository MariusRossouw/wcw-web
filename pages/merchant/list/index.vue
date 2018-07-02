<template>
    <div>
        <h1>List of Users</h1>
        <div class="uk-card-body" style="width: 100%; height: 400px">
            <button @click="onBtNormal()">1 - Grouping Active</button>
            <button @click="onBtPivotMode()">2 - Grouping Active with Pivot Mode</button>
            <button @click="onBtFullPivot()">3 - Grouping Active with Pivot Mode and Pivot Active</button>
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
                title: "WCW Users List"
            };
        },
        data() {
            return {
                columnDefs: [
                    {headerName: "ID", field: "id", width: 120},
                    {headerName: "Full Name", field: "full_name", width: 90},
                    {headerName: "Display Name", field: "display_name", width: 110},
                    {headerName: "Email", field: "email", width: 110},
                    {headerName: "Mobile", field: "mobile_no", width: 100},
                    {headerName: "Entity Number", field: "entity_number", width: 100},
                    {headerName: "Gender", field: "gender", width: 100}
                ],
                rowData:[],
                show_results_filter_selected: 0,
                search_text: '',
                gridOptions: {
                    rowSelection: 'single',
                    suppressPropertyNamesCheck: true
                }
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
                    fileName: "Users list",
                    sheetName: 'List of users'
                };

                this.gridOptions.api.exportDataAsExcel(params);
            },
            loadUserList() {
                var _this = this;
                axios.get(this.$store.state.api_url + '/user_profiles')
                .then(response => {
                    console.log(response);
                    _this.gridOptions.api.setColumnDefs(_this.columnDefs);
                    _this.gridOptions.api.setRowData(response.data.data);
                })
                .catch(error => {
                    console.log(error.response);
                });
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
            this.loadUserList();
        }
    };
</script>
<style>

</style>

