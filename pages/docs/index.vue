<template>
    <div class="uk-container">
        <div>
            <h1>WCWines-API</h1>
            <!-- <p>Choose the envirnoment</p> -->
            <p>API URL: http://wcwines-api-stage.strathost.co.za</p>
        </div>
        <ul uk-accordion="multiple: true">
            <li>
                <a class="uk-accordion-title" href="#">Authentication / Sessions</a>
                <div class="uk-accordion-content">
                    <div style="margin-left:50px">
                        <ul uk-accordion="multiple: true">
                            <li>
                                <a class="uk-accordion-title" href="#">POST /login</a>
                                <div class="uk-accordion-content">
                                    <div>
                                        <h3>Login</h3>
                                        <h4>/login</h4>
                                        <p>This is to login to wcwines-api</p>
                                        <h4>Method POST</h4>
                                        <div style="margin-left:50px">
                                            <ul uk-accordion="multiple: true">
                                                <li>
                                                    <a class="uk-accordion-title" href="#">Request</a>
                                                    <div class="uk-accordion-content">
                                                        <h5>Request Body *Required</h5>
                                                        <pre>
                                                            <code>{{loginRequest}}</code>
                                                        </pre>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div style="margin-left:50px">
                                            <ul uk-accordion="multiple: true">
                                                <li>
                                                    <a class="uk-accordion-title" href="#">Response Success</a>
                                                    <div class="uk-accordion-content">
                                                        <h5>Response JSON Success</h5>
                                                        <pre>
                                                            <code>{{loginResponse}}</code>
                                                        </pre>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div style="margin-left:50px">
                                            <ul uk-accordion="multiple: true">
                                                <li>
                                                    <a class="uk-accordion-title" href="#">Response Error</a>
                                                    <div class="uk-accordion-content">
                                                        <h5>Response JSON Error</h5>
                                                        <pre>
                                                            <code>{{loginResponseError}}</code>
                                                        </pre>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div style="margin-left:50px">
                                            <ul uk-accordion="multiple: true">
                                                <li>
                                                    <a class="uk-accordion-title" href="#">Try it yourself</a>
                                                    <div class="uk-accordion-content">
                                                        <h5>Try it</h5>
                                                        <h5>Request</h5>
                                                        <textarea v-model="loginRequestTest" cols="100" rows="10">
                                                        </textarea>
                                                        <button @click="testLogin()">Submit</button>
                                                        <h5>Response</h5>
                                                        <pre>
                                                            <code>{{loginResponseTest}}</code>
                                                        </pre>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
        <ul uk-accordion="multiple: true">
            <li>
                <a class="uk-accordion-title" href="#">Distributors</a>
                <div class="uk-accordion-content">
                    <div style="margin-left:50px">
                        <ul uk-accordion="multiple: true">
                            <li>
                                <a class="uk-accordion-title" href="#">POST /distributors_list</a>
                                <div class="uk-accordion-content">
                                    <div>
                                        <h3>Distributors List</h3>
                                        <h4>/distributors_list</h4>
                                        <p>Get a list of all the Distributors</p>
                                        <h4>Method POST</h4>
                                        <h5>Request Body</h5>
                                        <pre>
                                            <code>{{  }}</code>
                                        </pre>
                                        <h5>Response JSON Success</h5>
                                        <pre>
                                            <code>{{  }}</code>
                                        </pre>
                                        <h5>Response JSON Error</h5>
                                        <pre>
                                            <code>{{  }}</code>
                                        </pre>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">POST /distributor</a>
                                <div class="uk-accordion-content">
                                    <div>
                                        <h3>Distributor</h3>
                                        <h4>/distributor</h4>
                                        <p>Get a single Distributor</p>
                                        <h4>Method POST</h4>
                                        <h5>Request Body * Required</h5>
                                        <pre>
                                            <code>{{  }}</code>
                                        </pre>
                                        <h5>Response JSON Success</h5>
                                        <pre>
                                            <code>{{  }}</code>
                                        </pre>
                                        <h5>Response JSON Error</h5>
                                        <pre>
                                            <code>{{  }}</code>
                                        </pre>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
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
        head() {
            return {
                title: 'API Document'
            };
        },
        data() {
            return {
                sections: [
                    {
                        sectionsName: "Authentication / Sessions",
                        subSections: [
                            {
                                subSectionsName: "Login",
                                method: "POST",
                                endpoint: "/login",
                                description: "This is to login to wcwines-api",
                                requestBodyRequired: true,
                                requestBody: [
                                    {

                                    }
                                ],
                                requestBodyTest: {

                                },
                                responseBodyTest: {

                                },
                                responseBodySuccess: [
                                    {

                                    }
                                ],
                                responseBodyError: [
                                    {
                                        
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        sectionsName: "Distributors",
                        subSections: [
                            {}
                        ]
                    },
                    {
                        sectionsName: "Farms",
                        subSections: [
                            {}
                        ]
                    },
                    {
                        sectionsName: "Merchants",
                        subSections: [
                            {}
                        ]
                    },
                    {
                        sectionsName: "Products",
                        subSections: [
                            {}
                        ]
                    },
                    {
                        sectionsName: "Permissions",
                        subSections: [
                            {}
                        ]
                    },
                    {
                        sectionsName: "Transactions",
                        subSections: [
                            {}
                        ]
                    },
                ],
                loginRequest: {
                    email: 'marius@stratech.co.za',
                    password: 'admin1234'
                },
                loginRequestTest: {
                    email: 'marius@stratech.co.za',
                    password: 'admin1234'
                },
                loginResponseTest: {},
                loginResponse: {
                    "http_code":200,
                    "message":"",
                    "data":{
                        "province_id":null,
                        "gender":null,
                        "race":null,
                        "dob":null,
                        "first_name":"Marius",
                        "last_name":"Rossouw",
                        "title":null,
                        "business_name":null,
                        "name":"Marius Rossouw",
                        "password":"admin1234",
                        "password_unhashed":null,
                        "email":"marius@stratech.co.za",
                        "mobile_no_exl":"793327238",
                        "mobile_country_code":"27",
                        "id_number":null,
                        "address_line_1":null,
                        "address_line_2":null,
                        "address_line_3":null,
                        "address_line_4":null,
                        "jdata":null,
                        "status":null,
                        "rep_code":null,
                        "rep_name":null,
                        "create_time":"2018-07-09T08:10:51.395Z",
                        "update_time":"2018-07-09T08:10:51.395Z",
                        "verified":true,
                        "verified_time":null,
                        "address":{
                            "address_line_1":"",
                            "address_line_2":"",
                            "address_line_3":"",
                            "address_line_4":"",
                            "physical_province_id":0,
                            "province":""
                        }
                    },
                    "error_code":"",
                    "errors":[]
                },
                loginResponseError: {
                    "http_code":403,
                    "message":"Invalid Email/ Mobile Number or Password",
                    "data":{},
                    "error_code":"",
                    "errors":[]
                },
            }
        },
        methods: {
            testLogin() {
                let request = JSON.parse(this.loginRequestTest);
                console.log("Request: ", request);
                axios.post(this.$store.state.api_url + 'login', request)
                    .then(response => {
                        console.log('Response: ', response);
                        if(response.data.http_code == 200){
                            this.loginResponseTest = response.data.data;
                        } else {
                            this.loginResponseTest = response.data.data;
                        }
                    })
                    .catch(error => {
                        console.log(error.response);
                        this.loginResponseTest = error.response.data;
                    });
            },
            prepLoginRequestTest(){
                this.loginRequestTest = JSON.stringify(this.loginRequestTest, null, 4);
            }
        },
        beforeMount() {

        },
        mounted() {
            this.prepLoginRequestTest();
        }
}
</script>

<style>

</style>


