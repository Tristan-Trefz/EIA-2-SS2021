"use strict";
var Nektar;
(function (Nektar) {
    class Flower {
        xPos;
        yRandomMin;
        yRandomMax;
        nectarValue = Math.floor(Math.random() * 2000) + 1000;
        nectarCounter = 0;
        yPos;
        randomScale = 0.5 + Math.random() * (0.8 - 0.5);
        nectarLength = 5;
        constructor(_xPos, _yRandomMin, _yRandomMax) {
            this.xPos = _xPos;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
            this.update();
        }
        draw() {
            //mate  
        }
        update() {
            //;
        }
    }
    Nektar.Flower = Flower;
    class Tulip extends Flower {
        draw() {
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            this.yPos = y;
            Nektar.crc2.save();
            Nektar.crc2.translate(this.xPos, y);
            Nektar.crc2.scale(this.randomScale, this.randomScale);
            Nektar.crc2.fillStyle = "green";
            Nektar.crc2.fillRect(0, 0, 5, 40);
            for (let index = 0; index < 4; index++) {
                Nektar.crc2.beginPath();
                Nektar.crc2.rotate(Math.PI / 2);
                Nektar.crc2.moveTo(0, 0);
                Nektar.crc2.lineTo(-15, -15);
                Nektar.crc2.lineTo(-5, -10);
                Nektar.crc2.lineTo(0, -15);
                Nektar.crc2.lineTo(5, -10);
                Nektar.crc2.lineTo(15, -15);
                Nektar.crc2.closePath();
                Nektar.crc2.fillStyle = "blue";
                Nektar.crc2.fill();
            }
            Nektar.crc2.restore();
        }
        update() {
            this.nectarCounter++;
            if (this.nectarLength < 15) {
                if (this.nectarValue == this.nectarCounter) {
                    this.nectarLength += 2;
                    this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
                }
            }
            else {
                console.log("nektar full");
            }
            Nektar.crc2.save();
            Nektar.crc2.translate(this.xPos, this.yPos);
            Nektar.crc2.scale(this.randomScale, this.randomScale);
            Nektar.crc2.beginPath();
            Nektar.crc2.arc(0, 0, this.nectarLength, 0, 2 * Math.PI);
            Nektar.crc2.fillStyle = "yellow";
            Nektar.crc2.fill();
            Nektar.crc2.restore();
        }
    }
    Nektar.Tulip = Tulip;
    class CornFlower extends Flower {
        draw() {
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            this.yPos = y;
            Nektar.crc2.save();
            Nektar.crc2.translate(this.xPos, y);
            Nektar.crc2.scale(this.randomScale, this.randomScale);
            Nektar.crc2.fillStyle = "green";
            Nektar.crc2.fillRect(0, 0, 5, 40);
            Nektar.crc2.beginPath();
            Nektar.crc2.moveTo(0, 0);
            Nektar.crc2.lineTo(-15, -5);
            Nektar.crc2.lineTo(-25, -30);
            Nektar.crc2.lineTo(-10, -20);
            Nektar.crc2.lineTo(0, -40);
            Nektar.crc2.lineTo(10, -20);
            Nektar.crc2.lineTo(25, -30);
            Nektar.crc2.lineTo(15, -5);
            Nektar.crc2.closePath();
            Nektar.crc2.fillStyle = "pink";
            Nektar.crc2.fill();
            Nektar.crc2.restore();
        }
        update() {
            this.nectarCounter++;
            if (this.nectarLength < 15) {
                if (this.nectarValue == this.nectarCounter) {
                    this.nectarLength += 2;
                    this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
                }
            }
            else {
                console.log("nektar full");
            }
            Nektar.crc2.save();
            Nektar.crc2.translate(this.xPos, this.yPos);
            Nektar.crc2.scale(this.randomScale, this.randomScale);
            Nektar.crc2.beginPath();
            Nektar.crc2.arc(0, -7, this.nectarLength, 0, 2 * Math.PI);
            Nektar.crc2.fillStyle = "yellow";
            Nektar.crc2.fill();
            Nektar.crc2.stroke();
            Nektar.crc2.restore();
        }
    }
    Nektar.CornFlower = CornFlower;
})(Nektar || (Nektar = {}));
//# sourceMappingURL=flower.js.map