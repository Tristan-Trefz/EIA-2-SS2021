var Wiese;
(function (Wiese) {
    function drawBackground() {
        let gradient = Wiese.crc2.createLinearGradient(0, 0, 0, Wiese.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(Wiese.golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        Wiese.crc2.fillStyle = gradient;
        Wiese.crc2.fillRect(0, 0, Wiese.crc2.canvas.width, Wiese.crc2.canvas.height);
    }
    Wiese.drawBackground = drawBackground;
    function drawSun(_position) {
        Wiese.crc2.save();
        Wiese.crc2.translate(_position.x, _position.y);
        Wiese.crc2.fillStyle = "yellow";
        Wiese.crc2.arc(0, 0, 100, 0, 2 * Math.PI);
        Wiese.crc2.fill();
        Wiese.crc2.beginPath();
        Wiese.crc2.moveTo(-50, 30);
        Wiese.crc2.quadraticCurveTo(0, 100, 50, 30);
        Wiese.crc2.stroke();
        Wiese.crc2.beginPath();
        Wiese.crc2.arc(-25, -25, 15, 0, 2 * Math.PI);
        Wiese.crc2.stroke();
        Wiese.crc2.beginPath();
        Wiese.crc2.arc(25, -25, 15, 0, 2 * Math.PI);
        Wiese.crc2.stroke();
        Wiese.crc2.restore();
    }
    Wiese.drawSun = drawSun;
    function drawMountains(_position, _min, _max, _color) {
        let stepMin = 50;
        let stepMax = 100;
        let x = 0;
        Wiese.crc2.save();
        Wiese.crc2.translate(_position.x, _position.y);
        Wiese.crc2.beginPath();
        Wiese.crc2.moveTo(0, 0);
        Wiese.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax);
            let y = -_min - Math.random() * (_max - _min);
            Wiese.crc2.lineTo(x, y);
        } while (x < Wiese.crc2.canvas.width);
        Wiese.crc2.lineTo(x, 0);
        Wiese.crc2.closePath();
        Wiese.crc2.fillStyle = _color;
        Wiese.crc2.fill();
        Wiese.crc2.restore();
    }
    Wiese.drawMountains = drawMountains;
    function drawTree(_xPos, _xRandomMin, _xRandomMax, _yRandomMin, _yRandomMax) {
        do {
            let randomScale = 0.8 + Math.random() * (1.3 - 0.8);
            let yTree1 = -50;
            let yTree2 = -150;
            let y = _yRandomMin + Math.random() * (_yRandomMax - _yRandomMin);
            let treeColor = ["#154f31", "#1a5838", "#1e5d3c"];
            Wiese.crc2.save();
            Wiese.crc2.translate(_xPos, y + Wiese.crc2.canvas.height * 0.62);
            Wiese.crc2.scale(randomScale, randomScale);
            Wiese.crc2.fillStyle = "brown";
            Wiese.crc2.fillRect(0, 0, 10, -200);
            for (let index = 0; index < 3; index++) {
                Wiese.crc2.beginPath();
                Wiese.crc2.moveTo(-25, yTree1);
                Wiese.crc2.lineTo(35, yTree1);
                Wiese.crc2.lineTo(5, yTree2);
                Wiese.crc2.closePath();
                Wiese.crc2.fillStyle = treeColor[index];
                Wiese.crc2.fill();
                yTree1 -= 50;
                yTree2 -= 30;
            }
            _xPos += _xRandomMin + Math.random() * (_xRandomMax - _xRandomMin);
            Wiese.crc2.restore();
        } while (_xPos < Wiese.crc2.canvas.width);
    }
    Wiese.drawTree = drawTree;
    function drawBeeHive() {
        Wiese.crc2.save();
        Wiese.crc2.translate(Wiese.crc2.canvas.width / 2, Wiese.crc2.canvas.height * 0.7);
        Wiese.crc2.scale(8, 8);
        Wiese.crc2.lineWidth = 0.5;
        Wiese.crc2.strokeStyle = "black";
        Wiese.crc2.beginPath();
        Wiese.crc2.moveTo(0, 0);
        Wiese.crc2.lineTo(-5.5, -1);
        Wiese.crc2.quadraticCurveTo(-6, -6, -4, -8.5);
        Wiese.crc2.quadraticCurveTo(-3.5, -10.5, -1.5, -11);
        Wiese.crc2.quadraticCurveTo(0, -12, 1.5, -11);
        Wiese.crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        Wiese.crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        Wiese.crc2.quadraticCurveTo(6, -6, 5.5, -1);
        Wiese.crc2.fillStyle = "yellow";
        Wiese.crc2.fill();
        Wiese.crc2.closePath();
        Wiese.crc2.stroke();
        Wiese.crc2.beginPath();
        Wiese.crc2.arc(0, -8, 1.5, 0, 2 * Math.PI);
        Wiese.crc2.fillStyle = "black";
        Wiese.crc2.fill();
        Wiese.crc2.closePath();
        Wiese.crc2.restore();
    }
    Wiese.drawBeeHive = drawBeeHive;
})(Wiese || (Wiese = {}));
//# sourceMappingURL=background.js.map