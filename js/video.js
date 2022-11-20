// Add js here.
let videopl = document.getElementById("videoplayer");

document.onload = function() {videoAutoplay()};

function videoAutoplay() {
videopl.loop = false;
  videopl.autoplay = false;
  videopl.load(); 
}

document.getElementById("play").onclick = function() {playvideo()};
document.getElementById("pause").onclick = function() {pausevideo()};
document.getElementById("slower").onclick = function() {slowvideo()};
document.getElementById("faster").onclick = function() {fastvideo()};
document.getElementById("skip").onclick = function() {skipvideo()};
document.getElementById("mute").onclick = function() {mutevideo()};
document.getElementById("slider").ondrag = function() {videovolume()};


function playvideo()
{
    videopl.play();
}

function pausevideo()
{
    videopl.pause();
}

function slowvideo()
{
    
    let speed = videopl.playbackRate;
    if (speed = 0.5)
    {
    alert("Video is at slowest speed!");
    }
    else{
        speed=speed-0.5;
    }
    videopl.playbackRate=speed;
}

function fastvideo()
{
    let speed = videopl.playbackRate;
    if (speed = 2)
    {
    alert("Video is at fastest speed!");
    }
    else{
        speed=speed+0.5;
    }
    videopl.playbackRate=speed;
}

function skipvideo()
{
    videopl.pause();
}
function mutevideo()
{
    videopl.pause();
}
function videovolume()
{
    videopl.pause();
}






