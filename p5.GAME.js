// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */
let gameStarted = false;

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

function startGame() {
  if (!gameStarted) {
    // 开始游戏的初始化逻辑放在这里
    ready = true;
    gameStarted = true;
    lastPush = millis();
    select("#status").html("游戏中");
  } else {
    // 游戏已经结束，重置游戏状态和相关变量
    gameStarted = false;
    ready = false;
    intervalToPush = 3000;
    missed = 0;
    points = 0;
    // 其他变量的重置...

    // 清空计时器数组
    timerHolder = [];

    // 重新启动 PoseNet 模型
    poseNet = ml5.poseNet(video, posePara, modelReady);
    poseNet.on("pose", function(results) {
      poses = results;
      select("#status").html("暂停");
    });
  }
}



function setup() {
  createCanvas(640, 480);
  ready = false;
  intervalToPush = 3000;
  missed = 0;
  points = 0;

  // 创建 button 并设置点击事件
  let button = document.getElementById('startButton');
  button.addEventListener('click', startGame);

  video = createCapture(VIDEO);
  video.size(width, height);

  poseNet = ml5.poseNet(video, posePara, modelReady);
  poseNet.on("pose", function(results) {
    poses = results;
  });

  video.hide();
  for (let i = 0; i < 5; i++) {
    timers.push(new Timer(random(3000, 5000)));
  }
}

function windowResized() {
  resizeCanvas(640, 480);
}
p5.Element.prototype.center = function () {
  this.position(windowWidth / 2 - this.width / 2, windowHeight / 2 - this.height / 2);
};

function modelReady() {
  select("#status").html("Model Loaded");
  //timer object
  timerHolder.push(new Timer(random(3000, 5000)));
  lastPush = millis();
  ready = true;
}

function draw() {
  if (gameStarted) {
    background(0); // 清空画布

    for (let timer of timers) {
      if (timer.update()) {
        timer.display();
      }
    }

    push();
    translate(width, 0);
    scale(-1, 1);
    image(video, 0, 0, width, height);
    pop();

 


    let mx, my;
    if (poses.length > 0) {
      let pose = poses[0].pose;
      let nose = pose.nose;
      fill(255);
      ellipse(nose.x, nose.y, 30, 30);
      mx = nose.x;
      my = nose.y;
    } else {
      mx = -100;
      my = -100;
    }

    if (ready) {
      if (millis() - lastPush >= intervalToPush) {
        timerHolder.push(new Timer(random(3000, 5000)));
        lastPush = millis();
        intervalToPush -= 1;
      }

      for (let i = timerHolder.length - 1; i >= 0; i--) {
  if (timerHolder[i].update()) {
    timerHolder[i].display();
    let point = timerHolder[i].checkTouch(mx, my);
    if (point >= 0) {
      points += point;
      timerHolder.splice(i, 1);
    }
  } else {
    timerHolder.splice(i, 1);
    missed++;
    for (let i = timerHolder.length - 1; i >= 0; i--) {
      if (timerHolder[i].update()) {
        timerHolder[i].display();
        let result = timerHolder[i].checkTouch(mx, my);
        if (result.score >= 0) {
          points += result.score;
          timerHolder.splice(i, 1);
          
          // 在碰撞成功时调用新函数，将被碰撞图像添加到旁边容器
          displayCorrectImage(result.timer.timerImages[result.timer.currentImageIndex]);
        }
      } else {
        timerHolder.splice(i, 1);
        missed++;
      }
    }
  }
  // 处理定时器数组
for (let i = timerHolder.length - 1; i >= 0; i--) {
  if (timerHolder[i].update()) {
    timerHolder[i].display();
    let point = timerHolder[i].checkTouch(mx, my);
    if (point >= 0) {
      points += point;
      timerHolder.splice(i, 1);
    }
  } else {
    timerHolder.splice(i, 1);
    missed++;
    for (let i = timerHolder.length - 1; i >= 0; i--) {
      if (timerHolder[i].update()) {
        timerHolder[i].display();
        let result = timerHolder[i].checkTouch(mx, my);
        if (result.score >= 0) {
          points += result.score;
          timerHolder.splice(i, 1);

          // 在碰撞成功时调用新函数，将被碰撞图像添加到旁边容器
          displayCorrectImage(result.timer.timerImages[result.timer.currentImageIndex]);
        }
        
      } else {
        timerHolder.splice(i, 1);
        missed++;
      }
      
    }
  }
}

}

      fill(255);
      noStroke();
      textSize(12);
      textAlign(LEFT, BASELINE);
      //text("MISSED: " + missed, 20, 40);
      text("找到的笔画数量: " + points, 20, 60);

      if (missed >= 10) {
        gameStarted = false;
        ready = true; // 防止游戏结束后再次开始
        // 游戏结束逻辑...
      }
      
    }
  } else {
    background(188,154,255,10); // 清空画布
    fill(0);
    noStroke();
    textSize(16);
    textAlign(CENTER, CENTER);
    text("Click 'Start Game' to begin", width / 2, height / 2);
  }
}