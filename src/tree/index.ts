import { Vector2D, get2DContext, drawPoints } from 'utils/index';

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

drawPoints(getShapes(4, 40, 40, 20), '.canvas-1');
// drawPoints(getShapes(60, 110, 50, 10));

// 向量画圆
// 生成一系列圆的顶点
const TAU_SEGMENTS = 120;
const TAU = Math.PI * 2;

function arc(x, y, radius, startAng = 0, endAng = Math.PI * 2) {
    const ang = Math.min(TAU, endAng - startAng);
    const ret = ang === TAU ? [] : [[x, y]];
    const segments = Math.round(TAU_SEGMENTS * ang / TAU);
    for(let i = 0; i <= segments; i++) {
        const x0 = x + radius * Math.cos(startAng + ang * i / segments);
        const y0 = y + radius * Math.sin(startAng + ang * i / segments);

        ret.push([x0, y0]);
    }

    return ret;
}

drawPoints(arc(100, 100, 50), '.canvas-2');

console.log(arc(150, 150, 50, 0, Math.PI / 2));

drawPoints(arc(150, 150, 50, 0, Math.PI / 2), '.canvas-2');