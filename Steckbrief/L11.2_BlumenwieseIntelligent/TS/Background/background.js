var End;
(function (End) {
    function drawBackground() {
        let gradient = End.crc2.createLinearGradient(0, 0, 0, End.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(End.golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        End.crc2.fillStyle = gradient;
        End.crc2.fillRect(0, 0, End.crc2.canvas.width, End.crc2.canvas.height);
    }
    End.drawBackground = drawBackground;
    function drawSun(_position) {
        End.crc2.save();
        End.crc2.translate(_position.x, _position.y);
        End.crc2.fillStyle = "yellow";
        End.crc2.arc(0, 0, 100, 0, 2 * Math.PI);
        End.crc2.fill();
        End.crc2.beginPath();
        End.crc2.moveTo(-50, 30);
        End.crc2.quadraticCurveTo(0, 100, 50, 30);
        End.crc2.stroke();
        End.crc2.beginPath();
        End.crc2.arc(-25, -25, 15, 0, 2 * Math.PI);
        End.crc2.stroke();
        End.crc2.beginPath();
        End.crc2.arc(25, -25, 15, 0, 2 * Math.PI);
        End.crc2.stroke();
        End.crc2.restore();
    }
    End.drawSun = drawSun;
    function drawMountains(_position, _min, _max, _color) {
        let stepMin = 50;
        let stepMax = 100;
        let x = 0;
        End.crc2.save();
        End.crc2.translate(_position.x, _position.y);
        End.crc2.beginPath();
        End.crc2.moveTo(0, 0);
        End.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax);
            let y = -_min - Math.random() * (_max - _min);
            End.crc2.lineTo(x, y);
        } while (x < End.crc2.canvas.width);
        End.crc2.lineTo(x, 0);
        End.crc2.closePath();
        End.crc2.fillStyle = _color;
        End.crc2.fill();
        End.crc2.restore();
    }
    End.drawMountains = drawMountains;
    function drawTree(_xPos, _xRandomMin, _xRandomMax, _yRandomMin, _yRandomMax) {
        do {
            let randomScale = 0.8 + Math.random() * (1.3 - 0.8);
            let yTree1 = -50;
            let yTree2 = -150;
            let y = _yRandomMin + Math.random() * (_yRandomMax - _yRandomMin);
            let treeColor = ["#154f31", "#1a5838", "#1e5d3c"];
            End.crc2.save();
            End.crc2.translate(_xPos, y + End.crc2.canvas.height * 0.62);
            End.crc2.scale(randomScale, randomScale);
            End.crc2.fillStyle = "brown";
            End.crc2.fillRect(0, 0, 10, -200);
            for (let index = 0; index < 3; index++) {
                End.crc2.beginPath();
                End.crc2.moveTo(-25, yTree1);
                End.crc2.lineTo(35, yTree1);
                End.crc2.lineTo(5, yTree2);
                End.crc2.closePath();
                End.crc2.fillStyle = treeColor[index];
                End.crc2.fill();
                yTree1 -= 50;
                yTree2 -= 30;
            }
            _xPos += _xRandomMin + Math.random() * (_xRandomMax - _xRandomMin);
            End.crc2.restore();
        } while (_xPos < End.crc2.canvas.width);
    }
    End.drawTree = drawTree;
    function drawBeeHive() {
        End.crc2.save();
        End.crc2.translate(End.crc2.canvas.width / 2, End.crc2.canvas.height * 0.7);
        End.crc2.scale(8, 8);
        End.crc2.lineWidth = 0.5;
        End.crc2.strokeStyle = "black";
        End.crc2.beginPath();
        End.crc2.moveTo(0, 0);
        End.crc2.lineTo(-5.5, -1);
        End.crc2.quadraticCurveTo(-6, -6, -4, -8.5);
        End.crc2.quadraticCurveTo(-3.5, -10.5, -1.5, -11);
        End.crc2.quadraticCurveTo(0, -12, 1.5, -11);
        End.crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        End.crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        End.crc2.quadraticCurveTo(6, -6, 5.5, -1);
        End.crc2.fillStyle = "yellow";
        End.crc2.fill();
        End.crc2.closePath();
        End.crc2.stroke();
        End.crc2.beginPath();
        End.crc2.arc(0, -8, 1.5, 0, 2 * Math.PI);
        End.crc2.fillStyle = "black";
        End.crc2.fill();
        End.crc2.closePath();
        End.crc2.restore();
    }
    End.drawBeeHive = drawBeeHive;
})(End || (End = {}));
//# sourceMappingURL=background.js.map