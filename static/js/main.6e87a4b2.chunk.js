(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[1],{29:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(10),O=n.n(c),s=(n(29),n(30),n(31),n(32),n(33),n(23)),i=n(1),l=n(5),r=o.a.lazy((function(){return Promise.all([n.e(0),n.e(5),n.e(7)]).then(n.bind(null,238))})),u=o.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(6)]).then(n.bind(null,239))}));var d=function(){return Object(l.jsx)(s.a,{children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",element:Object(l.jsx)(u,{})}),Object(l.jsx)(i.a,{path:"login",element:Object(l.jsx)(r,{})})]})})},g=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,233)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,O=t.getTTFB;n(e),a(e),o(e),c(e),O(e)}))},b=n(18),L=n(9),j=n(22),S=n(21),_=n(3),h=n(7),E={token:localStorage.getItem("token"),isLogged:!1,isLoading:!1,loggedOut:!0,user:null},G="SHOW_SIDEBAR",I={sidebarShow:"responsive"},R=Object(L.combineReducers)({AuthReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.a.LOGIN_LOADING:e=Object(_.a)(Object(_.a)({},e),{},{isLoading:!0});break;case h.a.LOGIN_SUCCESS:console.log(t),localStorage.setItem("token",t.payload.token),e=Object(_.a)(Object(_.a)({},e),{},{isLoading:!1,user:t.payload.user,token:t.payload.token,isLogged:!0,loggedOut:!1});break;case h.a.USER_LOADED_FROM_TOKEN:console.log(t),e=Object(_.a)(Object(_.a)({},e),{},{isLoading:!1,user:t.user,isLogged:!0,loggedOut:!1});break;case h.a.LOGGED_OUT:console.log(t),e=Object(_.a)(Object(_.a)({},e),{},{user:null,token:null,isLogged:!1,loggedOut:!0});break;case h.a.LOGIN_FAILED:case h.a.AUTH_ERROR:e=Object(_.a)(Object(_.a)({},e),{},{user:null,isLoading:!1,loggedOut:!0})}return e},PageReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:localStorage.setItem("sidebarShow",t.sidebarShow),e=Object(_.a)(Object(_.a)({},e),{},{sidebarShow:t.sidebarShow})}return e}}),D=[j.a],p=Object(L.createStore)(R,Object(S.composeWithDevTools)(L.applyMiddleware.apply(void 0,D)));O.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(a.Suspense,{fallback:"Loading announcement...",children:Object(l.jsx)(b.a,{store:p,children:Object(l.jsx)(d,{})})})}),document.getElementById("root")),g()},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_LOADING:"LOGIN_LOADING",LOGOUT_LOADING:"LOGOUT_LOADING",LOGGED_OUT:"LOGGED_OUT",USER_LOADED_FROM_TOKEN:"USER_LOADED_FROM_TOKEN",GET_USERS:"GET_USERS",AUTH_ERROR:"AUTH_ERROR",LOGIN_FAILED:"LOGIN_FAILED"}}},[[40,2,3]]]);
//# sourceMappingURL=main.6e87a4b2.chunk.js.map