song = "";
function preload()
{
    song = loadSound('https://amdavalos.github.io/ProyectoADVC55/shape_of_you_best.mp3');
}
function setup()
{
    canvas = createCanvas(500,500);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
}
function draw()
{
    image(webcam,0,0,500,500)
}
function Play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function Pause()
{
    song.pause();
}
function Stop()
{
    song.stop();
}