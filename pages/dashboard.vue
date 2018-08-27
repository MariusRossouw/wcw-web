<template>
    <div class="container">
        <div class="content-background">
            <div class="uk-container uk-container-large uk-padding-remove">
        <div class="uk-offcanvas-content">
            <div class="uk-button uk-button-default uk-margin-small-right" 
                type="button" 
                uk-toggle="target: #offcanvas-usage" 
                style="width:100%; 
                        background-color:#a5cb4f; 
                        color:white; font-size:20px;">Filter
                <p v-if="filters.years.length == 0 && filters.quarters.length == 0 && filters.months.length == 0 && filters.codes.length == 0 && filters.reps.length == 0 && filters.provinces.length == 0 && filters.merchant_groups.length == 0 && filters.merchants.length == 0 && filters.wine_farms.length == 0 && filters.products.length == 0 && filters.types.length == 0">Showing (All)</p>
                <p v-if="filters.years.length > 0 || filters.quarters.length > 0 || filters.months.length > 0 || filters.codes.length > 0 || filters.reps.length > 0 || filters.provinces.length > 0 || filters.merchant_groups.length > 0 || filters.merchants.length > 0 || filters.wine_farms.length > 0 || filters.products.length > 0 || filters.types.length > 0"> Showing (
                    <span v-if="filters.years.length > 0" v-for="(fy, index) in filters.years" :key="fy+index"> {{ fy }} <b>|</b> </span>
                    <span v-if="filters.quarters.length > 0" v-for="(fq, index) in filters.quarters" :key="fq+index"> {{ fq }} <b>|</b> </span>
                    <span v-if="filters.months.length > 0" v-for="(fm, index) in filters.months" :key="fm+index"> {{ fm }} <b>|</b> </span>
                    <span v-if="filters.codes.length > 0" v-for="(fc, index) in filters.codes" :key="fc+index"> {{ fc }} <b>|</b> </span>
                    <span v-if="filters.reps.length > 0" v-for="(fr, index) in filters.reps" :key="fr.rep_name+index"> {{ fr.rep_name }} <b>|</b> </span>
                    <span v-if="filters.provinces.length > 0" v-for="(fpr, index) in filters.provinces" :key="fpr.province_name+index"> {{ fpr.province_name }} <b>|</b> </span>
                    <span v-if="filters.merchant_groups.length > 0" v-for="(fmg, index) in filters.merchant_groups" :key="fmg.group_name+index"> {{ fmg.group_name }} <b>|</b> </span>
                    <span v-if="filters.merchants.length > 0" v-for="(fm, index) in filters.merchants" :key="fm.merchant_name+index"> {{ fm.merchant_name }} <b>|</b> </span>
                    <span v-if="filters.wine_farms.length > 0" v-for="(fw, index) in filters.wine_farms" :key="fw.farm_name+index"> {{ fw.farm_name }} <b>|</b> </span>
                    <span v-if="filters.products.length > 0" v-for="(fp, index) in filters.products" :key="fp.product_name+index"> {{ fp.product_name }} <b>|</b> </span>
                    <span v-if="filters.types.length > 0" v-for="(ft, index) in filters.types" :key="ft.product_type+index"> {{ ft.product_type }} <b>|</b> </span> )
                </p>
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
                                    <h3 class="uk-card-title">Province <span v-if="filters.provinces.length > 0">{{filters.provinces.length}}</span></h3>
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
                                    <h3 class="uk-card-title">Merchant <span v-if="filters.merchants.length > 0">{{filters.merchants.length}}</span></h3>
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
                                    <h3 class="uk-card-title">Type <span v-if="filters.types.length > 0">{{filters.types.length}}</span></h3>
                                    <div class="cardBody">
                                        <button v-for="(t, index) in types" :key="index" :class="{'isSelected': t['selected'],  'isNotSelected': !t['selected']}" @click="updateTypes(index, t)">{{t.product_type}}</button>
                                    </div>
                                </div>
                            </div>
                            <div class="uk-width-1-6@m">
                                <div class="uk-card uk-card-primary uk-card-small">
                                    <h3 class="uk-card-title">Search Filters</h3>
                                    <div class="cardBody">
                                        <!-- <p>
                                                                                <span v-if="filters.years.length > 0" v-for="(fy, index) in filters.years" :key="fy+index"> {{ fy }} <b v-if="filters.years.length > 1 && index+1 < filters.years.length">|</b> </span><br v-if="filters.years.length > 0" />
                                                                                <span v-if="filters.quarters.length > 0" v-for="(fq, index) in filters.quarters" :key="fq+index"> {{ fq }} <b v-if="filters.quarters.length > 1 && index+1 < filters.quarters.length">|</b> </span><br v-if="filters.quarters.length > 0"/>
                                                                                <span v-if="filters.months.length > 0" v-for="(fm, index) in filters.months" :key="fm+index"> {{ fm }} <b v-if="filters.months.length > 1 && index+1 < filters.months.length">|</b> </span><br v-if="filters.months.length > 0"/>
                                                                                <span v-if="filters.codes.length > 0" v-for="(fc, index) in filters.codes" :key="fc+index"> {{ fc }} <b v-if="filters.codes.length > 1 && index+1 < filters.codes.length">|</b> </span><br v-if="filters.codes.length > 0"/>
                                                                                <span v-if="filters.reps.length > 0" v-for="(fr, index) in filters.reps" :key="fr+index"> {{ fr }} <b v-if="filters.reps.length > 1 && index+1 < filters.reps.length">|</b> </span><br v-if="filters.reps.length > 0"/>
                                                                                <span v-if="filters.provinces.length > 0" v-for="(fpr, index) in filters.provinces" :key="fpr+index"> {{ fpr }} <b v-if="filters.provinces.length > 1 && index+1 < filters.provinces.length">|</b> </span><br v-if="filters.provinces.length > 0"/>
                                                                                <span v-if="filters.merchant_groups.length > 0" v-for="(fmg, index) in filters.merchant_groups" :key="fmg+index"> {{ fmg }} <b v-if="filters.merchant_groups.length > 1 && index+1 < filters.merchant_groups.length">|</b> </span><br v-if="filters.merchant_groups.length > 0" />
                                                                                <span v-if="filters.merchants.length > 0" v-for="(fm, index) in filters.merchants" :key="fm+index"> {{ fm }} <b v-if="filters.merchants.length > 1 && index+1 < filters.merchants.length">|</b> </span><br v-if="filters.merchants.length > 0"/>
                                                                                <span v-if="filters.wine_farms.length > 0" v-for="(fw, index) in filters.wine_farms" :key="fw+index"> {{ fw }} <b v-if="filters.wine_farms.length > 1 && index+1 < filters.wine_farms.length">|</b> </span><br v-if="filters.wine_farms.length > 0"/>
                                                                                <span v-if="filters.products.length > 0" v-for="(fp, index) in filters.products" :key="fp+index"> {{ fp }} <b v-if="filters.products.length > 1 && index+1 < filters.products.length">|</b> </span><br v-if="filters.products.length > 0"/>
                                                                                <span v-if="filters.types.length > 0" v-for="(ft, index) in filters.types" :key="ft+index"> {{ ft }} <b v-if="filters.types.length > 1 && index+1 < filters.types.length">|</b> </span><br v-if="filters.types.length > 0"/>
                                                                            </p> -->
                                        <!-- <div class="uk-margin" uk-margin> -->
                                        <center>
                                            <button class="uk-button uk-button-default" @click="getGraphData()">Apply</button>
                                            <button class="uk-button uk-button-default" @click="clearFilters()">Clear</button>
                                        </center>
                                        <!-- </div> -->
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
                    <div class="uk-width-5-6@m">
                        <div class="uk-card uk-card-default uk-card-small echarts">
                            <chart :option="option" :loading="loading" @ready="onReady" @click="onClick" id="chart1"/>
                        </div>
                    </div>
                    <div class="uk-width-1-6@m">
                        <div class="uk-grid-match uk-grid-small uk-text-center" uk-grid>
                            <div class="uk-width-1-1@m">
                                <div>
                                    <button class="uk-button uk-button-default" @click="getGraphData()">Apply</button>
                                    <button class="uk-button uk-button-default" @click="clearFilters()">Clear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-1-4@m">
                        <div class="uk-card uk-card-default uk-card-small">
                            <h3 class="uk-card-title">Bottom 5 Merchants</h3>
                            <li v-for="(bM, index) in bottom5_merchants" :key="index">{{bM.name}} {{bM.value | toCurrency}}</li>
                        </div>
                    </div>
                    <div class="uk-width-1-4@m">
                        <div class="uk-card uk-card-default uk-card-small">
                            <h3 class="uk-card-title">Top 5 Merchants</h3>
                            <li v-for="(tM, index) in top5_merchants" :key="index">{{tM.name}} {{tM.value | toCurrency}}</li>
                        </div>
                    </div>
                    <div class="uk-width-1-4@m">
                        <div class="uk-card uk-card-default uk-card-small">
                            <h3 class="uk-card-title">Bottom 5 Products</h3>
                            <li v-for="(bP, index) in bottom5_products" :key="index">{{bP.name}} {{bP.value | toCurrency}}</li>
                        </div>
                    </div>
                    <div class="uk-width-1-4@m">
                        <div class="uk-card uk-card-default uk-card-small">
                            <h3 class="uk-card-title">Top 5 Products</h3>
                            <li v-for="(tP, index) in top5_products" :key="index">{{tP.name}} {{tP.value | toCurrency}}</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
        <div class="uk-grid-small" uk-grid>
            <div class="uk-width-1-3@m">
                <chart style="height: 400px; width: 100%;" :option="option2" :loading="loading" @ready="onReady" @click="onClick" id="chart2"/>
            </div>
            <div class="uk-width-1-3@m">
                <chart style="height: 400px; width: 100%;" :option="option3" :loading="loading" @ready="onReady" @click="onClick" id="chart3"/>
            </div>
            <div class="uk-width-1-3@m">
                <chart style="height: 400px; width: 100%;" :option="option4" :loading="loading" @ready="onReady" @click="onClick" id="chart4"/>
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
                filters: {
                    years: [],
                    quarters: [],
                    months: [],
                    codes: [],
                    merchant_groups: [],
                    merchants: [],
                    wine_farms: [],
                    provinces: [],
                    products: [],
                    types: [],
                    reps: []
                },
                year:"",
                month:"",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                bottom5_merchants: [],
                bottom5_products: [],
                top5_merchants: [],
                top5_products: [],
                type_names: [],
                provinces_names: [],
                code_names: [],
                max1:0,
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
                        filterParams:{
                            filterOptions:['contains'],
                            textCustomComparator: function  (filter, value, filterText) {
                                var filterTextLoweCase = filterText.toLowerCase();
                                var valueLowerCase = value.toString().toLowerCase();
                                var aliases={
                                    wc:'western cape',
                                    gp:'gauteng',
                                    fs:'free stare',
                                    ec:'eastern cape',
                                    kzn:'kwazulu natal'
                                };

                                function contains (target, lookingFor){
                                    if (target === null) return false;
                                    return target.indexOf(lookingFor) >= 0
                                }

                                var literalMatch = contains(valueLowerCase, filterTextLoweCase);
                                return literalMatch || contains(valueLowerCase, aliases[filterTextLoweCase]);
                            },
                            debounceMs:2000
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
                        field: "group_name",
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
                        filterParams:{
                            filterOptions:['contains'],
                            textCustomComparator: function  (filter, value, filterText) {
                                var filterTextLoweCase = filterText.toLowerCase();
                                var valueLowerCase = value.toString().toLowerCase();
                                var aliases={};

                                function contains (target, lookingFor){
                                    if (target === null) return false;
                                    return target.indexOf(lookingFor) >= 0
                                }

                                var literalMatch = contains(valueLowerCase, filterTextLoweCase);
                                return literalMatch || contains(valueLowerCase, aliases[filterTextLoweCase]);
                            },
                            debounceMs:2000
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
            checkAuthState() {
                let ls = JSON.parse(localStorage.getItem("State"));
                console.log(ls);
                if (!ls) {
                    this.$router.push("/login");
                } else {
                    this.$store.replaceState(ls);
                }
            },
            openGroup(params) {
                console.log(params);
                this.$router.push("/group/" + params.data.merchant_group_id);
            },
            openMerchant(params) {
                console.log(params);
                this.$router.push("/merchant/" + params.data.merchant_id);
            },
            openRep(params) {
                console.log(params);
                this.$router.push("/user/" + params.data.profile_id);
            },
            openFarm(params) {
                console.log(params);
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
            updateYears(index, year) {
                this.years[index].selected = !this.years[index].selected;
                if (this.years[index].selected) {
                    this.filters.years.indexOf(year) === -1 ? this.filters.years.push(year) : console.log("This item already exists");
                    // this.filters.years.push(year);
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
                    // this.filters.months.push(month);
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
                    this.filters.provinces.push(province);
                } else {
                    for (var i = 0; i < this.filters.provinces.length; i++) {
                        if (this.filters.provinces[i] === province) {
                            this.filters.provinces.splice(i, 1);
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
                    this.filters.merchants.push(merchant);
                } else {
                    for (var i = 0; i < this.filters.merchants.length; i++) {
                        if (this.filters.merchants[i] === merchant) {
                            this.filters.merchants.splice(i, 1);
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
                        // Add entity to session in vuex
                        
                        // console.log('this.year: ', this.year);
                        // this.filters = response.data.data;
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
                        if(this.year != ""){
                            for(var i = 0; i < this.years.length; i++){
                                // console.log('Response1: ', this.years[i].transaction_year);
                                if(this.years[i].transaction_year == this.year){
                                    // console.log('Match: ', this.years[i].transaction_year);
                                    this.updateYears(i, this.years[i].transaction_year);
                                }
                            }
                        }
                        console.log(this.month);
                        if(this.month != ""){
                            console.log("this.month");
                            console.log(this.months);
                            for(var i = 0; i < this.months.length; i++){
                                // console.log('Response1: ', this.months[i].month);
                                if(this.months[i].month == this.month){
                                    console.log("this.month");
                                    // console.log('Match: ', this.months[i].month);
                                    this.updateMonths(i, this.months[i].month);
                                }
                            }
                        }
                        this.getGraphData();
                        
                    })
                    .catch(error => {
                        console.log("Error: ", error.response);
                    });
            },
            getGraphData() {
                // this.o = {};
                this.chart.clear();
                this.chart.setOption({}, true);
                this.chart2.clear();
                this.chart2.setOption({}, true);
                this.chart3.clear();
                this.chart3.setOption({}, true);
                this.chart4.clear();
                this.chart4.setOption({}, true);
                // console.log("O: ", this.o)
                // allways start with the current year as default
                var currentyear = new Date().getFullYear();
                currentyear = currentyear.toString();
                var cm = new Date();
                this.month = this.monthNames[cm.getMonth()];
                // console.log(currentyear);
                let request = {
                    filters: this.filters
                };
                if(request.filters.years.length == 0){
                    request.filters.years.push(currentyear);
                    this.year = currentyear;
                    for(var i = 0; i < this.years.length; i++){
                        // console.log('Response1: ', this.years[i].transaction_year);
                        if(this.years[i].transaction_year == this.year){
                            // console.log('Match: ', this.years[i].transaction_year);
                            this.updateYears(i, this.years[i].transaction_year);
                        }
                    }
                }
                if(request.filters.months.length == 0){
                    request.filters.months.push(currentmonth);
                    this.month = currentmonth;
                    for(var i = 0; i < this.months.length; i++){
                        // console.log('Response1: ', this.months[i].month);
                        if(this.months[i].month == this.month){
                            // console.log('Match: ', this.months[i].month);
                            this.updateMonths(i, this.months[i].month);
                        }
                    }
                }
                console.log("Request: " + JSON.stringify(request));
                axios.post(this.$store.state.api_url + 'transactions_filtered', request) //transactions_filtered
                    .then(response => {
                        console.log('Response: ', response);
                        this.graph_months = response.data.data.graph_months;
                        this.gridOptions.api.setColumnDefs(this.columnDefs);
                        this.gridOptions.api.setRowData(response.data.data.records);
                        this.bottom5_merchants = response.data.data.bottom5_merchants;
                        this.bottom5_products = response.data.data.bottom5_products;
                        this.top5_merchants = response.data.data.top5_merchants;
                        this.top5_products = response.data.data.top5_products;
                        this.legend = response.data.data.legend;
                        // this.max1 = Math.max(response.data.data.years[0].sale);
                        
                        var o= {
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
                                    name: 'Sales/Budget',
                                    min: 0,
                                    max: 1500000,
                                    interval: 250000,
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
                                    max: 10000000,
                                    interval: 2500000,
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
                        for(var i = 0; i < response.data.data.types.length; i++){
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
                        for(var i = 0; i < response.data.data.provinces.length; i++){
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
                        for(var i = 0; i < response.data.data.code.length; i++){
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
                        var j = 0;
                        for(var i = 0; i < response.data.data.years.length; i++){
                            console.log(o.series.length);
                            o.series.push({
                                    name: this.legend[i],
                                    type: 'bar',
                                    yAxisIndex: 0,
                                    data: response.data.data.years[i].budget // budget [] -> for the year and months selected
                                },
                            )
                            j++;
                        }
                        for(var i = 0; i < response.data.data.years.length; i++){
                            console.log(o.series.length);
                            o.series.push({
                                    name: this.legend[j],
                                    type: 'bar',
                                    yAxisIndex: 0,
                                    data: response.data.data.years[i].sale // sale [] -> for the year and months selected
                                },
                            )
                            j++;
                        }
                        for(var i = 0; i < response.data.data.years.length; i++){
                            console.log(o.series.length);
                            o.series.push({
                                    name: this.legend[j],
                                    type: 'line',
                                    yAxisIndex: 1,
                                    data: response.data.data.years[i].budget_accum // buget_accum [] -> for the year and months selected
                                },
                            )
                            j++;
                        }
                        for(var i = 0; i < response.data.data.years.length; i++){
                            console.log(o.series.length);
                            o.series.push({
                                    name: this.legend[j],
                                    type: 'line',
                                    yAxisIndex: 1,
                                    data: response.data.data.years[i].sale_accum // sale_accum [] -> for the year and months selected
                                },
                            )
                            j++;
                        }
                        console.log("O: ", o)
                        this.chart.setOption(o, true);
                    })
                    .catch(error => {
                        console.log(error.response);
                        if (error.response.status == 400) {
                            console.log(error.response);
                        }
                        if (error.response.status == 401) {
                            console.log(error.response);
                        }
                        if (error.response.status == 403) {
                            console.log(error.response);
                            new Error();
                        }
                        if (error.response.status == 404) {
                            console.log(error.response);
                        }
                        if (error.response.status == 500) {
                            console.log(error.response);
                        }
                    });
            },
            clearFilters() {

                this.filters = {
                    years: [],
                    quarters: [],
                    months: [],
                    codes: [],
                    merchant_groups: [],
                    merchants: [],
                    wine_farms: [],
                    provinces: [],
                    products: [],
                    types: [],
                    reps: []
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
            this.getFilterData();
            var currentyear = new Date().getFullYear();
            var cm = new Date();
            this.month = this.monthNames[cm.getMonth()];
            this.year = currentyear.toString();
            // this.month = currentmonth.toString();
            // console.log(this.month);
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
</style>


// List of all the following
// transaction years
// reps
// codes
// provinces
// merchant groups
// merchants
// wine_farms
// products
// type
// filter on all transactions with above
// top 5 merchants
// top 5 products
//

// {
//     graph_months:['April', 'May'],
//     years:[
//         {year:"2015", budget:[2100, 3200], sale:[2100, 3299], sale_accum:[2100, 5399], buget_accum:[2100, 5300]}
//     ],
//     legend:["budget2015","sale2015","buget_accum2015","sale_accum2025"],
//     types: [{name:"Whit wine", value: 1231231}, {name:"Red wine", value: 1231231}],
//     provinces: [{name:"Natal", value: 11232},{name:"Gauteng", value: 6546546}],
//     code: [{name:"code1", value: 11232},{name:"code2", value: 6546546}],
//     top5_products: [{name:"wine1", value: 11232}],
//     bottom5_products: [{name:"wine9", value: 2}],
//     top5_merchants: [{name:"pnp", value: 11232}],
//     bottom5_merchants: [{name:"spar", value: 1}],
//     records:[{all the transaction detail}]
// }