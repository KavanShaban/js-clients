import{R as t,r as g}from"./index-7c191284.js";import{t as Z,v as ge,W as be,a as H,u as U,d as Ae,B as ne,x as me,c as W,y as ve,k as Ee,M as Pe,T as Q,z as ee,D as ye,I as ae,F as Me}from"./dateTimeUtils-a817f99d.js";import{S as We}from"./PolarisAutoForm-84285966.js";import{S as Te,A as pe,T as he,B as Se,P as _e,F as Re}from"./Pagination-e176776e.js";var Ce={ShadowBevel:"Polaris-ShadowBevel"};function Ne(e){const{as:n="div",bevel:s=!0,borderRadius:i,boxShadow:o,children:l,zIndex:a="0"}=e,r=n;return t.createElement(r,{className:Ce.ShadowBevel,style:{"--pc-shadow-bevel-z-index":a,...Z("shadow-bevel","content",te(s,m=>m?'""':"none")),...Z("shadow-bevel","box-shadow",te(s,m=>m?`var(--p-shadow-${o})`:"none")),...Z("shadow-bevel","border-radius",te(s,m=>m?`var(--p-border-radius-${i})`:"var(--p-border-radius-0)"))}},l)}function te(e,n){return typeof e=="boolean"?n(e):Object.fromEntries(Object.entries(e).map(([s,i])=>[s,n(i)]))}const Ze=({children:e,background:n="bg-surface",padding:s={xs:"400"},roundedAbove:i="sm"})=>{const o=ge(),l="300",a=!!o[`${i}Up`];return t.createElement(be.Provider,{value:!0},t.createElement(Ne,{boxShadow:"100",borderRadius:a?l:"0",zIndex:"32"},t.createElement(H,{background:n,padding:s,overflowX:"clip",overflowY:"clip",minHeight:"100%"},e)))};var le={ActionMenu:"Polaris-ActionMenu"},we={RollupActivator:"Polaris-ActionMenu-RollupActions__RollupActivator"};function He({accessibilityLabel:e,items:n=[],sections:s=[]}){const i=U(),{value:o,toggle:l}=Ae(!1);if(n.length===0&&s.length===0)return null;const a=t.createElement("div",{className:we.RollupActivator},t.createElement(ne,{icon:Te,accessibilityLabel:e||i.translate("Polaris.ActionMenu.RollupActions.rollupButton"),onClick:l}));return t.createElement(me,{active:o,activator:a,preferredAlignment:"right",onClose:l,hideOnPrint:!0},t.createElement(pe,{items:n,sections:s,onActionAnyItem:l}))}var V={ActionsLayoutOuter:"Polaris-ActionMenu-Actions__ActionsLayoutOuter",ActionsLayout:"Polaris-ActionMenu-Actions__ActionsLayout","ActionsLayout--measuring":"Polaris-ActionMenu-Actions--actionsLayoutMeasuring",ActionsLayoutMeasurer:"Polaris-ActionMenu-Actions__ActionsLayoutMeasurer"};function re(e=[],n=[],s,i,o){const l=i.reduce((h,d)=>h+d,0),a=e.map((h,d)=>d),r=n.map((h,d)=>d),m=[],A=[],c=[],f=[];if(o>l)m.push(...a),c.push(...r);else{let h=0;a.forEach(d=>{const v=i[d];if(h+v>=o-s){A.push(d);return}m.push(d),h+=v}),r.forEach(d=>{const v=i[d+e.length];if(h+v>=o-s){f.push(d);return}c.push(d),h+=v})}return{visibleActions:m,hiddenActions:A,visibleGroups:c,hiddenGroups:f}}var Le={Details:"Polaris-ActionMenu-MenuGroup__Details"},ce={SecondaryAction:"Polaris-ActionMenu-SecondaryAction",critical:"Polaris-ActionMenu-SecondaryAction--critical"};function k({children:e,tone:n,helpText:s,onAction:i,destructive:o,...l}){const a=t.createElement(ne,Object.assign({onClick:i,tone:o?"critical":void 0},l),e),r=s?t.createElement(he,{preferredPosition:"below",content:s},a):a;return t.createElement("div",{className:W(ce.SecondaryAction,n==="critical"&&ce.critical)},r)}function ue({accessibilityLabel:e,active:n,actions:s,details:i,title:o,icon:l,disabled:a,onClick:r,onClose:m,onOpen:A,sections:c}){const f=g.useCallback(()=>{m(o)},[m,o]),h=g.useCallback(()=>{A(o)},[A,o]),d=g.useCallback(()=>{r?r(h):h()},[r,h]),v=t.createElement(k,{disclosure:!0,disabled:a,icon:l,accessibilityLabel:e,onClick:d},o);return t.createElement(me,{active:!!n,activator:v,preferredAlignment:"left",onClose:f,hideOnPrint:!0},t.createElement(pe,{items:s,sections:c,onActionAnyItem:f}),i&&t.createElement("div",{className:Le.Details},i))}const Oe=8;function ke({actions:e=[],groups:n=[],handleMeasurement:s}){const i=U(),o=g.useRef(null),l={title:i.translate("Polaris.ActionMenu.Actions.moreActions"),actions:[]},a=t.createElement(k,{disclosure:!0},l.title),r=g.useCallback(()=>{if(!o.current)return;const c=o.current.offsetWidth,f=o.current.children,d=Array.from(f).map(y=>Math.ceil(y.getBoundingClientRect().width)+Oe),v=d.pop()||0;s({containerWidth:c,disclosureWidth:v,hiddenActionsWidths:d})},[s]);g.useEffect(()=>{r()},[r,e,n]);const m=e.map(c=>{const{content:f,onAction:h,...d}=c;return t.createElement(k,Object.assign({key:f,onClick:h},d),f)}),A=n.map(c=>{const{title:f,icon:h}=c;return t.createElement(k,{key:f,disclosure:!0,icon:h},f)});return ve("resize",r),t.createElement("div",{className:V.ActionsLayoutMeasurer,ref:o},m,A,a)}function Be({actions:e,groups:n,onActionRollup:s}){const i=U(),o=g.useRef(null),[l,a]=g.useState(void 0),[r,m]=g.useReducer((u,p)=>({...u,...p}),{disclosureWidth:0,containerWidth:1/0,actionsWidths:[],visibleActions:[],hiddenActions:[],visibleGroups:[],hiddenGroups:[],hasMeasured:!1}),{visibleActions:A,hiddenActions:c,visibleGroups:f,hiddenGroups:h,containerWidth:d,disclosureWidth:v,actionsWidths:y,hasMeasured:G}=r,S={title:i.translate("Polaris.ActionMenu.Actions.moreActions"),actions:[]},_=g.useCallback(u=>a(l?void 0:u),[l]),R=g.useCallback(()=>a(void 0),[]);g.useEffect(()=>{if(d===0)return;const{visibleActions:u,visibleGroups:p,hiddenActions:E,hiddenGroups:P}=re(e,n,v,y,d);m({visibleActions:u,visibleGroups:p,hiddenActions:E,hiddenGroups:P,hasMeasured:d!==1/0})},[d,v,e,n,y,m]);const C=g.useMemo(()=>e??[],[e]),M=g.useMemo(()=>n??[],[n]),Y=C.filter((u,p)=>!!A.includes(p)).map(u=>{const{content:p,onAction:E,...P}=u;return t.createElement(k,Object.assign({key:p,onClick:E},P),p)}),T=(h.length>0||c.length>0?[...M,S]:[...M]).filter((u,p)=>{const E=M.length===0,P=f.includes(p),L=u===S;return E?c.length>0:L?!0:P}),X=c.map(u=>C[u]).filter(u=>u!=null),q=h.map(u=>M[u]).filter(u=>u!=null),J=T.map(u=>{const{title:p,actions:E,...P}=u,L=u===S,D=[...X,...q],[K,j]=D.reduce(([N,se],O)=>(Ge(O)?se.push({title:O.title,items:O.actions.map(oe=>({...oe,disabled:O.disabled||oe.disabled}))}):N.push(O),[N,se]),[[],[]]);return L?t.createElement(ue,Object.assign({key:p,title:p,active:p===l,actions:[...K,...E],sections:j},P,{onOpen:_,onClose:R})):t.createElement(ue,Object.assign({key:p,title:p,active:p===l,actions:E},P,{onOpen:_,onClose:R}))}),x=g.useCallback(u=>{const{hiddenActionsWidths:p,containerWidth:E,disclosureWidth:P}=u,{visibleActions:L,hiddenActions:D,visibleGroups:K,hiddenGroups:j}=re(C,M,P,p,E);if(s){const N=D.length>0||j.length>0;o.current!==N&&(s(N),o.current=N)}m({visibleActions:L,hiddenActions:D,visibleGroups:K,hiddenGroups:j,actionsWidths:p,containerWidth:E,disclosureWidth:P,hasMeasured:!0})},[C,M,s]),I=t.createElement(ke,{actions:e,groups:n,handleMeasurement:x});return t.createElement("div",{className:V.ActionsLayoutOuter},I,t.createElement("div",{className:W(V.ActionsLayout,!G&&V["ActionsLayout--measuring"])},Y,J))}function Ge(e){return"title"in e}function xe({actions:e=[],groups:n=[],rollup:s,rollupActionsLabel:i,onActionRollup:o}){if(e.length===0&&n.length===0)return null;const l=W(le.ActionMenu,s&&le.rollup),a=n.map(r=>De(r));return t.createElement("div",{className:l},s?t.createElement(He,{accessibilityLabel:i,items:e,sections:a}):t.createElement(Be,{actions:e,groups:n,onActionRollup:o}))}function Ie(e=[]){return e.length===0?!1:e.some(n=>n.actions.length>0)}function De({title:e,actions:n,disabled:s}){return{title:e,items:n.map(i=>({...i,disabled:s||i.disabled}))}}function je({backAction:e}){const{content:n}=e;return t.createElement(ne,{key:n,url:"url"in e?e.url:void 0,onClick:"onAction"in e?e.onAction:void 0,onPointerDown:Ee,icon:We,accessibilityLabel:e.accessibilityLabel??n})}function fe(){const e=g.useContext(Pe);if(!e)throw new Error("No mediaQuery was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");return e}function B(e){return!g.isValidElement(e)&&e!==void 0}function z(e){return g.isValidElement(e)&&e!==void 0}var $={Page:"Polaris-Page",fullWidth:"Polaris-Page--fullWidth",narrowWidth:"Polaris-Page--narrowWidth",Content:"Polaris-Page__Content"},b={TitleWrapper:"Polaris-Page-Header__TitleWrapper",TitleWrapperExpand:"Polaris-Page-Header__TitleWrapperExpand",BreadcrumbWrapper:"Polaris-Page-Header__BreadcrumbWrapper",PaginationWrapper:"Polaris-Page-Header__PaginationWrapper",PrimaryActionWrapper:"Polaris-Page-Header__PrimaryActionWrapper",Row:"Polaris-Page-Header__Row",mobileView:"Polaris-Page-Header--mobileView",RightAlign:"Polaris-Page-Header__RightAlign",noBreadcrumbs:"Polaris-Page-Header--noBreadcrumbs",AdditionalMetaData:"Polaris-Page-Header__AdditionalMetaData",Actions:"Polaris-Page-Header__Actions",longTitle:"Polaris-Page-Header--longTitle",mediumTitle:"Polaris-Page-Header--mediumTitle",isSingleRow:"Polaris-Page-Header--isSingleRow"},w={Title:"Polaris-Header-Title",TitleWithSubtitle:"Polaris-Header-Title__TitleWithSubtitle",TitleWrapper:"Polaris-Header-Title__TitleWrapper",SubTitle:"Polaris-Header-Title__SubTitle",SubtitleCompact:"Polaris-Header-Title__SubtitleCompact",SubtitleMaxWidth:"Polaris-Header-Title__SubtitleMaxWidth"};function $e({title:e,subtitle:n,titleMetadata:s,compactTitle:i,hasSubtitleMaxWidth:o}){const l=W(w.Title,n&&w.TitleWithSubtitle),a=e?t.createElement("h1",{className:l},t.createElement(Q,{as:"span",variant:"headingLg",fontWeight:"bold"},e)):null,r=s?t.createElement(Se,{marginBlock:"100"},s):null,m=t.createElement("div",{className:w.TitleWrapper},a,r),A=n?t.createElement("div",{className:W(w.SubTitle,i&&w.SubtitleCompact,o&&w.SubtitleMaxWidth)},t.createElement(Q,{as:"p",variant:"bodySm",tone:"subdued"},n)):null;return t.createElement(t.Fragment,null,m,A)}const Fe=20,Ve=8,de=34;function ze({title:e,subtitle:n,pageReadyAccessibilityLabel:s,titleMetadata:i,additionalMetadata:o,titleHidden:l=!1,primaryAction:a,pagination:r,filterActions:m,backAction:A,secondaryActions:c=[],actionGroups:f=[],compactTitle:h=!1,onActionRollup:d}){const v=U(),{isNavigationCollapsed:y}=fe(),G=!a&&!r&&(B(c)&&!c.length||z(c))&&!f.length,S=f.length>0||B(c)&&c.length>0||z(c),_=A?t.createElement("div",{className:b.BreadcrumbWrapper},t.createElement(H,{maxWidth:"100%",paddingInlineEnd:"100",printHidden:!0},t.createElement(je,{backAction:A}))):null,R=r&&!y?t.createElement("div",{className:b.PaginationWrapper},t.createElement(H,{printHidden:!0},t.createElement(_e,Object.assign({},r,{hasPrevious:r.hasPrevious,hasNext:r.hasNext})))):null,C=t.createElement("div",{className:W(b.TitleWrapper,!S&&b.TitleWrapperExpand)},t.createElement($e,{title:e,subtitle:n,titleMetadata:i,compactTitle:h,hasSubtitleMaxWidth:S})),M=s||e,Y=M?t.createElement("div",{role:"status"},t.createElement(Q,{visuallyHidden:!0,as:"p"},v.translate("Polaris.Page.Header.pageReadyAccessibilityLabel",{title:M}))):void 0,ie=a?t.createElement(Qe,{primaryAction:a}):null;let T=null;B(c)&&(c.length>0||Ie(f))?T=t.createElement(xe,{actions:c,groups:f,rollup:y,rollupActionsLabel:e?v.translate("Polaris.Page.Header.rollupActionsLabel",{title:e}):void 0,onActionRollup:d}):z(c)&&(T=t.createElement(t.Fragment,null,c));const X=_||R?t.createElement(H,{printHidden:!0,paddingBlockEnd:"100",paddingInlineEnd:T&&y?"1000":void 0},t.createElement(ae,{gap:"400",align:"space-between",blockAlign:"center"},_,R)):null,q=o?t.createElement("div",{className:b.AdditionalMetaData},t.createElement(Q,{tone:"subdued",as:"span",variant:"bodySm"},o)):null,J=W(G&&b.isSingleRow,X&&b.hasNavigation,T&&b.hasActionMenu,y&&b.mobileView,!A&&b.noBreadcrumbs,e&&e.length<de&&b.mediumTitle,e&&e.length>de&&b.longTitle),{slot1:x,slot2:I,slot3:u,slot4:p,slot5:E}=Ye({actionMenuMarkup:T,additionalMetadataMarkup:q,breadcrumbMarkup:_,isNavigationCollapsed:y,pageTitleMarkup:C,paginationMarkup:R,primaryActionMarkup:ie,title:e});return t.createElement(H,{position:"relative",paddingBlockStart:{xs:"400",md:"600"},paddingBlockEnd:{xs:"400",md:"600"},paddingInlineStart:{xs:"400",sm:"0"},paddingInlineEnd:{xs:"400",sm:"0"},visuallyHidden:l},Y,t.createElement("div",{className:J},t.createElement(Re,{filterActions:!!m},t.createElement(ee,{condition:[x,I,u,p].some(F)},t.createElement("div",{className:b.Row},x,I,t.createElement(ee,{condition:[u,p].some(F)},t.createElement("div",{className:b.RightAlign},t.createElement(ye,{condition:[u,p].every(F),wrapper:P=>t.createElement("div",{className:b.Actions},P)},u,p))))),t.createElement(ee,{condition:[E].some(F)},t.createElement("div",{className:b.Row},t.createElement(ae,{gap:"400"},E))))))}function Qe({primaryAction:e}){const{isNavigationCollapsed:n}=fe();let s;if(B(e)){const{primary:i,helpText:o}=e,l=i===void 0?!0:i,a=Me(Ue(n,e),{variant:l?"primary":void 0});s=o?t.createElement(he,{content:o},a):a}else s=e;return t.createElement("div",{className:b.PrimaryActionWrapper},t.createElement(H,{printHidden:!0},s))}function Ue(e,n){let{content:s,accessibilityLabel:i}=n;const{icon:o}=n;return o==null?{...n,icon:void 0}:(e&&(i=i||s,s=void 0),{...n,content:s,accessibilityLabel:i,icon:o})}function F(e){return e!=null}function Ye({actionMenuMarkup:e,additionalMetadataMarkup:n,breadcrumbMarkup:s,isNavigationCollapsed:i,pageTitleMarkup:o,paginationMarkup:l,primaryActionMarkup:a,title:r}){const m={mobileCompact:{slots:{slot1:null,slot2:o,slot3:e,slot4:a,slot5:n},condition:i&&s==null&&r!=null&&r.length<=Ve},mobileDefault:{slots:{slot1:s,slot2:o,slot3:e,slot4:a,slot5:n},condition:i},desktopCompact:{slots:{slot1:s,slot2:o,slot3:e,slot4:a,slot5:n},condition:!i&&l==null&&e==null&&r!=null&&r.length<=Fe},desktopDefault:{slots:{slot1:s,slot2:o,slot3:t.createElement(t.Fragment,null,e,a),slot4:l,slot5:n},condition:!i}};return(Object.values(m).find(c=>c.condition)||m.desktopDefault).slots}function et({children:e,fullWidth:n,narrowWidth:s,...i}){const o=W($.Page,n&&$.fullWidth,s&&$.narrowWidth),l=i.title!=null&&i.title!==""||i.subtitle!=null&&i.subtitle!==""||i.primaryAction!=null||i.secondaryActions!=null&&(B(i.secondaryActions)&&i.secondaryActions.length>0||z(i.secondaryActions))||i.actionGroups!=null&&i.actionGroups.length>0||i.backAction!=null,a=W(!l&&$.Content),r=l?t.createElement(ze,Object.assign({filterActions:!0},i)):null;return t.createElement("div",{className:o},r,t.createElement("div",{className:a},e))}export{Ze as C,et as P};
