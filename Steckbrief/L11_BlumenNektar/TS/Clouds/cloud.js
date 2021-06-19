var Wiese;
(function (Wiese) {
    class Cloud extends Wiese.Movable {
        constructor(_position, _velocity) {
            super(_position, _velocity);
        }
        draw() {
            Wiese.crc2.save();
            Wiese.crc2.translate(this.posX, this.posY);
            Wiese.crc2.beginPath();
            Wiese.crc2.moveTo(-115, -20);
            Wiese.crc2.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            Wiese.crc2.bezierCurveTo(-35, 80, 35, 80, 55, 50);
            Wiese.crc2.bezierCurveTo(135, 50, 135, 20, 105, 0);
            Wiese.crc2.bezierCurveTo(165, -60, 85, -70, 55, -50);
            Wiese.crc2.bezierCurveTo(35, -95, -35, -80, -35, -50);
            Wiese.crc2.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            Wiese.crc2.lineWidth = 2;
            Wiese.crc2.fillStyle = "white";
            Wiese.crc2.fill();
            Wiese.crc2.strokeStyle = "white";
            Wiese.crc2.closePath();
            Wiese.crc2.stroke();
            Wiese.crc2.restore();
        }
        update() {
            if (this.posX > Wiese.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Wiese.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
        }
    }
    Wiese.Cloud = Cloud;
})(Wiese || (Wiese = {}));
//# sourceMappingURL=cloud.js.map