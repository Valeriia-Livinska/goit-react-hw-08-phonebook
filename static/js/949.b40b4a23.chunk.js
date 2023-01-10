"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[949],{2634:function(n,e,r){r.d(e,{D:function(){return i},Q:function(){return a}});var t,o,u=r(168),c=r(6444),i=c.ZP.h1(t||(t=(0,u.Z)(["\n  margin-bottom: ","px;\n  color: ",";\n  border-bottom: ","\n    ",";\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.borders.large}),(function(n){return n.theme.colors.accentPink})),a=c.ZP.h2(o||(o=(0,u.Z)(["\n  margin-top: ","px;\n  margin-bottom: ","px;\n  color: ",";\n  border-bottom: "," ",";\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.borders.large}),(function(n){return n.theme.colors.accentPink}))},3309:function(n,e,r){r.d(e,{II:function(){return s},Mm:function(){return m},l0:function(){return a}});var t,o,u,c=r(168),i=r(6444),a=i.ZP.form(t||(t=(0,c.Z)(["\n  padding-top: ","px;\n  padding-bottom: ","px;\n\n  // width: 100%;\n\n  border-top: "," ",";\n  border-bottom: "," ",";\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.borders.medium}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.borders.medium}),(function(n){return n.theme.colors.border})),s=i.ZP.input(o||(o=(0,c.Z)(["\n  margin-left: ","px;\n\n  height: ","px;\n  width: 200px;\n\n  border: "," ",";\n  border-radius: ",";\n  outline: transparent;\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    border: "," ",";\n    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),\n      0px 2px 2px rgb(0 0 0 / 12%);\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.borders.medium}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.borders.medium}),(function(n){return n.theme.colors.accentBlue})),m=i.ZP.button(u||(u=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  margin-left: auto;\n  margin-top: ","px;\n\n  width: ","px;\n  height: ","px;\n\n  color: inherit;\n  text-transform: uppercase;\n  border-radius: ",";\n  background-color: ",";\n  border: "," ",";\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),\n      0px 2px 2px rgb(0 0 0 / 12%);\n  }\n\n  &:disabled {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[7]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.accentPink}),(function(n){return n.theme.borders.medium}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.colors.hoverPink}),(function(n){return n.theme.colors.border}))},6949:function(n,e,r){r.r(e),r.d(e,{default:function(){return A}});var t,o,u,c=r(2634),i=r(9457),a=r(9439),s=r(2791),m=r(9434),d=function(n){return n.contacts.items},h=function(n){return n.contacts.isLoading},l=function(n){return n.contacts.error},p=function(n){return n.filter},b=r(3634),f=r(3309),x=r(3329),g=function(){var n=(0,s.useState)(""),e=(0,a.Z)(n,2),r=e[0],t=e[1],o=(0,s.useState)(""),u=(0,a.Z)(o,2),c=u[0],l=u[1],p=(0,m.v9)(d),g=(0,m.v9)(h),v=(0,m.I0)();return(0,x.jsxs)(f.l0,{onSubmit:function(n){n.preventDefault(),function(n){p.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?alert("".concat(n.name," is already in contacts")):v((0,b.uK)(n))}({name:r,number:c}),t(""),l("")},children:[(0,x.jsxs)(i.x,{justifyContent:"space-between",width:600,children:[(0,x.jsxs)("label",{children:["Name",(0,x.jsx)(f.II,{type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:r,onChange:function(n){t(n.currentTarget.value)}})]}),(0,x.jsxs)("label",{children:["Number",(0,x.jsx)(f.II,{type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:c,onChange:function(n){l(n.currentTarget.value)}})]})]}),(0,x.jsx)(f.Mm,{type:"submit",disabled:g,children:"Add contact"})]})},v=r(168),w=r(6444),j=w.ZP.li(t||(t=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n\n  :not(:last-child) {\n    margin-bottom: ","px;\n  }\n\n  &:hover > span,\n  &:focus > span {\n    text-decoration: line-through;\n  }\n"])),(function(n){return n.theme.space[4]})),Z=w.ZP.button(o||(o=(0,v.Z)(["\n  margin-left: ","px;\n\n  height: ","px;\n  width: ","px;\n\n  color: inherit;\n  border-radius: ",";\n  background-color: ",";\n  border: "," ",";\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),\n      0px 2px 2px rgb(0 0 0 / 12%);\n  }\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[6]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.accentBlue}),(function(n){return n.theme.borders.medium}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.colors.hoverBlue})),k=function(){var n=(0,m.v9)(d),e=(0,m.v9)(p),r=(0,m.I0)(),t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)})).map((function(n){var e=n.id,t=n.name,o=n.number;return(0,x.jsxs)(j,{children:[(0,x.jsxs)("span",{children:[t,": ",o]}),(0,x.jsx)(Z,{type:"button",onClick:function(){return n=e,void r((0,b.GK)(n));var n},children:"Delete"})]},e)}))},y=function(){return(0,x.jsx)("ul",{children:(0,x.jsx)(k,{})})},P=r(4808),C=w.ZP.input(u||(u=(0,v.Z)(["\n  margin-top: ","px;\n\n  height: ","px;\n  width: 200px;\n\n  border: "," ",";\n  border-radius: ",";\n  outline: transparent;\n\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    border: "," ",";\n    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),\n      0px 2px 2px rgb(0 0 0 / 12%);\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.borders.medium}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.borders.medium}),(function(n){return n.theme.colors.accentBlue})),z=function(){var n=(0,m.I0)(),e=(0,m.v9)(p);return(0,x.jsxs)(i.x,{flexDirection:"column",alignItems:"center",mb:5,children:[(0,x.jsx)("label",{children:"Find contacts by name"}),(0,x.jsx)(C,{type:"text",name:"filter",value:e,onChange:function(e){n((0,P.z)(e.currentTarget.value))}})]})},I=r(3845);function A(){var n=(0,m.I0)(),e=(0,m.v9)(h),r=(0,m.v9)(l);return(0,s.useEffect)((function(){n((0,b.yF)())}),[n]),(0,x.jsxs)(i.x,{flexDirection:"column",alignItems:"center",mt:5,mb:0,mx:"auto",maxWidth:700,children:[(0,x.jsx)(c.D,{children:"Phonebook"}),(0,x.jsx)(g,{}),(0,x.jsx)(c.Q,{children:"contacts"}),(0,x.jsx)(z,{}),e&&!r?(0,x.jsx)(I.$,{}):(0,x.jsx)(y,{})]})}}}]);
//# sourceMappingURL=949.b40b4a23.chunk.js.map