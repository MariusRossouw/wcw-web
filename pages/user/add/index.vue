<template>
    <div class="container">
        <div class="uk-container uk-container-large uk-padding-remove">
            <div class="uk-card uk-card-default card_create">
                <div class="uk-card-body">
                    <div uk-grid>
                        <div class="uk-form-stacked">
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">First Name</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="First Name" v-model="first_name">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Last Name</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Last Name" v-model="last_name">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Email</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Email" v-model="email">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Mobile Number</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Mobile Number" v-model="mobile_no">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Password</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="password" placeholder="Password" v-model="password">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Profile Type</label>
                                <div class="uk-form-controls">
                                    <select class="uk-select" v-model="type">
                                        <option v-for="type in type_list" :value="type.id" :key="type.id">
                                        {{type.id}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="uk-card-body" style="width: 100%; height: 75vh;" v-if="type == 'Manager'">
                    <div style="width: 100%; height: 70vh;">
                        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptions" :columnDefs="columnDefs" :rowData="rowData">
                        </ag-grid-vue>
                    </div>
                </div>
                <div class="uk-margin" uk-margin style="margin-left:40px; padding-bottom:40px">
                    <button class="uk-button uk-button-default" @click="createProfile()">Submit</button>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
    import axios from 'axios';
    import { AgGridVue } from "ag-grid-vue";
    export default {
        components: {
            "ag-grid-vue": AgGridVue,
            "axios": axios
        },
    
        data() {
            return {
                columnDefs: [
                    {headerName: 'Select', 
                        field: 'selected', 
                        editable:true,
                        cellRenderer: this.checkboxCellRenderer,
                        width:90
                    },
                    {headerName: "First Name", field: "first_name", minWidth: 90, headerClass: 'resizable-header'},
                    {headerName: "Last Name", field: "last_name", minWidth: 110, headerClass: 'resizable-header'},
                    {headerName: "Email", field: "email", minWidth: 200, headerClass: 'resizable-header'},
                    {headerName: "Mobile", minWidth: 200, valueGetter: this.mobileValueGetter, headerClass: 'resizable-header'},
                    {headerName: "Type", field: "type", minWidth: 100, headerClass: 'resizable-header'},
                    {headerName: "Rep Code", field: "rep_code", minWidth: 100, headerClass: 'resizable-header'},
                    {headerName: "Gender", field: "gender", minWidth: 100, headerClass: 'resizable-header'}
                ],
                rowData:[],
                show_results_filter_selected: 0,
                search_text: '',
                gridOptions: {
                    onRowClicked: this.RowClickEventHandler,
                    onRowDoubleClicked: this.openProfile,
                    rowSelection: 'single',
                    suppressPropertyNamesCheck: true,
                    enableColResize: true,
                    onGridReady: function(params) {
                        params.api.sizeColumnsToFit();
                    }
                },
                first_name: "",
                last_name: "",
                email: "",
                mobile_no: "",
                password: "",
                type: "",
                type_list: [
                    {id:"Admin"},
                    {id:"Manager"},
                    {id:"Rep"}
                ]
            }
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
            checkboxCellRenderer (params){
                if(params.data.selected){
                    return '<h4 style="color:green;">☑</h4>';
                    // return'<input class="uk-checkbox" type="checkbox" v-model="is_enabled" :checked="is_enabled">';
                } else {
                    return '<h4 style="color:red;">☒</h4>';
                }
            },
            RowClickEventHandler(event){
                // console.log(event);
                this.rowData[event.rowIndex].selected = !this.rowData[event.rowIndex].selected;
                console.log(this.rowData);
                this.gridOptions.api.setRowData(this.rowData);
            },
            getReps() {
                let request = {};
                console.log(request);
                axios.post(this.$store.state.api_url + '/user_profile_rep_list', request)
                .then(response => {
                    console.log(response);
                    this.gridOptions.api.setColumnDefs(this.columnDefs);
                    this.gridOptions.api.setRowData(response.data.data.records);
                    this.rowData = response.data.data.records;
                })
                .catch(error => {
                    console.log(error.response);
                });
            },
            createProfile() {
                let request = {
                    email: this.email,
                    mobile_no_exl: this.mobile_no,
                    password: this.password,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    type: this.type,
                    reps: this.rowData,
                };
                console.log("Request: ", request);
                axios.post(this.$store.state.api_url + '/user_profile_add', request)
                    .then(response => {
                        // Add entity to session in vuex
                        console.log('Response: ', response);
                        this.$router.push("/user/" + response.data.data.profile_id);
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
            }
        },
        watch: {
            type() {
                if(this.type != "" && this.type == "Manager"){
                    this.getReps();
                }
            }
        },
        beforeMount() {
            this.checkAuthState();
        }
    }
</script>

<style>
    
</style>

