(function(){"use strict";var e={9149:function(e,n,t){var a=t(5130),o=t(3367),s=t(6768);function r(e,n){const t=(0,s.g2)("RouterView");return(0,s.uX)(),(0,s.Wv)(t)}var l=t(1241);const u={},i=(0,l.A)(u,[["render",r]]);var c=i,d=(t(4114),t(144)),p=t(4232),v=t(3405);const m=(0,v.Wp)({apiKey:"AIzaSyCaGP-ADlaVgOGXoyoePebFimn7Xy7MsWw",authDomain:"project-af0f5.firebaseapp.com",databaseURL:"https://project-af0f5-default-rtdb.europe-west1.firebasedatabase.app",projectId:"project-af0f5",storageBucket:"project-af0f5.appspot.com",messagingSenderId:"82817780469",appId:"1:82817780469:web:45c3cb6de62a9f279753bc"});var g=t(9675);const f=(0,o.nY)("auth",(()=>{let e=(0,d.KR)({});function n(n){e.value=n}return{user:e,setUser:n}}));var k=t(1387);const h={class:"container"},y=(0,s.Lk)("div",{class:"navbar"},[(0,s.Lk)("img",{src:"back.png",width:"30px"})],-1),b={class:"mainContent"},L=(0,s.Lk)("h2",null,"Uzupełnij swój profil",-1),w=(0,s.Lk)("span",{id:"nickname-error",class:"error-msg"},null,-1),C=(0,s.Lk)("option",{value:"",selected:"",disabled:"",hidden:""},"Kraj pochodzenia",-1),_=["value"],R=(0,s.Lk)("option",{value:"",selected:"",disabled:"",hidden:""},"Kraj kontaktowy",-1),x=["value"],E=(0,s.Lk)("option",{value:"",selected:"",disabled:"",hidden:""},"Język",-1),K=["value"],I=(0,s.Lk)("option",{value:"",selected:"",disabled:"",hidden:""},"Zainteresowania",-1),X=["value"],j=(0,s.Lk)("button",{class:"btn btn-primary",type:"submit"},"Uzupełnij",-1);var M={__name:"CompleteProfilePage",setup(e){const n=(0,d.KR)(""),t=(0,d.KR)(""),o=(0,d.KR)(""),r=(0,d.KR)(""),l=(0,d.KR)(""),u=(0,d.KR)(""),i=(0,d.KR)("");let c=(0,d.KR)([]),v=(0,d.KR)([]),M=(0,d.KR)([]);const U=(0,k.rd)(),S=f();function D(){console.log(o.value.value);const e=o.value.value,n=c.value.find((n=>n.name===e));M.value=n?n.languages:[],r.value.value=""}function P(){const e=(0,g.aU)(m),a=(0,g.H9)(e,"users",S.user.uid),s={birthdate:l.value.value,contactCountry:o.value.value,country:t.value.value,email:S.user.email,interests:u.value.value,language:r.value.value,moreInfo:i.value.value,nickname:n.value.value};(0,g.BN)(a,s),S.setUser({uid:S.user.uid,...s}),U.push("/home")}return(0,s.sV)((()=>{const e=(0,g.aU)(m),a=(0,g.rJ)(e,"languages");(0,g.GG)(a).then((e=>{e.forEach((e=>{c.value.push({name:e.id,...e.data()})})),setTimeout((()=>{S.user.country&&(t.value.value=c.value.find((e=>e.name===S.user.country)).name),S.user.contactCountry&&(o.value.value=c.value.find((e=>e.name===S.user.contactCountry)).name),D(),S.user.language&&(r.value.value=S.user.language)}),1e3)}));const s=(0,g.rJ)(e,"hobbies");(0,g.GG)(s).then((e=>{e.forEach((e=>{v.value.push(e.id)})),setTimeout((()=>{S.user.interests&&(u.value.value=S.user.interests)}),1e3)})),S.user.birthdate&&(l.value.value=S.user.birthdate),S.user.nickname&&(n.value.value=S.user.nickname),S.user.moreInfo&&(i.value.value=S.user.moreInfo)})),(e,m)=>((0,s.uX)(),(0,s.CE)("div",h,[y,(0,s.Lk)("div",b,[L,(0,s.Lk)("form",{onSubmit:(0,a.D$)(P,["prevent"])},[(0,s.Lk)("input",{class:"form-control",type:"text",ref_key:"nickname",ref:n,placeholder:"Nick",required:""},null,512),w,(0,s.Lk)("select",{class:"form-control",ref_key:"yourCountry",ref:t},[C,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,d.R1)(c),((e,n)=>((0,s.uX)(),(0,s.CE)("option",{key:n,value:e.name},(0,p.v_)(e.name),9,_)))),128))],512),(0,s.Lk)("select",{class:"form-control",ref_key:"contactCountry",ref:o,onChange:D},[R,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,d.R1)(c),((e,n)=>((0,s.uX)(),(0,s.CE)("option",{key:n,value:e.name},(0,p.v_)(e.name),9,x)))),128))],544),(0,s.Lk)("select",{class:"form-control",ref_key:"language",ref:r},[E,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,d.R1)(M),((e,n)=>((0,s.uX)(),(0,s.CE)("option",{key:n,value:e},(0,p.v_)(e),9,K)))),128))],512),(0,s.Lk)("input",{class:"form-control",type:"date",ref_key:"birthdate",ref:l,required:""},null,512),(0,s.Lk)("select",{class:"form-control",ref_key:"selectedHobbies",ref:u},[I,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,d.R1)(v),((e,n)=>((0,s.uX)(),(0,s.CE)("option",{key:n,value:e},(0,p.v_)(e),9,X)))),128))],512),(0,s.Lk)("textarea",{class:"form-control",ref_key:"moreInfo",ref:i,placeholder:"Więcej informacji"},null,512),j],32)])]))}};const U=M;var S=U;const D={class:"container"},P=(0,s.Lk)("header",{class:"navbar"},[(0,s.Lk)("div",{class:"width: 30px"}),(0,s.Lk)("span",{class:"headerText"}," Strona główna "),(0,s.Lk)("div",{class:"width: 30px"})],-1),O={class:"mainContent"},F=(0,s.Lk)("img",{src:"my_account_image.png",width:"30px"},null,-1),T=(0,s.Lk)("h2",null,"Moje konto",-1),G=(0,s.Lk)("img",{src:"messages_image.png",width:"30px"},null,-1),A=(0,s.Lk)("h2",null,"Wiadomości",-1),H=(0,s.Lk)("img",{src:"new_friends_image.png",width:"30px"},null,-1),J=(0,s.Lk)("h2",null,"Propozycje nowych kontaktów",-1);var z={__name:"HomePage",setup(e){const n=f();return(e,t)=>{const a=(0,s.g2)("RouterLink");return(0,s.uX)(),(0,s.CE)("div",D,[P,(0,s.Lk)("div",O,[(0,s.Lk)("h2",null,"Witaj, "+(0,p.v_)((0,d.R1)(n).user.nickname)+"!",1),(0,s.bF)(a,{to:"/completeProfile",style:{"text-decoration":"none",color:"inherit"}},{default:(0,s.k6)((()=>[F,T])),_:1}),(0,s.bF)(a,{to:"/messagesList",style:{"text-decoration":"none",color:"inherit"}},{default:(0,s.k6)((()=>[G,A])),_:1}),(0,s.bF)(a,{to:"/newContacts",style:{"text-decoration":"none",color:"inherit"}},{default:(0,s.k6)((()=>[H,J])),_:1})])])}}};const W=z;var $=W,B=t(2621);const q={class:"container"},N={class:"mainContent"},Q=(0,s.Lk)("h1",null,"Logowanie",-1),V={key:0,style:{color:"red"}};var Z={__name:"LoginPage",setup(e){const n=(0,d.KR)(""),t=(0,d.KR)(""),a=(0,d.KR)(!1),o=(0,d.KR)(""),r=(0,k.rd)();function l(){r.go(-1)}function u(){const e=(0,B.xI)(m);(0,B.x9)(e,n.value.value,t.value.value).then((({user:e})=>{const n=(0,g.aU)(m),t=(0,g.H9)(n,"users",e.uid);(0,g.x7)(t).then((n=>{const t=f();if(n.exists()){const a={uid:e.uid,...n.data()};t.setUser(a),r.push("/home")}else{const n={uid:e.uid,email:e.email};t.setUser(n),r.push("/completeProfile")}}))}))}return(e,r)=>((0,s.uX)(),(0,s.CE)("div",q,[(0,s.Lk)("div",{class:"navbar"},[(0,s.Lk)("img",{onClick:l,src:"back.png",width:"30px"})]),(0,s.Lk)("div",N,[Q,(0,s.Lk)("input",{class:"form-control",type:"text",ref_key:"email",ref:n,placeholder:"E-mail"},null,512),(0,s.Lk)("input",{class:"form-control",type:"password",ref_key:"password",ref:t,placeholder:"Hasło"},null,512),(0,s.Lk)("button",{class:"btn btn-primary",onClick:u},"Zaloguj"),a.value?((0,s.uX)(),(0,s.CE)("p",V,(0,p.v_)(o.value),1)):(0,s.Q3)("",!0)])]))}};const Y=Z;var ee=Y;const ne={class:"container"},te=(0,s.Lk)("span",{class:"navbarText"},"Wiadomości",-1),ae=(0,s.Lk)("div",{style:{width:"30px"}},null,-1),oe=["onClick"];var se={__name:"MessagesListPage",setup(e){let n=(0,d.KR)([]);const t=(0,k.rd)();function a(e){t.push(`/messages/${e}`)}function o(){t.go(-1)}return(0,s.sV)((()=>{const e=(0,g.aU)(m),t=(0,g.rJ)(e,"messages"),a=f(),o=(0,g.P)(t,(0,g.or)((0,g._M)("from","==",a.user.uid),(0,g._M)("to","==",a.user.uid))),s=[];(0,g.GG)(o).then((t=>{t.forEach((e=>{let n=e.data();n.from==a.user.uid||s.includes(n.from)||s.push(n.from),n.to==a.user.uid||s.includes(n.to)||s.push(n.to)})),s.forEach((t=>{const a=(0,g.H9)(e,"users",t);(0,g.x7)(a).then((e=>{e.exists()&&n.value.push({uid:t,nickname:e.data().nickname})}))})),console.log(n)}))})),(e,t)=>((0,s.uX)(),(0,s.CE)("div",ne,[(0,s.Lk)("header",{class:"navbar"},[(0,s.Lk)("img",{onClick:o,src:"back.png",width:"30px"}),te,ae]),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,d.R1)(n),(e=>((0,s.uX)(),(0,s.CE)("div",{onClick:n=>a(e.uid),class:"nick",key:e.uid},[(0,s.Lk)("h2",null,(0,p.v_)(e.nickname),1)],8,oe)))),128))]))}};const re=se;var le=re;const ue={class:"sent"};var ie={__name:"SentTextMessage",props:["content"],setup(e){return(n,t)=>((0,s.uX)(),(0,s.CE)("span",ue,(0,p.v_)(e.content),1))}};const ce=ie;var de=ce;const pe={class:"received"};var ve={__name:"ReceivedTextMessage",props:["content"],setup(e){return(n,t)=>((0,s.uX)(),(0,s.CE)("span",pe,(0,p.v_)(e.content),1))}};const me=ve;var ge=me,fe=t(7844);const ke=["src"];var he={__name:"SentImageMessage",props:["content"],setup(e){const n=e,t=(0,d.KR)(""),a=(0,fe.c7)(m);return(0,fe.qk)((0,fe.KR)(a,`images/${n.content}`)).then((e=>{t.value=e})),(e,n)=>((0,s.uX)(),(0,s.CE)("img",{class:"sent",src:t.value},null,8,ke))}};const ye=he;var be=ye;const Le=["src"];var we={__name:"ReceivedImageMessage",props:["content"],setup(e){const n=e,t=(0,d.KR)(""),a=(0,fe.c7)(m);return(0,fe.qk)((0,fe.KR)(a,`images/${n.content}`)).then((e=>{t.value=e})),(e,n)=>((0,s.uX)(),(0,s.CE)("img",{class:"received",src:t.value},null,8,Le))}};const Ce=we;var _e=Ce;const Re={key:0,src:"play.png",width:"30px"},xe={key:1,src:"pause.png",width:"30px"};var Ee={__name:"SentAudioMessage",props:["content"],setup(e){const n=e;let t=new Audio,a=(0,d.KR)(!0),o=(0,d.KR)(0),r=(0,d.KR)(new Date(1e3*o.value).toISOString().slice(14,19));const l=(0,d.KR)(""),u=(0,fe.c7)(m);function i(){t.paused?t.play():t.pause()}return(0,fe.qk)((0,fe.KR)(u,`audio/${n.content}`)).then((e=>{l.value=e,t=new Audio(l.value),t.ontimeupdate=()=>{o.value=parseInt(t.currentTime),r.value=new Date(1e3*o.value).toISOString().slice(14,19)},t.onpause=()=>{a.value=!0},t.onplay=()=>{a.value=!1}})),(e,n)=>((0,s.uX)(),(0,s.CE)("div",{onClick:i,class:"sent"},[(0,d.R1)(a)?((0,s.uX)(),(0,s.CE)("img",Re)):(0,s.Q3)("",!0),(0,d.R1)(a)?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("img",xe)),(0,s.Lk)("span",null,(0,p.v_)((0,d.R1)(r)),1)]))}};const Ke=Ee;var Ie=Ke;const Xe={key:0,src:"play.png",width:"30px"},je={key:1,src:"pause.png",width:"30px"};var Me={__name:"ReceivedAudioMessage",props:["content"],setup(e){const n=e;let t=new Audio,a=(0,d.KR)(!0),o=(0,d.KR)(0),r=(0,d.KR)(new Date(1e3*o.value).toISOString().slice(14,19));const l=(0,d.KR)(""),u=(0,fe.c7)(m);function i(){t.paused?t.play():t.pause()}return(0,fe.qk)((0,fe.KR)(u,`audio/${n.content}`)).then((e=>{l.value=e,t=new Audio(l.value),t.ontimeupdate=()=>{o.value=parseInt(t.currentTime),r.value=new Date(1e3*o.value).toISOString().slice(14,19)},t.onpause=()=>{a.value=!0},t.onplay=()=>{a.value=!1}})),(e,n)=>((0,s.uX)(),(0,s.CE)("div",{onClick:i,class:"received"},[(0,d.R1)(a)?((0,s.uX)(),(0,s.CE)("img",Xe)):(0,s.Q3)("",!0),(0,d.R1)(a)?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("img",je)),(0,s.Lk)("span",null,(0,p.v_)((0,d.R1)(r)),1)]))}};const Ue=Me;var Se=Ue;const De={class:"container"},Pe={class:"navbar"},Oe={class:"headerText"},Fe=(0,s.Lk)("div",{style:{width:"30px"}},null,-1),Te={class:"messagesContent"},Ge={for:"photoUpload"},Ae=(0,s.Lk)("img",{src:"images.png",width:"30px"},null,-1),He=(0,s.Lk)("img",{id:"stopRecording",src:"stop.png",width:"30px"},null,-1),Je=(0,s.Lk)("img",{id:"deleteRecording",src:"trashcan.png",width:"30px"},null,-1),ze=(0,s.Lk)("img",{id:"sendAudioMessage",src:"send.png",width:"30px"},null,-1);var We={__name:"MessagesPage",setup(e){const n=(0,k.lq)(),t=f(),a=(0,k.rd)();let o=(0,d.KR)(""),r=(0,d.KR)(""),l=(0,d.KR)([]),u=(0,d.KR)([]),i=!1,c=!0,v=(0,d.KR)(0);function h(){a.go(-1)}function y(e){let a=e.target.files[0];const o=crypto.randomUUID(),s=(0,fe.c7)(m),r=(0,fe.KR)(s,`images/${o}`);(0,fe.D)(r,a).then((()=>{const e=(0,g.aU)(m),a=(0,g.rJ)(e,"messages"),s={from:t.user.uid,to:n.params.uid,type:"image",timestamp:g.Dc.fromDate(new Date(Date.now())),content:o};(0,g.gS)(a,s).then((()=>{L()}))})),console.log(a)}function b(){if(navigator.mediaDevices.getUserMedia){i=!0;const e=document.getElementById("startRecording"),a=document.getElementById("stopRecording"),s=document.getElementById("deleteRecording"),r=document.getElementById("sendMessage"),l=document.getElementById("sendAudioMessage"),u={audio:!0};navigator.mediaDevices.getUserMedia(u).then((u=>{let c=[];const d=new MediaRecorder(u);d.ondataavailable=e=>{c.push(e.data)},v.value=0,o.value.value=new Date(1e3*v.value).toISOString().slice(14,19),d.start();var p=setInterval((()=>{v.value++,console.log(o.value),o.value.value=new Date(1e3*v.value).toISOString().slice(14,19)}),1e3);r.style.display="none",l.style.display="block",e.style.display="none",a.style.display="block",a.onclick=()=>{d.stop(),clearInterval(p),console.log("stop clicked"),a.style.display="none",s.style.display="block",s.onclick=()=>{c=[],v.value=0,o.value.value="",r.style.display="block",l.style.display="none",e.style.display="block",s.style.display="none",a.style.display="none",u.getTracks().forEach((e=>e.stop())),i=!1}},d.onstop=()=>{console.log("onstop event"),l.onclick=()=>{console.log("send audio click");const d=new Blob(c,{type:"audio/ogg; codecs=opus"}),p=crypto.randomUUID(),f=(0,fe.c7)(m),k=(0,fe.KR)(f,`audio/${p}`);(0,fe.D)(k,d).then((()=>{const c=(0,g.aU)(m),d=(0,g.rJ)(c,"messages"),f={from:t.user.uid,to:n.params.uid,type:"audio",timestamp:g.Dc.fromDate(new Date(Date.now())),content:p};(0,g.gS)(d,f).then((()=>{L(),v.value=0,o.value.value="",r.style.display="block",l.style.display="none",e.style.display="block",a.style.display="none",s.style.display="none",u.getTracks().forEach((e=>e.stop())),i=!1}))}))}}}))}}function L(){const e=(0,g.aU)(m),a=(0,g.rJ)(e,"messages"),o=(0,g.H9)(e,"users",n.params.uid);l.value=[],(0,g.x7)(o).then((e=>{e.exists()&&(r.value=e.data().nickname,console.log(r.value))}));const s=(0,g.P)(a,(0,g.or)((0,g.Uo)((0,g._M)("from","==",t.user.uid),(0,g._M)("to","==",n.params.uid)),(0,g.Uo)((0,g._M)("to","==",t.user.uid),(0,g._M)("from","==",n.params.uid))),(0,g.My)("timestamp","desc"));(0,g.GG)(s).then((e=>{e.forEach((e=>{let n=e.data();l.value.push({id:e.id,...n})})),console.log(l.value),l.value.forEach((e=>{const n=e.id,a=e.type,o=e.from===t.user.uid,s=e.content;if(!u.value.map((e=>e.id)).includes(n))if(c)switch(a){case"text":o?u.value.push({id:n,name:de,content:s}):u.value.push({id:n,name:ge,content:s});break;case"image":o?u.value.push({id:n,name:be,content:s}):u.value.push({id:n,name:_e,content:s});break;case"audio":o?u.value.push({id:n,name:Ie,content:s}):u.value.push({id:n,name:Se,content:s});break}else switch(a){case"text":o?u.value.unshift({id:n,name:de,content:s}):u.value.unshift({id:n,name:ge,content:s});break;case"image":o?u.value.unshift({id:n,name:be,content:s}):u.value.unshift({id:n,name:_e,content:s});break;case"audio":o?u.value.unshift({id:n,name:Ie,content:s}):u.value.unshift({id:n,name:Se,content:s});break}})),c&&(c=!c)}))}function w(){if(!i){const e=(0,g.aU)(m),a=(0,g.rJ)(e,"messages"),s={from:t.user.uid,to:n.params.uid,type:"text",timestamp:g.Dc.fromDate(new Date(Date.now())),content:o.value.value};(0,g.gS)(a,s).then((()=>{L(),o.value.value=""}))}}return(0,s.sV)((()=>{L()})),(e,n)=>((0,s.uX)(),(0,s.CE)("div",De,[(0,s.Lk)("header",Pe,[(0,s.Lk)("img",{onClick:h,src:"back.png",width:"30px"}),(0,s.Lk)("span",Oe,(0,p.v_)((0,d.R1)(r)),1),Fe]),(0,s.Lk)("div",Te,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,d.R1)(u),(e=>((0,s.uX)(),(0,s.Wv)((0,s.$y)(e.name),{key:e.id,content:e.content},null,8,["content"])))),128))]),(0,s.Lk)("footer",null,[(0,s.Lk)("label",Ge,[(0,s.Lk)("input",{id:"photoUpload",type:"file",accept:"image/png,image/jpeg",onChange:y},null,32),Ae]),(0,s.Lk)("img",{id:"startRecording",onClick:b,src:"mic.png",width:"30px"}),He,Je,(0,s.Lk)("input",{class:"form-control",ref_key:"textContent",ref:o,type:"text"},null,512),(0,s.Lk)("img",{id:"sendMessage",onClick:w,src:"send.png",width:"30px"}),ze])]))}};const $e=We;var Be=$e;const qe={class:"container"},Ne=(0,s.Lk)("span",{class:"headerText"},"Nowi znajomi",-1),Qe=(0,s.Lk)("div",{style:{width:"30px"}},null,-1),Ve={class:"content"},Ze=["onClick"];var Ye={__name:"NewContactsPage",setup(e){const n=(0,k.rd)(),t=f();let a=(0,d.KR)([]);function o(){n.go(-1)}function r(e){n.push(`/messages/${e}`)}return(0,s.sV)((()=>{const e=(0,g.aU)(m),n=(0,g.rJ)(e,"users"),o=(0,g.rJ)(e,"messages"),s=(0,g.P)(n,(0,g._M)("country","==",t.user.contactCountry),(0,g._M)("interests","==",t.user.interests));let r=[];(0,g.GG)(s).then((n=>{n.forEach((e=>{r.push(e.id)}));const s=[],l=(0,g.P)(o,(0,g.or)((0,g._M)("from","==",t.user.uid),(0,g._M)("to","==",t.user.uid)));(0,g.GG)(l).then((n=>{n.forEach((e=>{let n=e.data();n.from==t.user.uid||s.includes(n.from)||s.push(n.from),n.to==t.user.uid||s.includes(n.to)||s.push(n.to)}));const o=[];console.log(s),console.log(r),r.forEach((e=>{s.includes(e)||o.push(e)})),console.log(o),o.forEach((n=>{const t=(0,g.H9)(e,"users",n);(0,g.x7)(t).then((e=>{e.exists()&&a.value.push({uid:n,nickname:e.data().nickname})}))}))}))}))})),(e,n)=>((0,s.uX)(),(0,s.CE)("div",qe,[(0,s.Lk)("header",{class:"navbar"},[(0,s.Lk)("img",{onClick:o,src:"back.png",width:"30px"}),Ne,Qe]),(0,s.Lk)("div",Ve,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,d.R1)(a),(e=>((0,s.uX)(),(0,s.CE)("div",{onClick:n=>r(e.uid),class:"nick",key:e.uid},[(0,s.Lk)("h2",null,(0,p.v_)(e.nickname),1)],8,Ze)))),128))])]))}};const en=Ye;var nn=en;const tn={class:"container"},an={class:"mainContent"},on=(0,s.Lk)("h1",null,"Rejestracja",-1),sn={key:0,style:{color:"red"}};var rn={__name:"RegisterPage",setup(e){const n=(0,d.KR)(""),t=(0,d.KR)(""),a=(0,k.rd)();function o(){a.go(-1)}function r(){const e=(0,B.xI)(m);(0,B.eJ)(e,n.value.value,t.value.value).then((()=>{a.push("/login")}))}return(e,a)=>((0,s.uX)(),(0,s.CE)("div",tn,[(0,s.Lk)("div",{class:"navbar"},[(0,s.Lk)("img",{onClick:o,src:"back.png",width:"30px"})]),(0,s.Lk)("div",an,[on,(0,s.Lk)("input",{class:"form-control",type:"text",ref_key:"email",ref:n,placeholder:"E-mail"},null,512),(0,s.Lk)("input",{class:"form-control",type:"password",ref_key:"password",ref:t,placeholder:"Hasło"},null,512),(0,s.Lk)("button",{class:"btn btn-primary",onClick:r},"Zarejestruj"),e.isError?((0,s.uX)(),(0,s.CE)("p",sn,(0,p.v_)(e.loginError),1)):(0,s.Q3)("",!0)])]))}};const ln=rn;var un=ln;const cn={class:"container"},dn={class:"mainContent"},pn=(0,s.Lk)("h1",null,"Wybierz akcję",-1);var vn={__name:"WelcomePage",setup(e){const n=(0,k.rd)();function t(){n.push("/login")}function a(){n.push("/register")}function o(){const e=new B.HF;r(e)}function r(e){const t=(0,B.xI)(m);(0,B.df)(t,e).then((({user:e})=>{const t=(0,g.aU)(m),a=(0,g.H9)(t,"users",e.uid);(0,g.x7)(a).then((t=>{const a=f();if(t.exists()){const n={uid:e.uid,...t.data()};a.setUser(n)}else{const t={uid:e.uid,email:e.email};a.setUser(t),n.push("/completeProfile")}}))}))}function l(){const e=new B.sk;r(e)}return(e,n)=>((0,s.uX)(),(0,s.CE)("div",cn,[(0,s.Lk)("div",dn,[pn,(0,s.Lk)("button",{class:"btn btn-primary",onClick:n[0]||(n[0]=e=>t())},"Logowanie"),(0,s.Lk)("button",{class:"btn btn-primary",onClick:n[1]||(n[1]=e=>a())},"Rejestracja"),(0,s.Lk)("button",{class:"btn btn-primary",onClick:n[2]||(n[2]=e=>o())},"Kontynuuj z Google"),(0,s.Lk)("button",{class:"btn btn-primary",onClick:n[3]||(n[3]=e=>l())}," Kontynuuj z Facebook ")])]))}};const mn=vn;var gn=mn;const fn=[{path:"/",component:gn},{path:"/login",component:ee},{path:"/register",component:un},{path:"/completeProfile",component:S},{path:"/home",component:$},{path:"/messagesList",component:le},{path:"/messages/:uid",component:Be},{path:"/newContacts",component:nn}],kn=(0,k.aE)({history:(0,k.sC)(),routes:fn});var hn=kn,yn=(t(8077),t(4458));(0,yn.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const bn=(0,a.Ef)(c),Ln=(0,o.Ey)();bn.use(Ln),bn.use(hn),bn.mount("#app")}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var s=n[a]={exports:{}};return e[a].call(s.exports,s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(n,a,o,s){if(!a){var r=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],s=e[c][2];for(var l=!0,u=0;u<a.length;u++)(!1&s||r>=s)&&Object.keys(t.O).every((function(e){return t.O[e](a[u])}))?a.splice(u--,1):(l=!1,s<r&&(r=s));if(l){e.splice(c--,1);var i=o();void 0!==i&&(n=i)}}return n}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[a,o,s]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,a){var o,s,r=a[0],l=a[1],u=a[2],i=0;if(r.some((function(n){return 0!==e[n]}))){for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(u)var c=u(t)}for(n&&n(a);i<r.length;i++)s=r[i],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(c)},a=self["webpackChunkLingwisto"]=self["webpackChunkLingwisto"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(9149)}));a=t.O(a)})();
//# sourceMappingURL=app.49760af3.js.map