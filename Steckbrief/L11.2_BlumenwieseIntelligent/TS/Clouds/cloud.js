"use strict";
var End;
(function (End) {
    class Cloud extends End.Movable {
        // constructor(_position: Vector, _velocity: Vector) {
        //     super(_position, _velocity);
        // }
        draw() {
            End.crc2.save();
            End.crc2.translate(this.posX, this.posY);
            End.crc2.beginPath();
            End.crc2.moveTo(-115, -20);
            End.crc2.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            End.crc2.bezierCurveTo(-35, 80, 35, 80, 55, 50);
            End.crc2.bezierCurveTo(135, 50, 135, 20, 105, 0);
            End.crc2.bezierCurveTo(165, -60, 85, -70, 55, -50);
            End.crc2.bezierCurveTo(35, -95, -35, -80, -35, -50);
            End.crc2.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            End.crc2.lineWidth = 2;
            End.crc2.fillStyle = "white";
            End.crc2.fill();
            End.crc2.strokeStyle = "white";
            End.crc2.closePath();
            End.crc2.stroke();
            End.crc2.restore();
        }
        update() {
            if (this.posX > End.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > End.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
        }
    }
    End.Cloud = Cloud;
})(End || (End = {}));
//# sourceMappingURL=cloud.js.map