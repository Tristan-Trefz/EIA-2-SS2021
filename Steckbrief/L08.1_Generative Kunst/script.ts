window.addEventListener("load", handleLoad);

let render: CanvasRenderingContext2D;
let shapeNum: number = Math.floor(Math.random() * 10);
let chars: string [] = ["a", "b", "c", "d", "e", "f", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


function handleLoad(): void {

    let reload: HTMLButtonElement = document.querySelector("button");

    reload.addEventListener("click", handleReload);

    function handleReload(): void {

        window.location.reload();

    }

    let canvas: HTMLCanvasElement = document.querySelector("canvas");
    render = canvas.getContext("2d");

    let sides: number = Math.floor(Math.random() * 10);
    let penStartX: number = Math.floor(Math.random() * 500);
    let penStartY: number = Math.floor(Math.random() * 500);
    let chance: number = Math.round(Math.random());

    render.fillStyle = "white";
    render.fillRect(0, 0, canvas.width, canvas.height);
    render.globalAlpha = Math.random();
    render.beginPath();
    render.moveTo(penStartX, penStartY);

    for (let i: number = 0; i < shapeNum; i++) {

        if (chance == 0) {

            for (let j: number = 0; j < sides; j++) {

                render.quadraticCurveTo(Math.random() * 500, Math.random() * 500, Math.random() * 500, Math.random() * 500);

            }

            render.quadraticCurveTo(Math.random() * 500, Math.random() * 500, penStartX, penStartY);

        } else {

            for (let j: number = 0; j < sides; j++) {

                render.lineTo(Math.random() * 500, Math.random() * 500);

            }

            render.lineTo(penStartX, penStartX);

        }

        let randColor: string = "#";

        for (let k: number = 0; k < 6; k++) {

            randColor += chars[Math.floor(Math.random() * chars.length)];

        }

        render.closePath();
        render.fillStyle = randColor;
        render.fill();

    }

}


