//Class containing game logic
class Game {

    //class properties
    foundCircles = 0;
    totalCircles = 0;
    searchColor = "#FF8232"
    normalColor = "#123456"
    gameZone = document.getElementById("gameZone");
    foundBar = new FoundBar();

    constructor() {
        //Make circles
        for (var x = 0; x < 25; x++) {
            let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");

            //Circle Attributes
            newCirc.classList.add("gameCirc");
            newCirc.setAttribute("cx", Math.random() * 400);
            newCirc.setAttribute("cy", Math.random() * 400);

            //Choose if hidden
            if (Math.random() < .3) {
                newCirc.dataset.hiddenColor = this.searchColor;
                this.totalCircles++;
            } else {
                newCirc.dataset.hiddenColor = this.normalColor;
            }

            //Mouse events
            newCirc.addEventListener("mouseover", (event) => {
                event.target.style.fill = event.target.dataset.hiddenColor;
            })

            newCirc.addEventListener("mouseout", (event) => {
                event.target.style.fill = "#000";
            })

            newCirc.addEventListener("click", event => {
                //If clicked on a hidden dot...
                if (event.target.dataset.hiddenColor == this.searchColor) {
                    //...remove it...
                    event.target.remove();

                    //...and keep track of it...
                    this.foundCircles++;

                    //...and let the foundbar know.
                    this.foundBar.setPercent(this.foundCircles / this.totalCircles);
                }
            })

            //add circle to screen
            this.gameZone.appendChild(newCirc);
        }
    }
}

class FoundBar {
    element = document.getElementById("foundBar");
    maxSize = 130;
    percent = 0;

    setPercent(percent) {
        this.percent = percent;
        this.element.setAttribute("width", this.percent * this.maxSize);
        if (percent == 1) {
            this.element.setAttribute("fill", "#20FF37");
        }
    }
}

let g = new Game();