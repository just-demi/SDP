(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{vep6:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var i=e("pMnS"),a=e("MKJQ"),o=e("sZkV"),r=e("s7LF"),s=e("SVse"),c=e("2g2N"),b=e("n90K"),d=e("wj3C");e("LOEa");class g{constructor(l,n,e,t,u){this.router=l,this.firestore=n,this.auth=e,this.toastService=t,this.storageService=u,this.menu=[],this.review=!1,this.data={uid:"",Rating:3,Date:"","Posted By":"",Time:new Number,Comment:""},this.dh=""}ngOnInit(){this.dh=history.state["Dining Hall"],this.firestore.firestore.collection("Dining Halls").doc(this.dh).get().then(l=>{for(var n in l.data())this.firestore.firestore.collection("Dining Halls/"+this.dh+"/Meals").doc(l.data()[n]).get().then(l=>{this.menu.push(l.data())}).catch(l=>{console.dir(l)})}).catch(l=>{console.dir(l)})}orderAction(l){var n=new Date,e={Time:n.getTime(),Date:n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate(),uid:d.firebase.auth().currentUser.uid};this.firestore.firestore.collection("Dining Halls/"+this.dh+"/Meals/"+l+"/Order").doc().set(e).then(()=>{this.toastService.presentToast("Order Placed")}).catch(l=>{console.dir(l)})}submit(l){var n=new Date;this.data.Time=n.getTime(),this.data.Date=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate(),this.auth.currentUser.then(n=>{this.data.uid=n.uid,this.storageService.get(n.uid).then(n=>{this.data["Posted By"]=n["Student Number"],this.firestore.firestore.collection("Dining Halls/"+this.dh+"/Meals/"+l+"/Comments").doc().set(this.data),this.firestore.firestore.collection("Dining Halls/"+this.dh+"/Meals/").doc(l).get().then(n=>{var e=n.data();e.ratings.push(this.data.Rating),e["Average Rating"]=0,e.ratings.forEach(l=>{e["Average Rating"]+=l}),e["Average Rating"]/=e.ratings.length,e.uid=this.data["Posted By"],this.firestore.firestore.collection("Dining Halls/"+this.dh+"/Meals/").doc(l).update({uid:e.uid,ratings:e.ratings,"Average Rating":e["Average Rating"]}).catch(l=>{console.dir(l)}),this.toastService.presentToast("Review submitted."),this.router.navigate(["main"])}).catch(l=>{console.dir("error",l)})}).catch(l=>{console.dir("error",l)})}).catch(l=>{console.dir("error",l)})}}var h=e("iInd"),p=e("wD+u"),m=e("VRCc"),f=t.ob({encapsulation:0,styles:[[".actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--border-radius:9px;--box-shadow:none;--background:linear-gradient(60deg, #D4AF37 0%, #416 100%);font-size:12px}"]],data:{}});function v(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,e){var t=!0,u=l.component;return"click"===n&&(t=0!=(u.review=!u.review)&&t),t}),a.G,a.b)),t.pb(2,49152,null,0,o.h,[t.h,t.k,t.x],{expand:[0,"expand"]},null),(l()(),t.Gb(-1,0,["Make Review"]))],(function(l,n){l(n,2,0,"block")}),null)}function C(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,34,"ion-list",[],null,null,null,a.V,a.q)),t.pb(1,49152,null,0,o.L,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,15,"ion-item",[],null,null,null,a.T,a.o)),t.pb(3,49152,null,0,o.E,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,4,"ion-label",[["position","stacked"]],null,null,null,a.U,a.p)),t.pb(5,49152,null,0,o.K,[t.h,t.k,t.x],{position:[0,"position"]},null),(l()(),t.Gb(-1,0,["Write a short comment "])),(l()(),t.qb(7,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Gb(-1,0,["(fewer than 50 charecters)"])),(l()(),t.qb(9,0,null,0,8,"ion-input",[["maxlength","50"],["type","text"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==t.Cb(l,12)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Cb(l,12)._handleInputEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(i.data.Comment=e)&&u),u}),a.S,a.n)),t.pb(10,540672,null,0,r.c,[],{maxlength:[0,"maxlength"]},null),t.Db(1024,null,r.d,(function(l){return[l]}),[r.c]),t.pb(12,4341760,null,0,o.Gb,[t.p,t.k],null,null),t.Db(1024,null,r.e,(function(l){return[l]}),[o.Gb]),t.pb(14,671744,null,0,r.j,[[8,null],[6,r.d],[8,null],[6,r.e]],{model:[0,"model"]},{update:"ngModelChange"}),t.Db(2048,null,r.f,null,[r.j]),t.pb(16,16384,null,0,r.g,[[4,r.f]],null,null),t.pb(17,49152,null,0,o.D,[t.h,t.k,t.x],{maxlength:[0,"maxlength"],type:[1,"type"]},null),(l()(),t.qb(18,0,null,0,16,"ion-item",[],null,null,null,a.T,a.o)),t.pb(19,49152,null,0,o.E,[t.h,t.k,t.x],null,null),(l()(),t.qb(20,0,null,0,3,"ion-label",[["position","stacked"]],null,null,null,a.U,a.p)),t.pb(21,49152,null,0,o.K,[t.h,t.k,t.x],{position:[0,"position"]},null),(l()(),t.Gb(-1,0,["Rate the meal "])),(l()(),t.qb(23,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.qb(24,0,null,0,10,"ion-range",[["color","warning"],["max","5"],["min","1"],["pin","true"],["snaps",""],["step","1"],["value","3"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==t.Cb(l,25)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Cb(l,25)._handleChangeEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(i.data.Rating=e)&&u),u}),a.Z,a.u)),t.pb(25,4341760,null,0,o.Fb,[t.p,t.k],null,null),t.Db(1024,null,r.e,(function(l){return[l]}),[o.Fb]),t.pb(27,671744,null,0,r.j,[[8,null],[8,null],[8,null],[6,r.e]],{model:[0,"model"]},{update:"ngModelChange"}),t.Db(2048,null,r.f,null,[r.j]),t.pb(29,16384,null,0,r.g,[[4,r.f]],null,null),t.pb(30,49152,null,0,o.W,[t.h,t.k,t.x],{color:[0,"color"],max:[1,"max"],min:[2,"min"],pin:[3,"pin"],snaps:[4,"snaps"],step:[5,"step"],value:[6,"value"]},null),(l()(),t.qb(31,0,null,0,1,"ion-icon",[["color","warning"],["name","thumbs-down"],["slot","start"]],null,null,null,a.R,a.m)),t.pb(32,49152,null,0,o.z,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.qb(33,0,null,0,1,"ion-icon",[["color","warning"],["name","thumbs-up"],["slot","end"]],null,null,null,a.R,a.m)),t.pb(34,49152,null,0,o.z,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.qb(35,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,e){var t=!0,u=l.component;return"click"===n&&(u.review=!u.review,t=!1!==u.submit(l.parent.context.$implicit.name)&&t),t}),a.G,a.b)),t.pb(36,49152,null,0,o.h,[t.h,t.k,t.x],{expand:[0,"expand"]},null),(l()(),t.Gb(-1,0,["Submit"]))],(function(l,n){var e=n.component;l(n,5,0,"stacked"),l(n,10,0,"50"),l(n,14,0,e.data.Comment),l(n,17,0,"50","text"),l(n,21,0,"stacked"),l(n,27,0,e.data.Rating),l(n,30,0,"warning","5","1","true","","1","3"),l(n,32,0,"warning","thumbs-down"),l(n,34,0,"warning","thumbs-up"),l(n,36,0,"block")}),(function(l,n){l(n,9,0,t.Cb(n,10).maxlength?t.Cb(n,10).maxlength:null,t.Cb(n,16).ngClassUntouched,t.Cb(n,16).ngClassTouched,t.Cb(n,16).ngClassPristine,t.Cb(n,16).ngClassDirty,t.Cb(n,16).ngClassValid,t.Cb(n,16).ngClassInvalid,t.Cb(n,16).ngClassPending),l(n,24,0,t.Cb(n,29).ngClassUntouched,t.Cb(n,29).ngClassTouched,t.Cb(n,29).ngClassPristine,t.Cb(n,29).ngClassDirty,t.Cb(n,29).ngClassValid,t.Cb(n,29).ngClassInvalid,t.Cb(n,29).ngClassPending)}))}function x(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,19,"div",[["class","actions"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,18,"ion-card",[],null,null,null,a.L,a.d)),t.pb(2,49152,null,0,o.j,[t.h,t.k,t.x],null,null),(l()(),t.qb(3,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.qb(4,0,null,0,4,"ion-card-header",[],null,null,null,a.J,a.f)),t.pb(5,49152,null,0,o.l,[t.h,t.k,t.x],null,null),(l()(),t.qb(6,0,null,0,2,"ion-card-title",[],null,null,null,a.K,a.g)),t.pb(7,49152,null,0,o.n,[t.h,t.k,t.x],null,null),(l()(),t.Gb(8,0,["",""])),(l()(),t.qb(9,0,null,0,4,"ion-card-content",[],null,null,null,a.I,a.e)),t.pb(10,49152,null,0,o.k,[t.h,t.k,t.x],null,null),(l()(),t.Gb(11,0,[" "," "])),(l()(),t.qb(12,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Gb(13,0,[" Allergens: "," "])),(l()(),t.qb(14,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.orderAction(l.context.$implicit.name)&&t),t}),a.G,a.b)),t.pb(15,49152,null,0,o.h,[t.h,t.k,t.x],{expand:[0,"expand"]},null),(l()(),t.Gb(-1,0,["Order"])),(l()(),t.fb(16777216,null,0,1,null,v)),t.pb(18,16384,null,0,s.i,[t.N,t.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.fb(0,[["reviewBlock",2]],0,0,null,C))],(function(l,n){var e=n.component;l(n,15,0,"block"),l(n,18,0,0==e.review,t.Cb(n,19))}),(function(l,n){l(n,3,0,t.ub(1,"",n.context.$implicit.image,"")),l(n,8,0,n.context.$implicit.name),l(n,11,0,n.context.$implicit.description),l(n,13,0,n.context.$implicit.allergens)}))}function k(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,5,"ion-content",[["class","ion-padding"]],null,null,null,a.N,a.i)),t.pb(1,49152,null,0,o.r,[t.h,t.k,t.x],{fullscreen:[0,"fullscreen"]},null),(l()(),t.qb(2,0,null,0,3,"ion-list",[],null,null,null,a.V,a.q)),t.pb(3,49152,null,0,o.L,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,1,null,x)),t.pb(5,278528,null,0,s.h,[t.N,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,1,0,!0),l(n,5,0,e.menu)}),null)}function w(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,1,"app-meals",[],null,null,null,k,f)),t.pb(1,114688,null,0,g,[h.m,p.a,m.a,c.a,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var q=t.mb("app-meals",g,w,{},{},[]);class D{}e.d(n,"MealsPageModuleNgFactory",(function(){return A}));var A=t.nb(u,[],(function(l){return t.zb([t.Ab(512,t.j,t.Y,[[8,[i.a,q]],[3,t.j],t.v]),t.Ab(4608,s.k,s.j,[t.s,[2,s.q]]),t.Ab(4608,r.l,r.l,[]),t.Ab(4608,o.a,o.a,[t.x,t.g]),t.Ab(4608,o.Ab,o.Ab,[o.a,t.j,t.p]),t.Ab(4608,o.Db,o.Db,[o.a,t.j,t.p]),t.Ab(1073742336,s.b,s.b,[]),t.Ab(1073742336,r.k,r.k,[]),t.Ab(1073742336,r.b,r.b,[]),t.Ab(1073742336,o.yb,o.yb,[]),t.Ab(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),t.Ab(1073742336,D,D,[]),t.Ab(1073742336,u,u,[]),t.Ab(1024,h.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);