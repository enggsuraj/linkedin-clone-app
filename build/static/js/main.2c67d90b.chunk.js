(this["webpackJsonplinkedin-clone"]=this["webpackJsonplinkedin-clone"]||[]).push([[0],{103:function(e,t,s){},104:function(e,t,s){},105:function(e,t,s){},106:function(e,t,s){},107:function(e,t,s){},109:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),i=s(13),n=s.n(i),r=(s(89),s(22)),l=(s(95),s(27)),o=(s(96),s(69)),d=s.n(o),j=s(70),b=s.n(j),h=s(71),p=s.n(h),u=s(72),m=s.n(u),O=(s(97),s(3));var x=function(e){var t=e.Icon,s=e.title,a=e.color;return Object(O.jsxs)("div",{className:"inputOption",children:[Object(O.jsx)(t,{style:{color:a}}),Object(O.jsx)("h4",{children:s})]})},g=s(144),v=(s(99),s(65)),f=s.n(v),N=s(66),_=s.n(N),y=s(67),I=s.n(y),w=s(68),k=s.n(w),S=Object(a.forwardRef)((function(e,t){var s=e.name,a=e.description,c=e.message,i=e.photoUrl,n=e.postImage;return Object(O.jsxs)("div",{ref:t,className:"post",children:[Object(O.jsxs)("div",{className:"post_header",children:[Object(O.jsx)(g.a,{src:i}),Object(O.jsxs)("div",{className:"postInfo",children:[Object(O.jsx)("h2",{children:s}),Object(O.jsx)("p",{children:a})]})]}),Object(O.jsxs)("div",{className:"post_body",children:[Object(O.jsx)("p",{children:c}),Object(O.jsx)("img",{src:n,className:"postImage",alt:""})]}),Object(O.jsxs)("div",{className:"post_buttons",children:[Object(O.jsx)(x,{Icon:f.a,title:"Like",color:"gray"}),Object(O.jsx)(x,{Icon:_.a,title:"Comment",color:"gray"}),Object(O.jsx)(x,{Icon:I.a,title:"Share",color:"gray"}),Object(O.jsx)(x,{Icon:k.a,title:"Send",color:"gray"})]})]})})),U=s(26),C=U.a.initializeApp({apiKey:"AIzaSyAUpaB7HMHYkAGMaQBd6yI9kRa626Zs_nI",authDomain:"linkedin-clone-57f16.firebaseapp.com",projectId:"linkedin-clone-57f16",storageBucket:"linkedin-clone-57f16.appspot.com",messagingSenderId:"402559157796",appId:"1:402559157796:web:4f61ffd079a69ad4033ab1"}).firestore(),E=U.a.auth(),A=s(48),M=Object(A.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),B=M.actions,L=B.login,D=B.logout,F=function(e){return e.user.user},R=M.reducer,P=s(73);var H=function(){var e=Object(r.c)(F),t=Object(a.useState)(""),s=Object(l.a)(t,2),c=s[0],i=s[1],n=Object(a.useState)([]),o=Object(l.a)(n,2),j=o[0],h=o[1],u=Object(a.useState)(),g=Object(l.a)(u,2),v=g[0],f=g[1];return Object(a.useEffect)((function(){C.collection("posts").orderBy("timeStamp","desc").onSnapshot((function(e){return h(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(O.jsxs)("div",{className:"feed",children:[Object(O.jsxs)("div",{className:"feed_inputContainer",children:[Object(O.jsxs)("div",{className:"feed_input",children:[Object(O.jsx)(d.a,{}),Object(O.jsxs)("form",{children:[Object(O.jsx)("input",{value:c,onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Enter text"}),Object(O.jsx)("button",{onClick:function(t){t.preventDefault();var s=document.getElementById("image").files[0];if(void 0!==s){f(s.name);var a=U.a.storage().ref("images/"+v);a.put(s).then((function(e){console.log("Uploaded a blob or file!")}));var n=a.child("images/".concat(s.name)).put(s);n.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),e.state){case U.a.storage.TaskState.PAUSED:console.log("Upload is paused");break;case U.a.storage.TaskState.RUNNING:console.log("Upload is running");break;default:console.log("Done")}}),(function(e){console.log(e)}),(function(){n.snapshot.ref.getDownloadURL().then((function(t){console.log("File available at",t),C.collection("posts").add({name:e.displayName,description:e.email,message:c,photoUrl:e.photoUrl||"",postImage:t,timeStamp:U.a.firestore.FieldValue.serverTimestamp()})}))}))}else console.log("Inside"),C.collection("posts").add({name:e.displayName,description:e.email,message:c,photoUrl:e.photoUrl||"",postImage:"",timeStamp:U.a.firestore.FieldValue.serverTimestamp()});i(""),document.getElementById("image").value=""},type:"submit",children:"Send"})]})]}),Object(O.jsxs)("div",{className:"feed_inputOption",children:[Object(O.jsx)("input",{id:"image",type:"file",accept:"image/*"}),Object(O.jsx)(x,{Icon:b.a,title:"Video",color:"#7E7A33E"}),Object(O.jsx)(x,{Icon:p.a,title:"Event",color:"#C0CBCD"}),Object(O.jsx)(x,{Icon:m.a,title:"Article",color:"#7FC15E"})]})]}),Object(O.jsx)(P.a,{children:j.map((function(e){var t=e.id,s=e.data,a=s.name,c=s.description,i=s.message,n=s.photoUrl,r=s.postImage;return Object(O.jsx)(S,{name:a,description:c,message:i,photoUrl:n,postImage:r},t)}))})]})},T=(s(103),s.p+"static/media/share.a5b283e4.svg"),W=s.p+"static/media/gold.703bcc33.svg",G=s.p+"static/media/bookmark.6326e38a.svg";var J=function(){var e=Object(r.c)(F);return Object(O.jsxs)("div",{className:"sidebar",children:[Object(O.jsxs)("div",{className:"sidebar__top",children:[Object(O.jsx)("img",{src:"https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",alt:""}),Object(O.jsx)(g.a,{className:"avatar",src:e.photoUrl}),Object(O.jsxs)("div",{className:"sidebar_description",children:[Object(O.jsx)("h4",{children:e.displayName}),Object(O.jsx)("p",{children:e.email})]}),Object(O.jsxs)("div",{className:"sidebar__stats",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"Connections"}),Object(O.jsx)("p",{children:"Grow your network"})]}),Object(O.jsx)("img",{className:"svgIcon",src:T,alt:""})]}),Object(O.jsx)("div",{className:"sidebar__stats",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"Access exclusive Insights"}),Object(O.jsxs)("div",{style:{display:"flex"},children:[Object(O.jsx)("img",{src:W,style:{width:"15px",paddingRight:"5px"},alt:""}),Object(O.jsx)("p",{children:"Try Premium 1 Month"})]})]})}),Object(O.jsx)("div",{className:"sidebar__stats",children:Object(O.jsx)("div",{children:Object(O.jsxs)("div",{style:{display:"flex"},children:[Object(O.jsx)("img",{alt:"",src:G,style:{width:"15px",paddingRight:"5px"}}),Object(O.jsx)("p",{children:"My Items"})]})})})]}),Object(O.jsxs)("div",{className:"sidebar__bottom",children:[Object(O.jsx)("p",{children:"Groups"}),Object(O.jsx)("p",{children:"Events"}),Object(O.jsx)("p",{children:"Followed Hashtags"})]})]})};s(104);var V=function(){return Object(O.jsxs)("div",{className:"right_container",children:[Object(O.jsxs)("div",{className:"rightsidebar",children:[Object(O.jsx)("h4",{children:" LinkedIn News "}),Object(O.jsxs)("div",{className:"rightsidebar__each",children:[Object(O.jsxs)("div",{className:"rightsidebar__des",children:[Object(O.jsx)("span",{className:"rightsidebar_span"}),Object(O.jsx)("p",{children:"Foreign SMEs eye Indian talent"})]}),Object(O.jsx)("p",{className:"rightsidebar__small",children:"2d ago . 31,88 readers"})]}),Object(O.jsxs)("div",{className:"rightsidebar__each",children:[Object(O.jsxs)("div",{className:"rightsidebar__des",children:[Object(O.jsx)("span",{className:"rightsidebar_span"}),Object(O.jsx)("p",{children:"Your Salary hike in 2021."})]}),Object(O.jsx)("p",{className:"rightsidebar__small",children:"1d ago . 11,216 readers"})]}),Object(O.jsxs)("div",{className:"rightsidebar__each",children:[Object(O.jsxs)("div",{className:"rightsidebar__des",children:[Object(O.jsx)("span",{className:"rightsidebar_span"}),Object(O.jsx)("p",{children:"The companies going all WFH"})]}),Object(O.jsx)("p",{className:"rightsidebar__small",children:"1d ago . 81,478 readers"})]}),Object(O.jsxs)("div",{className:"rightsidebar__each",children:[Object(O.jsxs)("div",{className:"rightsidebar__des",children:[Object(O.jsx)("span",{className:"rightsidebar_span"}),Object(O.jsx)("p",{children:"WhatsApp launch Desktop calls"})]}),Object(O.jsx)("p",{className:"rightsidebar__small",children:"1d ago . 4,700 readers"})]})]}),Object(O.jsx)("div",{className:"rightsidebar__bottom",children:Object(O.jsx)("img",{src:"https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg",alt:"Advertise on LinkedIn",border:"0"})})]})},Y=(s(105),s(74)),z=s.n(Y),q=s(75),K=s.n(q),Q=s(76),X=s.n(Q),Z=s(77),$=s.n(Z),ee=s(78),te=s.n(ee),se=s(79),ae=s.n(se);s(106);var ce=function(e){var t=e.avatar,s=e.Icon,a=e.title,c=e.onClick,i=Object(r.c)(F);return Object(O.jsxs)("div",{onClick:c,className:"headerOption",children:[s&&Object(O.jsx)(s,{className:"headerOption_icon"}),t&&Object(O.jsx)(g.a,{className:"headerOption_icon",src:null===i||void 0===i?void 0:i.photoUrl}),Object(O.jsx)("h3",{className:"headerOption_title",children:a})]})},ie=s(80),ne=s.n(ie);var re=function(){var e=Object(r.b)(),t=Object(r.c)(F);return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsxs)("div",{className:"header__left",children:[Object(O.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/174/174857.svg",alt:"logoss"}),Object(O.jsxs)("div",{className:"header__search",children:[Object(O.jsx)(z.a,{}),Object(O.jsx)("input",{placeholder:"Search",type:"text"})]})]}),Object(O.jsxs)("div",{className:"header__right",children:[Object(O.jsx)(ce,{Icon:K.a,title:"Home"}),Object(O.jsx)(ce,{Icon:X.a,title:"My Network"}),Object(O.jsx)(ce,{Icon:$.a,title:"Jobs"}),Object(O.jsx)(ce,{Icon:te.a,title:"Messaging"}),Object(O.jsx)(ce,{Icon:ae.a,title:"Notification"}),Object(O.jsx)(ce,{Icon:ne.a,title:"Work"}),Object(O.jsx)(g.a,{onClick:function(){e(D()),E.signOut()},className:"headerOption__svg",src:t.photoUrl,children:null===t||void 0===t?void 0:t.email[0]}),Object(O.jsx)("p",{className:"header__premium",children:"Try Premium Free for 1 Month"})]})]})},le=(s(107),s.p+"static/media/logo.a95afc06.png"),oe=s(143),de=s(81),je=s.n(de);var be=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)(""),n=Object(l.a)(i,2),o=n[0],d=n[1],j=Object(a.useState)(""),b=Object(l.a)(j,2),h=b[0],p=b[1],u=Object(a.useState)(""),m=Object(l.a)(u,2),x=m[0],g=m[1],v=Object(r.b)();return Object(O.jsxs)("div",{className:"login_container",children:[Object(O.jsx)("img",{src:le,alt:""}),Object(O.jsxs)("div",{className:"login",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{className:"login_title",children:"Sign In"}),Object(O.jsxs)("p",{children:["Stay updated on your professional world ",Object(O.jsx)("br",{}),"(Only read access, write access to particular users )"]})]}),Object(O.jsxs)("form",{children:[Object(O.jsx)(oe.a,{id:"outlined-search",label:"Full Name",type:"search",variant:"outlined",value:h,onChange:function(e){return p(e.target.value)}}),Object(O.jsx)(oe.a,{id:"outlined-search",label:"Profile URL",type:"search",variant:"outlined",value:x,onChange:function(e){return g(e.target.value)}}),Object(O.jsx)(oe.a,{id:"outlined-search",label:"Email",type:"search",variant:"outlined",value:s,onChange:function(e){return c(e.target.value)}}),Object(O.jsx)(oe.a,{id:"outlined-password-input",label:"Password",type:"password",value:o,onChange:function(e){return d(e.target.value)},autoComplete:"current-password",variant:"outlined",className:"inputfield"}),Object(O.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),E.signInWithEmailAndPassword(s,o).then((function(e){v(L({email:e.user.email,uid:e.user.uid,displayName:e.user.displayName,profileUrl:e.user.photoURL}))})).catch((function(e){return alert(e)}))},children:"Sign In"})]}),Object(O.jsxs)("div",{className:"join",children:[Object(O.jsx)("span",{children:"New to LinkedIn? \xa0"}),Object(O.jsx)("span",{className:"login_register",onClick:function(){if(!h)return alert("Please enter a full name");E.createUserWithEmailAndPassword(s,o).then((function(e){e.user.updateProfile({displayName:h,photoURL:x}).then((function(){v(L({email:e.user.email,uid:e.user.uid,displayName:h,photoURL:x}))}))})).catch((function(e){return alert(e)}))},children:"Join Now"})]})]}),Object(O.jsxs)("div",{className:"bottom",children:[Object(O.jsx)("p",{children:"LinkedIn Clone For Learnig purpose Only."}),Object(O.jsxs)("p",{children:["Made with \ud83d\udcbb and \u2615 by"," ",Object(O.jsx)("a",{href:"https://link.blogtheorem.com/",children:"blogtheorem"})]}),Object(O.jsx)("div",{className:"bottom_github",children:Object(O.jsx)("a",{href:"https://github.com/enggsuraj/linkedin-clone-app",target:"_blank",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:"Project Github Code"}),Object(O.jsx)(je.a,{})]})})})]})]})};var he=function(){var e=Object(r.c)(F),t=Object(r.b)();return Object(a.useEffect)((function(){E.onAuthStateChanged((function(e){t(e?L({email:e.email,uid:e.uid,displayName:e.displayName,photoUrl:e.photoURL}):D())}))}),[t]),Object(O.jsx)("div",{className:"app",children:e?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(re,{}),Object(O.jsxs)("div",{className:"app_body",children:[Object(O.jsx)(J,{}),Object(O.jsx)(H,{}),Object(O.jsx)(V,{})]})]}):Object(O.jsx)(be,{})})},pe=Object(A.a)({reducer:{user:R}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(r.a,{store:pe,children:Object(O.jsx)(he,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},89:function(e,t,s){},95:function(e,t,s){},96:function(e,t,s){},97:function(e,t,s){},99:function(e,t,s){}},[[109,1,2]]]);
//# sourceMappingURL=main.2c67d90b.chunk.js.map