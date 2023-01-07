var c=Object.defineProperty;var t=(e,o)=>c(e,"name",{value:o,configurable:!0});import{r as a}from"./index-d282687f.js";import{c as l}from"./index-bc284276.js";/* empty css                  */import{j as n}from"./jsx-runtime-920531fb.js";import"./es.object.get-own-property-descriptor-fbf95828.js";const p={},u=t(({src:e,classes:o,playbackRate:i=1,...d})=>{const r=a.useRef(null);return a.useEffect(()=>{r.current.playbackRate=i},[i]),n("video",{ref:r,className:l(p.video,o),loop:!0,autoPlay:!0,muted:!0,...d,children:n("source",{src:e})})},"UiVideo"),s=u;try{uivideo.displayName="uivideo",uivideo.__docgenInfo={description:"",displayName:"uivideo",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},playbackRate:{defaultValue:{value:"1"},description:"",name:"playbackRate",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/ui/ui-video/index.tsx#uivideo"]={docgenInfo:uivideo.__docgenInfo,name:"uivideo",path:"src/components/ui/ui-video/index.tsx#uivideo"})}catch{}const m="/star-wars-database/storybook/assets/han-solo-47616333.mp4",U={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";

import UiVideo from "./index";

import video from "src/components/error-message/video/han-solo.mp4";

export default {
  title: "Ui-Kit/UiVideo",
  component: UiVideo,
} as ComponentMeta<typeof UiVideo>;

const Template: ComponentStory<typeof UiVideo> = (args) => (
  <UiVideo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: video,
  playbackRate: 1.5,
};
`,locationsMap:{default:{startLoc:{col:49,line:12},endLoc:{col:1,line:14},startBody:{col:49,line:12},endBody:{col:1,line:14}}}}},title:"Ui-Kit/UiVideo",component:s},f=t(e=>n(s,{...e}),"Template"),y=f.bind({});y.args={src:m,playbackRate:1.5};const b=["Default"];export{y as Default,b as __namedExportsOrder,U as default};
//# sourceMappingURL=ui-video.stories-e5dca44f.js.map
