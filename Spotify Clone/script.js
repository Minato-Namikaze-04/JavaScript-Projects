let songs = [
    { name: "warriyo - Mortals [NCS Release]", path: "/songs/1.mp3" },
    { name: "Cielo - Huma-Huma", path: "/songs/2.mp3" },
    { name: "DEAF KEV - Invincible [NCS Release]-320k", path: "/songs/3.mp3" },
    { name: "Different Heaven & EH!DE - My Heart [NCS Release]", path: "/songs/4.mp3" },
    { name: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", path: "/songs/5.mp3" },
    { name: "Rabba - Salam-e-Ishq", path: "/songs/6.mp3" },
    { name: "Sakhiyaan -Salam-e-Ishq", path: "/songs/7.mp3" },
    { name: "Bhula Dena - Salam-e-Ishq", path: "/songs/8.mp3" },
    { name: "Tumhari Kasam - Salam-e-Ishq", path: "/songs/9.mp3" },
    { name: "Na Jaana - Salam-e-Ishq", path: "/songs/10.mp3" }
];
let song_name = document.querySelector(".song_name")
let audioElemnt = new Audio("/songs/1.mp3")
let play_pause = document.querySelector(".play_pause")
let music_range = document.getElementById("music_range")
let songitem = 0;
play_pause.addEventListener("click", () => {
    if (audioElemnt.paused) {
        audioElemnt.play()
        musicPlay(play_pause)
        musicPlay(play_music[songitem])

    }
    else {
        audioElemnt.pause()
        musicPause(play_pause)
        musicPause(play_music[songitem])

    }
})


Array.from(document.querySelectorAll(".music_name")).forEach((e, index) => {
    e.innerHTML = songs[index].name
})

let play_music = document.querySelectorAll(".play_music")

play_music.forEach((element, index) => {
    element.addEventListener("click", (e) => {
        playcheck();
        songitem = index
        audioElemnt.src = songs[index].path
        audioElemnt.play()
        musicPlay(e.target)
        musicPlay(play_pause)
    })
})

let playcheck = () => {
    play_music.forEach((element) => {
        musicPause(element)
    })
}
audioElemnt.addEventListener("timeupdate", () => {
    music_range.value = audioElemnt.currentTime / audioElemnt.duration * 100
})

music_range.addEventListener("change", () => {
    audioElemnt.currentTime = music_range.value / 100 * audioElemnt.duration
})

let musicPause = (name) => {
    name.classList.add("fa-circle-play")
    name.classList.remove("fa-circle-pause")
}
let musicPlay = (name) => {
    name.classList.remove("fa-circle-play")
    name.classList.add("fa-circle-pause")
    song_name.innerHTML = `<img class="gif" src="playing.gif" alt=""> ${songs[songitem].name}`
}

let forward = document.querySelector(".forward")
forward.addEventListener("click", () => {
    if (songitem >= 9) {
        songitem = 0
    }
    else {
        songitem++;
    }
    console.log(songs[songitem].path)
    audioElemnt.src = songs[songitem].path
    audioElemnt.play()
    playcheck();
    musicPlay(play_pause)
    musicPlay(play_music[songitem])
})
let previous = document.querySelector(".previous")
previous.addEventListener("click", () => {
    if (songitem <= 0) {
        songitem = 9
    }
    else {
        songitem--;
    }
    console.log(songs[songitem].path)
    audioElemnt.src = songs[songitem].path
    audioElemnt.play()
    playcheck();
    musicPlay(play_pause)
    musicPlay(play_music[songitem])
})