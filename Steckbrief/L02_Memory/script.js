window.addEventListener("load", function () {
    let button = document.querySelector("button");
    let sign;
    button.addEventListener("mouseup", handleStart);
    function handleStart() {
        sign = Number(prompt("type a number", ""));
    }
});
//# sourceMappingURL=script.js.map