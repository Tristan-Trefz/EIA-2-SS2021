"use strict";
var Nektar;
(function (Nektar) {
    window.addEventListener("load", handleLoad);
    Nektar.golden = 0.62;
    let movables = [];
    let flowers = [];
    // let clouds: Cloud[] = [];
    let imageData;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        Nektar.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBees(10);
        createBackground();
        createFlowers();
        createCloud();
        imageData = Nektar.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        Nektar.drawBackground();
        Nektar.drawSun({ x: Nektar.crc2.canvas.width / 2, y: Nektar.crc2.canvas.height * 0.15 });
        Nektar.drawMountains({ x: 0, y: Nektar.crc2.canvas.height * Nektar.golden }, 200, 300, "grey");
        Nektar.drawMountains({ x: 0, y: Nektar.crc2.canvas.height * Nektar.golden }, 150, 200, "lightgrey");
        Nektar.drawTree(0, 15, 50, 20, 50);
        Nektar.drawBeeHive();
    }
    function createFlowers() {
        let xPos = 0;
        do {
            let flowerType = Math.floor(Math.random() * 2) + 1;
            if (flowerType == 1) {
                flowers.push(new Nektar.Tulip(xPos, 50 + (Nektar.crc2.canvas.height * Nektar.golden), Nektar.crc2.canvas.height * 0.9));
            }
            else {
                flowers.push(new Nektar.CornFlower(xPos, 50 + (Nektar.crc2.canvas.height * Nektar.golden), Nektar.crc2.canvas.height * 0.9));
            }
            xPos += 10 + Math.random() * (50 - 10);
        } while (xPos < Nektar.crc2.canvas.width);
        console.log(flowers);
    }
    function createBees(_nBee) {
        for (let index = 0; index < _nBee; index++) {
            let randomScale = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX = (Math.random() - 0.5) * 5;
            let randomVelocityY = (Math.random() - 0.5) * 5;
            movables.push(new Nektar.Bee({ x: Nektar.crc2.canvas.width / 2, y: Nektar.crc2.canvas.height * Nektar.golden }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }
    }
    function createCloud() {
        movables.push(new Nektar.Cloud({ x: Nektar.crc2.canvas.width * .10, y: Nektar.crc2.canvas.height * .10 }, { x: 0.5, y: 0.1 }));
        movables.push(new Nektar.Cloud({ x: Nektar.crc2.canvas.width * .5, y: Nektar.crc2.canvas.height * .05 }, { x: 0.5, y: 0.1 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        Nektar.crc2.clearRect(0, 0, Nektar.crc2.canvas.width, Nektar.crc2.canvas.height);
        Nektar.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < flowers.length; index++) {
            flowers[index].update();
        }
        for (let index = 0; index < movables.length; index++) {
            movables[index].update();
            movables[index].draw();
        }
    }
})(Nektar || (Nektar = {}));
//# sourceMappingURL=main.js.map