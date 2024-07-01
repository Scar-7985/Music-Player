// ==================== FAVORITE - BUTTON ==================== //

function heart() {
    if (document.getElementById('heart').style.color == 'black') {
        document.getElementById('heart').style.color = 'red'
    } else {
        document.getElementById('heart').style.color = 'black'
    }
}

// ============================================  //


// ================= LIKED - DISLIKE- BUTTON ================= //

function Like() {
    if (document.getElementById('likeBtn').style.color == 'grey') {
        document.getElementById('likeBtn').style.color = 'black'
        document.getElementById('disLikeBtn').style.color = 'grey' // SWAP BTN from DisLike
    } else {
        document.getElementById('likeBtn').style.color = 'grey'
    }
}

function disLike() {
    if (document.getElementById('disLikeBtn').style.color == 'grey') {
        document.getElementById('disLikeBtn').style.color = 'black'
        document.getElementById('likeBtn').style.color = 'grey'  // SWAP BTN from Like
    } else {
        document.getElementById('disLikeBtn').style.color = 'grey'
    }
}


//  =================================================  //

let musicPlayer = true;
let audioPlayer = document.getElementById('audioPlayer');

// =====================================  //

let previousBtn = document.getElementById('previousBtn');
let playBtn = document.getElementById('playBtn');
let nextBtn = document.getElementById('nextBtn');

// =================== PLAY - PAUSE - BUTTON  ===================== //

playBtn.addEventListener('click', () => {
    // console.log(audioPlayer.duration);
    // console.log(audioPlayer.currentTime);
    if (musicPlayer) {
        playBtn.classList.replace('fa-play', 'fa-pause'); // Play - Pause - Button  //
        audioPlayer.play();
        musicPlayer = false;
    } else {
        playBtn.classList.replace('fa-pause', 'fa-play'); // Play - Pause - Button  //
        audioPlayer.pause();
        musicPlayer = true;
    }
})

// ============MUSIC - DATA - LIST============  //

const musicData = [
    {
        songName: 'Arijit-Singh-Mashup',
        path: './assets/mp3/Arijit.mp3',
        imagePath: './assets/img/Arijit Singh.jpg',
        artist: 'Arijit Singh',
    },
    {
        songName: 'Mera-Jahaan',
        path: './assets/mp3/Mera-Jahaan.mp3',
        imagePath: './assets/img/Gajendra.jpg',
        artist: 'Gajendra Verma',
    },
    {
        songName: 'Aaj bhi',
        path: './assets/mp3/Aaj Bhi - Vishal Mishra.mp3',
        imagePath: './assets/img/Aaj Bhi.jpg',
        artist: 'Vishal Mishra',
    }
]

// ==============================================  //

let musicName = document.getElementById('musicName');  // Update name of music
let Album = document.getElementById('Album');  // Update picture of music
let Artist = document.getElementById('artist'); // Update artist name
var musicIndex = 0;

function loadMusic(value) {
    musicName.innerHTML = value.songName;
    audioPlayer.src = value.path;
    Album.src = value.imagePath;
    Artist.innerHTML = value.artist
}

//  ===================== PREVIOUS - BUTTON ========================  //

previousBtn.addEventListener('click', () => {
    musicIndex = (musicIndex - 1 + musicData.length) % musicData.length;
    loadMusic(musicData[musicIndex]);
    // Play - ON - PreviousBtn  //
    playBtn.classList.replace('fa-play', 'fa-pause');
    audioPlayer.play();
    musicPlayer = false;
})

//  ==================== NEXT - BUTTON ==========================  //

nextBtn.addEventListener('click', () => {
    musicIndex = (musicIndex + 1) % musicData.length;
    loadMusic(musicData[musicIndex]);
    // Play - ON - nextBtn  //
    playBtn.classList.replace('fa-play', 'fa-pause');
    audioPlayer.play();
    musicPlayer = false;
})

//  =============================================================  //

//==================== RANGE - SLIDER ====================//

let range = document.getElementById('range');
let start_time = document.getElementById('start');
let end_time = document.getElementById('end');


// ========== //

audioPlayer.addEventListener('timeupdate', () => {
    const percent = audioPlayer.currentTime / audioPlayer.duration * 100;
    range.value = percent;
    // console.log(audioPlayer.currentTime);
    // console.log(audioPlayer.duration);

    // UPDATE - MUSIC - TIME //
    var s = parseInt(audioPlayer.duration % 60);
    var m = parseInt((audioPlayer.duration / 60) % 60);
    end_time.innerHTML = (`${m}:${s}`)

    var ss = parseInt(audioPlayer.currentTime % 60);
    var mm = parseInt((audioPlayer.currentTime / 60) % 60);
    start_time.innerHTML = (`${mm}:${ss}`)

    console.log(`${mm}:${ss}`)

    // UPDATE - MUSIC - TIME //
});