export function do_pose1(){

    
    let but_pose1a = document.getElementById("btphoto_pose1a");
    but_pose1a.addEventListener("click", () => {
        window.removeEventListener("devicemotion", handleMotion);
        //tomaFoto1();
        alert('Click pose1');
    });

    let but_pose1b = document.getElementById("btphoto_pose1b");
    but_pose1b.addEventListener("click", () => {
        window.removeEventListener("devicemotion", handleMotion);
        //tomaFoto1();
        alert('Click pose1');
    });
    

    //but_pose1a.style.visibility = 'hidden';
    //but_pose1b.style.visibility = 'hidden';
    window.addEventListener("devicemotion", handleMotion);

    navigator.mediaDevices.enumerateDevices().then(gotDevices).then(start).catch(handleError);
    //start();
    //navigator.mediaDevices.getUserMedia(constraints).then(gotStream).catch(handleErrorBis);
}


function handleError(error) {
    console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}


function handleErrorBis(error) {
    alert(error.message);
}

function gotDevices(deviceInfos) {
    let myDeviceId;
    for (let i = 0; i !== deviceInfos.length; ++i) {
        const deviceInfo = deviceInfos[i];
        const option = document.createElement('option');
        option.value = deviceInfo.deviceId;
        option.text = deviceInfo.label ;
        if (deviceInfo.kind === 'videoinput') {
            if ((option.text.includes('0,'))||
                (option.text === 'Cámara trasera')||
                (option.text === 'Back Camera')){
                    myDeviceId = option.value;
                    break;
            } else {console.log('Some other kind of source/device: ', deviceInfo);}
            
        } else {
            console.log('Some other kind of source/device: ', deviceInfo);
        }
    }
    return myDeviceId;
}

function start(myIdDevice) {
    if (window.stream) {
        window.stream.getTracks().forEach(track => {
            track.stop();
        });
    }
    const videoSource = myIdDevice;
    /*
    const constraints = {
        audio: false,
        video: {deviceId: videoSource ? {exact: videoSource} : undefined}
    };
    */
   let constraints;
   if (videoSource){
        constraints = {
            audio: false,
            video: {deviceId: {exact: videoSource}}
        };
   }
   else{
        constraints = {
            audio: false,
            video: {facingMode: 'environment'}
        };
   }

    navigator.mediaDevices.getUserMedia(constraints).then(gotStream).catch(handleErrorBis);
}

function gotStream(stream) {
    let video = document.getElementById("vid_pose1");
    window.stream = stream; // make stream available to console

    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
        video.play();
    });

    const videoTrack = stream.getVideoTracks()[0];
    videoTrack.applyConstraints({torch: true})
        .then(() => console.log(videoTrack.getSettings().torch));

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
    let but2_pose1a = document.getElementById("btphoto_pose1a");
    let but2_pose1b = document.getElementById("btphoto_pose1b");
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
    if (resp_check){
        but2_pose1a.style.visibility = 'visible';
        but2_pose1b.style.visibility = 'visible';
    } 
    else{
        but2_pose1a.style.visibility = 'hidden';
        but2_pose1b.style.visibility = 'hidden';
    } 
}