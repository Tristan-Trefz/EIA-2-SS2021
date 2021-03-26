var Zufallsgedicht;
(function (Zufallsgedicht) {
    var subject = ["Hamilton", "Verstappen", "Vettel", "Sainz", "Alonso", "Raikkonen"];
    var predicate = ["ueberholt", "verteidigt gegen", "kollidiert mit", "hasst", "wird ueberholt von", "vernichtet"];
    var object = ["sein Teamkamerad", "sein Aerzfeind", "Ricciardo", "Mercedes", "Ferrari", "Mclaren"];
    for (var i = object.length; i > 0; i--) {
        // console.log(i);
        var output = getVerse(subject, predicate, object);
        console.log(output);
    }
    function getVerse(_subject, _predicate, _object) {
        var nSubject = Math.floor(Math.random() * _subject.length);
        var nPredicate = Math.floor(Math.random() * _predicate.length);
        var nObject = Math.floor(Math.random() * _object.length);
        var verse = _subject.splice(nSubject, 1) + " "
            + _predicate.splice(nPredicate, 1) + " "
            + _object.splice(nObject, 1) + "!";
        // console.log(verse);
        return verse;
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=L01_Zufallsgedicht.js.map