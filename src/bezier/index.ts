import { get2DContext, parametric, Vector2D } from 'utils/index';

const ctx1 = get2DContext('.canvas-1');
const ctx2 = get2DContext('.canvas-2');

ctx1.translate(250, 250);
ctx1.scale(1, -1);

ctx2.translate(250, 250);
ctx2.scale(1, -1);

const quaBezier = parametric(
    (t, [{x: x0}, {x: x1}, {x: x2}]) => (1 - t) ** 2 * x0 + 2 * t * (1 - t) * x1 + t ** 2 * x2,
    (t, [{y: y0}, {y: y1}, {y: y2}]) => (1 - t) ** 2 * y0 + 2 * t * (1 - t) * y1 + t ** 2 * y2
);

const p0 = new Vector2D(0, 0);
const p1 = new Vector2D(100, 0);
p1.rotate(0.75);
const p2 = new Vector2D(200, 0);
const count = 30;

for (let i = 0; i < count; i++) {
    p1.rotate(2 / count * Math.PI);
    p2.rotate(2 / count * Math.PI);

    quaBezier(0, 1, 100, [p0, p1, p2]).draw('.canvas-2');
}

const cubBezier = parametric(
    (t, [{x: x0}, {x: x1}, {x: x2}, {x: x3}]) => (1 - t) ** 3 * x0 + 3 * (1 - t) ** 2 * t * x1 + 3 * (1 - t) * t ** 2 * x2 + t ** 3 * x3,
    (t, [{y: y0}, {y: y1}, {y: y2}, {y: y3}]) => (1 - t) ** 3 * y0 + 3 * (1 - t) ** 2 * t * y1 + 3 * (1 - t) * t ** 2 * y2 + t ** 3 * y3
)

const p3 = new Vector2D(0, 0);
const p4 = new Vector2D(100, 0);
p4.rotate(0.75);
const p5 = new Vector2D(150, 0);
p5.rotate(-0.75);
const p6 = new Vector2D(200, 0);

for (let i = 0; i < count; i++) {
    p4.rotate(2 / count * Math.PI);
    p5.rotate(2 / count * Math.PI);
    p6.rotate(2 / count * Math.PI);

    cubBezier(0, 1, 100, [p3, p4, p5, p6]).draw('.canvas-1');
}