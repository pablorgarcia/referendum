webpackJsonp([1],{0:function(t,e,n){t.exports=n("x35b")},"1kto":function(t,e){t.exports=""},"5xMp":function(t,e){t.exports="\n<app-header></app-header>\n\n<app-login-form></app-login-form>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"},A8Mc:function(t,e){t.exports='<main>\n\n\x3c!--p>question works!</p>\n<div class="bread-crumbs">Where I am: <a [routerLink]="[\'/\']">HOME</a> > <b>{{question.question}}</b></div--\x3e\n<h2>{{question.question}}</h2>\n\n<ul>\n  <li><button (click)="submitVote(\'yes\')">Yes</button></li>\n  <li><button (click)="submitVote(\'no\')">No</button></li>\n  <li><button (click)="submitVote(\'dont know\')">Don\'t know</button></li>\n</ul>\n\n<p>Voted: {{question.counter}}</p>\n\n<div style="display: block">\n<canvas baseChart\n  [data]="doughnutChartData"\n  [labels]="doughnutChartLabels"\n  [chartType]="doughnutChartType"\n  (chartHover)="chartHovered($event)"\n  (chartClick)="chartClicked($event)"></canvas>\n</div>\n\n</main>'},E20h:function(t,e){t.exports=".visible { display: block; }\n.invisible { display: none; }\n.login-cont {\n  padding: 3vh 6vw;\n  background-color: #88B3A8;\n}"},EXx9:function(t,e){t.exports='<main>\n\n<div *ngIf="sessionService.user && location">\n\n<form>\n  <p>Create a new question. Remember that the answers will be "Yes", "No", "I dont know".</p>\n  <input type="text" [(ngModel)]="newQuest" name="newQuest" placeholder="Write here your quest..." />\n\n  \x3c!-- continentes --\x3e\n  <select name="loca" [(ngModel)]="loca" required >\n    <option selected disabled>Choose location</option>\n    <option value="{{location.city}}">{{location.city}}</option>\n    <option value="{{location.country}}">{{location.country}}</option>\n    <option value="{{location.continent}}">{{location.continent}}</option>\n  </select>\n\n  <input type="date" [(ngModel)]="endDate" name="endDate" required />\n\n  <button (click)="createQuest()">Create</button>\n</form>\n\n</div>\n\n</main>\n'},Jnfr:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="Jnfr"},MyHe:function(t,e){t.exports=".eyelash {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n}\n.eyelash p {\n  padding: 1vh 2vw;\n  margin: 0 2vw;\n  border-style: solid;\n  border-color: #5b5b5b;\n  border-top: 1px;\n  border-right: 1px;\n  border-bottom: 0;\n  border-left: 1px;\n}\n.eyelash button {\n  margin: 0 .5vw;\n}\n.block-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-flex: 2;\n      -ms-flex-positive: 2;\n          flex-grow: 2;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: start;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding: 2vh 0;\n}\n.block-list p {\n  width: 3vh;\n  padding: 0 3vw;\n  margin: 0;\n  text-align: center;\n  color: #5b5b5b;\n}\n.block-list h2 {\n  font-size: 4vh;\n  text-decoration: none;\n}\n.block-list span {\n  display: block;\n  color: #5b5b5b;\n  background-color: #DBDBDB;\n  padding: 0.4vh 0.8vw;\n  border-radius: 5px;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  margin: 0 1vw;\n}\n"},N6pJ:function(t,e){t.exports="header {\n  padding: 3vh 6vw;\n  position: fixed;\n  top: 0;\n  width: calc(100% - 12vw);\n  background-color: #f9f9f9;\n}\n\nh1 {\n  display: inline-block;\n  width: 50%;\n}\n\n.info-right {\n  display: inline-block;\n  width: 50%;\n  text-align: right;\n}\n\np {\n  margin: 1vh 0;\n}"},SENk:function(t,e){t.exports='<div *ngIf="location">\n<header>\n  <h1><a [routerLink]="[\'/\']">referendum</a></h1><p class="info-right">Do you want create a <a *ngIf="sessionService.user" [routerLink]="[\'/profile\']"><b>new question</b></a>?</p>\n  <p *ngIf="sessionService.user">Welcome <b>{{username}}</b>. You are from <b>{{location.city}}</b>, <b>{{location.country}}</b>, <b>{{location.continent}}</b>.</p>\n</header>\n</div>\n'},f6ft:function(t,e){t.exports='<footer>\n  <p>Made with love and back pain from Ironhack.</p>\n  <a href="https://github.com/pablorgarcia" target="_blank"><b>Pablo Garc\xeda</b></a>\n</footer>\n'},gc18:function(t,e){t.exports="main { padding: 3vh 6vw; }\n\nh2 { font-size: 3vw; }\n"},ljLh:function(t,e){t.exports='<main>\n\n<div class="eyelash">\n  <p>Find questions near you:</p>\n  <button (click)="getLocation(userLocation.city)">{{userLocation.city}}</button>\n  <button (click)="getLocation(userLocation.country)">{{userLocation.country}}</button>\n  <button (click)="getLocation(userLocation.continent)">{{userLocation.continent}}</button>\n</div>\n\n\x3c!-- <div *ngIf="sessionService.user"> --\x3e\n<div *ngFor="let q of questionsByLocation" class="block-list">\n  <p>{{q.counter}}</p>\n  <h2><a [routerLink]="[\'/question\', q._id]">{{q.question}}</a></h2>\n  <span>{{q.location}}</span>\n</div>\n\x3c!-- </div> --\x3e\n\n\x3c!-- <div *ngIf="!sessionService.user"> --\x3e\n\x3c!-- <div *ngFor="let q of questions" class="block-list">\n  <p>{{q.counter}}</p>\n  <h2><a [routerLink]="[\'/question\', q._id]">{{q.question}}</a></h2>\n  <span>{{q.location}}</span>\n</div> --\x3e\n\x3c!-- </div> --\x3e\n\n</main>\n'},mIxc:function(t,e){t.exports="footer {\n  color: #F2F2F2;\n  background-color: #313332;\n  padding: 1vh 6vw;\n  width: calc(100% - 12vw);\n  position: fixed;\n  bottom: 0;\n}\n\nfooter p {\n  margin: 0;\n}\n\nfooter a {\n  margin: 0;\n  color: #F2F2F2;\n}\n"},okgc:function(t,e){t.exports=".bread-crumbs { display: block; }"},qSPs:function(t,e){t.exports='<main>\n<div *ngIf="!sessionService.user">\n\n  \x3c!--form class="invisible"--\x3e\n  <form *ngIf="isLogin">\n    <h2>Login</h2>\n    <label>Username</label>\n    <input type="text" [(ngModel)]="username1" name="username1" required />\n    <br>\n    <label>Password</label>\n    <input type="password" [(ngModel)]="password1" name="password1" required />\n\n    <button (click)="login()">login</button>\n  </form>\n\x3c!--   [ngClass]="{\'visible\': isClassVisible }"  --\x3e\n  <form *ngIf="!isLogin">\n    <h2>Signup</h2>\n    <label>Username</label>\n    <input type="text" [(ngModel)]="username" name="username" required />\n    <br>\n    <label>E-mail</label>\n    <input type="email" [(ngModel)]="email" name="email" required />\n    <br>\n    <label>Password</label>\n    <input type="password" [(ngModel)]="password" name="password" required />\n    <br>\n    <label>Birthdate</label>\n    <input type="date" [(ngModel)]="age" name="age" required />\n    <br>\n    <select [(ngModel)]="genre" name="genre" required>\n      <option selected disabled>Choose your genre</option>\n      <option value="Woman">Woman</option> \n      <option value="Man">Man</option>\n      <option value="Other" selected>Other</option>\n    </select>\n    <br>\n    \x3c!-- continentes --\x3e\n    <select (change)="getCountries(con.value)" #con [(ngModel)]="continent" name="continent" required >\n      <option selected disabled>Choose your continent</option>\n      <option value="Africa">Africa</option>\n      <option value="Americas">Americas</option>\n      <option value="Asia">Asia</option>\n      <option value="Europe">Europe</option>\n      <option value="Oceania">Oceania</option>\n    </select>\n    \x3c!-- paises del continente elegido --\x3e\n    <select *ngIf="continent" (change)="getCities(coun.value)" [(ngModel)]="country" #coun name="country" required>\n      <option selected disabled>Choose your country</option>\n      <option *ngFor="let c of countries; let i = index" value="{{i}}" class="{{c.name}}">{{c.name}}</option>\n    </select>\n    \x3c!-- ciudades del pais elejido --\x3e\n    <select *ngIf="country" name="location" required >\n      <option selected disabled>Choose your city</option>\n      <option value="{{countries[index].capital}}" selected >{{countries[index].capital}}</option>\n    </select>\n\n    <button (click)="signup()">signup</button>\n  </form>\n  \n  <p>Don\'t have an account? <a (click)="showSignup()"><b>Sign up</b></a></p>\n\n  <p class="error">{{ error }}</p>\n  \n</div>\n\n\n<button *ngIf="sessionService.user" (click)="sessionService.logout().subscribe()">logout</button>\n</main>\n'},uslO:function(t,e,n){var o={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function i(t){return n(s(t))}function s(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(o)},i.resolve=s,t.exports=i,i.id="uslO"},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("WT6e"),i=n("4PVY"),s=n("OE0E"),r=n("7DMc"),a=n("NOoU"),c=n("bfOx"),u=(n("owTz"),n("xgm2"),n("XZJt")),l=!0,p="",f=this&&this.__decorate||function(t,e,n,o){var i,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},h=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(t){this.http=t,this.userEvent=new o.EventEmitter,this.options={withCredentials:!0},this.isLoggedIn().subscribe()}return t.prototype.handleError=function(t){return u.a.throw(t.json().message)},t.prototype.handleUser=function(t){return this.user=t,this.userEvent.emit(this.user),this.user},t.prototype.signup=function(t){var e=this;return this.http.post(p+"/api/auth/signup",t,this.options).map(function(t){return t.json()}).map(function(t){return e.handleUser(t)}).catch(this.handleError)},t.prototype.login=function(t,e){var n=this;return this.http.post(p+"/api/auth/login",{username:t,password:e},this.options).map(function(t){return t.json()}).map(function(t){return n.handleUser(t)}).catch(this.handleError)},t.prototype.logout=function(){var t=this;return this.http.get(p+"/api/auth/logout",this.options).map(function(){return t.handleUser()}).catch(this.handleError)},t.prototype.isLoggedIn=function(){var t=this;return this.http.get(p+"/api/auth/loggedin",this.options).map(function(t){return t.json()}).map(function(e){return t.handleUser(e)}).catch(this.handleError)},t=f([Object(o.Injectable)(),h("design:paramtypes",[a.a])],t)}(),b=this&&this.__decorate||function(t,e,n,o){var i,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},g=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},m=function(){function t(t){this.http=t}return t.prototype.getList=function(){return this.http.get(p+"/api/question").map(function(t){return t.json()})},t.prototype.getListbyLocation=function(t){return this.http.get(p+"/api/question/location/"+t).map(function(t){return t.json()})},t.prototype.sendQuestToAPI=function(t){return this.http.post(p+"/api/question",t).map(function(t){return t.json()})},t.prototype.getQuestId=function(t){return this.http.get(p+"/api/question/"+t).map(function(t){return t.json()})},t.prototype.updateQuestId=function(t){return this.http.put(p+"/api/question/"+t._id,t).map(function(t){return t.json()})},t.prototype.deleteQuestId=function(t){return this.http.delete(p+"/api/question/"+t).map(function(t){return t.json()})},t=b([Object(o.Injectable)(),g("design:paramtypes",[a.a])],t)}(),y=this&&this.__decorate||function(t,e,n,o){var i,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},j=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},v=function(){function t(t,e){var n=this;this.sessionService=t,this.questionService=e,this.userLocation={city:"",country:"",continent:""},this.questions=[{}],this.questionsByLocation=[{}],this.questionService.getList().subscribe(function(t){n.questions=t})}return t.prototype.ngOnInit=function(){var t=this;this.sessionService.isLoggedIn().subscribe(function(e){t.userLocation=e.location})},t.prototype.getLocation=function(t){var e=this;this.questionService.getListbyLocation(t).subscribe(function(t){e.questionsByLocation=t})},t=y([Object(o.Component)({selector:"app-home",template:n("ljLh"),styles:[n("MyHe")]}),j("design:paramtypes",[d,m])],t)}(),w=this&&this.__decorate||function(t,e,n,o){var i,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},x=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},k=function(){function t(t){this.http=t}return t.prototype.getList=function(){return this.http.get(p+"/api/answer").map(function(t){return t.json()})},t.prototype.createVote=function(t,e,n){return this.http.post(p+"/api/answer",{question:t,answer:e,user:n}).map(function(t){return t.json()})},t.prototype.getAnswer=function(t){return this.http.get(p+"/api/answer/"+t).map(function(t){return t.json()})},t.prototype.getAnswersByQuest=function(t){return this.http.get(p+"/api/answer/"+t).map(function(t){return t.json()})},t=w([Object(o.Injectable)(),x("design:paramtypes",[a.a])],t)}(),q=this&&this.__decorate||function(t,e,n,o){var i,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},R=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},O=function(){function t(t,e,n,o,i){this.http=t,this.route=e,this.sessionService=n,this.questionService=o,this.answerService=i,this.doughnutChartLabels=["Yes","No","Don't know"],this.doughnutChartData=[0,0,0],this.doughnutChartType="doughnut",this.user="",this.question={},this.answers=[],this.voted=!1,this.boo=!0}return t.prototype.ngOnInit=function(){var t=this;this.user=this.sessionService.user,this.route.params.subscribe(function(e){t.questionService.getQuestId(e.id).subscribe(function(e){console.log(e),t.question=e}),t.questionId=e.id})},t.prototype.chartClicked=function(t){console.log(t)},t.prototype.chartHovered=function(t){console.log(t)},t.prototype.submitVote=function(t){var e=this;this.sessionService.user?this.boo=!1:this.boo=!0,!1===this.voted&&(this.question.counter++,this.answerService.createVote(this.questionId,t,this.sessionService.user._id).subscribe(),this.questionService.updateQuestId(this.question).subscribe(function(){e.answerService.getAnswersByQuest(e.questionId).subscribe(function(t){e.answers=t,e.numAnswer(e.answers)})}),this.voted=!0)},t.prototype.numAnswer=function(t){this.doughnutChartData=[];var e=t.reduce(function(t,e){return t+("yes"===e.answer)},0);this.doughnutChartData.push(e);var n=t.reduce(function(t,e){return t+("no"===e.answer)},0);this.doughnutChartData.push(n);var o=t.reduce(function(t,e){return t+("dont know"===e.answer)},0);this.doughnutChartData.push(o),console.log(this.doughnutChartData)},t=q([Object(o.Component)({selector:"app-question",template:n("A8Mc"),styles:[n("gc18")]}),R("design:paramtypes",[a.a,c.a,d,m,k])],t)}(),S=this&&this.__decorate||function(t,e,n,o){var i,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},L=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},P=function(){function t(t){this.http=t}return t.prototype.getCountries=function(t){return this.http.get(p+"/api/location/"+t).map(function(t){return t.json()})},t=S([Object(o.Injectable)(),L("design:paramtypes",[a.a])],t)}(),_=this&&this.__decorate||function(t,e,n,o){var i,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},I=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},C=function(){function t(t,e,n){this.sessionService=t,this.locationService=e,this.questionService=n}return t.prototype.ngOnInit=function(){var t=this;this.sessionService.isLoggedIn().subscribe(function(e){t.user=e,t.location=e.location})},t.prototype.createQuest=function(){var t={question:this.newQuest,author:this.user._id,endDate:this.endDate,location:this.location};this.questionService.sendQuestToAPI(t).subscribe()},t=_([Object(o.Component)({selector:"app-profile",template:n("EXx9"),styles:[n("1kto")]}),I("design:paramtypes",[d,P,m])],t)}(),z=[{path:"",component:v},{path:"question/:id",component:O},{path:"profile",component:C}],D=this&&this.__decorate||function(t,e,n,o){var i,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},E=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},M=function(){function t(){}return t.prototype.ngOnInit=function(){},t=D([Object(o.Component)({selector:"app-root",template:n("5xMp"),styles:[n("okgc")]}),E("design:paramtypes",[])],t)}(),F=this&&this.__decorate||function(t,e,n,o){var i,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},N=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},B=function(){function t(t,e){this.sessionService=t,this.locationService=e,this.location={city:"",country:"",continent:""},this.countries=[]}return t.prototype.ngOnInit=function(){this.isLogin=!0},t.prototype.login=function(){console.log(this.username1,this.password1),this.sessionService.login(this.username1,this.password1).subscribe()},t.prototype.signup=function(){var t={username:this.username,password:this.password,email:this.email,location:this.location,genre:this.genre,age:this.age};console.log(t),this.sessionService.signup(t).subscribe()},t.prototype.getCountries=function(t){var e=this;this.location.continent=t,this.locationService.getCountries(t).subscribe(function(t){e.countries=t})},t.prototype.getCities=function(t){this.index=Number(t),this.location.country=this.countries[t].name,this.location.city=this.countries[t].capital},t.prototype.showSignup=function(){this.isLogin=!this.isLogin},t=F([Object(o.Component)({selector:"app-login-form",template:n("qSPs"),styles:[n("E20h")]}),N("design:paramtypes",[d,P])],t)}(),H=this&&this.__decorate||function(t,e,n,o){var i,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},V=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},A=function(){function t(t){this.sessionService=t}return t.prototype.ngOnInit=function(){var t=this;this.sessionService.isLoggedIn().subscribe(function(e){t.username=e.username,t.location=e.location,console.log(t.location)})},t=H([Object(o.Component)({selector:"app-header",template:n("SENk"),styles:[n("N6pJ")]}),V("design:paramtypes",[d])],t)}(),Q=this&&this.__decorate||function(t,e,n,o){var i,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},U=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},X=function(){function t(){}return t.prototype.ngOnInit=function(){},t=Q([Object(o.Component)({selector:"app-footer",template:n("f6ft"),styles:[n("mIxc")]}),U("design:paramtypes",[])],t)}(),T=n("TXDH"),W=this&&this.__decorate||function(t,e,n,o){var i,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},J=function(){function t(){}return t.prototype.transform=function(t,e){return null},t=W([Object(o.Pipe)({name:"pipe"})],t)}(),G=this&&this.__decorate||function(t,e,n,o){var i,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},Y=function(){function t(){}return t=G([Object(o.NgModule)({declarations:[M,B,A,X,C,O,v,J],imports:[s.a,r.a,a.b,c.b.forRoot(z),T.ChartsModule],providers:[d,m,k,P],bootstrap:[M]})],t)}();l&&Object(o.enableProdMode)(),Object(i.a)().bootstrapModule(Y).catch(function(t){return console.log(t)})}},[0]);