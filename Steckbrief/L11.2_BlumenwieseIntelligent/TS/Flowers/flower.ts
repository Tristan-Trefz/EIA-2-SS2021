namespace End {
    export abstract class Flower {
        protected beeAssign: boolean = false;
        protected xPos: number;
        protected yPos: number;
        protected yRandomMin: number;
        protected yRandomMax: number;
        protected counter: number = 0;
        protected nectarValue: number = Math.floor(Math.random() * 2000) + 1000;
        protected randomScale: number = 0.5 + Math.random() * (0.8 - 0.5);
        protected nectarLength: number = 1;

        constructor(_xPos: number, _yRandomMin: number, _yRandomMax: number) {
            this.xPos = _xPos;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }

        get flowerPos(): Vector {
            let pos: Vector = {x: this.xPos, y: this.yPos};
            return pos;
        }

        get nectar(): number {
            return this.nectarLength;
        }

        get assign(): boolean {
            return this.beeAssign;
        }

        setNectar (): void {
                this.nectarLength = 1;
        }

        setAssign (_value: boolean): void {
            this.beeAssign = _value;
        }

        public updateNectar(): void {
            //;
        }

        protected draw(): void {
            //mate  
        }

    }


    export class Tulip extends Flower {


        public updateNectar(): void {
            this.counter++;
            if (this.nectarLength < 15) {
                if (this.nectarValue == this.counter) {
                    this.nectarLength += 1;
                    this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
                    this.counter = 0;
                }
                crc2.save();
                crc2.translate(this.xPos, this.yPos);
                crc2.scale(this.randomScale, this.randomScale);
                crc2.beginPath();
                crc2.arc(0, 0, this.nectarLength, 0, 2 * Math.PI);
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.restore();

            }
        }

        protected draw(): void {
            let y: number = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            this.yPos = y;
            crc2.save();
            crc2.translate(this.xPos, y);
            crc2.scale(this.randomScale, this.randomScale);
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

        public updateNectar(): void {
            this.counter++;
            console.log(this.nectarLength);
            
            if (this.nectarLength < 15) {
                if (this.nectarValue == this.counter) {
                    this.nectarLength += 2;
                    this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
                    this.counter = 0;
                }
            } else {
                // console.log("nektar full");
            }
            crc2.save();
            crc2.translate(this.xPos, this.yPos);
            crc2.scale(this.randomScale, this.randomScale);
            crc2.beginPath();
            crc2.arc(0, -7, this.nectarLength, 0, 2 * Math.PI);
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.stroke();
            crc2.restore();

        }

        protected draw(): void {
            let y: number = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            this.yPos = y;
            crc2.save();
            crc2.translate(this.xPos, y);
            crc2.scale(this.randomScale, this.randomScale);
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


