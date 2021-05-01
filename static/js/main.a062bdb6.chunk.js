(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.f3ad7664.svg"},20:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),s=(a(25),a(5)),i=a(1),o={name:"React-Cocktails",nav:{home:"/React-Cocktails",about:"/React-Cocktails/about",cocktailDetails:"/React-Cocktails/cocktail/:id",error:"*"}},m=function(e){var t=e.id,a=e.image,n=e.name,r=e.info,l=e.glass;return c.a.createElement("article",{className:"cocktail"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:a,alt:n})),c.a.createElement("div",{className:"cocktail-footer"},c.a.createElement("h3",null,n),c.a.createElement("h4",null,l),c.a.createElement("p",null,r),c.a.createElement(s.b,{className:"btn btn-primary btn-details",to:o.nav.cocktailDetails.replace(":id",t)},"details")))},u=function(){return c.a.createElement("div",{className:"loader"})},E=a(9),d=a.n(E),p=a(11),f=a(8),b=c.a.createContext(),v=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(f.a)(a,2),l=r[0],s=r[1],i=Object(n.useState)("a"),o=Object(f.a)(i,2),m=o[0],u=o[1],E=Object(n.useState)([]),v=Object(f.a)(E,2),h=v[0],k=v[1],g=Object(n.useCallback)(Object(p.a)(d.a.mark((function e(){var t,a,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").concat(m));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,n=a.drinks,c=[],n&&(c=n.map((function(e){return{id:e.idDrink,name:e.strDrink,image:e.strDrinkThumb,info:e.strAlcoholic,glass:e.strGlass}}))),k(c),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:s(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])}))),[m]);return Object(n.useEffect)((function(){g()}),[m,g]),c.a.createElement(b.Provider,{value:{loading:l,cocktails:h,setSearchTerm:u}},t)},h=function(){return Object(n.useContext)(b)},k=function(){var e=h(),t=e.cocktails;return e.loading?c.a.createElement(u,null):t.length<1?c.a.createElement("h2",{className:"section-title"},"no cocktails matched your search criteria"):c.a.createElement("section",null,c.a.createElement("h2",{className:"section-title"},"cocktails"),c.a.createElement("div",{className:"cocktails-center"},t.map((function(e){return c.a.createElement(m,Object.assign({key:e.id},e))}))))},g=function(){var e=h().setSearchTerm,t=c.a.useRef("");c.a.useEffect((function(){t.current.focus()}),[]);return c.a.createElement("section",{className:"section search"},c.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault()}},c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"name"},"search your favorite cocktail"),c.a.createElement("input",{type:"text",id:"name",ref:t,onChange:function(){e(t.current.value)}}))))},N=function(){return c.a.createElement("main",null,c.a.createElement(g,null),c.a.createElement(k,null))},j=function(){return c.a.createElement("section",{className:"section about-section"},c.a.createElement("h1",{className:"section-title"},"about us"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, tempore? Ea unde suscipit accusantium, quae reiciendis fugiat corporis voluptate enim deleniti ipsam vel quasi et quisquam temporibus obcaecati at. Ad fugiat voluptates sapiente nostrum vel ullam qui a voluptate non."))},O=function(){var e=Object(i.f)().id,t=c.a.useState(!1),a=Object(f.a)(t,2),n=a[0],r=a[1],l=c.a.useState(null),m=Object(f.a)(l,2),E=m[0],b=m[1],v=c.a.useCallback(Object(p.a)(d.a.mark((function t(){var a,n,c,l,s,i,o,m,u,E,p,f,v,h;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(!0),t.prev=1,t.next=4,fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=").concat(e));case 4:return a=t.sent,t.next=7,a.json();case 7:(n=t.sent).drinks?(c=n.drinks[0],l=c.strDrink,s=c.strDrinkThumb,i=c.strAlcoholic,o=c.strCategory,m=c.strGlass,u=c.strInstructions,E=c.strIngredient1,p=c.strIngredient2,f=c.strIngredient3,v=c.strIngredient4,h=c.strIngredient5,b({name:l,image:s,info:i,category:o,glass:m,instructions:u,ingredients:[E,p,f,v,h]})):b(null),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:r(!1);case 15:case"end":return t.stop()}}),t,null,[[1,11]])}))),[e]);if(c.a.useEffect((function(){v()}),[e,v]),n)return c.a.createElement(u,null);if(!E)return c.a.createElement("h2",{className:"section-title"},"no cocktail to display");var h=E.name,k=E.image,g=E.category,N=E.info,j=E.glass,O=E.instructions,x=E.ingredients;return c.a.createElement("section",{className:"section cocktail-section"},c.a.createElement(s.b,{className:"btn btn-primary",to:o.nav.home},"back home"),c.a.createElement("h2",{className:"section-title"},h),c.a.createElement("div",{className:"drink"},c.a.createElement("img",{src:k,alt:h}),c.a.createElement("div",{className:"drink-info"},c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"name:"),h),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"category:"),g),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"info:"),N),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"glass:"),j),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"instructions:"),O),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"ingredients:"),x.map((function(e,t){return e?c.a.createElement("span",{key:t},e):null}))))))},x=function(){return c.a.createElement("section",{className:"error-page section"},c.a.createElement("div",{className:"error-container"},c.a.createElement("h1",null,"oops! it's a dead end"),c.a.createElement(s.b,{to:"/",className:"btn btn-primary"},"back home")))},y=a(19),w=a.n(y),C=function(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"nav-center"},c.a.createElement(s.b,{to:o.nav.home},c.a.createElement("img",{src:w.a,alt:"cocktail db logo",className:"logo"})),c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(s.b,{to:o.nav.home},"home")),c.a.createElement("li",null,c.a.createElement(s.b,{to:o.nav.about},"about")))))};var D=function(){return c.a.createElement("div",null,c.a.createElement(s.a,null,c.a.createElement(C,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:o.nav.home},c.a.createElement(N,null)),c.a.createElement(i.a,{path:o.nav.about},c.a.createElement(j,null)),c.a.createElement(i.a,{path:o.nav.cocktailDetails},c.a.createElement(O,null)),c.a.createElement(i.a,{path:o.nav.error},c.a.createElement(x,null)))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null,c.a.createElement(D,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.a062bdb6.chunk.js.map