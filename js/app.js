const video = document.getElementById('video');
const play = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//PLay and Pause video
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}
//Update the play pasue icon
function updatePlayIcon() {
    if(video.paused){
        play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
    }else{
        play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
    }
}

//update progress and timestamp
function updateProgress(){
    return true;
}

//Set video progress
function setVideoProgress(){
    return true;
}

//Stop video
function stopVideo(){
    return true;
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stopBtn.addEventListener('click', stopVideo);


progress.addEventListener('change', setVideoProgress);

