const submittedForm = document.querySelector('.sumbitForm');
const startingMessage = document.querySelector('.startingMessage');
const nameField = document.querySelector('.nameField');
const userLength = document.getElementById('userLength');
const inputText = document.getElementById('inputText');
const hearts = document.querySelector('.hearts');

const finalTime = document.querySelector('.finalTime');
const finalWin = document.querySelector('.finalWin');
const finalCampaing = document.querySelector('.finalCampaing');
const finalWinCampzing = document.querySelector('.finalWinCampzing');

const objectDetails = document.querySelector('.objectDetails');
const ul = document.querySelector('.gamePlateUl');

const userImage = document.getElementById('userImage');
const timerOne = document.querySelector('.timerOne');

const contragulations = document.querySelector('.contragulations');
const leadeboardPallet = document.querySelector('.leadeboardPallet');

const winnignDetails = document.querySelector('.winnignDetails');
const values = document.querySelector('.values');

let carriarAllButton;


//const levelContainer = document.querySelector('.levelContainer');

let rows;
let column;
let nameUser;

let lives = 3;
let acceptTimer = true;
let imageResource;
let levelNumber = 1;
let levelName = "";
let uniqueNumbers;

let campaingIterate = 0;

let rowNumber;
let colunmNumber;

let carrieContainer=0;
let freeRoamMode = true;
let gameMode;
let leader = true;

let objectiveArray = [];
let array = [];
let targetArray = [];
let leaderBoardDetailsArray = [];



inputText.addEventListener('input', e => {
    let wordlength = e.target.value;
    userLength.innerHTML =8-wordlength.trim().length;
})

    const campaing = document.getElementById('campaing');
    const freeMode = document.getElementById('freeMode');

    //freeMode.classList.add('backChange');

    campaing.addEventListener('click', () => {
        const inputField1 = document.getElementById('inputField1');
        const inputField2 = document.getElementById('inputField2');

        inputField1.disabled  = true;
        inputField1.placeholder   = 'Loked!';

        inputField2.disabled  = true;
        inputField2.placeholder   = 'Loked!';

        freeMode.classList.remove('backAdd');
        freeMode.classList.add('backChange');

        campaing.classList.remove('backChange');
        campaing.classList.add('backAdd');

        freeRoamMode= false;
    })

    freeMode.addEventListener('click', () => {
        const inputField1 = document.getElementById('inputField1');
        const inputField2 = document.getElementById('inputField2');

        inputField1.disabled  = false;
        inputField1.placeholder   = 'Rows:(3-6)';

        inputField2.disabled  = false;
        inputField2.placeholder   = 'Columns:(3-6)';

        freeRoamMode= true;

        freeMode.classList.add('backAdd');
        freeMode.classList.remove('backChange');

        campaing.classList.add('backChange');
        campaing.classList.remove('backAdd');
    })

