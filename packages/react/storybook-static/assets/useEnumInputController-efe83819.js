import{r as l}from"./index-7c191284.js";import{a as C,b as M}from"./apis-0ee9c31a.js";const O=f=>{const{field:m,control:d}=f,{path:g,metadata:i}=C(m),t=i.configuration;if(t.__typename!=="GadgetEnumConfig")throw new Error("Field is not an enum type");const{field:o,fieldState:{error:a}}=M({control:d,name:g}),[s,c]=l.useState(""),n=l.useMemo(()=>typeof o.value=="string"?[o.value]:o.value??[],[o.value]),u=l.useMemo(()=>t.options.map(e=>e.name),[t.options]),p=l.useMemo(()=>[...new Set([...n,...u])],[u,n]),h=l.useMemo(()=>p.filter(e=>!s||e.toLocaleLowerCase().includes(s.trim().toLocaleLowerCase())),[p,s]),w=l.useCallback(e=>{if(c(""),t.allowMultiple){if(e===null){o.onChange([]);return}const r=new Set([...n]);r.has(e)?r.delete(e):r.add(e),o.onChange([...r])}else e===null||n.includes(e)?o.onChange(null):o.onChange(e)},[t.allowMultiple,o,n]);return{allowMultiple:t.allowMultiple,allowOther:t.allowOther,selectedOptions:n,providedOptions:u,filteredOptions:h,allOptions:p,searchQuery:{value:s,setValue:c},onSelectionChange:w,label:i.name,metadata:i,fieldProps:o,isError:!!a,errorMessage:a==null?void 0:a.message}};export{O as u};
