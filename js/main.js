// Set up delle variabili/costanti
const gridEl = document.querySelector(".grid-container")
const btnPlayEl = document.getElementById("btn-play")
const fluidEl = document.querySelector(".container-fluid")
const chooseDiffEl = document.getElementById("choose-diff")
const score = document.querySelector(".score")
let celleTotali 
let cellePerRiga
let cellaSingola
let bombs
let bombsList
chooseDiffEl.value = 0

function generateRandomNumber ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

// Funzione click on "Play" button
btnPlayEl.addEventListener ("click", function() {
    let difficult = parseInt(chooseDiffEl.value)
    gridEl.innerHTML = ""
    score.innerHTML = ""

    // In base all'opzione disegna la griglia
    if ( difficult === 1 ) {
        celleTotali = 100
        disegnaGriglia(100, 10); 
        bombs = bombsListGenerator( 100 );
        console.log(bombs);
    } else if ( difficult === 2 ) {
        celleTotali = 81
        disegnaGriglia(81, 9);
        bombs = bombsListGenerator( 81 );
        console.log(bombs);
    } else if ( difficult === 3 ) {
        celleTotali = 49
        disegnaGriglia(49, 7);
        bombs = bombsListGenerator( 49 );
        console.log(bombs);
    }   
})

// Imposto la funzione con dentro il ciclo di creazione delle celle
function disegnaGriglia (celleTotali, cellePerRiga) {
        for (let i = 1; i < celleTotali + 1; i++) {
            let cellaSingola = document.createElement("div");
            cellaSingola.classList.add("box");
            cellaSingola.style.flexBasis = 100 / cellePerRiga + "%";
            cellaSingola.dataset.nCella = [i] ;
            // Evento "On click"
            cellaSingola.addEventListener( "click", clickOnCella);
            gridEl.append(cellaSingola);
            }

            function clickOnCella () {
                const allCreatedCells = document.querySelectorAll(".box");
                const allActiveCells = document.querySelectorAll(".active")
                const nCella = +this.dataset.nCella;
                this.classList.add("active")
                if ( bombs.includes( nCella ) ) {
                    alert( "BOMBA!!! La partita è terminata!" );
                    this.classList.add( "bomb-cell-bg" );
                    for (let i = 0; i < allCreatedCells.length; i++) {
                        allCreatedCells[i].classList.add('gameover');                       
                    } 
                score.append(allActiveCells.length)
                } else {
                    let difficult = parseInt(chooseDiffEl.value)
                    if ( difficult === 1 ) {
                        celleTotali = 100
                    } else if ( difficult === 2 ) {
                        celleTotali = 81
                    } else if ( difficult === 3 ) {
                        celleTotali = 49
                    }   
                        this.classList.add( "active-cell-bg" );
                        const allActiveCells = document.querySelectorAll(".active")
                        const allCreatedCells = document.querySelectorAll(".box");
                        if ( allActiveCells.length === celleTotali - 16) {
                            for (let i = 0; i < allCreatedCells.length; i++) {
                                allCreatedCells[i].classList.add('gameover');                       
                            } 
                            alert("Congratulazioni, hai vinto!")
                            score.append(allActiveCells.length)     
                        }
                }
            }    
    gridEl.classList.remove("d-none");
    gridEl.classList.add("d-flex");
}


//Imposto la funzione generatrice delle bombe
/**
 * @param {number} celleTotali 
 * @returns {array} bombsList
 */
function bombsListGenerator (celleTotali) {
    const bombsList = []
    while ( bombsList.length < 16 ) {
        const ranNum = generateRandomNumber (1, celleTotali);
        if ( !bombsList.includes( ranNum ) ) {
            bombsList.push( ranNum );
        }
    }
    return bombsList;
}