window.addEventListener("load", handleLoad);

function handleLoad(_load: Event): void {

    let body: HTMLElement = document.querySelector("body");
    let section: HTMLElement = document.querySelector("section");
    let div0: HTMLElement = document.getElementById("#div0");
    let div1: HTMLElement = document.getElementById("#div1");

    document.addEventListener("mousemove", setInfoBox);

    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);

    body.addEventListener("click", logInfo);
    body.addEventListener("keyup", logInfo);

    section.addEventListener("click", logInfo);
    section.addEventListener("keyup", logInfo);

    div0.addEventListener("click", logInfo);
    div0.addEventListener("keyup", logInfo);

    div1.addEventListener("click", logInfo);
    div1.addEventListener("keyup", logInfo);
}

function setInfoBox(_event: MouseEvent): void {

    //console.log(_event);
    let x: number = _event.clientX;
    let y: number = _event.clientY;
    let span: HTMLSpanElement = document.querySelector("span");

    span.style.left = x + 20 + "px";
    span.style.top = y + 20 + "px";
    span.innerHTML = x + "," + y + "<br>" + _event.target;

}

function logInfo(_event: Event): void {
    console.log( _event.type, _event.target, _event.currentTarget);

}