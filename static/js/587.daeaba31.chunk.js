"use strict";(self.webpackChunkway_of_the_samurai=self.webpackChunkway_of_the_samurai||[]).push([[587],{8587:function(e,s,n){n.r(s),n.d(s,{default:function(){return I}});var r=n(364),a=n(3190),t=n(2111),i="Dialogs_dialogsContainer__JinDb",o="Dialogs_users__e3Ao2",d="Dialogs_messages__Ua5d5",u=(n(2791),{userContainer:"User_userContainer__1UniV",userName:"User_userName__Z82ND",userText:"User_userText__k7QLI",active:"User_active__HTlRJ"}),c=n(1087),l=n(3220),m=n(184),x=function(e){var s=e.id,n=e.name;return(0,m.jsx)("div",{className:u.userContainer,children:(0,m.jsx)("div",{className:u.userName,children:(0,m.jsx)("div",{className:u.userNameItem+" "+u.active,children:(0,m.jsx)(c.OL,{to:l.r.DIALOGS+"/"+s,children:n})})})})},_=function(e){var s=e.id,n=e.name;return(0,m.jsx)(x,{id:s,name:n})},h={},f=function(e){var s=e.message;return(0,m.jsx)("div",{children:(0,m.jsx)("div",{className:h.messageText,children:(0,m.jsx)("p",{className:h.messageTextItem,children:s})})})},g=function(e){var s=e.message;return(0,m.jsx)(f,{message:s})},v=n(7689),j="AddTextAreaMessage_AddPostContainer__QD8QQ",p=n(6139),N=n(704),C=n(3079),D=n(6811),Z=(0,C.D)(20),A=C.l,b=(0,N.Z)({form:"addTextAreaMessage"})((function(e){return(0,m.jsxs)("form",{className:j,onSubmit:e.handleSubmit,children:[(0,m.jsx)(p.Z,{type:"textarea",placeholder:"ADD MESSAGE",name:"newMessageBody",component:D.gx,validate:[A,Z]}),(0,m.jsx)("button",{children:"Add new message"})]})})),T=function(e){var s=e.dialogsPage,n=e.isAuth,r=e.addMessageText,a=s.users.map((function(e){return(0,m.jsx)(_,{name:e.name,id:e.id},e.id)})),t=s.messages.map((function(e){return(0,m.jsx)(g,{message:e.message},e.id)}));return n?(0,m.jsxs)("div",{className:i,children:[(0,m.jsx)("div",{className:o,children:a}),(0,m.jsx)("div",{className:d,children:t}),(0,m.jsx)(b,{onSubmit:function(e){r(e.newMessageBody)}})]}):(0,m.jsx)(v.Fg,{to:l.r.LOGIN})},I=(0,n(7781).qC)((0,r.$j)((function(e){return{dialogsPage:e.dialogsPage}}),{addMessageText:a.ni}),t.D)(T)},6811:function(e,s,n){n.d(s,{II:function(){return u},gx:function(){return d}});var r=n(1413),a=(n(2791),"FormsControls_FormControl__aBk1v"),t="FormsControls_FormControlError__qVc3I",i=n(184),o=function(e){var s=e.meta.error&&e.meta.touched;return(0,i.jsxs)("div",{className:a,children:[(0,i.jsx)("div",{className:s?t:void 0,children:e.children}),s?(0,i.jsx)("span",{children:e.meta.error}):void 0]})},d=function(e){return(0,i.jsx)(o,(0,r.Z)((0,r.Z)({},e),{},{children:(0,i.jsx)("textarea",(0,r.Z)((0,r.Z)({},e.input),{},{placeholder:e.placeholder}))}))},u=function(e){return(0,i.jsx)(o,(0,r.Z)((0,r.Z)({},e),{},{children:(0,i.jsx)("input",(0,r.Z)((0,r.Z)({},e.input),{},{placeholder:e.placeholder}))}))}},3079:function(e,s,n){n.d(s,{D:function(){return a},l:function(){return r}});var r=function(e){return e&&void 0!==e?void 0:"Field is required"},a=function(e){return function(s){return s&&s.length>e?"Field should be shorter then ".concat(e," symbols"):void 0}}}}]);
//# sourceMappingURL=587.daeaba31.chunk.js.map