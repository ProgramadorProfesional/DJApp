song = "";
score_right = 0;
score_left = 0;
right_wrist_x = 0;
right_wrist_y = 0;
left_wrist_x = 0;
left_wrist_y = 0;
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
    PoseNet = ml5.poseNet(webcam, modelLoaded);
    PoseNet.on("pose", gotPoses)
}
function draw()
{
    image(webcam,0,0,500,500);
    fill("orange");
    stroke("orange");
    // Configuracion del volumen
    if(score_left > 0.1000000000000000000000000000000000000000000000000000000)
    {
        circle(left_wrist_x, left_wrist_y, 21);
        valor_y = Number(left_wrist_y);
        valor_y_rounded = floor(valor_y*2);
        volume = valor_y_rounded/1000;
        document.getElementById("volume").innerHTML = "Volume = " + volume;
	    song.setVolume(volume);
    }
    //Configuracion de velocidad
    if(score_right > 0.1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
    {
        circle(right_wrist_x, right_wrist_y, 25);
        if(right_wrist_y > 0 && right_wrist_y <= 100 )
        {
            document.getElementById("Velocidad").innerHTML = "SPEED= 4x";
            song.rate(4);
        }
        else if(right_wrist_y > 100 && right_wrist_y <= 200 )
        {
            document.getElementById("Velocidad").innerHTML = "SPEED= 3x";
            song.rate(3);
        }
        else if(right_wrist_y > 200 && right_wrist_y <= 300 )
        {
            document.getElementById("Velocidad").innerHTML = "SPEED= 2x";
            song.rate(2);
        }
        else if(right_wrist_y > 300 && right_wrist_y <= 400 )
        {
            document.getElementById("Velocidad").innerHTML = "SPEED= 1x";
            song.rate(1.5);
        }
        else if(right_wrist_y > 400)
        {
            document.getElementById("Velocidad").innerHTML = "SPEED= 0.5x";
            song.rate(0.5);
        }
    }
}
function modelLoaded()
{
    console.log("PoseNet loaded");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
    score_right = results[0].pose.keypoints[10].score;
    score_left = results[0].pose.keypoints[9].score;
    console.log("Score right:"+score_right);
    console.log("Score left:"+score_left);
    right_wrist_x = results[0].pose.rightWrist.x;
    right_wrist_y = results[0].pose.rightWrist.y;
    console.log("X rightWrist:"+right_wrist_x);
    console.log("Y rightWrist :"+right_wrist_y);
    left_wrist_x = results[0].pose.leftWrist.x;
    left_wrist_y = results[0].pose.leftWrist.y;
    console.log("X leftWrist:"+left_wrist_x);
    console.log("Y leftWrist :"+left_wrist_y);
    }
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