submittedForm.addEventListener('submit', e => {

    uniqueNumbers = [];
    while (uniqueNumbers.length < 5) {
        let randomNumber = Math.floor(Math.random() * 10+1); 

        if (!uniqueNumbers.includes(randomNumber)) {
            uniqueNumbers.push(randomNumber);
        }
    }

    values.innerHTML = "";

    for(const keyTag of uniqueNumbers){
        const ranList = document.createElement('li');
        ranList.innerHTML = `<button class="carrieValues">${keyTag}</button>`;
        values.append(ranList);
    }

    objectDetails.innerHTML = "";
    timerOne.innerHTML = "00:00:00:000";

    campaingIterate=0;
   
    const imageUploader = document.getElementById('imageUploader');
    imageResource = "./Windows_10_Default_Profile_Picture.svg.png";
    userImage.src=imageResource;

    rows=null;
    column=null;
    ul.innerHTML="";

    levelContainer.innerHTML = "";
    
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    lives=3;

    objectiveArray = [];

    e.preventDefault();
    const formDate = new FormData(e.target);
    let userName = formDate.get('userName').trim().toUpperCase();
    nameUser=userName;

    if(freeRoamMode){

    gameMode = 'FREEROAM';
    levelNumber = '';
    levelName = 'FREESTYLE';
    lives=3;


    let rowSize = formDate.get('rowsCount');
    let ColunmSize = formDate.get('colunmCount');
    rows=rowSize;
    column=ColunmSize;
    }else{
        rows = 3;
        column = 3;
        gameMode = 'CAMPAING';
        levelName = 'LEVEL';
        levelNumber = 1;
    }
    
    const file = imageUploader.files[0];

     if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function() {
      userImage.src = reader.result;
      imageResource = reader.result;

    levelContainer.innerHTML = ` <div class="holderContect">
    <h1 id="modeType">${gameMode}</h1>
    <h1 id="modeType2">${levelName} ${levelNumber}</h1>
    </div>

    <div class="levelSetContainer">
        <p>${rows}x${column} Cells</p>
        <img id="levelImage" src="${imageResource}" alt="">
    </div>`

    });

    reader.readAsDataURL(file);  
  } else{

    levelContainer.innerHTML = `<div class="holderContect">
    <h1 id="modeType">${gameMode}</h1>
    <h1 id="modeType2">${levelName} ${levelNumber}</h1>
    </div>

    <div class="levelSetContainer">
        <p>${rows}x${column} Cells</p>
        <img id="levelImage" src="${imageResource}" alt="">
    </div>`
  }

  console.log(imageResource);

    hearts.innerHTML="";
    for(let livesCount = 0 ; livesCount<lives ; livesCount++){
        let li = document.createElement('li');
        li.innerHTML = `<img src="./hearts/icons8-heart-64.png" alt="">`;
        hearts.append(li);
    }

    display();
   // console.log(userName,rowSize,ColunmSize);

   // startTimer();

   const inputs = document.querySelectorAll('.inputField'); // Get all input and textarea elements within the form
   inputs.forEach(input => {
     input.value = ''; // Reset each input's value to an empty string
   });
   
    startingMessage.style.display = 'none';
    
})

//-------------------------------------------------------------

