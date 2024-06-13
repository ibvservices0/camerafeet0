export function do_pose1(){
    let but_pose1 = document.getElementById("btphoto_pose1");
    but_pose1.addEventListener("click", () => {
        alert('Click pose1');
    });

    window.addEventListener("devicemotion", handleMotion);
}


function handleMotion(event) {
    var acx_raw = event.accelerationIncludingGravity.x;
    var acy_raw = event.accelerationIncludingGravity.y;
    var acz_raw = event.accelerationIncludingGravity.z;
    var ac0_0 = 0;
    if (acx_raw > 9.8) ac0_0 = 9.8;
    else if (acx_raw < -9.8) ac0_0 = -9.8;
    else ac0_0 = acx_raw;
    var ac1_0 = 0;
    if (acy_raw > 9.8) ac1_0 = 9.8;
    else if (acy_raw < -9.8) ac1_0 = -9.8;
    else ac1_0 = acy_raw;
    var ac2_0 = 0;
    if (acz_raw > 9.8) ac2_0 = 9.8;
    else if (acz_raw < -9.8) ac2_0 = -9.8;
    else ac2_0 = acz_raw;
    let pose1 = {
        'ac0_0': ac0_0,
        'ac1_0': ac1_0,
        'ac2_0': ac2_0
    };
    localStorage.removeItem('feet_pose1');
    localStorage.setItem('feet_pose1', JSON.stringify(pose1));
    check_visible(ac0_0, ac1_0, ac2_0);
}


function check_visible(valueX, valueY, valueZ){
    let but2_pose1 = document.getElementById("btphoto_pose1");
    var resp_check = false;
    var anguloX = Math.asin(valueX / -9.8) * 180 / Math.PI;
    anguloX = Math.abs(anguloX);
    if ((anguloX >= 30) && (anguloX <= 50)){
        resp_check = true;
    }
    var anguloY = Math.asin(valueY / -9.8) * 180 / Math.PI;
    anguloY = Math.abs(anguloY);
    if (anguloY > 10){
        resp_check = false;
    }
    if (resp_check) but2_pose1.removeAttribute("hidden");
    else but2_pose1.setAttribute("hidden", "hidden");
}