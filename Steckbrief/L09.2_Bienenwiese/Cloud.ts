namespace blumenwiese {
    export class Cloud {
        position: Vector;
        velocity: Vector;
        size: Vector;

        constructor(_size: Vector, _position?: Vector) {

            if (_position) 
                this.position = _position;
            else
                this.position = new Vector(50, 50); 
                
            this.velocity = new Vector(30, 0); 

            this.size = _size;
        }

        move(_timeslice: number): void { 
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += render.canvas.width;
            if (this.position.y < 0)
                this.position.y += render.canvas.height;
            if (this.position.x > render.canvas.width)
                this.position.x -= render.canvas.width;
            if (this.position.y > render.canvas.height)
                this.position.y -= render.canvas.height;
        }

        draw(): void {

            let nParticles: number = 40;
            let radiusParticle: number = 90;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = render.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
    
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
    
            render.save();
            render.translate(this.position.x, this.position.y);
            render.fillStyle = gradient;
    
            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                render.save();
                render.translate((Math.random() - 0.5) * this.size.x, - (Math.random() * this.size.y));
                render.fill(particle);
                render.restore();
            }
            render.restore();   
        }
    } 
}