namespace blumenwiese {
    export class Bee {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position?: Vector) {
            
            if (_position) 
                this.position = _position;
            else
                this.position = new Vector(300, 400); 
                
            this.velocity = new Vector(50, 0); 
            this.velocity.random(120, 20); 
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
            render.save();

            //wings
            render.save();
            render.beginPath();
            render.arc(this.position.x - 4, this.position.y - 11, 10, 0, 2 * Math.PI);
            render.strokeStyle = "black";
            render.fillStyle = "RGB(235,230,197)";
            render.fill();
            render.closePath();
            render.stroke();

            render.save();
            render.beginPath();
            render.arc(this.position.x + 4, this.position.y - 11, 10, 0, 2 * Math.PI);
            render.strokeStyle = "black";
            render.fillStyle = "RGB(235,230,197)";
            render.fill();
            render.closePath();

            
            render.stroke();

            render.beginPath();
            
            //body
            render.ellipse(this.position.x, this.position.y, 10, 20, 300, 0, 2 * Math.PI);
            render.strokeStyle = "RGB(219,184,23)";
            render.fillStyle = "RGB(219,184,23)";
            render.fill();
            render.closePath();
            
            //stripes
            render.beginPath();
            render.moveTo(this.position.x - 10, this.position.y + 9);
            render.lineTo(this.position.x - 10, this.position.y - 9);
            render.moveTo(this.position.x, this.position.y + 10);
            render.lineTo(this.position.x, this.position.y - 10);
            render.moveTo(this.position.x + 10, this.position.y + 9);
            render.lineTo(this.position.x + 10, this.position.y - 9);
            render.strokeStyle = "black";
            render.lineWidth = 5;
            render.stroke();
            render.closePath();
            render.restore();

            
            render.restore();
        }
    }
}