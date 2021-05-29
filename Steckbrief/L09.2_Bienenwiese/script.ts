namespace blumenwiese {

    let imageData: ImageData;
    let cloudArray: Cloud [] = [];
    let beeArray: Bee [] = [];        
    export let render: CanvasRenderingContext2D;


    window.addEventListener("load", handleLoad);


    function handleLoad (): void { 

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        render = <CanvasRenderingContext2D>canvas.getContext("2d");    

        drawBackground();
        drawMountains();
        //drawMeadow();
        drawSun();
        drawTrees();
        drawClouds(270, 75); //danke an Martin Fuhr fuer die Hife bei Den Clouds und Bienen
        window.setInterval(moveCloud, 50);
        drawBee();
        window.setInterval(moveBee, 20);
        drawFlowers();

        
        function drawBackground(): void {

            let gradient: CanvasGradient = render.createLinearGradient(800 / 2, 0, 800 / 2, 600);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(0.3, "orange");
            render.fillStyle = gradient;
            render.fillRect(0, 0, 800, 600);        
        }

        //von Maximilian buckel inspiriert
        function drawMountains(): void {

            for (let i: number = 0; i < 3; i++) {

            render.save();

            if (i == 0) {
                
                render.globalAlpha = 0.3;

            } else if (i == 1) {

                render.globalAlpha = 0.6;

            } else {

                render.globalAlpha = 1;

            }

            render.fillStyle = "#9e9e9e";

            drawPointyMountain(rand(), .4, .35, .4);
            drawPointyMountain(.2 + rand(), .5, .35, .4);
            drawPointyMountain(.4 + rand(), .4, .35, .4);
            drawPointyMountain(.56 + rand(), .6, .3, .3);
            drawPointyMountain(.7 + rand(), .45, .36, .4);
            render.restore();
            }
        }

        function rand(): number {
            return (Math.random() - Math.random()) * Math.random() * 0.5;
        }

        function drawPointyMountain(x: number, y: number, w: number, h: number): void {

            render.save();
            render.translate(wp(x), hp(y)); 
    
            let bottomLeftX: number = 0;
            let bottomLeftY: number = hp(h);
    
            let topX: number = wp(w) / 2;
            let topY: number = 0;
    
            let bottomRightX: number = wp(w);
            let bottomRightY: number = hp(h);
    
            render.moveTo(bottomLeftX, bottomLeftY);
            render.beginPath();
            render.lineTo(topX, topY); 
            render.lineTo(bottomRightX, bottomRightY);
            render.lineTo(bottomLeftX, bottomLeftY);
            render.closePath();
            render.fill();
    
            render.restore();
        }

        
        function hp(h: number): number {
        return canvas.height * h;
        }

        function wp(w: number): number {
        return canvas.width * w;
        }

        function drawMeadow(): void {
            
        render.fillStyle = "#72c955";

        render.rect(0, 120, 600, 200);
        render.fill();

        }

        //Jirkas Code, abgeändert
        function drawSun(): void {

            let r1: number = 30;
            let r2: number = 180;
            let gradientSun: CanvasGradient = render.createRadialGradient(0, 0, r1, 0, 0, r2);

            gradientSun.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradientSun.addColorStop(0.1, "HSLA(60, 100%, 90%, 0.5)");
            gradientSun.addColorStop(1, "HSLA(60, 100%, 80%, 0)");
    
            let X: number = render.canvas.width;
            let Y: number = render.canvas.height / 2 - 100;
    
            render.save();
            if (X > 700) {
            X = 700;
            }
            if (Y < 20) {
            Y = 20;
            } else if (Y > 100) {
            Y = 100;
            }
            render.translate(X, Y);
    
            render.fillStyle = gradientSun;
            render.arc(0, 0, r2, 0, 2 * Math.PI);
            render.fill();
    
            render.restore();
        }

        let flowerColors: string[] = [
            "#e0d821",
            "#25c9c9",
            "#c71515",
            "#c77115",
            "#bf19d4",
            "#ea5bff"
        ];

        function drawFlowers(): void {

            render.save();

            drawFlower(0.1 + rand(), 0.95 + rand(), 0.005, 0.06, flowerColors[Math.floor(Math.random() * flowerColors.length)]);
            drawFlower(0.2 + rand(), 0.95 + rand(), 0.005, 0.06, flowerColors[Math.floor(Math.random() * flowerColors.length)]);
            drawFlower(0.3 + rand(), 0.95 + rand(), 0.005, 0.06, flowerColors[Math.floor(Math.random() * flowerColors.length)]);
            drawFlower(0.4 + rand(), 0.96 + rand(), 0.005, 0.06, flowerColors[Math.floor(Math.random() * flowerColors.length)]);
            drawFlower(0.5 + rand(), 0.91 + rand(), 0.005, 0.06, flowerColors[Math.floor(Math.random() * flowerColors.length)]);
            drawFlower(0.6 + rand(), 0.99 + rand(), 0.005, 0.06, flowerColors[Math.floor(Math.random() * flowerColors.length)]);
            drawFlower(0.7 + rand(), 0.95 + rand(), 0.005, 0.06, flowerColors[Math.floor(Math.random() * flowerColors.length)]);
            drawFlower(0.8 + rand(), 0.98 + rand(), 0.005, 0.06, flowerColors[Math.floor(Math.random() * flowerColors.length)]);
            drawFlower(0.9 + rand(), 0.95 + rand(), 0.005, 0.06, flowerColors[Math.floor(Math.random() * flowerColors.length)]);


            render.restore();
        }

        function drawFlower(x: number, y: number, w: number, h: number, color: string): void {
            render.save();
            render.translate(wp(x), hp(y));
    
            render.fillStyle = "brown";
            render.moveTo(0, 0);
            render.fillRect(wp(0.4 * w), hp(0.1 * h), wp(0.1 * w), hp(0.5 * h));
    
            render.fillStyle = color;
            render.moveTo(0, 0);
            fillCircle(wp(0.4 * w), hp(0), wp(w));
    
            render.restore();
        }

        function fillCircle(x: number, y: number, r: number): void {
            render.moveTo(x, y);
            render.beginPath();
            render.arc(x, y, r, 0, 360);
            render.closePath();
            render.fill();
        }

        //von Maximilian buckel inspiriert
        function drawTrees(): void {
            render.save();
    
            drawTree(0.1 + rand(), 0.8 + rand(), 0.12, 0.4);
            drawTree(0.3 + rand(), 0.85 + rand(), 0.12, 0.4);
            drawTree(0.5 + rand(), 0.81 + rand(), 0.1, 0.3);
            drawTree(0.8 + rand(), 0.89 + rand(), 0.1, 0.26);
    
    
            render.restore();
        }
    
        function drawTree(x: number, y: number, w: number, h: number): void {
            render.save();
            render.translate(wp(x), hp(y));
    
            render.fillStyle = "brown";
            render.moveTo(0, 0);
            render.fillRect(wp(0.4 * w), hp(0.1 * h), wp(0.25 * w), hp(0.5 * h));
    
            render.fillStyle = "green";
            render.moveTo(0, 0);
            render.fillRect(wp(0 ), hp(0 ), wp(w ), hp(0.35 * h));
    
            render.restore();
        }

        
        function drawClouds(): void {
            for (let i: number = 0; i < 1; i++) {
                let cloud: Cloud = new Cloud({x: 270, y: 75}); 
                cloudArray.push(cloud);                 
            }
        }
    
        function moveCloud(): void {
            render.clearRect(0, 0, render.canvas.width, render.canvas.height);
            render.putImageData(imageData, 0, 0);
    
            for (let cloud of cloudArray) {
                cloud.move(1 / 50);
                cloud.draw();
            }
        }

        function drawBee(): void {
            for (let i: number = 0; i < 10; i++) {
                let bee: Bee = new Bee(0.8);
                beeArray.push(bee);    
            }
        }
    
        function moveBee(): void {
            for (let bee of beeArray) {
                bee.move(1 / 40); 
                bee.draw();
            }
        }
    }
}