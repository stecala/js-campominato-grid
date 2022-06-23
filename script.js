/* Esercizio di oggi: Griglia Campo Minato
nome repo: js-campominato-grid
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;*/

const startGame = document.getElementById('start-game');
const wrapper = document.querySelector('.wrapper');
const difficulty = document.getElementById('difficulty');
const reset = document.getElementById('reset');
startGame.addEventListener('click', function () {
    console.log(difficulty.value);
    wrapper.classList.remove('visibility');
    let diff;
    let length;
    if (difficulty.value === 'facile') {
        diff='easy';
        length=100;
    }
    else if (difficulty.value === 'medio') {
        diff='medium';
        length=81;

    }
    else {
        diff='hard';
        length=49;
    }

    drawGrid(diff,length);
})

reset.addEventListener('click', function () {
    wrapper.classList.add('visibility');

})


function drawGrid(diff,length){
    const boardContainer = document.querySelector('.board-cont');
    boardContainer.innerHTML = '';
    for (let i = 0; i < length; i++) {
        const newSquare = mySquare(diff);
        newSquare.innerHTML = i + 1;
        newSquare.addEventListener('click', function () {
            newSquare.classList.add('active');
            console.log(i + 1);
        })
        boardContainer.append(newSquare);
    }
}


function mySquare(diff) {
    const nowSquare = document.createElement('div');
    nowSquare.classList.add(diff);
    return nowSquare;
}