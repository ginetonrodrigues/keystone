import{t as e}from"./jsx-runtime-D1h9fths.js";import"./react-DMg-8qcY.js";import"./react-dom-DeXBWSIc.js";import"./cx-DD3W-KYS.js";import{n as t,t as n}from"./tooltip-Dbm3s6PK.js";import{t as r}from"./button-C7x2kub8.js";var i=e(),a={title:`Base/Tooltip`,component:n,tags:[`autodocs`],argTypes:{placement:{control:`select`,options:[`top`,`bottom`,`left`,`right`]},arrow:{control:`boolean`}},args:{title:`This is a tooltip`,placement:`top`},decorators:[e=>(0,i.jsx)(`div`,{style:{padding:`100px`,display:`flex`,justifyContent:`center`},children:(0,i.jsx)(e,{})})]},o={render:e=>(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{children:(0,i.jsx)(r,{color:`secondary`,children:`Hover me`})})})},s={render:()=>(0,i.jsx)(n,{title:`Tooltip title`,description:`This is a tooltip with a description text.`,children:(0,i.jsx)(t,{children:(0,i.jsx)(r,{color:`secondary`,children:`With description`})})})},c={render:()=>(0,i.jsx)(n,{title:`Tooltip with arrow`,arrow:!0,children:(0,i.jsx)(t,{children:(0,i.jsx)(r,{color:`secondary`,children:`With arrow`})})})},l={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`16px`},children:[(0,i.jsx)(n,{title:`Top`,placement:`top`,children:(0,i.jsx)(t,{children:(0,i.jsx)(r,{color:`secondary`,children:`Top`})})}),(0,i.jsx)(n,{title:`Bottom`,placement:`bottom`,children:(0,i.jsx)(t,{children:(0,i.jsx)(r,{color:`secondary`,children:`Bottom`})})}),(0,i.jsx)(n,{title:`Left`,placement:`left`,children:(0,i.jsx)(t,{children:(0,i.jsx)(r,{color:`secondary`,children:`Left`})})}),(0,i.jsx)(n,{title:`Right`,placement:`right`,children:(0,i.jsx)(t,{children:(0,i.jsx)(r,{color:`secondary`,children:`Right`})})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <TooltipTrigger>
        <Button color="secondary">Hover me</Button>
      </TooltipTrigger>
    </Tooltip>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip title="Tooltip title" description="This is a tooltip with a description text.">
      <TooltipTrigger>
        <Button color="secondary">With description</Button>
      </TooltipTrigger>
    </Tooltip>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip title="Tooltip with arrow" arrow>
      <TooltipTrigger>
        <Button color="secondary">With arrow</Button>
      </TooltipTrigger>
    </Tooltip>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px"
  }}>
      <Tooltip title="Top" placement="top"><TooltipTrigger><Button color="secondary">Top</Button></TooltipTrigger></Tooltip>
      <Tooltip title="Bottom" placement="bottom"><TooltipTrigger><Button color="secondary">Bottom</Button></TooltipTrigger></Tooltip>
      <Tooltip title="Left" placement="left"><TooltipTrigger><Button color="secondary">Left</Button></TooltipTrigger></Tooltip>
      <Tooltip title="Right" placement="right"><TooltipTrigger><Button color="secondary">Right</Button></TooltipTrigger></Tooltip>
    </div>
}`,...l.parameters?.docs?.source}}};var u=[`Default`,`WithDescription`,`WithArrow`,`Placements`];export{o as Default,l as Placements,c as WithArrow,s as WithDescription,u as __namedExportsOrder,a as default};