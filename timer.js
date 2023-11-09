let images = []; // 图像数组
let totalImages = 5; // 图像的总数量

function preload() {
  // 预加载多张图片
  for (let i = 0; i < totalImages; i++) {
    images[i] = loadImage('pic/timer_image' + i + '.png'); // 请根据实际文件名替换
  }
}

class Timer {
  constructor(life) {
    this.x = random(50, width - 50);
    this.y = random(50, height - 50);
    this.life = life;
    this.begin = millis();
    this.lifeLeft = life;
    this.timerImages = images; // 图像数组
    this.currentImage = floor(random(images.length)); // 随机选择一个图像
  }

  update() {
    let timeLapsed = millis() - this.begin;
    this.lifeLeft = this.life - timeLapsed;
    if (this.lifeLeft > 0) {
      return true;
    }
    return false;
  }

  display() {
    // 绘制当前图像
    image(this.timerImages[this.currentImage], this.x - 25, this.y - 25, 100, 100);

    // 绘制倒计时
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(nf(this.lifeLeft / 1000, 1, 1), this.x+20, this.y+20);
  }

  checkTouch(mx, my) {
    if (dist(mx, my, this.x, this.y) < 25) {
      return int(this.lifeLeft / 1000);
    }
    return -1;
  }
}

let timers = [];