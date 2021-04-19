// 时间  开盘 收盘 最低 最高
var dataArr = [
    ["2017/10/1", [2320.26,2302.6,2287.3,2362.94]], 
    ["2017/10/2", [2300,2291.3,2288.26,2308.38]], 
    ["2017/10/3", [2295.35,2346.5,2295.35,2346.92]], 
    ["2017/10/4", [2347.22,2358.98,2337.35,2363.8]], 
    ["2017/10/5", [2360.75,2382.48,2347.89,2383.76]], 
    ["2017/10/6", [2383.43,2385.42,2371.23,2391.82]], 
    ["2017/10/7", [2377.41,2419.02,2369.57,2421.15]], 
    ["2017/10/8", [2425.92,2428.15,2417.58,2440.38]],
    ["2017/10/9", [2411,2433.13,2403.3,2437.42]],
    ["2017/10/10", [2432.68,2434.48,2427.7,2441.73]],
    ["2017/10/11", [2430.69,2418.53,2394.22,2433.89]],
    ["2017/10/12", [2416.62,2432.4,2414.4,2443.03]],
    ["2017/10/13", [2441.91,2421.56,2415.43,2444.8]],
    ["2017/10/14", [2420.26,2382.91,2373.53,2427.07]],
    ["2017/10/15", [2383.49,2397.18,2370.61,2397.94]],
    ["2017/10/16", [2378.82,2325.95,2309.17,2378.82]],
    ["2017/10/17", [2322.94,2314.16,2308.76,2330.88]],
    ["2017/10/18", [2320.62,2325.82,2315.01,2338.78]],
    ["2017/10/19", [2313.74,2293.34,2289.89,2340.71]],
    ["2017/10/20", [2297.77,2313.22,2292.03,2324.63]],
    ["2017/10/21", [2322.32,2365.59,2308.92,2366.16]],
    ["2017/10/22", [2364.54,2359.51,2330.86,2369.65]],
    ["2017/10/23", [2332.08,2273.4,2259.25,2333.54]],
    ["2017/10/24", [2274.81,2326.31,2270.1,2328.14]],
    ["2017/10/25", [2333.61,2347.18,2321.6,2351.44]],
    ["2017/10/26", [2340.44,2324.29,2304.27,2352.02]],
    ["2017/10/27", [2326.42,2318.61,2314.59,2333.67]],
    ["2017/10/28", [2314.68,2310.59,2296.58,2320.96]],
    ["2017/10/29", [2309.16,2286.6,2264.83,2333.29]],
    ["2017/10/30", [2282.17,2263.97,2253.25,2286.33]], 
    ["2017/11/1", [2320.26,2302.6,2287.3,2362.94]],
    ["2017/11/2", [2300,2291.3,2288.26,2308.38]], 
    ["2017/11/3", [2295.35,2346.5,2295.35,2346.92]], 
    ["2017/11/4", [2347.22,2358.98,2337.35,2363.8]], 
    ["2017/11/5", [2360.75,2382.48,2347.89,2383.76]], 
    ["2017/11/6", [2383.43,2385.42,2371.23,2391.82]], 
    ["2017/11/7", [2377.41,2419.02,2369.57,2421.15]], 
    ["2017/11/8", [2425.92,2428.15,2417.58,2440.38]],
    ["2017/11/9", [2411,2433.13,2403.3,2437.42]],
    ["2017/11/10", [2432.68,2434.48,2427.7,2441.73]],
    ["2017/11/11", [2430.69,2418.53,2394.22,2433.89]],
    ["2017/11/12", [2416.62,2432.4,2414.4,2443.03]],
    ["2017/11/13", [2441.91,2421.56,2415.43,2444.8]],
    ["2017/11/14", [2420.26,2382.91,2373.53,2427.07]],
    ["2017/11/15", [2383.49,2397.18,2370.61,2397.94]],
    ["2017/11/16", [2378.82,2325.95,2309.17,2378.82]],
    ["2017/11/17", [2322.94,2314.16,2308.76,2330.88]],
    ["2017/11/18", [2320.62,2325.82,2315.01,2338.78]],
    ["2017/11/19", [2313.74,2293.34,2289.89,2340.71]],
    ["2017/11/20", [2297.77,2313.22,2292.03,2324.63]],
    ["2017/11/21", [2322.32,2365.59,2308.92,2366.16]],
    ["2017/11/22", [2364.54,2359.51,2330.86,2369.65]],
    ["2017/11/23", [2332.08,2273.4,2259.25,2333.54]],
    ["2017/11/24", [2274.81,2326.31,2270.1,2328.14]],
    ["2017/11/25", [2333.61,2347.18,2321.6,2351.44]],
    ["2017/11/26", [2340.44,2324.29,2304.27,2352.02]],
    ["2017/11/27", [2326.42,2318.61,2314.59,2333.67]],
    ["2017/11/28", [2314.68,2310.59,2296.58,2320.96]],
    ["2017/11/29", [2309.16,2286.6,2264.83,2333.29]],
    ["2017/11/30", [2282.17,2263.97,2253.25,2286.33]]
];

