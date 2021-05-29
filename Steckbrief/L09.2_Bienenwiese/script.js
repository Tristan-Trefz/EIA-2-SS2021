var blumenwiese;
(function (blumenwiese) {
    let imageData;
    let cloudArray = [];
    let beeArray = [];
    let flowerColors = [
        "#e0d821",
        "#25c9c9",
        "#c71515",
        "#c77115",
        "#bf19d4",
        "#ea5bff"
    ];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        blumenwiese.render = canvas.getContext("2d");
        drawBackground();
        drawMountains();
        drawMeadow();
        drawSun();
        drawFlowers();
        drawTrees();
        drawHouse();
        drawClouds(270, 75); //danke an Martin Fuhr fuer die Hife bei Den Clouds und Bienen
        window.setInterval(moveCloud, 20);
        drawBee();
        window.setInterval(moveBee, 20);
        function drawClouds() {
            for (let i = 0; i < 1; i++) {
                let cloud = new blumenwiese.Cloud({ x: 270, y: 75 });
                cloudArray.push(cloud);
            }
        }
        function moveCloud() {
            blumenwiese.render.clearRect(0, 0, blumenwiese.render.canvas.width, blumenwiese.render.canvas.height);
            blumenwiese.render.putImageData(imageData, 0, 0);
            for (let cloud of cloudArray) {
                cloud.move(1 / 50);
                cloud.draw();
            }
        }
        function drawBee() {
            for (let i = 0; i < 10; i++) {
                let bee = new blumenwiese.Bee(0.8);
                beeArray.push(bee);
            }
        }
        function moveBee() {
            for (let bee of beeArray) {
                bee.move(1 / 40);
                bee.draw();
            }
        }
        function drawHouse(x = 300, y = 400) {
            blumenwiese.render.save();
            blumenwiese.render.beginPath();
            blumenwiese.render.ellipse(x, y, 50, 40, 300, 0, 2 * Math.PI);
            blumenwiese.render.strokeStyle = "brown";
            blumenwiese.render.lineWidth = 4;
            blumenwiese.render.fillStyle = "RGB(250,160,23)";
            blumenwiese.render.fill();
            blumenwiese.render.stroke();
            blumenwiese.render.closePath();
            //stripes
            blumenwiese.render.beginPath();
            blumenwiese.render.moveTo(x - 39, y - 10);
            blumenwiese.render.lineTo(x + 39, y - 10);
            blumenwiese.render.moveTo(x - 37, y - 20);
            blumenwiese.render.lineTo(x + 37, y - 20);
            blumenwiese.render.moveTo(x - 33, y - 30);
            blumenwiese.render.lineTo(x + 33, y - 30);
            blumenwiese.render.moveTo(x - 23, y - 40);
            blumenwiese.render.lineTo(x + 23, y - 40);
            blumenwiese.render.moveTo(x - 40, y);
            blumenwiese.render.lineTo(x + 40, y);
            blumenwiese.render.moveTo(x - 39, y + 10);
            blumenwiese.render.lineTo(x + 39, y + 10);
            blumenwiese.render.moveTo(x - 37, y + 20);
            blumenwiese.render.lineTo(x + 37, y + 20);
            blumenwiese.render.moveTo(x - 33, y + 30);
            blumenwiese.render.lineTo(x + 33, y + 30);
            blumenwiese.render.moveTo(x - 23, y + 40);
            blumenwiese.render.lineTo(x + 23, y + 40);
            blumenwiese.render.strokeStyle = "brown";
            blumenwiese.render.lineWidth = 5;
            blumenwiese.render.stroke();
            blumenwiese.render.closePath();
            blumenwiese.render.restore();
            blumenwiese.render.beginPath();
            blumenwiese.render.ellipse(x, y, 25, 20, 300, 0, 2 * Math.PI);
            blumenwiese.render.fillStyle = "black";
            blumenwiese.render.fill();
            blumenwiese.render.closePath();
            blumenwiese.render.restore();
        }
        imageData = blumenwiese.render.getImageData(0, 0, canvas.width, canvas.height);
        function drawBackground() {
            let gradient = blumenwiese.render.createLinearGradient(800 / 2, 0, 800 / 2, 600);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(0.3, "orange");
            blumenwiese.render.fillStyle = gradient;
            blumenwiese.render.fillRect(0, 0, 800, 600);
        }
        //von Maximilian buckel inspiriert
        function drawMountains() {
            for (let i = 0; i < 3; i++) {
                blumenwiese.render.save();
                if (i == 0) {
                    blumenwiese.render.globalAlpha = 0.3;
                }
                else if (i == 1) {
                    blumenwiese.render.globalAlpha = 0.6;
                }
                else {
                    blumenwiese.render.globalAlpha = 1;
                }
                drawPointyMountain(.2 + rand(), .5, .35, .4);
                drawPointyMountain(.4 + rand(), .4, .35, .4);
                drawPointyMountain(.56 + rand(), .6, .3, .3);
                drawPointyMountain(.7 + rand(), .45, .36, .4);
                blumenwiese.render.restore();
            }
        }
        function rand() {
            return (Math.random() - Math.random()) * Math.random() * 0.5;
        }
        function drawPointyMountain(x, y, w, h) {
            blumenwiese.render.save();
            blumenwiese.render.translate(wp(x), hp(y));
            blumenwiese.render.fillStyle = "#9e9e9e";
            let bottomLeftX = 0;
            let bottomLeftY = hp(h);
            let topX = wp(w) / 2;
            let topY = 0;
            let bottomRightX = wp(w);
            let bottomRightY = hp(h);
            blumenwiese.render.moveTo(bottomLeftX, bottomLeftY);
            blumenwiese.render.beginPath();
            blumenwiese.render.lineTo(topX, topY);
            blumenwiese.render.lineTo(bottomRightX, bottomRightY);
            blumenwiese.render.lineTo(bottomLeftX, bottomLeftY);
            blumenwiese.render.closePath();
            blumenwiese.render.fill();
            blumenwiese.render.restore();
        }
        function hp(h) {
            return canvas.height * h;
        }
        function wp(w) {
            return canvas.width * w;
        }
        function drawMeadow() {
            blumenwiese.render.fillStyle = "#72c955";
            blumenwiese.render.rect(0, 400, 800, 200);
            blumenwiese.render.fill();
        }
        //Jirkas Code, abgeändert
        function drawSun() {
            let r1 = 30;
            let r2 = 180;
            let gradientSun = blumenwiese.render.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradientSun.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradientSun.addColorStop(0.1, "HSLA(60, 100%, 90%, 0.5)");
            gradientSun.addColorStop(1, "HSLA(60, 100%, 80%, 0)");
            let X = blumenwiese.render.canvas.width;
            let Y = blumenwiese.render.canvas.height / 2 - 100;
            blumenwiese.render.save();
            if (X > 700) {
                X = 700;
            }
            if (Y < 20) {
                Y = 20;
            }
            else if (Y > 100) {
                Y = 100;
            }
            blumenwiese.render.translate(X, Y);
            blumenwiese.render.fillStyle = gradientSun;
            blumenwiese.render.arc(0, 0, r2, 0, 2 * Math.PI);
            blumenwiese.render.fill();
            blumenwiese.render.restore();
        }
        function drawFlowers() {
            blumenwiese.render.save();
            for (let i = 39; i >= 1; i--) {
                drawFlower((i / 40) + rand(), (i / 400) + 0.9 + rand(), 0.005, 0.06, flowerColors[Math.floor(Math.random() * flowerColors.length)]);
            }
            blumenwiese.render.restore();
        }
        function drawFlower(x, y, w, h, color) {
            blumenwiese.render.save();
            blumenwiese.render.translate(wp(x), hp(y));
            blumenwiese.render.fillStyle = "brown";
            blumenwiese.render.moveTo(0, 0);
            blumenwiese.render.fillRect(wp(0.4 * w), hp(0.1 * h), wp(0.1 * w), hp(0.5 * h));
            blumenwiese.render.fillStyle = color;
            blumenwiese.render.moveTo(0, 0);
            fillCircle(wp(0.4 * w), hp(0), wp(w));
            blumenwiese.render.restore();
        }
        function fillCircle(x, y, r) {
            blumenwiese.render.moveTo(x, y);
            blumenwiese.render.beginPath();
            blumenwiese.render.arc(x, y, r, 0, 360);
            blumenwiese.render.closePath();
            blumenwiese.render.fill();
        }
        //von Maximilian buckel inspiriert
        function drawTrees() {
            blumenwiese.render.save();
            for (let i = 9; i >= 1; i--) {
                drawTree((i / 10) + rand(), (i / 100) + 0.8 + rand(), 0.12 - (i / 1000), 0.4 - (i / 100));
            }
            blumenwiese.render.restore();
        }
        function drawTree(x, y, w, h) {
            blumenwiese.render.save();
            blumenwiese.render.translate(wp(x), hp(y));
            blumenwiese.render.fillStyle = "brown";
            blumenwiese.render.moveTo(0, 0);
            blumenwiese.render.fillRect(wp(0.4 * w), hp(0.1 * h), wp(0.25 * w), hp(0.5 * h));
            blumenwiese.render.fillStyle = "green";
            blumenwiese.render.moveTo(0, 0);
            blumenwiese.render.fillRect(wp(0), hp(0), wp(w), hp(0.35 * h));
            blumenwiese.render.restore();
        }
    }
})(blumenwiese || (blumenwiese = {}));
//# sourceMappingURL=script.js.map