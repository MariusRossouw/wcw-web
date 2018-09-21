
<template>
    <div class="container">
        <div class="content-background">
            <div class="uk-container uk-container-large uk-padding-remove">
                <div class="uk-grid-match uk-grid-small uk-text-center" uk-grid>
                    <div class="uk-width-1-3@m">
                        <label class="uk-form-label" for="form-stacked-text">Month</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" v-model="month">
                                <option v-for="month in month_list" :value="month.month" :key="month.month">
                                {{month.month}}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="uk-width-1-3@m">
                        <label class="uk-form-label" for="form-stacked-text">Year</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" v-model="year">
                                <option v-for="year in year_list" :value="year.year" :key="year.year">
                                {{year.year}}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="uk-width-1-3@m">
                        <button class="uk-button uk-button-default" @click="createReports()">Create Reports</button>
                    </div>
                    <div class="uk-width-1-1@m">
                        <div class="uk-grid-small" uk-grid>
                            <div class="uk-width-1-1@m">
                                <div class="uk-card-small uk-width-1-1">
                                    <h3>Overall Sales Month to Date</h3>
                                    <div class="gridSize">
                                        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptionsOMTD" :columnDefs="columnDefsOMTD" :rowData="rowDataOMTD">
                                        </ag-grid-vue>
                                    </div>
                                    <button class="uk-button uk-button-default" @click="onBtExportOMTD()">Export</button>
                                </div>
                                <div class="uk-card-small uk-width-1-1">
                                    <h3>Overall Sales Year to Date</h3>
                                    <div class="gridSize">
                                        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptionsOYTD" :columnDefs="columnDefsOYTD" :rowData="rowDataOYTD">
                                        </ag-grid-vue>
                                    </div>
                                    <button class="uk-button uk-button-default" @click="onBtExportOYTD()">Export</button>
                                </div>
                                <div class="uk-card-small uk-width-1-1">
                                    <h3>Sales Channel Breakdown Province</h3>
                                    <div class="gridSize">
                                        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptionsSCBD" :columnDefs="columnDefsSCBD" :rowData="rowDataSCBD">
                                        </ag-grid-vue>
                                    </div>
                                    <button class="uk-button uk-button-default" @click="onBtExportSCBD()">Export</button>
                                </div>
                                <div class="uk-card-small uk-width-1-1">
                                    <h3>Sales Channel Breakdown Clients</h3>
                                    <div class="gridSize">
                                        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptionsSCBD2" :columnDefs="columnDefsSCBD2" :rowData="rowDataSCBD2">
                                        </ag-grid-vue>
                                    </div>
                                    <button class="uk-button uk-button-default" @click="onBtExportSCBD2()">Export</button>
                                </div>
                                <div class="uk-card-small uk-width-1-1">
                                    <h3>Rep Overview</h3>
                                    <div class="gridSize">
                                        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptionsREPS" :columnDefs="columnDefsREPS" :rowData="rowDataREPS">
                                        </ag-grid-vue>
                                    </div>
                                    <button class="uk-button uk-button-default" @click="onBtExportREPS()">Export</button>
                                </div>
                                <!-- <div class="uk-card-small uk-width-1-1">
                                    <h3>Sales Channel Breakdown</h3>
                                    <div class="gridSize">
                                        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptionsOMTD" :columnDefs="columnDefsOMTD" :rowData="rowDataOMTD">
                                        </ag-grid-vue>
                                    </div>
                                    <button class="uk-button uk-button-default" @click="onBtExportOMTD()">Export</button>
                                </div> -->
                                <!-- <div class="uk-card-small uk-width-1-1">
                                    <h3>Channel Overview</h3>
                                    <div class="gridSize">
                                        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptionsOMTD" :columnDefs="columnDefsOMTD" :rowData="rowDataOMTD">
                                        </ag-grid-vue>
                                    </div>
                                    <button class="uk-button uk-button-default" @click="onBtExportOMTD()">Export</button>
                                </div> -->
                                <div class="uk-card-small uk-width-1-1">
                                    <h3>Rep Overview - Excl Corp Sales</h3>
                                    <div class="gridSize">
                                        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptionsREPS" :columnDefs="columnDefsREPS" :rowData="rowDataREPS">
                                        </ag-grid-vue>
                                    </div>
                                    <button class="uk-button uk-button-default" @click="onBtExportREPS()">Export</button>
                                </div>
                                <div class="uk-card-small uk-width-1-1">
                                    <h3>Product Report</h3>
                                    <div class="gridSize">
                                        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptionsPRODUCT" :columnDefs="columnDefsPRODUCT" :rowData="rowDataPRODUCT">
                                        </ag-grid-vue>
                                    </div>
                                    <button class="uk-button uk-button-default" @click="onBtExportPRODUCT()">Export</button>
                                </div>
                                <div class="uk-card-small uk-width-1-1">
                                    <h3>Sales Channel Breakdown - EXPORT</h3>
                                    <div class="gridSize">
                                        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptionsSCBE" :columnDefs="columnDefsSCBE" :rowData="rowDataSCBE">
                                        </ag-grid-vue>
                                    </div>
                                    <button class="uk-button uk-button-default" @click="onBtExportSCBE()">Export</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
