(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{L6id:function(n,e,t){"use strict";t.r(e);var l=t("8Y7J");class a{}var u=t("pMnS"),r=t("MKJQ"),o=t("sZkV"),i=t("iInd"),s=t("n90K"),b=t("wj3C");class c{constructor(n,e){this.router=n,this.storageService=e}ngOnInit(){this.storageService.get(b.firebase.auth().currentUser.uid).then(n=>{switch(n.Role){case 0:this.router.navigate(["choose-service"]);break;case 1:this.router.navigate(["home/dh-staff-main"])}})}}var h=l.ob({encapsulation:0,styles:[[""]],data:{}});function d(n){return l.Hb(0,[(n()(),l.qb(0,0,null,null,3,"ion-content",[],null,null,null,r.N,r.i)),l.pb(1,49152,null,0,o.r,[l.h,l.k,l.x],null,null),(n()(),l.qb(2,16777216,null,0,1,"router-outlet",[],null,null,null,null,null)),l.pb(3,212992,null,0,i.p,[i.b,l.N,l.j,[8,null],l.h],null,null)],(function(n,e){n(e,3,0)}),null)}function g(n){return l.Hb(0,[(n()(),l.qb(0,0,null,null,1,"app-home",[],null,null,null,d,h)),l.pb(1,114688,null,0,c,[i.m,s.a],null,null)],(function(n,e){n(e,1,0)}),null)}var p=l.mb("app-home",c,g,{},{},[]),f=t("SVse"),v=t("s7LF"),A=t("VRCc");let m=(()=>{class n{constructor(n,e,t){this.storageService=n,this.auth=e,this.router=t}canActivate(){return new Promise(n=>{this.auth.currentUser.then(e=>{this.storageService.get(e.uid).then(e=>{e?n(!0):(this.router.navigate(["landing"]),n(!1))}).catch(e=>{n(!1)})})})}}return n.ngInjectableDef=l.Lb({factory:function(){return new n(l.Mb(s.a),l.Mb(A.a),l.Mb(i.m))},token:n,providedIn:"root"}),n})();const M=()=>t.e(4).then(t.bind(null,"lKCk")).then(n=>n.MainPageModuleNgFactory),k=()=>Promise.all([t.e(3),t.e(0),t.e(5)]).then(t.bind(null,"vep6")).then(n=>n.MealsPageModuleNgFactory),w=()=>t.e(19).then(t.bind(null,"ruql")).then(n=>n.DhStaffMainPageModuleNgFactory),y=()=>t.e(2).then(t.bind(null,"nylZ")).then(n=>n.MessagePageModuleNgFactory);class j{}t.d(e,"HomePageModuleNgFactory",(function(){return C}));var C=l.nb(a,[],(function(n){return l.zb([l.Ab(512,l.j,l.Y,[[8,[u.a,p]],[3,l.j],l.v]),l.Ab(4608,f.k,f.j,[l.s,[2,f.q]]),l.Ab(4608,v.l,v.l,[]),l.Ab(4608,o.a,o.a,[l.x,l.g]),l.Ab(4608,o.Ab,o.Ab,[o.a,l.j,l.p]),l.Ab(4608,o.Db,o.Db,[o.a,l.j,l.p]),l.Ab(1073742336,f.b,f.b,[]),l.Ab(1073742336,v.k,v.k,[]),l.Ab(1073742336,v.b,v.b,[]),l.Ab(1073742336,o.yb,o.yb,[]),l.Ab(1073742336,i.o,i.o,[[2,i.t],[2,i.m]]),l.Ab(1073742336,j,j,[]),l.Ab(1073742336,a,a,[]),l.Ab(1024,i.k,(function(){return[[{path:"",component:c,canActivate:[m],children:[{path:"main",loadChildren:M},{path:"meals",loadChildren:k},{path:"dh-staff-main",loadChildren:w},{path:"message",loadChildren:y}]}]]}),[])])}))}}]);