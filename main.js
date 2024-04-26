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
    image(webcam,0,0,500,500)
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