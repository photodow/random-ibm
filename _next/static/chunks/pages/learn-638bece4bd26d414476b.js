_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"3xA/":function(e,a,t){"use strict";var i=t("pVnL"),s=t.n(i),o=t("yZ4C"),n=t("7G3Q"),r=t("OT8j"),c=t("17x9"),u=t.n(c),m=t("q1tI"),l=t.n(m),d=t("9a1i"),p=r.a.stablePrefix,g=d.a.prefix,h=function(e){var a=e.copy,t=e.heading,i=e.items,r=e.cta,c=e.aside,u=e.border;r&&(r.style="feature");var m=i.map((function(e,a){return l.a.createElement(n.a,s()({key:a},e))}));return l.a.createElement("div",{"data-autoid":"".concat(p,"--content-block-media"),className:"".concat(g,"--content-block-media")},l.a.createElement(o.a,{heading:t,copy:a,cta:r,aside:c,border:u},m))};h.propTypes={copy:u.a.string,heading:u.a.string.isRequired,items:u.a.arrayOf(u.a.shape({heading:u.a.string.isRequired,mediaType:u.a.oneOf(["image","video"]),mediaData:u.a.oneOfType([u.a.shape({inverse:u.a.bool,image:u.a.shape({classname:u.a.string,sources:u.a.arrayOf(u.a.shape({src:u.a.string,breakpoint:u.a.oneOfType([u.a.string,u.a.number])})),defaultSrc:u.a.string.isRequired,alt:u.a.string.isRequired,longDescription:u.a.string}).isRequired,lightbox:u.a.bool,heading:u.a.string,copy:u.a.string,customClassName:u.a.string}),u.a.shape({customClassName:u.a.string,videoId:u.a.string.isRequired,showCaption:u.a.bool,inverse:u.a.bool})]).isRequired,items:u.a.arrayOf(u.a.shape({cta:u.a.shape({style:u.a.oneOf(["text","card","button","feature"]),type:u.a.oneOfType([u.a.oneOf(["jump","local","external","download","video"]),u.a.arrayOf(u.a.oneOf(["jump","local","external","download","video"]))]),copy:u.a.string,href:u.a.string,customClassName:u.a.string}),customClassName:u.a.string,copy:u.a.string,heading:u.a.string,mediaType:u.a.oneOf(["image","video"]),mediaData:u.a.oneOfType([u.a.shape({inverse:u.a.bool,image:u.a.shape({classname:u.a.string,sources:u.a.arrayOf(u.a.shape({src:u.a.string,breakpoint:u.a.oneOfType([u.a.string,u.a.number])})),defaultSrc:u.a.string.isRequired,alt:u.a.string.isRequired,longDescription:u.a.string}).isRequired,lightbox:u.a.bool,heading:u.a.string,copy:u.a.string,customClassName:u.a.string}),u.a.shape({customClassName:u.a.string,videoId:u.a.string.isRequired,showCaption:u.a.bool,inverse:u.a.bool})]),inverse:u.a.bool})).isRequired,cta:u.a.shape({style:u.a.oneOf(["text","card","button","feature"]),type:u.a.oneOfType([u.a.oneOf(["jump","local","external","download","video"]),u.a.arrayOf(u.a.oneOf(["jump","local","external","download","video"]))]),copy:u.a.string,href:u.a.string,customClassName:u.a.string})})).isRequired,cta:u.a.shape({style:u.a.oneOf(["feature"]),type:u.a.oneOfType([u.a.oneOf(["jump","local","external","download","video"]),u.a.arrayOf(u.a.oneOf(["jump","local","external","download","video"]))]),copy:u.a.string,href:u.a.string,customClassName:u.a.string}),aside:u.a.object,border:u.a.bool},a.a=h},"5i1Y":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn",function(){return t("erKZ")}])},"7G3Q":function(e,a,t){"use strict";var i=t("pVnL"),s=t.n(i),o=t("iJE5"),n=t("v9Ee"),r=t("OT8j"),c=t("/J8l"),u=t("17x9"),m=t.n(u),l=t("q1tI"),d=t.n(l),p=t("9a1i"),g=t("vQcT"),h=p.a.prefix,f=r.a.stablePrefix,y=function(e){var a=e.heading,t=e.mediaType,i=e.mediaData,s=e.items,n=e.cta,r=e.copy;return d.a.createElement("div",{"data-autoid":"".concat(f,"--content-group-simple"),className:"".concat(h,"--content-group-simple")},d.a.createElement(o.a,{cta:n,heading:a,copy:r},x(t,i),b(s)))},b=function(e){return e.map((function(e,a){return d.a.createElement(n.a,s()({},e,{key:a}))}))},x=function(e,a){if(a)return d.a.createElement("div",{"data-autoid":"".concat(f,"--content-group-simple__media")},"image"===e&&d.a.createElement(c.a,a),"video"===e&&d.a.createElement(g.a,a))};y.propTypes={heading:m.a.string.isRequired,copy:m.a.string,mediaType:m.a.oneOf(["image","video"]),mediaData:m.a.oneOfType([m.a.shape({inverse:m.a.bool,image:m.a.shape({classname:m.a.string,sources:m.a.arrayOf(m.a.shape({src:m.a.string,breakpoint:m.a.oneOfType([m.a.string,m.a.number])})),defaultSrc:m.a.string.isRequired,alt:m.a.string.isRequired,longDescription:m.a.string}).isRequired,lightbox:m.a.bool,heading:m.a.string,copy:m.a.string,customClassName:m.a.string}),m.a.shape({customClassName:m.a.string,videoId:m.a.string.isRequired,showCaption:m.a.bool,inverse:m.a.bool})]),items:m.a.arrayOf(m.a.shape({cta:m.a.shape({type:m.a.oneOfType([m.a.oneOf(["jump","local","external","download","video"]),m.a.arrayOf(m.a.oneOf(["jump","local","external","download","video"]))]),copy:m.a.string,href:m.a.string,customClassName:m.a.string}),customClassName:m.a.string,copy:m.a.string,heading:m.a.string,mediaType:m.a.oneOf(["image","video"]),mediaData:m.a.oneOfType([m.a.shape({inverse:m.a.bool,image:m.a.shape({classname:m.a.string,sources:m.a.arrayOf(m.a.shape({src:m.a.string,breakpoint:m.a.oneOfType([m.a.string,m.a.number])})),defaultSrc:m.a.string.isRequired,alt:m.a.string.isRequired,longDescription:m.a.string}).isRequired,lightbox:m.a.bool,heading:m.a.string,copy:m.a.string,customClassName:m.a.string}),m.a.shape({customClassName:m.a.string,videoId:m.a.string.isRequired,showCaption:m.a.bool,inverse:m.a.bool})]),inverse:m.a.bool})).isRequired,cta:m.a.shape({style:m.a.oneOf(["text","card","button","feature"]),type:m.a.oneOfType([m.a.oneOf(["jump","local","external","download","video"]),m.a.arrayOf(m.a.oneOf(["jump","local","external","download","video"]))]),copy:m.a.string,href:m.a.string,customClassName:m.a.string})},a.a=y},L2Bh:function(e,a,t){"use strict";var i=t("lSNA"),s=t.n(i),o=t("QILm"),n=t.n(o),r=t("ZOMM"),c=t("TSYQ"),u=t.n(c),m=t("WDf8"),l=t("OT8j"),d=t("17x9"),p=t.n(d),g=t("q1tI"),h=t.n(g),f=t("9a1i"),y=l.a.stablePrefix,b=f.a.prefix,x=function(e){var a=e.cards,t=e.cta,i=e.theme,o=n()(e,["cards","cta","theme"]),c=a.filter((function(e){var a=e.image,t=e.heading,i=e.copy,s=e.cta.href;return!a&&t&&i&&s}));return h.a.createElement(m.a,{heading:o.heading,autoid:"".concat(y,"--card-group-simple-group"),customClassName:u()("".concat(b,"--card-group"),s()({},"".concat(b,"--card-group--").concat(i),i))},h.a.createElement(r.a,{cards:c,cta:t}))};x.propTypes={theme:p.a.oneOf(["white","g10","g90","g100"]),heading:p.a.string.isRequired,cards:p.a.arrayOf(p.a.exact({heading:p.a.string,copy:p.a.string,cta:p.a.shape({href:p.a.string})})).isRequired,cta:p.a.shape({heading:p.a.string,cta:p.a.shape({href:p.a.string})})},a.a=x},WDf8:function(e,a,t){"use strict";var i=t("lSNA"),s=t.n(i),o=t("QILm"),n=t.n(o),r=t("TSYQ"),c=t.n(r),u=t("OT8j"),m=t("17x9"),l=t.n(m),d=t("q1tI"),p=t.n(d),g=t("9a1i"),h=u.a.stablePrefix,f=g.a.prefix,y=function(e){var a=e.heading,t=e.theme,i=e.children,o=e.customClassName,r=n()(e,["heading","theme","children","customClassName"]);return p.a.createElement("section",{className:c()("".concat(f,"--content-section"),o,s()({},"".concat(f,"--content-section--").concat(t),t)),"data-autoid":r.autoid?r.autoid:"".concat(h,"--content-section")},p.a.createElement("div",{className:"".concat(f,"--content-section__grid")},p.a.createElement("div",{className:"".concat(f,"--content-section__row")},p.a.createElement("div",{className:"".concat(f,"--content-section__left")},p.a.createElement("h2",{className:"".concat(f,"--content-section__heading")},a)),p.a.createElement("div",{className:"".concat(f,"--content-section__children")},i))))};y.propTypes={heading:l.a.string.isRequired,theme:l.a.oneOf(["white","g10","g90","g100"]),children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),customClassName:l.a.string},a.a=y},erKZ:function(e,a,t){"use strict";t.r(a);t("/xgw");var i=t("rOON"),s=t("f5Id"),o=t("98rB"),n=t("ZNIK"),r=t("9GtX"),c=t("pVnL"),u=t.n(c),m=t("yZ4C"),l=t("AIPD"),d=t("nDLM"),p=t("iJE5"),g=t("OT8j"),h=t("17x9"),f=t.n(h),y=t("q1tI"),b=t.n(y),x=t("9a1i"),q=x.a.prefix,w=g.a.stablePrefix,v=function(e){var a=e.heading,t=e.items,i=e.copy;return b.a.createElement("section",{"data-autoid":"".concat(w,"--content-group-cards"),className:"".concat(q,"--content-group-cards")},b.a.createElement(p.a,{heading:a,copy:i},b.a.createElement("div",{"data-autoid":"".concat(w,"--content-group-cards-group"),className:"".concat(q,"--content-group-cards-group ").concat(q,"--grid--condensed")},b.a.createElement("div",{className:"".concat(q,"--content-group-cards__row")},O(t)))))},O=function(e){return e.map((function(e,a){return b.a.createElement("div",{"data-autoid":"".concat(w,"--content-group-cards-item"),className:"".concat(q,"--content-group-cards-item__col"),key:a,role:"region"},b.a.createElement(d.a,{customClassName:"".concat(q,"--content-group-cards-item"),heading:e.heading,copy:e.copy,cta:{href:e.cta.href,icon:{src:l.a}},"aria-label":e.heading}))}))};v.propTypes={heading:f.a.string.isRequired,copy:f.a.string,items:f.a.arrayOf(f.a.shape({title:f.a.string,copy:f.a.string,cta:f.a.shape({href:f.a.string})}))};var C=v,N=t("TSYQ"),L=t.n(N),T=t("pI4O"),R=g.a.stablePrefix,k=x.a.prefix,S=function(e){var a=e.heading,t=e.items,i=e.className,s=e.copy;return b.a.createElement("div",{"data-autoid":"".concat(R,"--content-group-pictograms"),className:L()(i,"".concat(k,"--content-group-pictograms"))},b.a.createElement(p.a,{heading:a,copy:s},I(t)))},I=function(e){return e.map((function(e,a){return b.a.createElement(T.a,u()({className:"".concat(k,"--content-group-pictograms__item"),"data-autoid":"".concat(k,"--content-group-pictograms__item")},e,{key:a}))}))};S.propTypes={heading:f.a.string.isRequired,copy:f.a.string,items:f.a.arrayOf(f.a.shape({heading:f.a.string.isRequired,copy:f.a.string.isRequired,cta:f.a.shape({style:f.a.oneOf(["text","card","button","feature"]),type:f.a.oneOfType([f.a.oneOf(["jump","local","external","download","video"]),f.a.arrayOf(f.a.oneOf(["jump","local","external","download","video"]))]),copy:f.a.string,href:f.a.string,customClassName:f.a.string}),pictogram:f.a.shape({src:f.a.object.isRequired}),className:f.a.string})).isRequired,className:f.a.string};var P=S,E=t("7G3Q"),D=g.a.stablePrefix,_=x.a.prefix,j=function(e){var a=e.heading,t=e.copy,i=e.cta,s=e.items,o=e.aside,n={ContentGroupCards:C,ContentGroupSimple:E.a,ContentGroupPictograms:P},r=s.map((function(e,a){var t=n[e.type];return b.a.createElement(t,u()({key:a},e))}));return b.a.createElement("div",{"data-autoid":"".concat(D,"--content-block-mixed"),className:"".concat(_,"--content-block-mixed")},b.a.createElement(m.a,{heading:a,copy:t,cta:i,aside:o},r))};j.propTypes={heading:f.a.string.isRequired,copy:f.a.string,items:f.a.arrayOf(f.a.oneOfType([f.a.shape({type:f.a.oneOf(["ContentGroupCards","ContentGroupSimple","ContentGroupPictograms"]).isRequired,heading:f.a.string.isRequired,items:f.a.arrayOf(f.a.shape({title:f.a.string,copy:f.a.string,cta:f.a.shape({href:f.a.string})}))}),f.a.shape({type:f.a.oneOf(["ContentGroupCards","ContentGroupSimple","ContentGroupPictograms"]).isRequired,heading:f.a.string.isRequired,mediaType:f.a.oneOf(["image","video"]),mediaData:f.a.oneOfType([f.a.shape({inverse:f.a.bool,image:f.a.shape({classname:f.a.string,sources:f.a.arrayOf(f.a.shape({src:f.a.string,breakpoint:f.a.oneOfType([f.a.string,f.a.number])})),defaultSrc:f.a.string.isRequired,alt:f.a.string.isRequired,longDescription:f.a.string}).isRequired,lightbox:f.a.bool,heading:f.a.string,copy:f.a.string,customClassName:f.a.string}),f.a.shape({customClassName:f.a.string,videoId:f.a.string.isRequired,showCaption:f.a.bool,inverse:f.a.bool})]),items:f.a.arrayOf(f.a.shape({cta:f.a.shape({style:f.a.oneOf(["text","card","button","feature"]),type:f.a.oneOfType([f.a.oneOf(["jump","local","external","download","video"]),f.a.arrayOf(f.a.oneOf(["jump","local","external","download","video"]))]),copy:f.a.string,href:f.a.string,customClassName:f.a.string}),customClassName:f.a.string,copy:f.a.string,heading:f.a.string,mediaType:f.a.oneOf(["image","video"]),mediaData:f.a.oneOfType([f.a.shape({inverse:f.a.bool,image:f.a.shape({classname:f.a.string,sources:f.a.arrayOf(f.a.shape({src:f.a.string,breakpoint:f.a.oneOfType([f.a.string,f.a.number])})),defaultSrc:f.a.string.isRequired,alt:f.a.string.isRequired,longDescription:f.a.string}).isRequired,lightbox:f.a.bool,heading:f.a.string,copy:f.a.string,customClassName:f.a.string}),f.a.shape({customClassName:f.a.string,videoId:f.a.string.isRequired,showCaption:f.a.bool,inverse:f.a.bool})]),inverse:f.a.bool})).isRequired,cta:f.a.shape({style:f.a.oneOf(["text","card","button","feature"]),type:f.a.oneOfType([f.a.oneOf(["jump","local","external","download","video"]),f.a.arrayOf(f.a.oneOf(["jump","local","external","download","video"]))]),copy:f.a.string,href:f.a.string,customClassName:f.a.string})}),f.a.shape({type:f.a.oneOf(["ContentGroupCards","ContentGroupSimple","ContentGroupPictograms"]).isRequired,heading:f.a.string.isRequired,items:f.a.arrayOf(f.a.shape({heading:f.a.string.isRequired,copy:f.a.string.isRequired,cta:f.a.shape({style:f.a.oneOf(["text","card","button","feature"]),type:f.a.oneOfType([f.a.oneOf(["jump","local","external","download","video"]),f.a.arrayOf(f.a.oneOf(["jump","local","external","download","video"]))]),copy:f.a.string,href:f.a.string,customClassName:f.a.string}),pictogram:f.a.shape({src:f.a.object.isRequired}),className:f.a.string})).isRequired,className:f.a.string})])).isRequired,cta:f.a.shape({style:f.a.oneOf(["card"]),type:f.a.oneOfType([f.a.oneOf(["jump","local","external","download","video"]),f.a.arrayOf(f.a.oneOf(["jump","local","external","download","video"]))]),copy:f.a.string,customClassName:f.a.string}),aside:f.a.shape({items:f.a.element,border:f.a.bool})};var A=j,M=t("oHr6"),G=t("vJbN"),B=t("dakj"),V=t("4Sc1"),Q=t("3xA/"),J=t("lSNA"),Z=t.n(J),Y=t("QILm"),W=t.n(Y),F=t("ZOMM"),K=t("WDf8"),X=g.a.stablePrefix,H=x.a.prefix,z=function(e){var a=e.cards,t=e.theme,i=W()(e,["cards","theme"]),s=a.filter((function(e){var a=e.image,t=e.eyebrow,i=e.heading,s=e.copy,o=e.cta.href;return a&&t&&i&&!s&&o}));return b.a.createElement(K.a,{heading:i.heading,autoid:"".concat(X,"--card-group-images-group"),customClassName:L()("".concat(H,"--card-group"),Z()({},"".concat(H,"--card-group--").concat(t),t))},b.a.createElement(F.a,{cards:s}))};z.propTypes={theme:f.a.oneOf(["white","g10","g90","g100"]),heading:f.a.string.isRequired,cards:f.a.arrayOf(f.a.exact({image:f.a.shape({classname:f.a.string,sources:f.a.arrayOf(f.a.shape({src:f.a.string,breakpoint:f.a.oneOfType([f.a.string,f.a.number])})),defaultSrc:f.a.string.isRequired,alt:f.a.string.isRequired,longDescription:f.a.string}),eyebrow:f.a.string,heading:f.a.string,cta:f.a.shape({href:f.a.string})})).isRequired};var U=z,$=t("L2Bh"),ee=b.a.createElement;a.default=function(){return ee(b.a.Fragment,null,ee(n.a,{type:"centered",theme:"g100",title:"Lead space title",copy:"Use this area for a short line of copy to support the title",gradient:!0,image:{sources:[{src:"https://dummyimage.com/320x370/ee5396/161616",breakpoint:"sm"},{src:"https://dummyimage.com/672x400/ee5396/161616",breakpoint:"md"}],defaultSrc:"https://dummyimage.com/1056x480/ee5396/161616",alt:"Image alt text"}}),ee(r.a,{menuLabel:"Jump to",theme:"white",stickyOffset:48},ee("a",{name:"content-block-mixed","data-title":"Content Block - Mixed Groups"}),ee(A,{heading:"Content Block - Mixed Groups",copy:"Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, *consequat* libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",cta:{cta:{href:"https://www.example.com"},style:"card",type:"local",copy:"Lorem ipsum dolor sit ametttt"},items:[{type:"ContentGroupCards",heading:"Content Group - with Cards",items:[{heading:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",cta:{href:"https://www.example.com"}},{heading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",cta:{href:"https://www.example.com"}},{heading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",copy:"Lorem ipsum dolor sit amet",cta:{href:"https://www.example.com"}},{heading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",cta:{href:"https://www.example.com"}}]},{type:"ContentGroupPictograms",heading:"Content Group - with Pictograms",items:[{heading:"Aliquam condimentum interdum",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",cta:{href:"https://www.example.com",type:"local",copy:"Lorem ipsum dolor"},pictogram:{src:i.a,"aria-label":"Desktop"}},{heading:"Aliquam condimentum interdum",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",cta:{href:"https://www.example.com",type:"local",copy:"Lorem ipsum dolor"},pictogram:{src:s.a,"aria-label":"Pattern"}},{heading:"Aliquam condimentum interdum",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",cta:{href:"https://www.example.com",type:"local",copy:"Lorem ipsum dolor"},pictogram:{src:o.a,"aria-label":"Touch"}}]},{type:"ContentGroupSimple",mediaType:"image",mediaData:{heading:"Lorem ipsum dolor sit amet.",image:{sources:[{src:"https://dummyimage.com/320x180/ee5396/161616&text=16:9",breakpoint:320},{src:"https://dummyimage.com/400x225/ee5396/161616&text=16:9",breakpoint:400},{src:"https://dummyimage.com/672x378/ee5396/161616&text=16:9",breakpoint:672}],alt:"Image alt text",defaultSrc:"https://dummyimage.com/672x378/ee5396/161616&text=16:9"}},heading:"Content Group - Simple",items:[{heading:"Lorem ipsum dolor sit amet.",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien."},{heading:"Lorem ipsum dolor sit amet.",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien."}]}],aside:{items:ee(M.a,{style:"card",heading:"Tutorials",items:[{type:"local",copy:"Containerization A Complete Guide",cta:{href:"https://ibm.com"}},{type:"external",copy:"Why should you use microservices and containers",cta:{href:"https://ibm.com"}}]}),border:!1}}),ee(G.a,{nested:!0,type:"2-1",border:!0},ee("div",null,ee("a",{name:"content-block-segmented","data-title":"Content Block - Segmented"}),ee(B.a,{copy:"Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, *consequat* libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit.",cta:{cta:{href:"https://www.example.com"},style:"card",type:"local",copy:"Lorem ipsum dolor"},heading:"Content Block - Segmented",image:{heading:"Mauris iaculis eget dolor nec hendrerit.",image:{sources:[{src:"https://dummyimage.com/320x180/ee5396/161616&text=16:9",breakpoint:320},{src:"https://dummyimage.com/400x225/ee5396/161616&text=16:9",breakpoint:400},{src:"https://dummyimage.com/672x378/ee5396/161616&text=16:9",breakpoint:672}],alt:"Image alt text",defaultSrc:"https://dummyimage.com/672x378/ee5396/161616&text=16:9"}},items:[{heading:"Lorem ipsum dolor sit amet.",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien."},{heading:"Lorem ipsum dolor sit amet.",image:{heading:"Mauris iaculis eget dolor nec hendrerit.",image:{sources:[{src:"https://dummyimage.com/320x180/ee5396/161616&text=16:9",breakpoint:320},{src:"https://dummyimage.com/400x225/ee5396/161616&text=16:9",breakpoint:400},{src:"https://dummyimage.com/672x378/ee5396/161616&text=16:9",breakpoint:672}],alt:"Image alt text",defaultSrc:"https://dummyimage.com/672x378/ee5396/161616&text=16:9"}},copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien."}]})),ee("div",null)),ee(G.a,{nested:!0,type:"2-1",border:!0},ee("div",null,ee("a",{name:"content-block-simple","data-title":"Content Block - Simple"}),ee(V.a,{copy:"Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, *consequat* libero. Here are some common categories: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",heading:"Content Block - Simple",image:{heading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",image:{sources:[{src:"https://dummyimage.com/320x180/ee5396/161616&text=16:9",breakpoint:320},{src:"https://dummyimage.com/400x225/ee5396/161616&text=16:9",breakpoint:400},{src:"https://dummyimage.com/672x378/ee5396/161616&text=16:9",breakpoint:672}],alt:"Image alt text",defaultSrc:"https://dummyimage.com/672x378/ee5396/161616&text=16:9"}},cta:{cta:{href:"https://www.ibm.com"},style:"card",type:"external",copy:"Lorem ipsum dolor sit ametttt"}})),ee("div",null)),ee(G.a,{nested:!0,type:"2-1",border:!0},ee("div",null,ee("a",{name:"content-block-media","data-title":"Content Block - with Media"}),ee(Q.a,{copy:"Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, *consequat* libero. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",heading:"Content Block - with Media",items:[{mediaType:"image",mediaData:{heading:"Lorem ipsum dolor sit amet.",image:{sources:[{src:"https://dummyimage.com/320x180/ee5396/161616&text=16:9",breakpoint:320},{src:"https://dummyimage.com/400x225/ee5396/161616&text=16:9",breakpoint:400},{src:"https://dummyimage.com/672x378/ee5396/161616&text=16:9",breakpoint:672}],alt:"Image alt text",defaultSrc:"https://dummyimage.com/672x378/ee5396/161616&text=16:9"}},heading:"Lorem ipsum dolor sit amet",items:[{heading:"Lorem ipsum dolor sit amet.",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien."},{heading:"Lorem ipsum dolor sit amet.",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien."}],cta:{cta:{href:"https://www.example.com"},style:"card",type:"local",copy:"Lorem ipsum dolor sit ametttt"}},{mediaType:"image",mediaData:{heading:"Lorem ipsum dolor sit amet.",image:{sources:[{src:"https://dummyimage.com/320x180/ee5396/161616&text=16:9",breakpoint:320},{src:"https://dummyimage.com/400x225/ee5396/161616&text=16:9",breakpoint:400},{src:"https://dummyimage.com/672x378/ee5396/161616&text=16:9",breakpoint:672}],alt:"Image alt text",defaultSrc:"https://dummyimage.com/672x378/ee5396/161616&text=16:9"}},heading:"Lorem ipsum dolor sit amet",items:[{heading:"Lorem ipsum dolor sit amet.",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien."},{heading:"Lorem ipsum dolor sit amet.",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien."}],cta:{cta:{href:"https://www.example.com"},style:"card",type:"local",copy:"Lorem ipsum dolor sit ametttt"}}],cta:{type:"feature",heading:"Feature Card",card:{cta:{href:"https://www.example.com",icon:{src:l.a}},heading:"Consectetur adipisicing elit",image:{defaultSrc:"https://dummyimage.com/672x672/ee5396/161616&text=1x1",alt:"Image alt text"}}}})),ee("div",null))),ee(U,{heading:"Card Section - with Images",theme:"g10",cards:[{image:{defaultSrc:"https://dummyimage.com/1056x480/ee5396/161616",alt:"Image alt text"},eyebrow:"Topic",heading:"Natural language processing.",cta:{href:"https://www.example.com"}},{image:{defaultSrc:"https://dummyimage.com/1056x480/ee5396/161616",alt:"Image alt text"},eyebrow:"Blog",heading:"Natural language processing.",cta:{href:"https://www.example.com"}},{image:{defaultSrc:"https://dummyimage.com/1056x480/ee5396/161616",alt:"Image alt text"},eyebrow:"Topic",heading:"Natural language processing.",cta:{href:"https://www.example.com"}},{image:{defaultSrc:"https://dummyimage.com/1056x480/ee5396/161616",alt:"Image alt text"},eyebrow:"Blog",heading:"Serving society ethically in the age of Artificial Intelligence.",cta:{href:"https://www.example.com"}},{image:{defaultSrc:"https://dummyimage.com/1056x480/ee5396/161616",alt:"Image alt text"},eyebrow:"Topic",heading:"Serving society ethically in the age of Artificial Intelligence.",cta:{href:"https://www.example.com"}}]}),ee($.a,{heading:"Card Section - Simple",theme:"g10",cards:[{heading:"Nunc convallis lobortis",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",cta:{href:"https://www.example.com"}},{heading:"Fusce gravida eu arcu",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",cta:{href:"https://www.example.com"}},{heading:"Interdum et malesuada",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",cta:{href:"https://www.example.com"}},{heading:"Nunc convallis loborti",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",cta:{href:"https://www.example.com"}},{heading:"Nunc convallis lbortis",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",cta:{href:"https://www.example.com"}}],cta:{heading:"Top level card link",cta:{href:"https://www.example.com"}}}))}}},[["5i1Y",1,2,0,3,5,6,7,9,4]]]);