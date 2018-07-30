<template>
    <div >
        <div class="uk-grid-match uk-grid-small uk-text-center" uk-grid>
            <div class="uk-width-1-6@m">
                <div class="uk-grid-small" uk-grid>
                    <div class="uk-card uk-card-primary uk-card-small">
                        <h3 class="uk-card-title">Rep</h3>
                        <button v-for="(r, index) in reps" :key="index" :class="{'isSelected': r['selected'],  'isNotSelected': !r['selected']}" @click="updateReps(index, r.rep)">{{r.rep}}</button>
                    </div>
                    <div class="uk-card uk-card-primary uk-card-small">
                        <h3 class="uk-card-title">Year</h3>
                        <button v-for="(y, index) in years" :key="index" :class="{'isSelected': y['selected'],  'isNotSelected': !y['selected']}" @click="updateYears(index, y.year)">{{y.year}}</button>
                    </div>
                    <div class="uk-card uk-card-primary uk-card-small">
                        <h3 class="uk-card-title">Quarter</h3>
                        <button v-for="(q, index) in quarters" :key="index" :class="{'isSelected': q['selected'],  'isNotSelected': !q['selected']}" @click="updateQuarters(index, q.quarter)">{{q.quarter}}</button>
                    </div>
                    <div class="uk-card uk-card-primary uk-card-small">
                        <h3 class="uk-card-title">Month</h3>
                        <button v-for="(m, index) in months" :key="index" :class="{'isSelected': m['selected'],  'isNotSelected': !m['selected']}" @click="updateMonths(index, m.month)">{{m.month}}</button>
                    </div>
                </div>
            </div>
            <div class="uk-width-2-3@m">
                <div class="uk-grid-small" style="padding-right: 15px;" uk-grid>
                    <div class="uk-width-1-4@m">
                        <div class="uk-card uk-card-primary uk-card-small">
                            <h3 class="uk-card-title">Code</h3>
                            <button v-for="(c, index) in codes" :key="index" :class="{'isSelected': c['selected'],  'isNotSelected': !c['selected']}" @click="updateCodes(index, c.code)">{{c.code}}</button>
                        </div>
                    </div>
                    <div class="uk-width-1-4@m">
                        <div class="uk-card uk-card-primary uk-card-small">
                            <h3 class="uk-card-title">Province</h3>
                            <button v-for="(p, index) in provinces" :key="index" :class="{'isSelected': p['selected'],  'isNotSelected': !p['selected']}" @click="updateProvinces(index, p.province)">{{p.province}}</button>
                        </div>
                    </div>
                    <div class="uk-width-1-4@m">
                        <div class="uk-card uk-card-primary uk-card-small">
                            <h3 class="uk-card-title">Merchant Group</h3>
                            <button v-for="(mg, index) in merchant_groups" :key="index" :class="{'isSelected': mg['selected'],  'isNotSelected': !mg['selected']}" @click="updateMerchantGroups(index, mg.merchant_group)">{{mg.merchant_group}}</button>
                        </div>
                    </div>
                    <div class="uk-width-1-4@m">
                        <div class="uk-card uk-card-primary uk-card-small">
                            <h3 class="uk-card-title">Merchant</h3>
                            <button v-for="(m, index) in merchants" :key="index" :class="{'isSelected': m['selected'],  'isNotSelected': !m['selected']}" @click="updateMerchants(index, m.merchant)">{{m.merchant}}</button>
                        </div>
                    </div>
                    <div class="uk-width-1-1@m">
                        <div class="uk-card uk-card-default uk-card-small echarts">
                            <h3 class="uk-card-title">Merchant</h3>
                            <chart
                                :option="option"
                                :loading="loading"
                                @ready="onReady"
                                @click="onClick"
                            />
                        </div>
                    </div>
                    <div class="uk-width-1-2@m">
                        <div class="uk-card uk-card-default uk-card-small">
                            <h3 class="uk-card-title">Top 5 A</h3>
                            <li v-for="(rD, index) in top5Products" :key="index">{{rD.product_name}} {{rD.total_vulue | toCurrency}}</li>
                        </div>
                    </div>
                    <div class="uk-width-1-2@m">
                        <div class="uk-card uk-card-default uk-card-small">
                            <h3 class="uk-card-title">Bottom 5 A</h3>
                            <li v-for="(rD, index) in top5Products" :key="index">{{rD.product_name}} {{rD.total_vulue | toCurrency}}</li>
                        </div>
                    </div>
                </div>
            </div>
            <div class="uk-width-1-6@m">
                <div class="uk-grid-small" uk-grid>
                    <div class="uk-card uk-card-primary uk-card-small">
                        <h3 class="uk-card-title">Winefarm</h3>
                        <button v-for="(w, index) in winefarms" :key="index" :class="{'isSelected': w['selected'],  'isNotSelected': !w['selected']}" @click="updateWinefarms(index, w.winefarm)">{{w.winefarm}}</button>
                    </div>
                    <div class="uk-card uk-card-primary uk-card-small">
                        <h3 class="uk-card-title">Product</h3>
                        <button v-for="(p, index) in products" :key="index" :class="{'isSelected': p['selected'],  'isNotSelected': !p['selected']}" @click="updateProducts(index, p.product)">{{p.product}}</button>
                    </div>
                    <div class="uk-card uk-card-primary uk-card-small">
                        <h3 class="uk-card-title">Type</h3>
                        <button v-for="(t, index) in types" :key="index" :class="{'isSelected': t['selected'],  'isNotSelected': !t['selected']}" @click="updateTypes(index, t.type)">{{t.type}}</button>
                    </div>
                    <div class="uk-card uk-card-primary uk-card-small">
                        <h3 class="uk-card-title">Search Filters</h3>
                        <p>Filters: 
                            <span v-if="filters.years.length > 0" v-for="(fy, index) in filters.years" :key="fy+index"> {{ fy }} <b v-if="filters.years.length > 1 && index+1 < filters.years.length">|</b> </span><br v-if="filters.years.length > 0" />
                            <span v-if="filters.quarters.length > 0" v-for="(fq, index) in filters.quarters" :key="fq+index"> {{ fq }} <b v-if="filters.quarters.length > 1 && index+1 < filters.quarters.length">|</b> </span><br v-if="filters.quarters.length > 0"/>
                            <span v-if="filters.months.length > 0" v-for="(fm, index) in filters.months" :key="fm+index"> {{ fm }} <b v-if="filters.months.length > 1 && index+1 < filters.months.length">|</b> </span><br v-if="filters.months.length > 0"/>
                            <span v-if="filters.codes.length > 0" v-for="(fc, index) in filters.codes" :key="fc+index"> {{ fc }} <b v-if="filters.codes.length > 1 && index+1 < filters.codes.length">|</b> </span><br v-if="filters.codes.length > 0"/>
                            <span v-if="filters.reps.length > 0" v-for="(fr, index) in filters.reps" :key="fr+index"> {{ fr }} <b v-if="filters.reps.length > 1 && index+1 < filters.reps.length">|</b> </span><br v-if="filters.reps.length > 0"/>
                            <span v-if="filters.provinces.length > 0" v-for="(fp, index) in filters.provinces" :key="fp+index"> {{ fp }} <b v-if="filters.provinces.length > 1 && index+1 < filters.provinces.length">|</b> </span><br v-if="filters.provinces.length > 0"/>
                            <span v-if="filters.merchant_groups.length > 0" v-for="(fmg, index) in filters.merchant_groups" :key="fmg+index"> {{ fmg }} <b v-if="filters.merchant_groups.length > 1 && index+1 < filters.merchant_groups.length">|</b> </span><br v-if="filters.merchant_groups.length > 0" />
                            <span v-if="filters.merchants.length > 0" v-for="(fm, index) in filters.merchants" :key="fm+index"> {{ fm }} <b v-if="filters.merchants.length > 1 && index+1 < filters.merchants.length">|</b> </span><br v-if="filters.merchants.length > 0"/>
                            <span v-if="filters.winefarms.length > 0" v-for="(fw, index) in filters.winefarms" :key="fw+index"> {{ fw }} <b v-if="filters.winefarms.length > 1 && index+1 < filters.winefarms.length">|</b> </span><br v-if="filters.winefarms.length > 0"/>
                            <span v-if="filters.products.length > 0" v-for="(fp, index) in filters.products" :key="fp+index"> {{ fp }} <b v-if="filters.products.length > 1 && index+1 < filters.products.length">|</b> </span><br v-if="filters.products.length > 0"/>
                            <span v-if="filters.types.length > 0" v-for="(ft, index) in filters.types" :key="ft+index"> {{ ft }} <b v-if="filters.types.length > 1 && index+1 < filters.types.length">|</b> </span><br v-if="filters.types.length > 0"/>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="uk-grid-small" uk-grid>
            <div class="uk-width-1-3@m">
                <chart
                    style="height: 400px; width: 100%;"
                    :option="option2"
                    :loading="loading"
                    @ready="onReady"
                    @click="onClick"
                />
            </div>
            <div class="uk-width-1-3@m">
                <chart
                    style="height: 400px; width: 100%;"
                    :option="option3"
                    :loading="loading"
                    @ready="onReady"
                    @click="onClick"
                />
            </div>
            <div class="uk-width-1-3@m">

            </div>
        </div>

        <div class="uk-card-small uk-width-1-1">
            <button @click="onBtNormal()">1 - Grouping Active</button>
            <button @click="onBtPivotMode()">2 - Grouping Active with Pivot Mode</button>
            <button @click="onBtFullPivot()">3 - Grouping Active with Pivot Mode and Pivot Active</button>
            <div class="gridSize">
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
                title: "WCW Dashboard"
            };
        },
        data() {
            return {
                filters: {
                    years:[],
                    quarters:[],
                    months:[],
                    codes:[],
                    merchant_groups:[],
                    merchants:[],
                    winefarms:[],
                    provinces:[],
                    products:[],
                    types:[],
                    reps:[]
                },
                years:[
                    {year:"2014", selected:false},
                    {year:"2015", selected:false},
                    {year:"2016", selected:false},
                    {year:"2017", selected:false},
                    {year:"2018", selected:false}
                ],
                quarters:[
                    {quarter:"Q1", selected:false},
                    {quarter:"Q2", selected:false},
                    {quarter:"Q3", selected:false},
                    {quarter:"Q4", selected:false}
                ],
                months:[
                    {month:"January", selected:false},
                    {month:"February", selected:false},
                    {month:"March", selected:false},
                    {month:"April", selected:false},
                    {month:"May", selected:false},
                    {month:"June", selected:false},
                    {month:"July", selected:false},
                    {month:"August", selected:false},
                    {month:"September", selected:false},
                    {month:"October", selected:false},
                    {month:"November", selected:false},
                    {month:"December", selected:false}
                ],
                codes:[
                    {code:"C1", selected:false},
                    {code:"C2", selected:false},
                    {code:"C3", selected:false},
                    {code:"C4", selected:false}
                ],
                merchant_groups:[
                    {merchant_group:"MG1", selected:false},
                    {merchant_group:"MG2", selected:false},
                    {merchant_group:"MG3", selected:false},
                    {merchant_group:"MG4", selected:false}
                ],
                merchants:[
                    {merchant:"M1", selected:false},
                    {merchant:"M2", selected:false},
                    {merchant:"M3", selected:false},
                    {merchant:"M4", selected:false}
                ],
                winefarms:[
                    {winefarm:"WF1", selected:false},
                    {winefarm:"WF2", selected:false},
                    {winefarm:"WF3", selected:false},
                    {winefarm:"WF4", selected:false}
                ],
                products:[
                    {product:"P1", selected:false},
                    {product:"P2", selected:false},
                    {product:"P3", selected:false},
                    {product:"P4", selected:false}
                ],
                types:[
                    {type:"T1", selected:false},
                    {type:"T2", selected:false},
                    {type:"T3", selected:false},
                    {type:"T4", selected:false}
                ],
                reps:[
                    {rep:"R1", selected:false},
                    {rep:"R2", selected:false},
                    {rep:"R3", selected:false},
                    {rep:"R4", selected:false}
                ],
                provinces:[
                    {province:"P1", selected:false},
                    {province:"P2", selected:false},
                    {province:"P3", selected:false},
                    {province:"P4", selected:false},
                    {province:"P5", selected:false},
                    {province:"P6", selected:false},
                    {province:"P7", selected:false},
                    {province:"P8", selected:false},
                    {province:"P9", selected:false}
                ],
                top5Products:[
                    {id:"1",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"},
                    {id:"2",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"},
                    {id:"3",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"},
                    {id:"4",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"},
                    {id:"5",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"}
                ],
                bottom5Products:[
                    {id:"1",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"},
                    {id:"2",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"},
                    {id:"3",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"},
                    {id:"4",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"},
                    {id:"5",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"}
                ],
                top5Merchants:[
                    {id:"1",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"},
                    {id:"2",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"},
                    {id:"3",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"},
                    {id:"4",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"},
                    {id:"5",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"}
                ],
                bottom5Merchants:[
                    {id:"1",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"},
                    {id:"2",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"},
                    {id:"3",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"},
                    {id:"4",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"},
                    {id:"5",product_name:"BB Merlot NV 750 ml",total_vulue:98765.43,total_volume:"8765"}
                ],
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
                            dataView: {show: true, readOnly: false, title: 'Data view'},
                            magicType: {show: true, type: ['bar','line'], title: ['Magic','2']},
                            restore: {show: true, title: 'Restore'},
                            saveAsImage: {show: true, title: 'Download'}
                        }
                    },
                    legend: {
                        data:['Budget','Sales 2017','Sales 2018','2017 Accum','2018 Accum']
                    },
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
                            name: 'Sales/Budget',
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
                            name: 'Accum',
                            min: 0,
                            max: 1000000,
                            interval: 250000,
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
                            yAxisIndex: 0,
                            data:[30000, 29000, 23442, 67645, 78678, 23423, 56756, 54645, 56756, 87664, 78445, 45343]
                        },
                        {
                            name:'Sales 2017',
                            type:'bar',
                            yAxisIndex: 0,
                            itemStyle: {
                                normal: {color: '#3c3c3c'}
                            },
                            data:[22000, 32760, 22880, 32440, 22000, 62006, 52879, 42546, 13323, 82678, 42435, 82656]
                        },
                        {
                            name:'Sales 2018',
                            type:'bar',
                            yAxisIndex: 0,
                            itemStyle: {
                                normal: {color: '#3398DB'}
                            },
                            data:[25000, 39760, 29880, 31440, 21000, 69006, 56879, 45546, 12323, 89678, 45435, 84656]
                        },
                        {
                            name:'2017 Accum',
                            type:'line',
                            yAxisIndex: 1,
                            data:[22000, 52760, 72880, 102440, 122000, 182006, 232879, 272546, 283323, 362678, 402435, 482656]
                        },
                        {
                            name:'2018 Accum',
                            type:'line',
                            yAxisIndex: 1,
                            data:[30000, 59000, 73442, 137645, 208678, 223423, 276756, 324645, 376756, 457664, 528445, 565343]
                        },
                    ]
                },
                option2: {
                    title : {
                        text: 'Types',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 150,
                        left: 100,
                        data: ['A','B','C','D','E']
                    },
                    series : [
                        {
                            name: 'Something',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'A'},
                                {value:310, name:'B'},
                                {value:234, name:'C'},
                                {value:135, name:'D'},
                                {value:1548, name:'E'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                },
                option3: {
                    title : {
                        text: 'Province',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 150,
                        left: 100,
                        data: ['A','B','C','D','E']
                    },
                    series : [
                        {
                            name: 'Something',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'A'},
                                {value:310, name:'B'},
                                {value:234, name:'C'},
                                {value:135, name:'D'},
                                {value:1548, name:'E'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
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
            },
            updateYears(index, year){
                this.years[index].selected = !this.years[index].selected;
                if(this.years[index].selected){
                    this.filters.years.push(year);
                } else {
                    for(var i = 0; i < this.filters.years.length; i++){
                        if(this.filters.years[i] === year){
                            this.filters.years.splice(i, 1);
                        }
                    }
                }
            },
            updateQuarters(index, quarter){
                this.quarters[index].selected = !this.quarters[index].selected;
                if(this.quarters[index].selected){
                    this.filters.quarters.push(quarter);
                } else {
                    for(var i = 0; i < this.filters.quarters.length; i++){
                        if(this.filters.quarters[i] === quarter){
                            this.filters.quarters.splice(i, 1);
                        }
                    }
                }
            },
            updateMonths(index, month){
                this.months[index].selected = !this.months[index].selected;
                if(this.months[index].selected){
                    this.filters.months.push(month);
                } else {
                    for(var i = 0; i < this.filters.months.length; i++){
                        if(this.filters.months[i] === month){
                            this.filters.months.splice(i, 1);
                        }
                    }
                }
            },
            updateCodes(index, code){
                this.codes[index].selected = !this.codes[index].selected;
                if(this.codes[index].selected){
                    this.filters.codes.push(code);
                } else {
                    for(var i = 0; i < this.filters.codes.length; i++){
                        if(this.filters.codes[i] === code){
                            this.filters.codes.splice(i, 1);
                        }
                    }
                }
            },
            updateProvinces(index, province){
                this.provinces[index].selected = !this.provinces[index].selected;
                if(this.provinces[index].selected){
                    this.filters.provinces.push(province);
                } else {
                    for(var i = 0; i < this.filters.provinces.length; i++){
                        if(this.filters.provinces[i] === province){
                            this.filters.provinces.splice(i, 1);
                        }
                    }
                }
            },
            updateMerchantGroups(index, merchant_group){
                this.merchant_groups[index].selected = !this.merchant_groups[index].selected;
                if(this.merchant_groups[index].selected){
                    this.filters.merchant_groups.push(merchant_group);
                } else {
                    for(var i = 0; i < this.filters.merchant_groups.length; i++){
                        if(this.filters.merchant_groups[i] === merchant_group){
                            this.filters.merchant_groups.splice(i, 1);
                        }
                    }
                }
            },
            updateMerchants(index, merchant){
                this.merchants[index].selected = !this.merchants[index].selected;
                if(this.merchants[index].selected){
                    this.filters.merchants.push(merchant);
                } else {
                    for(var i = 0; i < this.filters.merchants.length; i++){
                        if(this.filters.merchants[i] === merchant){
                            this.filters.merchants.splice(i, 1);
                        }
                    }
                }
            },
            updateProducts(index, product){
                this.products[index].selected = !this.products[index].selected;
                if(this.products[index].selected){
                    this.filters.products.push(product);
                } else {
                    for(var i = 0; i < this.filters.products.length; i++){
                        if(this.filters.products[i] === product){
                            this.filters.products.splice(i, 1);
                        }
                    }
                }
            },
            updateTypes(index, type){
                this.types[index].selected = !this.types[index].selected;
                if(this.types[index].selected){
                    this.filters.types.push(type);
                } else {
                    for(var i = 0; i < this.filters.types.length; i++){
                        if(this.filters.types[i] === type){
                            this.filters.types.splice(i, 1);
                        }
                    }
                }
            },
            updateReps(index, rep){
                this.reps[index].selected = !this.reps[index].selected;
                if(this.reps[index].selected){
                    this.filters.reps.push(rep);
                } else {
                    for(var i = 0; i < this.filters.reps.length; i++){
                        if(this.filters.reps[i] === rep){
                            this.filters.reps.splice(i, 1);
                        }
                    }
                }
            },
            updateWinefarms(index, winefarm){
                this.winefarms[index].selected = !this.winefarms[index].selected;
                if(this.winefarms[index].selected){
                    this.filters.winefarms.push(winefarm);
                } else {
                    for(var i = 0; i < this.filters.winefarms.length; i++){
                        if(this.filters.winefarms[i] === winefarm){
                            this.filters.winefarms.splice(i, 1);
                        }
                    }
                }
            },
            getData(){
                // add Type data to chart
            }
        },
        beforeMount() {
            this.checkAuthState();
        },
        mounted() {
            this.getData1();
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
.isSelected {
    color: white;
    background-color: yellowgreen;
    width: 80%;
    height: 30px;
    margin-bottom: 3px;
    border: none;
}
.isNotSelected {
    color: #3d83ec !important;
    width: 80%;
    height: 30px;
    margin-bottom: 3px;
    border: none;
}
</style>


// List of all the following
// transaction years
// reps
// codes
// provinces
// merchant groups
// merchants
// winefarms
// products
// type
// filter on all transactions with above
// top 5 merchants
// top 5 products
// 