(window["webpackJsonpvrmmeta-ripper-frontend"]=window["webpackJsonpvrmmeta-ripper-frontend"]||[]).push([[0],{44:function(e,n,t){e.exports=t(66)},49:function(e,n,t){},50:function(e,n,t){},66:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(8),o=t.n(i),c=(t(49),t(23)),s=t(24),l=t(29),u=t(25),d=t(20),h=t(28),m=(t(50),t(2)),v=t(36),f=t(37),p=new v.VRMLoader,w=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).canvas=null,t.scene=null,t.camera=null,t.renderer=null,t.frameId=null,t.state={url:"https://taptappun.s3-ap-northeast-1.amazonaws.com/test/AliciaSolid.vrm"},t.onCanvasLoaded=function(e){t.initScene(e)},t.animate=t.animate.bind(Object(d.a)(t)),t}return Object(h.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"updateVrmUrl",value:function(e){this.setState({url:e}),this.loadVRM()}},{key:"loadVRM",value:function(){var e=this;p.load(this.state.url,(function(n){e.scene&&e.scene.add(n.model)}),(function(e){console.log(e.loaded/e.total)}),(function(e){console.error(e)}))}},{key:"initScene",value:function(e){if(e){var n=new m.WebGLRenderer({canvas:e,antialias:!0}),t=e.clientWidth,a=e.clientHeight;this.canvas=e;var r=new m.Scene;r.background=new m.Color(2171169);var i=new m.DirectionalLight(16777215);i.position.set(0,1,-2),r.add(i),this.scene=r;var o=new m.PerspectiveCamera(50,t/a,.01);o.position.set(0,1.5,-1.5);var c=new f.OrbitControls(o,n.domElement);c.target.set(0,1.125,0),c.update(),this.camera=o,n.setSize(t,a),n.setPixelRatio(window.devicePixelRatio),this.renderer=n,this.animate()}}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.frameId),this.canvas&&this.renderer&&this.canvas.removeChild(this.renderer.domElement)}},{key:"animate",value:function(){this.frameId=window.requestAnimationFrame(this.animate),this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("canvas",{style:{width:"80vw",height:"40vw"},ref:this.onCanvasLoaded}))}}]),n}(r.a.Component),b=t(94),R=t(95),k=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).threeSceneRef=r.a.createRef(),t.inputUrl="",t.onLoadVRM=t.onLoadVRM.bind(Object(d.a)(t)),t}return Object(h.a)(n,e),Object(s.a)(n,[{key:"onLoadVRM",value:function(){this.threeSceneRef.current&&this.threeSceneRef.current.updateVrmUrl(this.inputUrl)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("a",{className:"App-link",href:"/references/"},"References"),r.a.createElement("a",{className:"App-link",href:"/swagger/"},"Api Docs"),r.a.createElement(w,{ref:this.threeSceneRef}),r.a.createElement(b.a,{style:{width:800},placeholder:"VRM\u30d5\u30a1\u30a4\u30eb\u306eURL\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",onChange:function(n){return e.inputUrl=n.target.value}}),r.a.createElement(R.a,{variant:"contained",size:"large",color:"primary",onClick:this.onLoadVRM},"VRM\u3092\u30ed\u30fc\u30c9\u3059\u308b"))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.8351c9a6.chunk.js.map