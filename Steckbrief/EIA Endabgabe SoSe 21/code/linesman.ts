/*
Aufgabe: <Abschlussarbeit S21>
Name: <Tristan Trefz>
Matrikel: <266703>
Datum: <19.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Moritz Hinderer, Martin Fuhr, Julian Himmel, weitere Quellen: Inverted Classroon, Internet>
*/

namespace Endabgabe {
    export class Linesman extends Movable {
        private targetFn: () => Vector;

        constructor(_position: Vector) {
            super(
                new Vector(_position.X, _position.Y)
            );
            this.target = new Vector(_position.X, _position.Y);
            this.radius = 1.5;


        }
        public setTargetFn(cb: () => Vector): void {
            this.targetFn = cb;
        }

        public getTargetFn(): Vector {
            return this.targetFn();
        }

        public draw(): void {
            ctx.save();

            //draw player center
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
