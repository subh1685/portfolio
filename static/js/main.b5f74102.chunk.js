(this.webpackJsonpkogn=this.webpackJsonpkogn||[]).push([[0],[,,,,,,,function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),i=n.n(a),c=n(8),l=n.n(c),r=(n(15),n(2)),o=n(3),h=n(5),d=n(4),u=(n(16),n(17),n.p+"static/media/s.08d1ca6e.png");var j=function(){return Object(s.jsx)("div",{className:"intro",children:Object(s.jsxs)("div",{className:"intro-div",children:[Object(s.jsx)("h1",{className:"intro-hi",children:"Hi,"}),Object(s.jsx)("h1",{className:"intro-hi name",children:"I'm "}),Object(s.jsx)("img",{className:"image_s name",src:u}),Object(s.jsx)("h1",{className:"intro-hi name",children:"ubham,"}),Object(s.jsx)("h1",{className:"intro-hi",children:"Developer."})]})})};n(18),n(19);var b=function(){return Object(s.jsxs)("div",{className:"menu",children:[Object(s.jsx)("div",{className:"logo_div",children:Object(s.jsx)("img",{className:"nav_logo",src:u})}),Object(s.jsx)("div",{className:"icon_div",children:Object(s.jsx)("i",{className:"icon-cost fa fa-home"})}),Object(s.jsxs)("div",{className:"contact",children:[Object(s.jsx)("a",{className:"contact-a",href:"https://www.facebook.com/profile.php?id=100002494420268",children:Object(s.jsx)("i",{className:"fa fa-facebook-f"})}),Object(s.jsx)("a",{className:"contact-a",href:"https://www.linkedin.com/in/subham-kumar-singh-853728108/",children:Object(s.jsx)("i",{className:"fa fa-linkedin"})})]})]})};n(20);var m=function(){return Object(s.jsxs)("div",{className:"resume-ch",children:[Object(s.jsx)("h1",{className:"resume-header",children:"Interests"}),Object(s.jsx)("p",{className:"resume-content",children:"Physics, Singing, Sketching, Gaming, solving codes/ciphers "})]})};var f=function(){return Object(s.jsxs)("div",{className:"resume-ch",children:[Object(s.jsx)("h1",{className:"resume-header",children:"Skills"}),Object(s.jsx)("p",{className:"resume-content",children:"The main area of expertise is backend development."}),Object(s.jsx)("p",{className:"resume-content",children:"I have also worked on full stack development project with MERN stack, android and Vue.js."}),Object(s.jsx)("p",{className:"resume-content",children:"Languages and frameworks which I used in my projects are, React.js, Node,js, Redux, React native, openwrt, fastcgi, Javascript, c++, python, shell"})]})};var x=function(){return Object(s.jsxs)("div",{className:"resume-ch",children:[Object(s.jsx)("h1",{className:"resume-header",children:"Experience"}),Object(s.jsx)("p",{className:"resume-content",children:"Microland(intern), worked on lex, alexa for automating IT management services related to ticketing tool"}),Object(s.jsx)("p",{className:"resume-content",children:"Microland(FT), worked on anomaly detection project using MERN stack, did data collection related to logs and configs from system using .NET APIs, made dashboards using d3.js, p5,js, chart.js etc., redux for state management "}),Object(s.jsx)("p",{className:"resume-content",children:"Samsung(FT), part of Connectivity-AI team, worked on Routers Device Manager APIs using C language. Worked on Gtest for code optimization and fastcgi for creating gateway interface for router APIs"})]})};var v=function(){return Object(s.jsxs)("div",{className:"resume-ch",children:[Object(s.jsx)("h1",{className:"resume-header",children:"Education"}),Object(s.jsx)("p",{className:"resume-content",children:"AISSE(CBSE 10th) : DAV Public School, Kedla"}),Object(s.jsx)("p",{className:"resume-content",children:"AISSCE(CBSE 12th) : DAV Public School, Hazaribagh"}),Object(s.jsx)("p",{className:"resume-content",children:"BE(BIOTECHNOLOGY) : BIT Mesra, Ranchi"})]})};var p=function(){return Object(s.jsxs)("div",{className:"resume-ch",children:[Object(s.jsx)("h1",{className:"resume-header",children:"Projects"}),Object(s.jsx)("p",{className:"resume-content",children:"AngelList Apply: python automation script for searching and applying for jobs on angelList by applying required filters(Python)"}),Object(s.jsx)("p",{className:"resume-content",children:"Parkit: App for finding parking places nearby(React Native)"}),Object(s.jsx)("p",{className:"resume-content",children:"Ticket Classifier: Classification model for classifying IT tickets as junk or relevant(python and machine learning)"})]})},O=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){var e="EXPERIENCE"==this.props.comp?Object(s.jsx)(x,{}):"EDUCATION"==this.props.comp?Object(s.jsx)(v,{}):"PROJECTS"==this.props.comp?Object(s.jsx)(p,{}):"INTERESTS"==this.props.comp?Object(s.jsx)(m,{}):"SKILLS"==this.props.comp?Object(s.jsx)(f,{}):null;return Object(s.jsx)("div",{className:"resume",children:Object(s.jsx)("div",{className:"resume-div",children:e})})}}]),n}(i.a.Component);n(21),n(22);var g=function(e,t){var n=this;this.default_x=t/2,this.default_y=e-30,this.x=t/2,this.y=e-30,this.x_vel=-2,this.y_vel=-2,this.vel=3,this.moving=0,this.radius=20,this.alive=1,this.move=function(){n.x+=n.x_vel,n.y+=n.y_vel},this.horizMove=function(e){n.x+=e*n.vel},this.reset=function(){n.x_vel=-2,n.y_vel=-2,n.x=n.default_x,n.y=n.default_y},this.update=function(e,t){n.x_vel=e,n.y_vel=t,n.move()},this.show=function(e){e.fill("#08fdd8"),e.ellipse(n.x,n.y,n.radius,n.radius)}};var w=function(e,t){var n=this;this.default_x=t/2-45,this.default_y=e-20,this.x=t/2-45,this.y=e-20,this.vel=3,this.length=90,this.width=15,this.move=function(e){n.x+=e*n.vel},this.reset=function(){n.x=n.default_x,n.y=n.default_y},this.show=function(e){e.fill("#08fdd8"),e.rect(n.x,n.y,n.length,n.width)}};var y=function(e){var t=this;this.x=e.x,this.y=e.y,this.length=110,this.width=30,this.erase=function(){t.length=0,t.width=0},this.show=function(n){n.strokeWeight(2),n.stroke("#08fdd8"),n.fill("#222"),n.rect(t.x,t.y,t.length,t.width),n.strokeWeight(0),n.fill("#08fdd8"),n.text(e.str,t.x+20,t.y+20)}};var N=function(){var e=this;this.row=4,this.col=5,this.left=10,this.top=10,this.width=40,this.length=140,this.rect_text=[{index:[0,0]},{index:[1,2]},{index:[1,4]},{index:[2,3]},{index:[3,1]}],this.rect_=[],this.vis=0,this.erase=function(){e.length=0,e.width=0},this.createBrick=function(){for(var t=["INTERESTS","EDUCATION","PROJECTS","SKILLS","EXPERIENCE"],n=0,s=0;s<e.row;s++)for(var a=e.left,i=e.top+e.width*s,c=0;c<e.col;c++){var l="";n<=4&&s==e.rect_text[n].index[0]&&c==e.rect_text[n].index[1]&&(l=t[n],n++),e.rect_.push({x:a,y:i,str:l}),a+=e.length}},this.show=function(t){e.rect_.map((function(e){new y(e).show(t)}))}},_=n(9),k=n.n(_),E=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).setup=function(e,t){e.createCanvas(s.width,s.height).parent(t),s.ball=new g(s.height,s.width,e.ellipse),s.board=new w(s.height,s.width,e.ellipse),s.rect=new N,s.rect.createBrick(),e.frameRate(s.frameRate)},s.draw=function(e){e.background("#222"),s.ball.show(e),s.board.show(e),s.rect.show(e),s.ball.moving&&(s.ball.move(),s.collission(e)),s.keyPress(e)},s.keyPress=function(e){e.keyIsDown(e.LEFT_ARROW)?s.board.x>s.left_wall&&(s.board.move(-1),s.ball.moving||s.ball.horizMove(-1)):e.keyIsDown(e.RIGHT_ARROW)?s.board.x<s.right_wall-s.board.length&&(s.board.move(1),s.ball.moving||s.ball.horizMove(1)):e.keyIsDown(e.ENTER)&&(s.ball.moving=1)},s.collission=function(e){s.ball.y<=580&&s.rect.rect_.map((function(t,n){if(s.ball.x+10>=t.x&&s.ball.x<=t.x+110&&s.ball.y>=t.y&&s.ball.y<=t.y+35){if(s.rect.rect_.splice(n,1),""!=t.str)return s.reset(e),void s.props.callback(t.str);console.log(s.ball.x,s.ball.y,t.x,t.y),s.ball.y<=t.y?s.ball.y_vel*=-1:s.ball.x+10<=t.x||s.ball.x>=t.x+110?s.ball.x_vel*=-1:s.ball.y>=t.y+30&&(s.ball.y_vel*=-1)}})),s.ball.x<=s.left_wall?s.ball.x_vel*=-1:s.ball.y<=s.top_wall?s.ball.y_vel*=-1:s.ball.x>=s.right_wall?s.ball.x_vel*=-1:s.ball.y+6==s.board.y&&s.ball.x>=s.board.x-10&&s.ball.x<=s.board.x+s.board.length+10?s.ball.y_vel*=-1:s.ball.y>=s.down_wall&&s.reset(e)},s.reset=function(){console.log("reset"),s.ball.moving=0,s.ball.reset(),s.board.reset()},s.resetButton=function(){s.ball=new g(s.height,s.width),s.board=new w(s.height,s.width),s.rect=new N,s.rect.createBrick()},s.pressStart=function(){s.ball.moving=1},s.windowResized=function(e){s.width=document.getElementById("atari").clientWidth,s.height=document.getElementById("atari").clientHeight,e.resizeCanvas(s.width,s.height)},s.height=0,s.width=0,s.frameRate=90,s.left_wall=20,s.right_wall=0,s.top_wall=10,s.down_wall=0,s.length=110,s.width=30,s}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.width=document.getElementById("atari").clientWidth,this.height=document.getElementById("atari").clientHeight,this.right_wall=this.width-10,this.down_wall=this.height}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"atari",id:"atari",children:Object(s.jsx)(k.a,{setup:this.setup,draw:this.draw,windowResized:this.windowResized})})}}]),n}(i.a.Component);n(7);var I=function(){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("code",{children:"if(not_in_hurry)"}),Object(s.jsxs)("code",{className:"tab_code inline_code",children:["play_around(",Object(s.jsx)("a",{className:"link",href:""}),");"]}),Object(s.jsx)("code",{className:"inline_code comment",children:"//press enter"}),Object(s.jsx)("code",{children:"else"}),Object(s.jsxs)("code",{className:"tab_code",children:["download_resume(",Object(s.jsx)("a",{className:"link",href:"https://github.com/gh-alpha7/tictac/raw/master/Subham's%20Resume.pdf",children:"download"}),");"]})]})},S=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"button",children:[Object(s.jsx)("a",{className:"flat-button",onClick:function(){e.props.onStart()},children:" Start "}),Object(s.jsx)("a",{className:"reset_button flat-button",onClick:function(){e.props.onReset()},children:" Reset "})]})})}}]),n}(i.a.Component),R=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).filledClick=function(t){e.props.selected(t)},e.startClick=function(){},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"game",children:[Object(s.jsx)(I,{}),Object(s.jsx)(E,{callback:this.filledClick,ref:function(t){e.atari=t}}),Object(s.jsx)(S,{onStart:function(){return e.atari.pressStart()},onReset:function(){return e.atari.resetButton()}})]})}}]),n}(i.a.Component),C=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).selected=function(e){s.setState({comp:e})},s.state={comp:null},s}return Object(o.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)(b,{}),Object(s.jsxs)("div",{className:"resume-box",children:[Object(s.jsx)(j,{}),Object(s.jsx)(O,{comp:this.state.comp})]}),Object(s.jsx)(R,{selected:this.selected})]})}}]),n}(i.a.Component),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};l.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root")),T()}],[[23,1,2]]]);
//# sourceMappingURL=main.b5f74102.chunk.js.map