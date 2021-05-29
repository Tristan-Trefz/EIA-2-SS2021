var blumenwiese;
(function (blumenwiese) {
    class Cloud {
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new blumenwiese.Vector(50, 50);
            this.velocity = new blumenwiese.Vector(30, 0);
            this.size = _size;
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
            let nParticles = 40;
            let radiusParticle = 90;
            let particle = new Path2D();
            let gradient = blumenwiese.render.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            blumenwiese.render.save();
            blumenwiese.render.translate(this.position.x, this.position.y);
            blumenwiese.render.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                blumenwiese.render.save();
                blumenwiese.render.translate((Math.random() - 0.5) * this.size.x, -(Math.random() * this.size.y));
                blumenwiese.render.fill(particle);
                blumenwiese.render.restore();
            }
            blumenwiese.render.restore();
        }
    }
    blumenwiese.Cloud = Cloud;
})(blumenwiese || (blumenwiese = {}));
//# sourceMappingURL=Cloud.js.map