// ===========================
// MUSIC
// ===========================

const playButton = document.getElementById("playButton");
const music = document.getElementById("music");

let isPlaying = false;

playButton.onclick = function(){

    if(!isPlaying){

        music.play();

        playButton.innerHTML="⏸️ Jeda Musik";

        isPlaying=true;

    }else{

        music.pause();

        playButton.innerHTML="🎵 Putar Kenangan";

        isPlaying=false;

    }

}

// ===========================
// NAVBAR
// ===========================

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        nav.classList.add("active");

    }else{

        nav.classList.remove("active");

    }

});

// ===========================
// GALLERY
// ===========================

const images=document.querySelectorAll(".container img");

const viewer=document.createElement("div");

viewer.id="viewer";

viewer.innerHTML=`
<span id="close">&times;</span>
<img id="viewerImg">
`;

document.body.appendChild(viewer);

const viewerImg=document.getElementById("viewerImg");

images.forEach(img=>{

    img.onclick=function(){

        viewer.style.display="flex";

        viewerImg.src=this.src;

    }

});

document.getElementById("close").onclick=function(){

    viewer.style.display="none";

}// ======================
// BACK TO TOP
// ======================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}// ===========================
// LOADING
// ===========================

window.onload=function(){

    setTimeout(()=>{

        document.getElementById("loader").style.opacity="0";

        setTimeout(()=>{

            document.getElementById("loader").style.display="none";

        },1000);

    },2200);

}