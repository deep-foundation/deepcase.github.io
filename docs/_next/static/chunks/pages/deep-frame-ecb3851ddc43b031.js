(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[770],{4066:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deep-frame",function(){return e(9989)}])},2136:function(n,t,e){"use strict";e.d(t,{oM5:function(){return h.oM5},xuv:function(){return h.xuv},zxk:function(){return h.zxk},hE2:function(){return h.hE2},M5Y:function(){return h.M5Y},Cdc:function(){return h.Cdc},W20:function(){return h.W20},kCb:function(){return h.kCb},MJg:function(){return v},rjZ:function(){return h.rjZ},Ugi:function(){return h.Ugi},X6q:function(){return h.X6q},caK:function(){return h.caK},hU:function(){return h.hU},Eep:function(){return h.Eep},EiF:function(){return h.EiF},rUS:function(){return h.rUS},fGe:function(){return h.fGe},AB5:function(){return h.AB5},HCh:function(){return h.HCh},u_l:function(){return h.u_l},fef:function(){return h.fef},hzk:function(){return h.hzk},ZAr:function(){return h.ZAr},diJ:function(){return h.diJ},LZC:function(){return h.LZC},Kqy:function(){return h.Kqy},cXX:function(){return h.cXX},xvT:function(){return h.xvT},QI$:function(){return h.QI$},gCW:function(){return h.gCW},Eq9:function(){return h.Eq9},Ucj:function(){return h.Ucj},F4b:function(){return h.F4b},ach:function(){return p},Tb6:function(){return h.Tb6}});var r=e(603),i=e(5893),o=e(2684),u=(e(1664),e(9149),e(1799)),c=e(9396),a=e(9534),s=e(7294),f=e(9920),d=function(n,t,e,r,i,o){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,a=arguments.length>8&&void 0!==arguments[8]?arguments[8]:1.1;return[-(t-o-r/2)/10*c,(n-i-e/2)/10*u,a]},l=function(n,t,e){return"perspective(600px) rotateX(".concat(-n,"deg) rotateY(").concat(-t,"deg) scale(").concat(e,")")};function v(n){var t=n.children,e=n.disabled,o=n.animatedProps,v=n.PaperProps,p=n.xm,g=void 0===p?1:p,x=n.ym,m=void 0===x?1:x,y=n.zm,j=void 0===y?1.1:y,C=n.folder,b=void 0!==C&&C,k=n.paperComponent,E=void 0===k?h.zxk:k,Z=n.setRef,P=(0,a.Z)(n,["children","disabled","animatedProps","PaperProps","xm","ym","zm","folder","paperComponent","setRef"]),w=(0,s.useState)(!1),R=w[0],S=w[1],M=(0,r.Z)((0,f.useSpring)((function(){return{xys:[0,0,1],config:{mass:2,tension:150,friction:100}}})),2),_=M[0],A=M[1],X=(0,s.useRef)();return Z&&(Z.current=A),(0,i.jsx)(h.xuv,(0,c.Z)((0,u.Z)({ref:X},P),{sx:(0,u.Z)({position:"relative",height:"100%",width:"100%"},null===P||void 0===P?void 0:P.style),children:(0,i.jsx)(f.animated.div,(0,c.Z)((0,u.Z)({onMouseMove:function(n){var t=n.clientX,r=n.clientY,i=n.currentTarget;if(!e){var o,u,c=X.current.getBoundingClientRect();o=t-(null===c||void 0===c?void 0:c.x),u=r-(null===c||void 0===c?void 0:c.y),A({xys:d(o,u,i.offsetWidth,i.offsetHeight,i.offsetLeft,i.offsetTop,g,m,j)}),R||S(!0)}},onMouseLeave:function(){e||(A({xys:[0,0,1]}),S(!1))}},o),{style:(0,u.Z)({transform:_.xys.to(l),height:"100%",width:"100%"},null===o||void 0===o?void 0:o.style),children:(0,i.jsx)(h.xuv,(0,c.Z)((0,u.Z)({as:E,disabled:e,h:"100%",w:"100%"},v),{sx:(0,u.Z)({opacity:e?.5:1,textAlign:"left",borderRadius:b?16:void 0},null===v||void 0===v?void 0:v.style),children:t}))}))}))}e(11);var h=e(702),p=function(n){var t=(0,r.Z)((0,o.ac)(n),2),e=t[0],i=t[1],u=(0,s.useState)(!1),c=u[0],a=u[1];return(0,s.useEffect)((function(){return a(e)}),[e,i]),[c,i]}},4285:function(n,t,e){"use strict";e.d(t,{z:function(){return v}});var r=e(5893),i=e(1596),o=e(4450),u=e(7294),c=e(1163),a=e(3282),s=e(542),f=u.createContext({event:function(n){(0,a.ZP)("reachGoal",n),s.ZP.event({category:"events",action:n})}});var d=function(){var n=(0,c.useRouter)();return(0,u.useEffect)((function(){s.ZP.pageview(null===n||void 0===n?void 0:n.asPath)}),[]),null},l=u.memo((function(n){var t=n.yandexMetrikaAccounts,e=void 0===t?[]:t,i=n.googleAnalyticsAccounts,o=void 0===i?[]:i,c=n.context,l=void 0===c?f:c,v=n.debug,h=void 0!==v&&v,p=n.children;return(0,u.useEffect)((function(){var n=null===o||void 0===o?void 0:o[0];n&&s.ZP.initialize({trackingId:n},{debug:h})}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.OR,{accounts:e,options:{clickmap:!0,webvisor:!0,ecommerce:!0,trackHash:!0,trackLinks:!0,triggerEvent:!0}}),(0,r.jsxs)(l.Provider,{value:{},children:[(0,r.jsx)(d,{}),p]})]})}));function v(n){var t=n.children;return(0,r.jsx)(l,{yandexMetrikaAccounts:[84258358],googleAnalyticsAccounts:["G-3WH4B0WR4L"],children:(0,r.jsx)(o.QueryStoreProvider,{children:(0,r.jsx)(i.LocalStoreProvider,{children:t})})})}},9989:function(n,t,e){"use strict";e.r(t),e.d(t,{PageContent:function(){return Z},default:function(){return E}});var r=e(5893),i=e(702),o=e(7294),u=e(2136),c=e(4285),a=e(7257),s=e(2799);function f(){return f=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},f.apply(this,arguments)}var d=e(4002),l=e(9342),v=e(2116),h=e(5177),p={hoverState:{borderRadius:"4.8rem",padding:"0.5rem"}},g=o.memo((function(n){var t=n.onTapButton;return(0,r.jsx)(v.E.div,{style:{width:"100%",height:"100%",borderRadius:"1.8rem",backgroundColor:"#19202B",cursor:"pointer",display:"flex",placeItems:"center",placeContent:"center"},variants:p,whileHover:"hoverState",onTap:t,transition:{type:"spring",mass:.5,bounce:.25,stiffness:200,damping:100},children:(0,r.jsx)(u.oM5,{maxW:"200px",ratio:1,children:(0,r.jsx)("iframe",{title:"naruto",src:"https://www.deep.deepcese",allowFullScreen:!0})})})})),x=e(3750),m=o.memo((function(){return(0,r.jsx)(h.Pd.Provider,{value:{color:"#008fcc",size:"4.5rem"},children:(0,r.jsx)("div",{children:(0,r.jsx)(x.qtR,{})})})})),y={hoverState:{borderRadius:"4.8rem",padding:"0.5rem"},tapState:{backgroundColor:"#ffd700"}},j=o.memo((function(){return(0,r.jsx)(v.E.div,{style:{width:"100%",height:"100%",borderRadius:"1.8rem",backgroundColor:"#0ea61",cursor:"pointer",display:"flex",placeItems:"center",placeContent:"center"},variants:y,children:(0,r.jsx)(m,{})})})),C=e(1190),b=o.memo((function(n){var t=n.marker,e=n.children,i=n.rotateX,o=n.rotateY;return(0,r.jsx)("div",{style:{width:150,height:150,position:"relative"},children:(0,r.jsx)(C.M,{initial:!1,custom:t,children:(0,r.jsx)(v.E.div,{style:{originZ:-100,display:"flex",alignItems:"center",justifyContent:"center",width:150,height:150,borderRadius:30,backgroundColor:"#fff",rotateX:i,rotateY:o},variants:{initial:function(n){return{rotateY:1===n?-45:45,opacity:0}},animate:{rotateY:0,opacity:1}},initial:"initial",animate:"animate",exit:"exit",custom:t,transition:{duration:1},children:e},t)})})})),k=o.memo((function(n){!function(){f.apply(this,arguments)}({},n);var t=(0,o.useState)(0),e=t[0],i=t[1],u=(0,o.useRef)(),c=(0,d.q)(150,{mass:.5,bounce:.25,stiffness:200,damping:100}),a=(0,d.q)(150,{mass:.5,bounce:.25,stiffness:200,damping:100});(0,l.H)(a,[0,250],[40,-40]),(0,l.H)(c,[0,250],[-40,40]);return(0,r.jsx)(v.E.div,{ref:u,style:{width:250,height:250,display:"flex",placeItems:"center",placeContent:"center",borderRadius:30,perspective:400},onMouseMove:function(n){var t=n.currentTarget.getBoundingClientRect();c.set(n.clientX-t.left),a.set(n.clientY-t.top)},onMouseLeave:function(){c.set(150),a.set(150)},children:(0,r.jsx)(b,{marker:e,children:0==e?(0,r.jsx)(g,{onTapButton:function(){return i(1)}}):(0,r.jsx)(j,{})})})}));function E(){return(0,r.jsx)(i.xjn,{theme:a.PL,children:(0,r.jsx)(c.z,{children:(0,r.jsx)(Z,{})})})}var Z=o.memo((function(){var n=(0,s.v)().scrollY;return(0,o.useEffect)((function(){return n.onChange((function(n){console.log("Page scroll: ",n)}))}),[]),(0,r.jsx)(u.xuv,{as:"main",pos:"relative",children:(0,r.jsx)(k,{})})}))},5512:function(n,t,e){"use strict";e.d(t,{N:function(){return u}});var r=e(4960),i=e(5262),o=e(9073);function u(n,t){var e=(0,r.c)(t()),u=function(){return e.set(t())};return u(),(0,i.f)(n,(function(){return o.ZP.update(u,!1,!0)})),e}},4960:function(n,t,e){"use strict";e.d(t,{c:function(){return a}});var r=e(1439),i=e(7294),o=e(3234),u=e(6014),c=e(6681);function a(n){var t=(0,c.h)((function(){return(0,o.B)(n)}));if((0,i.useContext)(u._).isStatic){var e=(0,r.CR)((0,i.useState)(n),2)[1];(0,i.useEffect)((function(){return t.onChange(e)}),[])}return t}},5262:function(n,t,e){"use strict";e.d(t,{f:function(){return u},p:function(){return o}});var r=e(406),i=e(8868);function o(n,t){(0,i.L)((function(){if((0,r.i)(n))return n.onChange(t)}),[t])}function u(n,t){(0,i.L)((function(){var e=n.map((function(n){return n.onChange(t)}));return function(){return e.forEach((function(n){return n()}))}}))}},4002:function(n,t,e){"use strict";e.d(t,{q:function(){return f}});var r=e(1439),i=e(7294),o=e(6228),u=e(406),c=e(4960),a=e(5262),s=e(6014);function f(n,t){void 0===t&&(t={});var e=(0,i.useContext)(s._).isStatic,f=(0,i.useRef)(null),d=(0,c.c)((0,u.i)(n)?n.get():n);return(0,i.useMemo)((function(){return d.attach((function(n,i){return e?i(n):(f.current&&f.current.stop(),f.current=(0,o.j)((0,r.pi)((0,r.pi)({from:d.get(),to:n,velocity:d.getVelocity()},t),{onUpdate:i})),d.get())}))}),[JSON.stringify(t)]),(0,a.p)(n,(function(n){return d.set(parseFloat(n))})),d}},9342:function(n,t,e){"use strict";e.d(t,{H:function(){return a}});var r=e(1439),i=e(9180),o=function(n){return function(n){return"object"===typeof n&&n.mix}(n)?n.mix:void 0};var u=e(5512),c=e(6681);function a(n,t,e,u){var c="function"===typeof t?t:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=!Array.isArray(n[0]),u=e?0:-1,c=n[0+u],a=n[1+u],s=n[2+u],f=n[3+u],d=(0,i.s)(a,s,(0,r.pi)({mixer:o(s[0])},f));return e?d(c):d}(t,e,u);return Array.isArray(n)?s(n,c):s([n],(function(n){var t=(0,r.CR)(n,1)[0];return c(t)}))}function s(n,t){var e=(0,c.h)((function(){return[]}));return(0,u.N)(n,(function(){e.length=0;for(var r=n.length,i=0;i<r;i++)e[i]=n[i].get();return t(e)}))}}},function(n){n.O(0,[13,522,799,774,888,179],(function(){return t=4066,n(n.s=t);var t}));var t=n.O();_N_E=t}]);