var Wiese;
(function (Wiese) {
    class Movable {
        constructor(_position, _velocity) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        draw() {
            //Draw
        }
        update() {
            //Update
        }
    }
    Wiese.Movable = Movable;
})(Wiese || (Wiese = {}));
//# sourceMappingURL=moveable.js.map