import { get2DContext, drawPoints } from 'utils/index';

const ctx = get2DContext('.canvas-1');
const ctx2 = get2DContext('.canvas-2');

ctx.translate(250, 250);
ctx.scale(1, -1);

ctx2.translate(250, 250);
ctx2.scale(1, -1);

const TAU_SEGMENTS = 60;
const TAU = Math.PI * 2;

function getEllipse(x0, y0, radiusX, radiusY, startAng = 0, endAng = Math.PI * 2) {
    const ang = Math.min(TAU, endAng - startAng);
    const ret = ang === TAU ? [] : [[x0, y0]];
    const segments = Math.round(TAU_SEGMENTS * ang / TAU);

    for (let i = 0; i <= segments; i++) {
        const x = x0 + radiusX * Math.cos(startAng + ang * i / segments);
        const y = y0 + radiusY * Math.sin(startAng + ang * i / segments);

        ret.push([x, y]);
    }

    return ret;
}

function getParabola(x0, y0, p, min, max) {
    const ret = [];
    for(let i = 0; i <= TAU_SEGMENTS; i++) {
        const s = i / 60;
        const t = min * (1 - s) + max * s;
        const x = x0 + 2 * p * t ** 2;
        const y = y0 + 2 * p * t;

        ret.push([x, y]);
    }

    return ret;
}

drawPoints(getEllipse(0, 0, 100, 50), '.canvas-1');

drawPoints(getParabola(0, 0, 5.5, -10, 10), '.canvas-1');

function parametric(xFunc, yFunc) {
    return function (start, end, seg = 100, ...arg) {
        const points = [];

        for (let i = 0; i <= seg; i++) {
            const p = i / seg;
            const t = start * (1 - p) + end * p;
            const x = xFunc(t, ...arg);
            const y = yFunc(t, ...arg);

            points.push([x, y]);
        }

        return {
            points,
            draw: drawPoints.bind(null, points)
        }
    }
}

const para = parametric(t => 25 * t, t => 25 * t ** 2);

para(-5.5, 5.5).draw('.canvas-2');

const heli = parametric(
    (t, l) => l * t * Math.cos(t),
    (t, l) => l * t * Math.sin(t)
)

heli(0, 50, 500, 5).draw('.canvas-2');

const star = parametric(
    (t, l) => l * Math.cos(t) ** 3,
    (t, l) => l * Math.sin(t) ** 3
)
star(0, Math.PI * 2, 50, 150).draw('.canvas-2');

const sin = parametric(
    t => t * 10,
    t => Math.sin(t) * 10
);

sin(0, Math.PI * 3).draw('.canvas-2', { strokeStyle: 'blue' });