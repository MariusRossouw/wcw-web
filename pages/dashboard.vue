<template>
    <div class="container">
        <div class="content-background">
            <div class="uk-container uk-container-large uk-padding-remove">
                <div class="uk-offcanvas-content">
                    <div class="uk-width-1-1@m">
                        <div class="uk-grid-match uk-grid-small uk-text-center" uk-grid>
                            <div class="uk-width-5-6@m">
                                <div class="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-usage" style="width:100%; 
                                        background-color:#a5cb4f; 
                                        color:white; font-size:20px;">Filter
                                    <p v-if="filters.years.length == 0 && filters.quarters.length == 0 && filters.months.length == 0 && filters.codes.length == 0 && filters.reps.length == 0 && filters.province_filter.length == 0 && filters.merchant_groups.length == 0 && filters.merchant_filter.length == 0 && filters.wine_farms.length == 0 && filters.products.length == 0 && filters.product_types.length == 0">Showing (All)</p>
                                    <p v-if="filters.years.length > 0 || filters.quarters.length > 0 || filters.months.length > 0 || filters.codes.length > 0 || filters.reps.length > 0 || filters.province_filter.length > 0 || filters.merchant_groups.length > 0 || filters.merchant_filter.length > 0 || filters.wine_farms.length > 0 || filters.products.length > 0 || filters.product_types.length > 0">
                                    Showing (
                                        <span v-if="filters.years.length > 0" v-for="(fy, index) in filters.years" :key="fy+index"> {{ fy }} <b>|</b> </span>
                                        <span v-if="filters.quarters.length > 0" v-for="(fq, index) in filters.quarters" :key="fq+index"> {{ fq }} <b>|</b> </span>
                                        <span v-if="filters.months.length > 0" v-for="(fm, index) in filters.months" :key="fm+index"> {{ fm }} <b>|</b> </span>
                                        <span v-if="filters.codes.length > 0" v-for="(fc, index) in filters.codes" :key="fc+index"> {{ fc }} <b>|</b> </span>
                                        <span v-if="filters.reps.length > 0" v-for="(fr, index) in filters.reps" :key="fr.rep_name+index"> {{ fr.rep_name }} <b>|</b> </span>
                                        <span v-if="filters.province_filter.length > 0" v-for="(fpr, index) in filters.province_filter" :key="fpr.province_name+index"> {{ fpr.province_name }} <b>|</b> </span>
                                        <span v-if="filters.merchant_groups.length > 0" v-for="(fmg, index) in filters.merchant_groups" :key="fmg.group_name+index"> {{ fmg.group_name }} <b>|</b> </span>
                                        <span v-if="filters.merchant_filter.length > 0" v-for="(fm, index) in filters.merchant_filter" :key="fm.merchant_name+index"> {{ fm.merchant_name }} <b>|</b> </span>
                                        <span v-if="filters.wine_farms.length > 0" v-for="(fw, index) in filters.wine_farms" :key="fw.farm_name+index"> {{ fw.farm_name }} <b>|</b> </span>
                                        <span v-if="filters.products.length > 0" v-for="(fp, index) in filters.products" :key="fp.product_name+index"> {{ fp.product_name }} <b>|</b> </span>
                                        <span v-if="filters.types.length > 0" v-for="(ft, index) in filters.types" :key="ft.product_type+index"> {{ ft.product_type }} <b>|</b> </span> )
                                    </p>
                                </div>
                            </div>
                            <div class="uk-width-1-6@m">
                                <div>
                                    <button class="uk-button uk-button-default uk-margin-small-right" type="button" style="width:100%; 
                                        background-color:#6296d0; 
                                        color:white; font-size:20px; height:50px;" @click="getStuff()">Apply</button><br/>
                                    <button class="uk-button uk-button-default uk-margin-small-right" type="button" style="width:100%; 
                                        background-color:#6296d0; 
                                        color:white; font-size:20px; height:50px;" @click="clearFilters()">Clear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="offcanvas-usage" uk-offcanvas>
                        <div class="uk-offcanvas-bar">
                            <button class="uk-offcanvas-close" type="button" uk-close style="color:red;"></button>
                            <div class="uk-width-1-1@m">
                                <div class="uk-grid-small" style="padding-right: 15px;" uk-grid>
                                    <div class="uk-width-1-6@m">
                                        <div class="uk-card uk-card-primary uk-card-small">
                                            <h3 class="uk-card-title">Code <span v-if="filters.codes.length > 0">{{filters.codes.length}}</span></h3>
                                            <div class="cardBody">
                                                <button v-for="(c, index) in codes" :key="index" :class="{'isSelected': c['selected'],  'isNotSelected': !c['selected']}" @click="updateCodes(index, c.code)">{{c.code}}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-width-1-6@m">
                                        <div class="uk-card uk-card-primary uk-card-small">
                                            <h3 class="uk-card-title">Province <span v-if="filters.province_filter.length > 0">{{filters.province_filter.length}}</span></h3>
                                            <div class="cardBody">
                                                <button v-for="(p, index) in provinces" :key="index" :class="{'isSelected': p['selected'],  'isNotSelected': !p['selected']}" @click="updateProvinces(index, p)">{{p.province_name}}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-width-1-6@m">
                                        <div class="uk-card uk-card-primary uk-card-small">
                                            <h3 class="uk-card-title">Merchant Group <span v-if="filters.merchant_groups.length > 0">{{filters.merchant_groups.length}}</span></h3>
                                            <div class="cardBody">
                                                <button v-for="(mg, index) in merchant_groups" :key="index" :class="{'isSelected': mg['selected'],  'isNotSelected': !mg['selected']}" @click="updateMerchantGroups(index, mg)">{{mg.group_name}}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-width-1-6@m">
                                        <div class="uk-card uk-card-primary uk-card-small">
                                            <h3 class="uk-card-title">Merchant <span v-if="filters.merchant_filter.length > 0">{{filters.merchant_filter.length}}</span></h3>
                                            <div class="cardBody">
                                                <button v-for="(m, index) in merchants" :key="index" :class="{'isSelected': m['selected'],  'isNotSelected': !m['selected']}" @click="updateMerchants(index, m)">{{m.merchant_name}}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-width-1-6@m">
                                        <div class="uk-card uk-card-primary uk-card-small">
                                            <h3 class="uk-card-title">Rep <span v-if="filters.reps.length > 0">{{filters.reps.length}}</span></h3>
                                            <div class="cardBody">
                                                <button v-for="(r, index) in reps" :key="index" :class="{'isSelected': r['selected'],  'isNotSelected': !r['selected']}" @click="updateReps(index, r)">{{r.rep_name}}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-width-1-6@m">
                                        <div class="uk-card uk-card-primary uk-card-small">
                                            <h3 class="uk-card-title">Year <span v-if="filters.years.length > 0">{{filters.years.length}}</span></h3>
                                            <div class="cardBody">
                                                <button v-for="(y, index) in years" :key="index" :class="{'isSelected': y['selected'],  'isNotSelected': !y['selected']}" @click="updateYears(index, y.transaction_year)">{{y.transaction_year}}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-width-1-6@m">
                                        <div class="uk-card uk-card-primary uk-card-small">
                                            <h3 class="uk-card-title">Quarter <span v-if="filters.quarters.length > 0">{{filters.quarters.length}}</span></h3>
                                            <div class="cardBody">
                                                <button v-for="(q, index) in quarters" :key="index" :class="{'isSelected': q['selected'],  'isNotSelected': !q['selected']}" @click="updateQuarters(index, q.quarter)">{{q.quarter}}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-width-1-6@m">
                                        <div class="uk-card uk-card-primary uk-card-small">
                                            <h3 class="uk-card-title">Month <span v-if="filters.months.length > 0">{{filters.months.length}}</span></h3>
                                            <div class="cardBody">
                                                <button v-for="(m, index) in months" :key="index" :class="{'isSelected': m['selected'],  'isNotSelected': !m['selected']}" @click="updateMonths(index, m.month)">{{m.month}}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-width-1-6@m">
                                        <div class="uk-card uk-card-primary uk-card-small">
                                            <h3 class="uk-card-title">Wine Farm <span v-if="filters.wine_farms.length > 0">{{filters.wine_farms.length}}</span></h3>
                                            <div class="cardBody">
                                                <button v-for="(w, index) in wine_farms" :key="index" :class="{'isSelected': w['selected'],  'isNotSelected': !w['selected']}" @click="updateWine_farms(index, w)">{{w.farm_name}}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-width-1-6@m">
                                        <div class="uk-card uk-card-primary uk-card-small">
                                            <h3 class="uk-card-title">Product <span v-if="filters.products.length > 0">{{filters.products.length}}</span></h3>
                                            <div class="cardBody">
                                                <button v-for="(p, index) in products" :key="index" :class="{'isSelected': p['selected'],  'isNotSelected': !p['selected']}" @click="updateProducts(index, p)">{{p.product_name}}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-width-1-6@m">
                                        <div class="uk-card uk-card-primary uk-card-small">
                                            <h3 class="uk-card-title">Type <span v-if="filters.product_types.length > 0">{{filters.product_types.length}}</span></h3>
                                            <div class="cardBody">
                                                <button v-for="(t, index) in types" :key="index" :class="{'isSelected': t['selected'],  'isNotSelected': !t['selected']}" @click="updateTypes(index, t)">{{t.product_type}}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-width-1-6@m">
                                        <div class="uk-card uk-card-primary uk-card-small">
                                            <h3 class="uk-card-title">Search Filters</h3>
                                            <div class="cardBody">
                                                <center>
                                                    <button class="uk-button uk-button-default" @click="getStuff()">Apply</button>
                                                    <button class="uk-button uk-button-default" @click="clearFilters()">Clear</button>
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="uk-grid-match uk-grid-small uk-text-center" uk-grid>
                    <div class="uk-width-1-1@m">
                        <div class="uk-grid-small" uk-grid>
                            <div class="uk-width-1-1@m">
                                <div class="uk-card uk-card-default uk-card-small echarts">
                                    <chart :option="option" :loading="loading1" @ready="onReady" @click="onClick" id="chart1" />
                                </div>
                            </div>
                            <div class="uk-width-1-4@m">
                                <div class="uk-card uk-card-default uk-card-small superLink">
                                    <h3 class="uk-card-title">Bottom 5 Merchants</h3>
                                    <img v-if="bottom5_merchants.length == 0" src="@/assets/svg/spinner.svg" class="logo-image" />
                                    <li v-for="(bM, index) in bottom5_merchants" :key="index" @click="merchantAddFilter(bM)" style="cursor: pointer" :title="bM.name"><span style="float:left; margin-left:5px;">{{bM.name | truncate(10, '...')}}</span> <span style="float:right; margin-right:5px;">{{bM.value | toCurrency}}</span><br/></li>
                                </div>
                            </div>
                            <div class="uk-width-1-4@m">
                                <div class="uk-card uk-card-default uk-card-small superLink">
                                    <h3 class="uk-card-title">Top 5 Merchants</h3>
                                    <img v-if="top5_merchants.length == 0" src="@/assets/svg/spinner.svg" class="logo-image" />
                                    <li v-for="(tM, index) in top5_merchants" :key="index" @click="merchantAddFilter(tM)" style="cursor: pointer" :title="tM.name"><span style="float:left; margin-left:5px;">{{tM.name | truncate(10, '...')}}</span> <span style="float:right; margin-right:5px;"> {{tM.value | toCurrency}}</span><br/></li>
                                </div>
                            </div>
                            <div class="uk-width-1-4@m">
                                <div class="uk-card uk-card-default uk-card-small superLink">
                                    <h3 class="uk-card-title">Bottom 5 Products</h3>
                                    <img v-if="bottom5_products.length == 0" src="@/assets/svg/spinner.svg" class="logo-image" />
                                    <li v-for="(bP, index) in bottom5_products" :key="index" @click="productAddFilter(bP)" style="cursor: pointer" :title="bP.name"><span style="float:left; margin-left:5px;">{{bP.name | truncate(10, '...')}}</span> <span style="float:right; margin-right:5px;"> {{bP.value | toCurrency}}</span><br/></li>
                                </div>
                            </div>
                            <div class="uk-width-1-4@m">
                                <div class="uk-card uk-card-default uk-card-small superLink" >
                                    <h3 class="uk-card-title">Top 5 Products</h3>
                                    <img v-if="top5_products.length == 0" src="@/assets/svg/spinner.svg" class="logo-image" />
                                    <li v-for="(tP, index) in top5_products" :key="index" @click="productAddFilter(tP)" style="cursor: pointer" :title="tP.name"><span style="float:left; margin-left:5px;">{{tP.name | truncate(10, '...')}}</span> <span style="float:right; margin-right:5px;"> {{tP.value | toCurrency}}</span><br/></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
    
                <div class="uk-grid-small" uk-grid>
                    <div class="uk-width-1-3@m">
                        <chart style="height: 400px; width: 100%; background-color: white" :option="option2" :loading="loading2" @ready="onReady" @click="onClick" id="chart2" />
                    </div>
                    <div class="uk-width-1-3@m">
                        <chart style="height: 400px; width: 100%; background-color: white" :option="option3" :loading="loading3" @ready="onReady" @click="onClick" id="chart3" />
                    </div>
                    <div class="uk-width-1-3@m">
                        <chart style="height: 400px; width: 100%; background-color: white" :option="option4" :loading="loading4" @ready="onReady" @click="onClick" id="chart4" />
                    </div>
                </div>
    
                <div class="uk-card-small uk-width-1-1">
                    <h3>Transaction Data</h3>
                    <button @click="onBtNormal()">1 - Grouping Active</button>
                    <button @click="onBtPivotMode()">2 - Grouping Active with Pivot Mode</button>
                    <button @click="onBtFullPivot()">3 - Grouping Active with Pivot Mode and Pivot Active</button>
                    <div class="gridSize">
                        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptions" :columnDefs="columnDefs" :rowData="rowData">
                        </ag-grid-vue>
                    </div>
                    <button class="uk-button uk-button-default" @click="onBtExport()">Export</button>
                </div>
            </div>
        </div>
        <!-- <img src="@/assets/wine.gif" class="logo-image"/> -->
    
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
                title: "WCW Dashboard"
            };
        },
        data() {
            return {
                chart: null,
                chart5: null,
                loading1: true,
                loading2: true,
                loading3: true,
                loading4: true,
                topSaleAmount: 0,
                topSaleSpace: 0,
                topSaleAmountAccume: 0,
                topSaleSpaceAccume: 0,
                filters: {
                    years: [],
                    quarters: [],
                    months: [],
                    codes: [],
                    merchant_groups: [],
                    merchant_filter: [],
                    wine_farms: [],
                    province_filter: [],
                    products: [],
                    product_types: [],
                    reps: [],
                    types: []
                },
                year: "",
                month: "",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                bottom5_merchants: [],
                bottom5_products: [],
                top5_merchants: [],
                top5_products: [],
                type_names: [],
                provinces_names: [],
                code_names: [],
                max1: 0,
                years: [],
                quarters: [{
                        quarter: "Q1",
                        selected: false
                    },
                    {
                        quarter: "Q2",
                        selected: false
                    },
                    {
                        quarter: "Q3",
                        selected: false
                    },
                    {
                        quarter: "Q4",
                        selected: false
                    }
                ],
                months: [{
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
                graph_months: [],
                legend: [],
                codes: [],
                merchant_groups: [],
                merchants: [],
                wine_farms: [],
                products: [],
                types: [],
                reps: [],
                provinces: [],
                top5Products: [],
                columnDefs: [{
                        headerName: "Province",
                        field: "province_name",
                        minWidth: 120,
                        headerClass: 'resizable-header',
                        filter: 'agTextColumnFilter',
                        filterParams: {
                            filterOptions: ['contains'],
                            textCustomComparator: function(filter, value, filterText) {
                                var filterTextLoweCase = filterText.toLowerCase();
                                var valueLowerCase = value.toString().toLowerCase();
                                var aliases = {
                                    wc: 'western cape',
                                    gp: 'gauteng',
                                    fs: 'free stare',
                                    ec: 'eastern cape',
                                    kzn: 'kwazulu natal'
                                };
    
                                function contains(target, lookingFor) {
                                    if (target === null) return false;
                                    return target.indexOf(lookingFor) >= 0
                                }
    
                                var literalMatch = contains(valueLowerCase, filterTextLoweCase);
                                return literalMatch || contains(valueLowerCase, aliases[filterTextLoweCase]);
                            },
                            debounceMs: 2000
                        }
                    },
                    {
                        headerName: "Account",
                        field: "account",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Blend",
                        field: "blend",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Bottles",
                        field: "bottles",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "business_name",
                        field: "business_name",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "case_size",
                        field: "case_size",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "cases",
                        field: "cases",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "code",
                        field: "code",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "color",
                        field: "color",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "cultivar",
                        field: "cultivar",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "description",
                        field: "description",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "first_name",
                        field: "first_name",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "last_name",
                        field: "last_name",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "item_code",
                        field: "item_code",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "litres",
                        field: "litres",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "measurement",
                        field: "measurement",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "merchant_name",
                        field: "merchant_name",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "period",
                        field: "period",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "product_classification",
                        field: "product_classification",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "product_id",
                        field: "product_id",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "product_name",
                        field: "product_name",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "product_type",
                        field: "product_type",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "province_name",
                        field: "province_name",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "rep_code",
                        field: "rep_code",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "rep_name",
                        field: "rep_name",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "sale",
                        field: "sale",
                        minWidth: 90,
                        headerClass: 'resizable-header',
                        valueParser: this.numberValueParser
                    },
                    {
                        headerName: "size",
                        field: "size",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "special",
                        field: "special",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "transaction_code",
                        field: "transaction_code",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "transaction_day",
                        field: "transaction_day",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "transaction_id",
                        field: "transaction_id",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "transaction_month",
                        field: "transaction_month",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "transaction_type",
                        field: "transaction_type",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "transaction_year",
                        field: "transaction_year",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "vintage",
                        field: "vintage",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "volume",
                        field: "volume",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Region",
                        field: "region_name",
                        minWidth: 90,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Group",
                        field: "merchant_group",
                        minWidth: 110,
                        headerClass: 'resizable-header',
                        onCellDoubleClicked: this.openGroup
                    },
                    {
                        headerName: "Merchant",
                        field: "merchant_name",
                        minWidth: 110,
                        headerClass: 'resizable-header',
                        onCellDoubleClicked: this.openMerchant,
                        filter: 'agTextColumnFilter',
                        filterParams: {
                            filterOptions: ['contains'],
                            textCustomComparator: function(filter, value, filterText) {
                                var filterTextLoweCase = filterText.toLowerCase();
                                var valueLowerCase = value.toString().toLowerCase();
                                var aliases = {};
    
                                function contains(target, lookingFor) {
                                    if (target === null) return false;
                                    return target.indexOf(lookingFor) >= 0
                                }
    
                                var literalMatch = contains(valueLowerCase, filterTextLoweCase);
                                return literalMatch || contains(valueLowerCase, aliases[filterTextLoweCase]);
                            },
                            debounceMs: 2000
                        }
                    },
                    {
                        headerName: "Rep",
                        field: "rep_name",
                        minWidth: 110,
                        headerClass: 'resizable-header',
                        onCellDoubleClicked: this.openRep
                    },
                    {
                        headerName: "Farm",
                        field: "farm_name",
                        minWidth: 110,
                        headerClass: 'resizable-header',
                        onCellDoubleClicked: this.openFarm
                    },
                    {
                        headerName: "Year",
                        field: "transaction_year",
                        minWidth: 110,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Month",
                        field: "transaction_month",
                        minWidth: 100,
                        headerClass: 'resizable-header'
                    },
                    {
                        headerName: "Value",
                        field: "sale",
                        minWidth: 100,
                        aggFunc: 'sum',
                        headerClass: 'resizable-header',
                        valueParser: this.numberValueParser
                    },
                    {
                        headerName: "Volume",
                        field: "litres",
                        minWidth: 100,
                        aggFunc: 'sum',
                        headerClass: 'resizable-header',
                        valueParser: this.numberValueParser
                    },
                    {
                        headerName: "Percentage",
                        field: "percentage",
                        minWidth: 100,
                        aggFunc: 'sum',
                        headerClass: 'resizable-header',
                        valueParser: this.numberValueParser
                    } // of budget
                ],
                rowData: [],
                show_results_filter_selected: 0,
                search_text: '',
                gridOptions: {
                    defaultColDef: {
                        // allow every column to be aggregated
                        enableValue: true,
                        // allow every column to be grouped
                        enableRowGroup: true,
                        // allow every column to be pivoted
                        enablePivot: true,
                        // valueFormatter: function (params) {
                        //     return this.formatNumber(params.value);
                        // },
                    },
                    // onRowDoubleClicked: this.openProfile,
                    suppressPropertyNamesCheck: true,
                    enableColResize: true,
                    floatingFilter: true,
                    onGridReady: function(params) {
                        params.api.sizeColumnsToFit();
                    }
                },
                loading: false,
                // o: {},
                o2: {},
                o3: {},
                o4: {},
                option: {},
                option2: {},
                option3: {},
                option4: {},
            };
        },
        methods: {
            merchantAddFilter(merchant) {
                for (var k = 0; k < this.merchants.length; k++) {
                    if (this.merchants[k].merchant_id == merchant.merchant_id) {
                        this.merchants[k].selected = !this.merchants[k].selected;
                        if (this.merchants[k].selected) {
                            this.filters.merchant_filter.push(this.merchants[k]);
                        } else {
                            for (var i = 0; i < this.filters.merchant_filter.length; i++) {
                                if (this.filters.merchant_filter[i].merchant_id === this.merchants[k].merchant_id) {
                                    this.filters.merchant_filter.splice(i, 1);
                                }
                            }
                        }
                    }
                }
            },
            productAddFilter(product) {
                console.log(product);
                for (var k = 0; k < this.products.length; k++) {
                    if (this.products[k].product_id == product.product_id) {
                        this.products[k].selected = !this.products[k].selected;
                        if (this.products[k].selected) {
                            this.filters.products.push(this.products[k]);
                        } else {
                            for (var i = 0; i < this.filters.products.length; i++) {
                                if (this.filters.products[i].product_id === this.products[k].product_id) {
                                    this.filters.products.splice(i, 1);
                                }
                            }
                        }
                    }
                }
                console.log(this.filters.products);
            },
            checkAuthState() {
                let ls = JSON.parse(localStorage.getItem("State"));
                // console.log(ls);
                if (!ls) {
                    this.$router.push("/login");
                } else {
                    this.$store.replaceState(ls);
                    if(this.$store.state.session.entity.type != 'Admin'){
                        this.setFilterFromState(ls);
                    }
                }
            },
            setFilterFromState(ls){
                // this.filters = ls.session.entity.filters;
                this.years = ls.session.entity.filters.years;
                // this.quarters = ls.session.entity.filters.quarters;
                // this.months = ls.session.entity.filters.months;
                this.codes = ls.session.entity.filters.codes;
                this.merchant_groups = ls.session.entity.filters.merchant_groups;
                this.merchants = ls.session.entity.filters.merchants;
                this.wine_farms = ls.session.entity.filters.wine_farms;
                this.provinces = ls.session.entity.filters.provinces;
                this.products = ls.session.entity.filters.products;
                this.types = ls.session.entity.filters.types;
                this.reps = ls.session.entity.filters.reps;
                if (this.year != "") {
                    for (var i = 0; i < this.years.length; i++) {
                        if (this.years[i].transaction_year == this.year) {
                            this.updateYears(i, this.years[i].transaction_year);
                        }
                    }
                }
                this.bottom5_merchants = [];
                this.bottom5_products = [];
                this.top5_merchants = [];
                this.top5_products = [];

                if (this.loading4 != true) {
                    this.loading4 = !this.loading4;
                }
                if (this.loading1 != true) {
                    this.loading1 = !this.loading1;
                }
                if (this.loading2 != true) {
                    this.loading2 = !this.loading2;
                }
                if (this.loading3 != true) {
                    this.loading3 = !this.loading3;
                }
            },
            openGroup(params) {
                // console.log(params);
                this.$router.push("/group/" + params.data.merchant_group_id);
            },
            openMerchant(params) {
                // console.log(params);
                this.$router.push("/merchant/" + params.data.merchant_id);
            },
            openRep(params) {
                // console.log(params);
                this.$router.push("/user/" + params.data.profile_id);
            },
            openFarm(params) {
                // console.log(params);
                this.$router.push("/farm/" + params.data.wine_farm_id);
            },
            onBtNormal() {
                this.gridOptions.columnApi.setPivotMode(false);
                this.gridOptions.columnApi.setPivotColumns([]);
                this.gridOptions.columnApi.setRowGroupColumns(['province_name', 'rep_name']);
            },
            onBtPivotMode() {
                this.gridOptions.columnApi.setPivotMode(true);
                this.gridOptions.columnApi.setPivotColumns([]);
                this.gridOptions.columnApi.setRowGroupColumns(['province_name', 'transaction_year']);
            },
            onBtFullPivot() {
                this.gridOptions.columnApi.setPivotMode(true);
                this.gridOptions.columnApi.setPivotColumns(['transaction_year', 'transaction_month']);
                this.gridOptions.columnApi.setRowGroupColumns(['province_name', 'rep_name', 'merchant_name']);
            },
            numberValueParser(params) {
                return Number(params.newValue);
            },
            formatNumber(number) {
                // this puts commas into the number eg 1000 goes to 1,000,
                // i pulled this from stack overflow, i have no idea how it works
                return Math.floor(number).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
            },
            onBtExport() {
                var params = {
                    fileName: "filename",
                    sheetName: 'sheetName'
                };
                this.gridOptions.api.exportDataAsExcel(params);
            },
            doRandom() {
                const that = this;
                that.loading = !that.loading;
            },
            onReady(instance, ECharts) {
                // console.log(instance, ECharts);
            },
            onClick(event, instance, ECharts) {
                // console.log(arguments);
            },
            updateYears(index, year) {
                this.years[index].selected = !this.years[index].selected;
                if (this.years[index].selected) {
                    this.filters.years.indexOf(year) === -1 ? this.filters.years.push(year) : console.log("This item already exists");
                } else {
                    for (var i = 0; i < this.filters.years.length; i++) {
                        if (this.filters.years[i] === year) {
                            this.filters.years.splice(i, 1);
                        }
                    }
                }
            },
            updateQuarters(index, quarter) {
                this.quarters[index].selected = !this.quarters[index].selected;
                if (this.quarters[index].selected) {
                    this.filters.quarters.push(quarter);
                } else {
                    for (var i = 0; i < this.filters.quarters.length; i++) {
                        if (this.filters.quarters[i] === quarter) {
                            this.filters.quarters.splice(i, 1);
                        }
                    }
                }
            },
            updateMonths(index, month) {
                this.months[index].selected = !this.months[index].selected;
                if (this.months[index].selected) {
                    this.filters.months.indexOf(month) === -1 ? this.filters.months.push(month) : console.log("This item already exists");
                } else {
                    for (var i = 0; i < this.filters.months.length; i++) {
                        if (this.filters.months[i] === month) {
                            this.filters.months.splice(i, 1);
                        }
                    }
                }
            },
            updateCodes(index, code) {
                this.codes[index].selected = !this.codes[index].selected;
                if (this.codes[index].selected) {
                    this.filters.codes.push(code);
                } else {
                    for (var i = 0; i < this.filters.codes.length; i++) {
                        if (this.filters.codes[i] === code) {
                            this.filters.codes.splice(i, 1);
                        }
                    }
                }
            },
            updateProvinces(index, province) {
                this.provinces[index].selected = !this.provinces[index].selected;
                if (this.provinces[index].selected) {
                    this.filters.province_filter.push(province);
                } else {
                    for (var i = 0; i < this.filters.province_filter.length; i++) {
                        if (this.filters.province_filter[i] === province) {
                            this.filters.province_filter.splice(i, 1);
                        }
                    }
                }
            },
            updateMerchantGroups(index, merchant_group) {
                this.merchant_groups[index].selected = !this.merchant_groups[index].selected;
                if (this.merchant_groups[index].selected) {
                    this.filters.merchant_groups.push(merchant_group);
                } else {
                    for (var i = 0; i < this.filters.merchant_groups.length; i++) {
                        if (this.filters.merchant_groups[i] === merchant_group) {
                            this.filters.merchant_groups.splice(i, 1);
                        }
                    }
                }
            },
            updateMerchants(index, merchant) {
                this.merchants[index].selected = !this.merchants[index].selected;
                if (this.merchants[index].selected) {
                    this.filters.merchant_filter.push(merchant);
                } else {
                    for (var i = 0; i < this.filters.merchant_filter.length; i++) {
                        if (this.filters.merchant_filter[i] === merchant) {
                            this.filters.merchant_filter.splice(i, 1);
                        }
                    }
                }
            },
            updateProducts(index, product) {
                this.products[index].selected = !this.products[index].selected;
                if (this.products[index].selected) {
                    this.filters.products.push(product);
                } else {
                    for (var i = 0; i < this.filters.products.length; i++) {
                        if (this.filters.products[i] === product) {
                            this.filters.products.splice(i, 1);
                        }
                    }
                }
            },
            updateTypes(index, type) {
                console.log(type);
                this.types[index].selected = !this.types[index].selected;
                if (this.types[index].selected) {
                    this.filters.types.push(type);
                } else {
                    for (var i = 0; i < this.filters.types.length; i++) {
                        if (this.filters.types[i] === type) {
                            this.filters.types.splice(i, 1);
                        }
                    }
                }
            },
            updateReps(index, rep) {
                this.reps[index].selected = !this.reps[index].selected;
                if (this.reps[index].selected) {
                    this.filters.reps.push(rep);
                } else {
                    for (var i = 0; i < this.filters.reps.length; i++) {
                        if (this.filters.reps[i] === rep) {
                            this.filters.reps.splice(i, 1);
                        }
                    }
                }
            },
            updateWine_farms(index, wine_farm) {
                this.wine_farms[index].selected = !this.wine_farms[index].selected;
                if (this.wine_farms[index].selected) {
                    this.filters.wine_farms.push(wine_farm);
                } else {
                    for (var i = 0; i < this.filters.wine_farms.length; i++) {
                        if (this.filters.wine_farms[i] === wine_farm) {
                            this.filters.wine_farms.splice(i, 1);
                        }
                    }
                }
            },
            getFilterData() {
                let request = {};
                // console.log("Request: ", request);
                axios.post(this.$store.state.api_url + 'filters', request)
                    .then(response => {
                        console.log(response.data.data);
                        this.years = response.data.data.years;
                        this.quarters = response.data.data.quarters;
                        this.months = response.data.data.months;
                        this.codes = response.data.data.codes;
                        this.merchant_groups = response.data.data.merchant_groups;
                        this.merchants = response.data.data.merchants;
                        this.wine_farms = response.data.data.wine_farms;
                        this.provinces = response.data.data.provinces;
                        this.products = response.data.data.products;
                        this.types = response.data.data.types;
                        this.reps = response.data.data.reps;
                        if (this.year != "") {
                            for (var i = 0; i < this.years.length; i++) {
                                if (this.years[i].transaction_year == this.year) {
                                    this.updateYears(i, this.years[i].transaction_year);
                                }
                            }
                        }
    
                        this.bottom5_merchants = [];
                        this.bottom5_products = [];
                        this.top5_merchants = [];
                        this.top5_products = [];
    
                        if (this.loading4 != true) {
                            this.loading4 = !this.loading4;
                        }
                        if (this.loading1 != true) {
                            this.loading1 = !this.loading1;
                        }
                        if (this.loading2 != true) {
                            this.loading2 = !this.loading2;
                        }
                        if (this.loading3 != true) {
                            this.loading3 = !this.loading3;
                        }
    
                        this.gridOptions.api.setColumnDefs(this.columnDefs);
                        this.gridOptions.api.setRowData([]);
                        this.getBudgetAndSales();
                        this.getTypes();
                        this.getProvinces();
                        this.getCodes();
                        this.getTop5Products();
                        this.getBottom5Merchants();
                        this.getTop5Merchants();
                        this.getBottom5Products();
                        this.getGraphData();
    
                    })
                    .catch(error => {
                        console.log("Error: ", error.response);
                    });
            },
            getBudgetAndSales() {
                this.chart.clear();
                this.chart.setOption({}, true);
                // allways start with the current year as default
                var currentyear = new Date().getFullYear();
                currentyear = currentyear.toString();
                var cm = new Date();
                // this.month = this.monthNames[cm.getMonth()];
                let request = {
                    filters: this.filters
                };
                if (request.filters.years.length == 0) {
                    request.filters.years.push(currentyear);
                    this.year = currentyear;
                    for (var i = 0; i < this.years.length; i++) {
                        if (this.years[i].transaction_year == this.year) {
                            this.updateYears(i, this.years[i].transaction_year);
                        }
                    }
                }
                if(this.$store.state.session.entity.type != 'Admin'){
                    if(request.filters.reps.length == 0){
                        request.filters.reps = this.reps;
                        for(var i =0; i < this.reps.length; i++){
                            this.reps[i].selected = true;
                        }
                    }
                }
                // console.log("Request: " + JSON.stringify(request));
                axios.post(this.$store.state.api_url + 'transactions_budget', request) //transactions_filtered
                    .then(response => {
                        // console.log('Response Graph: ', response);
                        this.graph_months = response.data.data.graph_months;
                        this.legend = response.data.data.legend;
                        // this.legend.push('Volume(L) 2018');
                        // this.legend.push('Volume(L) Accum 2018');
                        this.loading1 = false;
                        this.topSaleAmount = 0;
                        for (var i = 0; i < response.data.data.years.length; i++) {
                            for (var j = 0; j < response.data.data.years[i].sale.length; j++) {
                                if (response.data.data.years[i].sale[j] > this.topSaleAmount) {
                                    this.topSaleAmount = Math.ceil(response.data.data.years[i].sale[j] / 10000) * 10000;
                                    this.topSaleSpace = this.topSaleAmount / 5;
                                }
                            }
                            for (var j = 0; j < response.data.data.years[i].budget.length; j++) {
                                if (response.data.data.years[i].budget[j] > this.topSaleAmount) {
                                    this.topSaleAmount = Math.ceil(response.data.data.years[i].budget[j] / 10000) * 10000;
                                    this.topSaleSpace = this.topSaleAmount / 5;
                                }
                            }
                            for (var j = 0; j < response.data.data.years[i].sale_accum.length; j++) {
                                if (response.data.data.years[i].sale_accum[j] > this.topSaleAmountAccume) {
                                    this.topSaleAmountAccume = Math.ceil(response.data.data.years[i].sale_accum[j] / 10000) * 10000;
                                    this.topSaleSpaceAccume = this.topSaleAmountAccume / 5;
                                }
                            }
                            for (var j = 0; j < response.data.data.years[i].budget_accum.length; j++) {
                                if (response.data.data.years[i].budget_accum[j] > this.topSaleAmountAccume) {
                                    this.topSaleAmountAccume = Math.ceil(response.data.data.years[i].budget_accum[j] / 10000) * 10000;
                                    this.topSaleSpaceAccume = this.topSaleAmountAccume / 5;
                                }
                            }
                        }
                        var o = {
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
                                    dataView: {
                                        show: true,
                                        readOnly: false,
                                        title: 'Data view',
                                        lang: ['English', 'Close', 'Save']
                                    },
                                    magicType: {
                                        show: true,
                                        type: ['bar', 'line'],
                                        title: ['Magic', '2']
                                    },
                                    restore: {
                                        show: true,
                                        title: 'Restore'
                                    },
                                    saveAsImage: {
                                        show: true,
                                        title: 'Download'
                                    }
                                }
                            },
                            legend: {
                                data: this.legend //['Budget', 'Sales 2017', 'Sales 2018', '2017 Accum', '2018 Accum', 'Budget Accum'] //legend from backend
                            },
                            xAxis: [{
                                type: 'category',
                                data: this.graph_months, // months [] from backend else use own months array that include all the months
                                axisPointer: {
                                    type: 'shadow'
                                }
                            }],
                            yAxis: [{
                                    type: 'value',
                                    name: 'Sales/Budget/Volume',
                                    min: 0,
                                    max: this.topSaleAmount,
                                    interval: this.topSaleSpace,
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
                                    max: this.topSaleAmountAccume,
                                    interval: this.topSaleSpaceAccume,
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
                            series: []
                        }
                        var j = 0;
                        for (var i = 0; i < response.data.data.years.length; i++) {
                            // console.log(o.series.length);
                            o.series.push({
                                name: this.legend[i],
                                type: 'bar',
                                yAxisIndex: 0,
                                data: response.data.data.years[i].budget // budget [] -> for the year and months selected
                            }, )
                            j++;
                        }
                        for (var i = 0; i < response.data.data.years.length; i++) {
                            // console.log(o.series.length);
                            o.series.push({
                                name: this.legend[j],
                                type: 'bar',
                                yAxisIndex: 0,
                                data: response.data.data.years[i].sale // sale [] -> for the year and months selected
                            }, )
                            j++;
                        }
                        for (var i = 0; i < response.data.data.years.length; i++) {
                            // console.log(o.series.length);
                            o.series.push({
                                name: this.legend[j],
                                type: 'bar',
                                yAxisIndex: 0,
                                data: response.data.data.years[i].volume // volume [] -> for the year and months selected
                                // data: [234525,34532,234523,3252345,2352345,234523,23534,34523,3452345,2345324,345237,2345234]
                            }, )
                            j++;
                        }
                        for (var i = 0; i < response.data.data.years.length; i++) {
                            // console.log(o.series.length);
                            o.series.push({
                                name: this.legend[j],
                                type: 'line',
                                yAxisIndex: 1,
                                data: response.data.data.years[i].budget_accum // buget_accum [] -> for the year and months selected
                            }, )
                            j++;
                        }
                        for (var i = 0; i < response.data.data.years.length; i++) {
                            // console.log(o.series.length);
                            o.series.push({
                                name: this.legend[j],
                                type: 'line',
                                yAxisIndex: 1,
                                data: response.data.data.years[i].sale_accum // sale_accum [] -> for the year and months selected
                            }, )
                            j++;
                        }
                        for (var i = 0; i < response.data.data.years.length; i++) {
                            // console.log(o.series.length);
                            o.series.push({
                                name: this.legend[j],
                                type: 'line',
                                yAxisIndex: 0,
                                data: response.data.data.years[i].volume_accum // sale_accum [] -> for the year and months selected
                                // data: [234525,234525+34532,234525+34532+234523,234525+34532+234523+3252345,234525+34532+234523+3252345+2352345,234525+34532+234523+3252345+2352345+3324234,234525+34532+234523+3252345+2352345+3324234+423434,234525+34532+234523+3252345+2352345+3324234+423434+4353453]
                            }, )
                            j++;
                        }
                        // console.log("O: ", o)
                        this.chart.setOption(o, true);
                    })
            },
            getTypes() {
                this.chart2.clear();
                this.chart2.setOption({}, true);
                var currentyear = new Date().getFullYear();
                currentyear = currentyear.toString();
                var cm = new Date();
                // this.month = this.monthNames[cm.getMonth()];
                let request = {
                    filters: this.filters
                };
                if (request.filters.years.length == 0) {
                    request.filters.years.push(currentyear);
                    this.year = currentyear;
                    for (var i = 0; i < this.years.length; i++) {
                        if (this.years[i].transaction_year == this.year) {
                            this.updateYears(i, this.years[i].transaction_year);
                        }
                    }
                }
                // console.log("Request: " + JSON.stringify(request));
                axios.post(this.$store.state.api_url + 'transactions_types', request) //transactions_filtered
                    .then(response => {
                        // console.log('Response: ', response);
                        this.loading2 = false;
                        // this.max1 = Math.max(response.data.data.years[0].sale);
                        for (var i = 0; i < response.data.data.types.length; i++) {
                            this.type_names.push(response.data.data.types[i].name);
                        }
                        var o2 = {
                            title: {
                                text: 'Types',
                                x: 'center'
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            series: [{
                                name: 'Types', // name of type
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data: response.data.data.types,
                                itemStyle: {
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }]
                        }
                        this.chart2.setOption(o2, true);
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
            },
            getProvinces() {
                this.chart3.clear();
                this.chart3.setOption({}, true);
                var currentyear = new Date().getFullYear();
                currentyear = currentyear.toString();
                var cm = new Date();
                // this.month = this.monthNames[cm.getMonth()];
                let request = {
                    filters: this.filters
                };
                if (request.filters.years.length == 0) {
                    request.filters.years.push(currentyear);
                    this.year = currentyear;
                    for (var i = 0; i < this.years.length; i++) {
                        if (this.years[i].transaction_year == this.year) {
                            this.updateYears(i, this.years[i].transaction_year);
                        }
                    }
                }
                // console.log("Request: " + JSON.stringify(request));
                axios.post(this.$store.state.api_url + 'transactions_provinces', request) //transactions_filtered
                    .then(response => {
                        // console.log('Response: ', response);
                        this.loading3 = false;
                        for (var i = 0; i < response.data.data.provinces.length; i++) {
                            this.provinces_names.push(response.data.data.provinces[i].name);
                        }
                        var o3 = {
                            title: {
                                text: 'Province',
                                x: 'center'
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            series: [{
                                name: 'Province',
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data: response.data.data.provinces,
                                itemStyle: {
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }]
                        }
                        this.chart3.setOption(o3, true);
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
            },
            getCodes() {
                this.chart4.clear();
                this.chart4.setOption({}, true);
                var currentyear = new Date().getFullYear();
                currentyear = currentyear.toString();
                var cm = new Date();
                // this.month = this.monthNames[cm.getMonth()];
                let request = {
                    filters: this.filters
                };
                if (request.filters.years.length == 0) {
                    request.filters.years.push(currentyear);
                    this.year = currentyear;
                    for (var i = 0; i < this.years.length; i++) {
                        if (this.years[i].transaction_year == this.year) {
                            this.updateYears(i, this.years[i].transaction_year);
                        }
                    }
                }
                // console.log("Request: " + JSON.stringify(request));
                axios.post(this.$store.state.api_url + 'transactions_codes', request) //transactions_filtered
                    .then(response => {
                        // console.log('Response: ', response);
                        this.loading4 = false;
                        // console.log("this.loading4: ",this.loading4);
                        for (var i = 0; i < response.data.data.code.length; i++) {
                            this.code_names.push(response.data.data.code[i].name);
                        }
                        var o4 = {
                            title: {
                                text: 'Code',
                                x: 'center'
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            series: [{
                                name: 'Code',
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data: response.data.data.code,
                                itemStyle: {
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }]
                        }
                        this.chart4.setOption(o4, true);
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
            },
            getTop5Products() {
                // this.o = {};
                // allways start with the current year as default
                var currentyear = new Date().getFullYear();
                currentyear = currentyear.toString();
                var cm = new Date();
                // this.month = this.monthNames[cm.getMonth()];
                let request = {
                    filters: this.filters
                };
                if (request.filters.years.length == 0) {
                    request.filters.years.push(currentyear);
                    this.year = currentyear;
                    for (var i = 0; i < this.years.length; i++) {
                        if (this.years[i].transaction_year == this.year) {
                            this.updateYears(i, this.years[i].transaction_year);
                        }
                    }
                }
                // console.log("Request: " + JSON.stringify(request));
                axios.post(this.$store.state.api_url + 'transactions_top5_products', request) //transactions_filtered
                    .then(response => {
                        // console.log('Response: ', response);
                        this.top5_products = response.data.data.top5_products;
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
            },
            getBottom5Merchants() {
                // this.o = {};
                // allways start with the current year as default
                var currentyear = new Date().getFullYear();
                currentyear = currentyear.toString();
                var cm = new Date();
                // this.month = this.monthNames[cm.getMonth()];
                let request = {
                    filters: this.filters
                };
                if (request.filters.years.length == 0) {
                    request.filters.years.push(currentyear);
                    this.year = currentyear;
                    for (var i = 0; i < this.years.length; i++) {
                        if (this.years[i].transaction_year == this.year) {
                            this.updateYears(i, this.years[i].transaction_year);
                        }
                    }
                }
                // console.log("Request: " + JSON.stringify(request));
                axios.post(this.$store.state.api_url + 'transactions_bottom5_merchants', request) //transactions_filtered
                    .then(response => {
                        // console.log('Response: ', response);
                        this.bottom5_merchants = response.data.data.bottom5_merchants;
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
            },
            getTop5Merchants() {
                // this.o = {};
                // allways start with the current year as default
                var currentyear = new Date().getFullYear();
                currentyear = currentyear.toString();
                var cm = new Date();
                // this.month = this.monthNames[cm.getMonth()];
                let request = {
                    filters: this.filters
                };
                if (request.filters.years.length == 0) {
                    request.filters.years.push(currentyear);
                    this.year = currentyear;
                    for (var i = 0; i < this.years.length; i++) {
                        if (this.years[i].transaction_year == this.year) {
                            this.updateYears(i, this.years[i].transaction_year);
                        }
                    }
                }
                // console.log("Request: " + JSON.stringify(request));
                axios.post(this.$store.state.api_url + 'transactions_top5_merchants', request) //transactions_filtered
                    .then(response => {
                        // console.log('Response: ', response);
                        this.top5_merchants = response.data.data.top5_merchants;
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
            },
            getBottom5Products() {
                // this.o = {};
                // allways start with the current year as default
                var currentyear = new Date().getFullYear();
                currentyear = currentyear.toString();
                var cm = new Date();
                // this.month = this.monthNames[cm.getMonth()];
                let request = {
                    filters: this.filters
                };
                if (request.filters.years.length == 0) {
                    request.filters.years.push(currentyear);
                    this.year = currentyear;
                    for (var i = 0; i < this.years.length; i++) {
                        if (this.years[i].transaction_year == this.year) {
                            this.updateYears(i, this.years[i].transaction_year);
                        }
                    }
                }
                // console.log("Request: " + JSON.stringify(request));
                axios.post(this.$store.state.api_url + 'transactions_bottom5_products', request) //transactions_filtered
                    .then(response => {
                        // console.log('Response: ', response);
                        this.bottom5_products = response.data.data.bottom5_products;
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
            },
            getGraphData() {
                // this.o = {};
                // allways start with the current year as default
                var currentyear = new Date().getFullYear();
                currentyear = currentyear.toString();
                var cm = new Date();
                // this.month = this.monthNames[cm.getMonth()];
                let request = {
                    filters: this.filters
                };
                if (request.filters.years.length == 0) {
                    request.filters.years.push(currentyear);
                    this.year = currentyear;
                    for (var i = 0; i < this.years.length; i++) {
                        if (this.years[i].transaction_year == this.year) {
                            this.updateYears(i, this.years[i].transaction_year);
                        }
                    }
                }
                // console.log("Request: " + JSON.stringify(request));
                axios.post(this.$store.state.api_url + 'transactions_grid', request) //transactions_filtered
                    .then(response => {
                        // console.log('Response: ', response);
                        this.gridOptions.api.setColumnDefs(this.columnDefs);
                        this.gridOptions.api.setRowData(response.data.data.records);
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
            },
            clearFilters() {
    
                this.filters = {
                    years: [],
                    quarters: [],
                    months: [],
                    codes: [],
                    merchant_groups: [],
                    merchant_filter: [],
                    wine_farms: [],
                    province_filter: [],
                    products: [],
                    product_types: [],
                    reps: [],
                    types: []
                };
    
                for (var j = 0; j < this.years.length; j++) {
                    this.years[j].selected = false;
                }
                for (var j = 0; j < this.quarters.length; j++) {
                    this.quarters[j].selected = false;
                }
    
                for (var j = 0; j < this.months.length; j++) {
                    this.months[j].selected = false;
                }
    
                for (var j = 0; j < this.codes.length; j++) {
                    this.codes[j].selected = false;
                }
    
                for (var j = 0; j < this.merchant_groups.length; j++) {
                    this.merchant_groups[j].selected = false;
                }
    
    
                for (var j = 0; j < this.merchants.length; j++) {
                    this.merchants[j].selected = false;
                }
    
                for (var j = 0; j < this.wine_farms.length; j++) {
                    this.wine_farms[j].selected = false;
                }
    
                for (var j = 0; j < this.provinces.length; j++) {
                    this.provinces[j].selected = false;
                }
    
                for (var j = 0; j < this.products.length; j++) {
                    this.products[j].selected = false;
                }
    
                for (var j = 0; j < this.types.length; j++) {
                    this.types[j].selected = false;
                }
    
                for (var j = 0; j < this.reps.length; j++) {
                    this.reps[j].selected = false;
                }
    
                for (var j = 0; j < this.reps.length; j++) {
                    this.reps[j].selected = false;
                }
    
            },
            resize() {
                this.chart.resize();
                this.chart2.resize();
                this.chart3.resize();
                this.chart4.resize();
            },
            getStuff() {
                this.bottom5_merchants = [];
                this.bottom5_products = [];
                this.top5_merchants = [];
                this.top5_products = [];
                this.gridOptions.api.setColumnDefs(this.columnDefs);
                this.gridOptions.api.setRowData([]);
                if (this.loading4 != true) {
                    this.loading4 = !this.loading4;
                }
                if (this.loading1 != true) {
                    this.loading1 = !this.loading1;
                }
                if (this.loading2 != true) {
                    this.loading2 = !this.loading2;
                }
                if (this.loading3 != true) {
                    this.loading3 = !this.loading3;
                }
                this.getBudgetAndSales();
                this.getTypes();
                this.getProvinces();
                this.getCodes();
                this.getTop5Products();
                this.getBottom5Merchants();
                this.getTop5Merchants();
                this.getBottom5Products();
                this.getGraphData();
            }
        },
        beforeMount() {
            this.checkAuthState();
        },
        mounted() {
            // this.getData1();
            this.chart = echarts.init(document.getElementById('chart1'));
            this.chart2 = echarts.init(document.getElementById('chart2'));
            this.chart3 = echarts.init(document.getElementById('chart3'));
            this.chart4 = echarts.init(document.getElementById('chart4'));
            if(this.$store.state.session.entity.type == 'Admin'){
                this.getFilterData();
            }else{
                this.getBudgetAndSales();
                this.getTypes();
                this.getProvinces();
                this.getCodes();
                this.getTop5Products();
                this.getBottom5Merchants();
                this.getTop5Merchants();
                this.getBottom5Products();
                this.getGraphData();
            }
            var currentyear = new Date().getFullYear();
            var cm = new Date();
            // this.month = this.monthNames[cm.getMonth()];
            this.year = currentyear.toString();
            window.addEventListener('resize', this.resize, {
                once: false,
                passive: true,
                capture: false,
            });
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

    .superLink {
        overflow-y: scroll;
        height: 200px;
    }
    
    .superLink li:hover {
        background: #adc962;
        color: white;
    }
</style>