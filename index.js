var audio=new Audio("Eminem - Venom 320kbps(320Kbps.In).mp3");
$(".masterPlay").on("click",function(){
// audio.currentTime to get the current time of audio

    if(audio.paused || audio.currentTime<=0){
        $(".masterPlay").addClass("fa-pause");
        $(".masterPlay").removeClass("fa-play");
        audio.play();
        $(".gif img").css("opacity","1");
    }
    else{
        $(".masterPlay").removeClass("fa-pause");
        $(".masterPlay").addClass("fa-play");
        audio.pause();
        $(".gif img").css("opacity","0");
    }
})



// to change audio using progress
// to get the time of the song
audio.addEventListener("timeupdate",function(){
    var currentProgress=(audio.currentTime/audio.duration)*100;
    $("#progressBar").attr("value",currentProgress);
})
$("#progressBar").on("change",function(){
    // console.log($("#progressBar").attr("value")); gave wrong value
  audio.currentTime= ( document.querySelector("#progressBar").value * audio.duration)/100;
})