class getCharts {
    box: HTMLElement;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    containerWidth: number;
    containerHeight: number;
    cMargin: number =  30;
    cSpace = 40;
    cHeight: number;
    cWidth: number;
    originX: number;
    originY: number;
    showData: any[];
    data: any[];
    showLength = 1 / 2;
    totalBar: number;
    barWidth: number;
    barMargin: number;
    maxValue: number = 0;
    minValue: number = 99999999;
    maxValueBar: number;
    minValueBar: number;
    totalYNumber: number = 10;
    ctr = 10;
    numCtr: number = 50;
    speed: number = 10;
    dragBarWidth = 30;
    dragBarX: number;

    constructor(container, data) {
        this.initChart(container, data);

        this.drawRing();
    }

    initChart(container, data) {
        this.data = data;
        this.box = document.querySelector(container);
        this.canvas = document.createElement('canvas');

        if (this.canvas?.getContext) {
            this.ctx = this.canvas.getContext('2d');
        }

        this.canvas.innerHTML = '您的浏览器暂不支持Canvas';
        this.box.appendChild(this.canvas);

        this.containerWidth = this.box.getBoundingClientRect().width;
        this.containerHeight = this.box.getBoundingClientRect().height;

        // canvas扩大两倍适配高清屏
        this.canvas.width = this.containerWidth * 2;
        this.canvas.height = this.containerHeight * 2;
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';

        const space = this.cSpace * 2 + this.cMargin * 2;

        this.cHeight = this.canvas.height - space;
        this.cWidth = this.canvas.width - space;

        this.originX = space / 2;

        this.originY = this.cMargin + this.cHeight;

        this.showData = this.data.slice(0, Math.round(this.data.length * this.showLength));

        this.totalBar = this.showData.length;
        this.barWidth = Math.round(this.cWidth / this.totalBar/ 3);
        this.barMargin = Math.round((this.cWidth - this.totalBar * this.barWidth) / (this.totalBar + 1));

        this.data.forEach(item => {
            if (item[1][3] > this.maxValue) {
                this.maxValue = item[1][3];
            }

            if (item[1][2] < this.minValue) {
                this.minValue = item[1][2];
            } 
        });

        this.maxValueBar = this.maxValue + 20;
        this.minValueBar = this.minValue - 20;

        this.dragBarX = this.cWidth / 2 + space - this.dragBarWidth / 2;

        this.drawLinkLabelMarkers();
    }

    drawLinkLabelMarkers() {
        this.ctx.font = '24px Arial';
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = '#000';
        this.ctx.strokeStyle = '#000';

        // x轴
        this.drawLine([this.originX, this.originY], [this.originX + this.cWidth, this.originY]);

        // y轴
        this.drawLine([this.originX, this.originY], [this.originX, this.cMargin]);

        this.drawMarkers();

        // this.drawBarAnimation();
    }

