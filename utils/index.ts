export class Vector2D extends Array {
    constructor(x = 1, y = 0) {
      // @ts-ignore
      super(x, y);
    }
  
    set x(v) {
      this[0] = v;
    }
  
    set y(v) {
      this[1] = v;
    }
  
    get x() {
      return this[0];
    }
  
    get y() {
      return this[1];
    }
  
    get length() {
      return Math.hypot(this.x, this.y);
    }
  
    get dir() {
      return Math.atan2(this.y, this.x);
    }
  
    copy() {
      return new Vector2D(this.x, this.y);
    }
  
    add(v) {
      this.x += v.x;
      this.y += v.y;
      return this;
    }
  
    sub(v) {
      this.x -= v.x;
      this.y -= v.y;
      return this;
    }
  
    scale(a) {
      this.x *= a;
      this.y *= a;
      return this;
    }
  
    cross(v) {
      return this.x * v.y - v.x * this.y;
    }
  
    dot(v) {
      return this.x * v.x + v.y * this.y;
    }
  
    normalize() {
      return this.scale(1 / this.length);
    }
  
    rotate(rad: number) {
      const c = Math.cos(rad),
        s = Math.sin(rad);
      const [x, y] = this;
  
      this.x = x * c + y * -s;
      this.y = x * s + y * c;
  
      return this;
    }
}

export function get2DContext(selector: string) {
    return (document.querySelector(selector) as HTMLCanvasElement).getContext('2d');
}

export function drawPoints(points, selector, config?) {

  const ctx = typeof selector === 'string' ? get2DContext(selector) : selector;

  ctx.beginPath();

  // @ts-ignore
  ctx.moveTo(...points[0]);

  points.slice(1).forEach(point => {
      // @ts-ignore
      ctx.lineTo(...point);
  });

  ctx.strokeStyle = config?.strokeStyle || '#f40';

  ctx.closePath();
  ctx.fillStyle = config?.fillStyle || '#f40';
  ctx.fill('evenodd');
}

export function parametric(xFunc, yFunc) {
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

function isPointInPath(ctx, x, y) {
  
}