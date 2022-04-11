// Musica
let music = document.querySelector("audio");

// Aparencia
let aparenciaContainer = document.getElementById("aparencia")

// id das musicas
var id = 1;

// Imagem botao de  volume
let volButton = document.getElementById("volButton");


// Icon Player
let imgAlbum = document.getElementById("iconAlbumPlayer");
let artistContainer = document.getElementById("artistContainer")
var h3 = artistContainer.innerHTML = "<h3> Hurricane <h3>" 
var p = artistContainer.innerHTML += "<p> Kanye West <p>" 


// progress bar 
let progressBar = document.getElementById("progressMusic")
let progressColor = 0
let currentMusic = document.getElementById("current")
let endMusic = document.getElementById("end")


function toMinutes(s){
    let timerString = new Date(s*1000).toString().split(' ')
    let timerInicial = timerString[4].split(':')
    return timerInicial[1] + ":" + timerInicial[2]
}




music.ontimeupdate = function(){

    if(music.ended == true){
        id++
        idTrack()
        progressBar.value = this.currentTime
        progressColor = 0
    }

    if(this.currentTime == 0){
        progressBar.value = 0
    }


    currentMusic.innerText = toMinutes(music.currentTime)
    endMusic.innerHTML = toMinutes(music.duration)
    

    progressBar.setAttribute("value", this.currentTime)
    progressBar.setAttribute("max", this.duration)
    progressBar.setAttribute("step", this.duration/100) 

    musicDuration()
}


function musicDuration(){
    var durationMusic = music.duration/100
    progressBar.style.background = 'linear-gradient(90deg, rgb(231, 109, 131)' + music.currentTime/durationMusic + '%, rgb(214, 214, 214)' + music.currentTime/durationMusic + '%)'
}

function timerMusic(){
    music.currentTime = progressBar.value
}


function idMusic(n){
    id = n
    idTrack()
}

function idTrack(){
    let musicSrc = ""

    if(id == 1){
        musicSrc = "assets/audio/hurricane.mp3"
        h3 = artistContainer.innerHTML = "<h3> Hurricane <h3>" 
        p = artistContainer.innerHTML += "<p> Kanye West <p>" 
        imgAlbum.setAttribute("src", "assets/images/donda.jpg")
    } 
    else if(id == 2){
        musicSrc = "assets/audio/praisegod.mp4";
        h3 = artistContainer.innerHTML = "<h3> Praise God <h3>" 
        p = artistContainer.innerHTML += "<p> Kanye West <p>" 
        imgAlbum.setAttribute("src", "assets/images/donda.jpg");
    }
    else if(id == 3){
        musicSrc = "assets/audio/father.mp4"
        h3 = artistContainer.innerHTML = "<h3> Father Stretch My Hands Pt. 1 <h3>" 
        p = artistContainer.innerHTML += "<p> Kanye West <p>" 
        imgAlbum.setAttribute("src", "assets/images/thelifeofpablo.png")
    }
    else if(id == 4){
        musicSrc = "assets/audio/payday.mp4"
        h3 = artistContainer.innerHTML = "<h3> Payday <h3>" 
        p = artistContainer.innerHTML += "<p> Doja Cat, Young Thug <p>" 
        imgAlbum.setAttribute("src", "assets/images/planether.jpg")
    }
    else if(id == 5){
        musicSrc = "assets/audio/praisethelord.mp4"
        h3 = artistContainer.innerHTML = "<h3> Praise The Lord <h3>" 
        p = artistContainer.innerHTML += "<p> A$AP Rocky <p>" 
        imgAlbum.setAttribute("src", "assets/images/praisethelordjpg.jpg")
    }
    else if(id == 6){
        musicSrc = "assets/audio/woah.mp4"
        h3 = artistContainer.innerHTML = "<h3> Woah <h3>" 
        p = artistContainer.innerHTML += "<p> Lil Baby <p>" 
        imgAlbum.setAttribute("src", "assets/images/lil-baby-woah.jpg")
    }
    else if(id == 7){
        musicSrc = "assets/audio/driptohard.mp3"
        h3 = artistContainer.innerHTML = "<h3> Drip Too Hard <h3>" 
        p = artistContainer.innerHTML += "<p> Lil Baby, Gunna <p>" 
        imgAlbum.setAttribute("src", "assets/images/dripharder.jpg")
    }
    else if(id == 8){
        musicSrc = "assets/audio/darkfantasy.mp4"
        h3 = artistContainer.innerHTML = "<h3> Dark Fantasy <h3>" 
        p = artistContainer.innerHTML += "<p> Kanye West <p>" 
        imgAlbum.setAttribute("src", "assets/images/mbdtf.jpg")
    }
    else if(id == 9){
        musicSrc = "assets/audio/cantsay.mp4"
        h3 = artistContainer.innerHTML = "<h3> CAN'T SAY <h3>" 
        p = artistContainer.innerHTML += "<p> Travis Scott <p>" 
        imgAlbum.setAttribute("src", "assets/images/astroworld.jpg")
    }
    else if(id == 10){
        musicSrc = "assets/audio/spacecadet.mp4"
        h3 = artistContainer.innerHTML = "<h3> Space Cadet <h3>" 
        p = artistContainer.innerHTML += "<p> Ketro Boomin, Gunna <p>" 
        imgAlbum.setAttribute("src", "assets/images/NOT ALL HEROES WEAR CAPES.jpg")
    }
    else if(id == 11){
        musicSrc = "assets/audio/lastcall.mp4"
        h3 = artistContainer.innerHTML = "<h3> Last Call <h3>" 
        p = artistContainer.innerHTML += "<p> Lil Tecca <p>" 
        imgAlbum.setAttribute("src", "assets/images/Virgo World.jpg")
    }
    music.setAttribute("src", musicSrc)

    playPause()
}


