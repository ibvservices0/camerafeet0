export function tester(){alert("Hello")}export function permission_accelerometers(){DeviceMotionEvent&&typeof DeviceMotionEvent.requestPermission=="function"&&DeviceMotionEvent.requestPermission()}export function do_pose1(){let e=document.getElementById("btphoto_pose1a");e.addEventListener("click",()=>{window.removeEventListener("devicemotion",s),alert("Click pose1")});let t=document.getElementById("btphoto_pose1b");t.addEventListener("click",()=>{window.removeEventListener("devicemotion",s),alert("Click pose1")}),e.style.visibility="hidden",t.style.visibility="hidden",navigator.mediaDevices.enumerateDevices().then(v).then(u).catch(l)}function l(e){console.log("navigator.MediaDevices.getUserMedia error: ",e.message,e.name)}function d(e){alert(e.message)}function v(e){let t;for(let o=0;o!==e.length;++o){const n=e[o],i=document.createElement("option");if(i.value=n.deviceId,i.text=n.label,n.kind==="videoinput")if(i.text.includes("0,")||i.text==="C\xE1mara trasera"||i.text==="Back Camera"){t=i.value;break}else console.log("Some other kind of source/device: ",n);else console.log("Some other kind of source/device: ",n)}return t}function u(e){window.stream&&window.stream.getTracks().forEach(n=>{n.stop()});const t=e;let o;t?o={audio:!1,video:{deviceId:{exact:t}}}:o={audio:!1,video:{facingMode:"environment"}},navigator.mediaDevices.getUserMedia(o).then(m).catch(d)}function m(e){let t=document.getElementById("vid_pose1");window.stream=e,t.srcObject=e,t.addEventListener("loadedmetadata",()=>{t.play()});const o=e.getVideoTracks()[0];o.applyConstraints({torch:!0}).then(()=>console.log(o.getSettings().torch))}function s(e){var t=e.accelerationIncludingGravity.x,o=e.accelerationIncludingGravity.y,n=e.accelerationIncludingGravity.z,i=0;t>9.8?i=9.8:t<-9.8?i=-9.8:i=t;var c=0;o>9.8?c=9.8:o<-9.8?c=-9.8:c=o;var a=0;n>9.8?a=9.8:n<-9.8?a=-9.8:a=n;let r={ac0_0:i,ac1_0:c,ac2_0:a};localStorage.removeItem("feet_pose1"),localStorage.setItem("feet_pose1",JSON.stringify(r)),f(i,c,a)}function f(e,t,o){let n=document.getElementById("btphoto_pose1a"),i=document.getElementById("btphoto_pose1b");var c=!1,a=Math.asin(e/-9.8)*180/Math.PI;a=Math.abs(a),a>=30&&a<=50&&(c=!0);var r=Math.asin(t/-9.8)*180/Math.PI;r=Math.abs(r),r>10&&(c=!1),c?(n.removeAttribute("hidden"),i.removeAttribute("hidden")):(n.setAttribute("hidden","hidden"),i.setAttribute("hidden","hidden"))}
