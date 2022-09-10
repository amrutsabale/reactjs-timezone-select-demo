(self.webpackChunkreactjs_timezone_select_demo=self.webpackChunkreactjs_timezone_select_demo||[]).push([[179],{"./src/stories/SelectTimezone.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},WithLabelStyles:function(){return WithLabelStyles},WithOptionFomatting:function(){return WithOptionFomatting},WithSelectStyles:function(){return WithSelectStyles},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return SelectTimezone_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),getTimeZones=__webpack_require__("./node_modules/@vvo/tzdb/lib/getTimeZones.js"),luxon=__webpack_require__("./node_modules/luxon/src/luxon.js"),react_select_esm=__webpack_require__("./node_modules/react-select/dist/react-select.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["label","name","value","onChange","isDisabled","isSearchable","defaultToSystemTimezone","containerStyles","labelStyles","selectStyles","optionLabelFormat"],SelectTimezone=function SelectTimezone(_ref){var label=_ref.label,name=_ref.name,value=_ref.value,onChange=_ref.onChange,isDisabled=_ref.isDisabled,isSearchable=_ref.isSearchable,containerStyles=(_ref.defaultToSystemTimezone,_ref.containerStyles),labelStyles=_ref.labelStyles,selectStyles=_ref.selectStyles,optionLabelFormat=_ref.optionLabelFormat,props=(0,objectWithoutProperties.Z)(_ref,_excluded),validTimeZones=(0,getTimeZones.Z)({includeUtc:!0}).filter((function(_ref2){var name=_ref2.name;return luxon.ou.local().setZone(name).isValid})).map((function(timezone){var name=timezone.name,group=timezone.group,label=name;return optionLabelFormat&&(label=optionLabelFormat(timezone)||name),{group:group,label:label,value:name}})),options=validTimeZones.map((function(_ref3){return{label:_ref3.label,value:_ref3.value}})),defaultTimezone=validTimeZones.find((function(_ref4){var tzValue=_ref4.value,group=_ref4.group,systemZone=new luxon.Oh;return value?tzValue===value||group.includes(value):tzValue===systemZone.name||group.includes(systemZone.name)})),defaultTimezoneOption=defaultTimezone?{value:defaultTimezone.value,label:defaultTimezone.label}:void 0;return(0,jsx_runtime.jsxs)("div",{style:containerStyles,children:[label&&(0,jsx_runtime.jsx)("div",{style:(0,objectSpread2.Z)({textAlign:"start",marginBottom:10},labelStyles&&labelStyles),children:(0,jsx_runtime.jsx)("label",{htmlFor:name,children:label})}),(0,jsx_runtime.jsx)(react_select_esm.ZP,(0,objectSpread2.Z)({id:name,options:options,name:name,value:defaultTimezoneOption,onChange:onChange,isDisabled:isDisabled,isSearchable:isSearchable,styles:selectStyles},props))]})};SelectTimezone.defaultProps={isSearchable:!0},SelectTimezone.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"SelectTimezone",props:{isSearchable:{defaultValue:{value:"true",computed:!1},description:"Keep SelectTimezone options searchable or non-searchable",type:{name:"bool"},required:!1},name:{description:"SelectTimezone name",type:{name:"string"},required:!1},label:{description:"SelectTimezone label",type:{name:"string"},required:!1},value:{description:"SelectTimezone value",type:{name:"string"},required:!1},onChange:{description:"OnChaneg handler",type:{name:"func"},required:!0},isDisabled:{description:"Disable SelectTimezone",type:{name:"bool"},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectTimezone.js"]={name:"SelectTimezone",docgenInfo:SelectTimezone.__docgenInfo,path:"src/components/SelectTimezone.js"});var SelectTimezone_stories={title:"Example/SelectTimezone",component:SelectTimezone},Primary=function Primary(){var _useState=(0,react.useState)(),_useState2=(0,slicedToArray.Z)(_useState,2),value=_useState2[0],setValue=_useState2[1];return(0,jsx_runtime.jsx)(SelectTimezone,{name:"Custom timezone",label:"Select Timezone",value:value,onChange:function onChange(_ref){_ref.label;var value=_ref.value;return setValue(value)},containerStyles:{width:300}})},WithOptionFomatting=function WithOptionFomatting(){var _useState3=(0,react.useState)(),_useState4=(0,slicedToArray.Z)(_useState3,2),value=_useState4[0],setValue=_useState4[1];return(0,jsx_runtime.jsx)(SelectTimezone,{id:"custom_timezone",name:"Custom timezone",label:"Select Timezone",value:value,onChange:function onChange(_ref2){_ref2.label;var value=_ref2.value;return setValue(value)},defaultToSystemTimezone:!0,containerStyles:{width:300},optionLabelFormat:function optionLabelFormat(timzone){return"".concat(timzone.name," (").concat(timzone.abbreviation,")")}})},WithSelectStyles=function WithSelectStyles(){var _useState5=(0,react.useState)(),_useState6=(0,slicedToArray.Z)(_useState5,2),value=_useState6[0],setValue=_useState6[1],customStyles={option:function option(provided,state){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},provided),{},{borderBottom:"1px dotted pink",color:state.isSelected?"red":"blue",padding:20})},control:function control(base,state){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},base),{},{background:"cyan"})}};return(0,jsx_runtime.jsx)(SelectTimezone,{id:"custom_timezone",name:"Custom timezone",label:"Select Timezone",value:value,onChange:function onChange(_ref3){_ref3.label;var value=_ref3.value;return setValue(value)},defaultToSystemTimezone:!0,containerStyles:{width:300},selectStyles:customStyles})},WithLabelStyles=function WithLabelStyles(){var _useState7=(0,react.useState)(),_useState8=(0,slicedToArray.Z)(_useState7,2),value=_useState8[0],setValue=_useState8[1];return(0,jsx_runtime.jsx)(SelectTimezone,{id:"custom_timezone",name:"Custom timezone",label:"Select Timezone 😀",value:value,onChange:function onChange(_ref4){_ref4.label;var value=_ref4.value;return setValue(value)},defaultToSystemTimezone:!0,containerStyles:{width:300},labelStyles:{color:"blue"}})};Primary.parameters=(0,objectSpread2.Z)({storySource:{source:'() => {\n  const [value, setValue] = useState();\n\n  return (\n    <SelectTimezone\n      name={"Custom timezone"}\n      label="Select Timezone"\n      value={value}\n      onChange={({ label, value }) => setValue(value)}\n      containerStyles={{ width: 300 }}\n    />\n  );\n}'}},Primary.parameters),WithOptionFomatting.parameters=(0,objectSpread2.Z)({storySource:{source:'() => {\n  const [value, setValue] = useState();\n\n  return (\n    <SelectTimezone\n      id="custom_timezone"\n      name={"Custom timezone"}\n      label="Select Timezone"\n      value={value}\n      onChange={({ label, value }) => setValue(value)}\n      defaultToSystemTimezone\n      containerStyles={{ width: 300 }}\n      optionLabelFormat={(timzone) =>\n        `${timzone.name} (${timzone.abbreviation})`\n      }\n    />\n  );\n}'}},WithOptionFomatting.parameters),WithSelectStyles.parameters=(0,objectSpread2.Z)({storySource:{source:'() => {\n  const [value, setValue] = useState();\n  const customStyles = {\n    option: (provided, state) => ({\n      ...provided,\n      borderBottom: "1px dotted pink",\n      color: state.isSelected ? "red" : "blue",\n      padding: 20,\n    }),\n    control: (base, state) => ({\n      ...base,\n      background: "cyan",\n    }),\n  };\n  return (\n    <SelectTimezone\n      id="custom_timezone"\n      name={"Custom timezone"}\n      label="Select Timezone"\n      value={value}\n      onChange={({ label, value }) => setValue(value)}\n      defaultToSystemTimezone\n      containerStyles={{ width: 300 }}\n      selectStyles={customStyles}\n    />\n  );\n}'}},WithSelectStyles.parameters),WithLabelStyles.parameters=(0,objectSpread2.Z)({storySource:{source:'() => {\n  const [value, setValue] = useState();\n\n  return (\n    <SelectTimezone\n      id="custom_timezone"\n      name={"Custom timezone"}\n      label="Select Timezone 😀"\n      value={value}\n      onChange={({ label, value }) => setValue(value)}\n      defaultToSystemTimezone\n      containerStyles={{ width: 300 }}\n      labelStyles={{ color: "blue" }}\n    />\n  );\n}'}},WithLabelStyles.parameters);var __namedExportsOrder=["Primary","WithOptionFomatting","WithSelectStyles","WithLabelStyles"];Primary.__docgenInfo={description:"",methods:[],displayName:"Primary"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/SelectTimezone.stories.jsx"]={name:"Primary",docgenInfo:Primary.__docgenInfo,path:"src/stories/SelectTimezone.stories.jsx"}),WithOptionFomatting.__docgenInfo={description:"",methods:[],displayName:"WithOptionFomatting"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/SelectTimezone.stories.jsx"]={name:"WithOptionFomatting",docgenInfo:WithOptionFomatting.__docgenInfo,path:"src/stories/SelectTimezone.stories.jsx"}),WithSelectStyles.__docgenInfo={description:"",methods:[],displayName:"WithSelectStyles"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/SelectTimezone.stories.jsx"]={name:"WithSelectStyles",docgenInfo:WithSelectStyles.__docgenInfo,path:"src/stories/SelectTimezone.stories.jsx"}),WithLabelStyles.__docgenInfo={description:"",methods:[],displayName:"WithLabelStyles"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/SelectTimezone.stories.jsx"]={name:"WithLabelStyles",docgenInfo:WithLabelStyles.__docgenInfo,path:"src/stories/SelectTimezone.stories.jsx"})},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./stories/SelectTimezone.stories.jsx":"./src/stories/SelectTimezone.stories.jsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[760],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);