let images = []; // 图像数组
let totalImages = 5; // 图像的总数量


function preload() {
  // 预加载多张图片
  for (let i = 0; i < totalImages; i++) {
    images[i] = loadImage('pic/timer_image' + i + '.png'); // 请根据实际文件名替换
    images[i].localPath = 'pic/timer_image' + i + '.png';
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
    this.currentImage = floor(random(images.length)); 
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
     image(this.timerImages[this.currentImage], this.x - 25, this.y - 25, 150, 150);
    
    // 绘制倒计时
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(nf(this.lifeLeft / 1000, 1, 1), this.x + 50, this.y + 50);
  }

    displayCorrectImage(image) {
  // 创建一个图像元素并设置其属性
  let imgElement = document.createElement("img");
  imgElement.src = this.timerImages[this.currentImage].localPath;
  imgElement.width = 200; // 设置图像宽度
  imgElement.height = 200; // 设置图像高度
  imgElement.style.position = "absolute"; // 使用绝对定位
  imgElement.style.top = "142px"; // 设置距离顶部的位置
  imgElement.style.left = "50px"; // 设置距离左侧的位置

  // 将图像元素添加到页面旁边的容器中
  let container = document.getElementById("imageContainer");
  container.appendChild(imgElement);
}

  checkTouch(mx, my) {
    // 扩大碰撞范围
    if (dist(mx, my, this.x, this.y) < 80) {
      
        this.displayCorrectImage();
        // 如果是正确图像，返回得分
        return int(this.lifeLeft / 1000);
        return score;
      
    }
    return -1;
  }


}

let timers = [];
