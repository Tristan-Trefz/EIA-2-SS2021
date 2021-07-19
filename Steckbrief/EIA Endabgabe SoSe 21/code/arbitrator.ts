/*
Aufgabe: <Abschlussarbeit S21>
Name: <Tristan Trefz>
Matrikel: <266703>
Datum: <19.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Moritz Hinderer, Martin Fuhr, Julian Himmel, weitere Quellen: Inverted Classroon, Internet>
*/

namespace Endabgabe {
    
    //class for the arbitrator
    export class Arbitrator extends Movable {
        constructor(_position: Vector) {
            super(
                new Vector(_position.X, _position.Y)
            );
            //set default target
            this.target = new Vector(_position.X, _position.Y);
            //set radius
            this.radius = 1.5;
        }

        public draw(): void {
            ctx.save();

            //draw arbitrator
            ctx.beginPath();
            ctx.arc(this.position.X, this.position.Y, this.getRadius(), 0, 2 * Math.PI, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "#003300";
            ctx.stroke();
            ctx.restore();
        }
    }
}
