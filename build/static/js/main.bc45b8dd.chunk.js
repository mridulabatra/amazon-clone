(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{40:function(e,a,t){e.exports=t(72)},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},70:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(34),l=t.n(r),i=(t(45),t(4)),o=(t(46),t(12)),s=t(3),m=(t(47),t(48),Object(n.createContext)()),u=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(m.Provider,{value:Object(n.useReducer)(a,t)},r)},d=function(){return Object(n.useContext)(m)};var E=function(e){var a=e.id,t=e.title,n=e.image,r=e.price,l=e.rating,o=d(),s=Object(i.a)(o,2),m=s[0].basket,u=s[1];return console.log(m),c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,t),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"product__rating"},Array(l).fill().map((function(e,a){return c.a.createElement("p",null,c.a.createElement("span",{"aria-label":"xyz",role:"img"},"\ud83c\udf1f"))})))),c.a.createElement("img",{src:n,alt:""}),c.a.createElement("button",{onClick:function(){u({type:"ADD_TO_BASKET",item:{id:a,title:t,image:n,price:r,rating:l}})}},"Add to Basket"))};var g=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__container"},c.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),c.a.createElement("div",{className:"home__row"},c.a.createElement(E,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),c.a.createElement(E,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(E,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),c.a.createElement(E,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),c.a.createElement(E,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(E,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"}))))},p=(t(49),t(50),t(35)),_=t.n(p),h=t(10),v=t(13),b=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},f=function(e,a){switch(console.log(a),a.type){case"ADD_TO_BASKET":return Object(v.a)(Object(v.a)({},e),{},{basket:[].concat(Object(h.a)(e.basket),[a.item])});case"EMPTY_BASKET":return Object(v.a)(Object(v.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex((function(e){return e.id===a.id})),n=Object(h.a)(e.basket);return t>=0?n.splice(t,1):console.warn("Cant remove product (id: ".concat(a.id,") as its not in basket!")),Object(v.a)(Object(v.a)({},e),{},{basket:n});case"SET_USER":return Object(v.a)(Object(v.a)({},e),{},{user:a.user});default:return e}};var k=function(){var e=Object(s.l)(),a=d(),t=Object(i.a)(a,1)[0].basket;return c.a.createElement("div",{className:"subtotal"},c.a.createElement(_.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",t.length," items): ",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:b(t),displayType:"text",thousandSeparator:!0,prefix:"$"}),c.a.createElement("button",{onClick:function(a){return e.push("/payment")}},"Proceed to Checkout"))};t(55);var N=function(e){var a=e.id,t=e.image,n=e.title,r=e.price,l=e.rating,o=e.hideButton,s=d(),m=Object(i.a)(s,2),u=m[0].basket,E=m[1];return console.log(u),c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("span",null,c.a.createElement("img",{alt:"",className:"checkoutProduct__image",src:t})),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},n),c.a.createElement("p",{className:"checkoutProduct__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e,a){return c.a.createElement("p",null,c.a.createElement("span",{"aria-label":"xyz",role:"img"},"\ud83c\udf1f"))}))),!o&&c.a.createElement("button",{onClick:function(){E({type:"REMOVE_FROM_BASKET",id:a})}},"Remove from Basket")))};var S=function(){var e=d(),a=Object(i.a)(e,1)[0],t=a.basket,n=a.user;return c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),c.a.createElement("div",null,c.a.createElement("h3",null,"Hello, ",null===n||void 0===n?void 0:n.email),c.a.createElement("h2",{className:"checkout__title"},"Your shopping Basket"),t.map((function(e){return c.a.createElement(N,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"checkout__right"},c.a.createElement(k,null)))},O=(t(56),t(36)),C=t.n(O),A=t(38),j=t.n(A),w=t(30),y=t.n(w),B=(y.a.initializeApp({apiKey:"AIzaSyAkqYDMJEiIQwVRvWhgzy0HMrYLbbnkk4I",authDomain:"clone-ec612.firebaseapp.com",projectId:"clone-ec612",storageBucket:"clone-ec612.appspot.com",messagingSenderId:"744807557035",appId:"1:744807557035:web:15a7a4bc277be800f1d4ee",measurementId:"G-9N1NRRY9PM"}).firestore(),y.a.auth());var I=function(){var e=d(),a=Object(i.a)(e,1)[0],t=a.basket,n=a.user;return c.a.createElement("div",{className:"header"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{alt:"",className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{className:"header__searchInput",type:"text"}),c.a.createElement(C.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(o.b,{to:!n&&"/login"},c.a.createElement("div",{onClick:function(){n&&B.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Hello ",n?n.email:"Guest"),c.a.createElement("span",{className:"header__optionLineTwo"},n?"Sign Out":"Sign In"))),c.a.createElement(o.b,{to:"/orders"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Returns"),c.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Your"),c.a.createElement("span",{className:"header__optionLineTwo"},"Prime")),c.a.createElement(o.b,{to:"/checkout"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(j.a,null),c.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===t||void 0===t?void 0:t.length)))))};t(70);var P=function(){var e=Object(s.l)(),a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],l=t[1],m=Object(n.useState)(""),u=Object(i.a)(m,2),d=u[0],E=u[1];return c.a.createElement("div",{className:"login"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{alt:"",className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign-in"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{type:"text",value:r,onChange:function(e){return l(e.target.value)}}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"password",value:d,onChange:function(e){return E(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault(),B.signInWithEmailAndPassword(r,d).then((function(a){e("/"),console.log(a)})).catch((function(e){return alert(e.message)}))},className:"login__signInButton"},"Sign In")),c.a.createElement("p",null,"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),c.a.createElement("button",{onClick:function(a){a.preventDefault(),B.createUserWithEmailAndPassword(r,d).then((function(a){a&&e("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account")))};var z=function(){var e=d(),a=Object(i.a)(e,2),t=a[0].basket,r=a[1];return console.log(t),Object(n.useEffect)((function(){B.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),r(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),c.a.createElement(o.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/login",element:c.a.createElement(P,null)})),c.a.createElement(I,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",element:c.a.createElement(g,null)}),c.a.createElement(s.a,{path:"/checkout",element:c.a.createElement(S,null)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,{initialState:{basket:[],user:null},reducer:f},c.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.bc45b8dd.chunk.js.map