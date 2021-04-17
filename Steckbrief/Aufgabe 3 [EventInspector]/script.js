window.addEventListener("load", handleLoad);
function handleLoad(_load) {
    var body = document.querySelector("body");
    var section = document.querySelector("section");
    var div0 = document.getElementById("#div0");
    var div1 = document.getElementById("#div1");
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
    var x = _event.clientX;
    var y = _event.clientY;
    var span = document.querySelector("span");
    span.style.left = x + 20 + "px";
    span.style.top = y + 20 + "px";
    span.innerHTML = x + "," + y + "<br>" + _event.target;
}
function logInfo(_event) {
    console.log(_event.type, _event.target, _event.currentTarget);
}
//# sourceMappingURL=script.js.map