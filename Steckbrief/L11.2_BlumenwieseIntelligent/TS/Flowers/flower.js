"use strict";
var End;
(function (End) {
    class Flower {
        beeAssign = false;
        xPos;
        yPos;
        yRandomMin;
        yRandomMax;
        counter = 0;
        nectarValue = Math.floor(Math.random() * 2000) + 1000;
        randomScale = 0.5 + Math.random() * (0.8 - 0.5);
        nectarLength = 1;
        constructor(_xPos, _yRandomMin, _yRandomMax) {
            this.xPos = _xPos;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }
        get flowerPos() {
            let pos = { x: this.xPos, y: this.yPos };
            return pos;
        }
        get nectar() {
            return this.nectarLength;
        }
        get assign() {
            return this.beeAssign;
        }
        setNectar() {
            this.nectarLength = 1;
        }
        setAssign(_value) {
            this.beeAssign = _value;
        }
        updateNectar() {
            //;
        }
        draw() {
            //mate  
        }
    }
    End.Flower = Flower;
    class Tulip extends Flower {
        updateNectar() {
            this.counter++;
            if (this.nectarLength < 15) {
                if (this.nectarValue == this.counter) {
                    this.nectarLength += 1;
                    this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
                    this.counter = 0;
                }
                End.crc2.save();
                End.crc2.translate(this.xPos, this.yPos);
                End.crc2.scale(this.randomScale, this.randomScale);
                End.crc2.beginPath();
                End.crc2.arc(0, 0, this.nectarLength, 0, 2 * Math.PI);
                End.crc2.fillStyle = "yellow";
                End.crc2.fill();
                End.crc2.restore();
            }
        }
        draw() {
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            this.yPos = y;
            End.crc2.save();
            End.crc2.translate(this.xPos, y);
            End.crc2.scale(this.randomScale, this.randomScale);
            End.crc2.fillStyle = "green";
            End.crc2.fillRect(0, 0, 5, 40);
            for (let index = 0; index < 4; index++) {
                End.crc2.beginPath();
                End.crc2.rotate(Math.PI / 2);
                End.crc2.moveTo(0, 0);
                End.crc2.lineTo(-15, -15);
                End.crc2.lineTo(-5, -10);
                End.crc2.lineTo(0, -15);
                End.crc2.lineTo(5, -10);
                End.crc2.lineTo(15, -15);
                End.crc2.closePath();
                End.crc2.fillStyle = "blue";
                End.crc2.fill();
            }
            End.crc2.restore();
        }
    }
    End.Tulip = Tulip;
    class CornFlower extends Flower {
        updateNectar() {
            this.counter++;
            console.log(this.nectarLength);
            if (this.nectarLength < 15) {
                if (this.nectarValue == this.counter) {
                    this.nectarLength += 2;
                    this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
                    this.counter = 0;
                }
            }
            else {
                // console.log("nektar full");
            }
            End.crc2.save();
            End.crc2.translate(this.xPos, this.yPos);
            End.crc2.scale(this.randomScale, this.randomScale);
            End.crc2.beginPath();
            End.crc2.arc(0, -7, this.nectarLength, 0, 2 * Math.PI);
            End.crc2.fillStyle = "yellow";
            End.crc2.fill();
            End.crc2.stroke();
            End.crc2.restore();
        }
        draw() {
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            this.yPos = y;
            End.crc2.save();
            End.crc2.translate(this.xPos, y);
            End.crc2.scale(this.randomScale, this.randomScale);
            End.crc2.fillStyle = "green";
            End.crc2.fillRect(0, 0, 5, 40);
            End.crc2.beginPath();
            End.crc2.moveTo(0, 0);
            End.crc2.lineTo(-15, -5);
            End.crc2.lineTo(-25, -30);
            End.crc2.lineTo(-10, -20);
            End.crc2.lineTo(0, -40);
            End.crc2.lineTo(10, -20);
            End.crc2.lineTo(25, -30);
            End.crc2.lineTo(15, -5);
            End.crc2.closePath();
            End.crc2.fillStyle = "pink";
            End.crc2.fill();
            End.crc2.restore();
        }
    }
    End.CornFlower = CornFlower;
})(End || (End = {}));
//# sourceMappingURL=flower.js.map