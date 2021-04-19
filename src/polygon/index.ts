import { get2DContext, drawPoints, Vector2D } from 'utils/index';

// 三角剖分库
import earcut from 'earcut';

const ctx = get2DContext('.canvas-1');
const ctx2 = get2DContext('.canvas-2');
const canvas2 = document.querySelector('.canvas-2');

ctx.scale(1, -1);

ctx.save();

// 构造五个顶点
const points = [new Vector2D(0, 100)];

for (let i = 1; i <= 4; i++) {
    const p = points[0].copy().rotate(i * Math.PI * 0.4);

    points.push(p);
}

const polygon = [
    ...points
];


ctx.translate(128, -100);

drawPoints(polygon, ctx);

ctx.restore();

ctx.save();
ctx.translate(3 * 128, -100);

const star = [
    points[0],
    points[2],
    points[4],
    points[1],
    points[3]
];

drawPoints(star, ctx);
ctx.restore();


// 多边形顶点
const vertices = [
    [-0.7, 0.5],
    [-0.4, 0.3],
    [-0.25, 0.71],
    [-0.1, 0.56],
    [-0.1, 0.13],
    [0.4, 0.21],
    [0, -0.6],
    [-0.3, -0.3],
    [-0.6, -0.3],
    [-0.45, 0.0],
];

ctx2.translate(250, 250);
ctx2.scale(1, -1);
drawPoints(vertices.map(item => item.map(i => i * 100)), ctx2);

const {left, top} = canvas2.getBoundingClientRect();

canvas2.addEventListener('mousemove', (evt) => {
    const {x, y} = evt;
    // 坐标转换 
    const offsetX = x - left;
    const offsetY = y - top;
    ctx2.clearRect(-256, -256, 512, 512);
    if(ctx2.isPointInPath(offsetX, offsetY)) {
        drawPoints(vertices.map(item => item.map(i => i * 100)), ctx2, { fillStyle: 'blue' });
    } else {
        drawPoints(vertices.map(item => item.map(i => i * 100)), ctx2, { fillStyle: 'red' });
    }});