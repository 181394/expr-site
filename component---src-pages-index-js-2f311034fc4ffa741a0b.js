(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(148),s=a(142),l=a(173),i=a(141),c=a.n(i),m=Object(l.a)(c.a).withConfig({displayName:"Button",componentId:"y7alep-0"})(["align-self:flex-end;border-radius:4px;border:1px solid #0175d8;padding:0.25rem 0.5rem;box-shadow:none !important;&:hover{color:#fff !important;background-color:#0175d8;}"]);a.d(t,"HomePageQuery",function(){return p});t.default=function(e){var t=e.data,a=e.location;return r.a.createElement(o.a,{location:a},r.a.createElement("div",null,r.a.createElement("p",null,"This page is build to provide all curriculum for the DAT159 subject at HVL. This page is build with ",r.a.createElement("strong",null,"Gatsby 💜")," (a React based static site generator) and is hosted on ",r.a.createElement("strong",null,"Github Pages"),"."),r.a.createElement("p",null,"The page is under construction."),r.a.createElement("h4",{style:{marginTop:"2rem"}},"Last 5 recent posts:"),r.a.createElement(s.a,{showChevron:"yes",showImage:"yes",showCategories:"no",showSearch:"no",posts:t.allMarkdownRemark.edges}),r.a.createElement(m,{style:{fontSize:"1.2rem",marginRight:"1rem"},to:"/news/"},"All blog posts")))};var p="1303016773"},142:function(e,t,a){"use strict";a.d(t,"a",function(){return p});a(49),a(48),a(143),a(144),a(75);var n=a(7),r=a.n(n),o=a(0),s=a.n(o),l=a(141),i=a.n(l),c=a(147),m=a.n(c),p=((new Date).getMonth(),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={search:"",currentFilter:"all",allPosts:t.props.posts.concat(),exam_details:[],questions:[],blockchain:[],refactoring:[],cryptography:[]},t.handleFilterClick=function(e){t.setState({currentFilter:e.target.dataset.filter})},t.handleSearch=function(e){var a=e.target.value,n=t.props.posts.filter(function(e){if(e.node.frontmatter.title.toLowerCase().includes(a.toLowerCase())||e.node.excerpt.toLowerCase().includes(a.toLowerCase()))return e});t.setState({search:a,allPosts:n,currentFilter:"all"})},t}r()(t,e);var a=t.prototype;return a.filter=function(e){var t=[],a=[],n=[],r=[],o=[];e.map(function(e){switch(e.node.frontmatter.tags){case"exam-details":t.push(e);break;case"questions":a.push(e);break;case"blockchain":n.push(e);break;case"cryptography":o.push(e);break;case"refactoring":r.push(e)}}),this.setState({exam_details:t,questions:a,blockchain:n,refactoring:r,cryptography:o})},a.componentWillMount=function(){this.filter(this.props.posts)},a.componentDidMount=function(){var e=this;document.addEventListener("keydown",function(t){"Escape"===t.code&&e.setState({search:""},function(){return e.handleSearch(t)})},!1)},a.render=function(){var e=this,t=this.state,a=t.allPosts,n=t.currentFilter;return s.a.createElement("div",null,"yes"===this.props.showCategories&&s.a.createElement("div",{className:"category-container"},s.a.createElement("button",{className:"category all "+("all"===n&&"active"),"data-filter":"all",onClick:this.handleFilterClick},"All posts"),this.state.exam_details.length>0&&s.a.createElement("button",{className:"category exam-details "+("exam-details"===n&&"active"),"data-filter":"exam-details",onClick:this.handleFilterClick},"Exam details"),this.state.questions.length>0&&s.a.createElement("button",{className:"category questions "+("questions"===n&&"active"),"data-filter":"questions",onClick:this.handleFilterClick},"Questions"),this.state.blockchain.length>0&&s.a.createElement("button",{className:"category blockchain "+("blockchain"===n&&"active"),"data-filter":"blockchain",onClick:this.handleFilterClick},"Blockchain"),this.state.cryptography.length>0&&s.a.createElement("button",{className:"category cryptography "+("cryptography"===n&&"active"),"data-filter":"cryptography",onClick:this.handleFilterClick},"Cryptography"),this.state.refactoring.length>0&&s.a.createElement("button",{className:"category refactoring "+("refactoring"===n&&"active"),"data-filter":"refactoring",onClick:this.handleFilterClick},"Refactoring")),"yes"===this.props.showSearch&&s.a.createElement("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},s.a.createElement("input",{type:"text",onChange:this.handleSearch,value:this.state.search,placeholder:"Search...",style:{width:"100%",maxWidth:"300px"}})),s.a.createElement("hr",null),s.a.createElement("ul",{className:"list-none m-t-1"},"all"===n&&a?a.map(function(t){return s.a.createElement("li",{key:t.node.id,className:"post-preview"},s.a.createElement(i.a,{key:t.node.id,to:t.node.frontmatter.path+"/"},s.a.createElement("h4",null,t.node.frontmatter.title),s.a.createElement("div",{className:"post-preview-content"},"yes"===e.props.showImage&&s.a.createElement("div",{className:"post-preview-image"},s.a.createElement("img",{src:"/expr-site/default-ogimage.png",alt:t.node.frontmatter.title})),s.a.createElement("p",{className:"yes"===e.props.showImage?"post-preview-excerpt":""},t.node.excerpt)),s.a.createElement("div",{className:"post-preview-note"},s.a.createElement("div",null,s.a.createElement("strong",null,t.node.timeToRead," min")," read by"," ",t.node.frontmatter.author," on"," ",s.a.createElement("strong",null,t.node.frontmatter.date)," in"," ",s.a.createElement("strong",{className:"post-preview-tags category "+t.node.frontmatter.tags},t.node.frontmatter.tags)),"yes"===e.props.showChevron&&s.a.createElement("img",{src:m.a,style:{height:"24px",justifySelf:"flex-end"},alt:"Arrow"}))))}):this.state[n].map(function(t){return s.a.createElement("li",{key:t.node.id,className:"post-preview"},s.a.createElement(i.a,{key:t.node.id,to:t.node.frontmatter.path+"/"},s.a.createElement("h4",null,t.node.frontmatter.title),s.a.createElement("div",{className:"post-preview-content"},"yes"===e.props.showImage&&s.a.createElement("div",{className:"post-preview-image"},s.a.createElement("img",{src:"/expr-site/default-ogimage.png",alt:t.node.frontmatter.title})),s.a.createElement("p",{className:"yes"===e.props.showImage?"post-preview-excerpt":""},t.node.excerpt)),s.a.createElement("div",{className:"post-preview-note"},s.a.createElement("div",null,s.a.createElement("strong",null,t.node.timeToRead," min")," read by"," ",t.node.frontmatter.author," on"," ",s.a.createElement("strong",null,t.node.frontmatter.date)," in"," ",s.a.createElement("strong",{className:"post-preview-tags category "+t.node.frontmatter.tags},t.node.frontmatter.tags)),"yes"===e.props.showChevron&&s.a.createElement("img",{src:m.a,style:{height:"24px",justifySelf:"flex-end"},alt:"Arrow"}))))})))},t}(o.Component))},147:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDYiIGhlaWdodD0iMzA2Ij48cGF0aCBkPSJNOTQuMzUgMGwtMzUuNyAzNS43TDE3NS45NSAxNTMgNTguNjUgMjcwLjNsMzUuNyAzNS43IDE1My0xNTN6Ii8+PC9zdmc+"}}]);
//# sourceMappingURL=component---src-pages-index-js-2f311034fc4ffa741a0b.js.map