window.addEventListener("load", handleLoad);

function handleLoad(_load: Event): void {

let start: HTMLDivElement = document.querySelector("div#start");
let end: HTMLDivElement = document.querySelector("div#end");
let change: HTMLFormElement = document.querySelector("form");
let form: HTMLDivElement = document.querySelector("div#form");

start.addEventListener("mouseup", handleStart);
end.addEventListener("mouseup", handleEnd);
change.addEventListener("change", handleChange);

let formData: FormData = new FormData(document.forms[0]);    
let style: HTMLStyleElement = document.querySelector("style");

function handleChange(_change: Event): void {

        for (var entry of formData) {

        console.log(entry);

    }

        style.innerHTML =
        "body { background-color:" + entry[4] +
        "; color:" + formData.get("color") +
        "; font-family:" + formData.get("font") +
        "; } span { background-color:" +
        formData.get("cColor") +
        "; width:" +
        formData.get("size") + 
        "px; height:" +
        formData.get("size") +
        "px; }";

}

handleChange(_load);

let pairs: number = Number(formData.get("pairs"));
let deck: number[] = Array.from(Array(pairs).keys());
let board: HTMLDivElement = document.querySelector("div#board");
let span: HTMLSpanElement = document.createElement("span");


function handleStart (_start: Event): void {

    handleChange(_start);

    [].push.apply(deck, deck);

    function shuffleDeck (array: number[]): number[] {
        var currentIndex: number = array.length, temporaryValue: number, randomIndex: number;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array; 

    }

    shuffleDeck(deck);
    form.classList.add("inv");


    for (let i: number = deck.length; i > 0; i--) {

        board.append(span);
        span.classList.add(deck[0].toString() + "X");
        deck.shift();
    }

    startTime;

}

let c1: HTMLSpanElement = document.querySelector("span.1");
let c2: HTMLSpanElement = document.querySelector("span.2");
let c3: HTMLSpanElement = document.querySelector("span.3");
let c4: HTMLSpanElement = document.querySelector("span.4");
let c5: HTMLSpanElement = document.querySelector("span.5");
let c6: HTMLSpanElement = document.querySelector("span.6");
let c7: HTMLSpanElement = document.querySelector("span.7");
let c8: HTMLSpanElement = document.querySelector("span.8");
let c9: HTMLSpanElement = document.querySelector("span.9");
let c10: HTMLSpanElement = document.querySelector("span.10");
let c11: HTMLSpanElement = document.querySelector("span.11");
let c12: HTMLSpanElement = document.querySelector("span.12");
let c13: HTMLSpanElement = document.querySelector("span.13");
let c14: HTMLSpanElement = document.querySelector("span.14");
let c15: HTMLSpanElement = document.querySelector("span.15");
let c16: HTMLSpanElement = document.querySelector("span.16");
let c17: HTMLSpanElement = document.querySelector("span.17");
let c18: HTMLSpanElement = document.querySelector("span.18");
let c19: HTMLSpanElement = document.querySelector("span.19");
let c20: HTMLSpanElement = document.querySelector("span.20");
let c21: HTMLSpanElement = document.querySelector("span.21");
let c22: HTMLSpanElement = document.querySelector("span.22");
let c23: HTMLSpanElement = document.querySelector("span.23");
let c24: HTMLSpanElement = document.querySelector("span.24");
let c25: HTMLSpanElement = document.querySelector("span.25");

c1.addEventListener("mouseup", checkPair);
c2.addEventListener("mouseup", checkPair);
c3.addEventListener("mouseup", checkPair);
c4.addEventListener("mouseup", checkPair);
c5.addEventListener("mouseup", checkPair);
c6.addEventListener("mouseup", checkPair);
c7.addEventListener("mouseup", checkPair);
c8.addEventListener("mouseup", checkPair);
c9.addEventListener("mouseup", checkPair);
c10.addEventListener("mouseup", checkPair);
c11.addEventListener("mouseup", checkPair);
c12.addEventListener("mouseup", checkPair);
c13.addEventListener("mouseup", checkPair);
c14.addEventListener("mouseup", checkPair);
c15.addEventListener("mouseup", checkPair);
c16.addEventListener("mouseup", checkPair);
c17.addEventListener("mouseup", checkPair);
c18.addEventListener("mouseup", checkPair);
c19.addEventListener("mouseup", checkPair);
c20.addEventListener("mouseup", checkPair);
c21.addEventListener("mouseup", checkPair);
c22.addEventListener("mouseup", checkPair);
c23.addEventListener("mouseup", checkPair);
c24.addEventListener("mouseup", checkPair);
c25.addEventListener("mouseup", checkPair);

let tStart: Date;
let tEnd: Date;
let time: any;

function startTime(): void {

    tStart = new Date;

}

function checkPair (_event: Event): void {

    let turn: number;
    
    if (turn == 1) {
        turn++;
        var card: HTMLSpanElement = _event.currentTarget as HTMLSpanElement;
        card.classList.remove("X");

    } else {

        let card2: HTMLSpanElement = _event.currentTarget as HTMLSpanElement;
        card2.classList.remove("X");
        setTimeout(check, 2000);
        function check(): void {
            
            if (card == card2) {

                if (pairs > 0) {

                    pairs--;
                    board.removeChild(card);
                    board.removeChild(card2);

                } else {

                    function endTime (): void {

                        tEnd = new Date;
                        time = tEnd.getTime() - tStart.getTime();
                        localStorage.setItem("best", time);
                    
                    }
                    prompt("Nice one! You finished in" + time + "seconds! your record is" + localStorage.getItem("best"));
                    setTimeout(handleEnd, 10000);

                }

            } else {

                card.classList.add("X");
                card2.classList.add("X");
                turn = 1;

            }
        }

    }

}


function handleEnd (_end: Event): void {
    window.location.reload();
}

}
