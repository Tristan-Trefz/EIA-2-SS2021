window.addEventListener("load", function(): void {

let button: HTMLButtonElement = document.querySelector("button");
let sign: number;

button.addEventListener("mouseup", handleStart);

function handleStart(): void {
    sign = Number (prompt("type a number", ""));
}




});

