export function tester(){alert("Hello")}export function permission_accelerometers(){DeviceMotionEvent&&typeof DeviceMotionEvent.requestPermission=="function"&&DeviceMotionEvent.requestPermission()}export function do_pose1(){document.getElementById("btphoto_pose1").addEventListener("click",()=>{alert("Click pose1")}),window.addEventListener("devicemotion",s)}function s(a){var n=a.accelerationIncludingGravity.x,r=a.accelerationIncludingGravity.y,o=a.accelerationIncludingGravity.z,t=0;n>9.8?t=9.8:n<-9.8?t=-9.8:t=n;var e=0;r>9.8?e=9.8:r<-9.8?e=-9.8:e=r;var i=0;o>9.8?i=9.8:o<-9.8?i=-9.8:i=o;let c={ac0_0:t,ac1_0:e,ac2_0:i};localStorage.removeItem("feet_pose1"),localStorage.setItem("feet_pose1",JSON.stringify(c)),l(t,e,i)}function l(a,n,r){let o=document.getElementById("btphoto_pose1");var t=!1,e=Math.asin(a/-9.8)*180/Math.PI;e=Math.abs(e),e>=30&&e<=50&&(t=!0);var i=Math.asin(n/-9.8)*180/Math.PI;i=Math.abs(i),i>10&&(t=!1),t?o.removeAttribute("hidden"):o.setAttribute("hidden","hidden")}
