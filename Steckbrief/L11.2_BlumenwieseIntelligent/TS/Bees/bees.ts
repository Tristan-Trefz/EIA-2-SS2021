namespace End {

    export class Bee extends Movable {

        private randomScale: number;
        private randomNumber: number = (Math.floor(Math.random() * 2000) + 1000);
        private counter: number = 0;

        constructor(_position: Vector, _velocity: Vector, _randomScale: number) {
            super(_position, _velocity);
            this.randomScale = _randomScale;
        }

        public draw(): void {

            crc2.save();
            crc2.translate(this.posX, this.posY);

            crc2.scale(this.randomScale, this.randomScale);
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.fillStyle = "gold";
            crc2.beginPath();
            crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(-5, -11, 5, 0, Math.PI * 2, false);
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(5, -11, 5, 0, Math.PI * 2, false);
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.arc(-2, -1, 2, 0, Math.PI * 2, false);
            crc2.stroke();
            crc2.beginPath();
            crc2.arc(2, -1, 2, 0, Math.PI * 2, false);
            crc2.stroke();

            crc2.restore();
        }

        public update(): void {

            switch (this.task) {
                case Task.flyToFlower:
                    // console.log("fliege zu flower");

                    let xFlowerDiff: number = this.xFlowerTarget - this.posX + 5;
                    let yFlowerDiff: number = this.yFlowerTarget - this.posY;
                   
                    if (xFlowerDiff < 1 && yFlowerDiff < 1)
                        this.setTask(Task.drinkNectar);
                    else {
                        this.posX += xFlowerDiff * 0.005;
                        this.posY += yFlowerDiff * 0.005;
                    }
                    break;

                case Task.drinkNectar:
                    // console.log("Trinken");
                    this.setTask(Task.flyBack);
                    flowers[this.flowerIndex].setNectar();


                    break;
                case Task.flyBack:
                    // console.log("nach hause");
                    let xHomeDiff: number = (crc2.canvas.width / 2) - this.posX;
                    let yHomeDiff: number = (crc2.canvas.height * golden) - this.posY;

                    if (Math.abs(xHomeDiff) < 1 && Math.abs(yHomeDiff) < 1){
                        flowers[this.flowerIndex].setAssign(false);
                        this.setTask(Task.storeNectar);
                    }
                        
                    else {
                        this.posX += xHomeDiff * 0.005;
                        this.posY += yHomeDiff * 0.005;
                    }
                    break;

                case Task.storeNectar:
                    // console.log("chilln");
                    this.setTask(Task.flyAround);
                    break;
                    
                case Task.flyAround:
                    // console.log("fly me to the moon");
                    if (this.posX > crc2.canvas.width || this.posX < 0) {
                        this.velocityX = -this.velocityX;
                    }

                    if (this.posY > crc2.canvas.height || this.posY < crc2.canvas.height * 0.40) {
                        this.velocityY = -this.velocityY;
                    }

                    if (this.counter == this.randomNumber) {
                        this.velocityX = -this.velocityX;
                        this.velocityY = -this.velocityY;
                        this.counter = 0;
                        this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
                    }

                    this.posX += this.velocityX;
                    this.posY += this.velocityY;
                    this.counter++;
            }
        }
    }

}