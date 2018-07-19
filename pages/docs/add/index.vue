<template>
    <div>
         <div class="uk-container-full">
        <div uk-grid>
            <div class="uk-width-1-5" style="overflow-y:scroll; height: 100vh; padding-bottom: 200px;">
            </div>
            <div class="uk-width-3-5" style="overflow-y:scroll; height: 100vh; padding-bottom: 200px;">
                <div>
                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Add Section" v-model="sectionName">
                    </div>
                    <button @click="addSection()">Add Section</button>
                    <div class="uk-margin">
                        <select class="uk-select" v-model="api_doc_section_id">
                            <option v-for="(section, index) in doc_section_list" :key="index" :value="section.api_doc_section_id">{{section.sectionname}}</option>
                        </select>
                    </div>
                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Endpoint Name" v-model="subSectionName">
                    </div>
                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Endpoint" v-model="endpoint">
                    </div>
                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Description" v-model="description">
                    </div>
                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Requirements" v-model="requirements">
                    </div>
                    <div class="uk-margin">
                        <select class="uk-select" v-model="method">
                            <option value="POST">POST</option>
                            <!-- <option value="GET">GET</option>
                            <option value="PUT">PUT</option>
                            <option value="DELETE">DELETE</option> -->
                        </select>
                    </div>
                    <li v-for="(rf, index) in requiredFields" :key="rf.name">{{rf.name}} - format: {{rf.format}}<button @click="deleteRequiredField(index)">Delete</button></li>
                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Required Field Name" v-model="name">
                    </div>
                    <div class="uk-margin">
                        <select class="uk-select" v-model="format">
                            <option value="ARRAY">ARRAY</option>
                            <option value="BOOLEAN">BOOLEAN</option>
                            <option value="FILE">FILE</option>
                            <option value="INTEGER">INTEGER</option>
                            <option value="OBJECT">OBJECT</option>
                            <option value="STRING">STRING</option>
                        </select>
                    </div>
                    <button @click="addRequiredField()">Add Required Field</button>
                    <div v-for="(rr, index) in reqRes" :key="rr.headers">
                        <h5>Headers</h5>
                        <textarea v-model="rr.headers" cols="100" rows="10">
                        </textarea>
                        <h5>Request</h5>
                        <textarea v-model="rr.requestBody" cols="100" rows="10">
                        </textarea>
                        <button @click="testRequest(rr.requestBody, index)">Submit</button>
                        <h5>Response</h5>
                        <pre>
                            <code>{{rr.responseBody}}</code>
                        </pre>
                        <button @click="removeReqResPair(index)">Remove</button>
                    </div>

                    <button @click="addReqResPair()">Add Another Req Res Pair</button>

                    <button @click="saveReqRes()">Save</button>
                </div>
            </div>
            <div class="uk-width-1-5" style="overflow-y:scroll; height: 100vh; padding-bottom: 200px;">
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    components: {
            "axios": axios
        },
        head() {
            return {
                title: 'API Document Add'
            };
        },
        data() {
            return {
                doc_section_list: [],
                subSection: {},
                reqRes: [
                    {
                        headers:"",
                        requestBody:"",
                        responseBody:{}
                    }
                ],
                sectionName: "",
                api_doc_section_id: "1",
                subSectionName: "",
                endpoint: "",
                description: "",
                requirements: "",
                method: "POST",
                requiredFields: [],
                name: "",
                format: "STRING",
            }
        },
        methods: {
            docsList() {
                let request = {
                    project: "StratProp"
                };
                console.log("Request: ", request);
                axios.post(this.$store.state.api_url + "/docsList", request)
                    .then(response => {
                        console.log('Response: ', response);
                        if(response.data.http_code == 200){
                            this.docs = response.data.data.records;
                        } else {
                            this.docs = response.data.data.records;
                        }
                    })
                    .catch(error => {
                        console.log(error.response);
                        this.docs = error.response.data;
                    });
            },
            testRequest(requestBody, index) {
                let request = JSON.parse(requestBody);
                console.log("Request: ", request);
                axios.post(this.$store.state.api_url + this.endpoint, request)
                    .then(response => {
                        console.log('Response: ', response);
                        if(response.data.http_code == 200){
                            this.reqRes[index].responseBody = JSON.stringify(response.data, null, 4);
                        } else {
                            this.reqRes[index].responseBody = JSON.stringify(response.data, null, 4);
                        }
                    })
                    .catch(error => {
                        console.log(error.response);
                        this.reqRes[index].responseBody = JSON.stringify(error.response.data, null, 4);
                    });
            },
            openInstance(reqRes, index){
                this.requestTest = JSON.stringify(reqRes.requestBody, null, 4);
            },
            subSectionButton(subSection, index){
                this.theSubSection = subSection;
                this.requestTest = JSON.stringify(subSection.reqRes[0].requestBody, null, 4);
            },
            addSection(){
                let request = {
                    sectionName: this.sectionName,
                    projectName: "StratProp",
                };
                console.log("Request: ", request);
                axios.post(this.$store.state.api_url + "/api_doc_section_add", request)
                    .then(response => {
                        console.log('Response: ', response);
                        this.secionList();
                    })
                    .catch(error => {
                        console.log(error.response);
                        this.docs = error.response.data;
                    });
            },
            secionList(){
                let request = {};
                console.log("Request: ", request);
                axios.post(this.$store.state.api_url + "/api_doc_section_list", request)
                    .then(response => {
                        console.log('Response: ', response);
                        this.doc_section_list = response.data.data.records;
                    })
                    .catch(error => {
                        console.log(error.response);
                        this.docs = error.response.data;
                    });
            },
            deleteRequiredField(index){
                this.requiredFields.splice(index,1);
            },
            addRequiredField(){
                this.requiredFields.push({name:this.name, format:this.format});
                this.name = "";
                this.format = "";
            },
            removeReqResPair(index){
                this.reqRes.splice(index,1);
            },
            addReqResPair(){
                this.reqRes.push({
                    headers:"",
                    requestBody:"",
                    responseBody:{}
                });
            },
            saveReqRes(){
                for(var i = 0; i < this.reqRes.length; i++){
                    this.reqRes[i].requestBody = JSON.parse(this.reqRes[i].requestBody);
                    this.reqRes[i].responseBody = JSON.parse(this.reqRes[i].responseBody);
                    console.log("111111", this.reqRes[i].responseBody);
                    console.log("222222", this.reqRes[i].responseBody.http_code);
                    this.reqRes[i].resCode = this.reqRes[i].responseBody.http_code;
                }
                let request = {
                    projectName: "StratProp",
                    api_doc_section_id: this.api_doc_section_id,
                    subSectionName: this.subSectionName,
                    endpoint: this.endpoint,
                    description: this.description,
                    requirements: this.requirements,
                    method: this.method,
                    requiredFields: this.requiredFields,
                    reqRes: this.reqRes
                };
                
                
                console.log("Request: ", request);
                axios.post(this.$store.state.api_url + 'api_doc_endpoint_add', request)
                    .then(response => {
                        console.log('Response: ', response);
                        this.$router.push("/docs");
                    })
                    .catch(error => {
                        console.log(error.response);
                        this.reqRes[index].responseBody = JSON.stringify(error.response.data, null, 4);
                    });
            },
        },
        beforeMount() {

        },
        mounted() {
            this.secionList();
        }
}
</script>

<style>

</style>


