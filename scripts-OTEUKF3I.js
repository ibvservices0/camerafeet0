export function tester(){alert("Hello")}export function permission_accelerometers(){DeviceMotionEvent&&typeof DeviceMotionEvent.requestPermission=="function"&&DeviceMotionEvent.requestPermission()}export function do_pose1(){window.addEventListener("devicemotion",l),navigator.mediaDevices.enumerateDevices().then(m).then(f).catch(v)}export function bt_pose1(){window.removeEventListener("devicemotion",l),p()}function v(e){console.log("navigator.MediaDevices.getUserMedia error: ",e.message,e.name)}function g(e){alert(e.message)}function m(e){let t;for(let o=0;o!==e.length;++o){const i=e[o],a=document.createElement("option");if(a.value=i.deviceId,a.text=i.label,i.kind==="videoinput")if(a.text.includes("0,")||a.text==="C\xE1mara trasera"||a.text==="Back Camera"){t=a.value;break}else console.log("Some other kind of source/device: ",i);else console.log("Some other kind of source/device: ",i)}return t}function f(e){window.stream&&window.stream.getTracks().forEach(i=>{i.stop()});const t=e;let o;t?o={audio:!1,video:{deviceId:{exact:t}}}:o={audio:!1,video:{facingMode:"environment"}},navigator.mediaDevices.getUserMedia(o).then(h).catch(g)}function h(e){let t=document.getElementById("vid_pose1");window.stream=e,t.srcObject=e,t.addEventListener("loadedmetadata",()=>{t.play()});const o=e.getVideoTracks()[0];o.applyConstraints({torch:!0}).then(()=>console.log(o.getSettings().torch))}function l(e){var t=e.accelerationIncludingGravity.x,o=e.accelerationIncludingGravity.y,i=e.accelerationIncludingGravity.z,a=0;t>9.8?a=9.8:t<-9.8?a=-9.8:a=t;var c=0;o>9.8?c=9.8:o<-9.8?c=-9.8:c=o;var n=0;i>9.8?n=9.8:i<-9.8?n=-9.8:n=i;let s={ac0_0:a,ac1_0:c,ac2_0:n};localStorage.removeItem("feet_pose1"),localStorage.setItem("feet_pose1",JSON.stringify(s)),u(a,c,n)}function u(e,t,o){let i=document.getElementById("btphoto_pose1a"),a=document.getElementById("btphoto_pose1b");var c=!1,n=Math.asin(e/-9.8)*180/Math.PI;n=Math.abs(n),n>=30&&n<=50&&(c=!0);var s=Math.asin(t/-9.8)*180/Math.PI;s=Math.abs(s),s>10&&(c=!1),c?(i.style.visibility="visible",a.style.visibility="visible"):(i.style.visibility="hidden",a.style.visibility="hidden")}function p(){let e=document.getElementById("vid_pose1"),t=document.getElementById("thecanvas1landscape"),o=t.getContext("2d");o.clearRect(0,0,t.width,t.height),o.drawImage(e,0,0,t.width,t.height);const i=t.toDataURL("image/jpeg",1),a=_(i);localStorage.removeItem("feet_photo1"),localStorage.setItem("feet_photo1",a)}const _=e=>e.replace("data:","").replace(/^.+,/,"");export function do_pose2(){window.addEventListener("devicemotion",r),navigator.mediaDevices.enumerateDevices().then(I).then(w).catch(y)}export function bt_pose2(){window.removeEventListener("devicemotion",r),M()}function y(e){console.log("navigator.MediaDevices.getUserMedia error: ",e.message,e.name)}function b(e){alert(e.message)}function I(e){let t;for(let o=0;o!==e.length;++o){const i=e[o],a=document.createElement("option");if(a.value=i.deviceId,a.text=i.label,i.kind==="videoinput")if(a.text.includes("0,")||a.text==="C\xE1mara trasera"||a.text==="Back Camera"){t=a.value;break}else console.log("Some other kind of source/device: ",i);else console.log("Some other kind of source/device: ",i)}return t}function w(e){window.stream&&window.stream.getTracks().forEach(i=>{i.stop()});const t=e;let o;t?o={audio:!1,video:{deviceId:{exact:t}}}:o={audio:!1,video:{facingMode:"environment"}},navigator.mediaDevices.getUserMedia(o).then(E).catch(b)}function E(e){let t=document.getElementById("vid_pose2");window.stream=e,t.srcObject=e,t.addEventListener("loadedmetadata",()=>{t.play()});const o=e.getVideoTracks()[0];o.applyConstraints({torch:!0}).then(()=>console.log(o.getSettings().torch))}function r(e){var t=e.accelerationIncludingGravity.x,o=e.accelerationIncludingGravity.y,i=e.accelerationIncludingGravity.z,a=0;t>9.8?a=9.8:t<-9.8?a=-9.8:a=t;var c=0;o>9.8?c=9.8:o<-9.8?c=-9.8:c=o;var n=0;i>9.8?n=9.8:i<-9.8?n=-9.8:n=i;let s={ac0_1:a,ac1_1:c,ac2_1:n};localStorage.removeItem("feet_pose2"),localStorage.setItem("feet_pose2",JSON.stringify(s)),x(a,c,n)}function x(e,t,o){let i=document.getElementById("btphoto_pose2a"),a=document.getElementById("btphoto_pose2b");var c=!1,n=Math.asin(e/-9.8)*180/Math.PI;n=Math.abs(n),n>=10&&n<=20&&(c=!0);var s=Math.asin(t/-9.8)*180/Math.PI;s=Math.abs(s),s>10&&(c=!1),c?(i.style.visibility="visible",a.style.visibility="visible"):(i.style.visibility="hidden",a.style.visibility="hidden")}function M(){let e=document.getElementById("vid_pose2"),t=document.getElementById("thecanvas2landscape"),o=t.getContext("2d");o.clearRect(0,0,t.width,t.height),o.drawImage(e,0,0,t.width,t.height);const i=t.toDataURL("image/jpeg",1),a=S(i);localStorage.removeItem("feet_photo2"),localStorage.setItem("feet_photo2",a)}const S=e=>e.replace("data:","").replace(/^.+,/,"");export function do_pose3(){window.addEventListener("devicemotion",d),navigator.mediaDevices.enumerateDevices().then(D).then(L).catch(k)}export function bt_pose3(){window.removeEventListener("devicemotion",d),R()}function k(e){console.log("navigator.MediaDevices.getUserMedia error: ",e.message,e.name)}function B(e){alert(e.message)}function D(e){let t;for(let o=0;o!==e.length;++o){const i=e[o],a=document.createElement("option");if(a.value=i.deviceId,a.text=i.label,i.kind==="videoinput")if(a.text.includes("0,")||a.text==="C\xE1mara trasera"||a.text==="Back Camera"){t=a.value;break}else console.log("Some other kind of source/device: ",i);else console.log("Some other kind of source/device: ",i)}return t}function L(e){window.stream&&window.stream.getTracks().forEach(i=>{i.stop()});const t=e;let o;t?o={audio:!1,video:{deviceId:{exact:t}}}:o={audio:!1,video:{facingMode:"environment"}},navigator.mediaDevices.getUserMedia(o).then(U).catch(B)}function U(e){let t=document.getElementById("vid_pose3");window.stream=e,t.srcObject=e,t.addEventListener("loadedmetadata",()=>{t.play()});const o=e.getVideoTracks()[0];o.applyConstraints({torch:!0}).then(()=>console.log(o.getSettings().torch))}function d(e){var t=e.accelerationIncludingGravity.x,o=e.accelerationIncludingGravity.y,i=e.accelerationIncludingGravity.z,a=0;t>9.8?a=9.8:t<-9.8?a=-9.8:a=t;var c=0;o>9.8?c=9.8:o<-9.8?c=-9.8:c=o;var n=0;i>9.8?n=9.8:i<-9.8?n=-9.8:n=i;let s={ac0_2:a,ac1_2:c,ac2_2:n};localStorage.removeItem("feet_pose3"),localStorage.setItem("feet_pose3",JSON.stringify(s)),C(a,c,n)}function C(e,t,o){let i=document.getElementById("btphoto_pose3a"),a=document.getElementById("btphoto_pose3b");var c=!1,n=Math.asin(e/-9.8)*180/Math.PI;n=Math.abs(n),n>=30&&n<=50&&(c=!0);var s=Math.asin(t/-9.8)*180/Math.PI;s=Math.abs(s),s>10&&(c=!1),c?(i.style.visibility="visible",a.style.visibility="visible"):(i.style.visibility="hidden",a.style.visibility="hidden")}function R(){let e=document.getElementById("vid_pose3"),t=document.getElementById("thecanvas3landscape"),o=t.getContext("2d");o.clearRect(0,0,t.width,t.height),o.drawImage(e,0,0,t.width,t.height);const i=t.toDataURL("image/jpeg",1),a=T(i);localStorage.removeItem("feet_photo3"),localStorage.setItem("feet_photo3",a)}export function releaseTorch3(){const t=document.getElementById("vid_pose3").srcObject.getVideoTracks()[0];t.applyConstraints({torch:!1}).then(()=>console.log(t.getSettings().torch))}const T=e=>e.replace("data:","").replace(/^.+,/,"");
