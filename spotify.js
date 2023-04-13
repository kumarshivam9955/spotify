
// // intialize the variable*******************
// let songIndex =0;
// let audioElement = new Audio('mi-amor.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let songs =[ 
//     {songName: "MI-AMOR BY SHARN", filePath: "spotify/mi-amor.mp3", coverPath: "spotify/cover.jpg"}
//     // {songName: "SPAIN BY JASS ", filePath: "spotify/spain.mp3", coverPath: "spotify/cover.jpg"}*************
//     // {songName: "UCHA LAMBA KAD", filePath: "spotify/uchalamba.mp3", coverPath: "spotify/cover.jpg"}***********
//     // {songName: "ZARA-ZARA BEKHTA", filePath: "spotify/zara-zara.mp3", coverPath: "spotify/cover.jpg"}**********
//     // {songName: "LEVEL BY SIDDHU", filePath: "spotify/level.mp3", coverPath: "spotify/cover.jpg"}***************
//     // {songName: "MI-AMOR BY SHARN", filePath: "spotify/mi-amor.mp3", coverPath: "spotify/cover.jpg"}*************
//  ]
// //  audioElement.play();****************


// // handle play/pause click****************
// masterPlay.addEventListener('click',()=>{
//     if(audioElement.pause || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.add('fa-play-circle');
//         masterPlay.classList.remove('fa-pause-circle');
//         gif.style.opacity = 0;
//     }
// })
//  // Listen to Events11***********************
// audioElement.addEventListener('timeupdate', ()=>{
//     console.log('timeupdate');
//    // update seekbar22*****************************
//    Progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
//    myProgressBar.value = progress;
// })
// myProgressBar.addEventListener('change',()=>{
//     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
// })





// new code for html jss stripoy********************************new code for backendin spotify****************************************
 
console.log("welcome to spotify"); 

let songIndex = 0;
let audioElement = new Audio('mi-amor.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs = [
    {songName: "mi-amor by sharn", filePath: "spotify/mi-amor.mp3", coverPath: "spotify/cover.jpg" },
    {songName: "daru party", filePath: "spotify/daru.mp3", coverPath: "spotify/darucvr.jpg" },
    {songName: "memory by justin", filePath: "spotify/mamory.mp3", coverPath: "spotify/memorycvr.jpg" },
    {songName: "snap song", filePath: "spotify/snap.mp3", coverPath: "spotify/snapcvr.jpg" },
    {songName: "zara-zara bekhta hai", filePath: "spotify/zara.mp3", coverPath: "spotify/bekhtacvr.jpg" },
    {songName: "uncha lamba kad", filePath: "spotify/ucha.mp3", coverPath: "spotify/unchacvr.jpg" },
    {songName: "galiyan by vilen", filePath: "spotify/galiyan.mp3", coverPath: "spotify/galiyancvr.jpg" },
    {songName: "level by siddhu moosela", filePath: "spotify/level.mp3", coverPath: "spotify/levelcvrSS.jpg" },
]
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate' , ()=>{
    console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
        Element.classList.remove('fa-pause-circle');
        Element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
    })
})

