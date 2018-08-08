<template>
    <div class="container">
        <div class="content-background">
            <div class="uk-container uk-container-large uk-padding-remove">
                <div class="uk-card uk-card-default card_create" >
                    <div class="uk-card-body">
                        <div uk-grid>
                            <h1>List of Wine Farms</h1>
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
    import { AgGridVue } from "ag-grid-vue";
    import axios from 'axios';
    export default {
        components: {
            "ag-grid-vue": AgGridVue,
            "axios": axios
        },
        head() {
            return {
                title: "WCW Wine Farm List"
            };
        },
        data() {
            return {
                columnDefs: [
                    {headerName: "Farm Name", field: "farm_name", minWidth: 90, headerClass: 'resizable-header', onCellDoubleClicked: this.openWineFarm},
                    {headerName: "Address 1", field: "address_line_1", minWidth: 110, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Address 2", field: "address_line_2", minWidth: 110, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Address 3", field: "address_line_3", minWidth: 110, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Address 4", field: "address_line_4", minWidth: 110, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Mobile Number", field: "mobile_number", minWidth: 110, rowGroup: true, headerClass: 'resizable-header'},
                    {headerName: "Email", field: "email", minWidth: 110, rowGroup: true, headerClass: 'resizable-header'}
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
            loadWineFarmList() {
                var _this = this;
                let request = {};
                axios.post(this.$store.state.api_url + '/wine_farm_list', request)
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
            this.loadWineFarmList();
        }
    };
</script>
<style>

</style>

