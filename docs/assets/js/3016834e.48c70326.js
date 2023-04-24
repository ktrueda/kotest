"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[82604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:"instant",title:"Current Instant Listeners",sidebar_label:"Current Instant Listeners",slug:"instant.html"},i=void 0,s={unversionedId:"extensions/instant",id:"version-5.6/extensions/instant",title:"Current Instant Listeners",description:"Current instant listeners",source:"@site/versioned_docs/version-5.6/extensions/instant.md",sourceDirName:"extensions",slug:"/extensions/instant.html",permalink:"/docs/extensions/instant.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.6/extensions/instant.md",tags:[],version:"5.6",frontMatter:{id:"instant",title:"Current Instant Listeners",sidebar_label:"Current Instant Listeners",slug:"instant.html"},sidebar:"extensions",previous:{title:"Allure",permalink:"/docs/extensions/allure.html"},next:{title:"Koin",permalink:"/docs/extensions/koin.html"}},l={},c=[{value:"Current instant listeners",id:"current-instant-listeners",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"current-instant-listeners"},"Current instant listeners"),(0,o.kt)("p",null,"Sometimes you may want to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"now")," static functions located in ",(0,o.kt)("inlineCode",{parentName:"p"},"java.time")," classes for multiple reasons, such as setting the creation date of an entity"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"data class MyEntity(creationDate: LocalDateTime = LocalDateTime.now())"),"."),(0,o.kt)("p",null,"But what to do when you want to test that value? ",(0,o.kt)("inlineCode",{parentName:"p"},"now")," will be different\neach time you call it!"),(0,o.kt)("p",null,"For that, Kotest provides ",(0,o.kt)("inlineCode",{parentName:"p"},"ConstantNowListener")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"withConstantNow")," functions."),(0,o.kt)("p",null,"While executing your code, your ",(0,o.kt)("inlineCode",{parentName:"p"},"now")," will always be the value that you want to test against."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val foreverNow = LocalDateTime.now()\n\nwithConstantNow(foreverNow) {\n  LocalDateTime.now() shouldBe foreverNow\n  delay(10) // Code is taking a small amount of time to execute, but `now` changed!\n  LocalDateTime.now() shouldBe foreverNow\n}\n\n")),(0,o.kt)("p",null,"Or, with a listener for all the tests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"  override fun listeners() = listOf(\n    ConstantNowTestListener(foreverNow)\n  )\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"withContantNow")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ConstantNowTestListener")," are very sensitive to race conditions. Using them, mocks the static method ",(0,o.kt)("inlineCode",{parentName:"p"},"now")," which is global to the whole JVM instance,\nif you're using it while running test in parallel, the results may be inconsistent.")))}p.isMDXComponent=!0}}]);