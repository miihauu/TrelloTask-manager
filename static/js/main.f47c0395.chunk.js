(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/dots.5d197581.svg"},124:function(e,t,a){e.exports=a.p+"static/media/dots.5d197581.svg"},125:function(e,t,a){e.exports=a(180)},179:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),o=a.n(i),d=a(13),c=a(17),l=a(45),u=a(65),s=a(64),m=a(10),p=a(3);function b(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}var f=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,n=a.boardId,r=a.cardId,i=a.deletedId,o=a.newTitle;switch(a.type){case"ADD_BOARD":return Object(p.a)({},t,Object(m.a)({},n,{id:n,cards:[],title:"New board"}));case"ADD_CARD":return Object(p.a)({},t,Object(m.a)({},n,Object(p.a)({},t[n],{cards:[].concat(Object(s.a)(t[n].cards),[r])})));case"DELETE_CARD":return Object(p.a)({},t,Object(m.a)({},n,Object(p.a)({},t[n],{cards:t[n].cards.filter(function(e){return e!==i})})));case"EDIT_BOARD_TITLE":return Object(p.a)({},t,Object(m.a)({},n,Object(p.a)({},t[n],{title:o})));case"REMOVE_BOARD":return t[n],Object(u.a)(t,[n].map(b));case"REMOVE_ALL_CARDS":return Object(p.a)({},t,Object(m.a)({},n,Object(p.a)({},t[n],{cards:[]})));case"MOVE_CARD":var d=a.oldCardIndex,c=a.newCardIndex,f=a.sourceListId,h=a.destinationListId;if(f===h){var E=Array.from(t[f].cards),C=E.splice(d,1),O=Object(l.a)(C,1)[0];return E.splice(c,0,O),Object(p.a)({},t,Object(m.a)({},f,Object(p.a)({},t[f],{cards:E})))}var v=Array.from(t[f].cards),g=v.splice(d,1),y=Object(l.a)(g,1)[0],D=Array.from(t[h].cards);return D.splice(c,0,y),Object(p.a)({},t,(e={},Object(m.a)(e,f,Object(p.a)({},t[f],{cards:v})),Object(m.a)(e,h,Object(p.a)({},t[h],{cards:D})),e));default:return t}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{project:[]},t=arguments.length>1?arguments[1]:void 0,a=t.boardId,n=t.deletedBoardId;switch(t.type){case"ADD_BOARD":return{project:[].concat(Object(s.a)(e.project),[a])};case"REMOVE_BOARD":return Object(p.a)({},e,{project:e.project.filter(function(e){return e!==n})});case"MOVE_BOARD":var r=t.oldBoardIndex,i=t.newBoardIndex,o=Array.from(e.project),d=o.splice(r,1),c=Object(l.a)(d,1)[0];return o.splice(i,0,c),Object(p.a)({},e,{project:o});default:return e}};function E(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.cardId,n=t.boardId,r=t.content,i=t.cards;switch(t.type){case"ADD_CARD":return Object(p.a)({},e,Object(m.a)({},a,{id:a,content:r,boardId:n,priority:"medium"}));case"DELETE_CARD":return e[a],Object(u.a)(e,[a].map(E));case"REMOVE_BOARD":case"REMOVE_ALL_CARDS":return Object.keys(e).filter(function(e){return!i.includes(e)}).reduce(function(t,a){return Object(p.a)({},t,Object(m.a)({},a,e[a]))},{});case"EDIT_CARD_CONTENT":var o=t.newContentValue;return Object(p.a)({},e,Object(m.a)({},a,Object(p.a)({},e[a],{content:o})));case"CHANGE_PRIORITY":var d=t.newCardPriority;return Object(p.a)({},e,Object(m.a)({},a,Object(p.a)({},e[a],{priority:d})));case"EDIT_DUE_DATE":var c=t.dueDate;return Object(p.a)({},e,Object(m.a)({},a,Object(p.a)({},e[a],{dueDate:c})));default:return e}},O=Object(c.c)({board:f,projects:h,cards:C}),v=a(6),g=a(12),y=a(8),D=a(7),_=a(9),j=a(33),w=function(e,t){return{type:"DELETE_CARD",deletedId:e,boardId:t,cardId:e}},I=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__logo"},"Task Manager"))},T=function(e){var t=e.cardPriority;return r.a.createElement("div",{className:"low"===t?"card-priority card-priority__low":"medium"===t?"card-priority card-priority__medium":"card-priority card-priority__high"},"low"===t?"Low Priority":"medium"===t?"Medium Priority":"High Priority")},S=a(34),N=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(y.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).handleClickOutisde=function(){return a.props.handleClickOutisde()},a.render=function(){return a.props.children},a}return Object(_.a)(t,e),t}(r.a.Component),R=Object(S.a)(N),A=function(e){var t=e.cardContent,a=e.turnOnEditCard,n=e.cardContentEditable,i=e.handleChangeCardContent,o=e.handleSubmitCardContent,d=e.newCardContentValue,c=e.turnOffEditCard,l=function(e){13===e.keyCode&&!1===e.shiftKey&&o()};return r.a.createElement(R,{handleClickOutside:c},r.a.createElement("div",{className:"card__content"},r.a.createElement("div",{className:"text",onDoubleClick:a},n?r.a.createElement("form",{onSubmit:l},r.a.createElement("textarea",{defaultValue:t,onChange:i,value:d,onKeyDown:l})):r.a.createElement("p",null,t))))},P=function(e){var t=e.cardPriority,a=e.dueDate;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("div",{className:"low"===t?"card__date card__date-low":"medium"===t?"card__date card__date-mid":"card__date card__date-high"},a):null)},k=a(101),B=a.n(k),M=function(e){var t=e.isOpened,a=e.handleDeleteCard,n=e.toggleDropdownMenu,i=e.setCardSettingsModalToOpen;return r.a.createElement("div",{className:t?"dropdownmenu active":"dropdownmenu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{className:"dropdownmenu__btn deleteBtn",type:"submit",onClick:function(){a(),n()}},"Delete")),r.a.createElement("li",null,r.a.createElement("button",{className:"dropdownmenu__btn",type:"submit",onClick:function(){i(),n()}},"Settings"))))},V=document.getElementById("modal-root"),x=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(D.a)(t).call(this,e))).el=document.createElement("div"),a}return Object(_.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){V.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){V.removeChild(this.el)}},{key:"render",value:function(){var e=this.props.children;return o.a.createPortal(e,this.el)}}]),t}(r.a.Component),L=function(){return r.a.createElement("div",{className:"backdrop"})},H=function(e){var t=e.setPriorityToLow,a=e.setPriorityToMedium,n=e.setPriorityToHigh,i=e.cardPriority;return r.a.createElement("div",{className:"card-settings-priority"},r.a.createElement("div",{className:"card-settings-priority__header"},"Card Priority"),r.a.createElement("div",{className:"card-settings-priority__buttons"},r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"low"===i?"priority-button priority-button__low priority-button__low--active":"priority-button priority-button__low",value:"low",onClick:t},"Low")),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"medium"===i?"priority-button priority-button__medium priority-button__medium--active":"priority-button priority-button__medium",value:"medium",onClick:a},"Medium")),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"high"===i?"priority-button priority-button__high priority-button__high--active":"priority-button priority-button__high",value:"high",onClick:n},"High"))))},F=function(e){var t=e.handleSubmitPriority,a=e.setCardSettingsModalToClose;return r.a.createElement("div",{className:"card-settings__submit"},r.a.createElement("button",{type:"submit",className:"priority-button priority-button__high",value:"high",onClick:function(){t(),a()}},"Submit"))},U=function(){return r.a.createElement("div",{className:"card-header"},"Settings")},K=function(e){var t=e.cardDescription,a=e.cardDescriptionOpen,n=e.setCardDescriptionToOpen,i=e.handleSubmitCardDescription;return r.a.createElement("div",{className:"card-settings-description"},r.a.createElement("div",{className:"card-settings-description__header"},"Description"),r.a.createElement("div",{className:"card-settings-description__content",onClick:n},a?r.a.createElement("textarea",{defaultValue:t,onKeyDown:i}):r.a.createElement("span",null,t)))},X=a(102),Q=(a(136),function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(D.a)(t).call(this,e))).setPriorityToLow=function(){a.setState({cardPriority:"low"})},a.setPriorityToMedium=function(){a.setState({cardPriority:"medium"})},a.setPriorityToHigh=function(){a.setState({cardPriority:"high"})},a.setCardDescriptionToOpen=function(){a.setState({cardDescriptionOpen:!0})},a.setCardDescriptionToClose=function(){a.setState({cardDescriptionOpen:!1})},a.handleSubmitCardDescription=function(e){13===e.keyCode&&!1===e.shiftKey&&(a.setState({cardDescription:e.target.value}),a.setCardDescriptionToClose())},a.handleSubmitPriority=function(){var e=a.props,t=e.changePriority,n=e.cardId,r=e.editDueDate,i=a.state,o=i.cardPriority,d=i.dueDate;t(n,o),r(n,d?d.toLocaleDateString().replace(/\./g,"/"):"")},a.handleChangeDate=function(e){a.setState({dueDate:e})},a.state={cardPriority:"medium",cardDescription:"Press enter to submit description",cardDescriptionOpen:!1,dueDate:null},a}return Object(_.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.setPriorityToLow,t=this.setPriorityToMedium,a=this.setPriorityToHigh,n=this.setCardDescriptionToOpen,i=this.handleSubmitCardDescription,o=this.setCardDescriptionToClose,d=this.handleSubmitPriority,c=this.handleChangeDate,l=this.state,u=l.cardPriority,s=l.cardDescriptionOpen,m=l.cardDescription,p=l.dueDate,b=this.props,f=b.setCardSettingsModalToClose,h=b.isOpened;return r.a.createElement(r.a.Fragment,null,h&&r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement(R,{handleClickOutside:f},r.a.createElement("div",{className:"card-settings-modal"},r.a.createElement(U,null),r.a.createElement(H,{setPriorityToLow:e,setPriorityToMedium:t,setPriorityToHigh:a,cardPriority:u}),r.a.createElement(R,{handleClickOutside:o},r.a.createElement(K,{cardDescription:m,cardDescriptionOpen:s,setCardDescriptionToOpen:n,handleSubmitCardDescription:i})),r.a.createElement("div",{className:"date-picker-wrapper"},r.a.createElement("span",null,"Pick a due date:"),r.a.createElement(X.a,{className:"date-picker",selected:p,onChange:c,dateFormat:"dd/MM/yyyy",calendarClassName:"date-picker-calendar",placeholderText:"Click to select a date",isClearable:!0})),r.a.createElement(F,{handleSubmitPriority:d,setCardSettingsModalToClose:f})))))}}]),t}(r.a.Component)),Y=Object(d.b)(null,function(e){return{changePriority:function(t,a){e(function(e,t){return{type:"CHANGE_PRIORITY",cardId:e,newCardPriority:t}}(t,a))},editDueDate:function(t,a){e(function(e,t){return{type:"EDIT_DUE_DATE",cardId:e,dueDate:t}}(t,a))}}})(Q),G=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(D.a)(t).call(this,e))).toggleDropdown=function(){a.setState(function(e){return{cardDropdownOpen:!e.cardDropdownOpen}})},a.turnOffDropdown=function(){a.setState({cardDropdownOpen:!1})},a.setCardSettingsModalToOpen=function(){a.setState({cardSettingsModalOpen:!0})},a.setCardSettingsModalToClose=function(){a.setState({cardSettingsModalOpen:!1})},a.state={cardDropdownOpen:!1,cardSettingsModalOpen:!1},a}return Object(_.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.state,t=e.cardDropdownOpen,a=e.cardSettingsModalOpen,n=this.setCardSettingsModalToClose,i=this.setCardSettingsModalToOpen,o=this.props.cardId;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{handleClickOutside:this.turnOffDropdown},r.a.createElement("div",null,r.a.createElement("div",{className:"card-actionBtn action-btn"},r.a.createElement("button",{type:"submit",onClick:this.toggleDropdown},r.a.createElement("img",{src:B.a,alt:"dots"}))),r.a.createElement("div",null,r.a.createElement(M,{isOpened:t,handleDeleteCard:this.props.handleDeleteCard,toggleDropdownMenu:this.toggleDropdown,setCardSettingsModalToOpen:i})))),r.a.createElement(x,null,r.a.createElement(Y,{setCardSettingsModalToClose:n,isOpened:a,cardId:o})))}}]),t}(r.a.Component),J=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(D.a)(t).call(this,e))).styleCardPriority=function(){var e=a.props.cardPriority;return"low"===e?"card card__priority-low":"medium"===e?"card card__priority-med":"card card__priority-high"},a.turnOnEditCard=function(){a.setState({cardContentEditable:!0})},a.turnOffEditCard=function(){a.setState({cardContentEditable:!1})},a.handleDeleteCard=function(){var e=a.props;(0,e.deleteOldCard)(e.cardId,e.boardId)},a.handleSubmitCardContent=function(){var e=a.props,t=e.cardId,n=e.handleEditCard,r=a.state.newCardContentValue;r&&n(t,r),a.turnOffEditCard()},a.handleChangeCardContent=function(e){a.setState({newCardContentValue:e.target.value})},a.state={cardContentEditable:!1,newCardContentValue:"",cardSettingsModalOpen:!1},a}return Object(_.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cardContent,a=e.cardId,n=e.index,i=e.cardPriority,o=e.dueDate,d=this.handleDeleteCard,c=this.turnOnEditCard,l=this.turnOffEditCard,u=this.handleChangeCardContent,s=this.newCardContentValue,m=this.handleSubmitCardContent,p=this.styleCardPriority,b=this.state,f=b.cardContentEditable,h=b.cardSettingsModalOpen;return r.a.createElement("div",{className:"card-wrapper"},r.a.createElement(j.b,{draggableId:a,index:n},function(e){return r.a.createElement("div",Object.assign({className:p(),ref:e.innerRef},e.dragHandleProps,e.draggableProps),r.a.createElement(T,{cardPriority:i}),r.a.createElement(G,{handleDeleteCard:d,cardId:a,isModalSettingsOpen:h}),r.a.createElement(A,{cardContent:t,turnOnEditCard:c,cardContentEditable:f,handleChangeCardContent:u,handleSubmitCardContent:m,newCardContentValue:s,turnOffEditCard:l}),r.a.createElement(P,{cardPriority:i,dueDate:o}))}))}}]),t}(r.a.Component),q=Object(d.b)(function(e,t){return{cardContent:e.cards[t.cardId].content,cardPriority:e.cards[t.cardId].priority,dueDate:e.cards[t.cardId].dueDate}},function(e){return{deleteOldCard:function(t,a){e(w(t,a))},handleEditCard:function(t,a){e(function(e,t){return{type:"EDIT_CARD_CONTENT",cardId:e,newContentValue:t}}(t,a))}}})(J),z=function(e){var t=e.cards,a=e.boardId,n=e.innerRef,i=e.children;return r.a.createElement("div",{className:"board__content",ref:n},t.map(function(e,t){return r.a.createElement(q,{cardId:e,boardId:a,key:e,index:t,innerRef:n})}),i)},W=a(124),Z=a.n(W),$=function(e){var t=e.isOpened,a=e.handleRemoveBoard,n=e.handleRemoveContentBoard;return r.a.createElement("div",{className:"board-dropdownmenu-wrapper"},r.a.createElement("div",{className:t?"dropdownmenu active":"dropdownmenu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{className:"dropdownmenu__btn deleteBtn",type:"submit",onClick:a},"Remove board")),r.a.createElement("li",null,r.a.createElement("button",{className:"dropdownmenu__btn",type:"submit",onClick:n},"Remove all cards")))))},ee=function(e){var t=e.dialogOpen,a=e.handleAction,n=e.turnOffConfirmModal,i=e.modalQuestion;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement("div",{className:"confirm-modal"},r.a.createElement("div",{className:"modal-question"},i),r.a.createElement("div",{className:"confirm-modal__buttons"},r.a.createElement("button",{type:"submit",className:"confirmation-button",onClick:function(){a(),n()}},"Yes"),r.a.createElement("button",{type:"submit",onClick:n},"No")))))},te=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(D.a)(t).call(this,e))).toggleDropdown=function(){a.setState(function(e){return{cardDropdownOpen:!e.cardDropdownOpen}})},a.turnOffDropdown=function(){a.setState({cardDropdownOpen:!1})},a.onClickRemoveBoard=function(){a.setState({dialogOpen:!0,removingBoard:!0}),a.turnOffDropdown()},a.onClickRemoveContentBoard=function(){a.setState({dialogOpen:!0,removingContentBoard:!0}),a.turnOffDropdown()},a.turnOffConfirmModal=function(){a.setState({dialogOpen:!1,removingBoard:!1,removingContentBoard:!1})},a.state={cardDropdownOpen:!1,dialogOpen:!1,removingBoard:!1,removingContentBoard:!1},a}return Object(_.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this,t=this.turnOffConfirmModal,a=this.toggleDropdown,n=this.onClickRemoveBoard,i=this.onClickRemoveContentBoard,o=this.props,d=o.handleRemoveBoard,c=o.handleRemoveAllCards,l=this.state,u=l.removingBoard,s=l.removingContentBoard,m=l.dialogOpen,p=this.state.cardDropdownOpen;return r.a.createElement(R,{handleClickOutside:this.turnOffDropdown},r.a.createElement("div",null,r.a.createElement("div",{className:"card-actionBtn action-btn"},r.a.createElement("button",{type:"submit",onClick:this.toggleDropdown,ref:function(t){return e.node=t}},r.a.createElement("img",{src:Z.a,alt:"dots"}))),r.a.createElement($,{isOpened:p,toggleDropdownMenu:a,handleRemoveBoard:n,handleRemoveContentBoard:i})),r.a.createElement(x,null,r.a.createElement("div",{className:"modal-wrapper"},u&&r.a.createElement(ee,{dialogOpen:m,turnOffConfirmModal:t,handleAction:d,modalQuestion:"Are you sure to delete this board?"}),s&&r.a.createElement(ee,{dialogOpen:m,turnOffConfirmModal:t,handleAction:c,modalQuestion:"Are you sure to delete all cards?"}))))}}]),t}(r.a.Component),ae=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(D.a)(t).call(this,e))).handleEditTitle=function(){a.setState({titleEditable:!0})},a.handleChangeTitle=function(e){a.setState({newTitleValue:e.target.value})},a.handleCloseEditingTitle=function(){a.setState({titleEditable:!1})},a.handleSubmitTitle=function(){a.props.handleEditBoardTitle(a.state.newTitleValue),a.handleCloseEditingTitle()},a.state={titleEditable:!1,newTitleValue:""},a}return Object(_.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.handleRemoveBoard,n=e.handleRemoveAllCards,i=this.state,o=i.titleEditable,d=i.newTitleValue;return r.a.createElement(R,{handleClickOutside:this.handleCloseEditingTitle},r.a.createElement("div",{className:"board__header"},r.a.createElement("div",{className:"board__title",onClick:this.handleEditTitle},o?r.a.createElement("form",{onSubmit:this.handleSubmitTitle},r.a.createElement("input",{placeholder:t,onChange:this.handleChangeTitle,value:d})):r.a.createElement("span",null,t)),r.a.createElement("div",null,r.a.createElement(te,{handleRemoveBoard:a,handleRemoveAllCards:n}))))}}]),t}(r.a.Component),ne=a(62),re=a.n(ne),ie=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(D.a)(t).call(this,e))).handleInput=function(){a.setState({inputEnabled:!0})},a.handleCloseEditingCard=function(){a.setState({inputEnabled:!1})},a.handleSubmit=function(e){e.preventDefault();var t=re.a.generate();a.state.inputValue&&(a.props.handleAddCard(t,a.state.inputValue),a.setState({inputValue:""}))},a.handleChange=function(e){a.setState({inputValue:e.target.value})},a.state={inputEnabled:!1,inputValue:""},a}return Object(_.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.state,t=e.inputEnabled,a=e.inputValue;return r.a.createElement(R,{handleClickOutside:this.handleCloseEditingCard},r.a.createElement("form",{className:"newcard__input",onClick:this.handleInput,onSubmit:this.handleSubmit},t?r.a.createElement("input",{placeholder:"Type your text",onChange:this.handleChange,value:a}):"+  Click to add new card"))}}]),t}(r.a.Component),oe=function(e){var t=e.handleAddCard,a=e.boardId;return r.a.createElement("div",{className:"board__newcard"},r.a.createElement(ie,{boardId:a,handleAddCard:t}))},de=Object(d.b)(function(e,t){return{cards:e.board[t.boardId].cards,boardTitle:e.board[t.boardId].title}},function(e){return{addNewCard:function(t,a,n){e(function(e,t,a){return{type:"ADD_CARD",boardId:e,cardId:t,content:a}}(t,a,n))},deleteCard:function(t,a){e(w(t,a))},editBoardTitle:function(t,a){e(function(e,t){return{type:"EDIT_BOARD_TITLE",boardId:e,newTitle:t}}(t,a))},removeBoard:function(t,a){e(function(e,t){return{type:"REMOVE_BOARD",boardId:e,deletedBoardId:e,cards:t}}(t,a))},removeAllCards:function(t,a){e(function(e,t){return{type:"REMOVE_ALL_CARDS",boardId:e,cards:t,deletedCards:t}}(t,a))}}})(function(e){var t=e.addNewCard,a=e.boardId,n=e.cards,i=e.boardTitle,o=e.editBoardTitle,d=e.removeBoard,c=e.removeAllCards,l=e.index,u=function(e,n){t(a,e,n)},s=function(){c(a,n)},m=function(e){o(a,e)},p=function(){d(a,n)};return r.a.createElement(j.b,{draggableId:a,index:l},function(e){return r.a.createElement("div",{className:"board-wrapper"},r.a.createElement("div",Object.assign({className:"board",ref:e.innerRef},e.dragHandleProps,e.draggableProps),r.a.createElement(ae,{title:i,boardId:a,handleEditBoardTitle:m,handleRemoveBoard:p,handleRemoveAllCards:s}),r.a.createElement(oe,{handleAddCard:u,boardId:a}),r.a.createElement(j.c,{droppableId:a,type:"card",direction:"vertical"},function(e){return r.a.createElement(z,Object.assign({},e.droppableProps,{cards:n,boardId:a,innerRef:e.innerRef}),e.placeholder)})))})}),ce=function(e){var t=e.addNewBoard;return r.a.createElement("div",{className:"newboard-button"},r.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault();var a=re.a.generate();t(a)}},"+"))},le=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(D.a)(t).call(this,e))).onDragEnd=function(e){var t=e.source,n=e.destination,r=e.type,i=a.props,o=i.moveBoard,d=i.moveCard;n&&("COLUMN"!==r?t.index===n.index&&t.droppableId===n.droppableId||d(t.index,n.index,t.droppableId,n.droppableId):t.index!==n.index&&o(t.index,n.index))},a.state={},a}return Object(_.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.addNewBoard,a=e.boards;return r.a.createElement("div",{className:"app"},r.a.createElement(I,null),r.a.createElement(j.a,{onDragEnd:this.onDragEnd},r.a.createElement(j.c,{droppableId:"all-boards",type:"COLUMN",direction:"horizontal"},function(e){return r.a.createElement("div",{className:"content",ref:e.innerRef},a.map(function(t,a){return r.a.createElement(de,Object.assign({},e.droppableProps,{boardId:t,key:t,index:a}))}),r.a.createElement("div",{className:"newboard-btn"},r.a.createElement(ce,{addNewBoard:t})))})))}}]),t}(n.Component),ue=Object(d.b)(function(e){return{boards:e.projects.project}},function(e){return{addNewBoard:function(t){return e(function(e){return{type:"ADD_BOARD",boardId:e}}(t))},moveBoard:function(t,a){return e(function(e,t){return{type:"MOVE_BOARD",oldBoardIndex:e,newBoardIndex:t}}(t,a))},moveCard:function(t,a,n,r){return e(function(e,t,a,n){return{type:"MOVE_CARD",oldCardIndex:e,newCardIndex:t,sourceListId:a,destinationListId:n}}(t,a,n,r))}}})(le),se=(a(179),Object(c.e)(O,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));o.a.render(r.a.createElement(d.a,{store:se},r.a.createElement(ue,null)),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.f47c0395.chunk.js.map