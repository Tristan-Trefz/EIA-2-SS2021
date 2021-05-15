var blumenwiese;
(function (blumenwiese) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        let render = canvas.getContext("2d");
        function drawBackground() {
            let gradient = render.createLinearGradient(900 / 2, 0, 900 / 2, 600);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(0.3, "orange");
            render.fillStyle = gradient;
            render.fillRect(0, 0, 900, 600);
        }
        //von Maximilian buckel inspiriert
        function drawMountains() {
            for (let i = 0; i < 3; i++) {
                render.save();
                if (i == 0) {
                    render.globalAlpha = 0.3;
                }
                else if (i == 1) {
                    render.globalAlpha = 0.6;
                }
                else {
                    render.globalAlpha = 1;
                }
                render.fillStyle = "#9e9e9e";
                drawPointyMountain(rand(), .4, .35, .4);
                drawPointyMountain(.2 + rand(), .5, .35, .4);
                drawPointyMountain(.4 + rand(), .4, .35, .4);
                drawPointyMountain(.56 + rand(), .6, .3, .3);
                drawPointyMountain(.7 + rand(), .45, .36, .4);
                render.restore();
            }
        }
        function rand() {
            return (Math.random() - Math.random()) * Math.random() * 0.5;
        }
        function drawPointyMountain(x, y, w, h) {
            render.save();
            render.translate(wp(x), hp(y));
            let bottomLeftX = 0;
            let bottomLeftY = hp(h);
            let topX = wp(w) / 2;
            let topY = 0;
            let bottomRightX = wp(w);
            let bottomRightY = hp(h);
            render.moveTo(bottomLeftX, bottomLeftY);
            render.beginPath();
            render.lineTo(topX, topY);
            render.lineTo(bottomRightX, bottomRightY);
            render.lineTo(bottomLeftX, bottomLeftY);
            render.closePath();
            render.fill();
            render.restore();
        }
        function hp(h) {
            return canvas.height * h;
        }
        function wp(w) {
            return canvas.width * w;
        }
        function drawMeadow() {
            render.fillStyle = "#72c955";
            render.rect(0, 120, 600, 200);
            render.fill();
        }
        //Jirkas Code, abgeändert
        function drawSun() {
            let r1 = 30;
            let r2 = 180;
            let gradientSun = render.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradientSun.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradientSun.addColorStop(0.1, "HSLA(60, 100%, 90%, 0.5)");
            gradientSun.addColorStop(1, "HSLA(60, 100%, 80%, 0)");
            let X = render.canvas.width;
            let Y = render.canvas.height / 2 - 100;
            render.save();
            if (X > 700) {
                X = 700;
            }
            if (Y < 20) {
                Y = 20;
            }
            else if (Y > 100) {
                Y = 100;
            }
            render.translate(X, Y);
            render.fillStyle = gradientSun;
            render.arc(0, 0, r2, 0, 2 * Math.PI);
            render.fill();
            render.restore();
        }
        let flowerColors = [
            "#e0d821",
            "#25c9c9",
            "#c71515",
            "#c77115",
            "#bf19d4",
            "#ea5bff"
        ];
        function drawFlowers() {
            render.save();
            drawFlower(0.1 + rand(), 0.95 + rand(), 0.005, 0.06, flowerColors[Math.floor(Math.random() * flowerColors.length)]);
            drawFlower(0.2 + rand(), 0.95 + rand(), 0.005, 0.06, flowerColors[Math.floor(Math.random() * flowerColors.length)]);
            drawFlower(0.3 + rand(), 0.95 + rand(), 0.005, 0.06, flowerColors[Math.floor(Math.random() * flowerColors.length)]);
            drawFlower(0.4 + rand(), 0.96 + rand(), 0.005, 0.06, flowerColors[Math.floor(Math.random() * flowerColors.length)]);
            drawFlower(0.5 + rand(), 0.91 + rand(), 0.005, 0.06, flowerColors[Math.floor(Math.random() * flowerColors.length)]);
            drawFlower(0.6 + rand(), 0.99 + rand(), 0.005, 0.06, flowerColors[Math.floor(Math.random() * flowerColors.length)]);
            drawFlower(0.7 + rand(), 0.95 + rand(), 0.005, 0.06, flowerColors[Math.floor(Math.random() * flowerColors.length)]);
            drawFlower(0.8 + rand(), 0.98 + rand(), 0.005, 0.06, flowerColors[Math.floor(Math.random() * flowerColors.length)]);
            drawFlower(0.9 + rand(), 0.95 + rand(), 0.005, 0.06, flowerColors[Math.floor(Math.random() * flowerColors.length)]);
            render.restore();
        }
        function drawFlower(x, y, w, h, color) {
            render.save();
            render.translate(wp(x), hp(y));
            render.fillStyle = "brown";
            render.moveTo(0, 0);
            render.fillRect(wp(0.4 * w), hp(0.1 * h), wp(0.1 * w), hp(0.5 * h));
            render.fillStyle = color;
            render.moveTo(0, 0);
            fillCircle(wp(0.4 * w), hp(0), wp(w));
            render.restore();
        }
        function fillCircle(x, y, r) {
            render.moveTo(x, y);
            render.beginPath();
            render.arc(x, y, r, 0, 360);
            render.closePath();
            render.fill();
        }
        //von Maximilian buckel inspiriert
        function drawTrees() {
            render.save();
            drawTree(0.1 + rand(), 0.8 + rand(), 0.12, 0.4);
            drawTree(0.3 + rand(), 0.85 + rand(), 0.12, 0.4);
            drawTree(0.5 + rand(), 0.81 + rand(), 0.1, 0.3);
            drawTree(0.8 + rand(), 0.89 + rand(), 0.1, 0.26);
            render.restore();
        }
        function drawTree(x, y, w, h) {
            render.save();
            render.translate(wp(x), hp(y));
            render.fillStyle = "brown";
            render.moveTo(0, 0);
            render.fillRect(wp(0.4 * w), hp(0.1 * h), wp(0.25 * w), hp(0.5 * h));
            render.fillStyle = "green";
            render.moveTo(0, 0);
            render.fillRect(wp(0), hp(0), wp(w), hp(0.35 * h));
            render.restore();
        }
        drawBackground();
        drawMountains();
        drawMeadow();
        drawSun();
        drawFlowers();
        drawTrees();
    }
})(blumenwiese || (blumenwiese = {}));
//# sourceMappingURL=script.js.map