(this["webpackJsonpreact-10"]=this["webpackJsonpreact-10"]||[]).push([[0],{29:function(e,t,n){e.exports=n(58)},58:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(5),c=n.n(s),o=n(2),i=n(4),u=n(25),l=n(6),p=n(7),d=n(9),f=n(8),h=n(3),m=n.n(h),v=n(10),b=n(26),y=n.n(b),E=n(27),g=n.n(E).a.create({baseURL:"https://jsonplaceholder.typicode.com/"}),O=function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("/users/".concat(e));case 2:r=t.sent,console.log("... About to fetchUser ... "),n({type:"FETCH_USER",payload:r.data}),console.log("... dispatch fetchUser ... ");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"renderUser",value:function(){var e=this,t=this.props.users.find((function(t){return t.id===e.props.userIdPosts}));return t?t.name:"Fetching users ..."}},{key:"render",value:function(){return a.a.createElement("div",{className:"header"},this.renderUser())}}]),n}(r.Component),w=Object(i.b)((function(e){return{users:e.users}}))(j),k=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){console.log("1) componentDidMount() {this.props} : ",this.props),this.props.fetchPostsAndUsers()}},{key:"renderList",value:function(){return this.props.posts.map((function(e){return a.a.createElement("div",{className:"item",key:e.id},a.a.createElement("i",{className:"large middle aligned icon user"}),a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"description"},a.a.createElement("h2",null,e.title),a.a.createElement("p",null,e.body)),a.a.createElement(w,{userIdPosts:e.userId})))}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"ui relaxed divided list"},this.renderList())}}]),n}(r.Component),U=Object(i.b)((function(e){return{posts:e.posts}}),{fetchPostsAndUsers:function(){return function(){var e=Object(v.a)(m.a.mark((function e(t,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(function(){var e=Object(v.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/posts");case 2:n=e.sent,t({type:"FETCH_POSTS",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:y.a.chain(n().posts).map("userId").uniq().forEach((function(e){return t(O(e))})).value();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})(k),x=function(){return a.a.createElement("div",{className:"ui container"},a.a.createElement(U,null))},T=n(28),N=Object(o.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("4) + postsReducer maintains an array of all fetched posts STATE : ",e),t.type){case"FETCH_POSTS":return t.payload;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("4) - usersReducer : ",e),t.type){case"FETCH_USER":return[].concat(Object(T.a)(e),[t.payload]);default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=Object(o.d)(N,Object(o.a)(u.a));c.a.render(a.a.createElement(i.a,{store:S},a.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.6cf0ec70.chunk.js.map