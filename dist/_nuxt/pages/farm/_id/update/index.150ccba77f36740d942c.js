webpackJsonp([23],{"9RPY":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("VZ2Q"),i=t("EYeK"),r=!1;var l=function(e){r||t("qV2u")},o=t("VU/8")(a.a,i.a,!1,l,null,null);o.options.__file="pages/farm/_id/update/index.vue",s.default=o.exports},EYeK:function(e,s,t){"use strict";var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"container"},[t("div",{staticClass:"uk-container uk-container-large uk-padding-remove"},[t("div",{staticClass:"uk-card uk-card-default card_create"},[t("div",{staticClass:"uk-card-body"},[t("div",{attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-form-stacked"},[t("div",{staticClass:"uk-margin"},[t("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[e._v("Winefarm Name")]),t("div",{staticClass:"uk-form-controls"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.farm_name,expression:"farm_name"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"Winefarm Name"},domProps:{value:e.farm_name},on:{input:function(s){s.target.composing||(e.farm_name=s.target.value)}}})])]),t("div",{staticClass:"uk-margin"},[t("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[e._v("Address line 1")]),t("div",{staticClass:"uk-form-controls"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.address_line_1,expression:"address_line_1"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"Address line 1"},domProps:{value:e.address_line_1},on:{input:function(s){s.target.composing||(e.address_line_1=s.target.value)}}})])]),t("div",{staticClass:"uk-margin"},[t("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[e._v("Address line 2")]),t("div",{staticClass:"uk-form-controls"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.address_line_2,expression:"address_line_2"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"Address line 2"},domProps:{value:e.address_line_2},on:{input:function(s){s.target.composing||(e.address_line_2=s.target.value)}}})])]),t("div",{staticClass:"uk-margin"},[t("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[e._v("Address line 3")]),t("div",{staticClass:"uk-form-controls"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.address_line_3,expression:"address_line_3"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"Address line 3"},domProps:{value:e.address_line_3},on:{input:function(s){s.target.composing||(e.address_line_3=s.target.value)}}})])]),t("div",{staticClass:"uk-margin"},[t("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[e._v("Address line 4")]),t("div",{staticClass:"uk-form-controls"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.address_line_4,expression:"address_line_4"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"Address line 4"},domProps:{value:e.address_line_4},on:{input:function(s){s.target.composing||(e.address_line_4=s.target.value)}}})])]),t("div",{staticClass:"uk-margin"},[t("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[e._v("Email")]),t("div",{staticClass:"uk-form-controls"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(s){s.target.composing||(e.email=s.target.value)}}})])]),t("div",{staticClass:"uk-margin"},[t("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[e._v("Mobile Number")]),t("div",{staticClass:"uk-form-controls"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile_number,expression:"mobile_number"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"Mobile Number"},domProps:{value:e.mobile_number},on:{input:function(s){s.target.composing||(e.mobile_number=s.target.value)}}})])]),t("div",{staticClass:"uk-margin"},[t("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[e._v("Status")]),t("div",{staticClass:"uk-form-controls"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.status,expression:"status"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"Status"},domProps:{value:e.status},on:{input:function(s){s.target.composing||(e.status=s.target.value)}}})])]),t("div",{staticClass:"uk-margin",attrs:{"uk-margin":""}},[t("button",{staticClass:"uk-button uk-button-default",on:{click:function(s){e.updateProduct()}}},[e._v("Submit")])])])])])])])])};a._withStripped=!0;var i={render:a,staticRenderFns:[]};s.a=i},VZ2Q:function(e,s,t){"use strict";var a=t("mtWM"),i=t.n(a);s.a={components:{axios:i.a},data:function(){return{farm_name:"",address_line_1:"",address_line_2:"",address_line_3:"",address_line_4:"",email:"",mobile_number:"",status:""}},methods:{updateProduct:function(){var e=this,s={farm_name:this.farm_name,address_line_1:this.address_line_1,address_line_2:this.address_line_2,address_line_3:this.address_line_3,address_line_4:this.address_line_4,email:this.email,mobile_number:this.mobile_number,status:this.status,wine_farm_id:this.$route.params.id};console.log("Request: ",s),i.a.post(this.$store.state.api_url+"/wine-farm_update",s).then(function(s){console.log("Response: ",s),e.$router.push("/farm/"+e.$route.params.id)}).catch(function(e){console.log(e.response),400==e.response.status&&console.log(e.response),401==e.response.status&&console.log(e.response),403==e.response.status&&(console.log(e.response),new Error),404==e.response.status&&console.log(e.response),500==e.response.status&&console.log(e.response)})}}}},qV2u:function(e,s,t){var a=t("ueig");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("6c37d450",a,!1,{sourceMap:!1})},ueig:function(e,s,t){(e.exports=t("FZ+f")(!1)).push([e.i,"",""])}});