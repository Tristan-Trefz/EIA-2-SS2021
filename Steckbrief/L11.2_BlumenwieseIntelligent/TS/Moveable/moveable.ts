namespace End {

    export abstract class Movable {
        protected beeDoingJob: boolean = false;
        protected task: Task = Task.flyAround;
        protected flowerIndex: number;
        protected posX: number;
        protected posY: number;

        protected xFlowerTarget: number;
        protected yFlowerTarget: number;

        protected velocityX: number;
        protected velocityY: number;

        constructor(_position: Vector, _velocity: Vector) {
            this.posX = _position.x;
            this.posY = _position.y;

            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }

        // get taskBee(): Task {
        //     return this.task;
        // }

        get jobBee(): boolean {
            return this.beeDoingJob;
        }

        public draw(): void {
            //Draw
        }

        public update(): void {
            //Update
        }

        

        setTask(_task: Task): void {
            this.task = _task;
            if (this.task == Task.flyAround) {
                this.beeDoingJob = false;
            }
            else {
                this.beeDoingJob = true;
            }
        }

        setFlowerIndex(_index: number): void {
            this.flowerIndex = _index;
            this.xFlowerTarget = flowers[this.flowerIndex].flowerPos.x;
            this.yFlowerTarget = flowers[this.flowerIndex].flowerPos.y;

            console.log(flowers[this.flowerIndex].flowerPos.x, flowers[this.flowerIndex].flowerPos.y, this.flowerIndex);
        }


    }

}