(this["webpackJsonpthree-tile-poc"]=this["webpackJsonpthree-tile-poc"]||[]).push([[0],{16:function(n,e,t){"use strict";t.r(e);var i=t(8),o=t.n(i),a=t(11),s=t(9),r=(t(18),t(4)),d=t(13),p=t(14),c=t(15);(function(){var n=Object(s.a)(o.a.mark((function n(){var e,t,i,s,w,l,h,u,m,f,v,x,b,y,M,z,J,g,k,A,P,C,I,j,H,O,W,q,B;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(e=new c).showPanel(0),document.body.appendChild(e.dom),t=new r.eb,i=window.innerWidth/window.innerHeight,w=(s=20)/i,l=new d.a,n.next=10,l.loadAsync("./KnightCharacter.gltf");case 10:for(h=n.sent,u=h.scene,(m=new r.T(s/-2,s/2,w/2,w/-2,0,700)).position.set(0,5,3),m.lookAt(0,0,0),(f=new r.sb).setSize(window.innerWidth,window.innerHeight),document.body.appendChild(f.domElement),v=new r.a(16777215,.6),t.add(v),x=new r.k(16777215,.5),t.add(x),b=new r.f,y=new r.M({color:38365}),(M=new r.J(b,y)).scale.z=10,M.position.set(-5.5,.5,0),t.add(M),(z=new r.J(b,y)).scale.z=10,z.position.set(5.5,.5,0),t.add(z),(J=new r.J(b,y)).scale.x=10,J.position.set(0,.5,-5.5),t.add(J),(g=new r.J(b,y)).scale.x=10,g.position.set(0,.5,5.5),t.add(g),k=new r.V(10,10),A=new r.M({color:10066329}),(P=new r.J(k,A)).rotation.x=-Math.PI/2,t.add(P),m.position.z=2.5,(C=new r.p(10,10)).position.y+=.01,t.add(C),I=[],j=h.animations,H=new r.pb(0,0),O=0;O<150;O++)(W=p.a(u)).scale.set(.3,.3,.3),W.position.set(10*Math.random()-5,0,10*Math.random()-5),W.animationMixer=new r.c(W),q=r.b.findByName(j,"Run"),W.animationMixer.clipAction(q).play(),(B=new r.pb(2,0)).rotateAround(H,Math.random()*Math.PI*2),W.vel=B,I.push(W),t.add(W);(function n(){requestAnimationFrame(n);var i=.015;e.begin();var o,s=Object(a.a)(I);try{for(s.s();!(o=s.n()).done;){var r=o.value;r.position.x+=r.vel.x*i,r.position.z+=r.vel.y*i,(r.position.x>=5||r.position.x<=-5)&&(r.vel.x*=-1),(r.position.z>=5||r.position.z<=-5)&&(r.vel.y*=-1),r.animationMixer.update(i),r.rotation.y=Math.PI/2-r.vel.angle()}}catch(d){s.e(d)}finally{s.f()}f.render(t,m),e.end()})();case 55:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()},18:function(n,e,t){}},[[16,1,2]]]);
//# sourceMappingURL=main.962869b4.chunk.js.map