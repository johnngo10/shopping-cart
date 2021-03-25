(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),a=c(19),r=c.n(a),n=c(9),d=c(18),o=c(8),l=c(4),j=c(2),u=c(0),b=function(e){var t=e.cartNum;return Object(u.jsxs)("div",{className:"header-container",children:[Object(u.jsx)("h1",{id:"logo",children:Object(u.jsx)(l.b,{to:"/",className:"Link",children:"WestTech"})}),Object(u.jsxs)("ul",{className:"nav-menus",children:[Object(u.jsx)(l.b,{to:"/",className:"Link",children:Object(u.jsx)("li",{className:"nav-items",children:"Home"})}),Object(u.jsx)(l.b,{to:"/products",className:"Link",children:Object(u.jsx)("li",{className:"nav-items",children:"Products"})})]}),Object(u.jsx)("div",{id:"cart",children:Object(u.jsx)(l.b,{to:"/cart",className:"Link",children:Object(u.jsxs)("div",{className:"cart-content",children:[Object(u.jsx)("i",{className:"fas fa-shopping-cart"}),Object(u.jsx)("p",{children:"Cart"}),Object(u.jsxs)("p",{children:["(",t,")"]})]})})})]})},p=(c(34),function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"hero-image",children:Object(u.jsxs)("div",{className:"hero-content",children:[Object(u.jsx)("h2",{children:"Discover True Power"}),Object(u.jsx)("p",{children:"Ultimate performance for gamers and creators"}),Object(u.jsx)(l.b,{to:"/products",children:Object(u.jsx)("button",{className:"shop-btn-white",children:"SHOP NOW"})})]})}),Object(u.jsxs)("div",{className:"showcase-1",children:[Object(u.jsx)("div",{className:"showcase-img-container",children:Object(u.jsx)("img",{src:"/shopping-cart/img/showcase.jpg"})}),Object(u.jsxs)("div",{className:"showcase-text",children:[Object(u.jsx)("h3",{children:"Custom Crafted PC"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),Object(u.jsx)(l.b,{to:"/products",children:Object(u.jsx)("button",{className:"shop-btn",children:"SHOP NOW"})})]})]}),Object(u.jsxs)("div",{className:"features",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:"/shopping-cart/img/feature/feature1.jpg"}),Object(u.jsx)("h3",{children:"Made with quality parts"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:"/shopping-cart/img/feature/feature2.jpg"}),Object(u.jsx)("h3",{children:"Built with perfection"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:"/shopping-cart/img/feature/feature3.jpg"}),Object(u.jsx)("h3",{children:"Tested rigoriously and ready for use"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]}),Object(u.jsxs)("div",{className:"newsletter",children:[Object(u.jsx)("h3",{children:"Join our newsletter!"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"text",className:"news-input",placeholder:"Email address"}),Object(u.jsx)("input",{type:"submit",className:"news-submit-btn",value:"Subscribe"})]})]})]})}),m=function(e){var t=e.productArr,c=Object(i.useState)(t),s=Object(o.a)(c,2),a=s[0];s[1];return Object(u.jsxs)("div",{className:"products-container",children:[Object(u.jsx)("h1",{children:"Products"}),Object(u.jsx)("div",{className:"products",children:a.map((function(e,t){return Object(u.jsx)(l.b,{className:"Link",to:{pathname:"/product/".concat(e.id),product:{value:e}},children:Object(u.jsxs)("div",{className:"product",children:[Object(u.jsx)("img",{src:"/shopping-cart"+e.img}),Object(u.jsx)("p",{className:"product-titles",children:e.title}),Object(u.jsxs)("p",{children:["$",e.price]})]})},t)}))})]})},h=function(e){var t=e.location.product.value,c=e.addToCartHandler,s=Object(i.useState)({id:t.id,img:t.img,title:t.title,description:t.description,price:t.price,totalPrice:t.totalPrice,qty:t.qty}),a=Object(o.a)(s,2),r=a[0],d=a[1];return Object(u.jsx)("div",{className:"product-page-container",children:Object(u.jsxs)("div",{className:"product-page-contents",children:[Object(u.jsx)("div",{className:"product-page-img-container",children:Object(u.jsx)("img",{src:"/shopping-cart"+r.img})}),Object(u.jsxs)("div",{className:"product-page-content",children:[Object(u.jsx)("h3",{className:"product-page-title",children:r.title}),Object(u.jsxs)("p",{className:"product-page-price",children:["$",r.price]}),Object(u.jsxs)("div",{className:"product-page-quantity",children:[Object(u.jsx)("label",{children:"Quantity"}),Object(u.jsx)("input",{type:"number",min:"1",defaultValue:"1",className:"quantity",onChange:function(e){var t=parseInt(e.target.value),c=r.price*t;d(Object(n.a)(Object(n.a)({},r),{},{qty:t,totalPrice:c}))}})]}),Object(u.jsxs)("div",{className:"product-page-button",children:[Object(u.jsx)("button",{className:"add-to-cart",onClick:function(){return c(r)},children:"ADD TO CART"}),Object(u.jsx)("button",{className:"buy-now",children:"BUY IT NOW"})]}),Object(u.jsx)("p",{className:"product-page-description",children:r.description})]})]})})},O=function(e){var t=e.cartItems,c=e.removeCartHandler,a=e.qtyCartHandler,r=Object(i.useState)(t),n=Object(o.a)(r,2),d=n[0],j=(n[1],Object(i.useState)(0)),b=Object(o.a)(j,2),p=b[0],m=b[1];Object(i.useEffect)((function(){h()}),d);var h=function(){for(var e=0,t=0;t<d.length;t++)e+=d[t].totalPrice;m(e.toFixed(2))},O=function(e){for(var t=parseInt(e.target.value),c=e.target.parentElement.parentElement.getAttribute("id"),i=[],s=0;s<d.length;s++)d[s].id===c&&i.push(d[s]);a(c,t,i[0].price),h()};return Object(u.jsxs)("div",{className:"cart-container",children:[Object(u.jsxs)("div",{className:"cart-header",children:[Object(u.jsx)("h1",{children:"Your Cart"}),Object(u.jsx)(l.b,{to:"/products",className:"Link",children:Object(u.jsx)("p",{children:"Continue Shopping"})})]}),d.length<1?Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:"Your cart is currently empty"})}):Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsxs)("div",{className:"cart-contents",children:[Object(u.jsxs)("div",{className:"table-header",children:[Object(u.jsx)("p",{className:"table-header-1",children:"PRODUCT"}),Object(u.jsx)("p",{className:"table-header-2",children:"PRICE"}),Object(u.jsx)("p",{className:"table-header-3",children:"QUANTITY"}),Object(u.jsx)("p",{className:"table-header-4",children:"TOTAL"})]}),d.map((function(e,t){return Object(u.jsxs)("div",{className:"cart-product",id:e.id,children:[Object(u.jsx)("div",{className:"cart-img-container",children:Object(u.jsx)(l.b,{className:"Link",to:{pathname:"/product/".concat(e.id),product:{value:e}},children:Object(u.jsx)("img",{src:"/shopping-cart"+e.img})})}),Object(u.jsxs)("div",{className:"cart-product-title-cont",children:[Object(u.jsx)("p",{className:"cart-product-title",children:e.title}),Object(u.jsx)("p",{className:"cart-product-remove",onClick:function(){c(e.id,e.qty),h()},children:"Remove"})]}),Object(u.jsxs)("p",{className:"cart-product-price",children:["$",e.price]}),Object(u.jsx)("div",{className:"cart-product-quantity",children:Object(u.jsx)("input",{type:"number",min:"1",defaultValue:e.qty,onChange:O})}),Object(u.jsxs)("p",{className:"cart-product-total",children:["$",e.totalPrice.toFixed(2)]})]},t)}))]}),Object(u.jsxs)("div",{className:"total-container",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"subtotal",children:"Subtotal"}),Object(u.jsxs)("p",{children:["$",p]})]}),Object(u.jsx)("button",{className:"checkout-btn",children:"CHECK OUT"})]})]})]})},x=function(){return Object(u.jsx)("div",{className:"footer-container",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"\xa92021 WestTech"}),Object(u.jsxs)("ul",{className:"social-container",children:[Object(u.jsx)("li",{children:Object(u.jsx)("i",{className:"fab fa-facebook"})}),Object(u.jsx)("li",{children:Object(u.jsx)("i",{className:"fab fa-twitter"})}),Object(u.jsx)("li",{children:Object(u.jsx)("i",{className:"fab fa-instagram"})})]})]})})},g=c(37),N=function(){var e=Object(i.useState)(0),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)([]),r=Object(o.a)(a,2),N=r[0],v=r[1],f=Object(i.useState)([{id:Object(g.a)(),img:"/img/products/product1.jpg",title:"IBUYPOWER Trace 4 9310",description:"AMD Ryzen 5 3600 3.6GHz, AMD Radeon RX 5500 XT 4GB, 8GB DDR4 RAM, 240GB SSD, Wi-Fi Ready, Windows 10 Home",price:1069.99,totalPrice:1069.99,qty:1},{id:Object(g.a)(),img:"/img/products/product2.jpg",title:"Skytech Archangel",description:"Ryzen 5 3600 3.6GHz, GTX 1660 Super 6G, 500GB SSD, 16GB DDR4 3000MHz, RGB Fans, Windows 10 Home 64-bit, 802.11AC Wi-Fi",price:1324.99,totalPrice:1324.99,qty:1},{id:Object(g.a)(),img:"/img/products/product3.jpg",title:"Skytech Chronos Mini",description:"AMD Ryzen 3 3100, NVIDIA GTX 1650 4GB, 8GB DDR4, 500GB SSD, A320 Motherboard, 550 Watt Bronze, AC Wi-Fi, Windows 10 Home 64-bit",price:974.99,totalPrice:974.99,qty:1},{id:Object(g.a)(),img:"/img/products/product4.jpg",title:"Skytech Shadow",description:"AMD Ryzen 3 3100, GTX 1660 6G, 16GB DDR4 3000, 1TB SSD, A520 Motherboard, 500W PSU, Black",price:1749.99,totalPrice:1749.99,qty:1},{id:Object(g.a)(),img:"/img/products/product5.jpg",title:"iBUYPOWER Element Mini 9300",description:"AMD Ryzen 3 3100 3.6GHz, AMD Radeon RX 550 2GB, 8GB DDR4 RAM, 240GB SSD, Wi-Fi Ready, Windows 10 Home",price:584.99,totalPrice:584.99,qty:1},{id:Object(g.a)(),img:"/img/products/product6.jpg",title:"iBUYPOWER 1000iV2",description:"Intel i7-10700F 2.9GHz, NVIDIA GeForce RTX 2060 6GB, 16GB DDR4 RAM, 480GB SSD, 2TB HDD, WiFi Ready, Windows 10 Home",price:1499.99,totalPrice:1499.99,qty:1}]),y=Object(o.a)(f,2),q=y[0],D=(y[1],function(e){var t=e.id,i=e.img,a=e.title,r=e.description,n=e.price,o=e.totalPrice,l=e.qty,j={id:t,img:i,title:a,description:r,price:n,totalPrice:o,qty:l};if(N.length<1)v([].concat(Object(d.a)(N),[j])),s(c+l);else if(N.findIndex((function(e){return e.id===j.id}))>-1){s(c+l);for(var u=0;u<N.length;u++)if(N[u].id===j.id)return N[u].totalPrice+=j.totalPrice,N[u].qty+=j.qty}else N.findIndex((function(e){return e.id===j.id}))<0&&(s(c+l),v([].concat(Object(d.a)(N),[j])))}),S=function(e,t){var i=N.findIndex((function(t){return t.id===e}));return s(c-t),N.splice(i,1)},R=function(e,t,i){for(var a=0;a<N.length;a++)N[a].id===e&&N[a].qty>t?(s(c-1),N[a].qty=t,N[a].totalPrice-=i):N[a].id===e&&N[a].qty<t&&(s(c+1),N[a].qty=t,N[a].totalPrice+=i)};return Object(u.jsxs)(l.a,{children:[Object(u.jsx)(b,{cartNum:c}),Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{exact:!0,path:"/",component:p}),Object(u.jsx)(j.a,{exact:!0,path:"/product/:id",render:function(e){return Object(u.jsx)(h,Object(n.a)(Object(n.a)({},e),{},{addToCartHandler:D}))}}),Object(u.jsx)(j.a,{exact:!0,path:"/products",render:function(e){return Object(u.jsx)(m,Object(n.a)(Object(n.a)({},e),{},{productArr:q}))}}),Object(u.jsx)(j.a,{exact:!0,path:"/cart",render:function(e){return Object(u.jsx)(O,Object(n.a)(Object(n.a)({},e),{},{cartItems:N,removeCartHandler:S,qtyCartHandler:R}))}})]}),Object(u.jsx)(x,{})]})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.efde63ca.chunk.js.map