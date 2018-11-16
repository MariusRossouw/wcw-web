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
                                    <input class="uk-input" type="text" placeholder="First Name" v-model="profile.first_name">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Last Name</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Last Name" v-model="profile.last_name">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Email</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Email" v-model="profile.email">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Mobile Number</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="text" placeholder="Mobile Number" v-model="profile.mobile_no_exl">
                                </div>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Password</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" type="password" placeholder="Password" v-model="profile.password">
                                </div>
                            </div>
                            <div class="uk-margin" v-if="session_profile == 'Admin'">
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
                <div class="uk-card-body" style="width: 100%; height: 75vh;" v-if="type == 'Farm'">
                    <div style="width: 100%; height: 70vh;">
                        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptions2" :columnDefs="columnDefs2" :rowData="rowData2">
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
                gridOptions: {
                    onRowClicked: this.RowClickEventHandler,
                    rowSelection: 'single',
                    suppressPropertyNamesCheck: true,
                    enableColResize: true,
                    onGridReady: function(params) {
                        params.api.sizeColumnsToFit();
                    }
                },
                columnDefs2: [
                    {headerName: 'Select',
                        field: 'selected',
                        editable:true,
                        cellRenderer: this.checkboxCellRenderer,
                        width:90
                    },
                    {headerName: "Farm Name", field: "farm_name", minWidth: 90, headerClass: 'resizable-header'}
                ],
                rowData2:[],
                gridOptions2: {
                    onRowClicked: this.RowClickEventHandler,
                    rowSelection: 'single',
                    suppressPropertyNamesCheck: true,
                    enableColResize: true,
                    onGridReady: function(params) {
                        params.api.sizeColumnsToFit();
                    }
                },
                profile: {
                    first_name: "",
                    last_name: "",
                    email: "",
                    mobile_no: "",
                    password: "",
                    type: "",
                },
                type_list: [
                    {id:"Admin"},
                    {id:"Manager"},
                    {id:"Rep"},
                    {id:"Farm"}
                ],
                session_profile: this.$store.state.session.entity.type,
                type:""
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
            getProfile() {
                let request = {
                    profile_id: this.$route.params.id
                };
                console.log(request);
                axios.post(this.$store.state.api_url + '/user_profile', request)
                .then(response => {
                    console.log(response);
                    this.profile = response.data.data;
                    this.type = this.profile.type;
                    // this.profile_type = this.type;
                    if(this.type == "Manager"){
                        this.getReps();
                    }
                })
                .catch(error => {
                    console.log(error.response);
                });
            },
            getReps() {
                let request = {
                    manager_id: this.$route.params.id
                };
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
            getFarms() {
                let request = {
                    manager_id: this.$route.params.id
                };
                console.log(request);
                axios.post(this.$store.state.api_url + '/user_profile_wine_farm_list', request)
                .then(response => {
                    console.log(response);
                    this.gridOptions2.api.setColumnDefs(this.columnDefs2);
                    this.gridOptions2.api.setRowData(response.data.data.records);
                    this.rowData2 = response.data.data.records;
                })
                .catch(error => {
                    console.log(error.response);
                });
            },
            createProfile() {
                let request = {
                    profile_id: this.$route.params.id,
                    update:{
                        email: this.profile.email,
                        mobile_no_exl: this.profile.mobile_no,
                        password: this.profile.password,
                        first_name: this.profile.first_name,
                        last_name: this.profile.last_name,
                        type: this.type,
                    }
                };
                if(this.type == "Manager"){
                    request.reps = this.rowData
                }
                if(this.type == "Farm"){
                    request.farms = this.rowData
                }
                console.log("Request: ", request);
                axios.post(this.$store.state.api_url + '/user_profile_update', request)
                    .then(response => {
                        // Add entity to session in vuex
                        console.log('Response: ', response);
                        this.$router.push("/user/" + this.$route.params.id);
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
            }
        },
        watch: {
            type() {
                if(this.type != "" && this.type == "Manager"){
                    this.profile.type = this.type;
                    this.getReps();
                }
                if(this.type != "" && this.type == "Farm"){
                    this.profile.type = this.type;
                    this.getFarms();
                }
            }
        },
        beforeMount() {
            this.checkAuthState();
        },
        mounted() {
            this.getProfile();
        }
    }
</script>

<style>
</style>

