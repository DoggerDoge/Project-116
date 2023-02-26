noseX = 0;
noseY = 0;

function preload() {
    mustache = loadImage('mustache.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet Is Initialised");
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    image(mustache, noseX, noseY, 60, 60);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-30;
        noseY = results[0].pose.nose.y-5;
    }
}

function snapshot() {
    save('myPhoto.png');
}