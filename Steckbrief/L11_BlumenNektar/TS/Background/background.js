"use strict";
var Nektar;
(function (Nektar) {
    function drawBackground() {
        let gradient = Nektar.crc2.createLinearGradient(0, 0, 0, Nektar.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(Nektar.golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        Nektar.crc2.fillStyle = gradient;
        Nektar.crc2.fillRect(0, 0, Nektar.crc2.canvas.width, Nektar.crc2.canvas.height);
    }
    Nektar.drawBackground = drawBackground;
    function drawSun(_position) {
        Nektar.crc2.save();
        Nektar.crc2.translate(_position.x, _position.y);
        Nektar.crc2.fillStyle = "yellow";
        Nektar.crc2.arc(0, 0, 100, 0, 2 * Math.PI);
        Nektar.crc2.fill();
        Nektar.crc2.beginPath();
        Nektar.crc2.moveTo(-50, 30);
        Nektar.crc2.quadraticCurveTo(0, 100, 50, 30);
        Nektar.crc2.stroke();
        Nektar.crc2.beginPath();
        Nektar.crc2.arc(-25, -25, 15, 0, 2 * Math.PI);
        Nektar.crc2.stroke();
        Nektar.crc2.beginPath();
        Nektar.crc2.arc(25, -25, 15, 0, 2 * Math.PI);
        Nektar.crc2.stroke();
        Nektar.crc2.restore();
    }
    Nektar.drawSun = drawSun;
    function drawMountains(_position, _min, _max, _color) {
        let stepMin = 50;
        let stepMax = 100;
        let x = 0;
        Nektar.crc2.save();
        Nektar.crc2.translate(_position.x, _position.y);
        Nektar.crc2.beginPath();
        Nektar.crc2.moveTo(0, 0);
        Nektar.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax);
            let y = -_min - Math.random() * (_max - _min);
            Nektar.crc2.lineTo(x, y);
        } while (x < Nektar.crc2.canvas.width);
        Nektar.crc2.lineTo(x, 0);
        Nektar.crc2.closePath();
        Nektar.crc2.fillStyle = _color;
        Nektar.crc2.fill();
        Nektar.crc2.restore();
    }
    Nektar.drawMountains = drawMountains;
    function drawTree(_xPos, _xRandomMin, _xRandomMax, _yRandomMin, _yRandomMax) {
        do {
            let randomScale = 0.8 + Math.random() * (1.3 - 0.8);
            let yTree1 = -50;
            let yTree2 = -150;
            let y = _yRandomMin + Math.random() * (_yRandomMax - _yRandomMin);
            let treeColor = ["#154f31", "#1a5838", "#1e5d3c"];
            Nektar.crc2.save();
            Nektar.crc2.translate(_xPos, y + Nektar.crc2.canvas.height * 0.62);
            Nektar.crc2.scale(randomScale, randomScale);
            Nektar.crc2.fillStyle = "brown";
            Nektar.crc2.fillRect(0, 0, 10, -200);
            for (let index = 0; index < 3; index++) {
                Nektar.crc2.beginPath();
                Nektar.crc2.moveTo(-25, yTree1);
                Nektar.crc2.lineTo(35, yTree1);
                Nektar.crc2.lineTo(5, yTree2);
                Nektar.crc2.closePath();
                Nektar.crc2.fillStyle = treeColor[index];
                Nektar.crc2.fill();
                yTree1 -= 50;
                yTree2 -= 30;
            }
            _xPos += _xRandomMin + Math.random() * (_xRandomMax - _xRandomMin);
            Nektar.crc2.restore();
        } while (_xPos < Nektar.crc2.canvas.width);
    }
    Nektar.drawTree = drawTree;
    function drawBeeHive() {
        Nektar.crc2.save();
        Nektar.crc2.translate(Nektar.crc2.canvas.width / 2, Nektar.crc2.canvas.height * 0.7);
        Nektar.crc2.scale(8, 8);
        Nektar.crc2.lineWidth = 0.5;
        Nektar.crc2.strokeStyle = "black";
        Nektar.crc2.beginPath();
        Nektar.crc2.moveTo(0, 0);
        Nektar.crc2.lineTo(-5.5, -1);
        Nektar.crc2.quadraticCurveTo(-6, -6, -4, -8.5);
        Nektar.crc2.quadraticCurveTo(-3.5, -10.5, -1.5, -11);
        Nektar.crc2.quadraticCurveTo(0, -12, 1.5, -11);
        Nektar.crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        Nektar.crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        Nektar.crc2.quadraticCurveTo(6, -6, 5.5, -1);
        Nektar.crc2.fillStyle = "yellow";
        Nektar.crc2.fill();
        Nektar.crc2.closePath();
        Nektar.crc2.stroke();
        Nektar.crc2.beginPath();
        Nektar.crc2.arc(0, -8, 1.5, 0, 2 * Math.PI);
        Nektar.crc2.fillStyle = "black";
        Nektar.crc2.fill();
        Nektar.crc2.closePath();
        Nektar.crc2.restore();
    }
    Nektar.drawBeeHive = drawBeeHive;
})(Nektar || (Nektar = {}));
//# sourceMappingURL=background.js.map