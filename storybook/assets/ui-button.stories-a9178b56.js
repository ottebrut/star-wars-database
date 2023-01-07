var d=Object.defineProperty;var e=(t,n)=>d(t,"name",{value:n,configurable:!0});import{c}from"./index-bc284276.js";/* empty css                  */import{j as a}from"./jsx-runtime-920531fb.js";import"./index-d282687f.js";import"./es.object.get-own-property-descriptor-fbf95828.js";const u="_button_z2ef4_1",p="_dark_z2ef4_21",m="_light_z2ef4_30",l={button:u,dark:p,light:m},b=e(({children:t,theme:n="dark",...s})=>a("button",{className:c(l.button,l[n]),...s,children:t}),"UiButton"),r=b;try{uibutton.displayName="uibutton",uibutton.__docgenInfo={description:"",displayName:"uibutton",props:{theme:{defaultValue:{value:"dark"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"neutral"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/ui/ui-button/index.tsx#uibutton"]={docgenInfo:uibutton.__docgenInfo,name:"uibutton",path:"src/components/ui/ui-button/index.tsx#uibutton"})}catch{}const L={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";

import UiButton, { UiButtonProps } from "./index";

export default {
  title: "Ui-Kit/UiButton",
  component: UiButton,
} as ComponentMeta<typeof UiButton>;

const Template: ComponentStory<typeof UiButton> = (args) => (
  <UiButton {...args} />
);

const defaultArgs: UiButtonProps = {
  theme: "light",
  children: "Hello",
  onClick: () => console.debug("Button clicked"),
  disabled: false,
};

export const Light = Template.bind({});

Light.args = {
  ...defaultArgs,
  theme: "light",
};

export const Dark = Template.bind({});

Dark.args = {
  ...defaultArgs,
  theme: "dark",
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...defaultArgs,
  disabled: true,
};
`,locationsMap:{light:{startLoc:{col:50,line:10},endLoc:{col:1,line:12},startBody:{col:50,line:10},endBody:{col:1,line:12}},dark:{startLoc:{col:50,line:10},endLoc:{col:1,line:12},startBody:{col:50,line:10},endBody:{col:1,line:12}},disabled:{startLoc:{col:50,line:10},endLoc:{col:1,line:12},startBody:{col:50,line:10},endBody:{col:1,line:12}}}}},title:"Ui-Kit/UiButton",component:r},o=e(t=>a(r,{...t}),"Template"),i={theme:"light",children:"Hello",onClick:()=>console.debug("Button clicked"),disabled:!1},g=o.bind({});g.args={...i,theme:"light"};const f=o.bind({});f.args={...i,theme:"dark"};const _=o.bind({});_.args={...i,disabled:!0};const S=["Light","Dark","Disabled"];export{f as Dark,_ as Disabled,g as Light,S as __namedExportsOrder,L as default};
//# sourceMappingURL=ui-button.stories-a9178b56.js.map
