"use strict";
var End;
(function (End) {
    class Bee extends End.Movable {
        randomScale;
        randomNumber = (Math.floor(Math.random() * 2000) + 1000);
        counter = 0;
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomScale = _randomScale;
        }
        draw() {
            End.crc2.save();
            End.crc2.translate(this.posX, this.posY);
            End.crc2.scale(this.randomScale, this.randomScale);
            End.crc2.lineWidth = 2;
            End.crc2.strokeStyle = "black";
            End.crc2.fillStyle = "gold";
            End.crc2.beginPath();
            End.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            End.crc2.fill();
            End.crc2.beginPath();
            End.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            End.crc2.stroke();
            End.crc2.beginPath();
            End.crc2.fillStyle = "white";
            End.crc2.arc(-5, -11, 5, 0, Math.PI * 2, false);
            End.crc2.fill();
            End.crc2.stroke();
            End.crc2.beginPath();
            End.crc2.fillStyle = "white";
            End.crc2.arc(5, -11, 5, 0, Math.PI * 2, false);
            End.crc2.fill();
            End.crc2.stroke();
            End.crc2.beginPath();
            End.crc2.arc(-2, -1, 2, 0, Math.PI * 2, false);
            End.crc2.stroke();
            End.crc2.beginPath();
            End.crc2.arc(2, -1, 2, 0, Math.PI * 2, false);
            End.crc2.stroke();
            End.crc2.restore();
        }
        update() {
            switch (this.task) {
                case End.Task.flyToFlower:
                    // console.log("fliege zu flower");
                    let xFlowerDiff = this.xFlowerTarget - this.posX + 5;
                    let yFlowerDiff = this.yFlowerTarget - this.posY;
                    if (xFlowerDiff < 1 && yFlowerDiff < 1)
                        this.setTask(End.Task.drinkNectar);
                    else {
                        this.posX += xFlowerDiff * 0.005;
                        this.posY += yFlowerDiff * 0.005;
                    }
                    break;
                case End.Task.drinkNectar:
                    // console.log("Trinken");
                    this.setTask(End.Task.flyBack);
                    End.flowers[this.flowerIndex].setNectar();
                    break;
                case End.Task.flyBack:
                    // console.log("nach hause");
                    let xHomeDiff = (End.crc2.canvas.width / 2) - this.posX;
                    let yHomeDiff = (End.crc2.canvas.height * End.golden) - this.posY;
                    if (Math.abs(xHomeDiff) < 1 && Math.abs(yHomeDiff) < 1) {
                        End.flowers[this.flowerIndex].setAssign(false);
                        this.setTask(End.Task.storeNectar);
                    }
                    else {
                        this.posX += xHomeDiff * 0.005;
                        this.posY += yHomeDiff * 0.005;
                    }
                    break;
                case End.Task.storeNectar:
                    // console.log("chilln");
                    this.setTask(End.Task.flyAround);
                    break;
                case End.Task.flyAround:
                    // console.log("fly me to the moon");
                    if (this.posX > End.crc2.canvas.width || this.posX < 0) {
                        this.velocityX = -this.velocityX;
                    }
                    if (this.posY > End.crc2.canvas.height || this.posY < End.crc2.canvas.height * 0.40) {
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
    End.Bee = Bee;
})(End || (End = {}));
//# sourceMappingURL=bees.js.map