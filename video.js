// Add js here.
const video = document.getElementById("videoplayer");

document.onload = function() {videoAutoplay()};

function videoAutoplay() {
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
const volume = document.getElementById("slider");
volume.addEventListener('input', videovolume);



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
    video.pause();
    let speed = video.playbackRate;
    console.log("speed before1: "+speed);
    alert(speed);
    if (speed == 0.5)
    {
    alert("Video is at slowest speed!");
    }
    else{
        speed=speed-0.5;
    }
    video.playbackRate=speed;
    console.log("speed after1: "+speed);
    video.play();
}

function fastvideo()
{
    video.pause();
    let speed = video.playbackRate;
    console.log(speed);
    if (speed == 2.0)
    {
    console.log("speed before2: "+speed);
    alert("Video is at fastest speed!");
    }
    else{
        speed=speed+0.5;
    }
    console.log("speed after1: "+speed);
    video.playbackRate=speed;
    console.log("speed after2: "+speed);
    video.play();
}

function skipvideo()
{
    video.pause();
    let currentDuration = video.currentTime;
    alert(currentDuration);
    if(currentDuration+15>video.duration)
    {
        currentDuration=0;
}
    else{
        currentDuration=currentDuration+15;
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
        video.volume=100;
    }
    
}
function videovolume()
{
    if (video.muted) {
        video.muted = false;
      }
      video.volume = volume.value;
    }






