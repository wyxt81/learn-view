import { get2DContext, drawPoints } from 'utils/index';

const ctx = get2DContext('.canvas-1');

ctx.translate(250, 250);
ctx.scale(1, -1);

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