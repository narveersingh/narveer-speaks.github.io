(this["webpackJsonpcampaign-manager"]=this["webpackJsonpcampaign-manager"]||[]).push([[0],{105:function(e,a,n){},106:function(e,a,n){},117:function(e,a,n){},175:function(e,a,n){},176:function(e,a,n){},177:function(e,a,n){},178:function(e,a,n){},179:function(e,a,n){},182:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),r=n(14),c=n.n(r),A=n(187),l=n(23),s=n(60),o=n(86),m=n(70),u=n.n(m),p=n(17);s.a.use(u.a).use(o.a).use(p.e).init({resources:{"en-US":{translations:{"Manage Campaigns":"Manage Campaigns","Upcoming Campaigns":"Upcoming Campaigns","Live Campaigns":"Live Campaigns","Past Campaigns":"Past Campaigns",Date:"Date",Campaign:"Campaign",View:"View",Actions:"Actions","View Pricing":"View Pricing",Report:"Report","Schedule Again":"Schedule Again",Close:"Close",Pricing:"Pricing",Week:"Week",Months:"Months",Month:"Month",Year:"Year","No upcoming campaigns":"No upcoming campaigns","No live campaigns":"No live campaigns","No past campaigns":"No past campaigns","BlueStacks Logo":"BlueStacks Logo",English:"English",German:"German","Change Language":"Change Language","Switch to":"Switch to",Reschedule:"Reschedule","Thumbnail image of ":"Thumbnail image of "}},ger:{translations:{"Manage Campaigns":"Manage Campaigns - German","Upcoming Campaigns":"Upcoming Campaigns","Live Campaigns":"Live Campaigns","Past Campaigns":"Past Campaigns",Date:"Date",Campaign:"Campaign",View:"View",Actions:"Actions","View Pricing":"View Pricing",Report:"Report","Schedule Again":"Schedule Again",Close:"Close",Pricing:"Pricing",Week:"Week",Months:"Months",Month:"Month",Year:"Year","No upcoming campaigns":"No upcoming campaigns","No live campaigns":"No live campaigns","No past campaigns":"No past campaigns","BlueStacks Logo":"BlueStacks Logo",English:"English",German:"German","Change Language":"Change Language","Switch to":"Switch to",Reschedule:"Reschedule","Thumbnail image of ":"Thumbnail image of "}}},fallbackLng:"en-US",debug:!0,ns:["translations"],defaultNS:"translations",keySeparator:!1,interpolation:{escapeValue:!1,formatSeparator:","},react:{wait:!0}});var d=s.a,f=n(73),g=(n(98),n(30)),v=n(31),b=n(39),h=n(40),O=n(188),N=n(8),P=n.n(N),z=n(74),E=n.n(z),k=Object(O.a)()((function(e){var a=e.t,n=e.i18n,t={en:a("English"),ger:a("German")},r="en"===n.language.split("-")[0]?"ger":"en";return i.a.createElement("a",{className:E.a.link,title:a("Change Language"),href:"/campaigns/?tab=upcoming",onClick:function(){return n.changeLanguage(r)}},"".concat(a("Switch to")," ").concat(t[r]))})),C=n(43),q=n.n(C),V=n(76),w=n.n(V),T=Object(O.a)()((function(e){var a=e.t;return i.a.createElement("header",{className:q.a.header},i.a.createElement("div",{className:P()("content",q.a.content)},i.a.createElement("a",{className:q.a.logo,href:"/campaigns/?tab=upcoming"},i.a.createElement("img",{src:w.a,alt:a("BlueStacks Logo")})),i.a.createElement(k,null)))}));var y=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(T,null),i.a.createElement("main",{className:"content"},e.children))},S=(n(105),function(e){var a=e.title,n=e.onClick,t=e.isActive,r=P()({"tab-item":!0,active:t});return i.a.createElement("button",{className:r,onClick:n},a)}),X=(n(106),function(e){var a=e.tabs,n=e.onChange,t=e.activeIndex;return i.a.createElement("div",{className:"tab-list"},a.map((function(e,a){return i.a.createElement(S,{key:e.id,title:e.title,isActive:a===t,index:a,onClick:function(){return n(a)}})})))}),M=n(56),U=n.n(M),J=n(77),L=n.n(J),D={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"300px"}};U.a.setAppElement("#root");var j=function(e){var a=e.children,n=e.isOpen,t=e.close,r=e.label;return i.a.createElement(U.a,{isOpen:n,onRequestClose:t,style:D,contentLabel:r},a,i.a.createElement("footer",{className:L.a.footer},i.a.createElement("button",{onClick:t,className:"primary-action"},"Close")))},x=n(78),Z=n.n(x),Y=(n(115),n(7)),W=n.n(Y),B=(n(117),function(e){var a=e.date,n=e.isOpen,t=e.onChange,r=e.title,c=W()(a).toDate();return i.a.createElement(j,{isOpen:n,close:function(){return t(null)}},i.a.createElement("div",{className:"text-center"},i.a.createElement("h2",null,r),i.a.createElement(Z.a,{selected:c,onChange:function(e){return t(e)},inline:!0,calendarClassName:"datepicker-wrap"})))}),K=(n(175),n(176),Object(O.a)()((function(e){var a=e.title,n=e.subtitle,t=e.banner,r=e.type,c=void 0===r?"":r,A=e.image,l=e.t;return i.a.createElement("div",{className:P()({"action-meta":!0,"action-banner":!!t})},A&&i.a.createElement("div",{className:"action-image"},i.a.createElement("img",{src:A,alt:l("Thumbnail image of ")+a})),i.a.createElement("div",{className:"action-detail"},i.a.createElement("p",{className:P()({title:!0,type:c})},a),i.a.createElement("p",{className:P()({subtitle:!0,type:c})},n)))}))),R=n(28),G=(n(177),function(e){var a,n=e.title,t=e.icon,r=e.color,c=e.onClick;return i.a.createElement("button",{className:"action-wrap",onClick:c},i.a.createElement("span",{className:P()((a={"action-icon":!0},Object(R.a)(a,t,!!t),Object(R.a)(a,r,!!r),a))}),i.a.createElement("span",{className:"action-text"},n))}),Q=n(37),I=n.n(Q),H=(n(178),Object(O.a)()((function(e){var a=e.t,n=e.row,t=e.action;return i.a.createElement("div",{className:"list-item"},i.a.createElement("div",{className:"list-col"},i.a.createElement(K,{title:W()(n.scheduledOn).format("MMM YYYY, D"),subtitle:W()(n.scheduledOn).fromNow()})),i.a.createElement("div",{className:"list-col mr-1"},i.a.createElement(K,{title:n.name,subtitle:n.region,image:n.image_url||I.a})),i.a.createElement("div",{className:"list-col action-group"},i.a.createElement(G,{title:a("View Pricing"),icon:"icon-price",color:"yellow",onClick:function(){return t("pricing",n)}})),i.a.createElement("div",{className:"list-col action-group"},i.a.createElement(G,{title:"CSV",icon:"icon-file",color:"green"}),i.a.createElement(G,{title:a("Report"),icon:"icon-statistics-report",color:"red"}),i.a.createElement(G,{title:a("Schedule Again"),icon:"icon-calendar",color:"blue",onClick:function(){return t("schedule",n)}})))}))),F=(n(179),{month_1:"1 Week - 1 Month",month_6:"6 Months",month_12:"1 Year"}),_=function(e){var a=e.data,n=e.isOpen,t=e.close;return i.a.createElement(j,{isOpen:n,close:t},a&&i.a.createElement("div",null,i.a.createElement(K,{banner:!0,title:a.name,subtitle:a.region,image:a.image_url||I.a}),i.a.createElement("h2",{className:"data-title"},"Pricing"),i.a.createElement("ul",{className:"data-list"},Object.keys(F).map((function(e){return i.a.createElement("li",{className:"data-item"},i.a.createElement("p",{className:"data-label"},F[e]),i.a.createElement("p",{className:"data-value"},a.pricing&&a.pricing[e]?a.pricing[e]:"-"))})))))},$=[{id:"date",title:"Date"},{id:"campaign",title:"Campaign"},{id:"view",title:"View"},{id:"action",title:"Action"}],ee=function(e){Object(h.a)(n,e);var a=Object(b.a)(n);function n(e){var t;return Object(g.a)(this,n),(t=a.call(this,e)).hidePricingModal=function(){t.setState({data:{},isPricingModalOpen:!1})},t.hideDateModal=function(){t.setState({data:{},isDatePickerOpen:!1})},t.dateChanged=function(e){var a=t.state.data;e&&t.props.updateCampaign({id:a.id,date:e.getTime()}),t.hideDateModal()},t.rowClicked=function(e,a){switch(e){case"pricing":t.setState({data:a,isPricingModalOpen:!0});break;case"schedule":t.setState({data:a,isDatePickerOpen:!0});break;default:return}},t.state={data:{},isPricingModalOpen:!1,isDatePickerOpen:!1},t}return Object(v.a)(n,[{key:"render",value:function(){var e=this,a=this.state,n=a.isDatePickerOpen,t=a.isPricingModalOpen,r=a.data,c=this.props,A=c.t,l=c.list,s=c.nullMessage;return i.a.createElement("div",{className:"list-wrap"},i.a.createElement("div",{className:"list-item head"},$.map((function(e){return i.a.createElement("p",{className:"list-col",key:e.id},e.title)}))),l.length>0&&i.a.createElement("div",null,l.map((function(a){return i.a.createElement(H,{row:a,action:e.rowClicked,key:a.id})}))),!l.length&&i.a.createElement("h2",{className:"list-null"},s),i.a.createElement(_,{data:r,isOpen:t,close:this.hidePricingModal}),i.a.createElement(B,{date:r.scheduledOn,isOpen:n,onChange:this.dateChanged,title:A("Reschedule")}))}}]),n}(i.a.Component),ae=Object(O.a)()(Object(l.b)(null,(function(e){return{updateCampaign:function(a){e(function(e){return function(a){a({type:"UPDATE_CAMPAIGN",payload:e})}}(a))}}}))(ee)),ne=[{id:"upcoming",title:"Upcoming Campaigns"},{id:"live",title:"Live Campaigns"},{id:"past",title:"Past Campaigns"}],te=function(e){Object(h.a)(n,e);var a=Object(b.a)(n);function n(e){var t;return Object(g.a)(this,n),(t=a.call(this,e)).changeView=function(e){var a,n=new URLSearchParams(window.location.search),i=n.get("tab"),r=e||i,c=ne.findIndex((function(e){return e.id===r}));c<0?(c=0,a="upcoming"):a=ne[c].id,i!==a?(n.set("tab",a),window.location.search=n.toString()):t.setState({activeTabIndex:c})},t.tabChanged=function(e){t.changeView(ne[e].id)},t.state={activeTabIndex:0},t}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.changeView()}},{key:"render",value:function(){var e=this.props,a=e.t,n=e.campaigns,t=this.state.activeTabIndex,r=ne[t].id,c=n.filter((function(e){switch(r){case"upcoming":return W()().isBefore(W()(e.scheduledOn),"day");case"live":return W()(e.scheduledOn).isSame(W()(),"day");case"past":return W()(e.scheduledOn).isBefore(W()(),"day");default:return!0}})),A={upcoming:a("No upcoming campaigns"),live:a("No live campaigns"),past:a("No past campaigns")};return i.a.createElement(y,null,i.a.createElement("h1",null,a("Manage Campaigns")),i.a.createElement(X,{tabs:ne,activeIndex:t,onChange:this.tabChanged}),i.a.createElement(ae,{list:c,nullMessage:A[r],onItem:!0}))}}]),n}(i.a.Component),ie=Object(O.a)()(Object(l.b)((function(e){return{campaigns:e.campaigns}}))(te)),re=n(81),ce=n.n(re),Ae=function(){return i.a.createElement("div",{className:ce.a.loader})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=n(6),se=n(82),oe=n(83),me=n(84),ue=Object(le.c)({campaigns:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UPDATE_CAMPAIGN":var n=a.payload,t=n.id,i=n.date,r=e.findIndex((function(e){return e.id===t}));return e.map((function(e,a){return a===r?Object(oe.a)({},e,{scheduledOn:i}):e}));default:return e}}}),pe=n(59),de=n(85),fe={key:"root",storage:n.n(de).a},ge=Object(pe.a)(fe,ue),ve=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):le.d)(Object(le.a)(se.a)),be=function(){var e=Object(le.e)(ge,ve);return{store:e,persistor:Object(pe.b)(e)}}(),he=be.store,Oe=be.persistor;c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(A.a,{i18n:d},i.a.createElement(l.a,{store:he},i.a.createElement(f.a,{loading:i.a.createElement(Ae,null),persistor:Oe},i.a.createElement(ie,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,a,n){e.exports=n.p+"static/media/default-game-thumbnail.44ec242a.png"},43:function(e,a,n){e.exports={header:"styles_header__2dQfB",content:"styles_content__2uIjh",logo:"styles_logo__2I-b3"}},74:function(e,a,n){e.exports={link:"styles_link__1Ff6I"}},76:function(e,a){e.exports="data:image/png;base64,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"},77:function(e,a,n){e.exports={footer:"styles_footer__2_MVF"}},81:function(e,a,n){e.exports={loader:"styles_loader__2EVyG",load7:"styles_load7__2K-5t"}},84:function(e){e.exports=JSON.parse('[{"id":0,"name":" Player Unknowns Battleground  Player Unknowns Battleground","region":"US","createdOn":1559807714999,"scheduledOn":1599978049221,"price":"Price info of Test Whatsapp","csv":"Some CSV link for Whatsapp","report":"Some report link for Whatsapp","image_url":"","pricing":{"month_1":"100.00","month_6":"500.00","month_12":"900.00"}},{"id":1,"name":"Test Whatsapp","region":"US","createdOn":1559807714999,"scheduledOn":1599978049221,"price":"Price info of Test Whatsapp","csv":"Some CSV link for Whatsapp","report":"Some report link for Whatsapp","image_url":"","pricing":{"month_1":"100.00","month_6":"500.00","month_12":"900.00"}},{"id":2,"name":"Test Whatsapp","region":"US","createdOn":1559807714999,"scheduledOn":1599978049221,"price":"Price info of Test Whatsapp","csv":"Some CSV link for Whatsapp","report":"Some report link for Whatsapp","image_url":"","pricing":{"month_1":"100.00","month_6":"500.00","month_12":"900.00"}}]')},87:function(e,a,n){e.exports=n(182)},98:function(e,a,n){}},[[87,1,2]]]);
//# sourceMappingURL=main.f3020abf.chunk.js.map