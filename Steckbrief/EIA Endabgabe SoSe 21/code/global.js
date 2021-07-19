/*
Aufgabe: <Abschlussarbeit S21>
Name: <Tristan Trefz>
Matrikel: <266703>
Datum: <19.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Moritz Hinderer, Martin Fuhr, Julian Himmel, weitere Quellen: Inverted Classroon, Internet>
*/
var Endabgabe;
(function (Endabgabe) {
    // global scaling factor
    Endabgabe.scale = 5;
    //get int between min and max
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    Endabgabe.randomInteger = randomInteger;
    //converts degrees to radians
    function degreesToRadians(degrees) {
        return (degrees * Math.PI) / 180;
    }
    Endabgabe.degreesToRadians = degreesToRadians;
    //creates unique id
    //https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
    function uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    Endabgabe.uuidv4 = uuidv4;
    //gets distance between two vectors
    function distance(v1, v2) {
        let d = Math.sqrt(Math.pow(v2.X - v1.X, 2) +
            Math.pow(v2.Y - v1.Y, 2));
        return d;
    }
    Endabgabe.distance = distance;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=global.js.map