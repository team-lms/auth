(this.webpackJsonpauthenticationfrontend=this.webpackJsonpauthenticationfrontend||[]).push([[0],{31:function(e,t,a){e.exports=a(48)},36:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(18),c=a.n(s),o=(a(36),a(5)),l=a(7),i=a(4),u=(a(41),a(42),a(13)),m=a(3),E=a(12),d=a(50),S=a(51),O=a(52),p=a(53),_=a(16),b=a.n(_),R=(a(44),a(45),a(49)),v=function(){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light py-0 border-bottom"},n.a.createElement("div",{className:"container"},n.a.createElement(o.b,{className:"navbar-brand logo text-primary text-decoration-none py-0",to:"/"},"LMS"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement(o.b,{className:"btn btn-primary",to:"/"},"Help"," ",n.a.createElement(R.a,{size:16})))))))},f=Object.freeze({SUCCESS:"ALERT_SUCCESS",ERROR:"ALERT_ERROR",CLEAR:"ALERT_CLEAR"}),T=Object.freeze({LOGIN_REQUEST:"USER_LOGIN_REQUEST",LOGIN_SUCCESS:"USER_LOGIN_SUCCESS",LOGIN_FAILURE:"USER_LOGIN_FAILURE",FORGOT_PASSWORD_REQUEST:"USER_FORGOT_PASSWORD_REQUEST",FORGOT_PASSWORD_SUCCESS:"USER_FORGOT_PASSWORD_SUCCESS",FORGOT_PASSWORD_FAILURE:"USER_FORGOT_PASSWORD_FAILURE",RESET_PASSWORD_REQUEST:"USER_RESET_PASSWORD_REQUEST",RESET_PASSWORD_SUCCESS:"USER_RESET_PASSWORD_SUCCESS",RESET_PASSWORD_FAILURE:"USER_RESET_PASSWORD_FAILURE",LOGOUT:"USER_LOGOUT"}),N=function(e){return{type:f.SUCCESS,message:e}},P=function(e){return{type:f.ERROR,message:e}},g=function(){return{type:f.CLEAR}},C=a(10),w=a.n(C),U=a(15),h=a(29),A=a.n(h),y=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_BASE_URL,j={post:function(e,t){return Object(U.a)(w.a.mark((function a(){var r;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("".concat(y).concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return r=a.sent,a.abrupt("return",r.json());case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},put:function(e,t){return Object(U.a)(w.a.mark((function a(){var r;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("".concat(y).concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return r=a.sent,a.abrupt("return",r.json());case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()}},D={login:function(e){return j.post("auth/login",e)},forgotPassword:function(e){return j.post("auth/send-otp",e)},resetPassword:function(e){return j.put("auth/reset-password",e)}},L=function(e){var t=function(e){switch(e){case Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_ADMIN_ROLE:return Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_ADMIN_WEB_URL;case Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_HR_ROLE:return Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_HR_WEB_URL;case Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_SUPERVISOR_ROLE:return Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_SUPERVISOR_WEB_URL;case Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_EMPLOYEE_ROLE:return Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_EMPLOYEE_WEB_URL;default:return window.location.href}};return function(){var a=Object(U.a)(w.a.mark((function a(r){var n;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:T.LOGIN_REQUEST}),a.next=3,D.login(e);case 3:(n=a.sent)&&n.success?(r(g()),r((c=n.data.user,{type:T.LOGIN_SUCCESS,user:c})),A.a.set("user-token",n.data.token,{expires:60,domain:".".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_APP_URL)}),window.location.href=t(n.data.user.role)):(r((s={},{type:T.LOGIN_FAILURE,error:s})),r(P(n.message)));case 5:case"end":return a.stop()}var s,c}),a)})));return function(e){return a.apply(this,arguments)}}()},I=function(e,t){return function(){var a=Object(U.a)(w.a.mark((function a(r){var n;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:T.FORGOT_PASSWORD_REQUEST}),a.next=3,D.forgotPassword(e);case 3:(n=a.sent)&&n.success?(r({type:T.FORGOT_PASSWORD_SUCCESS,userId:e.userId}),r(g()),t.push("reset-password")):(r({type:T.FORGOT_PASSWORD_FAILURE}),r(P(n.message)));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},W=function(e,t){return function(){var a=Object(U.a)(w.a.mark((function a(r){var n;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:T.RESET_PASSWORD_REQUEST}),a.next=3,D.resetPassword(e);case 3:(n=a.sent)&&n.success?(r(N("Password has been changed")),r({type:T.RESET_PASSWORD_SUCCESS}),t.push("login")):(r({type:T.RESET_PASSWORD_FAILURE}),r(P(n.message)));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},x=function(){var e=Object(l.c)((function(e){return e.auth&&e.auth.isBusy}))||!1,t=Object(l.c)((function(e){return e.auth&&e.alert})),a=Object(l.b)(),s=Object(r.useState)(!1),c=Object(E.a)(s,2),i=c[0],_=c[1],R=Object(r.useState)({submitted:!1,errors:null}),f=Object(E.a)(R,2),T=f[0],N=f[1],P=Object(r.useState)({userId:"",password:""}),g=Object(E.a)(P,2),C=g[0],w=g[1],U=function(e){var t=e.target,a=t.name,r=t.value;w((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},a,r))}))};return Object(r.useEffect)((function(){var e=b()(C,{userId:{presence:{allowEmpty:!1,message:"^Email can't be blank"},email:{message:"^Email is not valid"}},password:{presence:{allowEmpty:!1}}});N((function(t){return Object(m.a)(Object(m.a)({},t),{},{errors:e||null})}))}),[C]),n.a.createElement(n.a.Fragment,null,n.a.createElement(v,null),n.a.createElement("div",{className:"container"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),N((function(e){return Object(m.a)(Object(m.a)({},e),{},{submitted:!0})})),T.errors||a(L(C))}},n.a.createElement("div",{className:"row justify-content-center my-5"},n.a.createElement("div",{className:"col-12 col-sm-8 col-md-6 col-lg-4"},n.a.createElement("div",{className:"card rounded-lg"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"text-center"},"Sign In"),n.a.createElement("hr",null),t.message&&n.a.createElement("p",{className:"text-".concat(t.type," text-center")},t.message),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"userId"},"Email or phone number"),n.a.createElement("input",{type:"text",className:"form-control ".concat(T.submitted&&T.errors&&T.errors.userId?"is-invalid":""),name:"userId",id:"userId",value:C.userId,onChange:U}),T.submitted&&T.errors&&T.errors.userId&&n.a.createElement("div",{className:"text-danger small"},T.errors.userId[0])),n.a.createElement("div",{className:"mb-3 position-relative"},n.a.createElement("label",{htmlFor:"passwordField"},"Password"),n.a.createElement("input",{type:i?"text":"password",className:"form-control ".concat(T.submitted&&T.errors&&T.errors.password?"is-invalid":""),name:"password",id:"passwordField",value:C.password,onChange:U}),T.submitted&&T.errors&&T.errors.password&&n.a.createElement("div",{className:"text-danger small"},T.errors.password[0]),n.a.createElement("button",{type:"button",className:"btn btn-sm btn-primary py-0 position-absolute password-toggle",onClick:function(){return _(!i)},title:"".concat(i?"Hide":"Show"," password")},!i&&n.a.createElement(d.a,{size:15}),i&&n.a.createElement(S.a,{size:15}))),n.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",disabled:e},"Sign in"," ",n.a.createElement(O.a,{size:16})))),n.a.createElement("div",{className:"card rounded-lg mt-3"},n.a.createElement("div",{className:"card-body text-center p-3"},n.a.createElement("span",null,"Forgot password? "),n.a.createElement(o.b,{className:"text-decoration-none",to:"/forgot-password"},"Reset now"," ",n.a.createElement(p.a,{size:16})))))))))},F=a(54),K=function(){var e=Object(i.f)(),t=Object(l.b)(),a=Object(l.c)((function(e){return e.auth&&e.alert.message})),s=Object(r.useState)({submitted:!1,errors:null}),c=Object(E.a)(s,2),d=c[0],S=c[1],O=Object(r.useState)({userId:""}),_=Object(E.a)(O,2),R=_[0],f=_[1];return Object(r.useEffect)((function(){var e=b()(R,{userId:{presence:{allowEmpty:!1,message:"^Email can't be blank"},email:{message:"^Email is not valid"}}});S((function(t){return Object(m.a)(Object(m.a)({},t),{},{errors:e||null})}))}),[R]),n.a.createElement(n.a.Fragment,null,n.a.createElement(v,null),n.a.createElement("div",{className:"container"},n.a.createElement("form",{onSubmit:function(a){a.preventDefault(),S((function(e){return Object(m.a)(Object(m.a)({},e),{},{submitted:!0})})),d.errors||t(I(R,e))}},n.a.createElement("div",{className:"row justify-content-center my-5"},n.a.createElement("div",{className:"col-12 col-sm-8 col-md-6 col-lg-4"},n.a.createElement("div",{className:"card rounded-lg"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"text-center"},"Send OTP"),n.a.createElement("p",{className:"text-center"},"Please enter your email registered with account. We will send you OTP on your email and phone."),n.a.createElement("hr",null),a&&n.a.createElement("p",{className:"text-danger text-center"},a),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"userId"},"Email"),n.a.createElement("input",{type:"text",className:"form-control ".concat(d.submitted&&d.errors&&d.errors.userId?"is-invalid":""),name:"userId",id:"userId",value:R.userId,onChange:function(e){var t=e.target,a=t.name,r=t.value;f((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},a,r))}))}}),d.submitted&&d.errors&&d.errors.userId&&n.a.createElement("div",{className:"text-danger small"},d.errors.userId[0])),n.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Send OTP"," ",n.a.createElement(F.a,{size:16})))),n.a.createElement("div",{className:"card rounded-lg mt-3"},n.a.createElement("div",{className:"card-body text-center p-3"},n.a.createElement("span",null,"Have an account? "),n.a.createElement(o.b,{className:"text-decoration-none",to:"/login"},"Login now"," ",n.a.createElement(p.a,{size:16})))))))))},G=function(){var e=Object(i.f)(),t=Object(l.b)(),a=Object(l.c)((function(e){return e.auth&&e.alert.message})),s=Object(l.c)((function(e){return e.auth.user&&e.auth.user.email}))||"",c=Object(r.useState)({submitted:!1,errors:null}),d=Object(E.a)(c,2),S=d[0],O=d[1],_=Object(r.useState)({userId:"",otp:"",password:"",confirmPassword:""}),R=Object(E.a)(_,2),f=R[0],T=R[1],N=function(e){var t=e.target.name,a=e.target.value;"otp"===t&&(a=a.replace(/[^0-9]*/g,"")),T((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},t,a))}))};return Object(r.useEffect)((function(){s&&T((function(e){return Object(m.a)(Object(m.a)({},e),{},{userId:s})}))}),[s]),Object(r.useEffect)((function(){var e=b()(f,{otp:{presence:{allowEmpty:!1,message:"^OTP can't be blank"}},password:{presence:{allowEmpty:!1}},confirmPassword:{presence:{allowEmpty:!1},equality:{attribute:"password",message:"^Password is not same"}}});O((function(t){return Object(m.a)(Object(m.a)({},t),{},{errors:e||null})}))}),[f]),n.a.createElement(n.a.Fragment,null,n.a.createElement(v,null),n.a.createElement("div",{className:"container"},n.a.createElement("form",{onSubmit:function(a){a.preventDefault(),O((function(e){return Object(m.a)(Object(m.a)({},e),{},{submitted:!0})})),S.errors||t(W(f,e))}},n.a.createElement("div",{className:"row justify-content-center my-5"},n.a.createElement("div",{className:"col-12 col-sm-8 col-md-6 col-lg-4"},n.a.createElement("div",{className:"card rounded-lg"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"text-center"},"Reset Password"),n.a.createElement("p",{className:"text-center"},"You are resetting password for",f.userId&&n.a.createElement(n.a.Fragment,null,n.a.createElement("br",null),n.a.createElement("span",{className:"font-weight-bold"},f.userId))),n.a.createElement("hr",null),a&&n.a.createElement("p",{className:"text-danger text-center"},a),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"otpField"},"OTP"),n.a.createElement("input",{type:"text",className:"form-control ".concat(S.submitted&&S.errors&&S.errors.otp?"is-invalid":""),name:"otp",id:"otpField",maxLength:"6",value:f.otp,onChange:N}),S.submitted&&S.errors&&S.errors.otp&&n.a.createElement("div",{className:"text-danger small"},S.errors.otp[0])),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"passwordField"},"Password"),n.a.createElement("input",{type:"password",className:"form-control ".concat(S.submitted&&S.errors&&S.errors.password?"is-invalid":""),name:"password",id:"passwordField",value:f.password,onChange:N}),S.submitted&&S.errors&&S.errors.password&&n.a.createElement("div",{className:"text-danger small"},S.errors.password[0])),n.a.createElement("div",{className:"mb-3 position-relative"},n.a.createElement("label",{htmlFor:"confirmPasswordField"},"Confirm Password"),n.a.createElement("input",{type:"password",className:"form-control ".concat(S.submitted&&S.errors&&S.errors.confirmPassword?"is-invalid":""),name:"confirmPassword",id:"confirmPasswordField",value:f.confirmPassword,onChange:N}),S.submitted&&S.errors&&S.errors.confirmPassword&&n.a.createElement("div",{className:"text-danger small"},S.errors.confirmPassword[0])),n.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Reset Password"," ",n.a.createElement(p.a,{size:16})))),n.a.createElement("div",{className:"card rounded-lg mt-3"},n.a.createElement("div",{className:"card-body text-center p-3"},n.a.createElement("span",null,"Have an account? "),n.a.createElement(o.b,{className:"text-decoration-none",to:"/login"},"Login now"," ",n.a.createElement(p.a,{size:16})))))))))},H=function(){return n.a.createElement("div",{className:"vh-100 bg-main"},n.a.createElement("div",{className:"container h-100"},n.a.createElement("div",{className:"row align-items-center h-100"},n.a.createElement("div",{className:"col-5"},n.a.createElement("h1",{className:"font-weight-light"},"Apply and Manage your"," ",n.a.createElement("br",null)," ","leaves in the easiest"," ",n.a.createElement("br",null)," ","way possible"),n.a.createElement("p",{className:"lead"},"Get ready to experience the beautiful UI"),n.a.createElement(o.b,{to:"/login",className:"btn btn-lg btn-primary px-5 mr-3"},"Sign in"),n.a.createElement(o.b,{to:"/",className:"btn btn-lg btn-outline-primary px-5"},"Help")))))};var B=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/",component:H}),n.a.createElement(i.a,{path:"/login",component:x}),n.a.createElement(i.a,{path:"/forgot-password",component:K}),n.a.createElement(i.a,{path:"/reset-password",component:G})))},k=a(14),V=a(30),Q=Object(k.c)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.SUCCESS:return{type:"success",message:t.message};case f.ERROR:return{type:"danger",message:t.message};case f.CLEAR:return{};default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.LOGIN_REQUEST:return{isBusy:!0};case T.LOGIN_SUCCESS:return{user:t.user};case T.LOGIN_FAILURE:return{};case T.FORGOT_PASSWORD_REQUEST:return{isBusy:!0};case T.FORGOT_PASSWORD_SUCCESS:return{user:{email:t.userId}};case T.FORGOT_PASSWORD_FAILURE:return{};case T.RESET_PASSWORD_REQUEST:return{isBusy:!0};case T.RESET_PASSWORD_SUCCESS:case T.RESET_PASSWORD_FAILURE:case T.LOGOUT:return{};default:return e}}}),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.d,M=Object(k.e)(Q,z(Object(k.a)(V.a)));c.a.render(n.a.createElement(l.a,{store:M},n.a.createElement(o.a,null,n.a.createElement(B,null))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.af00f997.chunk.js.map