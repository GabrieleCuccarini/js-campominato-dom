// Set up delle variabili/costanti
const gridEl = document.querySelector(".grid-container")
const btnPlayEl = document.getElementById("btn-play")
const fluidEl = document.querySelector(".container-fluid")
const chooseDiffEl = document.getElementById("choose-diff")
let celleTotali 
let cellePerRiga
chooseDiffEl.value = 0
let cellaSingola

// Funzione click on "Play" button
btnPlayEl.addEventListener ("click", function() {
    let difficult = parseInt(chooseDiffEl.value)
    gridEl.innerHTML = ""

    // In base all'opzione disegna la griglia
    if ( difficult === 1 ) {
        disegnaGriglia(100, 10);   
    } else if ( difficult === 2 ) {
        disegnaGriglia(81, 9);
    } else if ( difficult === 3 ) {
        disegnaGriglia(49, 7);
    }   

    // Imposto la funzione con dentro il ciclo di creazione delle celle
    function disegnaGriglia (celleTotali, cellePerRiga) {
            for (let i = 1; i < celleTotali + 1; i++) {
                const cellaSingola = document.createElement("div");
                cellaSingola.classList.add("box");
                cellaSingola.style.flexBasis = 100 / cellePerRiga + "%";
                cellaSingola.innerHTML = [i];
                gridEl.append(cellaSingola);
    
                // Funzione click sulle celle per il background
                cellaSingola.addEventListener ("click", function() {
                cellaSingola.classList.toggle( "bg-blue" );
                console.log(cellaSingola.innerHTML);
                })
            }
        fluidEl.classList.add("bg-active");
        gridEl.classList.remove("d-none")
        gridEl.classList.add("d-flex")
    }
})
