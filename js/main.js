let appVideo = document.querySelector(".app_video"),
    videoContainer = document.querySelector(".video"),
    video = document.querySelectorAll(".video .video_player")

    function playPause() {
        video.forEach(vid => {
            if (vid.play()) {
                vid.pause();
                vid.currentTime = 0;
            }
        })
    }

document.addEventListener("keyup", (e) => {
    if (e.key === " ") {
        video.forEach(vid => {
            if (vid.play()) {
                vid.pause();
            }
        })
    }
    else if (e.key === "ArrowUp" || e.key === "PageUp") {
        playPause();
        appVideo.scrollTop -= videoContainer.offsetHeight;
    } else if (e.key === "ArrowDown" || e.key === "PageDown") {
        playPause();
        appVideo.scrollTop += videoContainer.offsetHeight;
    }
})
