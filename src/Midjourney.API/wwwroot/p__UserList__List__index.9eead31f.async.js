"use strict";(self.webpackChunkmidjourney_proxy_admin=self.webpackChunkmidjourney_proxy_admin||[]).push([[579],{47389:function(W,j,a){var v=a(1413),h=a(67294),x=a(27363),m=a(91146),f=function(c,S){return h.createElement(m.Z,(0,v.Z)((0,v.Z)({},c),{},{ref:S,icon:x.Z}))},g=h.forwardRef(f);j.Z=g},88360:function(W,j,a){a.d(j,{Z:function(){return c}});var v=a(1413),h=a(67294),x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-add",theme:"outlined"},m=x,f=a(91146),g=function(n,A){return h.createElement(f.Z,(0,v.Z)((0,v.Z)({},n),{},{ref:A,icon:m}))},I=h.forwardRef(g),c=I},87707:function(W,j,a){a.r(j),a.d(j,{default:function(){return je}});var v=a(97857),h=a.n(v),x=a(15009),m=a.n(x),f=a(99289),g=a.n(f),I=a(5574),c=a.n(I),S=a(27986),n=a(53025),A=a(71230),V=a(15746),w=a(4393),p=a(26915),D=a(74656),ie=a(72269),C=a(37804),G=a(56063),M=a(67294),H=a(94272),e=a(85893),le=function(O){var y=O.form,z=O.onSubmit,E=O.record,r=(0,H.useIntl)(),L=(0,M.useState)(!1),T=c()(L,2),R=T[0],U=T[1];return(0,M.useEffect)(function(){y.setFieldsValue(E),E.id=="admin"?U(!0):U(!1),console.log("record",E)}),(0,e.jsx)(n.Z,{form:y,labelAlign:"left",layout:"horizontal",labelCol:{span:8},wrapperCol:{span:16},onFinish:z,children:(0,e.jsxs)(A.Z,{gutter:16,children:[(0,e.jsx)(V.Z,{span:12,children:(0,e.jsxs)(w.Z,{type:"inner",children:[(0,e.jsx)(n.Z.Item,{label:"id",name:"id",hidden:!0,children:(0,e.jsx)(p.Z,{})}),(0,e.jsx)(n.Z.Item,{required:!0,label:r.formatMessage({id:"pages.user.name"}),name:"name",children:(0,e.jsx)(p.Z,{})}),(0,e.jsx)(n.Z.Item,{label:r.formatMessage({id:"pages.user.email"}),name:"email",children:(0,e.jsx)(p.Z,{})}),(0,e.jsx)(n.Z.Item,{label:r.formatMessage({id:"pages.user.phone"}),name:"phone",children:(0,e.jsx)(p.Z,{})}),(0,e.jsx)(n.Z.Item,{required:!0,label:r.formatMessage({id:"pages.user.status"}),name:"status",children:(0,e.jsxs)(D.Z,{children:[(0,e.jsx)(D.Z.Option,{value:"NORMAL",children:r.formatMessage({id:"pages.user.normal"})}),(0,e.jsx)(D.Z.Option,{value:"DISABLED",children:r.formatMessage({id:"pages.user.disabled"})})]})}),(0,e.jsx)(n.Z.Item,{required:!0,label:r.formatMessage({id:"pages.user.role"}),name:"role",children:(0,e.jsxs)(D.Z,{disabled:R,children:[(0,e.jsx)(D.Z.Option,{value:"ADMIN",children:r.formatMessage({id:"pages.user.admin"})}),(0,e.jsx)(D.Z.Option,{value:"USER",children:r.formatMessage({id:"pages.user.user"})})]})}),(0,e.jsx)(n.Z.Item,{label:r.formatMessage({id:"pages.user.token"}),name:"token",required:!0,extra:(0,e.jsx)("a",{onClick:function(){var N=Array.from({length:32},function(){return Math.random().toString(36).charAt(2)}).join("");y.setFieldsValue({token:N})},children:r.formatMessage({id:"pages.user.refreshToken"})}),children:(0,e.jsx)(p.Z,{})}),(0,e.jsx)(n.Z.Item,{label:r.formatMessage({id:"pages.user.registerTime"}),name:"registerTimeFormat",children:(0,e.jsx)(p.Z,{disabled:!0})}),(0,e.jsx)(n.Z.Item,{label:r.formatMessage({id:"pages.user.registerIp"}),name:"registerIp",children:(0,e.jsx)(p.Z,{disabled:!0})}),(0,e.jsx)(n.Z.Item,{label:r.formatMessage({id:"pages.user.lastLoginTime"}),name:"lastLoginTimeFormat",children:(0,e.jsx)(p.Z,{disabled:!0})}),(0,e.jsx)(n.Z.Item,{label:r.formatMessage({id:"pages.user.lastLoginIp"}),name:"lastLoginIp",children:(0,e.jsx)(p.Z,{disabled:!0})})]})}),(0,e.jsx)(V.Z,{span:12,children:(0,e.jsxs)(w.Z,{type:"inner",children:[(0,e.jsx)(n.Z.Item,{label:r.formatMessage({id:"pages.user.isWhite"}),name:"isWhite",help:r.formatMessage({id:"pages.user.isWhite.help"}),children:(0,e.jsx)(ie.Z,{})}),(0,e.jsx)(n.Z.Item,{label:r.formatMessage({id:"pages.user.dayDrawLimit"}),name:"dayDrawLimit",children:(0,e.jsx)(C.Z,{min:-1})}),(0,e.jsx)(n.Z.Item,{label:r.formatMessage({id:"pages.user.totalDrawLimit"}),name:"totalDrawLimit",children:(0,e.jsx)(C.Z,{min:-1})}),(0,e.jsx)(n.Z.Item,{label:r.formatMessage({id:"pages.user.coreSize"}),name:"coreSize",children:(0,e.jsx)(C.Z,{min:-1})}),(0,e.jsx)(n.Z.Item,{label:r.formatMessage({id:"pages.user.queueSize"}),name:"queueSize",children:(0,e.jsx)(C.Z,{min:-1})}),(0,e.jsx)(n.Z.Item,{label:r.formatMessage({id:"pages.user.validStartTime"}),name:"validStartTime",children:(0,e.jsx)(G.default,{})}),(0,e.jsx)(n.Z.Item,{label:r.formatMessage({id:"pages.user.validEndTime"}),name:"validEndTime",children:(0,e.jsx)(G.default,{})}),(0,e.jsx)(n.Z.Item,{label:r.formatMessage({id:"pages.user.dayDrawCount"}),name:"dayDrawCount",children:(0,e.jsx)(C.Z,{min:0,disabled:!0})}),(0,e.jsx)(n.Z.Item,{label:r.formatMessage({id:"pages.user.totalDrawCount"}),name:"totalDrawCount",children:(0,e.jsx)(C.Z,{min:0,disabled:!0})})]})})]})})},J=le,B=a(66927),de=a(47389),oe=a(82061),ue=a(88360),me=a(90930),ce=a(93049),fe=a(16568),b=a(28036),ge=a(84567),Q=a(66309),he=a(42075),ve=a(86738),pe=a(27484),X=a.n(pe),Me=function(){var O=(0,M.useState)(!1),y=c()(O,2),z=y[0],E=y[1],r=(0,M.useState)({}),L=c()(r,2),T=L[0],R=L[1],U=(0,M.useState)(""),$=c()(U,2),N=$[0],xe=$[1],Ie=(0,M.useState)({}),k=c()(Ie,2),Se=k[0],q=k[1],De=(0,M.useState)(1e3),_=c()(De,2),Ce=_[0],ye=_[1],Ee=n.Z.useForm(),Ae=c()(Ee,1),P=Ae[0],l=(0,H.useIntl)(),be=fe.ZP.useNotification(),ee=c()(be,2),F=ee[0],Oe=ee[1],Y=(0,M.useRef)(),K=function(){R({}),q({}),E(!1)},Le=(0,M.useState)(!1),ae=c()(Le,2),Te=ae[0],te=ae[1],se=(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(b.ZP,{onClick:K,children:l.formatMessage({id:"pages.cancel"})},"back"),(0,e.jsx)(b.ZP,{type:"primary",loading:Te,onClick:function(){return P.submit()},children:l.formatMessage({id:"pages.submit"})},"submit")]}),re=function(){var o=g()(m()().mark(function t(s){var i,d;return m()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return te(!0),u.next=3,(0,B.r4)(s);case 3:i=u.sent,i.success?(F.success({message:"success",description:i.message}),K(),(d=Y.current)===null||d===void 0||d.reload()):F.error({message:"error",description:i.message}),te(!1);case 6:case"end":return u.stop()}},t)}));return function(s){return o.apply(this,arguments)}}(),ne=function(t,s,i,d){P.resetFields(),xe(t),R(s),q(i),ye(d),E(!0)},Re=function(){var o=g()(m()().mark(function t(s){var i,d;return m()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,(0,B.h8)(s);case 3:i=u.sent,i.success?(F.success({message:"success",description:l.formatMessage({id:"pages.task.deleteSuccess"})}),(d=Y.current)===null||d===void 0||d.reload()):F.error({message:"error",description:i.message}),u.next=10;break;case 7:u.prev=7,u.t0=u.catch(0),console.error(u.t0);case 10:return u.prev=10,u.finish(10);case 12:case"end":return u.stop()}},t,null,[[0,7,10,12]])}));return function(s){return o.apply(this,arguments)}}(),Ue=[{title:l.formatMessage({id:"pages.user.name"}),dataIndex:"name",width:140,align:"center",fixed:"left"},{title:l.formatMessage({id:"pages.user.email"}),dataIndex:"email",width:140,align:"center"},{title:l.formatMessage({id:"pages.user.isWhite"}),dataIndex:"isWhite",width:90,align:"center",render:function(t){return(0,e.jsx)(ge.Z,{checked:t,disabled:!0})}},{title:l.formatMessage({id:"pages.user.status"}),dataIndex:"status",width:90,align:"center",request:function(){var o=g()(m()().mark(function s(){return m()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",[{label:l.formatMessage({id:"pages.user.normal"}),value:"NORMAL"},{label:l.formatMessage({id:"pages.user.disabled"}),value:"DISABLED"}]);case 1:case"end":return d.stop()}},s)}));function t(){return o.apply(this,arguments)}return t}(),render:function(t,s){var i="default";return t=="NORMAL"?i="default":t=="DISABLED"&&(i="error"),(0,e.jsx)(Q.Z,{color:i,children:s.status})}},{title:l.formatMessage({id:"pages.user.role"}),dataIndex:"role",width:140,showInfo:!1,align:"center",request:function(){var o=g()(m()().mark(function s(){return m()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",[{label:l.formatMessage({id:"pages.user.user"}),value:"USER"},{label:l.formatMessage({id:"pages.user.admin"}),value:"ADMIN"}]);case 1:case"end":return d.stop()}},s)}));function t(){return o.apply(this,arguments)}return t}(),render:function(t,s){var i="default";return t=="USER"?i="default":t=="ADMIN"&&(i="success"),(0,e.jsx)(Q.Z,{color:i,children:s.role})}},{title:l.formatMessage({id:"pages.user.dayDrawLimit"}),dataIndex:"dayDrawLimit",width:140,align:"center",hideInSearch:!0,render:function(t,s){return t<=0?l.formatMessage({id:"pages.user.unlimited"}):t}},{title:l.formatMessage({id:"pages.user.totalDrawLimit"}),dataIndex:"totalDrawLimit",width:140,align:"center",hideInSearch:!0,render:function(t,s){return t<=0?l.formatMessage({id:"pages.user.unlimited"}):t}},{title:l.formatMessage({id:"pages.user.dayDrawCount"}),dataIndex:"dayDrawCount",width:140,ellipsis:!0,hideInSearch:!0},{title:l.formatMessage({id:"pages.user.totalDrawCount"}),dataIndex:"totalDrawCount",width:140,ellipsis:!0,hideInSearch:!0},{title:l.formatMessage({id:"pages.operation"}),dataIndex:"operation",width:140,key:"operation",fixed:"right",align:"center",hideInSearch:!0,render:function(t,s){return s.validStartTime&&(s.validStartTime=X()(s.validStartTimeFormat,"YYYY-MM-DD")),s.validEndTime&&(s.validEndTime=X()(s.validEndTimeFormat,"YYYY-MM-DD")),(0,e.jsxs)(he.Z,{children:[(0,e.jsx)(b.ZP,{icon:(0,e.jsx)(de.Z,{}),onClick:function(){return ne(l.formatMessage({id:"pages.user.update"}),(0,e.jsx)(J,{form:P,record:s,onSubmit:re}),se,1e3)}},"Update"),(0,e.jsx)(ve.Z,{title:l.formatMessage({id:"pages.user.delete"}),description:l.formatMessage({id:"pages.user.deleteTitle"}),onConfirm:function(){return Re(s.id)},children:(0,e.jsx)(b.ZP,{danger:!0,icon:(0,e.jsx)(oe.Z,{})})})]})}}];return(0,e.jsxs)(me._z,{children:[Oe,(0,e.jsx)(w.Z,{children:(0,e.jsx)(ce.Z,{columns:Ue,scroll:{x:1e3},search:{defaultCollapsed:!0},pagination:{pageSize:10,showQuickJumper:!1,showSizeChanger:!1},rowKey:"id",actionRef:Y,toolBarRender:function(){return[(0,e.jsx)(b.ZP,{type:"primary",icon:(0,e.jsx)(ue.Z,{}),onClick:function(){return ne(l.formatMessage({id:"pages.user.add"}),(0,e.jsx)(J,{form:P,record:{},onSubmit:re}),se,1e3)},children:l.formatMessage({id:"pages.add"})},"primary")]},request:function(){var o=g()(m()().mark(function t(s){var i;return m()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,(0,B.tM)(h()(h()({},s),{},{pageNumber:s.current-1}));case 2:return i=Z.sent,Z.abrupt("return",{data:i.list,total:i.pagination.total,success:!0});case 4:case"end":return Z.stop()}},t)}));return function(t){return o.apply(this,arguments)}}()})}),(0,e.jsx)(S.Z,{title:N,modalVisible:z,hideModal:K,modalContent:T,footer:Se,modalWidth:Ce})]})},je=Me},27986:function(W,j,a){var v=a(28248),h=a(85893),x=function(f){var g=f.title,I=f.modalVisible,c=f.hideModal,S=f.modalContent,n=f.footer,A=f.modalWidth;return(0,h.jsx)(v.Z,{title:g,open:I,onCancel:c,footer:n,width:A,children:S})};j.Z=x}}]);
