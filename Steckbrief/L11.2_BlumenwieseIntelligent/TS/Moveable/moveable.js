"use strict";
var End;
(function (End) {
    class Movable {
        beeDoingJob = false;
        task = End.Task.flyAround;
        flowerIndex;
        posX;
        posY;
        xFlowerTarget;
        yFlowerTarget;
        velocityX;
        velocityY;
        constructor(_position, _velocity) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        // get taskBee(): Task {
        //     return this.task;
        // }
        get jobBee() {
            return this.beeDoingJob;
        }
        draw() {
            //Draw
        }
        update() {
            //Update
        }
        setTask(_task) {
            this.task = _task;
            if (this.task == End.Task.flyAround) {
                this.beeDoingJob = false;
            }
            else {
                this.beeDoingJob = true;
            }
        }
        setFlowerIndex(_index) {
            this.flowerIndex = _index;
            this.xFlowerTarget = End.flowers[this.flowerIndex].flowerPos.x;
            this.yFlowerTarget = End.flowers[this.flowerIndex].flowerPos.y;
            console.log(End.flowers[this.flowerIndex].flowerPos.x, End.flowers[this.flowerIndex].flowerPos.y, this.flowerIndex);
        }
    }
    End.Movable = Movable;
})(End || (End = {}));
//# sourceMappingURL=moveable.js.map