// OMTD
// OYTD
// SCBD
// SCBD2
// REPS
// PRODUCT
// SCBE
<script>
    import {
        AgGridVue
    } from "ag-grid-vue";
    import axios from 'axios';
    import echarts from 'echarts'
    import IEcharts from 'vue-echarts-v3/src/full.js';
    export default {
        components: {
            "ag-grid-vue": AgGridVue,
            "axios": axios
        },
        head() {
            return {
                title: "WCW Reports"
            };
        },
        data() {
            return {
                year: "",
                month: "",
                year_list: [{
                        year: "2020",
                        selected: false
                    },
                    {
                        year: "2019",
                        selected: false
                    },
                    {
                        year: "2018",
                        selected: false
                    },
                    {
                        year: "2017",
                        selected: false
                    },
                    {
                        year: "2016",
                        selected: false
                    },
                    {
                        year: "2015",
                        selected: false
                    },
                    {
                        year: "2014",
                        selected: false
                    }
                ],
                month_list: [{
                        month: "January",
                        selected: false
                    },
                    {
                        month: "February",
                        selected: false
                    },
                    {
                        month: "March",
                        selected: false
                    },
                    {
                        month: "April",
                        selected: false
                    },
                    {
                        month: "May",
                        selected: false
                    },
                    {
                        month: "June",
                        selected: false
                    },
                    {
                        month: "July",
                        selected: false
                    },
                    {
                        month: "August",
                        selected: false
                    },
                    {
                        month: "September",
                        selected: false
                    },
                    {
                        month: "October",
                        selected: false
                    },
                    {
                        month: "November",
                        selected: false
                    },
                    {
                        month: "December",
                        selected: false
                    }
                ],
                headerNamesOMTD: ["CHANNELS", "Sep18", "Sep17", "VAR(%)", "VAR(R)", "BSep18", "VAR(%)", "VAR(R)", "CSep18", "CSep17", "VAR(%)", "VAR(C)"],
                headerNamesOYTD: ["CHANNELS", "2018/2019", "2017/2018", "VAR(%)", "VAR(R)", "B2018/2019", "VAR(%)", "VAR(R)", "C2018/2019", "C2017/2018", "VAR(%)", "VAR(C)"],
                headerNamesSCBD: ["CHANNELS", "PROVINCE", "Sep18", "Sep17", "VAR(%)", "VAR(R)", "BSep18", "VAR(%)", "VAR(R)", "ACTUAL", "CSep18", "CSep17", "VAR(%)", "VAR(C)", "LASTYEAR", "VAR(%)", "VAR(R)", "BUDGET", "VAR(%)", "VAR(R)", "C2018/2019", "C2017/2018", "VAR(%)", "VAR(C)"],
                headerNamesSCBD2: ["CHANNELS", "Merchant Group", "Sep18", "Sep17", "VAR(%)", "VAR(R)", "BSep18", "VAR(%)", "VAR(R)", "ACTUAL", "CSep18", "CSep17", "VAR(%)", "VAR(C)", "LASTYEAR", "VAR(%)", "VAR(R)", "BUDGET", "VAR(%)", "VAR(R)", "C2018/2019", "C2017/2018", "VAR(%)", "VAR(C)"],
                headerNamesREPS: ["REPS", "Sep18", "Sep17", "VAR(%)", "VAR(R)", "BSep18", "VAR(%)", "VAR(R)", "ACTUAL", "CSep18", "CSep17", "VAR(%)", "VAR(C)", "LASTYEAR", "VAR(%)", "VAR(R)", "BUDGET", "VAR(%)", "VAR(R)", "C2018/2019", "C2017/2018", "VAR(%)", "VAR(C)"],
                headerNamesPRODUCT: ["PRODUCT", "Sep18", "Sep17", "VAR(%)", "VAR(R)", "BSep18", "VAR(%)", "VAR(R)", "ACTUAL", "CSep18", "CSep17", "VAR(%)", "VAR(C)", "LASTYEAR", "VAR(%)", "VAR(R)", "BUDGET", "VAR(%)", "VAR(R)", "C2018/2019", "C2017/2018", "VAR(%)", "VAR(C)"],
                headerNamesSCBE: ["CLIENT", "Merchant Group", "Sep18", "Sep17", "VAR(%)", "VAR(R)", "BSep18", "VAR(%)", "VAR(R)", "ACTUAL", "CSep18", "CSep17", "VAR(%)", "VAR(C)", "LASTYEAR", "VAR(%)", "VAR(R)", "BUDGET", "VAR(%)", "VAR(R)", "C2018/2019", "C2017/2018", "VAR(%)", "VAR(C)"],
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                rowDataOMTD: [],
                rowDataOYTD: [{
                    code: "SCS",
                    type: "Year To Date",
                    y1sale: 3420,
                    y2sale: 53423,
                    y1budget: 24234,
                    y1cases: 332,
                    y2cases: 223
                }],
                rowDataSCBD: [{
                    code: "SCS",
                    province: "Western Cape",
                    m1sale: 120,
                    m2sale: 170,
                    m1budget: 140,
                    m1cases: 12,
                    m2cases: 15,
                    y1sale: 3420,
                    y2sale: 53423,
                    y1budget: 24234,
                    y1cases: 332,
                    y2cases: 223
                }],
                rowDataSCBD2: [{
                    code: "SCS",
                    province: "PNP",
                    m1sale: 120,
                    m2sale: 170,
                    m1budget: 140,
                    m1cases: 12,
                    m2cases: 15,
                    y1sale: 3420,
                    y2sale: 53423,
                    y1budget: 24234,
                    y1cases: 332,
                    y2cases: 223
                }],
                rowDataREPS: [{
                    rep: "John Williams",
                    m1sale: 120,
                    m2sale: 170,
                    m1budget: 140,
                    m1cases: 12,
                    m2cases: 15,
                    y1sale: 3420,
                    y2sale: 53423,
                    y1budget: 24234,
                    y1cases: 332,
                    y2cases: 223
                }],
                rowDataPRODUCT: [{
                    product: "CHENIN BLANK",
                    m1sale: 120,
                    m2sale: 170,
                    m1budget: 140,
                    m1cases: 12,
                    m2cases: 15,
                    y1sale: 3420,
                    y2sale: 53423,
                    y1budget: 24234,
                    y1cases: 332,
                    y2cases: 223
                }],
                rowDataSCBE: [{
                    code: "EXPORT DUTY PAID",
                    province: "JURIC IMPORT EXPORT cc",
                    m1sale: 120,
                    m2sale: 170,
                    m1budget: 140,
                    m1cases: 12,
                    m2cases: 15,
                    y1sale: 3420,
                    y2sale: 53423,
                    y1budget: 24234,
                    y1cases: 332,
                    y2cases: 223
                }],
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                gridOptionsOMTD: {
                    defaultColDef: {
                        // allow every column to be aggregated
                        enableValue: true,
                        // allow every column to be grouped
                        enableRowGroup: true,
                        // allow every column to be pivoted
                        enablePivot: true,
                    },
                    // onRowDoubleClicked: this.openProfile,
                    suppressPropertyNamesCheck: true,
                    enableColResize: true,
                    // floatingFilter: true,
                    onGridReady: function(params) {
                        params.api.sizeColumnsToFit();
                    },
                    rowClassRules: {
                        'blue-class': function(params) { return params.data.code === 'TOTAL'}
                    }
                },
                gridOptionsOYTD: {
                    defaultColDef: {
                        // allow every column to be aggregated
                        enableValue: true,
                        // allow every column to be grouped
                        enableRowGroup: true,
                        // allow every column to be pivoted
                        enablePivot: true,
                    },
                    // onRowDoubleClicked: this.openProfile,
                    suppressPropertyNamesCheck: true,
                    enableColResize: true,
                    // floatingFilter: true,
                    onGridReady: function(params) {
                        params.api.sizeColumnsToFit();
                    }
                },
                gridOptionsSCBD: {
                    defaultColDef: {
                        // allow every column to be aggregated
                        enableValue: true,
                        // allow every column to be grouped
                        enableRowGroup: true,
                        // allow every column to be pivoted
                        enablePivot: true,
                    },
                    // onRowDoubleClicked: this.openProfile,
                    suppressPropertyNamesCheck: true,
                    enableColResize: true,
                    // floatingFilter: true,
                    onGridReady: function(params) {
                        params.api.sizeColumnsToFit();
                    }
                },
                gridOptionsSCBD2: {
                    defaultColDef: {
                        // allow every column to be aggregated
                        enableValue: true,
                        // allow every column to be grouped
                        enableRowGroup: true,
                        // allow every column to be pivoted
                        enablePivot: true,
                    },
                    // onRowDoubleClicked: this.openProfile,
                    suppressPropertyNamesCheck: true,
                    enableColResize: true,
                    // floatingFilter: true,
                    onGridReady: function(params) {
                        params.api.sizeColumnsToFit();
                    }
                },
                gridOptionsREPS: {
                    defaultColDef: {
                        // allow every column to be aggregated
                        enableValue: true,
                        // allow every column to be grouped
                        enableRowGroup: true,
                        // allow every column to be pivoted
                        enablePivot: true,
                    },
                    // onRowDoubleClicked: this.openProfile,
                    suppressPropertyNamesCheck: true,
                    enableColResize: true,
                    // floatingFilter: true,
                    onGridReady: function(params) {
                        params.api.sizeColumnsToFit();
                    }
                },
                gridOptionsPRODUCT: {
                    defaultColDef: {
                        // allow every column to be aggregated
                        enableValue: true,
                        // allow every column to be grouped
                        enableRowGroup: true,
                        // allow every column to be pivoted
                        enablePivot: true,
                    },
                    // onRowDoubleClicked: this.openProfile,
                    suppressPropertyNamesCheck: true,
                    enableColResize: true,
                    // floatingFilter: true,
                    onGridReady: function(params) {
                        params.api.sizeColumnsToFit();
                    }
                },
                gridOptionsSCBE: {
                    defaultColDef: {
                        // allow every column to be aggregated
                        enableValue: true,
                        // allow every column to be grouped
                        enableRowGroup: true,
                        // allow every column to be pivoted
                        enablePivot: true,
                    },
                    // onRowDoubleClicked: this.openProfile,
                    suppressPropertyNamesCheck: true,
                    enableColResize: true,
                    // floatingFilter: true,
                    onGridReady: function(params) {
                        params.api.sizeColumnsToFit();
                    }
                },
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                columnDefsOMTD: [{
                        headerName: "CHANNELS",
                        field: "code",
                        colId: "OMTD0",
                        minWidth: 120,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Sale",
                        field: "m1sale",
                        minWidth: 90,
                        colId: "OMTD1",
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "Month2Sale",
                        field: "m2sale",
                        colId: "OMTD2",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: " % of LY M",
                        // field: "blend",
                        colId: "OMTD3",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMFunction(params) {
                            return ((params.data.m1sale / params.data.m2sale) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "OMTD4",
                        valueFormatter: this.currencyFormatter,
                        valueGetter: function varLYMFunction(params) {
                            return (params.data.m1sale - params.data.m2sale).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Budget",
                        field: "m1budget",
                        colId: "OMTD5",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "% of M B",
                        // field: "blend",
                        colId: "OMTD6",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percMBFunction(params) {
                            return ((params.data.m1sale / params.data.m1budget) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "OMTD7",
                        valueGetter: function varMBFunction(params) {
                            return (params.data.m1sale - params.data.m1budget).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Cases",
                        field: "m1cases",
                        colId: "OMTD8",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month2Cases",
                        field: "m2cases",
                        colId: "OMTD9",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "% of LY M",
                        // field: "blend",
                        colId: "OMTD10",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMCFunction(params) {
                            return ((params.data.m1cases / params.data.m2cases) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(C)",
                        // field: "blend",
                        colId: "OMTD11",
                        valueGetter: function varMCFunction(params) {
                            return (params.data.m1cases - params.data.m2cases).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    }
                ],
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                columnDefsOYTD: [{
                        headerName: "CHANNELS",
                        field: "code",
                        colId: "OYTD0",
                        minWidth: 120,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Sale",
                        field: "y1sale",
                        minWidth: 90,
                        colId: "OYTD1",
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "Month2Sale",
                        field: "y2sale",
                        colId: "OYTD2",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: " % of LY M",
                        // field: "blend",
                        colId: "OYTD3",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMFunction(params) {
                            return ((params.data.y1sale / params.data.y2sale) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "OYTD4",
                        valueFormatter: this.currencyFormatter,
                        valueGetter: function varLYMFunction(params) {
                            return (params.data.y1sale - params.data.y2sale).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Budget",
                        field: "y1budget",
                        colId: "OYTD5",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "% of M B",
                        // field: "blend",
                        colId: "OYTD6",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percMBFunction(params) {
                            return ((params.data.y1sale / params.data.y1budget) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "OYTD7",
                        valueGetter: function varMBFunction(params) {
                            return (params.data.y1sale - params.data.y1budget).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Cases",
                        field: "y1cases",
                        colId: "OYTD8",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month2Cases",
                        field: "y2cases",
                        colId: "OYTD9",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "% of LY M",
                        // field: "blend",
                        colId: "OYTD10",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMCFunction(params) {
                            return ((params.data.y1cases / params.data.y2cases) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(C)",
                        // field: "blend",
                        colId: "OYTD11",
                        valueGetter: function varMCFunction(params) {
                            return (params.data.y1cases - params.data.y2cases).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    }
                ],
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                columnDefsSCBD: [{
                        headerName: "CHANNELS",
                        field: "code",
                        colId: "SCBD0",
                        minWidth: 120,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Province",
                        field: "province",
                        minWidth: 90,
                        colId: "SCBD01",
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                    },
                    {
                        headerName: "Month1Sale",
                        field: "m1sale",
                        minWidth: 90,
                        colId: "SCBD1",
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "Month2Sale",
                        field: "m2sale",
                        colId: "SCBD2",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: " % of LY M",
                        // field: "blend",
                        colId: "SCBD3",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMFunction(params) {
                            return ((params.data.m1sale / params.data.m2sale) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "SCBD4",
                        valueFormatter: this.currencyFormatter,
                        valueGetter: function varLYMFunction(params) {
                            return (params.data.m1sale - params.data.m2sale).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Budget",
                        field: "m1budget",
                        colId: "SCBD5",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "% of M B",
                        // field: "blend",
                        colId: "SCBD6",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percMBFunction(params) {
                            return ((params.data.m1sale / params.data.m1budget) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "SCBD7",
                        valueGetter: function varMBFunction(params) {
                            return (params.data.m1sale - params.data.m1budget).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Cases",
                        field: "m1cases",
                        colId: "SCBD8",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month2Cases",
                        field: "m2cases",
                        colId: "SCBD9",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "% of LY M",
                        // field: "blend",
                        colId: "SCBD10",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMCFunction(params) {
                            return ((params.data.m1cases / params.data.m2cases) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(C)",
                        // field: "blend",
                        colId: "SCBD11",
                        valueGetter: function varMCFunction(params) {
                            return (params.data.m1cases - params.data.m2cases).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Sale",
                        field: "y1sale",
                        minWidth: 90,
                        colId: "SCBD12",
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "Month2Sale",
                        field: "y2sale",
                        colId: "SCBD13",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: " % of LY M",
                        // field: "blend",
                        colId: "SCBD14",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMFunction(params) {
                            return ((params.data.y1sale / params.data.y2sale) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "SCBD15",
                        valueFormatter: this.currencyFormatter,
                        valueGetter: function varLYMFunction(params) {
                            return (params.data.y1sale - params.data.y2sale).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Budget",
                        field: "y1budget",
                        colId: "SCBD16",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "% of M B",
                        // field: "blend",
                        colId: "SCBD17",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percMBFunction(params) {
                            return ((params.data.y1sale / params.data.y1budget) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "SCBD18",
                        valueGetter: function varMBFunction(params) {
                            return (params.data.y1sale - params.data.y1budget).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Cases",
                        field: "y1cases",
                        colId: "SCBD19",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month2Cases",
                        field: "y2cases",
                        colId: "SCBD20",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "% of LY M",
                        // field: "blend",
                        colId: "SCBD21",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMCFunction(params) {
                            return ((params.data.y1cases / params.data.y2cases) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(C)",
                        // field: "blend",
                        colId: "SCBD22",
                        valueGetter: function varMCFunction(params) {
                            return (params.data.y1cases - params.data.y2cases).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    }
                ],
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                columnDefsSCBD2: [{
                        headerName: "Merchant Group",
                        field: "merchant_group",
                        colId: "SCBD20",
                        minWidth: 120,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Province",
                        field: "province",
                        minWidth: 90,
                        colId: "SCBD201",
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                    },
                    {
                        headerName: "Month1Sale",
                        field: "m1sale",
                        minWidth: 90,
                        colId: "SCBD21",
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "Month2Sale",
                        field: "m2sale",
                        colId: "SCBD2222",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: " % of LY M",
                        // field: "blend",
                        colId: "SCBD23",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMFunction(params) {
                            return ((params.data.m1sale / params.data.m2sale) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "SCBD24",
                        valueFormatter: this.currencyFormatter,
                        valueGetter: function varLYMFunction(params) {
                            return (params.data.m1sale - params.data.m2sale).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Budget",
                        field: "m1budget",
                        colId: "SCBD25",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "% of M B",
                        // field: "blend",
                        colId: "SCBD26",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percMBFunction(params) {
                            return ((params.data.m1sale / params.data.m1budget) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "SCBD27",
                        valueGetter: function varMBFunction(params) {
                            return (params.data.m1sale - params.data.m1budget).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Cases",
                        field: "m1cases",
                        colId: "SCBD28",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month2Cases",
                        field: "m2cases",
                        colId: "SCBD29",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "% of LY M",
                        // field: "blend",
                        colId: "SCBD210",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMCFunction(params) {
                            return ((params.data.m1cases / params.data.m2cases) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(C)",
                        // field: "blend",
                        colId: "SCBD211",
                        valueGetter: function varMCFunction(params) {
                            return (params.data.m1cases - params.data.m2cases).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Sale",
                        field: "y1sale",
                        minWidth: 90,
                        colId: "SCBD212",
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "Month2Sale",
                        field: "y2sale",
                        colId: "SCBD213",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: " % of LY M",
                        // field: "blend",
                        colId: "SCBD214",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMFunction(params) {
                            return ((params.data.y1sale / params.data.y2sale) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "SCBD215",
                        valueFormatter: this.currencyFormatter,
                        valueGetter: function varLYMFunction(params) {
                            return (params.data.y1sale - params.data.y2sale).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Budget",
                        field: "y1budget",
                        colId: "SCBD216",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "% of M B",
                        // field: "blend",
                        colId: "SCBD217",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percMBFunction(params) {
                            return ((params.data.y1sale / params.data.y1budget) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "SCBD218",
                        valueGetter: function varMBFunction(params) {
                            return (params.data.y1sale - params.data.y1budget).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Cases",
                        field: "y1cases",
                        colId: "SCBD219",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month2Cases",
                        field: "y2cases",
                        colId: "SCBD220",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "% of LY M",
                        // field: "blend",
                        colId: "SCBD221",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMCFunction(params) {
                            return ((params.data.y1cases / params.data.y2cases) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(C)",
                        // field: "blend",
                        colId: "SCBD222",
                        valueGetter: function varMCFunction(params) {
                            return (params.data.y1cases - params.data.y2cases).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    }
                ],
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                columnDefsREPS: [{
                        headerName: "REPS",
                        field: "reps",
                        colId: "REPS0",
                        minWidth: 120,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Sale",
                        field: "m1sale",
                        minWidth: 90,
                        colId: "REPS1",
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "Month2Sale",
                        field: "m2sale",
                        colId: "REPS2",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: " % of LY M",
                        // field: "blend",
                        colId: "REPS3",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMFunction(params) {
                            return ((params.data.m1sale / params.data.m2sale) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "REPS4",
                        valueFormatter: this.currencyFormatter,
                        valueGetter: function varLYMFunction(params) {
                            return (params.data.m1sale - params.data.m2sale).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Budget",
                        field: "m1budget",
                        colId: "REPS5",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "% of M B",
                        // field: "blend",
                        colId: "REPS6",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percMBFunction(params) {
                            return ((params.data.m1sale / params.data.m1budget) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "REPS7",
                        valueGetter: function varMBFunction(params) {
                            return (params.data.m1sale - params.data.m1budget).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Cases",
                        field: "m1cases",
                        colId: "REPS8",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month2Cases",
                        field: "m2cases",
                        colId: "REPS9",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "% of LY M",
                        // field: "blend",
                        colId: "REPS10",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMCFunction(params) {
                            return ((params.data.m1cases / params.data.m2cases) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(C)",
                        // field: "blend",
                        colId: "REPS11",
                        valueGetter: function varMCFunction(params) {
                            return (params.data.m1cases - params.data.m2cases).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Sale",
                        field: "y1sale",
                        minWidth: 90,
                        colId: "REPS12",
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "Month2Sale",
                        field: "y2sale",
                        colId: "REPS13",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: " % of LY M",
                        // field: "blend",
                        colId: "REPS14",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMFunction(params) {
                            return ((params.data.y1sale / params.data.y2sale) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "REPS15",
                        valueFormatter: this.currencyFormatter,
                        valueGetter: function varLYMFunction(params) {
                            return (params.data.y1sale - params.data.y2sale).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Budget",
                        field: "y1budget",
                        colId: "REPS16",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "% of M B",
                        // field: "blend",
                        colId: "REPS17",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percMBFunction(params) {
                            return ((params.data.y1sale / params.data.y1budget) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "REPS18",
                        valueGetter: function varMBFunction(params) {
                            return (params.data.y1sale - params.data.y1budget).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Cases",
                        field: "y1cases",
                        colId: "REPS19",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month2Cases",
                        field: "y2cases",
                        colId: "REPS20",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "% of LY M",
                        // field: "blend",
                        colId: "REPS21",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMCFunction(params) {
                            return ((params.data.y1cases / params.data.y2cases) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(C)",
                        // field: "blend",
                        colId: "REPS22",
                        valueGetter: function varMCFunction(params) {
                            return (params.data.y1cases - params.data.y2cases).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    }
                ],
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                columnDefsPRODUCT: [{
                        headerName: "PRODUCT",
                        field: "product",
                        colId: "PRODUCT0",
                        minWidth: 120,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Sale",
                        field: "m1sale",
                        minWidth: 90,
                        colId: "PRODUCT1",
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "Month2Sale",
                        field: "m2sale",
                        colId: "PRODUCT2",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: " % of LY M",
                        // field: "blend",
                        colId: "PRODUCT3",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMFunction(params) {
                            return ((params.data.m1sale / params.data.m2sale) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "PRODUCT4",
                        valueFormatter: this.currencyFormatter,
                        valueGetter: function varLYMFunction(params) {
                            return (params.data.m1sale - params.data.m2sale).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Budget",
                        field: "m1budget",
                        colId: "PRODUCT5",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "% of M B",
                        // field: "blend",
                        colId: "PRODUCT6",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percMBFunction(params) {
                            return ((params.data.m1sale / params.data.m1budget) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "PRODUCT7",
                        valueGetter: function varMBFunction(params) {
                            return (params.data.m1sale - params.data.m1budget).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Cases",
                        field: "m1cases",
                        colId: "PRODUCT8",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month2Cases",
                        field: "m2cases",
                        colId: "PRODUCT9",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "% of LY M",
                        // field: "blend",
                        colId: "PRODUCT10",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMCFunction(params) {
                            return ((params.data.m1cases / params.data.m2cases) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(C)",
                        // field: "blend",
                        colId: "PRODUCT11",
                        valueGetter: function varMCFunction(params) {
                            return (params.data.m1cases - params.data.m2cases).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Sale",
                        field: "y1sale",
                        minWidth: 90,
                        colId: "PRODUCT12",
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "Month2Sale",
                        field: "y2sale",
                        colId: "PRODUCT13",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: " % of LY M",
                        // field: "blend",
                        colId: "PRODUCT14",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMFunction(params) {
                            return ((params.data.y1sale / params.data.y2sale) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "PRODUCT15",
                        valueFormatter: this.currencyFormatter,
                        valueGetter: function varLYMFunction(params) {
                            return (params.data.y1sale - params.data.y2sale).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Budget",
                        field: "y1budget",
                        colId: "PRODUCT16",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "% of M B",
                        // field: "blend",
                        colId: "PRODUCT17",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percMBFunction(params) {
                            return ((params.data.y1sale / params.data.y1budget) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "PRODUCT18",
                        valueGetter: function varMBFunction(params) {
                            return (params.data.y1sale - params.data.y1budget).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Cases",
                        field: "y1cases",
                        colId: "PRODUCT19",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month2Cases",
                        field: "y2cases",
                        colId: "PRODUCT20",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "% of LY M",
                        // field: "blend",
                        colId: "PRODUCT21",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMCFunction(params) {
                            return ((params.data.y1cases / params.data.y2cases) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(C)",
                        // field: "blend",
                        colId: "PRODUCT22",
                        valueGetter: function varMCFunction(params) {
                            return (params.data.y1cases - params.data.y2cases).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    }
                ],
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                columnDefsSCBE: [{
                        headerName: "Merchant Group",
                        field: "merchant_group",
                        colId: "SCBE0",
                        minWidth: 120,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Province",
                        field: "province",
                        minWidth: 90,
                        colId: "SCBE01",
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                    },
                    {
                        headerName: "Month1Sale",
                        field: "m1sale",
                        minWidth: 90,
                        colId: "SCBE1",
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "Month2Sale",
                        field: "m2sale",
                        colId: "SCBE222",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: " % of LY M",
                        // field: "blend",
                        colId: "SCBE3",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMFunction(params) {
                            return ((params.data.m1sale / params.data.m2sale) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "SCBE4",
                        valueFormatter: this.currencyFormatter,
                        valueGetter: function varLYMFunction(params) {
                            return (params.data.m1sale - params.data.m2sale).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Budget",
                        field: "m1budget",
                        colId: "SCBE5",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "% of M B",
                        // field: "blend",
                        colId: "SCBE6",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percMBFunction(params) {
                            return ((params.data.m1sale / params.data.m1budget) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "SCBE7",
                        valueGetter: function varMBFunction(params) {
                            return (params.data.m1sale - params.data.m1budget).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Cases",
                        field: "m1cases",
                        colId: "SCBE8",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month2Cases",
                        field: "m2cases",
                        colId: "SCBE9",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "% of LY M",
                        // field: "blend",
                        colId: "SCBE10",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMCFunction(params) {
                            return ((params.data.m1cases / params.data.m2cases) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(C)",
                        // field: "blend",
                        colId: "SCBE11",
                        valueGetter: function varMCFunction(params) {
                            return (params.data.m1cases - params.data.m2cases).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Sale",
                        field: "y1sale",
                        minWidth: 90,
                        colId: "SCBE12",
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "Month2Sale",
                        field: "y2sale",
                        colId: "SCBE13",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: " % of LY M",
                        // field: "blend",
                        colId: "SCBE14",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMFunction(params) {
                            return ((params.data.y1sale / params.data.y2sale) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "SCBE15",
                        valueFormatter: this.currencyFormatter,
                        valueGetter: function varLYMFunction(params) {
                            return (params.data.y1sale - params.data.y2sale).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Budget",
                        field: "y1budget",
                        colId: "SCBE16",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        valueFormatter: this.currencyFormatter
                    },
                    {
                        headerName: "% of M B",
                        // field: "blend",
                        colId: "SCBE17",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percMBFunction(params) {
                            return ((params.data.y1sale / params.data.y1budget) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(R)",
                        // field: "blend",
                        colId: "SCBE18",
                        valueGetter: function varMBFunction(params) {
                            return (params.data.y1sale - params.data.y1budget).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month1Cases",
                        field: "y1cases",
                        colId: "SCBE19",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month2Cases",
                        field: "y2cases",
                        colId: "SCBE20",
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "% of LY M",
                        // field: "blend",
                        colId: "SCBE21",
                        valueFormatter: this.percentageFormatter,
                        valueGetter: function percLYMCFunction(params) {
                            return ((params.data.y1cases / params.data.y2cases) * 100).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "VAR(C)",
                        // field: "blend",
                        colId: "SCBE22",
                        valueGetter: function varMCFunction(params) {
                            return (params.data.y1cases - params.data.y2cases).toFixed(2);
                        },
                        minWidth: 90,
                        cellClass: 'number-cell',
                        cellStyle: {
                            textAlign: "right"
                        },
                        headerClass: 'resizable-header'
                    }
                ],
            };
        },
        methods: {
            percentageFormatter(params) {
                return params.value + " %";
            },
            currencyFormatter(params) {
                return 'R' + this.formatNumber(params.value);
            },
            formatNumber(number) {
                return Math.floor(number).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
            },
            checkAuthState() {
                let ls = JSON.parse(localStorage.getItem("State"));
                // console.log(ls);
                if (!ls) {
                    this.$router.push("/login");
                } else {
                    this.$store.replaceState(ls);
                }
            },
            createReports(){
                this.loadReportOMTD();
            },
            loadReportOMTD() {
                let request = {
                    month: this.month,
                    year: this.year
                };
                axios.post(this.$store.state.api_url + '/report_omtd', request)
                .then(response => {
                    console.log(response);
                    var o = {
                        code: "TOTAL",
                        m1budget: 0,
                        m2budget: 0,
                        m1cases: 0,
                        m2cases: 0,
                        m1sale: 0,
                        m2sale: 0
                    };
                    for(var i = 0; i < response.data.data.rowDataOMTD.length; i++){
                        o.m1budget = o.m1budget + response.data.data.rowDataOMTD[i].m1budget;
                        o.m2budget = o.m2budget + response.data.data.rowDataOMTD[i].m2budget;
                        o.m1cases = o.m1cases + response.data.data.rowDataOMTD[i].m1cases;
                        o.m2cases = o.m2cases + response.data.data.rowDataOMTD[i].m2cases;
                        o.m1sale = o.m1sale + response.data.data.rowDataOMTD[i].m1sale;
                        o.m2sale = o.m2sale + response.data.data.rowDataOMTD[i].m2sale;
                    }
                    response.data.data.rowDataOMTD.push(o);
                    this.gridOptionsOMTD.api.setColumnDefs(this.columnDefsOMTD);
                    this.gridOptionsOMTD.api.setRowData(response.data.data.rowDataOMTD);
                    this.rowDataOMTD = response.data.data.rowDataOMTD;
                    this.headerNamesOMTD = response.data.data.headerNamesOMTD;
                    this.gridOptionsOMTD.api.getColumnDef("OMTD0").headerName = this.headerNamesOMTD[0];
                    this.gridOptionsOMTD.api.getColumnDef("OMTD1").headerName = this.headerNamesOMTD[1];
                    this.gridOptionsOMTD.api.getColumnDef("OMTD2").headerName = this.headerNamesOMTD[2];
                    this.gridOptionsOMTD.api.getColumnDef("OMTD3").headerName = this.headerNamesOMTD[3];
                    this.gridOptionsOMTD.api.getColumnDef("OMTD4").headerName = this.headerNamesOMTD[4];
                    this.gridOptionsOMTD.api.getColumnDef("OMTD5").headerName = this.headerNamesOMTD[5];
                    this.gridOptionsOMTD.api.getColumnDef("OMTD6").headerName = this.headerNamesOMTD[7];
                    this.gridOptionsOMTD.api.getColumnDef("OMTD7").headerName = this.headerNamesOMTD[8];
                    this.gridOptionsOMTD.api.getColumnDef("OMTD8").headerName = this.headerNamesOMTD[9];
                    this.gridOptionsOMTD.api.getColumnDef("OMTD9").headerName = this.headerNamesOMTD[10];
                    this.gridOptionsOMTD.api.getColumnDef("OMTD10").headerName = this.headerNamesOMTD[11];
                    this.gridOptionsOMTD.api.getColumnDef("OMTD11").headerName = this.headerNamesOMTD[12];
                    this.gridOptionsOMTD.api.getColumnDef("OMTD12").headerName = this.headerNamesOMTD[13];
                    this.gridOptionsOMTD.api.refreshHeader();
                })
                .catch(error => {
                    console.log(error.response);
                });
            },
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            onBtExportOMTD() {
                var params = {
                    fileName: "filename",
                    sheetName: 'sheetName'
                };
                this.gridOptionsOMTD.api.exportDataAsExcel(params);
            },
            onBtExportOYTD() {
                var params = {
                    fileName: "filename",
                    sheetName: 'sheetName'
                };
                this.gridOptionsOYTD.api.exportDataAsExcel(params);
            },
            onBtExportSCBD() {
                var params = {
                    fileName: "filename",
                    sheetName: 'sheetName'
                };
                this.gridOptionsSCBD.api.exportDataAsExcel(params);
            },
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
        },
        beforeMount() {
            this.checkAuthState();
        },
        mounted() {
            
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            this.gridOptionsOYTD.api.getColumnDef("OYTD0").headerName = this.headerNamesOYTD[0];
            this.gridOptionsOYTD.api.getColumnDef("OYTD1").headerName = this.headerNamesOYTD[1];
            this.gridOptionsOYTD.api.getColumnDef("OYTD2").headerName = this.headerNamesOYTD[2];
            this.gridOptionsOYTD.api.getColumnDef("OYTD3").headerName = this.headerNamesOYTD[3];
            this.gridOptionsOYTD.api.getColumnDef("OYTD4").headerName = this.headerNamesOYTD[4];
            this.gridOptionsOYTD.api.getColumnDef("OYTD5").headerName = this.headerNamesOYTD[5];
            this.gridOptionsOYTD.api.getColumnDef("OYTD6").headerName = this.headerNamesOYTD[6];
            this.gridOptionsOYTD.api.getColumnDef("OYTD7").headerName = this.headerNamesOYTD[7];
            this.gridOptionsOYTD.api.getColumnDef("OYTD8").headerName = this.headerNamesOYTD[8];
            this.gridOptionsOYTD.api.getColumnDef("OYTD9").headerName = this.headerNamesOYTD[9];
            this.gridOptionsOYTD.api.getColumnDef("OYTD10").headerName = this.headerNamesOYTD[10];
            this.gridOptionsOYTD.api.getColumnDef("OYTD11").headerName = this.headerNamesOYTD[11];
            this.gridOptionsOYTD.api.refreshHeader();
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            this.gridOptionsSCBD.api.getColumnDef("SCBD0").headerName = this.headerNamesSCBD[0];
            this.gridOptionsSCBD.api.getColumnDef("SCBD01").headerName = this.headerNamesSCBD[1];
            this.gridOptionsSCBD.api.getColumnDef("SCBD1").headerName = this.headerNamesSCBD[2];
            this.gridOptionsSCBD.api.getColumnDef("SCBD2").headerName = this.headerNamesSCBD[3];
            this.gridOptionsSCBD.api.getColumnDef("SCBD3").headerName = this.headerNamesSCBD[4];
            this.gridOptionsSCBD.api.getColumnDef("SCBD4").headerName = this.headerNamesSCBD[5];
            this.gridOptionsSCBD.api.getColumnDef("SCBD5").headerName = this.headerNamesSCBD[6];
            this.gridOptionsSCBD.api.getColumnDef("SCBD6").headerName = this.headerNamesSCBD[7];
            this.gridOptionsSCBD.api.getColumnDef("SCBD7").headerName = this.headerNamesSCBD[8];
            this.gridOptionsSCBD.api.getColumnDef("SCBD8").headerName = this.headerNamesSCBD[9];
            this.gridOptionsSCBD.api.getColumnDef("SCBD9").headerName = this.headerNamesSCBD[10];
            this.gridOptionsSCBD.api.getColumnDef("SCBD10").headerName = this.headerNamesSCBD[11];
            this.gridOptionsSCBD.api.getColumnDef("SCBD11").headerName = this.headerNamesSCBD[12];
            this.gridOptionsSCBD.api.getColumnDef("SCBD12").headerName = this.headerNamesSCBD[13];
            this.gridOptionsSCBD.api.getColumnDef("SCBD13").headerName = this.headerNamesSCBD[14];
            this.gridOptionsSCBD.api.getColumnDef("SCBD14").headerName = this.headerNamesSCBD[15];
            this.gridOptionsSCBD.api.getColumnDef("SCBD15").headerName = this.headerNamesSCBD[16];
            this.gridOptionsSCBD.api.getColumnDef("SCBD16").headerName = this.headerNamesSCBD[17];
            this.gridOptionsSCBD.api.getColumnDef("SCBD17").headerName = this.headerNamesSCBD[18];
            this.gridOptionsSCBD.api.getColumnDef("SCBD18").headerName = this.headerNamesSCBD[19];
            this.gridOptionsSCBD.api.getColumnDef("SCBD19").headerName = this.headerNamesSCBD[20];
            this.gridOptionsSCBD.api.getColumnDef("SCBD20").headerName = this.headerNamesSCBD[21];
            this.gridOptionsSCBD.api.getColumnDef("SCBD21").headerName = this.headerNamesSCBD[22];
            this.gridOptionsSCBD.api.getColumnDef("SCBD22").headerName = this.headerNamesSCBD[23];
            this.gridOptionsSCBD.api.refreshHeader();
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            this.gridOptionsSCBD2.api.getColumnDef("SCBD20").headerName = this.headerNamesSCBD2[0];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD201").headerName = this.headerNamesSCBD2[1];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD21").headerName = this.headerNamesSCBD2[2];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD2222").headerName = this.headerNamesSCBD2[3];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD23").headerName = this.headerNamesSCBD2[4];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD24").headerName = this.headerNamesSCBD2[5];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD25").headerName = this.headerNamesSCBD2[6];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD26").headerName = this.headerNamesSCBD2[7];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD27").headerName = this.headerNamesSCBD2[8];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD28").headerName = this.headerNamesSCBD2[9];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD29").headerName = this.headerNamesSCBD2[10];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD210").headerName = this.headerNamesSCBD2[11];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD211").headerName = this.headerNamesSCBD2[12];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD212").headerName = this.headerNamesSCBD2[13];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD213").headerName = this.headerNamesSCBD2[14];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD214").headerName = this.headerNamesSCBD2[15];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD215").headerName = this.headerNamesSCBD2[16];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD216").headerName = this.headerNamesSCBD2[17];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD217").headerName = this.headerNamesSCBD2[18];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD218").headerName = this.headerNamesSCBD2[19];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD219").headerName = this.headerNamesSCBD2[20];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD220").headerName = this.headerNamesSCBD2[21];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD221").headerName = this.headerNamesSCBD2[22];
            this.gridOptionsSCBD2.api.getColumnDef("SCBD222").headerName = this.headerNamesSCBD2[23];
            this.gridOptionsSCBD2.api.refreshHeader();
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            this.gridOptionsREPS.api.getColumnDef("REPS0").headerName = this.headerNamesREPS[0];
            this.gridOptionsREPS.api.getColumnDef("REPS1").headerName = this.headerNamesREPS[1];
            this.gridOptionsREPS.api.getColumnDef("REPS2").headerName = this.headerNamesREPS[2];
            this.gridOptionsREPS.api.getColumnDef("REPS3").headerName = this.headerNamesREPS[3];
            this.gridOptionsREPS.api.getColumnDef("REPS4").headerName = this.headerNamesREPS[4];
            this.gridOptionsREPS.api.getColumnDef("REPS5").headerName = this.headerNamesREPS[5];
            this.gridOptionsREPS.api.getColumnDef("REPS6").headerName = this.headerNamesREPS[6];
            this.gridOptionsREPS.api.getColumnDef("REPS7").headerName = this.headerNamesREPS[7];
            this.gridOptionsREPS.api.getColumnDef("REPS8").headerName = this.headerNamesREPS[8];
            this.gridOptionsREPS.api.getColumnDef("REPS9").headerName = this.headerNamesREPS[9];
            this.gridOptionsREPS.api.getColumnDef("REPS10").headerName = this.headerNamesREPS[10];
            this.gridOptionsREPS.api.getColumnDef("REPS11").headerName = this.headerNamesREPS[11];
            this.gridOptionsREPS.api.getColumnDef("REPS12").headerName = this.headerNamesREPS[12];
            this.gridOptionsREPS.api.getColumnDef("REPS13").headerName = this.headerNamesREPS[13];
            this.gridOptionsREPS.api.getColumnDef("REPS14").headerName = this.headerNamesREPS[14];
            this.gridOptionsREPS.api.getColumnDef("REPS15").headerName = this.headerNamesREPS[15];
            this.gridOptionsREPS.api.getColumnDef("REPS16").headerName = this.headerNamesREPS[16];
            this.gridOptionsREPS.api.getColumnDef("REPS17").headerName = this.headerNamesREPS[17];
            this.gridOptionsREPS.api.getColumnDef("REPS18").headerName = this.headerNamesREPS[18];
            this.gridOptionsREPS.api.getColumnDef("REPS19").headerName = this.headerNamesREPS[19];
            this.gridOptionsREPS.api.getColumnDef("REPS20").headerName = this.headerNamesREPS[20];
            this.gridOptionsREPS.api.getColumnDef("REPS21").headerName = this.headerNamesREPS[21];
            this.gridOptionsREPS.api.getColumnDef("REPS22").headerName = this.headerNamesREPS[22];
            this.gridOptionsREPS.api.refreshHeader();
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT0").headerName = this.headerNamesPRODUCT[0];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT1").headerName = this.headerNamesPRODUCT[1];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT2").headerName = this.headerNamesPRODUCT[2];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT3").headerName = this.headerNamesPRODUCT[3];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT4").headerName = this.headerNamesPRODUCT[4];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT5").headerName = this.headerNamesPRODUCT[5];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT6").headerName = this.headerNamesPRODUCT[6];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT7").headerName = this.headerNamesPRODUCT[7];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT8").headerName = this.headerNamesPRODUCT[8];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT9").headerName = this.headerNamesPRODUCT[9];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT10").headerName = this.headerNamesPRODUCT[10];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT11").headerName = this.headerNamesPRODUCT[11];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT12").headerName = this.headerNamesPRODUCT[12];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT13").headerName = this.headerNamesPRODUCT[13];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT14").headerName = this.headerNamesPRODUCT[14];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT15").headerName = this.headerNamesPRODUCT[15];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT16").headerName = this.headerNamesPRODUCT[16];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT17").headerName = this.headerNamesPRODUCT[17];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT18").headerName = this.headerNamesPRODUCT[18];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT19").headerName = this.headerNamesPRODUCT[19];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT20").headerName = this.headerNamesPRODUCT[20];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT21").headerName = this.headerNamesPRODUCT[21];
            this.gridOptionsPRODUCT.api.getColumnDef("PRODUCT22").headerName = this.headerNamesPRODUCT[22];
            this.gridOptionsPRODUCT.api.refreshHeader();
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            // =================================================================================================================
            this.gridOptionsSCBE.api.getColumnDef("SCBE0").headerName = this.headerNamesSCBE[0];
            this.gridOptionsSCBE.api.getColumnDef("SCBE01").headerName = this.headerNamesSCBE[1];
            this.gridOptionsSCBE.api.getColumnDef("SCBE1").headerName = this.headerNamesSCBE[2];
            this.gridOptionsSCBE.api.getColumnDef("SCBE222").headerName = this.headerNamesSCBE[3];
            this.gridOptionsSCBE.api.getColumnDef("SCBE3").headerName = this.headerNamesSCBE[4];
            this.gridOptionsSCBE.api.getColumnDef("SCBE4").headerName = this.headerNamesSCBE[5];
            this.gridOptionsSCBE.api.getColumnDef("SCBE5").headerName = this.headerNamesSCBE[6];
            this.gridOptionsSCBE.api.getColumnDef("SCBE6").headerName = this.headerNamesSCBE[7];
            this.gridOptionsSCBE.api.getColumnDef("SCBE7").headerName = this.headerNamesSCBE[8];
            this.gridOptionsSCBE.api.getColumnDef("SCBE8").headerName = this.headerNamesSCBE[9];
            this.gridOptionsSCBE.api.getColumnDef("SCBE9").headerName = this.headerNamesSCBE[10];
            this.gridOptionsSCBE.api.getColumnDef("SCBE10").headerName = this.headerNamesSCBE[11];
            this.gridOptionsSCBE.api.getColumnDef("SCBE11").headerName = this.headerNamesSCBE[12];
            this.gridOptionsSCBE.api.getColumnDef("SCBE12").headerName = this.headerNamesSCBE[13];
            this.gridOptionsSCBE.api.getColumnDef("SCBE13").headerName = this.headerNamesSCBE[14];
            this.gridOptionsSCBE.api.getColumnDef("SCBE14").headerName = this.headerNamesSCBE[15];
            this.gridOptionsSCBE.api.getColumnDef("SCBE15").headerName = this.headerNamesSCBE[16];
            this.gridOptionsSCBE.api.getColumnDef("SCBE16").headerName = this.headerNamesSCBE[17];
            this.gridOptionsSCBE.api.getColumnDef("SCBE17").headerName = this.headerNamesSCBE[18];
            this.gridOptionsSCBE.api.getColumnDef("SCBE18").headerName = this.headerNamesSCBE[19];
            this.gridOptionsSCBE.api.getColumnDef("SCBE19").headerName = this.headerNamesSCBE[20];
            this.gridOptionsSCBE.api.getColumnDef("SCBE20").headerName = this.headerNamesSCBE[21];
            this.gridOptionsSCBE.api.getColumnDef("SCBE21").headerName = this.headerNamesSCBE[22];
            this.gridOptionsSCBE.api.getColumnDef("SCBE22").headerName = this.headerNamesSCBE[23];
            this.gridOptionsSCBE.api.refreshHeader();
        }
    };
</script>

<style>
    .echarts {
        width: 100%;
        height: 400px;
    }
    
    .isSelected {
        color: white;
        background-color: yellowgreen;
        width: 80%;
        height: 30px;
        margin-bottom: 3px;
        margin-left: 28px;
        border: none;
    }
    
    .isNotSelected {
        color: #3d83ec !important;
        width: 80%;
        height: 30px;
        margin-bottom: 3px;
        margin-left: 28px;
        border: none;
    }
    
    .superLink li:hover {
        background: #adc962;
        color: white;
    }

    .ag-theme-balham .blue-class {
        background-color: #6296d0 !important;
        font-weight: bold !important;
        font-size: 16px !important;
        color: white !important;
    }
</style>