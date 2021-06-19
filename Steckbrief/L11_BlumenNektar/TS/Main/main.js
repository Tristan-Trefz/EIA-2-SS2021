var Wiese;
(function (Wiese) {
    window.addEventListener("load", handleLoad);
    Wiese.golden = 0.62;
    let movables = [];
    let flowers = [];
    // let clouds: Cloud[] = [];
    let imageData;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        Wiese.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBees(10);
        createBackground();
        createFlowers();
        createCloud();
        imageData = Wiese.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        Wiese.drawBackground();
        Wiese.drawSun({ x: Wiese.crc2.canvas.width / 2, y: Wiese.crc2.canvas.height * 0.15 });
        Wiese.drawMountains({ x: 0, y: Wiese.crc2.canvas.height * Wiese.golden }, 200, 300, "grey");
        Wiese.drawMountains({ x: 0, y: Wiese.crc2.canvas.height * Wiese.golden }, 150, 200, "lightgrey");
        Wiese.drawTree(0, 15, 50, 20, 50);
        Wiese.drawBeeHive();
    }
    function createFlowers() {
        let xPos = 0;
        do {
            let flowerType = Math.floor(Math.random() * 2) + 1;
            if (flowerType == 1) {
                flowers.push(new Wiese.Tulip(xPos, 50 + (Wiese.crc2.canvas.height * Wiese.golden), Wiese.crc2.canvas.height * 0.9));
            }
            else {
                flowers.push(new Wiese.CornFlower(xPos, 50 + (Wiese.crc2.canvas.height * Wiese.golden), Wiese.crc2.canvas.height * 0.9));
            }
            xPos += 10 + Math.random() * (50 - 10);
        } while (xPos < Wiese.crc2.canvas.width);
    }
    function createBees(_nBee) {
        for (let index = 0; index < _nBee; index++) {
            let randomScale = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX = (Math.random() - 0.5) * 5;
            let randomVelocityY = (Math.random() - 0.5) * 5;
            movables.push(new Wiese.Bee({ x: Wiese.crc2.canvas.width / 2, y: Wiese.crc2.canvas.height * Wiese.golden }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }
    }
    function createCloud() {
        movables.push(new Wiese.Cloud({ x: Wiese.crc2.canvas.width * .10, y: Wiese.crc2.canvas.height * .10 }, { x: 0.5, y: 0.1 }));
        movables.push(new Wiese.Cloud({ x: Wiese.crc2.canvas.width * .5, y: Wiese.crc2.canvas.height * .05 }, { x: 0.5, y: 0.1 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        Wiese.crc2.clearRect(0, 0, Wiese.crc2.canvas.width, Wiese.crc2.canvas.height);
        Wiese.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < movables.length; index++) {
            movables[index].update();
            movables[index].draw();
        }
    }
})(Wiese || (Wiese = {}));
//# sourceMappingURL=main.js.map