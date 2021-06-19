namespace blumenwiese {
    export abstract class Movable {
        position: Vector;
        velocity: Vector;

        constructor(_position?: Vector, _velocity?: Vector) {
            
            this.position = _position;
            this.velocity = _velocity;
        }

        move(_timeslice: number): void;


        draw(): void;
    }
}