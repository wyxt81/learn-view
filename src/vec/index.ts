const canvas1: HTMLCanvasElement = document.querySelector('.canvas-1');
const ctx1 = canvas1.getContext('2d');

// 未转换坐标的情况下，需要自己计算出每个坐标点
ctx1.moveTo(76, 256);
ctx1.lineTo(176, 156);
ctx1.lineTo(276, 256);
ctx1.strokeStyle = 'red';
ctx1.stroke();

ctx1.beginPath();
ctx1.moveTo(236,256);
ctx1.lineTo(336, 156);
ctx1.lineTo(436, 256);
ctx1.strokeStyle = 'yellow';
ctx1.stroke();

ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.strokeStyle = '#f40';
ctx1.arc(256, 106, 90, 0, Math.PI * 2, false);
ctx1.stroke();

// 转换坐标的画法

const canvas2: HTMLCanvasElement = document.querySelector('.canvas-2');
const ctx2 = canvas2.getContext('2d');
// 先保存状态
ctx2.save();

// 然后做坐标轴转换处理
// 将原坐标原点移动到画布底部中点处
ctx2.translate(256, 256);
// 通过scale将y轴沿着x轴反转180度
ctx2.scale(1, -1);

//第一个山的坐标变为-180 0，-80 100 和 20 0
ctx2.beginPath();
ctx2.moveTo(-180, 0);
ctx2.lineTo(-80, 100);
ctx2.lineTo(20, 2);
ctx2.strokeStyle = 'red';
ctx2.stroke();

// 第二个山的坐标变为-20 0，80 100和180 0
ctx2.beginPath();
ctx2.moveTo(-20, 0);
ctx2.lineTo(80, 100);
ctx2.lineTo(180, 0);
ctx2.strokeStyle = 'yellow';
ctx2.stroke();

// 圆心坐标变为0 150
ctx2.beginPath();
ctx2.arc(0, 150, 90, 0, 2 * Math.PI * 3 / 4, false);
ctx2.strokeStyle = '#666';
ctx2.lineWidth = 4;
ctx2.fillStyle = '#f40';
ctx2.fill();
ctx2.closePath();
ctx2.stroke();


ctx2.fillStyle = 'blue';
ctx2.font = '16px bold';
ctx2.textAlign = 'center';
ctx2.textBaseline = 'middle';
ctx2.fillText('0°', 0, 160 + 90);

// 恢复之前保存度状态，即变形之前度状态
ctx2.restore();

ctx2.beginPath();
ctx2.moveTo(-180, 0);
ctx2.lineTo(-80, 100);
ctx2.lineTo(20, 2);
ctx2.strokeStyle = 'red';
ctx2.stroke();


