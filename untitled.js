// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];
let posePara = {
  architecture: 'MobileNetV1',
  imageScaleFactor: 0.3,
  outputStride: 16,
  flipHorizontal: true,
  minConfidence: 0.5,
  maxPoseDetections: 1,
  scoreThreshold: 0.5,
  nmsRadius: 20,
  detectionType: 'multiple',
  inputResolution: 513,
  multiplier: 0.75,
  quantBytes: 2,
};

//game controllers
let ready;
let timerHolder = [];
let lastPush;
let intervalToPush;
let points;
let missed;

// 加载你的图像
let img;
function preload() {
  img = loadImage('your-image.jpg'); // 请替换成你的本地图像路径
}

function setup() {
  createCanvas(640, 480);
  ready = false;
  intervalToPush = 3000;
  missed = 0;
  points = 0;
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, posePara, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on("pose", function(results) {
    poses = results;
    //console.log(poses);
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select("#status").html("Model Loaded");
  //timer object
  timerHolder.push(new Timer(random(3000, 5000)));
  lastPush = millis();
  ready = true;
}

function draw() {
  // flip the camera horizontally
  push();
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0, width, height);
  pop();

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();

  // get body parts
  let mx, my;
  if (poses.length > 0) {
    let pose = poses[0].pose;
    let nose = pose.nose;
    // 使用本地图像代替圆球
    image(img, nose.x - 30, nose.y - 30, 60, 60); // 调整图像大小和位置
    mx = nose.x;
    my = nose.y;
  } else {
    mx = -100;
    my = -100;
  }

  // 其余的游戏内容保持不变
}

// 以下是之前的函数，没有修改
function drawKeypoints() {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i += 1) {
    // For each pose detected, loop through all the keypoints
    const pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j += 1) {
      const keypoint = pose.keypoints[j];
      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}

function drawSkeleton() {
  for (let i = 0; i < poses.length; i += 1) {
    const skeleton = poses[i].skeleton;
    for (let j = 0; j < skeleton.length; j += 1) {
      const partA = skeleton[j][0];
      const partB = skeleton[j][1];
      stroke(255, 0, 0);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}
