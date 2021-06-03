window.addEventListener("load", handleLoad);
let render;
let shapeNum = Math.floor(Math.random() * 10);
let chars = ["a", "b", "c", "d", "e", "f", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
function handleLoad() {
    let reload = document.querySelector("button");
    reload.addEventListener("click", handleReload);
    function handleReload() {
        window.location.reload();
    }
    let canvas = document.querySelector("canvas");
    render = canvas.getContext("2d");
    let sides = Math.floor(Math.random() * 10);
    let penStartX = Math.floor(Math.random() * 500);
    let penStartY = Math.floor(Math.random() * 500);
    let chance = Math.round(Math.random());
    render.fillStyle = "white";
    render.fillRect(0, 0, canvas.width, canvas.height);
    render.globalAlpha = Math.random();
    render.beginPath();
    render.moveTo(penStartX, penStartY);
    for (let i = 0; i < shapeNum; i++) {
        if (chance == 0) {
            for (let j = 0; j < sides; j++) {
                render.quadraticCurveTo(Math.random() * 500, Math.random() * 500, Math.random() * 500, Math.random() * 500);
            }
            render.quadraticCurveTo(Math.random() * 500, Math.random() * 500, penStartX, penStartY);
        }
        else {
            for (let j = 0; j < sides; j++) {
                render.lineTo(Math.random() * 500, Math.random() * 500);
            }
            render.lineTo(penStartX, penStartX);
        }
        let randColor = "#";
        for (let k = 0; k < 6; k++) {
            randColor += chars[Math.floor(Math.random() * chars.length)];
        }
        render.closePath();
        render.fillStyle = randColor;
        render.fill();
    }
}
//# sourceMappingURL=script.js.map