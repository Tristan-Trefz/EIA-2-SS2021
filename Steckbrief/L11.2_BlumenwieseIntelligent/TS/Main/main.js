var End;
(function (End) {
    window.addEventListener("load", handleLoad);
    End.golden = 0.62;
    let Task;
    (function (Task) {
        Task[Task["flyToFlower"] = 0] = "flyToFlower";
        Task[Task["drinkNectar"] = 1] = "drinkNectar";
        Task[Task["flyBack"] = 2] = "flyBack";
        Task[Task["storeNectar"] = 3] = "storeNectar";
        Task[Task["flyAround"] = 4] = "flyAround";
    })(Task = End.Task || (End.Task = {}));
    let movables = [];
    End.bees = [];
    End.flowers = [];
    let imageData;
    let indexBee;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        canvas.addEventListener("click", clickBee);
        End.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBees(10);
        createBackground();
        createFlowers();
        createCloud();
        imageData = End.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        End.drawBackground();
        End.drawSun({ x: End.crc2.canvas.width / 2, y: End.crc2.canvas.height * 0.15 });
        End.drawMountains({ x: 0, y: End.crc2.canvas.height * End.golden }, 200, 300, "grey");
        End.drawMountains({ x: 0, y: End.crc2.canvas.height * End.golden }, 150, 200, "lightgrey");
        End.drawTree(0, 15, 50, 20, 50);
        End.drawBeeHive();
    }
    function createFlowers() {
        let xPos = 0;
        do {
            let flowerType = Math.floor(Math.random() * 2) + 1;
            if (flowerType == 1) {
                End.flowers.push(new End.Tulip(xPos, 50 + (End.crc2.canvas.height * End.golden), End.crc2.canvas.height * 0.9));
            }
            else {
                End.flowers.push(new End.CornFlower(xPos, 50 + (End.crc2.canvas.height * End.golden), End.crc2.canvas.height * 0.9));
            }
            xPos += 10 + Math.random() * (50 - 10);
        } while (xPos < End.crc2.canvas.width);
        console.log(End.flowers);
    }
    function createBees(_nBee) {
        for (let index = 0; index < _nBee; index++) {
            let randomScale = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX = (Math.random() - 0.5) * 5;
            let randomVelocityY = (Math.random() - 0.5) * 5;
            End.bees.push(new End.Bee({ x: End.crc2.canvas.width / 2, y: End.crc2.canvas.height * End.golden }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }
    }
    function clickBee(_event) {
        let mouseX = _event.clientX;
        let mouseY = _event.clientY;
        let randomScale = 0.5 + Math.random() * (2.5 - 1.3);
        let randomVelocityX = (Math.random() - 0.5) * 5;
        let randomVelocityY = (Math.random() - 0.5) * 5;
        End.bees.push(new End.Bee({ x: mouseX, y: mouseY }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
    }
    function createCloud() {
        movables.push(new End.Cloud({ x: End.crc2.canvas.width * .10, y: End.crc2.canvas.height * .10 }, { x: 0.5, y: 0.1 }));
        movables.push(new End.Cloud({ x: End.crc2.canvas.width * .5, y: End.crc2.canvas.height * .05 }, { x: 0.5, y: 0.1 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        End.crc2.clearRect(0, 0, End.crc2.canvas.width, End.crc2.canvas.height);
        End.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < End.flowers.length; index++) {
            End.flowers[index].updateNectar();
        }
        for (let index = 0; index < movables.length; index++) {
            movables[index].update();
            movables[index].draw();
        }
        for (let indexFlower = 0; indexFlower < End.flowers.length; indexFlower++) {
            if (End.flowers[indexFlower].assign == false) {
                if (End.flowers[indexFlower].nectar > 7) {
                    // indexFlower = index;
                    for (let index = 0; index < End.bees.length; index++) {
                        if (End.bees[index].jobBee == false) {
                            indexBee = index;
                            End.flowers[indexFlower].setAssign(true);
                            End.bees[indexBee].setFlowerIndex(indexFlower);
                            End.bees[indexBee].setTask(Task.flyToFlower);
                            break;
                        }
                    }
                }
            }
        }
        for (let index = 0; index < End.bees.length; index++) {
            End.bees[index].update();
            End.bees[index].draw();
        }
    }
})(End || (End = {}));
//# sourceMappingURL=main.js.map