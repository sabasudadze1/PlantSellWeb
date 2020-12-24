(this["webpackJsonpreact-reqres.in-api"]=this["webpackJsonpreact-reqres.in-api"]||[]).push([[0],{97:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"NAME",(function(){return P})),a.d(n,"LOADING",(function(){return I})),a.d(n,"SET",(function(){return L})),a.d(n,"ATTEMPT",(function(){return R})),a.d(n,"FAILURE",(function(){return U}));var r={};a.r(r),a.d(r,"attempt",(function(){return M})),a.d(r,"set",(function(){return z})),a.d(r,"failure",(function(){return B})),a.d(r,"loading",(function(){return G}));var o={};a.r(o),a.d(o,"NAME",(function(){return ee})),a.d(o,"LOADING",(function(){return te})),a.d(o,"ATTEMPT",(function(){return ae})),a.d(o,"FAILURE",(function(){return ne}));var c={};a.r(c),a.d(c,"attempt",(function(){return re})),a.d(c,"failure",(function(){return oe})),a.d(c,"loading",(function(){return ce}));var l=a(0),i=a.n(l),s=a(23),m=a.n(s),u=a(12),d=a(13),p=a(15),f=a(14),h=a(21),g=a(101),b=a(8),v=a(57),E=a(104),w=a(52),O=a(49),N=function(e){return i.a.createElement(O.Helmet,null,i.a.createElement("title",null,e.title),i.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.8.1/css/all.css",integrity:"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",crossOrigin:"anonymous"}))},y=a(34),j=a.n(y),k=a(10),x=a.n(k),C=a(38),S=a(9),A=a(50),T=a(16),F=a(56),D=a(51),P="LOGIN",I="".concat(P,"/LOADING"),L="".concat(P,"/SET_USER"),R="".concat(P,"/ATTEMPT"),U="".concat(P,"/FAILURE"),M=function(e,t){return{type:R,payload:{params:{email:e,password:t}}}},z=function(e){return{type:L,payload:{auth:e}}},B=function(e,t){return{type:U,payload:{failure:e,message:t}}},G=function(e){return{type:I,payload:{loading:e}}},_=a(100),J=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState({[a]:r})},n.handleSubmit=function(e){e.preventDefault(),n.setState({submitted:!0});var t=n.state,a=t.email,r=t.password;a&&r&&n.props.attempt(a,r)},n.state={email:"",password:"",submitted:!1},localStorage.getItem("authToken")&&n.props.history.push("/"),n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.loading,t=this.state,a=t.email,n=t.password,r=t.submitted,o="Login";return i.a.createElement(Re,{title:o},i.a.createElement(N,{title:o}),i.a.createElement("div",{className:"form-box"},i.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"email"},"Email"),i.a.createElement("input",{type:"email",name:"email",className:"form-input"+(r&&!a?" error":""),value:a,onChange:this.handleChange}),r&&!a&&i.a.createElement("div",{className:"error-block  email"},"Please enter your Email!")),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"password"},"Password"),i.a.createElement("input",{type:"password",name:"password",className:"form-input"+(r&&!n?" error":""),value:n,onChange:this.handleChange}),r&&!n&&i.a.createElement("div",{className:"error-block password"},"Please enter your Password!")),i.a.createElement("div",{className:"form-group"},i.a.createElement("button",{className:"form-btn",disabled:e},e?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"fas fa-spinner  fa-spin"})," Please Wait ..."):"Sign in")),i.a.createElement("span",null,"Not yet Registered? ",i.a.createElement(_.a,{exact:!0,to:"/signup"}," Registration")," "))))}}]),a}(l.Component),q=Object(h.b)((function(e){return{loading:e.login.loading}}),(function(e){var t=M;return Object(S.bindActionCreators)({attempt:t},e)}))(J),H={failure:!1,loading:!1};var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:case U:case I:return Object(b.a)(Object(b.a)({},e),t.payload);default:return e}},K=a(7),V=x.a.mark(X),Y=x.a.mark(Q);function X(e){var t,a;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload.params,n.prev=1,n.next=4,Object(K.c)(G(!0));case 4:return n.next=6,Object(K.b)(Ne,{url:"/login",data:t});case 6:return a=n.sent,n.next=9,Object(K.c)(z(a.data));case 9:localStorage.setItem("authToken",JSON.stringify(a.data.token)),Oe.dispatch(Object(T.push)("/")),n.next=18;break;case 13:return n.prev=13,n.t0=n.catch(1),n.next=17,Object(K.c)(B(!0,n.t0.response.data.error));case 17:alert(n.t0.response.data.error);case 18:return n.prev=18,n.next=21,Object(K.c)(G(!1));case 21:return n.finish(18);case 22:case"end":return n.stop()}}),V,null,[[1,13,18,22]])}function Q(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.d)(R,X);case 2:case"end":return e.stop()}}),Y)}var $=[Q()],Z={Login:q,reducers:W,sagas:$,actions:r,constants:n},ee="SIGNUP",te="".concat(ee,"/LOADING"),ae="".concat(ee,"/ATTEMPT"),ne="".concat(ee,"/FAILURE"),re=function(e,t){return{type:ae,payload:{params:{email:e,password:t}}}},oe=function(e,t){return{type:ne,payload:{failure:e,message:t}}},ce=function(e){return{type:te,payload:{loading:e}}},le=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState({[a]:r})},n.handleSubmit=function(e){e.preventDefault(),n.setState({submitted:!0});var t=n.state,a=t.email,r=t.password,o=t.repassword;a&&r&&r===o&&n.props.attempt(a,r)},n.state={email:"",password:"",repassword:"",submitted:!1},localStorage.getItem("authToken")&&n.props.history.push("/"),n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.loading,t=this.state,a=t.email,n=t.password,r=t.repassword,o=t.submitted,c="Registration";return i.a.createElement(Re,{title:c},i.a.createElement(N,{title:c}),i.a.createElement("div",{className:"form-box"},i.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"email"},"Email"),i.a.createElement("input",{type:"email",name:"email",className:"form-input"+(o&&!a?" error":""),value:a,onChange:this.handleChange}),o&&!a&&i.a.createElement("div",{className:"error-block email"},"Please enter your email")),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"password"},"password"),i.a.createElement("input",{type:"password",name:"password",className:"form-input"+(o&&!n?" error":""),value:n,onChange:this.handleChange}),o&&!n&&i.a.createElement("div",{className:"error-block password"},"Please enter password")),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"password"},"Repeat Password"),i.a.createElement("input",{type:"password",name:"repassword",className:"form-input"+(!o||r&&r===n?"":" error"),value:r,onChange:this.handleChange}),o&&!r&&i.a.createElement("div",{className:"error-block repassword"},"Repeating passwords is mandatory!"),o&&r!==n&&i.a.createElement("div",{className:"error-block repassword"},"Entered passwords do not match")),i.a.createElement("div",{className:"form-group"},i.a.createElement("button",{className:"form-btn",disabled:e},e?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"fas fa-spinner  fa-spin"}),"Please wait ..."):"Registration")),i.a.createElement("span",null,"Already have an account? ",i.a.createElement(_.a,{exact:!0,to:"/login"}," Login ")," "))))}}]),a}(l.Component),ie=Object(h.b)((function(e){return{loading:e.signup.loading}}),(function(e){var t=re;return Object(S.bindActionCreators)({attempt:t},e)}))(le),se={failure:!1,loading:!1};var me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:case te:return Object(b.a)(Object(b.a)({},e),t.payload);default:return e}},ue=x.a.mark(pe),de=x.a.mark(fe);function pe(e){var t;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload.params,a.prev=1,a.next=4,Object(K.c)(ce(!0));case 4:return a.next=6,Object(K.b)(Ne,{url:"/login",data:t});case 6:a.sent,alert("You have successfully Registered! Please use your account :) "),Oe.dispatch(Object(T.push)("/login")),a.next=16;break;case 11:return a.prev=11,a.t0=a.catch(1),a.next=15,Object(K.c)(oe(!0,a.t0.response.data.error));case 15:alert(a.t0.response.data.error);case 16:return a.prev=16,a.next=19,Object(K.c)(ce(!1));case 19:return a.finish(16);case 20:case"end":return a.stop()}}),ue,null,[[1,11,16,20]])}function fe(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.d)(ae,pe);case 2:case"end":return e.stop()}}),de)}var he=[fe()],ge={Signup:ie,reducers:me,sagas:he,actions:c,constants:o},be=a(20),ve=Object(be.a)(),Ee=x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.a)([].concat(Object(C.a)(Z.sagas),Object(C.a)(ge.sagas)));case 2:case"end":return e.stop()}}),e)})),we=Object(F.a)(),Oe=(Object(D.createLogger)(),Object(S.createStore)((function(e,t){return t.type,e=void 0,Object(S.combineReducers)({routing:T.routerReducer,login:Z.reducers,signup:ge.reducers})(e,t)}),Object(A.composeWithDevTools)(Object(S.applyMiddleware)(we,Object(T.routerMiddleware)(ve)))));we.run(Ee),j.a.defaults.baseURL="https://reqres.in/api";var Ne=function(e){return j.a.post(e.url,e.data).then((function(e){return e})).catch((function(e){throw e}))},ye=function(e){return Oe.dispatch({type:e})},je=a(18),ke=a(19);function xe(){var e=Object(je.a)(["\n  width: 100%;\n  max-width: 1100px;\n  margin: 0 auto;\n  position: relative;\n  text-align: center;\n  h1{\n    line-height: 3rem;\n    margin: 0;\n    padding: 0;\n    font-size: 1.5rem;\n  }\n  .btn{\n  position: absolute;\n   top: 50%;\n        transform: translateY(-50%);\n      &.logout{   \n        right: 10px;       \n      }\n      &.cart{    \n        left: 250px;       \n      }\n      &.main{\n        left: 0px;       \n      }\n  }\n"]);return xe=function(){return e},e}function Ce(){var e=Object(je.a)(["\n  width: 100%;\n  height: 3rem;\n  background: #f1f1f1;\n  border-bottom: 1px solid #ccc;\n  color: #333;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 999;\n"]);return Ce=function(){return e},e}var Se=ke.b.div(Ce()),Ae=ke.b.div(xe()),Te=function(e){e.preventDefault(),ye("MAIN_PAGE"),Oe.dispatch(Object(T.push)("/"))},Fe=function(e){e.preventDefault(),ye("CART_OPEN"),Oe.dispatch(Object(T.push)("/cart"))},De=function(e){e.preventDefault(),localStorage.removeItem("authToken"),ye("USER_LOGOUT"),Oe.dispatch(Object(T.push)("/login"))},Pe=function(e){return i.a.createElement(Se,null,i.a.createElement(Ae,null,i.a.createElement("h1",null,e.title),e.btn&&i.a.createElement("div",{className:"btns"},i.a.createElement("button",{className:"btn main",onClick:Te},"Plants Catalog")),e.btn&&i.a.createElement("div",{className:"btns"},i.a.createElement("button",{className:"btn cart",onClick:Fe},"Cart")),e.btn&&i.a.createElement("div",{className:"btns"},i.a.createElement("button",{className:"btn logout",onClick:De},"Logout"))))};function Ie(){var e=Object(je.a)(["\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n  padding: 2rem 1rem ;\n"]);return Ie=function(){return e},e}var Le=ke.b.div(Ie()),Re=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Pe,{title:e.title,btn:e.private}),i.a.createElement(Le,null,i.a.createElement("div",{className:"container"},e.children)))},Ue=a(35),Me=function(e){var t=e.product;return i.a.createElement("div",{className:" column is-half"},i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-64x64"},i.a.createElement("img",{src:t.imgUrl,alt:"product"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("b",null,t.name,i.a.createElement("span",{className:"tag is-primary",style:{marginLeft:"10px"}},t.price,"   \u20ac")),i.a.createElement("div",null,t.shortDesc),t.stock>0?i.a.createElement("small",null,t.stock+" Left In Stock"):i.a.createElement("small",{className:"has-text-danger"},"\u10d0\u10e6\u10d0\u10e0 \u10d0\u10e0\u10d8\u10e1 \u10db\u10d0\u10e0\u10d0\u10d2\u10e8\u10d8\u10d8\u10d8"),i.a.createElement("div",{className:"is-clearfix"},i.a.createElement("button",{className:"button is-small is-outlined is-primary   is-pulled-right",onClick:function(){return e.addToCart({id:t.name,product:t,amount:1})}},"Add to Cart"))))))},ze=i.a.createContext({}),Be=function(e){var t=function(t){return i.a.createElement(ze.Consumer,null,(function(a){return i.a.createElement(e,Object.assign({},t,{context:a}))}))};return t.WrappedComponent=e,t},Ge=Be((function(e){var t=e.context.products;return i.a.createElement(l.Fragment,null,i.a.createElement("div",{className:"hero is-primary"},i.a.createElement("div",{className:"hero-body container"},i.a.createElement("h4",{className:"title"},"Shop Unique Plants Online"))),i.a.createElement("br",null),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"column columns is-multiline"},t&&t.length?t.map((function(t,a){return i.a.createElement(Me,{product:t,key:a,addToCart:e.context.addToCart})})):i.a.createElement("div",{className:"column"},i.a.createElement("span",{className:"title has-text-grey-light"},"\u10d5\u10d4\u10e0 \u10db\u10dd\u10d8\u10eb\u10d4\u10d1\u10dc\u10d0 \u10de\u10e0\u10dd\u10d3\u10e3\u10e5\u10e2\u10d4\u10d1\u10d8!")))))})),_e=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e="Catalog of Plants";return i.a.createElement(i.a.Fragment,null,i.a.createElement(Re,{title:e,private:!0},i.a.createElement(N,{title:e}),i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(Ue.a,{to:"/"},a))))),i.a.createElement(Ge,null))}}]),a}(l.Component),Je=function(e){var t=e.cartItem,a=e.cartKey,n=t.product,r=t.amount;return i.a.createElement("div",{className:" column is-half"},i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-64x64"},i.a.createElement("img",{src:n.imgUrl,alt:"product"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("b",null,n.name,i.a.createElement("span",{className:"tag is-primary",style:{marginLeft:"10px"}},n.price,"\u20be")),i.a.createElement("div",null,n.shortDesc),i.a.createElement("small",null,"".concat(r," items in cart"))),i.a.createElement("div",{className:"media-right",onClick:function(){return e.removeFromCart(a)}},i.a.createElement("span",{className:"delete is-large"})))))},qe=Be((function(e){var t=e.context.cart,a=Object.keys(t||{});return i.a.createElement(l.Fragment,null,i.a.createElement("div",{className:"hero is-primary"},i.a.createElement("div",{className:"hero-body container"},i.a.createElement("h4",{className:"title"},"List of choosen products"))),i.a.createElement("br",null),i.a.createElement("div",{className:"container"},a.length?i.a.createElement("div",{className:"column columns is-multiline"},a.map((function(a){return i.a.createElement(Je,{cartKey:a,key:a,cartItem:t[a],removeFromCart:e.context.removeFromCart})})),i.a.createElement("div",{className:"column is-12 is-clearfix"},i.a.createElement("br",null),i.a.createElement("div",{className:"is-pulled-right"},i.a.createElement("button",{onClick:e.context.clearCart,className:"button is-warning "},"Delete all products")," ",i.a.createElement("button",{className:"button is-success",onClick:e.context.checkout},"Proceed")))):i.a.createElement("div",{className:"column"},i.a.createElement("div",{className:"title has-text-grey-light"},"Please choose products before proceeding"))))})),He=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e="Your Cart";return i.a.createElement(i.a.Fragment,null,i.a.createElement(Re,{title:e,private:!0},i.a.createElement(N,{title:e}),i.a.createElement("div",{className:"posts"},i.a.createElement("nav",{className:"main-nav"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(Ue.a,{to:"/"},a)))))),i.a.createElement(qe,null))}}]),a}(l.Component);function We(){var e=Object(je.a)(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate3d(-50%,-50%,0);\n  text-align: center;\n  color: #999;\n  h1{\n    font-size: 7rem;\n    line-height: 1;\n    padding: 0;\n    margin: 0;\n  }\n  h2{\n    font-size: 2rem;\n    line-height: 1;\n    margin-bottom: 20px;\n  }\n"]);return We=function(){return e},e}function Ke(){var e=Object(je.a)(["\n  width: 100%;\n  height: 100vh;\n  position: relative;\n"]);return Ke=function(){return e},e}var Ve=ke.b.div(Ke()),Ye=ke.b.div(We()),Xe=function(){return i.a.createElement(Ve,null,i.a.createElement(N,{title:"404 not found"}),i.a.createElement(Ye,null,i.a.createElement("h1",null,"404"),i.a.createElement("h2",null,"Not Found"),i.a.createElement(_.a,{exact:!0,to:"/"},i.a.createElement("i",{className:"fas fa-arrow-left"}),"\u10db\u10d7\u10d0\u10d5\u10d0\u10e0 \u10d2\u10d5\u10d4\u10e0\u10d3\u10d6\u10d4 \u10d3\u10d0\u10d1\u10e0\u10e3\u10dc\u10d4\u10d1\u10d0")))},Qe=a(59),$e=a(103),Ze=function(e){var t=e.component,a=Object(Qe.a)(e,["component"]);return i.a.createElement(w.a,Object.assign({},a,{render:function(e){return localStorage.getItem("authToken")?i.a.createElement(t,e):i.a.createElement($e.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},et={initProducts:[{name:"Fruiting Orange Bush",stock:60,price:39.99,shortDesc:"Perfect for a warm conservatory",imgUrl:"https://www.thompson-morgan.com/product_images/100/optimised/ORAN-KA8252-A1.jpg"},{name:"Anthurium Aqua in Sierglass",stock:33,price:19.99,shortDesc:"Glossy, heart shaped foliage",imgUrl:"https://www.thompson-morgan.com/product_images/100/optimised/ANTH-KB3998-A1.jpg"},{name:"Bonsai",stock:23,price:249.99,shortDesc:"Small but Unique Japanese tree",imgUrl:"https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/5/15/0/RX_William_N-Valavnis-Deshojo-Bonsai.jpg.rend.hgtvcom.616.493.suffix/1557921570765.jpeg"},{name:"Dahlia 'Creme de Cassis'",stock:11.99,price:6.99,shortDesc:"Fabulous for cut flower arrangements",imgUrl:"https://www.thompson-morgan.com/product_images/100/optimised/DAHL-TKA0119-A1.jpg"},{name:"Begonia",stock:13.99,price:"7.99",shortDesc:"Keeps blooming - whatever the weather",imgUrl:"https://www.thompson-morgan.com/product_images/100/optimised/BEGO-P92134-A_h.jpg"},{name:"Violet Floral",stock:100,price:2.99,shortDesc:"Elegant violet for super extra romancy ",imgUrl:"https://cdn.pixabay.com/photo/2017/08/08/12/16/flower-2611254_1280.jpg"},{name:"Ancient Violet Rose",stock:51,price:4.99,shortDesc:"Magnificent and Charming",imgUrl:"https://images-na.ssl-images-amazon.com/images/I/41FRl8NhlpL.jpg"},{name:"Cactus",stock:12,price:35.99,shortDesc:"Cactus from very Safara desert",imgUrl:"https://images.unsplash.com/photo-1554631221-f9603e6808be?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"}]},tt=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).addToCart=function(e){var t=n.state.cart;t[e.id]?t[e.id].amount+=e.amount:t[e.id]=e,t[e.id].amount>t[e.id].product.stock&&(t[e.id].amount=t[e.id].product.stock),localStorage.setItem("cart",JSON.stringify(t)),n.setState({cart:t})},n.checkout=function(){alert("\u10d0\u10d8 \u10db\u10dd\u10d2\u10d8\u10e2\u10d0\u10dc\u10d7 \u10e1\u10d0\u10ee\u10da\u10e8\u10d8 \u10d0\u10ee\u10da\u10d0\u10d5\u10d4");var e=n.state.cart,t=n.state.products.map((function(t){return e[t.name]&&(t.stock=t.stock-e[t.name].amount),t}));n.setState({products:t}),n.clearCart()},n.removeFromCart=function(e){var t=n.state.cart;delete t[e],localStorage.setItem("cart",JSON.stringify(t)),n.setState({cart:t})},n.clearCart=function(){var e={};localStorage.setItem("cart",JSON.stringify(e)),n.setState({cart:e})},n.state={cart:{},products:[]},n.routerRef=i.a.createRef(),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("products"),t=localStorage.getItem("cart");e=e?JSON.parse(e):et.initProducts,t=t?JSON.parse(t):{},this.setState({products:e,cart:t})}},{key:"render",value:function(){return i.a.createElement(ze.Provider,{value:Object(b.a)(Object(b.a)({},this.state),{},{removeFromCart:this.removeFromCart,addToCart:this.addToCart,clearCart:this.clearCart,checkout:this.checkout})},i.a.createElement(v.a,{history:ve},i.a.createElement(E.a,null,i.a.createElement(Ze,{path:"/",exact:!0,component:_e}),i.a.createElement(w.a,{path:"/login",exact:!0,component:q}),i.a.createElement(w.a,{path:"/signup",exact:!0,component:ie}),i.a.createElement(w.a,{path:"/cart",exact:!0,component:He}),i.a.createElement(w.a,{path:"*",component:Xe}))))}}]),a}(l.Component);function at(){var e=Object(je.a)(["\n    html {font-size: 16px }\n\n      *{\n       box-sizing: border-box;\n     }    \n    #root{\n      width: 100%;\n      float: left;\n      overflow: hidden;\n    }\n    .form-box{\n        display: block;\n        width: 92%;\n        max-width: 400px;\n        margin:1.5rem auto;\n    }\n    form{\n      display: block;\n      width: 100%;\n      float: left;\n    }\n    .form-group{\n      margin-bottom: 1rem;\n      width: 100%;\n      float: left;\n    }\n    label {\n        display: inline-block;\n        margin-bottom: .5rem;\n        font-weight: 500;\n    }\n    .form-input {\n        display: block;\n        width: 100%;\n        line-height: 1.5;\n        padding: .5rem .75rem;\n        font-size: 1rem;\n        color: #495057;\n        background-color: #fff;\n        background-clip: padding-box;\n        border:1px solid #ced4da;\n        transition: border-color .5s ease-in-out;\n        &:focus {\n            color: #495057;\n            background-color: #fff;\n            border-color: #009688;\n            outline: 0;\n        }\n        &.error{\n          border-color: red;\n        }\n    }\n    .error-block{\n      color: red;\n      font-size: .8rem;\n    }\n    button, input {\n        overflow: visible;\n    }\n    .form-btn {\n        display: block;\n        width: 100%;\n        font-weight: 400;\n        text-align: center;\n        white-space: nowrap;\n        vertical-align: middle;\n        user-select: none;\n        border: 1px solid #009688;\n        padding: .5rem .75rem;\n        font-size: 1.35rem;\n        line-height: 1.5;\n        border-radius: .25rem;\n        color: #fff;\n        background-color: #009688;\n        transition: color .5s ease-in-out,background-color .5s ease-in-out,border-color .5s ease-in-out;\n        &:not(:disabled):not(.disabled) {\n            cursor: pointer;\n        }\n        &:not(:disabled):not(.disabled):hover{\n          background-color:#00796B;\n          border-color:#00796B ;\n        }\n        &:focus{\n          outline: none;\n        }\n        &.disabled, &:disabled {\n            opacity: .65;\n        }\n    }\n    .btn {\n        display: inline-block;\n        font-weight: 400;\n        text-align: center;\n        white-space: nowrap;\n        vertical-align: middle;\n        user-select: none;\n        border: 1px solid #bbb;\n        padding: .25rem .5rem;\n        font-size: .9rem;\n        line-height: 1.25;\n        border-radius: .25rem;\n        color: #333;\n        background-color: #fff;\n        transition: color .5s ease-in-out,background-color .5s ease-in-out,border-color .5s ease-in-out;\n        &:not(:disabled):not(.disabled) {\n            cursor: pointer;\n        }\n        &:not(:disabled):not(.disabled):hover{\n          color: #111;\n          background-color:#f7f7f7;\n          border-color:#999 ;\n        }\n        &:focus{\n          outline: none;\n        }\n        &.disabled, &:disabled {\n            opacity: .65;\n        }\n    }\n    @keyframes loading{0%{background-position:100% 50%}100%{background-position:0 50%}}\n    .loading-animate{\n                background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);         \n                animation: loading 1.4s ease infinite;\n                background-size: 400% 100%; \n    }\n"]);return at=function(){return e},e}var nt=Object(ke.a)(at()),rt=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(nt,null),i.a.createElement(tt,null))}}]),a}(l.Component),ot=Object(g.a)(Object(h.b)(null,null)(rt)),ct=a(102);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(96);var lt=i.a.createElement(h.a,{store:Oe},i.a.createElement(ct.a,null,i.a.createElement(ot,null)));m.a.render(lt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[97,1,2]]]);
//# sourceMappingURL=main.7b8e76fe.chunk.js.map