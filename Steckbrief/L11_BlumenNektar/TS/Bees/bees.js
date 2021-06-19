var Wiese;
(function (Wiese) {
    class Bee extends Wiese.Movable {
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            this.counter = 0;
            this.randomScale = _randomScale;
        }
        draw() {
            Wiese.crc2.save();
            Wiese.crc2.translate(this.posX, this.posY);
            Wiese.crc2.scale(this.randomScale, this.randomScale);
            Wiese.crc2.lineWidth = 2;
            Wiese.crc2.strokeStyle = "black";
            Wiese.crc2.fillStyle = "gold";
            Wiese.crc2.beginPath();
            Wiese.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            Wiese.crc2.fill();
            Wiese.crc2.beginPath();
            Wiese.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            Wiese.crc2.stroke();
            Wiese.crc2.beginPath();
            Wiese.crc2.fillStyle = "white";
            Wiese.crc2.arc(-5, -11, 5, 0, Math.PI * 2, false);
            Wiese.crc2.fill();
            Wiese.crc2.stroke();
            Wiese.crc2.beginPath();
            Wiese.crc2.fillStyle = "white";
            Wiese.crc2.arc(5, -11, 5, 0, Math.PI * 2, false);
            Wiese.crc2.fill();
            Wiese.crc2.stroke();
            Wiese.crc2.beginPath();
            Wiese.crc2.arc(-2, -1, 2, 0, Math.PI * 2, false);
            Wiese.crc2.stroke();
            Wiese.crc2.beginPath();
            Wiese.crc2.arc(2, -1, 2, 0, Math.PI * 2, false);
            Wiese.crc2.stroke();
            Wiese.crc2.restore();
        }
        update() {
            if (this.posX > Wiese.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Wiese.crc2.canvas.height || this.posY < Wiese.crc2.canvas.height * 0.40) {
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
    Wiese.Bee = Bee;
})(Wiese || (Wiese = {}));
//# sourceMappingURL=bees.js.map