import { Vector2D, get2DContext } from 'utils/index';

const ctx = get2DContext('.canvas-1');

ctx.translate(0, 256);
ctx.scale(1, -1);
ctx.lineCap = 'round';

/**
 * @description 画树枝的函数
 * @param {CanvasRenderingContext2D} ctx canvas 2d 上下文
 * @param {*} v0 向量
 * @param {*} length 长度
 * @param {*} thickness 树枝粗细      
 * @param {*} dir 树枝方向 与 x轴夹角 弧度
 * @param {*} bias 随机偏向因子
 */
function drawBranch(ctx: CanvasRenderingContext2D, v0, length, thickness, dir, bias) {
    const v =  new Vector2D().rotate(dir).scale(length);

    const v1 = v0.copy().add(v);

    ctx.beginPath();
    ctx.lineWidth = thickness;
    ctx.moveTo(...(v0 as [number, number]));
    ctx.lineTo(...(v1 as [number, number]));
    ctx.stroke();

    if (thickness > 2) {
        const left = Math.PI / 4 + 0.5 * (dir + 0.2) + bias * (Math.random() - 0.5);;
        drawBranch(ctx, v1, length * 0.9, thickness * 0.8, left, bias * 0.9);
        const right = Math.PI / 4 + 0.5 * (dir - 0.2) + bias * (Math.random() - 0.5);;
        drawBranch(ctx, v1, length * 0.9, thickness * 0.8, right, bias * 0.9);
    }

    if(thickness < 5 && Math.random() < 0.3) {
        ctx.save();
        ctx.strokeStyle = '#c72c35';
        const th = Math.random() * 6 + 3;
        ctx.lineWidth = th;
        ctx.beginPath();
        ctx.moveTo(...(v1 as [number, number]));
        ctx.lineTo(v1.x, v1.y - 2);
        ctx.stroke();
        ctx.restore();
      }
}


ctx.clearRect(0, 0, 512, 256);
const v0 = new Vector2D(256, 0);
drawBranch(ctx, v0, 50, 8, Math.PI * 0.5, 3);

const p = [20, 30];
const r = [10, 5];
const q = [5, 5];

// 求点p 到 直线qr的距离 假设q为原点则
const p1 = [p[0] - q[0], p[1] - q[1]];
const r1 = [r[0] - q[0], r[1] - q[1]];

// 即求 两个向量的叉积/r1的长度

const len = Math.abs((p1[0] * r1[1] - p1[1] * r1[0]) / Math.hypot(...r1));

console.log(len);

function getShapes(shape, x, y, length) {
    const result = [];
    let v = new Vector2D(x, y);
    const dir = Math.PI * 2 / shape;
    const baseP = new Vector2D(length, 0);

    result.push(v);

    for (let i = 0; i < shape; i++) {
        v = v.copy().add(baseP.rotate(dir));
        result.push(v);
    }

    return result;
}

function drawPoints(points) {
    const ctx = get2DContext('.canvas-2');

    console.log(points);

    // @ts-ignore
    ctx.moveTo(...points[0]);

    points.slice(1).forEach(point => {
        // @ts-ignore
        ctx.lineTo(...point);
    });

    ctx.strokeStyle = '#f40';
    ctx.closePath();
    ctx.stroke();
}

drawPoints(getShapes(4, 40, 40, 20));
drawPoints(getShapes(60, 110, 50, 10));