webpackJsonp([23],{"4kBP":function(e,t,s){var o=s("fQ/5");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);s("rjj0")("48051b04",o,!1,{sourceMap:!1})},SIZM:function(e,t,s){"use strict";var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"uk-container-full"},[s("div",{attrs:{"uk-grid":""}},[s("div",{staticClass:"uk-width-1-5",staticStyle:{"overflow-y":"scroll",height:"100vh","padding-bottom":"200px"}}),s("div",{staticClass:"uk-width-3-5",staticStyle:{"overflow-y":"scroll",height:"100vh","padding-bottom":"200px"}},[s("div",[s("div",{staticClass:"uk-margin"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sectionName,expression:"sectionName"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"Add Section"},domProps:{value:e.sectionName},on:{input:function(t){t.target.composing||(e.sectionName=t.target.value)}}})]),s("button",{on:{click:function(t){e.addSection()}}},[e._v("Add Section")]),s("div",{staticClass:"uk-margin"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.api_doc_section_id,expression:"api_doc_section_id"}],staticClass:"uk-select",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.api_doc_section_id=t.target.multiple?s:s[0]}}},e._l(e.doc_section_list,function(t,o){return s("option",{key:o,domProps:{value:t.api_doc_section_id}},[e._v(e._s(t.sectionname))])}))]),s("div",{staticClass:"uk-margin"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.subSectionName,expression:"subSectionName"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"Endpoint Name"},domProps:{value:e.subSectionName},on:{input:function(t){t.target.composing||(e.subSectionName=t.target.value)}}})]),s("div",{staticClass:"uk-margin"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.endpoint,expression:"endpoint"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"Endpoint"},domProps:{value:e.endpoint},on:{input:function(t){t.target.composing||(e.endpoint=t.target.value)}}})]),s("div",{staticClass:"uk-margin"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"Description"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),s("div",{staticClass:"uk-margin"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.requirements,expression:"requirements"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"Requirements"},domProps:{value:e.requirements},on:{input:function(t){t.target.composing||(e.requirements=t.target.value)}}})]),s("div",{staticClass:"uk-margin"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.method,expression:"method"}],staticClass:"uk-select",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.method=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"POST"}},[e._v("POST")])])]),e._l(e.requiredFields,function(t,o){return s("li",{key:t.name},[e._v(e._s(t.name)+" - format: "+e._s(t.format)),s("button",{on:{click:function(t){e.deleteRequiredField(o)}}},[e._v("Delete")])])}),s("div",{staticClass:"uk-margin"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"Required Field Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),s("div",{staticClass:"uk-margin"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.format,expression:"format"}],staticClass:"uk-select",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.format=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"ARRAY"}},[e._v("ARRAY")]),s("option",{attrs:{value:"BOOLEAN"}},[e._v("BOOLEAN")]),s("option",{attrs:{value:"FILE"}},[e._v("FILE")]),s("option",{attrs:{value:"INTEGER"}},[e._v("INTEGER")]),s("option",{attrs:{value:"OBJECT"}},[e._v("OBJECT")]),s("option",{attrs:{value:"STRING"}},[e._v("STRING")])])]),s("button",{on:{click:function(t){e.addRequiredField()}}},[e._v("Add Required Field")]),e._l(e.reqRes,function(t,o){return s("div",{key:t.headers},[s("h5",[e._v("Headers")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.headers,expression:"rr.headers"}],attrs:{cols:"100",rows:"10"},domProps:{value:t.headers},on:{input:function(s){s.target.composing||e.$set(t,"headers",s.target.value)}}}),s("h5",[e._v("Request")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.requestBody,expression:"rr.requestBody"}],attrs:{cols:"100",rows:"10"},domProps:{value:t.requestBody},on:{input:function(s){s.target.composing||e.$set(t,"requestBody",s.target.value)}}}),s("button",{on:{click:function(s){e.testRequest(t.requestBody,o)}}},[e._v("Submit")]),s("h5",[e._v("Response")]),s("pre",[e._v("                            "),s("code",[e._v(e._s(t.responseBody))]),e._v("\n                        ")]),s("button",{on:{click:function(t){e.removeReqResPair(o)}}},[e._v("Remove")])])}),s("button",{on:{click:function(t){e.addReqResPair()}}},[e._v("Add Another Req Res Pair")]),s("button",{on:{click:function(t){e.saveReqRes()}}},[e._v("Save")])],2)]),s("div",{staticClass:"uk-width-1-5",staticStyle:{"overflow-y":"scroll",height:"100vh","padding-bottom":"200px"}})])])])};o._withStripped=!0;var i={render:o,staticRenderFns:[]};t.a=i},"fQ/5":function(e,t,s){(e.exports=s("FZ+f")(!1)).push([e.i,"",""])},mKWY:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s("oN0g"),i=s("SIZM"),n=!1;var a=function(e){n||s("4kBP")},r=s("VU/8")(o.a,i.a,!1,a,null,null);r.options.__file="pages/docs/add/index.vue",t.default=r.exports},oN0g:function(e,t,s){"use strict";var o=s("mvHQ"),i=s.n(o),n=s("mtWM"),a=s.n(n);t.a={components:{axios:a.a},head:function(){return{title:"API Document Add"}},data:function(){return{doc_section_list:[],subSection:{},reqRes:[{headers:"",requestBody:"",responseBody:{}}],sectionName:"",api_doc_section_id:"1",subSectionName:"",endpoint:"",description:"",requirements:"",method:"POST",requiredFields:[],name:"",format:"STRING"}},methods:{docsList:function(){var e=this,t={project:"StratProp"};console.log("Request: ",t),a.a.post(this.$store.state.api_url+"/docsList",t).then(function(t){console.log("Response: ",t),t.data.http_code,e.docs=t.data.data.records}).catch(function(t){console.log(t.response),e.docs=t.response.data})},testRequest:function(e,t){var s=this,o=JSON.parse(e);console.log("Request: ",o),a.a.post(this.$store.state.api_url+this.endpoint,o).then(function(e){console.log("Response: ",e),e.data.http_code,s.reqRes[t].responseBody=i()(e.data,null,4)}).catch(function(e){console.log(e.response),s.reqRes[t].responseBody=i()(e.response.data,null,4)})},openInstance:function(e,t){this.requestTest=i()(e.requestBody,null,4)},subSectionButton:function(e,t){this.theSubSection=e,this.requestTest=i()(e.reqRes[0].requestBody,null,4)},addSection:function(){var e=this,t={sectionName:this.sectionName,projectName:"StratProp"};console.log("Request: ",t),a.a.post(this.$store.state.api_url+"/api_doc_section_add",t).then(function(t){console.log("Response: ",t),e.secionList()}).catch(function(t){console.log(t.response),e.docs=t.response.data})},secionList:function(){var e=this,t={};console.log("Request: ",t),a.a.post(this.$store.state.api_url+"/api_doc_section_list",t).then(function(t){console.log("Response: ",t),e.doc_section_list=t.data.data.records}).catch(function(t){console.log(t.response),e.docs=t.response.data})},deleteRequiredField:function(e){this.requiredFields.splice(e,1)},addRequiredField:function(){this.requiredFields.push({name:this.name,format:this.format}),this.name="",this.format=""},removeReqResPair:function(e){this.reqRes.splice(e,1)},addReqResPair:function(){this.reqRes.push({headers:"",requestBody:"",responseBody:{}})},saveReqRes:function(){for(var e=this,t=0;t<this.reqRes.length;t++)this.reqRes[t].requestBody=JSON.parse(this.reqRes[t].requestBody),this.reqRes[t].responseBody=JSON.parse(this.reqRes[t].responseBody),console.log("111111",this.reqRes[t].responseBody),console.log("222222",this.reqRes[t].responseBody.http_code),this.reqRes[t].resCode=this.reqRes[t].responseBody.http_code;var s={projectName:"StratProp",api_doc_section_id:this.api_doc_section_id,subSectionName:this.subSectionName,endpoint:this.endpoint,description:this.description,requirements:this.requirements,method:this.method,requiredFields:this.requiredFields,reqRes:this.reqRes};console.log("Request: ",s),a.a.post(this.$store.state.api_url+"api_doc_endpoint_add",s).then(function(t){console.log("Response: ",t),e.$router.push("/docs")}).catch(function(t){console.log(t.response),e.reqRes[index].responseBody=i()(t.response.data,null,4)})}},beforeMount:function(){},mounted:function(){this.secionList()}}}});