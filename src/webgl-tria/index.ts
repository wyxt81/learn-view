import earcut from 'earcut';

// 1、创建webgl上下文
const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

// 2、创建webgl程序

// 首先创建两个着色器

// 顶点着色器 => 处理顶点的GPU代码
const vertex = `
    attribute vec2 position;
    varying vec3 color;

    void main() {
        gl_PointSize = 1.0;
        color = vec3(0.5 + position * 0.5, 0.0);
        gl_Position = vec4(position * 0.5, 1.0, 1.0);
    }
`;

// 片元着色器 => 处理光栅化后的像素信息
// gl_FragColor定义和改变图形的颜色
// vec4(0.0, 0.0, 1.0, 1.0) rgba 控制颜色
const fragment = `
    precision mediump float;
    varying vec3 color;

    void main()
    {
        gl_FragColor = vec4(150, 50, 0, 1.0);
    }
`;

// 将顶点着色器和片元着色器分别创建成shader对象
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertex);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragment);
gl.compileShader(fragmentShader);

// 创建WebGLProgram对象，并将两个shader关联到WebGL程序上
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

// 通过useProgram选择启用这个WebGLProgram对象。这样，当我们绘制图形时，GPU就会通过WebGLProgram设定的两个Shader程序了
gl.useProgram(program);

// 3、将数据存入缓冲区

// 定义类型化数组
// const points = new Float32Array([
//     -1, 0,
//     0, 1,
//     1, 0,
//     0, -1
// ]);

// 将定义好的数据写入WebGL缓冲区
// const bufferId = gl.createBuffer();
// gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
// gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);

// 将buffer的数据绑定给顶点着色器的position变量
// const vPosition = gl.getAttribLocation(program, 'position'); // 获取顶点着色器position变量的地址
// gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0); // 给变量设置长度和类型
// gl.enableVertexAttribArray(vPosition); // 激活这个变量

// 4、执行着色器程序完成绘制
// gl.clear(gl.COLOR_BUFFER_BIT);
// gl.drawArrays(gl.LINE_LOOP, 0, points.length / 2);

const point1 = new Float32Array([
    -1, -1,
    0, -1,
    1, -1
]);

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

const flatVertices = vertices.flat();
const triangles = earcut(flatVertices);

console.log(triangles);

const position = new Float32Array(flatVertices);
const cell = new Uint16Array(triangles);


const pointBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, pointBuffer);
gl.bufferData(gl.ARRAY_BUFFER, position, gl.STATIC_DRAW);

const vPosition = gl.getAttribLocation(program, 'position');
gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vPosition);

const cellBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cellBuffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, cell, gl.STATIC_DRAW);

gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawElements(gl.LINE_STRIP, cell.length, gl.UNSIGNED_SHORT, 0);