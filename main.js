const ul = document.querySelector('.gamePlateUl');
const errorMessage = document.querySelector('.errorMessage');

let rows=5;
let column=5 ;

let acceptVariable = true;

let targetRow;
let targetColumn;

let iterate=0;

ul.style.gridTemplateColumns = `repeat(${column}, 92px)`; 
ul.style.gridTemplateRows = `repeat(${rows}, 92px)`;

let array = [];
let targetArray = [];

for(let i = 0; i<rows;i++){
    array[i] = []

    for(let n = 0;n<column;n++){

        array[i][n] = 0;

        const li = document.createElement('li');
        li.innerHTML=`<button class="gameCell" data-row="${i}" data-column="${n}"></button>`
        ul.append(li);
        
    }
}








