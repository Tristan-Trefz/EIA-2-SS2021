var Wiese;
(function (Wiese) {
    class Flower {
        constructor(_xPos, _yRandomMin, _yRandomMax) {
            this.xPos = _xPos;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }
        draw() {
            //mate  
        }
    }
    Wiese.Flower = Flower;
    class Tulip extends Flower {
        // constructor(_xPos: number, _yRandomMin: number, _yRandomMax: number) {
        //     super(_xPos, _yRandomMin, _yRandomMax);
        // }
        draw() {
            let randomScale = 0.5 + Math.random() * (0.8 - 0.5);
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            Wiese.crc2.save();
            Wiese.crc2.translate(this.xPos, y);
            Wiese.crc2.scale(randomScale, randomScale);
            Wiese.crc2.fillStyle = "green";
            Wiese.crc2.fillRect(0, 0, 5, 40);
            for (let index = 0; index < 4; index++) {
                Wiese.crc2.beginPath();
                Wiese.crc2.rotate(Math.PI / 2);
                Wiese.crc2.moveTo(0, 0);
                Wiese.crc2.lineTo(-15, -15);
                Wiese.crc2.lineTo(-5, -10);
                Wiese.crc2.lineTo(0, -15);
                Wiese.crc2.lineTo(5, -10);
                Wiese.crc2.lineTo(15, -15);
                Wiese.crc2.closePath();
                Wiese.crc2.fillStyle = "blue";
                Wiese.crc2.fill();
            }
            Wiese.crc2.restore();
        }
    }
    Wiese.Tulip = Tulip;
    class CornFlower extends Flower {
        // constructor(_xPos: number, _yRandomMin: number, _yRandomMax: number) {
        //     super(_xPos, _yRandomMin, _yRandomMax);
        // }
        draw() {
            let randomScale = 0.5 + Math.random() * (0.8 - 0.5);
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            Wiese.crc2.save();
            Wiese.crc2.translate(this.xPos, y);
            Wiese.crc2.scale(randomScale, randomScale);
            Wiese.crc2.fillStyle = "green";
            Wiese.crc2.fillRect(0, 0, 5, 40);
            Wiese.crc2.beginPath();
            Wiese.crc2.moveTo(0, 0);
            Wiese.crc2.lineTo(-15, -5);
            Wiese.crc2.lineTo(-25, -30);
            Wiese.crc2.lineTo(-10, -20);
            Wiese.crc2.lineTo(0, -40);
            Wiese.crc2.lineTo(10, -20);
            Wiese.crc2.lineTo(25, -30);
            Wiese.crc2.lineTo(15, -5);
            Wiese.crc2.closePath();
            Wiese.crc2.fillStyle = "pink";
            Wiese.crc2.fill();
            Wiese.crc2.restore();
        }
    }
    Wiese.CornFlower = CornFlower;
})(Wiese || (Wiese = {}));
//# sourceMappingURL=flower.js.map