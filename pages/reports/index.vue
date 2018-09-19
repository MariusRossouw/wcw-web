
<template>
    <div class="container">
        <div class="content-background">
            <div class="uk-container uk-container-large uk-padding-remove">
                <div class="uk-grid-match uk-grid-small uk-text-center" uk-grid>
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
                                        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptionsOMTD" :columnDefs="columnDefsOMTD" :rowData="rowDataOMTD">
                                        </ag-grid-vue>
                                    </div>
                                    <button class="uk-button uk-button-default" @click="onBtExportOMTD()">Export</button>
                                </div>
                                <div class="uk-card-small uk-width-1-1">
                                    <h3>Rep Overview</h3>
                                    <div class="gridSize">
                                        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptionsOMTD" :columnDefs="columnDefsOMTD" :rowData="rowDataOMTD">
                                        </ag-grid-vue>
                                    </div>
                                    <button class="uk-button uk-button-default" @click="onBtExportOMTD()">Export</button>
                                </div>
                                <div class="uk-card-small uk-width-1-1">
                                    <h3>Sales Channel Breakdown</h3>
                                    <div class="gridSize">
                                        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptionsOMTD" :columnDefs="columnDefsOMTD" :rowData="rowDataOMTD">
                                        </ag-grid-vue>
                                    </div>
                                    <button class="uk-button uk-button-default" @click="onBtExportOMTD()">Export</button>
                                </div>
                                <div class="uk-card-small uk-width-1-1">
                                    <h3>Channel Overview</h3>
                                    <div class="gridSize">
                                        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptionsOMTD" :columnDefs="columnDefsOMTD" :rowData="rowDataOMTD">
                                        </ag-grid-vue>
                                    </div>
                                    <button class="uk-button uk-button-default" @click="onBtExportOMTD()">Export</button>
                                </div>
                                <div class="uk-card-small uk-width-1-1">
                                    <h3>Rep Overview - Excl Corp Sales</h3>
                                    <div class="gridSize">
                                        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptionsOMTD" :columnDefs="columnDefsOMTD" :rowData="rowDataOMTD">
                                        </ag-grid-vue>
                                    </div>
                                    <button class="uk-button uk-button-default" @click="onBtExportOMTD()">Export</button>
                                </div>
                                <div class="uk-card-small uk-width-1-1">
                                    <h3>Product Report</h3>
                                    <div class="gridSize">
                                        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptionsOMTD" :columnDefs="columnDefsOMTD" :rowData="rowDataOMTD">
                                        </ag-grid-vue>
                                    </div>
                                    <button class="uk-button uk-button-default" @click="onBtExportOMTD()">Export</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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
                headerNamesOMTD: ["CHANNELS", "Sep18", "Sep17", "VAR(%)", "VAR(R)", "BSep18", "VAR(%)", "VAR(R)", "CSep18", "CSep17", "VAR(%)", "VAR(C)"],
                headerNamesOYTD: ["CHANNELS", "2018/2019", "2017/2018", "VAR(%)", "VAR(R)", "B2018/2019", "VAR(%)", "VAR(R)", "C2018/2019", "C2017/2018", "VAR(%)", "VAR(C)"],
                headerNamesSCBD: ["CHANNELS", "PROVINCE", "Sep18", "Sep17", "VAR(%)", "VAR(R)", "BSep18", "VAR(%)", "VAR(R)", "ACTUAL", "CSep18", "CSep17", "VAR(%)", "VAR(C)", "LASTYEAR", "VAR(%)", "VAR(R)", "BUDGET", "VAR(%)", "VAR(R)", "C2018/2019", "C2017/2018", "VAR(%)", "VAR(C)"],
                headerNamesSCBD2: ["CHANNELS", "Merchant Group", "Sep18", "Sep17", "VAR(%)", "VAR(R)", "BSep18", "VAR(%)", "VAR(R)", "ACTUAL", "CSep18", "CSep17", "VAR(%)", "VAR(C)", "LASTYEAR", "VAR(%)", "VAR(R)", "BUDGET", "VAR(%)", "VAR(R)", "C2018/2019", "C2017/2018", "VAR(%)", "VAR(C)"],
                headerNamesREPS: ["REPS", "Sep18", "Sep17", "VAR(%)", "VAR(R)", "BSep18", "VAR(%)", "VAR(R)", "ACTUAL", "CSep18", "CSep17", "VAR(%)", "VAR(C)", "LASTYEAR", "VAR(%)", "VAR(R)", "BUDGET", "VAR(%)", "VAR(R)", "C2018/2019", "C2017/2018", "VAR(%)", "VAR(C)"],
                headerNamesPRODUCT: ["PRODUCT", "Sep18", "Sep17", "VAR(%)", "VAR(R)", "BSep18", "VAR(%)", "VAR(R)", "ACTUAL", "CSep18", "CSep17", "VAR(%)", "VAR(C)", "LASTYEAR", "VAR(%)", "VAR(R)", "BUDGET", "VAR(%)", "VAR(R)", "C2018/2019", "C2017/2018", "VAR(%)", "VAR(C)"],
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                // =================================================================================================================
                rowDataOMTD: [{
                    code: "SCS",
                    type: "Month To Date",
                    m1sale: 120,
                    m2sale: 170,
                    m1budget: 140,
                    m1cases: 12,
                    m2cases: 15
                }, ],
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
                    floatingFilter: true,
                    onGridReady: function(params) {
                        params.api.sizeColumnsToFit();
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
                    floatingFilter: true,
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
                    floatingFilter: true,
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
                        headerName: "TYPE",
                        field: "type",
                        colId: "OMTD01",
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
            this.gridOptionsOMTD.api.getColumnDef("OMTD0").headerName = this.headerNamesOMTD[0];
            this.gridOptionsOMTD.api.getColumnDef("OMTD01").headerName = this.headerNamesOMTD[1];
            this.gridOptionsOMTD.api.getColumnDef("OMTD1").headerName = this.headerNamesOMTD[2];
            this.gridOptionsOMTD.api.getColumnDef("OMTD2").headerName = this.headerNamesOMTD[3];
            this.gridOptionsOMTD.api.getColumnDef("OMTD3").headerName = this.headerNamesOMTD[4];
            this.gridOptionsOMTD.api.getColumnDef("OMTD4").headerName = this.headerNamesOMTD[5];
            this.gridOptionsOMTD.api.getColumnDef("OMTD5").headerName = this.headerNamesOMTD[6];
            this.gridOptionsOMTD.api.getColumnDef("OMTD6").headerName = this.headerNamesOMTD[7];
            this.gridOptionsOMTD.api.getColumnDef("OMTD7").headerName = this.headerNamesOMTD[8];
            this.gridOptionsOMTD.api.getColumnDef("OMTD8").headerName = this.headerNamesOMTD[9];
            this.gridOptionsOMTD.api.getColumnDef("OMTD9").headerName = this.headerNamesOMTD[10];
            this.gridOptionsOMTD.api.getColumnDef("OMTD10").headerName = this.headerNamesOMTD[11];
            this.gridOptionsOMTD.api.getColumnDef("OMTD11").headerName = this.headerNamesOMTD[12];
            this.gridOptionsOMTD.api.refreshHeader();
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
</style>