import{r as m,g as c,j as i,a as n}from"./index-e989c60d.js";function r(t){return!!t}const p="_wrapper_1d0tm_1",d="_item_1d0tm_6",u="_item__episode_1d0tm_12",f="_item__colon_1d0tm_17",h="_item__title_1d0tm_22",e={wrapper:p,item:d,item__episode:u,item__colon:f,item__title:h},w=({filmsUrls:t})=>{const[a,o]=m.useState(null);return m.useEffect(()=>{(async()=>{const s=(await c(t)).filter(r);o(s.map(({title:_,episode_id:l})=>({title:_,episode:l})))})()},[t]),i("div",{className:e.wrapper,children:i("ul",{className:e.list,children:a&&a.map(({title:s,episode:_})=>n("li",{className:e.item,children:[n("span",{className:e.item__episode,children:["Episode ",_]}),i("span",{className:e.item__colon,children:" : "}),i("span",{className:e.item__title,children:s})]},s))})})};export{w as default};