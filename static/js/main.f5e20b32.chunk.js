(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},47:function(e,t,a){e.exports=a(95)},52:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(43),i=a.n(o),l=(a(52),a(1)),s=a(2),c=a(4),m=a(3),u=a(5),p=a(15),h=a(23),d=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,width:window.innerWidth},a.updateWidth=function(){var e={width:window.innerWidth};a.state.open&&e.width>991&&(e.open=!1),a.setState(e)},a.toggleNav=function(){a.setState({open:!a.state.open})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWidth)}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar sticky-top navbar-expand-lg navbar-light bg-light mb-2"},r.a.createElement(p.b,{className:"navbar-brand",to:"/"},"Real Game of Life"),r.a.createElement("button",{onClick:this.toggleNav,className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"".concat(this.state.open?"":"collapse ","navbar-collapse"),id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{onClick:this.toggleNav,className:"/"===window.location.pathname?"nav-link active":"nav-link",to:"/"},"Dashboard")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{onClick:this.toggleNav,className:(window.location.pathname,"nav-link active"),to:"/create"},"Create")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{onClick:this.toggleNav,className:"nav-link",to:"/edit"},"Logout")))))}}]),t}(n.Component),E=a(19),f=a.n(E);function b(e){return f.a.post("https://real-life-api.herokuapp.com/api/games",e)}function g(e,t){f.a.put("https://real-life-api.herokuapp.com/api/games/".concat(t),e)}var v=function e(t,a,n,r,o,i){Object(l.a)(this,e),this.name=t,this.trait1=a,this.trait2=n,this.trait3=r,this.trait4=o,this.trait5=i},w=function e(t,a,n,r){Object(l.a)(this,e),this.Q=t,this.responses=a,this.trait1=n,this.trait2=r},y=function e(t,a){Object(l.a)(this,e),this.response=t,this.outcomes=a},x=function e(t,a,n,r){Object(l.a)(this,e),this.text=t,this.trait=a,this.amount=n,this.upDown=r},O=function e(t,a,n,r){Object(l.a)(this,e),this.name=t,this.traits=a,this.avatars=n,this.questions=r},N=new function e(t,a,n,r,o){Object(l.a)(this,e),this.trait1=t,this.trait2=a,this.trait3=n,this.trait4=r,this.trait5=o}("Red","White","Blue","Firmness","Bubble-ness"),C=[new v("Steve Rogers",20,20,20,20,20),new v("Tony Stark",10,10,10,10,10),new v("Hulk",18,17,16,15,14)],j=[new w("Did Captain America's first suit really do him no favors?",[new y("Definitely no favors done",[new x("Firmness",3,"down"),new x("Red",4,"up")]),new y("It was fine",[new x("Bubble-ness",4,"Up"),new x("White",3,"Down")]),new y("Typing all this blows",[new x("Firmness",5,"Down"),new x("Firmness",5,"down")])],"Firmness","Bubble-ness")],k=new O("Testing with America's Ass",N,C,j),T=new w("Why did Tony make Captain America's second suit so it did America's Ass Justice?",[new y("Because Tony is an appreciator of fine things",[new x("Firmness",3,"down"),new x("Red",4,"up")]),new y("He did it for his father",[new x("Bubble-ness",4,"Up"),new x("White",3,"Down")]),new y("Callipygian",[new x("Firmness",5,"Down"),new x("Firmness",5,"down")])],"Red","Blue"),D=new O(k.name,k.traits,k.avatars,[j[0],T]),A={name:"OBJECT FOR ABRAM",traits:{trait1:"Wealth",trait2:"Education",trait3:"Health",trait4:"Family",trait5:"Community"},avatars:[{name:"Steve Rogers",trait1:10,trait2:15,trait3:6,trait4:9,trait5:18},{name:"Tony Stark",trait1:2,trait2:7,trait3:19,trait4:10,trait5:11},{name:"Hulk",trait1:18,trait2:17,trait3:16,trait4:15,trait5:14},{name:"Natasha Romanova",trait1:5,trait2:18,trait3:15,trait4:10,trait5:13},{name:"Okoye",trait1:12,trait2:19,trait3:20,trait4:16,trait5:10}],questions:[{Q:"Coming up with questions is really hard, right?",responses:[{response:"SO HARD",outcomes:[{text:"Congrats! Your brain is getting bigger",trait:"Education",amount:3,upDown:"down"},{text:"Congrats! Your brain is getting bigger",trait:"Wealth",amount:4,upDown:"up"}]},{response:"Not really",outcomes:[{text:"Your brain is getting neither bigger nor smaller",trait:"Family",amount:4,upDown:"Up"},{text:"Your brain is getting neither bigger nor smaller",trait:"Community",amount:3,upDown:"Down"}]},{response:"Typing all this blows",outcomes:[{text:"Sad day! Your fingers have fallen off and your cat has eaten them.",trait:"Family",amount:5,upDown:"Down"},{text:"Sad day! Your fingers have fallen off and your cat has eaten them.",trait:"Wealth",amount:5,upDown:"down"}]}],trait1:"Health",trait2:"Education"},{Q:"Now we have two questions, are we having fun yet?",responses:[{response:"The most fun!",outcomes:[{text:"You've become and out of work actor temping at a catering company.",trait:"Wealth",amount:3,upDown:"down"},{text:"You've become and out of work actor temping at a catering company.",trait:"Health",amount:4,upDown:"up"}]},{response:"No fun",outcomes:[{text:"Wow kid, you really blew it.",trait:"Community",amount:4,upDown:"Up"},{text:"Wow kid, you really blew it.",trait:"Family",amount:3,upDown:"Down"}]},{response:"We're really going to have to think of FIVE RESPONSES!?",outcomes:[{text:"Hooray! Your endurance has increased!",trait:"Community",amount:5,upDown:"Down"},{text:"Hooray! Your endurance has increased!",trait:"Wealth",amount:5,upDown:"down"}]}],trait1:"Wealth",trait2:"Community"},{Q:"Is it okay if I only make three questions?",responses:[{response:"Yes",outcomes:[{text:"You become the laziest couch potato.",trait:"Wealth",amount:3,upDown:"down"},{text:"You become the laziest couch potato.",trait:"Health",amount:4,upDown:"up"}]},{response:"No",outcomes:[{text:"You wallow in your own self pity.",trait:"Community",amount:4,upDown:"Up"},{text:"You wallow in your own self pity.",trait:"Family",amount:3,upDown:"Down"}]},{response:"Well you're not making five responses so why not",outcomes:[{text:"Here's your award for being the most reasonable!",trait:"Community",amount:5,upDown:"Down"},{text:"Here's your award for being the most reasonable!",trait:"Wealth",amount:5,upDown:"down"}]}],trait1:"Wealth",trait2:"Community"},{Q:"Which question is this one?",responses:[{response:"One",outcomes:[{text:"You have disappointed both The Count and the Tootsie Pop Owl",trait:"Wealth",amount:3,upDown:"down"},{text:"You have disappointed both The Count and the Tootsie Pop Owl",trait:"Health",amount:4,upDown:"up"}]},{response:"Four",outcomes:[{text:"No one is disappointed! Revel in your ability to please both muppets and cartoons.",trait:"Community",amount:4,upDown:"Up"},{text:"No one is disappointed! Revel in your ability to please both muppets and cartoons.",trait:"Family",amount:3,upDown:"Down"}]},{response:"You stopped updating traits",outcomes:[{text:"You're a party pooper. No one likes you.",trait:"Community",amount:5,upDown:"Down"},{text:"You're a party pooper. No one likes you.",trait:"Wealth",amount:5,upDown:"down"}]}],trait1:"Wealth",trait2:"Community"},{Q:"What if we only made five questions?",responses:[{response:"UNACCEPTABLE",outcomes:[{text:"The earl of Lemongrab has eaten you.",trait:"Wealth",amount:3,upDown:"down"},{text:"The earl of Lemongrab has eaten you.",trait:"Health",amount:4,upDown:"up"}]},{response:"I hope you got that Adventure Time reference",outcomes:[{text:"I'm very disappointed in you.",trait:"Community",amount:4,upDown:"Up"},{text:"I'm very disappointed in you.",trait:"Family",amount:3,upDown:"Down"}]},{response:"Five is my favorite Umbrella Academy student",outcomes:[{text:"You run boy, run",trait:"Community",amount:5,upDown:"Down"},{text:"You run boy, run",trait:"Wealth",amount:5,upDown:"down"}]}],trait1:"Wealth",trait2:"Community"}]};function z(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function q(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function S(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(10);function W(e){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{className:"thisHeader"},e.text))}function I(e){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h5",{className:"thisSubHeader"},e.text))}function F(e){return r.a.createElement("div",null,r.a.createElement("h3",{className:"thisContentHeader"},e.text))}function G(e){return r.a.createElement(z,{fluid:!0},r.a.createElement(q,null,r.a.createElement(S,{size:"sm-1"}),r.a.createElement(S,{size:"sm-2"},r.a.createElement("p",{className:"text-center"},"Avatar 1")),r.a.createElement(S,{size:"sm-2"},r.a.createElement("p",{className:"text-center"},"Avatar 2")),r.a.createElement(S,{size:"sm-2"},r.a.createElement("p",{className:"text-center"},"Avatar 3")),r.a.createElement(S,{size:"sm-2"},r.a.createElement("p",{className:"text-center"},"Avatar 4")),r.a.createElement(S,{size:"sm-2"},r.a.createElement("p",{className:"text-center"},"Avatar 5")),r.a.createElement(S,{size:"sm-1"})))}var V=function(e){return e.to?r.a.createElement(p.b,{to:e.to},r.a.createElement("div",{className:"thisControls text-center"},r.a.createElement("i",{className:e.class}),r.a.createElement("p",null,e.text))):r.a.createElement("div",{className:"thisControls text-center"},r.a.createElement("i",{className:e.class,onClick:e.click}),r.a.createElement("p",null,e.text))},H=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(z,null,this.props.games.map(function(e){return r.a.createElement(q,null,r.a.createElement(S,{size:"sm-6"},r.a.createElement(F,{text:e.gameName})),r.a.createElement(S,{size:"sm-6"},r.a.createElement(V,{class:"fas fa-play",text:"Play",to:"/"})," ",r.a.createElement(V,{class:"fas fa-user",text:"Edit",to:"/edit/avatars/".concat(e.gameId)}),r.a.createElement(V,{class:"fas fa-poll-h",text:"Edit",to:"/edit/questions/".concat(e.gameId)}),r.a.createElement(V,{class:"fas fa-trash",text:"Drop",click:function(){var t;t=e.gameId,f.a.delete("https://real-life-api.herokuapp.com/api/games/".concat(t)).then(function(){window.location.pathname="/"})}})))}))}}]),t}(n.Component),R=a(20),L=a(22),Y=a(7),B=a.n(Y);var U=function(e){return r.a.createElement(z,null,r.a.createElement(B.a,null,r.a.createElement(B.a.Group,{controlId:"formBasicEmail",className:"thisForm"},r.a.createElement(B.a.Control,{className:e.className,type:"text",name:e.traitNumber,placeholder:e.text,value:e.traitName,onChange:e.onChange}))))};var M=function(e){var t="thisButton "+e.buttonType;return r.a.createElement("div",{className:"thisAdminButton"},r.a.createElement(p.b,{to:e.to},r.a.createElement("button",{className:t},e.text)))},_=["trait1","trait2","trait3","trait4","trait5"],P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(L.a)(a)),a.buildTraits=a.buildTraits.bind(Object(L.a)(a)),a.state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;console.log("HELLO FROM HANDLECHANGE",a,n),this.setState(Object(R.a)({},a,n))}},{key:"buildTraits",value:function(){var e=this,t=Object.keys(this.state).map(function(t){return e.state[t]}),a=new O("TO DO - Make Name For Game",t,[],[]);console.log("TEMPLATE OBJECT",a),b(A).then(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement(z,null,r.a.createElement(q,null,r.a.createElement(S,{size:"sm-12"},r.a.createElement(F,{text:"Instructions"}))),r.a.createElement(q,null,r.a.createElement(S,{size:"sm-12"},r.a.createElement("p",null,"INSTRUCTIONS GO HERE: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste rerum consequuntur maiores eaque iusto ea accusantium, est quisquam earum ut possimus quos iure eveniet fugiat dolores delectus ipsam aliquid libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est similique at consequatur soluta omnis aperiam voluptate quasi eveniet vero earum deserunt ad consectetur hic fugiat ullam nesciunt, nobis possimus eaque."))),r.a.createElement(q,null,r.a.createElement(S,{size:"sm-6"},_.map(function(t,a){return r.a.createElement(U,{onChange:e.handleChange,className:"thisCreateTraits",text:t,traitNumber:a})}))),r.a.createElement("button",{text:"Next",buttonType:"green",to:"/create/avatars",onClick:this.buildTraits}))}}]),t}(n.Component),Q=a(29),J=a(30);var $=function(e){return console.log(e.inputValue),r.a.createElement("div",{className:"card mt-10"},r.a.createElement("div",{className:"img container"},r.a.createElement("img",{src:"/images/avatar.PNG"})),r.a.createElement("div",{className:"card-body"},r.a.createElement(U,{onChange:e.handleChange,className:"thisCreateTraits",text:e.avatar,traitName:function(){e.onChange()},traitNumber:"Name",inputValue:e.inputValue})))};function K(e){return r.a.createElement(B.a,null,r.a.createElement(B.a.Group,{controlId:"exampleForm.ControlSelect1",className:"thisForm"},r.a.createElement(B.a.Control,{as:"select"},r.a.createElement("option",null,e.text," 1"),r.a.createElement("option",null,e.text," 2"),r.a.createElement("option",null,e.text," 3"),r.a.createElement("option",null,e.text," 4"),r.a.createElement("option",null,e.text," 5"))))}function X(e){return r.a.createElement(z,{fluid:!0},r.a.createElement(q,null,r.a.createElement(S,{size:"sm-1"},"Edit:"),r.a.createElement(S,{size:"sm-3"},r.a.createElement(B.a,null,r.a.createElement(B.a.Group,{controlId:"exampleForm.ControlSelect2",className:"thisForm"},r.a.createElement(B.a.Control,{as:"select"},r.a.createElement("option",null,e.qtext," 1"),r.a.createElement("option",null,e.qtext," 2"),r.a.createElement("option",null,e.qtext," 3"),r.a.createElement("option",null,e.qtext," 4"),r.a.createElement("option",null,e.qtext," 5"),r.a.createElement("option",null,e.qtext," 6"),r.a.createElement("option",null,e.qtext," 7"),r.a.createElement("option",null,e.qtext," 8"),r.a.createElement("option",null,e.qtext," 9"),r.a.createElement("option",null,e.qtext," 10"))))),r.a.createElement(S,{size:"sm-2"},"Weighted By:"),r.a.createElement(S,{size:"sm-2"},r.a.createElement(B.a,null,r.a.createElement(B.a.Group,{controlId:"exampleForm.ControlSelect2",className:"thisForm"},r.a.createElement(B.a.Control,{as:"select"},r.a.createElement("option",null,e.text," 1"),r.a.createElement("option",null,e.text," 2"),r.a.createElement("option",null,e.text," 3"),r.a.createElement("option",null,e.text," 4"),r.a.createElement("option",null,e.text," 5"))))),r.a.createElement(S,{size:"sm-2"},r.a.createElement(B.a,null,r.a.createElement(B.a.Group,{controlId:"exampleForm.ControlSelect2",className:"thisForm"},r.a.createElement(B.a.Control,{as:"select"},r.a.createElement("option",null,e.text," 1"),r.a.createElement("option",null,e.text," 2"),r.a.createElement("option",null,e.text," 3"),r.a.createElement("option",null,e.text," 4"),r.a.createElement("option",null,e.text," 5")))))))}var Z=a(46),ee=a.n(Z);var te=function(e){return r.a.createElement(ee.a,{className:"togglerButton",onClick:function(){e.onClick()}},r.a.createElement("i",{class:e.className}))};function ae(e){return r.a.createElement(q,null,r.a.createElement(S,{size:"sm-6"},r.a.createElement(K,{text:e.text,value:e.traits})),r.a.createElement(S,{size:"sm-1"},r.a.createElement(te,{className:"fas fa-plus",onClick:e.onClick})),r.a.createElement(S,{size:"sm-1"},r.a.createElement("div",{className:"thisForm score"},e.trait1Val||e.trait2Val," ")),r.a.createElement(S,{size:"sm-1"},r.a.createElement(te,{className:"fas fa-minus",onClick:e.onClick})))}function ne(e){return r.a.createElement(q,null,r.a.createElement(S,{size:"sm-1"},r.a.createElement(te,{className:"fas fa-plus",onClick:e.plus})),r.a.createElement(S,{size:"sm-1"},r.a.createElement("div",{className:"thisForm score"},e.traits," ")),r.a.createElement(S,{size:"sm-1"},r.a.createElement(te,{className:"fas fa-minus",onClick:e.minus})))}var re=["trait1","trait2","trait3","trait4","trait5"];function oe(e,t,a,n){return function(){n(e,t,a)}}var ie=function(e){return r.a.createElement(z,{fluid:!0},r.a.createElement(W,null),r.a.createElement(I,null),e.avatars.map(function(t){return r.a.createElement(q,null,r.a.createElement(S,{size:"md-4"},r.a.createElement($,{avatar:t.name,handleChange:e.handleChange,inputValue:e.passedState.Name})),r.a.createElement(S,{size:"md-4"},re.map(function(t){return r.a.createElement(U,{traitName:e.traitName[t]})})),r.a.createElement(S,{size:"md-4"},re.map(function(a){var n=oe(t,a,t[a]+1,e.updater),o=oe(t,a,t[a]-1,e.updater);return r.a.createElement(ne,{traits:t[a],plus:n,minus:o})})))}))},le=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(L.a)(a)),a.state={gameObj:{}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getGame()}},{key:"getGame",value:function(){var e,t=this;(e=this.getGameIdUrl(),f.a.get("https://real-life-api.herokuapp.com/api/games/".concat(e))).then(function(e){t.setState({gameObj:e.data})})}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;console.log("HELLO FROM NAME HANDLECHANGE",a,n),this.setState(Object(R.a)({},a,n))}},{key:"updateAvatarName",value:function(e,t,a){console.log(e,t,a);this.getGameIdUrl();for(var n=Object(J.a)(this.state.gameObj.avatars),r=0;r<this.state.gameObj.avatars.length;r++){e===this.state.gameObj.avatars[r]&&console.log("HELLO FROM AV-NAME LOOP");var o=this.state.gameObj.avatars[r],i=Object(Q.a)({},o,Object(R.a)({},t,a));n[r]=i,console.log("NEW AV",i)}}},{key:"updateAvatarTrait",value:function(e,t,a){console.log("UPDATE AVATAR TRAIT",e,t,a);for(var n=this.getGameIdUrl(),r=Object(J.a)(this.state.gameObj.avatars),o=0;o<this.state.gameObj.avatars.length;o++)if(e===this.state.gameObj.avatars[o]){console.log("HELLO FROM TRAIT LOOP");var i=this.state.gameObj.avatars[o],l=Object(Q.a)({},i,Object(R.a)({},t,a));r[o]=l;var s=this.state.gameObj,c=new O(s.name,s.traits,r,s.questions);g(c,n),this.setState({gameObj:c})}}},{key:"getGameIdUrl",value:function(){var e=window.location.pathname,t=e.indexOf("avatars"),a=e.substring(t);return a.substring(a.indexOf("/")+1)}},{key:"render",value:function(){var e=this,t=this.state.gameObj;return t?r.a.createElement(z,null,r.a.createElement(ie,{avatars:t.avatars?t.avatars:[],traitName:t.traits?t.traits:[],updater:function(t,a,n){e.updateAvatarTrait(t,a,n)},handleChange:this.handleChange,passedState:this.state})):r.a.createElement("div",null)}}]),t}(n.Component),se=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={gameObj:{}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log("CONTENT CREATE AVATARS",this.state.gameObj.avatars),r.a.createElement(z,null,r.a.createElement(le,null))}}]),t}(n.Component),ce=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={questions:[1,2,3,4,5],trait1Val:10,trait2Val:15},a.onClick=function(){a.setState({trait1Val:a.state.trait1Val+1,trait2Val:a.state.trait2Val+1})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(z,null,r.a.createElement(q,null,r.a.createElement(S,{size:"sm-12"},r.a.createElement(U,{className:"questionInput",text:"Type question here"}))),r.a.createElement("br",null),this.state.questions.map(function(t){return r.a.createElement(z,{fluid:!0},r.a.createElement(q,null,r.a.createElement(S,{size:"sm-6"},r.a.createElement(U,{text:"Type a response here"})),r.a.createElement(S,{size:"sm-6"},r.a.createElement(U,{text:"Type an outcome to this response"}))),r.a.createElement(q,null,r.a.createElement(S,{size:"sm-5"},r.a.createElement(ae,{text:"Affects Trait",trait1Val:e.state.trait1Val,onClick:e.onClick})),r.a.createElement(S,{size:"sm-5"},r.a.createElement(ae,{text:"Affects Trait",trait2Val:e.state.trait2Val,onClick:e.onClick}))),r.a.createElement("hr",null))}))}}]),t}(n.Component),me=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={questions:[1,2,3,4,5],trait1Val:10,trait2Val:15},a.onClick=function(){a.setState({trait1Val:a.state.trait1Val+1,trait2Val:a.state.trait2Val+1})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(z,null,r.a.createElement(q,null,r.a.createElement(S,{size:"sm-12"},r.a.createElement(U,{className:"questionInput",text:"Type question here"}),r.a.createElement("hr",null))),r.a.createElement("br",null),this.state.questions.map(function(t){return r.a.createElement(z,{fluid:!0},r.a.createElement(q,null,r.a.createElement(S,{size:"sm-6"},r.a.createElement(U,{text:"Type a response here"})),r.a.createElement(S,{size:"sm-6"},r.a.createElement(U,{text:"Type an outcome to this response"}))),r.a.createElement(q,null,r.a.createElement(S,{size:"sm-5"},r.a.createElement(ae,{text:"Affects Trait",trait1Val:e.state.trait1Val,onClick:e.onClick})),r.a.createElement(S,{size:"sm-5"},r.a.createElement(ae,{text:"Affects Trait",trait2Val:e.state.trait2Val,onClick:e.onClick}))),r.a.createElement("hr",null))}))}}]),t}(n.Component),ue=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log("WINDOW LOCATION PATHNAME",window.location.pathname),r.a.createElement("div",{className:"thisContent fluid"},window.location.pathname==="".concat("/realgameoflife_admin","/")?r.a.createElement(H,{games:this.props.gameNameGameId}):null,window.location.pathname==="".concat("/realgameoflife_admin","/create")?r.a.createElement(P,null):null,window.location.pathname==="".concat("/realgameoflife_admin","/create/avatars")?r.a.createElement(se,null):null,window.location.pathname==="".concat("/realgameoflife_admin","/create/questions")?r.a.createElement(ce,null):null,window.location.pathname.startsWith("".concat("/realgameoflife_admin","/edit/avatars/"))?r.a.createElement(le,{globalState:this.props.globalState}):null,window.location.pathname.startsWith("".concat("/realgameoflife_admin","/edit/questions/"))?r.a.createElement(me,null):null)}}]),t}(n.Component),pe=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(z,{fluid:!0},r.a.createElement(W,{text:"Welcome to the dashboard, ".concat(this.props.globalState.organization,".")}),r.a.createElement(I,{text:"Create, Edit, or Drop games for your organization!"}),r.a.createElement(ue,{gameNameGameId:this.props.globalState.gameNameGameId,everyGame:this.props.globalState.allGames}),r.a.createElement(M,{text:"Create Game",buttonType:"green",to:"/create"}),r.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return g(D,"5ccf266b84b9a54c70ed7ba9")}},"Update"),r.a.createElement("button",{className:"btn btn-danger",type:"button",onClick:function(){return b(A)}},"Create"))}}]),t}(n.Component),he=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(z,{fluid:!0},window.location.pathname==="".concat("/realgameoflife_admin","/create")?r.a.createElement(z,{fluid:!0},r.a.createElement(W,{text:"Build your next amazing game!"}),r.a.createElement(I,{text:"Read below for how to get started"}),r.a.createElement(ue,null),r.a.createElement(M,{text:"Next",buttonType:"green",to:"/create/avatars"})):null,window.location.pathname==="".concat("/realgameoflife_admin","/create/avatars")?r.a.createElement(z,{fluid:!0},r.a.createElement(W,{text:"Create Avatars"}),r.a.createElement(G,null),r.a.createElement(ue,null),r.a.createElement(M,{text:"Next",buttonType:"green",to:"/create/questions"})):null,window.location.pathname==="".concat("/realgameoflife_admin","/create/questions")?r.a.createElement(z,{fluid:!0},r.a.createElement(W,{text:"Create Questions"}),r.a.createElement(X,{qtext:"Question",text:"Trait"}),r.a.createElement(ue,null),r.a.createElement(M,{text:"Done",buttonType:"green",to:"/"})):null)}}]),t}(n.Component);var de=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(z,{fluid:!0},window.location.pathname.startsWith("".concat("/realgameoflife_admin","/edit/avatars/"))?r.a.createElement(z,{fluid:!0},r.a.createElement(W,{text:"Edit Avatars"}),r.a.createElement(G,{text:"Update Avatar Selections"}),r.a.createElement(ue,{globalState:this.props.globalState}),r.a.createElement(M,{text:"Done",buttonType:"green",to:"/"})):null,window.location.pathname.startsWith("".concat("/realgameoflife_admin","/edit/questions/"))?r.a.createElement(z,{fluid:!0},r.a.createElement(W,{text:"Edit Questions"}),r.a.createElement(X,{qtext:"Question",text:"Trait"}),r.a.createElement(ue,null),r.a.createElement(M,{text:"Done",buttonType:"green",click:function(){},to:"/"})):null)}}]),t}(n.Component),Ee=(a(94),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={organization:"Nonprofit Organization Name",gameNameGameId:[],currentGameId:void 0,allGames:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getAllGames()}},{key:"getAllGames",value:function(){var e=this;f.a.get("https://real-life-api.herokuapp.com/api/games").then(function(t){console.log("RESULTS.DATA",t.data);for(var a=[],n="",r=0;r<t.data.length;r++){var o={gameId:t.data[r]._id,gameName:t.data[r].name};n="We Need To Get the Name Somehow",a.push(o)}console.log("GAME NAME AND ID:",a),e.setState({organization:n,gameNameGameId:a,allGames:t.data})})}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{basename:"/realgameoflife_admin"},r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(pe,Object.assign({},t,{globalState:e.state}))}}),r.a.createElement(h.a,{prefix:!0,path:"/create",render:function(t){return r.a.createElement(he,Object.assign({},t,{globalState:e.state}))}}),r.a.createElement(h.a,{prefix:!0,path:"/edit",render:function(t){return r.a.createElement(de,Object.assign({},t,{globalState:e.state}))}}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.f5e20b32.chunk.js.map