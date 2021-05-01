var Zufallsgedicht;
(function (Zufallsgedicht) {
    let subject = ["Hamilton", "Verstappen", "Vettel", "Sainz", "Alonso", "Raikkonen"];
    let predicate = ["ueberholt", "verteidigt gegen", "kollidiert mit", "hasst", "wird ueberholt von", "vernichtet"];
    let object = ["sein Teamkamerad", "sein Aerzfeind", "Ricciardo", "Mercedes", "Ferrari", "Mclaren"];
    for (let i = object.length; i > 0; i--) {
        // console.log(i);
        let output = getVerse(subject, predicate, object);
        console.log(output);
    }
    function getVerse(_subject, _predicate, _object) {
        let nSubject = Math.floor(Math.random() * _subject.length);
        let nPredicate = Math.floor(Math.random() * _predicate.length);
        let nObject = Math.floor(Math.random() * _object.length);
        let verse = _subject.splice(nSubject, 1) + " "
            + _predicate.splice(nPredicate, 1) + " "
            + _object.splice(nObject, 1) + "!";
        // console.log(verse);
        return verse;
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=L01_Zufallsgedicht.js.map