    drawLine(point1: [number, number], point2: [number, number]) {
        this.ctx.beginPath();
        this.ctx.moveTo(...point1);
        this.ctx.lineTo(...point2);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    drawMarkers() {
        this.ctx.strokeStyle = '#aaa';


        // 绘制y
        const yStep = Math.round((this.maxValueBar - this.minValueBar) / this.totalYNumber);
        this.ctx.textAlign = 'right';

        for (let i = 0; i <= this.totalYNumber; i++) {
            let markerValue = Math.round(i * yStep + this.minValueBar);
            let xMarker = this.originX - 10;
            let yMarker = Math.round(this.originY - this.cHeight * (markerValue - this.minValueBar) / (this.maxValueBar - this.minValueBar));

            this.ctx.fillText(String(markerValue), xMarker, yMarker + 3, this.cSpace);

            if (i > 0) {
                this.drawLine([this.originX + 10, yMarker], [this.originX, yMarker]);
            }
        }

        const textN = 6;

        // 绘制x
        for (let i = 0; i <= this.totalBar; i++) {
            if (this.totalBar > textN && i % Math.round((this.totalBar / 6)) !== 0) {
                continue;
            }

            const markerValue = this.data[i][0];
            // todo
            const xMarker = Math.round(this.originX + this.cWidth * ( i / this.totalBar ) + this.barMargin + this.barWidth / 2);
            const yMarker = this.originY + 30;

            this.ctx.fillText(markerValue, xMarker, yMarker, this.cSpace + 20);
        }
    }

    drawBarAnimation() {
        let parsent = this.ctr / this.numCtr;

        for (let i = 0; i <= this.totalBar; i++) {
            let oneVal = Math.round(this.maxValueBar / this.totalYNumber);
            let data = this.data[i][1];
            let color = '#30c7c9';
            let barVal = data[0];
            let disY = 0;

            //开盘0 收盘1 最低2 最高3   跌30C7C9  涨D7797F
            // 涨
            if (data[1] > data[0]) {
                color = '#d7797f';
                barVal = data[1];
                disY = data[1] - data[0];
            } else {
                disY = data[0] - data[1];
            }

            let showH = disY / (this.maxValueBar - this.minValueBar) * this.cHeight * parsent;

            showH = showH > 2 ? showH : 2;

            let barH = Math.round(this.cHeight * (barVal - this.minValueBar) / (this.maxValueBar - this.minValueBar));

            let y = this.originY - barH;
            let x = this.originX + ((this.barMargin + this.barWidth) * i + this.barMargin) * parsent;

            this.drawRect(x, y , this.barWidth, showH, undefined, color);

            // 绘制上下线影线
            let lineHeight = (data[3] - data[2]) / (this.maxValueBar - this.minValueBar) * this.cHeight * parsent;
            lineHeight > 2 ? lineHeight : 2;

            y = this.originY - this.cHeight * (data[3] -  this.minValueBar) / (this.maxValueBar - this.minValueBar);

            this.drawRect( x + this.barWidth / 2 - 1, y, 2, lineHeight, color);

            if(this.ctr < this.numCtr){
                this.ctr++;
                setTimeout(() => {
                    console.log('setTimeout');

                    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
                    this.drawLinkLabelMarkers();
                    this.drawBarAnimation();
                }, this.speed*=0.03);
            }
            
        }
    }

    drawRect(x, y, bWidth, showH, mouseMove?, color?, ifBigBar?, ifDrag?) {
        this.ctx.beginPath();

        this.ctx.rect(x, y, bWidth, showH);

        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawRing() {
        this.ctx.save();

        this.ctx.translate(this.cWidth / 2, this.cHeight / 2);

        this.ctx.save();

        this.ctx.beginPath();

        this.ctx.arc(0, 0, 200, 0, Math.PI / 2, true);
        this.ctx.fillStyle = 'blue';
        this.ctx.fill();

        this.ctx.restore();

        this.ctx.beginPath();
        // this.ctx.moveTo(0, 0);
        this.ctx.arc(0, 0, 100, 0, Math.PI / 2, true);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();

        this.ctx.restore();


    }
}

// new getCharts('#k-chart', dataArr);

class DrawSector {
    x: number = 0;
    y: number = 0;
    radius: number = 0;
    startAng: number = 0;
    endAng: number = 0;
    anticlockwise: boolean;
    container: HTMLElement;
    ctx: CanvasRenderingContext2D;

    constructor(selector: string, x: number, y: number , radius: number, startAng: number, endAng: number, anticlockwise?: boolean) {
        this.container = document.querySelector(selector);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startAng = startAng;
        this.endAng = endAng;
        this.anticlockwise = anticlockwise;

        this.initCanvas();
    }

    initCanvas() {
        const canvas = document.createElement('canvas');
        this.ctx = canvas.getContext('2d');

        canvas.width = this.container.getBoundingClientRect().width;
        canvas.height = this.container.getBoundingClientRect().height;

        this.container.appendChild(canvas);
    }

    fillSector() {
        this.ctx.translate(this.x, this.y);

        this.ctx.beginPath();

        this.ctx.arc(0, 0, this.radius, this.startAng, this.endAng, this.anticlockwise);

        this.ctx.save();

        this.ctx.rotate(this.startAng);

        this.ctx.moveTo(this.radius, 0);

        this.ctx.lineTo(0, 0);

        this.ctx.restore();

        this.ctx.save();

        this.ctx.rotate(this.endAng);

        // this.ctx.moveTo(this.radius, 0);

        this.ctx.lineTo(this.radius, 0);

        this.ctx.strokeStyle = 'red';
        this.ctx.fillStyle = 'red';

        this.ctx.fill();

        this.ctx.restore();
    }
}

const fillSector = new DrawSector('#k-chart', 0, 0, 100, 0, Math.PI / 2);

fillSector.fillSector();