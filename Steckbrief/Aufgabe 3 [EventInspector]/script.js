window.addEventListener("load", handleLoad);
function handleLoad(_load) {
    let body = document.querySelector("body");
    let section = document.querySelector("section");
    let div0 = document.getElementById("#div0");
    let div1 = document.getElementById("#div1");
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
function setInfoBox(_event) {
    //console.log(_event);
    let x = _event.clientX;
    let y = _event.clientY;
    let span = document.querySelector("span");
    span.style.left = x + 20 + "px";
    span.style.top = y + 20 + "px";
    span.innerHTML = x + "," + y + "<br>" + _event.target;
}
function logInfo(_event) {
    console.log(_event.type, _event.target, _event.currentTarget);
}
//# sourceMappingURL=script.js.map