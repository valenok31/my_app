(this["webpackJsonptraining-project"]=this["webpackJsonptraining-project"]||[]).push([[0],{10:function(A,e,t){A.exports={item:"TopMenu_item__mckhb",nLink:"TopMenu_nLink__3cw9q"}},15:function(A,e,t){A.exports={item:"SecondarySpace_item__23BPV",calculator_body:"SecondarySpace_calculator_body__2Pcip",calculator_screen1:"SecondarySpace_calculator_screen1__2Cpo4",calculator_screen2:"SecondarySpace_calculator_screen2__Dur2U",numbers_button:"SecondarySpace_numbers_button__3tjSP",iconButton:"SecondarySpace_iconButton__D3e79",buttonNull:"SecondarySpace_buttonNull__2Sxk8"}},25:function(A,e,t){A.exports={item:"FourthSpace_item__2ed2g",zebra_01:"FourthSpace_zebra_01__1ogyf",zebra_02:"FourthSpace_zebra_02__1J12m",itemImg:"FourthSpace_itemImg__3_KdB"}},26:function(A,e,t){A.exports={item:"Loader_item__3afHU",loading_img:"Loader_loading_img__2YCPX"}},41:function(A,e,t){},67:function(A,e,t){"use strict";t.r(e);var c=t(0),n=t.n(c),r=t(21),a=t.n(r),i=(t(41),t(10)),o=t.n(i),s=t(8),u=t(1),l=function(){return Object(u.jsxs)("div",{className:o.a.item,children:[Object(u.jsx)(s.b,{to:"/main",className:o.a.nLink,children:"main"}),Object(u.jsx)(s.b,{to:"/secondary",className:o.a.nLink,children:"secondary"}),Object(u.jsx)(s.b,{to:"/third",className:o.a.nLink,children:"third"}),Object(u.jsx)(s.b,{to:"/fourth",className:o.a.nLink,children:"fourth"}),Object(u.jsx)(s.b,{to:"/fifth",className:o.a.nLink,children:"fifth"}),Object(u.jsx)(s.b,{to:"/sixth",className:o.a.nLink,children:"sixth"}),Object(u.jsx)(s.b,{to:"/seventh",className:o.a.nLink,children:"seventh"})]})},j=t(3),b=t(4),d=t(2),f="PLUS",h="MINUS",O="OVER_MOUS",p={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!1,collorBox:"1"},g=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:return Object(d.a)(Object(d.a)({},A),{},{currentPage:A.currentPage+1,isFetching:A.currentPage%2!==0});case h:return Object(d.a)(Object(d.a)({},A),{},{currentPage:A.currentPage-1,isFetching:A.currentPage%2!==0});case O:return Object(d.a)(Object(d.a)({},A),{},{collorBox:e.boxChek,isFetching:A.currentPage%2!==0});default:return A}},m=t(9),x=t.n(m),v=function(A){var e=function(e){var t=e.target.id;A.overmous(t)};return Object(u.jsx)("div",{className:x.a.item,children:Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{alt:"img",className:x.a.itemImg,src:"http://stattur.ru/assets/images/"+A.collorBox+".jpg"}),Object(u.jsx)("div",{className:x.a.zebra_02,onMouseOver:e,id:"1",children:"1"}),Object(u.jsx)("div",{className:x.a.zebra_01,onMouseOver:e,id:"2",children:"2"}),Object(u.jsx)("div",{className:x.a.zebra_02,onMouseOver:e,id:"3",children:"3"}),Object(u.jsx)("div",{className:x.a.zebra_01,onMouseOver:e,id:"4",children:"4"}),Object(u.jsx)("div",{className:x.a.zebra_02,onMouseOver:e,id:"5",children:"5"}),Object(u.jsx)("div",{className:x.a.zebra_01,onMouseOver:e,id:"6",children:"6"}),Object(u.jsx)("div",{className:x.a.zebra_02,onMouseOver:e,id:"7",children:"7"}),Object(u.jsx)("div",{className:x.a.zebra_01,onMouseOver:e,id:"8",children:"8"}),Object(u.jsx)("div",{className:A.collorBox,children:A.collorBox})]})})},C=Object(b.b)((function(A){return{users:A.mainSpace_reducer.users,pageSize:A.mainSpace_reducer.pageSize,totalUsersCount:A.mainSpace_reducer.totalUsersCount,currentPage:A.mainSpace_reducer.currentPage,isFetching:A.mainSpace_reducer.isFetching,collorBox:A.mainSpace_reducer.collorBox}}),{plus:function(){return{type:f}},minus:function(){return{type:h}},overmous:function(A){return{type:O,boxChek:A}}})(v),S=t(11),E=t(12),B=t(14),_=t(13),k=t(15),y=t.n(k),I=function(A){Object(B.a)(t,A);var e=Object(_.a)(t);function t(){return Object(S.a)(this,t),e.apply(this,arguments)}return Object(E.a)(t,[{key:"componentDidMount",value:function(){this.nameInput.focus()}},{key:"render",value:function(){var A=this,e=function(e){var t=e.target.name;A.props.clickNumbersButtonId(t),A.nameInput.focus()},t=function(e){var t=e.target.name;A.props.clickResult(t),A.nameInput.focus()},c=+this.props.value_a.toFixed(15);function n(A){return"number"===typeof A&&!isNaN(A)}c=n(c)?c:null,c=isFinite(c)?c>1e100?"googol":c+this.props.matchControl:"error";var r=["CE","C","Backspace","/",7,8,9,"*",4,5,6,"-",1,2,3,"+","+/-",0,".","="].map((function(A,c){return Object(u.jsx)("button",{className:2===c?y.a.buttonNull:y.a.numbers_button,value:A,name:A,onClick:n(A)||"."===A?e:t,children:2===c?Object(u.jsx)("img",{className:y.a.iconButton,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAA+7SURBVHic7d1LqK1nYcbx55xjTNqaWHsxJhqD0UMs0giVUgtVTGeOPQY1OHXkuINOioqhRZpeSMG26EBMoiZSEFoKKlYciIKXUqOtIclA01TFUlqIuZ2zO1hn57bP2Ze1vu+9/n6wIRDIer+9d/bzX9++rAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6Myp2geAY7oyyTuS/F6SV158AzjM40keTfJwkn9M8l91j9MWAUDrXp7kj5J8MMk1lc8C9OtCki8m+eMk3658liacqX0AOMTvJ/lakndmcwcAYFunkrwhyQeSXJHkX5Ls1TxQbQKAVp1L8oUkv1r7IMBQTiV5e5KzSf6h8lmqEgC06N1J7k3y0toHAYb129ncAfhq7YPU4mcAaM25JPdkc4sOYE3nk7w5yQO1D1KDOwC0ZP+Zv/EHSjidzW8U3Vf7IDW4A0ArPPMHangymwj439oHKe107QNAPPMH6rkyyR/WPkQNAoDaziW5O8lLah8EmNZNtQ9QgwCgJs/8gRa8qvYBahAA1OKZP9CKKb8OCQBq8AN/AJUJAEoz/gANEACUZPwBGiEAKMX4AzREAFCC8QdojABgbcYfoEECgDUZf4BGCQDWYvwBGjblHz9gde/OZvxLfn79Z5InCj4eUM+N8Wq20JxzSZ5Kslfw7bMRszCTn2XZryF3lj1+G3wLgCXVuO3/uSS3J3mm4GMCdE8AsBTjD9ARAcASjD9AZwQAuzL+AB0SAOzC+AN0SgCwLeMP0DEBwDaMP0DnBAAnZfwBBiAAOAnjDzAIAcBxGX+AgQgAjsP4AwxGAHAU4w8wIAHAYYw/wKAEAJdj/AEGJgC4FOMPMDgBwIsZf4AJCACez/gDTEIAsM/4A0xEAJAYf4DpCACMP8CEBMDcjD/ApATAvIw/wMQEwJyMP8DkBMB8jD8AAmAyxh+AJAJgJsYfgGcJgDkYfwBeQACMz/gDcIAAGJvxB+CSBMC4jD8AlyUAxmT8ATiUABiP8QfgSAJgLMYfgGN5Se0DsJhzSe5N2Y+p8QfolDsAYzD+AJyIAOif8QfgxARA34w/AFsRAP0y/gBsTQD0yfgDsBO/BdAf488Sfj3Jqy7+82NJ/rviWXr2yotv57N5P/5P3eMAozqX5OkkewXfPhuhOIqzSf4qyUM5+HF+6OK/O1vtdP24JcnHk/woB9+PP0jyZ0luqHa6Ofwsy36du7Ps8eFkjD/b+qUkf5Pjff48leSuJFdVOWnbrknyqWye7R/1fvxFkjvi/5+1CACmYfzZ1nVJvpmTf/y/meT6Cudt1U1JHsjJ349fTvKKCucdnQBgCsafbV2V5BvZ/vPgh0leXfzU7Tmb5MfZ/v34pfj/aWkCgOEZf3bxt9n982H2CNh1/PffPlL64IMTAAzN+LOLm7Pc58+sEbDU+O8leTzJa8oef2gCgGEZf3b18Sz7+TFbBCw5/vtvHy56BWMTAAzJ+LOrU1l+vGaKgDXGfy/Jd0pexOAEAMMx/izh1Vnv82X0CFhr/PeSXEhyZblLGZoAYCjGn6X8btb9vBk1AtYc//231xa7mrEJgAV4LYA2+PO+9ORskq9krAgodU2+5gLP8syfpd2QMp9Ho9wJKPHMfy+bbwH4C4vLcAeA7hl/1nA6mxemEQFHKzX+e0n+rdA1zUAA0DXjz5o+mXKfV71GQMnx30vyp2UuawoCgG4Zf9Z2S473ojWzRkDp8X8ym9cTYBkCgC4Zf0r5dMp+nvUSAaXH38AsTwDQHeNPSVdn831nEfCcGuP/9fj9/6UJALpi/Knh9Sk/eK1GQI3x/2E2L8nMsgQA3TD+1FRr+FqKAO+DsQgAumD8acHMAzjztY9KANA8409LZhzCGa95BgKAphl/WjTTIM50rbMRADTL+NOyGYZxhmucmQCgScafHow8kCNfGxsCgOYYf3oy4lCOeE0cJABoivGnRyMN5kjXwuEEAM0w/vRshOEc4Ro4PgFAE4w/I+h5QHs+O9sRAFRn/BlJj0Pa45nZnQCgKuPPiHoa1J7OyrIEANUYf0bWw7D2cEbWIwCowvgzg5YHtuWzUYYAoDjjz0xaHNoWz0R5AoCijD8zamlwWzoLdQkAijH+zKyF4W3hDLRDAFCE8Ye6A2z8eTEBwOqMPzynxhA/kuSxwo9p/NsnAFiV8YeDakSA8efFBACrMf5weaNGgPHvhwBgFcYfjjZaBBj/vggAFmf84fhGiQDj3x8BwKKMP5xc7xFg/PskAFiM8Yft9RoBxr9fAoBF1Bj/u5OcKXFxUEhvEWD8+yYA2Nlbkjyesl94PPNnVL1EgPHvnwBgJy9L8mjKfuHxzJ/RtR4Bxn8MAoCd/EnKfuHxzJ9ZtBoBxn8cAoCtnUny05T7wuOZP7NpLQKM/1gEAFt7W8p94fHMn1m1EgHGfzwCYAGnax+gkt8p9DifS3J7kmcKPR605MEkt2bzszYznwGaNGsAXFfgMYw/PDfAP6nw2I/E+MNlzRoAe7UPAAA1zRoAjxV4jNuy+eE/3/9nZmeTfCXJtRUe+3UXH9v3/+ESZg2Abxd6HBHAzPbHv+YAt3AGoCF+DRDW1cpvAPhNgDH5LYAFzHoH4HySuwo+3vuS3BN3AphDi8+6WzwTUIk/BQzLa+2ZvzsBY3IHgJ15MSBYTuvjLwLGIQBYhJcDht31Mv4iYAwCgMWcS/JUyn4BcieAUfQ2/iKgfwKARYkAOLlex18E9E0AsDgRAMfX+/iLgH4JAFYhAuBoo4y/COiTAGA1IgAub7TxFwH9EQCsSgTAQaOOvwjoiwBgdSIAnlNj/B/J5sW7RADPJwAoQgRAnfHfH+Kaj02bBADFiABm1sIAt3AG2iEAKEoEMKOWhrels1CXAKA4EcBMWhzcFs9EeQKAKkQAM2h5aFs+G2UIAKoRAYysh4Ht4YysRwBQlQhgRD0Na09nZVkCgOpEACPpcVB7PDO7EwA0QQQwgp6HtOezsx0BQDNEAD0bYUBHuAaOTwDQFBFAj0YazpGuhcMJAJojAujJiIM54jVxkACgSSKAHow8lCNfGxsCgGaJAFo2w0DOcI0zEwA0TQTQopmGcaZrnY0AoHkigJbMOIgzXvMMBABdEAG0YOYhnPnaRyUA6IYIoCYD6H0wGgFAV0QANbwhhm9frQi4rsTFTUYA0B0RQEm/keTBGP/nqxEB30ryKyUubiICgC6JAEr5TIz/pdSIgL8scmXzEAB0SwSwtrfG+B+mdAQ8k823Y1iGAKBrIoA13R3jf5TSEfDnZS5rCgKA7okA1nAmyc9j/I+jZAT8R6FrmoEAYAgigKW9Psb/JEpGgB8GXIYAYBgigCW9Lcb/pEpFgJ8DWIYAWMDp2gcgSXJ/kvclebrgY96WzfeJRcB4zq/8338wya1JHl35cUoqdU17K//3gU65E8ASboxn/tta807A+fgWwFLcAWBIIoBdnUry0xj/ba0VAQ+UvIjBCQCGJQLY1d/F+O9ijQj4aNErGJsAYGgigF28KZtbzsZ/e0tGwBNJbih7/KEJAIYnAtjFEncBZh3/fUtFwEdKH3xwAoApiAC29bIk/xrjv6tdI+CrSa4ofuqxCQCmIQLY1rVJvpuTf/y/keT6Cudt1U1Jvpftxv+aCucdnQBgKiKAbf1ykruy+TsTR33Mn8zmleuuqnLStl2d5BPZvLDPUe/HJ5LcEc/81yIAmI4IYBc3J/mLJA/l4Mf535N8LJtnuhzuTUn+OsnDeeH78EKSH2Qz/DdWO90cBABTEgEs4deS/FY2UeCP02zv6mzej29M8vLKZ5mJAGBaIgCYmQBYgNcC6JPXDgBgJwKgXyIAgK0JgL6JAAC2IgD6JwIAODEBMAYRAMCJCIBxiAAAjk0AjOX+JO+NCADgCAJgPJ+PCADgCAJgTCIAgEMJgHGJAAAuSwCMTQQAcEkCYHwiAIADBMAcRAAALyAA5iECAHiWAJiLCAAgiQCYkQgAQABMSgQATE4AzEsEAExMAMxNBABMSgAgAgAmJABIRADAdAQA+0QAwEQEAM8nAgAmIQB4MREAMAEBwKWIAIDBCQAuRwQADEwAcBgRADAoAcBRRADAgAQAxyECAAYjADguEQAwEAHASYgAgEEIAE5KBAAMQACwDREA0DkBwLZEAEDHBAC7EAEAnRIA7EoEAHRIALAEEQDQGQHAUkQAQEcEAEsSAQCd8EWTpX0+ye1J7km5z6/bkvxBkicKPR5Q1ytqH2AEAoA13JfkQpJ7k1xR6DGvL/Q4AEPwLQDWUuPbAQAckwBgTSIAoFECgLWJAIAGCQBKEAEAjREAlCICABoiAChJBAA0QgBQmggAaIAAoAYRAFCZAKCW/b8Y+EztgwDTm/LrkACgpvuSvCfuBAB1PVb7ADUIAGpzJwCo7ZHaB6jhVO0DwEXvStnXDgBIkieT/GaS/6t9kNLcAaAV7gQANXwhE45/4g4A7XEnACjlfJJbkny/9kFqcAeA1rgTAJTyoUw6/ok7ALTrXJJPJ7my9kGAId2d5P1J9mofpBZ3AGjV/UluzaS/ngOs5kKSD2fy8U+SM7UPAIf4cZK/z+b7dG9OclXd4wAdu5Dkn5PcluQzlc/SBN8CoBcvTfL2JG9Ncu3FN4DDPJ7kR0keTvJPSX5S9zgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADv5fw8raiWNQyXkAAAAAElFTkSuQmCC",name:A}):A},c)}));return Object(u.jsx)("div",{className:y.a.item,children:Object(u.jsxs)("div",{className:y.a.calculator_body,children:[Object(u.jsx)("div",{className:y.a.calculator_screen2,children:c}),Object(u.jsx)("input",{type:"text",ref:function(e){A.nameInput=e},className:y.a.calculator_screen1,onChange:function(e){var t=e.target.value;isNaN(t)||(A.props.updateNewPostText(t),A.nameInput.focus())},onKeyDown:function(e){13==e.keyCode&&A.props.clickResult("="),106==e.keyCode&&A.props.clickResult("*"),107==e.keyCode&&A.props.clickResult("+"),109==e.keyCode&&A.props.clickResult("-"),111==e.keyCode&&A.props.clickResult("/"),46==e.keyCode&&A.props.clickResult("C"),32==e.keyCode&&A.props.clickResult("C")},value:this.props.text}),r]})})}}]),t}(n.a.Component),M=I,w="UP_DATE_NEW_POST_TEXT",D="CLICK_RESULT",P="CLICK_NAMBERS",N={value_a:0,value_b:"",matchControl:"",text:""},J=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case w:return"="===A.matchControl?Object(d.a)(Object(d.a)({},A),{},{text:"",value_a:0,matchControl:""}):Object(d.a)(Object(d.a)({},A),{},{text:e.text});case P:return"="===A.matchControl?Object(d.a)(Object(d.a)({},A),{},{text:"",value_a:0,matchControl:""}):Object(d.a)(Object(d.a)({},A),{},{text:A.text+e.buttonValueN});case D:if("C"===e.buttonValue)return Object(d.a)({},N);if("CE"===e.buttonValue)return Object(d.a)(Object(d.a)({},A),{},{text:""});if("Backspace"===e.buttonValue)return Object(d.a)(Object(d.a)({},A),{},{text:A.text.slice(0,-1)});if("+/-"===e.buttonValue)return Object(d.a)(Object(d.a)({},A),{},{text:-Number(A.text)});switch(A.matchControl){case"+":return Object(d.a)(Object(d.a)({},A),{},{matchControl:e.buttonValue,text:"",value_a:Number(A.value_a+Number(A.text))});case"-":return Object(d.a)(Object(d.a)({},A),{},{matchControl:e.buttonValue,text:"",value_a:Number(A.value_a-Number(A.text))});case"*":return Object(d.a)(Object(d.a)({},A),{},{matchControl:e.buttonValue,text:"",value_a:Number(A.value_a)*Number(""!==A.text?A.text:1)});case"/":return Object(d.a)(Object(d.a)({},A),{},{matchControl:e.buttonValue,text:"",value_a:Number(A.value_a)/Number(""!==A.text?A.text:1)});case"C":return Object(d.a)({},N);case"=":return Object(d.a)(Object(d.a)({},A),{},{matchControl:e.buttonValue});default:return Object(d.a)(Object(d.a)({},A),{},{matchControl:e.buttonValue,text:"",value_a:Number(A.text)})}default:return A}},Q=Object(b.b)((function(A){return{text:A.secondarySpace_reducer.text,value_a:A.secondarySpace_reducer.value_a,matchControl:A.secondarySpace_reducer.matchControl}}),{updateNewPostText:function(A){return{type:w,text:A}},clickResult:function(A){return{type:D,buttonValue:A}},clickNumbersButtonId:function(A){return{type:P,buttonValueN:A}}})(M),z="SET_USER_PROFILE",T={profile:""},U=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;return e.type===z?Object(d.a)(Object(d.a)({},A),{},{profile:e.profile}):A},F=t(17),R=t.n(F),L=function(A){Object(B.a)(t,A);var e=Object(_.a)(t);function t(){return Object(S.a)(this,t),e.apply(this,arguments)}return Object(E.a)(t,[{key:"componentDidMount",value:function(){var A=this;R.a.get("https://social-network.samuraijs.com/api/1.0/profile/21047").then((function(e){A.props.setUsersProfile(e.data.fullName)})).catch((function(e){A.props.setUsersProfile("ERROR!!")}))}},{key:"render",value:function(){var A=this.props.profile;return Object(u.jsx)("div",{children:A})}}]),t}(n.a.Component),Y=Object(b.b)((function(A){return{profile:A.thirdSpace_reducer.profile}}),{setUsersProfile:function(A){return{type:z,profile:A}}})(L),H="SET_USER_PROFILE",K="SET_USER_ID",G={profile:"",userId:"5"},Z=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case H:return Object(d.a)(Object(d.a)({},A),{},{profile:e.profile});case K:return Object(d.a)(Object(d.a)({},A),{},{userId:e.userId});default:return A}},X=t(25),V=t.n(X),W=t(26),q=t.n(W),$=t.p+"static/media/Loading.0f2c83ef.gif",AA=function(){return Object(u.jsx)("div",{className:q.a.item,children:Object(u.jsx)("img",{src:$,alt:"Loading",className:q.a.loading_img})})},eA=function(A){for(var e=function(e){A.togglesIsFetching(!0);var t=e.target.name;A.setUserId(t),R.a.get("https://jsonplaceholder.typicode.com/photos/"+t).then((function(e){A.togglesIsFetching(!1),A.setUsersProfile(e.data.title)})).catch((function(e){A.togglesIsFetching(!1),A.setUsersProfile("ERROR!!")}))},t=[],c=1;c<21;c++)t.push(c);var n=t.map((function(A){return Object(u.jsx)("button",{onClick:e,name:A,children:A})}));return Object(u.jsxs)("div",{children:[A.isFetching?Object(u.jsx)(AA,{}):null,Object(u.jsxs)("div",{className:V.a.item,children:[Object(u.jsx)("div",{children:A.profile}),Object(u.jsx)("div",{children:A.userId})]}),Object(u.jsx)("div",{className:V.a.item,children:n})]})},tA="TOGGLES_IS_FETCHING",cA={isFetching:!1},nA=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:cA,e=arguments.length>1?arguments[1]:void 0;return e.type===tA?Object(d.a)(Object(d.a)({},A),{},{isFetching:e.isFetching}):A},rA=function(A){Object(B.a)(t,A);var e=Object(_.a)(t);function t(){return Object(S.a)(this,t),e.apply(this,arguments)}return Object(E.a)(t,[{key:"componentDidMount",value:function(){var A=this;R.a.get("https://jsonplaceholder.typicode.com/photos/"+this.props.userId).then((function(e){A.props.setUsersProfile(e.data.thumbnailUrl)})).catch((function(e){A.props.setUsersProfile(e)}))}},{key:"render",value:function(){return Object(u.jsx)(eA,{isFetching:this.props.isFetching,togglesIsFetching:this.props.togglesIsFetching,setUsersProfile:this.props.setUsersProfile,profile:this.props.profile,setUserId:this.props.setUserId,userId:this.props.userId})}}]),t}(n.a.Component),aA=Object(b.b)((function(A){return{profile:A.fourthSpace_reducer.profile,userId:A.fourthSpace_reducer.userId,isFetching:A.generalSetting_reducer.isFetching}}),{setUsersProfile:function(A){return{type:H,profile:A}},setUserId:function(A){return{type:K,userId:A}},togglesIsFetching:function(A){return{type:tA,isFetching:A}}})(rA),iA=t(5),oA="laps",sA=function(A){var e=Object(c.useState)(0),t=Object(iA.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),i=Object(iA.a)(a,2),o=i[0],s=i[1],l=Object(c.useState)("00:00:00.00"),j=Object(iA.a)(l,2),b=j[0],d=j[1];Object(c.useEffect)((function(){var A=null;return o?A=setInterval((function(){r((function(A){return A+10}))}),10):clearInterval(A),function(){return clearInterval(A)}}),[o]);var f=("0"+n/10%1e3).slice(-2),h=("0"+Math.floor(n/1e3%60)).slice(-2),O=("0"+Math.floor(n/6e4%60)).slice(-2),p=("0"+Math.floor(n/6e4/60%60)).slice(-2)+":"+O+":"+h+"."+f;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Stopwatch"}),Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:p})}),Object(u.jsxs)("div",{children:[o?Object(u.jsx)("button",{onClick:function(){s(!1),oA="reset laps"},children:"Stop"}):Object(u.jsx)("button",{onClick:function(){return s(!0)},children:"Start"}),Object(u.jsx)("button",{onClick:function(){r(0),s(!1)},children:"Reset"}),Object(u.jsx)("button",{onClick:function(){return 0===n&&(d(p),oA="laps"),0===n||o||(d(p),oA="reset laps"),void(0!==n&&o&&(d(p),r(0),oA="laps"))},children:oA})]}),Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:b})})]})},uA="SET_TIME_SEE",lA=function(){return(new Date).getTime()},jA={startTimeSee:lA(),timeSee:lA()},bA=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jA,e=arguments.length>1?arguments[1]:void 0;return e.type===uA?Object(d.a)(Object(d.a)({},A),{},{timeSee:lA()}):A},dA=function(A){Object(B.a)(t,A);var e=Object(_.a)(t);function t(){return Object(S.a)(this,t),e.apply(this,arguments)}return Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.setTimeSee()}},{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)(sA,{})})}}]),t}(n.a.Component),fA=Object(b.b)((function(A){return{timeSee:A.fifthSpace_reducer.timeSee,startTimeSee:A.fifthSpace_reducer.startTimeSee}}),{setTimeSee:function(A){return{type:uA}}})(dA),hA=function(A){var e=Object(c.useState)(0),t=Object(iA.a)(e,2),n=t[0],r=t[1],a=function(){return 0===n||n<0?1:Math.pow(10,Math.floor(Math.log10(n)))};return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsxs)("span",{children:["Counter: ",n]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("span",{children:["Slog: ",a()]})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){r((function(A){return A+a()}))},children:"+"}),Object(u.jsx)("button",{onClick:function(){r((function(A){return A-a()}))},children:"-"}),Object(u.jsx)("button",{onClick:function(){r(0)},children:"reset"})]})]})},OA=Object(b.b)(null,{})((function(){return Object(u.jsx)("div",{children:Object(u.jsx)(hA,{})})})),pA=t(22),gA=function(A){var e=null,t=Object(c.useState)(0),n=Object(iA.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(!1),o=Object(iA.a)(i,2),s=o[0],l=o[1],j=Object(c.useState)([]),b=Object(iA.a)(j,2),d=b[0],f=b[1],h=d.map((function(A,e){return Object(u.jsxs)("p",{children:["Laps ",e+1,": ",A," ",Object(u.jsx)("button",{onClick:function(){return function(A){f([].concat(Object(pA.a)(d.slice(0,A)),Object(pA.a)(d.slice(A+1))))}(e)},children:"DELET"})]},e)}));Object(c.useEffect)((function(){return s&&(e=setInterval((function(){a((function(A){return A+10}))}),10)),function(){return clearInterval(e)}}),[s]);var O=("0"+r/10%1e3).slice(-2),p=("0"+Math.floor(r/1e3%60)).slice(-2),g=("0"+Math.floor(r/6e4%60)).slice(-2),m=(("0"+Math.floor(r/6e4/60%60)).slice(-2),g+":"+p+"."+O);return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:m})}),Object(u.jsxs)("div",{children:[s?Object(u.jsx)("button",{onClick:function(){l(!1)},children:"Stop"}):Object(u.jsx)("button",{onClick:function(){l(!0)},children:"Start"}),Object(u.jsx)("button",{onClick:function(){l(!1),a(0),f([])},children:"Reset"}),Object(u.jsx)("button",{onClick:function(){l(s),f([].concat(Object(pA.a)(d),[m]))},children:"Laps"})]}),Object(u.jsx)("div",{children:h})]})},mA=Object(b.b)(null,{})((function(){return Object(u.jsx)(gA,{})})),xA=function(A){return Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{}),Object(u.jsx)("div",{children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/main",element:Object(u.jsx)(C,{})}),Object(u.jsx)(j.a,{path:"/secondary",element:Object(u.jsx)(Q,{})}),Object(u.jsx)(j.a,{path:"/third",element:Object(u.jsx)(Y,{})}),Object(u.jsx)(j.a,{path:"/fourth",element:Object(u.jsx)(aA,{})}),Object(u.jsx)(j.a,{path:"/fifth",element:Object(u.jsx)(fA,{})}),Object(u.jsx)(j.a,{path:"/sixth",element:Object(u.jsx)(OA,{})}),Object(u.jsx)(j.a,{path:"/seventh",element:Object(u.jsx)(mA,{})})]})})]})},vA=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,68)).then((function(e){var t=e.getCLS,c=e.getFID,n=e.getFCP,r=e.getLCP,a=e.getTTFB;t(A),c(A),n(A),r(A),a(A)}))},CA=t(27),SA=Object(CA.a)({mainSpace_reducer:g,secondarySpace_reducer:J,thirdSpace_reducer:U,fourthSpace_reducer:Z,generalSetting_reducer:nA,fifthSpace_reducer:bA}),EA=Object(CA.b)(SA);a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(s.a,{children:Object(u.jsx)(b.a,{store:EA,children:Object(u.jsx)(xA,{})})})}),document.getElementById("root")),vA()},9:function(A,e,t){A.exports={item:"MainSpace_item__vsPw8",zebra_01:"MainSpace_zebra_01__tTDLv",zebra_02:"MainSpace_zebra_02__EOU-u",itemImg:"MainSpace_itemImg__33fRQ"}}},[[67,1,2]]]);
//# sourceMappingURL=main.3e568ad0.chunk.js.map