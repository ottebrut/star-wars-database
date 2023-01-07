var m=Object.defineProperty;var e=(t,r)=>m(t,"name",{value:r,configurable:!0});import{r as _}from"./index-d282687f.js";import{c}from"./index-bc284276.js";/* empty css                  */import{a as f,j as o}from"./jsx-runtime-920531fb.js";import"./es.object.get-own-property-descriptor-fbf95828.js";const I="/assets/cross-638a612e.svg",y="_wrapper_rverh_1",x="_input_rverh_10",S="_clear_rverh_24",U="_clear_disabled_rverh_36",n={wrapper:y,input:x,clear:S,clear_disabled:U},b=e(({classes:t,value:r,onChange:s,...l})=>{const[i,a]=_.useState(r||""),d=e(p=>{a(p.target.value),s==null||s(p)},"onInputChange");return f("div",{className:c(n.wrapper,t),children:[o("input",{className:n.input,value:i,onChange:d,...l}),o("button",{onClick:()=>a(""),children:o("img",{src:I,className:c(n.clear,!i&&n.clear_disabled),alt:"Cross"})})]})},"UiInput"),u=b;try{uiinput.displayName="uiinput",uiinput.__docgenInfo={description:"",displayName:"uiinput",props:{classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/ui/ui-input/index.tsx#uiinput"]={docgenInfo:uiinput.__docgenInfo,name:"uiinput",path:"src/components/ui/ui-input/index.tsx#uiinput"})}catch{}const N={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";

import UiInput from "./index";

export default {
  title: "Ui-Kit/UiInput",
  component: UiInput,
} as ComponentMeta<typeof UiInput>;

const Template: ComponentStory<typeof UiInput> = (args) => (
  <UiInput {...args} />
);

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:49,line:10},endLoc:{col:1,line:12},startBody:{col:49,line:10},endBody:{col:1,line:12}}}}},title:"Ui-Kit/UiInput",component:u},g=e(t=>o(u,{...t}),"Template"),w=g.bind({}),A=["Default"];export{w as Default,A as __namedExportsOrder,N as default};
//# sourceMappingURL=ui-input.stories-30c8ec36.js.map