function display(){

acceptTimer=true;

const errorMessage = document.querySelector('.errorMessage');

let acceptVariable = true;

let targetRow;
let targetColumn;

let iterate=0;

ul.style.gridTemplateColumns = `repeat(${column}, 92px)`; 
ul.style.gridTemplateRows = `repeat(${rows}, 92px)`;

for(let i = 0; i<rows;i++){
    array[i] = []

    for(let n = 0;n<column;n++){

        array[i][n] = 0;

        const li = document.createElement('li');
        li.innerHTML=`<button class="gameCell" data-row="${i}" data-column="${n}"></button>`
        ul.append(li);    
    }
}

const allButton  = document.querySelectorAll('.gameCell');
carriarAllButton  = document.querySelectorAll('.carrieValues');


nameField.innerHTML = ` <h1 id="titleName">HELLO</h1>
                        <h1><span id="userRealName" class="bg-gradient-to-r from-[#53a2fe] to-[#a57af8] inline-block text-transparent bg-clip-text">${nameUser}</span></h1>`

carriarAllButton.forEach(item => {
    item.addEventListener('click', ()=> {
      carrieContainer = +item.innerHTML;

      carriarAllButton.forEach(oneCarrier => {
        oneCarrier.style.backgroundColor='';
      })
      item.style.backgroundColor='#5a9efd';
      //console.log(carrieContainer);
    })
})

allButton.forEach(item => {

    item.addEventListener('click', e => {

        console.log('click');
        uniqueNumbers = [];
    while (uniqueNumbers.length < 5) {
        let randomNumber = Math.floor(Math.random() * 10+1); 

        if (!uniqueNumbers.includes(randomNumber)) {
            uniqueNumbers.push(randomNumber);
        }
    }

    values.innerHTML = "";

    for(const keyTag of uniqueNumbers){
        const ranList = document.createElement('li');
        ranList.innerHTML = `<button class="carrieValues">${keyTag}</button>`;
        values.append(ranList);
    }

    carriarAllButton  = document.querySelectorAll('.carrieValues');

    carriarAllButton.forEach(item => {
        item.addEventListener('click', ()=> {
          carrieContainer = +item.innerHTML;
    
          carriarAllButton.forEach(oneCarrier => {
            oneCarrier.style.backgroundColor='';
          })
          item.style.backgroundColor='#5a9efd';
          //console.log(carrieContainer);
        })
    })

        rowNumber = e.target.dataset.row;
        colunmNumber = e.target.dataset.column;

       // console.log(rowNumber,colunmNumber);

        if(acceptTimer){
            startTimer();
        }

        allButton.forEach(oneButton => {
            if((oneButton.innerHTML === "")){
                acceptTimer=false;
            }
        })

       // console.log(acceptTimer);
        
        if(carrieContainer===0) {

            errorMessage.innerHTML=`<h1>Please Select a Number!</h1>`

            setTimeout(function() {
                errorMessage.innerHTML="";  
              }, 2000); 

           // alert ('cannot enter!');
            return;
        }

        if(!(item.innerHTML)) {

            let result = gameChecker(rowNumber,colunmNumber,carrieContainer);
           // console.log(result);

            if(result){

                allButton.forEach(cell => {
                    cell.style.backgroundColor = '';
                });

                array[rowNumber][colunmNumber]=carrieContainer;
                item.innerHTML=carrieContainer;
    
            }else {

                allButton.forEach(cell => {
                 for(const key of targetArray){
                   if ((+cell.dataset.row===key.targetRow) && (+cell.dataset.column===key.targetColumn)){

                    hearts.innerHTML="";
                    lives--;
                    errorMessage.innerHTML=`<h1>Cannot add this value!!</h1>`

                    setTimeout(function() {
                        errorMessage.innerHTML="";  
                      }, 3000); 

                    cell.style.backgroundColor = 'red';

                    //
                    for(let livesCount = 0 ; livesCount<lives ; livesCount++){
                        let li = document.createElement('li');
                        li.innerHTML = `<img src="./hearts/icons8-heart-64.png" alt="">`;
                        hearts.append(li);

                    }

                    if(lives===0){
                        stopTimer()
                        return;
                    }

                   }else{
                    cell.style.backgroundColor = '';
                   }
                 }
                 
                })   
            }         
        }
        else {

            errorMessage.innerHTML=` <h1>Value already add!</h1>`

            setTimeout(function() {
                errorMessage.innerHTML="";  
              }, 2000); 

            //alert('Value already add!');
        }

        carriarAllButton.forEach(itemBut => {
            itemBut.style.backgroundColor='#eeeeee';
        })

        iterate=0;
        for(let i = 0; i<rows;i++){
            for(let n = 0 ; n<column;n++){
                if(!(array[i][n]===0)) iterate++;
                
            }
        }

        console.log(iterate)

        if(iterate===(rows*column)){
            stopTimer();
           // console.log('finished');
            return;
        }

        carrieContainer=0;

        //console.log(array);
    })
})

function gameChecker(rowNumber,colunmNumber,carrieContainer){

    targetArray=[];
    acceptVariable=true;

    for(let i = 0; i<column;i++){

        if(array[rowNumber][i]===carrieContainer){
            acceptVariable=false;

            targetDetails = {
                targetRow: +rowNumber,
                targetColumn:i
            }

            targetArray.push(targetDetails);
        }   
    }

    for(let i = 0 ; i<rows ; i++){

        if(array[i][colunmNumber]===carrieContainer){
            acceptVariable=false;

            targetDetails = {
                targetRow: i,
                targetColumn: +colunmNumber
            }

            targetArray.push(targetDetails);
        }
    }
    
   // console.log(targetArray);
    return acceptVariable;
}


}