// Set up delle variabili/costanti
const gridEl = document.querySelector(".grid-container")
const btnPlayEl = document.getElementById("btn-play")
const fluidEl = document.querySelector(".container-fluid")
const chooseDiffEl = document.getElementById("choose-diff")
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

    // In base all'opzione disegna la griglia
    if ( difficult === 1 ) {
        disegnaGriglia(100, 10); 
        bombs = bombsListGenerator( 100 );
        console.log(bombs);
    } else if ( difficult === 2 ) {
        disegnaGriglia(81, 9);
        bombs = bombsListGenerator( 81 );
        console.log(bombs);
    } else if ( difficult === 3 ) {
        disegnaGriglia(49, 7);
        bombs = bombsListGenerator( 49 );
        console.log(bombs);
    }   
})

// Imposto la funzione con dentro il ciclo di creazione delle celle
function disegnaGriglia (celleTotali, cellePerRiga) {
        for (let i = 1; i < celleTotali + 1; i++) {
            const cellaSingola = document.createElement("div");
            cellaSingola.classList.add("box");
            cellaSingola.style.flexBasis = 100 / cellePerRiga + "%";
            cellaSingola.dataset.nCella = [i] ;
            // Evento "On click"
            cellaSingola.addEventListener( "click", cellaAttiva);
            gridEl.append(cellaSingola);
        }
    fluidEl.classList.add("bg-active");
    gridEl.classList.remove("d-none");
    gridEl.classList.add("d-flex");
}

function cellaAttiva () {
    const nCella = +this.dataset.nCella;
    console.log(+nCella)
        if ( bombs.includes( nCella ) ) {
            alert( "BOMBA!!! La partita è terminata!" );
            this.classList.add( "bomb-cell-bg" );
          } else {
            this.classList.add( "active-cell-bg" );
          }
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
