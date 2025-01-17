// 图片数组
const images = [
  'img1.jpg',
  'img2.jpg'
];

// 获取图片元素
const randomImage = document.getElementById('randomImage');

// 初始随机选择一张图片并设置src属性
let currentIndex = Math.floor(Math.random() * images.length);
randomImage.src = images[currentIndex];

// 点击图片时切换到另一张图片
randomImage.addEventListener('click', () => {
  // 切换到下一张图片
  currentIndex = (currentIndex + 1) % images.length;
  randomImage.src = images[currentIndex];
});
