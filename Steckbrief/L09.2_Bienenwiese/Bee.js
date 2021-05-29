var blumenwiese;
(function (blumenwiese) {
    class Bee {
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new blumenwiese.Vector(300, 400);
            this.velocity = new blumenwiese.Vector(50, 0);
            this.velocity.random(120, 20);
        }
        move(_timeslice) {
            let offset = new blumenwiese.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += blumenwiese.render.canvas.width;
            if (this.position.y < 0)
                this.position.y += blumenwiese.render.canvas.height;
            if (this.position.x > blumenwiese.render.canvas.width)
                this.position.x -= blumenwiese.render.canvas.width;
            if (this.position.y > blumenwiese.render.canvas.height)
                this.position.y -= blumenwiese.render.canvas.height;
        }
        draw() {
            blumenwiese.render.save();
            //wings
            blumenwiese.render.save();
            blumenwiese.render.beginPath();
            blumenwiese.render.arc(this.position.x - 4, this.position.y - 11, 10, 0, 2 * Math.PI);
            blumenwiese.render.strokeStyle = "black";
            blumenwiese.render.fillStyle = "RGB(235,230,197)";
            blumenwiese.render.fill();
            blumenwiese.render.closePath();
            blumenwiese.render.stroke();
            blumenwiese.render.save();
            blumenwiese.render.beginPath();
            blumenwiese.render.arc(this.position.x + 4, this.position.y - 11, 10, 0, 2 * Math.PI);
            blumenwiese.render.strokeStyle = "black";
            blumenwiese.render.fillStyle = "RGB(235,230,197)";
            blumenwiese.render.fill();
            blumenwiese.render.closePath();
            blumenwiese.render.stroke();
            blumenwiese.render.beginPath();
            //body
            blumenwiese.render.ellipse(this.position.x, this.position.y, 10, 20, 300, 0, 2 * Math.PI);
            blumenwiese.render.strokeStyle = "RGB(219,184,23)";
            blumenwiese.render.fillStyle = "RGB(219,184,23)";
            blumenwiese.render.fill();
            blumenwiese.render.closePath();
            //stripes
            blumenwiese.render.beginPath();
            blumenwiese.render.moveTo(this.position.x - 10, this.position.y + 9);
            blumenwiese.render.lineTo(this.position.x - 10, this.position.y - 9);
            blumenwiese.render.moveTo(this.position.x, this.position.y + 10);
            blumenwiese.render.lineTo(this.position.x, this.position.y - 10);
            blumenwiese.render.moveTo(this.position.x + 10, this.position.y + 9);
            blumenwiese.render.lineTo(this.position.x + 10, this.position.y - 9);
            blumenwiese.render.strokeStyle = "black";
            blumenwiese.render.lineWidth = 5;
            blumenwiese.render.stroke();
            blumenwiese.render.closePath();
            blumenwiese.render.restore();
            blumenwiese.render.restore();
        }
    }
    blumenwiese.Bee = Bee;
})(blumenwiese || (blumenwiese = {}));
//# sourceMappingURL=Bee.js.map