function playPause(){
    let bttn = document.getElementById("buttonPlayPause")

    if(music.paused){
        music.play()
        bttn.setAttribute("src", "assets/images/pinkpause.png")
    }
    else if(music.played){
        music.pause()
        bttn.setAttribute("src", "assets/images/play-button.png")
    }
}


function skipTrack(){
    if(id < 11){
        id++;
    }
    else{
        id = 1;
    }
    idTrack();
}


function backTrack(){
    if(id > 1){
        id--;
    }
    else{
        id = 11;
    }
    idTrack();
}

function repita(){
    let repeat = document.getElementById("repeat");

    if(music.loop == true){
        music.loop = false;
        repeat.setAttribute("src", "assets/images/repetir.png");
    }
    else{
        music.loop = true;
        repeat.setAttribute("src", "assets/images/pinkrepeat.png");
    }

}

function aumentar(){
    music.playbackRate += 0.5;
}

function diminuir(){
    music.playbackRate -= 0.5;
}

function vol(){
    let vol = document.getElementById("volRange")
    let volValue = vol.value;
    let color = 'linear-gradient(90deg, rgb(231, 109, 131)' + volValue + '%, rgb(214, 214, 214)' + volValue + '%)'
    vol.style.background = color
    music.volume = volValue/100

    if(volValue <= 30){
        volButton.setAttribute("src", "assets/images/vol-baixo.png")
    }
    else if(volValue <= 70){
        volButton.setAttribute("src", "assets/images/vol-medio.png")
    }
    else{
        volButton.setAttribute("src", "assets/images/vol-alto.png")
    }
}

function mutar(){
    let vol = document.getElementById("volRange")
    if(music.muted == false){
        music.muted = true
        vol.style.opacity = "0"
        vol.style.transition = 0
        volButton.setAttribute("src", "assets/images/muted.png")
    }
    else{
        music.muted = false
        vol.style.opacity = "1"
        vol()
    }
}