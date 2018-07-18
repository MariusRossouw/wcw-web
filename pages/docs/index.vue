<template>
    <div>
         <div class="uk-container-full">
        <div uk-grid>
            <div class="uk-width-1-5" style="overflow-y:scroll; height: 100vh; padding-bottom: 200px;">
                <div v-for="(section, index) in sections" :key="index">
                    <div style="margin-left:50px">
                        <ul uk-accordion="multiple: true">
                            <li>
                                <a class="uk-accordion-title" href="#">{{section.sectionname}}</a>
                                <div class="uk-accordion-content">
                                    <li v-for="(subSection, index) in section.subSections" :key="index" style="margin-left:30px;">
                                        <a @click="subSectionButton(subSection, index)" href="#">{{subSection.subsectionname}}</a>
                                    </li>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="uk-width-2-5" style="overflow-y:scroll; height: 100vh; padding-bottom: 200px;">
                <div v-if="theSubSection.subsectionname">
                    <h3>{{theSubSection.subsectionname}}</h3>
                    <h4>Endpoint: {{theSubSection.endpoint}}</h4>
                    <p>Description: {{theSubSection.description}}</p>
                    <p>Requirements: {{theSubSection.requirements}}</p>
                    <h4>Method: {{theSubSection.method}}</h4>
                    <p>Required Fields</p>
                    <li v-for="(rf, index) in theSubSection.requiredFields" :key="'rf'+index">{{rf.name}} - format: {{rf.format}}</li>
                    <div v-for="(reqres,index) in theSubSection.reqres" :key="index">
                        <ul uk-accordion="multiple: true">
                            <li>
                                <a class="uk-accordion-title" href="#">{{reqres.rescode}}</a>
                                <div class="uk-accordion-content">
                                    <h5>Request Body</h5>
                                    <p style="text-align: right; display: inline-block; width: 100%; cursor: pointer" @click="openInstance(reqres, index)"> Try me -> </p>
                                    <pre>
                                        <code>{{reqres.requestbody}}</code>
                                    </pre>
                                    <h5>Response</h5>
                                    <pre>
                                        <code>{{reqres.responsebody}}</code>
                                    </pre>
                                    <h5>Headers</h5>
                                    <pre>
                                        <code>{{reqres.headers}}</code>
                                    </pre>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="uk-width-2-5" style="overflow-y:scroll; height: 100vh; padding-bottom: 200px;">
                <div v-if="theSubSection.subsectionname">
                    <h5>Try it</h5>
                    <h5>Request</h5>
                    <textarea v-model="requestTest" cols="100" rows="10">
                    </textarea>
                    <button @click="testRequest()">Submit</button>
                    <h5>Response</h5>
                    <pre>
                        <code>{{responseTest}}</code>
                    </pre>

                    <button @click="saveReqres(requestTest,responseTest)" v-if="requestTest && responseTest">Save</button>
                    <button @click="updateReqres()" v-if="requestTest && responseTest">Upldate</button>
                </div>
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
        head() {
            return {
                title: 'API Document'
            };
        },
        data() {
            return {
                theSubSection: {},
                requestTest: "",
                responseTest: "",
                sections: [],
                api_doc_endpoint_id: "",
                requestBody: "",
                responseBody: "",
                resCode: ""
            }
        },
        methods: {
            docsList() {
                let request = {
                    projectName: "StratProp"
                };
                console.log("Request: ", request);
                axios.post(this.$store.state.api_url + "/api_doc_req_res_list", request)
                    .then(response => {
                        console.log('Response: ', response);
                        if(response.data.http_code == 200){
                            this.sections = response.data.data.records;
                            for(var i = 0; i < this.sections.length; i++){
                                for(var j = 0; j < this.sections[i].subSections.length; j++){
                                    this.api_doc_endpoint_id = this.sections[i].subSections[j].api_doc_endpoint_id;
                                    console.log("this.api_doc_endpoint_id",this.api_doc_endpoint_id);
                                    for(var k = 0; k < this.sections[i].subSections[j].reqres.length; k++){
                                        console.log(this.sections[i].subSections[j].reqres);
                                        this.sections[i].subSections[j].reqres[k].resCode = this.sections[i].subSections[j].reqres[k].responseBody.http_code;
                                        console.log(this.sections[i].subSections[j].reqres[k].resCode);
                                        this.sections[i].subSections[j].reqres[k].headers = JSON.stringify(this.sections[i].subSections[j].reqres[k].headers, null, 4);
                                        this.sections[i].subSections[j].reqres[k].requestbody = JSON.stringify(this.sections[i].subSections[j].reqres[k].requestbody, null, 4);
                                        this.sections[i].subSections[j].reqres[k].responsebody = JSON.stringify(this.sections[i].subSections[j].reqres[k].responsebody, null, 4);
                                    }
                                }
                            }
                        } else {
                            this.sections = response.data.data.records;
                            for(var i = 0; i < this.sections.length; i++){
                                for(var j = 0; j < this.sections[i].subSections.length; j++){
                                    for(var k = 0; k < this.sections[i].subSections[j].reqres.length; k++){
                                        this.sections[i].subSections[j].reqres[k].headers = JSON.stringify(this.sections[i].subSections[j].reqres[k].headers, null, 4);
                                        this.sections[i].subSections[j].reqres[k].requestbody = JSON.stringify(this.sections[i].subSections[j].reqres[k].requestbody, null, 4);
                                        this.sections[i].subSections[j].reqres[k].responsebody = JSON.stringify(this.sections[i].subSections[j].reqres[k].responsebody, null, 4);
                                    }
                                }
                            }
                        }
                    })
                    .catch(error => {
                        console.log(error.response);
                        this.docs = error;
                    });
            },
            testRequest() {
                let request = JSON.parse(this.requestTest);
                console.log("Request: ", request);
                axios.post(this.$store.state.api_url + this.theSubSection.endpoint, request)
                    .then(response => {
                        console.log('Response: ', response);
                        if(response.data.http_code == 200){
                            this.responseTest = JSON.stringify(response.data, null, 4);
                        } else {
                            this.responseTest = JSON.stringify(response.data, null, 4);
                        }
                    })
                    .catch(error => {
                        console.log(error.response);
                        this.responseTest = JSON.stringify(error.response.data, null, 4);
                    });
            },
            openInstance(reqres, index){
                this.requestTest = JSON.stringify(reqres.requestbody, null, 4);
            },
            subSectionButton(subSection, index){
                console.log(subSection);
                this.theSubSection = subSection;
                this.requestTest = JSON.stringify(subSection.reqres[0].requestbody, null, 4);
            },
            saveReqres(requestTest,responseTest){
                    this.requestBody = JSON.parse(requestTest);
                    this.responseBody = JSON.parse(responseTest);
                    this.resCode = this.responseBody.http_code;
                
                let request = {
                    api_doc_endpoint_id: this.api_doc_endpoint_id,
                    requestBody: this.requestBody,
                    responseBody: this.responseBody,
                    resCode: this.resCode
                };
                
                
                console.log("Request: ", request);
                axios.post(this.$store.state.api_url + 'api_doc_req_res_add', request)
                    .then(response => {
                        console.log('Response: ', response);
                        this.docsList();
                    })
                    .catch(error => {
                        console.log(error.response);
                        this.reqRes[index].responseBody = JSON.stringify(error.response.data, null, 4);
                    });
            }
        },
        beforeMount() {

        },
        mounted() {
            this.docsList();
        }
}
</script>

<style>

</style>


