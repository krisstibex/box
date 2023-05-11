(self.webpackChunk=self.webpackChunk||[]).push([[4181],{67720:function(b,c,a){"use strict";var v=a(63366),l=a(87462),m=a(67294),_=a(86010),h=a(94780),d=a(41796),i=a(90948),u=a(71657),x=a(35097),E=a(85893);const D=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],f=e=>{const{absolute:t,children:n,classes:C,flexItem:M,light:g,orientation:s,textAlign:p,variant:P}=e,O={root:["root",t&&"absolute",P,g&&"light",s==="vertical"&&"vertical",M&&"flexItem",n&&"withChildren",n&&s==="vertical"&&"withChildrenVertical",p==="right"&&s!=="vertical"&&"textAlignRight",p==="left"&&s!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",s==="vertical"&&"wrapperVertical"]};return(0,h.Z)(O,x.V,C)},o=(0,i.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,n.orientation==="vertical"&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&n.orientation==="vertical"&&t.withChildrenVertical,n.textAlign==="right"&&n.orientation!=="vertical"&&t.textAlignRight,n.textAlign==="left"&&n.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>(0,l.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,d.Fq)(e.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:t})=>(0,l.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:t})=>(0,l.Z)({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>(0,l.Z)({},e.textAlign==="right"&&e.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},e.textAlign==="left"&&e.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),r=(0,i.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,n.orientation==="vertical"&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>(0,l.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),y=m.forwardRef(function(t,n){const C=(0,u.Z)({props:t,name:"MuiDivider"}),{absolute:M=!1,children:g,className:s,component:p=g?"div":"hr",flexItem:P=!1,light:O=!1,orientation:j="horizontal",role:R=p!=="hr"?"separator":void 0,textAlign:L="center",variant:T="fullWidth"}=C,W=(0,v.Z)(C,D),A=(0,l.Z)({},C,{absolute:M,component:p,flexItem:P,light:O,orientation:j,role:R,textAlign:L,variant:T}),I=f(A);return(0,E.jsx)(o,(0,l.Z)({as:p,className:(0,_.Z)(I.root,s),role:R,ref:n,ownerState:A},W,{children:g?(0,E.jsx)(r,{className:I.wrapper,ownerState:A,children:g}):null}))});c.Z=y},35097:function(b,c,a){"use strict";a.d(c,{V:function(){return m}});var v=a(1588),l=a(34867);function m(h){return(0,l.Z)("MuiDivider",h)}const _=(0,v.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);c.Z=_},24020:function(b,c,a){"use strict";a.r(c),a.d(c,{default:function(){return y}});var v=a(97857),l=a.n(v),m=a(88513),_=a(51233),h=a(90629),d=a(87357),i=a(15861),u=a(50135),x=a(67720),E=a(83321),D=a(20640),f=a.n(D),o=a(87536),r=a(85893);function y(){var e=(0,o.cI)(),t=(0,m.useModel)("alert"),n=(0,m.useModel)("api"),C=n.fetchDataKey,M=n.fetchSaveData;return(0,r.jsxs)(_.Z,{spacing:3,m:1,children:[(0,r.jsxs)(h.Z,{elevation:3,sx:{pt:2},children:[(0,r.jsxs)(d.Z,{pr:2,pl:2,pb:1,children:[(0,r.jsxs)(_.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",mb:2,children:[(0,r.jsx)(i.Z,{variant:"body2",children:"\u6570\u636E\u67E5\u770B\u5668"}),(0,r.jsx)(i.Z,{variant:"body2",color:"primary",component:"div",onClick:function(){var s=e.getValues("key");if(!s)return t.alert({open:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E KEY",type:"warning"});f()(s),t.alert({open:!0,message:"\u590D\u5236\u6210\u529F",type:"success"})},children:"\u590D\u5236"})]}),(0,r.jsx)(u.Z,l()({fullWidth:!0,size:"small",variant:"standard",placeholder:"\u6570\u636E\u952E (Key)",InputLabelProps:{shrink:!0},helperText:"\u8F93\u5165\u8981\u67E5\u8BE2\u7684\u6570\u636E\u952E, \u5982: boxjs_host"},e.register("key")))]}),(0,r.jsx)(x.Z,{}),(0,r.jsx)(_.Z,{spacing:2,justifyContent:"flex-end",pt:1,pb:1,children:(0,r.jsx)(E.Z,{size:"small",variant:"text",sx:{width:"max-content",marginLeft:"auto"},onClick:function(){var s=e.getValues("key");if(!s)return t.alert({open:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E KEY",type:"warning"});C.run(s).then(function(p){p.val&&e.setValue("data",p.val)})},children:"VIEW"})})]}),(0,r.jsxs)(h.Z,{elevation:3,sx:{pt:2},children:[(0,r.jsxs)(d.Z,{pr:2,pl:2,pb:1,children:[(0,r.jsxs)(_.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",mb:2,children:[(0,r.jsx)(i.Z,{variant:"body2",children:"\u6570\u636E\u7F16\u8F91\u5668"}),(0,r.jsx)(i.Z,{variant:"body2",color:"primary",component:"div",onClick:function(){var s=e.getValues("key");if(!s)return t.alert({open:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E KEY",type:"warning"});f()(s),t.alert({open:!0,message:"\u590D\u5236\u6210\u529F",type:"success"})},children:"\u590D\u5236"})]}),(0,r.jsx)(u.Z,l()({fullWidth:!0,multiline:!0,rows:8,size:"small",variant:"standard",placeholder:"\u6570\u636E\u5185\u5BB9",InputLabelProps:{shrink:!0}},e.register("data")))]}),(0,r.jsx)(x.Z,{}),(0,r.jsx)(_.Z,{spacing:2,justifyContent:"flex-end",pt:1,pb:1,children:(0,r.jsx)(E.Z,{size:"small",variant:"text",sx:{width:"max-content",marginLeft:"auto"},onClick:function(){var s=e.getValues("key"),p=e.getValues("data");if(!s)return t.alert({open:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E KEY",type:"warning"});M.run({key:s,val:p})},children:"\u4FDD\u5B58"})})]})]})}},20640:function(b,c,a){"use strict";var v=a(11742),l={"text/plain":"Text","text/html":"Url",default:"Text"},m="Copy to clipboard: #{key}, Enter";function _(d){var i=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return d.replace(/#{\s*key\s*}/g,i)}function h(d,i){var u,x,E,D,f,o,r=!1;i||(i={}),u=i.debug||!1;try{E=v(),D=document.createRange(),f=document.getSelection(),o=document.createElement("span"),o.textContent=d,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(e){if(e.stopPropagation(),i.format)if(e.preventDefault(),typeof e.clipboardData=="undefined"){u&&console.warn("unable to use e.clipboardData"),u&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var t=l[i.format]||l.default;window.clipboardData.setData(t,d)}else e.clipboardData.clearData(),e.clipboardData.setData(i.format,d);i.onCopy&&(e.preventDefault(),i.onCopy(e.clipboardData))}),document.body.appendChild(o),D.selectNodeContents(o),f.addRange(D);var y=document.execCommand("copy");if(!y)throw new Error("copy command was unsuccessful");r=!0}catch(e){u&&console.error("unable to copy using execCommand: ",e),u&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(i.format||"text",d),i.onCopy&&i.onCopy(window.clipboardData),r=!0}catch(t){u&&console.error("unable to copy using clipboardData: ",t),u&&console.error("falling back to prompt"),x=_("message"in i?i.message:m),window.prompt(x,d)}}finally{f&&(typeof f.removeRange=="function"?f.removeRange(D):f.removeAllRanges()),o&&document.body.removeChild(o),E()}return r}b.exports=h},11742:function(b){b.exports=function(){var c=document.getSelection();if(!c.rangeCount)return function(){};for(var a=document.activeElement,v=[],l=0;l<c.rangeCount;l++)v.push(c.getRangeAt(l));switch(a.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":a.blur();break;default:a=null;break}return c.removeAllRanges(),function(){c.type==="Caret"&&c.removeAllRanges(),c.rangeCount||v.forEach(function(m){c.addRange(m)}),a&&a.focus()}}}}]);
