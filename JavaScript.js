let scroll= document.getElementById("scroll");
let song= document.getElementById("song");
let icon= document.getElementById("icon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function PlayPause(){
    if(icon.classList.contains("fa-pause")){
        song.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    }
    else{
        song.play();
        icon.classList.add("fa-pause");
        icon.classList.remove("fa-play");
    }
}
    if(song.play()){
        setInterval(()=>{
            progress.value = song.currentTime;
        },500);
    }

    // random function 
