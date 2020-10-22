(this["webpackJsonpclient-react-redux"]=this["webpackJsonpclient-react-redux"]||[]).push([[0],{109:function(e,a,t){e.exports=t(161)},110:function(e,a,t){},137:function(e,a){},155:function(e,a,t){},156:function(e,a,t){},158:function(e,a,t){},159:function(e,a,t){},161:function(e,a,t){"use strict";t.r(a);t(110);var n=t(16),r=t(65),c=t(66),s=t.n(c),l=t(87),i=t(29),o=t(88),m=t.n(o),u=t(57),d=t.n(u),g=m()();g.on("connect",(function(){d()("chat:socket")("Connected.")})),g.on("disconnect",(function(){d()("chat:socket")("Disconnected.")})),g.on("chat",(function(e){d()("chat:socket")("Received message:",e)}));var p=g,E=(Object(i.createAsyncThunk)("chat/loadAllMessages",Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))),Object(i.createAsyncThunk)("chat/sendMessage",(function(e){p.emit("chat",e)}))),f=Object(i.createSlice)({name:"chat",initialState:{messages:[]},reducers:{truncateMessages:function(e){e.messages.length=0},sendMessage:function(e,a){var t=a.payload,n=t.time,r=t.sender,c=t.text;e.messages.push({time:n,sender:r,text:c,status:"sent"})},receiveMessage:function(e,a){var t=a.payload,n=t.time,r=t.sender,c=t.text;e.messages.push({time:n,sender:r,text:c,status:"received"})}},extraReducers:Object(n.a)({},E.pending,(function(e,a){var t=a.meta.arg;e.messages.push(Object(r.a)(Object(r.a)({},t),{},{status:"pending"}))}))}),h=f.actions,v=(h.truncateMessages,h.sendMessage,h.receiveMessage),b=f.reducer,_=t(0),y=t.n(_),j=t(8),k=t.n(j),N=t(33),O=t(15),C=(t(155),t(209)),M=t(193),w=t(194),S=t(195),x=t(196),A=t(197),R=t(198),D=(t(156),t(53)),T=function(e){var a,t=e.chatData,n=Object(_.useState)(""),r=Object(O.a)(n,2),c=r[0],s=r[1],l=Object(_.useRef)(null),i=[];if(0===Object.keys(t).length)return y.a.createElement("div",{className:"chat"});var o,m,u,d,g=D.filter((function(e){return e.id===t.id}));return g.length&&(a=g[0]).chat&&(i=a.chat),y.a.createElement("div",{className:"chat"},y.a.createElement("div",{className:"chat__header"},y.a.createElement(C.a,{src:null!==(o=null===(m=a)||void 0===m?void 0:m.picture)&&void 0!==o?o:null}),y.a.createElement("div",{className:"chat__headerInfo"},y.a.createElement("h3",null,null!==(u=null===(d=a)||void 0===d?void 0:d.name)&&void 0!==u?u:"Room name")),y.a.createElement("div",{className:"chat__headerRight"},y.a.createElement(M.a,null,y.a.createElement(w.a,null)),y.a.createElement(M.a,null,y.a.createElement(S.a,null)))),y.a.createElement("div",{className:"chat__body"},i.map((function(e,a){var t="Me"===e.from?"chat_message chat_reciever":"chat_message";return t+=e.typing?" chat__typing":"",y.a.createElement("p",{key:a,className:t},y.a.createElement("span",{className:"chat__name"},e.from),e.message,y.a.createElement("span",{className:"chat__timespan"},(new Date).toLocaleString("he-IL")))})),y.a.createElement("div",{ref:l})),y.a.createElement("div",{className:"chat__footer"},y.a.createElement(M.a,null,y.a.createElement(x.a,null)),y.a.createElement(M.a,null,y.a.createElement(A.a,null)),y.a.createElement("form",null,y.a.createElement("input",{onChange:function(e){return s(e.target.value)},value:c,placeholder:"Type a message",type:"text"}),y.a.createElement("button",{onClick:function(e){if(e.preventDefault(),i){var a={message:c,date:"19-09-20 19:32",from:"Me"};i.push(a),s(""),setTimeout((function(){l.current.scrollIntoView()}),10)}},type:"submit"},"Send a message")),y.a.createElement(M.a,null,y.a.createElement(R.a,null))))},B=t(2),I=t(10);var U=Object(N.b)((function(e){return{username:e.user.name}}),null)((function(e){var a=e.username,t=e.component,n=Object(B.a)(e,["username","component"]);return y.a.createElement(I.b,Object.assign({},n,{render:function(e){return a?y.a.createElement(t,e):y.a.createElement(I.a,{to:"/login"})}}))})),J=(t(158),t(159),function(e){var a,t,n,r;return e.typing&&(r=y.a.createElement("div",{className:"sidebarChat__typing"},"Typing...")),y.a.createElement("div",{className:"sidebarChat",onClick:function(){e.onSideBarClicked(e)}},y.a.createElement(C.a,{src:null!==(a=e.picture)&&void 0!==a?a:void 0}),y.a.createElement("div",{className:"sidebarChat__info"},y.a.createElement("h2",null,null!==(t=e.name)&&void 0!==t?t:"Room Name"),y.a.createElement("p",null,null!==(n=e.lastMessage)&&void 0!==n?n:"Room Name"),r))}),L=t(93),P=t.n(L),W=t(94),Y=t.n(W),q=t(95),F=t.n(q),G=t(97),K=t.n(G),V=t(206),$=t(201),z=t(200),H=t(199),Q=t(208),X=t(207),Z=function(e){var a=e.onSideBarClicked,t=y.a.useState(!1),n=Object(O.a)(t,2),r=n[0],c=n[1],s=y.a.useRef(null),l=function(e){s.current&&s.current.contains(e.target)||c(!1)},i=function(e){a(e)};function o(e){"Tab"===e.key&&(e.preventDefault(),c(!1))}var m=D.map((function(e,a){return y.a.createElement(J,{id:e.id,key:a,typing:e.typing,picture:e.picture,name:e.name,lastMessage:e.lastMessage,onSideBarClicked:i})})),u=y.a.useRef(r);return y.a.useEffect((function(){!0===u.current&&!1===r&&s.current.focus(),u.current=r}),[r]),y.a.createElement("div",{className:"sidebar"},y.a.createElement("div",{className:"sidebar__header"},y.a.createElement(C.a,{src:"Assets/me.png"}),y.a.createElement("div",{className:"sidebar__headerRight"},y.a.createElement(M.a,{title:"Status"},y.a.createElement(P.a,null)),y.a.createElement(M.a,{title:"New Chat"},y.a.createElement(Y.a,null)),y.a.createElement(M.a,{title:"Menu",ref:s,"aria-controls":r?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){c((function(e){return!e}))}},y.a.createElement(F.a,null)),y.a.createElement(H.a,{open:r,anchorEl:s.current,role:void 0,transition:!0,disablePortal:!0},(function(e){var a=e.TransitionProps,t=e.placement;return y.a.createElement(V.a,Object.assign({},a,{style:{transformOrigin:"bottom"===t?"center top":"center bottom"}}),y.a.createElement(z.a,null,y.a.createElement($.a,{onClickAway:l},y.a.createElement(X.a,{autoFocusItem:r,id:"menu-list-grow",onKeyDown:o},y.a.createElement(Q.a,{onClick:l},"New Group"),y.a.createElement(Q.a,{onClick:l},"Create a room"),y.a.createElement(Q.a,{onClick:l},"Profile"),y.a.createElement(Q.a,{onClick:l},"Archived"),y.a.createElement(Q.a,{onClick:l},"Starred"),y.a.createElement(Q.a,{onClick:l},"Setting"),y.a.createElement(Q.a,{onClick:l},"Log out")))))})))),y.a.createElement("div",{className:"sidebar__search"},y.a.createElement("div",{className:"sidebar__searchContainer"},y.a.createElement(K.a,null),y.a.createElement("input",{type:"text",placeholder:"Search or start new chat"}))),y.a.createElement("div",{className:"sidebar__chats"},m))},ee=t(202),ae=t(203),te=t(205),ne=t(204),re=(0,t(29).createSlice)({name:"user",initialState:{name:""},reducers:{setUser:function(e,a){var t=a.payload;e.name=t}}}),ce=re.actions.setUser,se=re.reducer,le=Object(ee.a)((function(e){return{root:{margin:e.spacing(2)}}})),ie=Object(N.b)(null,{setUser:ce})((function(e){var a=e.setUser,t=Object(_.useState)(""),n=Object(O.a)(t,2),r=n[0],c=n[1],s=le(),l=Object(I.g)();return y.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(r),l.push("/")}},y.a.createElement(ae.a,{container:!0,justify:"center"},y.a.createElement(te.a,{variant:"outlined",required:!0,label:"Enter your name",name:"username",value:r,onChange:function(e){var a=e.target.value;c(a)},classes:s}),y.a.createElement(ne.a,{variant:"contained",type:"submit",classes:s},"Enter Chat")))})),oe=t(51);function me(){var e=Object(_.useState)({}),a=Object(O.a)(e,2),t=a[0],n=a[1];return y.a.createElement("div",{className:"app"},y.a.createElement("div",{className:"app__body"},y.a.createElement(Z,{onSideBarClicked:function(e){(null===e||void 0===e?void 0:e.id)&&n(e)}}),y.a.createElement(T,{chatData:t})))}var ue=function(){return y.a.createElement(oe.a,null,y.a.createElement(I.d,null,y.a.createElement(I.b,{exact:!0,path:"/login",component:ie}),y.a.createElement(U,{exact:!0,path:"/",component:me})))},de=Object(i.configureStore)({reducer:{chat:b,user:se}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.on("chat",(function(e){de.dispatch(v(e))})),k.a.render(y.a.createElement(y.a.StrictMode,null,y.a.createElement(N.a,{store:de},y.a.createElement(ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},53:function(e){e.exports=JSON.parse('[{"id":1,"picture":"Assets/1.png","name":"\u05d0\u05d5\u05db\u05dc","lastMessage":"You were added"},{"id":2,"picture":"Assets/2.jpg","name":"\u05e2\u05d2\u05dc\u05d5\u05ea","lastMessage":"\u05d7\u05d7\u05d7\u05d7\u05d7\u05d7","typing":true,"chat":[{"message":"first message","date":"19-09-20 19:31","from":"Me"},{"message":"long message, long message, long message, long message...","date":"19-09-20 19:31","from":"someone"},{"message":"short message","date":"19-09-20 19:32","from":"someone"},{"message":"hello world","date":"19-09-20 19:32","from":"Me"},{"message":"Typing...","typing":true,"date":"19-09-20 19:32","from":"Me"}]},{"id":3,"picture":"Assets/3.jpg","name":"\u05e7\u05e4\u05d4 \u05d5\u05de\u05d0\u05e4\u05d4\u2615\ud83c\udf6a","lastMessage":"\u05d5\u05d5\u05d0\u05d9, \u05de\u05e2\u05e0\u05d9\u05d9\u05df \u05de\u05d4 \u05d9\u05d4\u05d9\u05d4 \u05d1\u05db\u05d9\u05e4\u05d5\u05e8 \ud83d\ude05"},{"id":4,"picture":"Assets/4.jpg","name":"\u05d1\u05d5\u05e7\u05e8\u05d4\u05de\u05d5\u05d1\u05d9\u05e5\u05f3 \ud83d\ude1b","lastMessage":"\u05d1\u05d5\u05e7\u05e8 \u05d8\u05d5\u05d1 \u05d5\u05d7\u05d2 \u05e9\u05de\u05d7 \u05d0\u05dc\u05de\u05d5\u05d2\u05d9\u2764"},{"id":5,"picture":"Assets/1.png","name":"\u05d0\u05d5\u05db\u05dc","lastMessage":"You were added"},{"id":6,"picture":"Assets/2.jpg","name":"\u05e2\u05d2\u05dc\u05d5\u05ea","lastMessage":"\u05d7\u05d7\u05d7\u05d7\u05d7\u05d7","typing":true}]')}},[[109,1,2]]]);
//# sourceMappingURL=main.e9dde01d.chunk.js.map