<template>
    <div >
        <div class="uk-grid-match uk-grid-small uk-text-center" uk-grid>
            <div class="uk-width-1-6@m">
                <div class="uk-grid-small" uk-grid>
                    <div class="uk-card uk-card-primary uk-card-body">
                        <h3 class="uk-card-title">Rep</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div class="uk-card uk-card-primary uk-card-body">
                        <h3 class="uk-card-title">Year</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div class="uk-card uk-card-primary uk-card-body">
                        <h3 class="uk-card-title">Quarter</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div class="uk-card uk-card-primary uk-card-body">
                        <h3 class="uk-card-title">Month</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            <div class="uk-width-2-3@m">
                <div class="uk-grid-small" style="padding-right: 15px;" uk-grid>
                    <div class="uk-width-1-4@m">
                        <div class="uk-card uk-card-primary uk-card-body">
                            <h3 class="uk-card-title">Code</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="uk-width-1-4@m">
                        <div class="uk-card uk-card-primary uk-card-body">
                            <h3 class="uk-card-title">Province</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="uk-width-1-4@m">
                        <div class="uk-card uk-card-primary uk-card-body">
                            <h3 class="uk-card-title">Merchant Group</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="uk-width-1-4@m">
                        <div class="uk-card uk-card-primary uk-card-body">
                            <h3 class="uk-card-title">Merchant</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="uk-width-1-1@m">
                        <div class="uk-card uk-card-default uk-card-body echarts">
                            <h3 class="uk-card-title">Merchant</h3>
                            <chart
                                :option="option"
                                :loading="loading"
                                @ready="onReady"
                                @click="onClick"
                            />
                        </div>
                    </div>
                    <div class="uk-width-1-4@m">
                        <div class="uk-card uk-card-default uk-card-body">
                            <h3 class="uk-card-title">Top 5 A</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="uk-width-1-4@m">
                        <div class="uk-card uk-card-default uk-card-body">
                            <h3 class="uk-card-title">Bottom 5 A</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="uk-width-1-4@m">
                        <div class="uk-card uk-card-default uk-card-body">
                            <h3 class="uk-card-title">Top 5 B</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="uk-width-1-4@m">
                        <div class="uk-card uk-card-default uk-card-body">
                            <h3 class="uk-card-title">Bottom 5 B</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="uk-width-1-6@m">
                <div class="uk-grid-small" uk-grid>
                    <div class="uk-card uk-card-primary uk-card-body">
                        <h3 class="uk-card-title">Winefarm</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div class="uk-card uk-card-primary uk-card-body">
                        <h3 class="uk-card-title">Product</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div class="uk-card uk-card-primary uk-card-body">
                        <h3 class="uk-card-title">Vintage</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div class="uk-card uk-card-primary uk-card-body">
                        <h3 class="uk-card-title">Type</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>





        <!-- <div class="uk-child-width-1-6@m uk-grid-small uk-grid-match" uk-grid>
            <div>
                <div class="uk-card uk-card-primary uk-card-body">
                    <h3 class="uk-card-title">Year</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-primary uk-card-body">
                    <h3 class="uk-card-title">Month</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-primary uk-card-body">
                    <h3 class="uk-card-title">Code</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-primary uk-card-body">
                    <h3 class="uk-card-title">Winefarm</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-primary uk-card-body">
                    <h3 class="uk-card-title">Merchant</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-primary uk-card-body">
                    <h3 class="uk-card-title">Rep</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>

        <div class="uk-grid-match uk-grid-small uk-text-center" uk-grid>
            <div class="uk-width-1-6@m" style="height: 180px">
                <div class="uk-card uk-card-primary uk-card-body">auto@m<br>visible@l</div>
            </div>
            <div class="uk-width-2-3@m" style="height: 400px">
                <div class="uk-card uk-card-default uk-card-body echarts">
                    <h3 class="uk-card-title">Merchant</h3>
                    <chart
                        :option="option"
                        :loading="loading"
                        @ready="onReady"
                        @click="onClick"
                    />
                </div>
            </div>
            <div class="uk-width-1-6@m" style="height: 180px">
                <div class="uk-card uk-card-default uk-card-body">expand@m</div>
            </div>
        </div> -->
    

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
                },
                loading: false,
                option : {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    toolbox: {
                        feature: {
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['bar','line']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    // legend: {
                    //     data:['ONE','TWO','THREE']
                    // },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['JAN','FEB','MRT','APR','MAY','JNE','JLY','AUG','SEP','OCT','NOV','DEC'],
                            axisPointer: {
                                type: 'shadow'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: 'Budget',
                            min: 0,
                            max: 150000,
                            interval: 50000,
                            axisLabel: {
                                formatter: '{value} R'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#b34038'
                                }
                            },
                        },
                        {
                            type: 'value',
                            name: 'Sales',
                            min: 0,
                            max: 150000,
                            interval: 50000,
                            axisLabel: {
                                formatter: '{value} R'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#5197d5'
                                }
                            },
                        }
                    ],
                    series: [
                        {
                            name:'Budget',
                            type:'line',
                            yAxisIndex: 1,
                            data:[30000, 29000, 23442, 67645, 78678, 23423, 56756, 54645, 56756, 87664, 78445, 45343]
                        },
                        {
                            name:'Sales',
                            type:'bar',
                            itemStyle: {
                                normal: {color: '#3398DB'}
                            },
                            data:[25000, 39760, 29880, 31440, 21000, 69006, 56879, 45546, 12323, 89678, 45435, 84656]
                        }
                    ]
                },
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
                this.$router.push("/group/" + params.data.merchant_group_id);
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
                this.$router.push("/farm/" + params.data.wine_farm_id);
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
                this.gridOptions.columnApi.setRowGroupColumns(['province_name','transaction_year', 'transaction_month']);
            },
            onBtPivotMode() {
                this.gridOptions.columnApi.setPivotMode(true);
                this.gridOptions.columnApi.setPivotColumns([]);
                this.gridOptions.columnApi.setRowGroupColumns(['province_name','transaction_year']);
            },
            onBtFullPivot() {
                this.gridOptions.columnApi.setPivotMode(true);
                this.gridOptions.columnApi.setPivotColumns(['transaction_year', 'transaction_month']);
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
            },
            doRandom() {
                const that = this;
                that.loading = !that.loading;
            },
            onReady(instance, ECharts) {
                console.log(instance, ECharts);
            },
            onClick(event, instance, ECharts) {
                console.log(arguments);
            },
            onClick2(event){
                console.log('Mouse',event.data); 
                var xAxisInfo = event.data;
                var dimension = xAxisInfo[0];
                // console.log(this.option4.series.length-1);
                this.option4.series[this.option4.series.length-1].label.formatter = '{b}: {@[' + dimension + ']} ({d}%)';
                this.option4.series[this.option4.series.length-1].encode.value = dimension;
                this.option4.series[this.option4.series.length-1].encode.tooltip = dimension;
                // console.log(this.option4);
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
.echarts {
        width: 100%;
        height: 400px;
    }
.uk-card-primary {
    height: 190px;
}
</style>

