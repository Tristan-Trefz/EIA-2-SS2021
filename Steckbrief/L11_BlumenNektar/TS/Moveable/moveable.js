var Nektar;
(function (Nektar) {
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
    Nektar.Movable = Movable;
})(Nektar || (Nektar = {}));
//# sourceMappingURL=moveable.js.map