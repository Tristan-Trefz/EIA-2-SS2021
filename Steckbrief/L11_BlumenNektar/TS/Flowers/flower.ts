namespace Wiese {
    export class Flower {
        xPos: number;
        yRandomMin: number;
        yRandomMax: number;

        constructor( _xPos: number, _yRandomMin: number, _yRandomMax: number) {
            this.xPos = _xPos;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }

        draw(): void {
            //mate  
        }
    }


    export class Tulip extends Flower {

        // constructor(_xPos: number, _yRandomMin: number, _yRandomMax: number) {
        //     super(_xPos, _yRandomMin, _yRandomMax);
        // }

        draw(): void {
            let randomScale: number = 0.5 + Math.random() * (0.8 - 0.5);
            let y: number = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            crc2.save();
            crc2.translate(this.xPos, y);
            crc2.scale(randomScale, randomScale);
            crc2.fillStyle = "green";
            crc2.fillRect(0, 0, 5, 40);
            for (let index: number = 0; index < 4; index++) {
                crc2.beginPath();
                crc2.rotate(Math.PI / 2);
                crc2.moveTo(0, 0);
                crc2.lineTo(-15, -15);
                crc2.lineTo(-5, -10);
                crc2.lineTo(0, -15);
                crc2.lineTo(5, -10);
                crc2.lineTo(15, -15);
                crc2.closePath();
                crc2.fillStyle = "blue";
                crc2.fill();
            }       
            crc2.restore();
        }

    }


    export class CornFlower extends Flower {

        // constructor(_xPos: number, _yRandomMin: number, _yRandomMax: number) {
        //     super(_xPos, _yRandomMin, _yRandomMax);
        // }

        draw(): void {
            let randomScale: number = 0.5 + Math.random() * (0.8 - 0.5);
            let y: number = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            crc2.save();
            crc2.translate(this.xPos, y);
            crc2.scale(randomScale, randomScale);
            crc2.fillStyle = "green";
            crc2.fillRect(0, 0, 5, 40);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(-15, -5);
            crc2.lineTo(-25, -30);
            crc2.lineTo(-10, -20);
            crc2.lineTo(0, -40);
            crc2.lineTo(10, -20);
            crc2.lineTo(25, -30);
            crc2.lineTo(15, -5);
            crc2.closePath();
            crc2.fillStyle = "pink";
            crc2.fill();
            crc2.restore();
        }
    }
}
