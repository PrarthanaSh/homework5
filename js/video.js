// Add js here.
const video = document.getElementById("videoplayer");

document.onload = function() {videoAutoplay()};

function videoAutoplay() {
    console.log('The onload function was loaded')
    video.loop = false;
  video.autoplay = false;
  video.load();
}

document.getElementById("play").onclick = function() {playvideo()};
document.getElementById("pause").onclick = function() {pausevideo()};
document.getElementById("slower").onclick = function() {slowvideo()};
document.getElementById("faster").onclick = function() {fastvideo()};
document.getElementById("skip").onclick = function() {skipvideo()};
document.getElementById("mute").onclick = function() {mutevideo()};

const volume = document.querySelector("#slider");
volume.addEventListener('input', videovolume());



function playvideo()
{
    if (video.paused || video.ended) {
      video.play();
    }
}

function pausevideo()
{
    video.pause();
}

function slowvideo()
{
    let speed = video.playbackRate;
    console.log("speed before1: "+speed);
    if (speed == 0.5)
    {
    alert("Video is at slowest speed!");
    }
    else{
        speed*=0.5;
    }
    video.playbackRate=speed;
    console.log("speed after1: "+speed);
}

function fastvideo()
{
    let speed = video.playbackRate;
    console.log(speed);
    if (speed == 2.0)
    {
    alert("Video is at fastest speed!");
    }
    else{
        speed*=2;
    }
    console.log("speed after1: "+speed);
    video.playbackRate=speed;
    console.log("speed after2: "+speed);
}

function skipvideo()
{
    let currentDuration = video.currentTime;
    console.log(currentDuration);
    if(currentDuration+15>=video.duration)
    {
        currentDuration=0;
}
    else{
        currentDuration+=15;
    }
    console.log(currentDuration);
    video.currentTime=currentDuration;
    video.play();
}

function mutevideo()
{
    video.muted = !video.muted;
    if (video.muted) {
      document.getElementById("mute").innerHTML = "Unmute";
      volume.value=0;
      video.volume=0;
    } else {
        document.getElementById("mute").innerHTML = "Mute";
        volume.value=100;
        video.volume=1;
    }
    
}
function videovolume()
{
    if (video.muted) {
        video.muted = false;
      }
      video.volume = volume.value;
      console.log(volume.value);
    }


