// Set up delle variabili/costanti
const gridEl = document.querySelector(".grid-container")
const btnPlayEl = document.getElementById("btn-play")
const fluidEl = document.querySelector(".container-fluid")
const chooseDiffEl = document.getElementById("choose-diff")
let celleTotali 
let cellePerRiga
chooseDiffEl.value = 0
let cellaSingola
let bombs

// Funzione click on "Play" button
btnPlayEl.addEventListener ("click", function() {
    let difficult = parseInt(chooseDiffEl.value)
    // bombs = generateBombsList  ( +difficult)
    gridEl.innerHTML = ""
    console.log(difficult)
    if ( difficult === 1 ) {
        let celleTotali = 100
        let cellePerRiga = 10
        // Imposto il ciclo di creazione delle celle
        for (let i = 1; i < celleTotali + 1; i++) {
            const cellaSingola = document.createElement("div")
            cellaSingola.classList.add("box")
            cellaSingola.style.flexBasis = 100 / cellePerRiga + "%"
            cellaSingola.innerHTML = [i]
            // Numerazione nascosta della celle
            cellaSingola.dataset.numCella = i
            gridEl.append(cellaSingola)

            // Funzione click sulle celle per il background
            cellaSingola.addEventListener ("click", function() {
            cellaSingola.classList.toggle( "bg-blue" );
            console.log(cellaSingola.innerHTML)
                if (bombs.includes(numCella)) {
                    alert("BOOOOOM!")
                    cellaSingola.classList.add("text-danger")
                }        
        })

        }
        // Aggiungo il background color al contenitore principale
        fluidEl.classList.add("bg-active")    
    } else if (  difficult === 2 ) {
        let celleTotali = 81
        let cellePerRiga = 9
        // Imposto il ciclo di creazione delle celle
        for (let i = 1; i < celleTotali + 1; i++) {
            const cellaSingola = document.createElement("div")
            cellaSingola.classList.add("box")
            cellaSingola.style.flexBasis = 100 / cellePerRiga + "%"
            cellaSingola.innerHTML = [i]
            gridEl.append(cellaSingola)

            // Funzione click sulle celle per il background
            cellaSingola.addEventListener ("click", function() {
            cellaSingola.classList.toggle( "bg-blue" );
            console.log(cellaSingola.innerHTML)
            })
        }
        // Aggiungo il background color al contenitore principale
        fluidEl.classList.add("bg-active")    
    } else if ( difficult === 3 ) {
        let celleTotali = 49
        let cellePerRiga = 7
        // Imposto il ciclo di creazione delle celle
        for (let i = 1; i < celleTotali + 1; i++) {
            const cellaSingola = document.createElement("div")
            cellaSingola.classList.add("box")
            cellaSingola.style.flexBasis = 100 / cellePerRiga + "%"
            cellaSingola.innerHTML = [i]
            gridEl.append(cellaSingola)

            // Funzione click sulle celle per il background
            cellaSingola.addEventListener ("click", function() {
            cellaSingola.classList.toggle( "bg-blue" );
            console.log(cellaSingola.innerHTML)
            })
        // Aggiungo il background color al contenitore principale
        fluidEl.classList.add("bg-active") 
        }
    }   
    gridEl.classList.remove("d-none")
    gridEl.classList.add("d-flex")
    console.log(difficult)
})

// Generare n compreso tra min e max (included)
// @param {number} min numero minimo
// @param {number} max numero massimo
//     function generateRandomNumber (min,max) {
//         return Math.floor( Math.random() * (max - min + 1) ) + min;
//     }


// Generare array di 16 bombe
// @param {number} celleTotali
// @param {number} array
// function generateBombsList (celleTotali) {
// const bombsTotal = []
//     while ( bombsTotal.length < 16) {
//         const ranNum = generateRandomNumber(1, celleTotali)
//        CHECK SUL GENERATORE DI RANNUM. NO RIPETIZIONI      
//              if ( !bombsTotal.includes (num) ) {
//              bombsTotal.push(ranNum)
//              }
//        }
//      return bombsTotali
//   } 

