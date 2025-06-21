
const button = document.querySelector('.b1');
const hoversound = new Audio("evil-laugh-89423.mp3");
const clicksound = new Audio("click-47609.mp3");
const page = document.querySelector('.page');
const bgaudio = document.getElementById("bg-music");

bgaudio.volume = 0.25;
button.addEventListener('mouseenter', () => {
    page.style.backgroundImage = 'url("people2.png")';
    hoversound.currentTime = 0;
    hoversound.volume = 1;
    hoversound.play();
    bgaudio.volume = 0.05;
});
button.addEventListener('mouseleave', () =>{
    page.style.backgroundImage = 'url("people.png")';
    bgaudio.volume = 0.25;
});
button.addEventListener('mousedown', () =>{
    clicksound.currentTime = 0;
    clicksound.play();
});
lottie.loadAnimation({
    container: document.getElementById('ani1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'heartup.json' 
})
