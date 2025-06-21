const bgmusic = document.getElementById("bg-audio");
const clicksound = new Audio("click-47609.mp3");
bgmusic.volume = 0.25;
clicksound.volume = 1.0;
const hovermusic2 = new Audio("nice-sound-effect-95595.mp3");
const hovermusic3 = new Audio("yeah-boy-114748.mp3");

const bt2 = document.querySelectorAll('.b2');
const bt3 = document.querySelectorAll('.b3');

bt2.forEach(button => {
    button.addEventListener('mouseenter', () => {
        hovermusic2.currentTime = 0;
        hovermusic2.play();
        bgmusic.volume = 0.05;
    });
    button.addEventListener('mouseleave', () => {
        bgmusic.volume = 0.25;
    });
    button.addEventListener('mousedown', () => {
        clicksound.currentTime = 0;
        clicksound.play();
        clicksound.volume = 1.0;
    });
});

bt3.forEach(button => {
    button.addEventListener('mouseenter', () => {
        hovermusic3.currentTime = 0;
        hovermusic3.play();
        bgmusic.volume = 0.05;
    });
    button.addEventListener('mouseleave', () => {
        bgmusic.volume = 0.25;
    });
    button.addEventListener('mousedown', () => {
        clicksound.currentTime = 0;
        clicksound.play();
        clicksound.volume = 1.0; 
    });
});
lottie.loadAnimation({
    container: document.getElementById('anim1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'heart.json' 
})
lottie.loadAnimation({
    container: document.getElementById('anim2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'clouds.json' 
})