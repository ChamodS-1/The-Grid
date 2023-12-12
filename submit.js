function playAgainWindow(){

    trySet = {
        Ohours : hours,
        OMinutes : minutes,
        Oseconds : seconds,
        OmiliSecond : milliseconds,
        Orows : rows,
        Ocolunms : column,
        Olives:lives
      }
  
      objectiveArray.push(trySet);
  
      objectDetails.innerHTML = "";
      objectDetails.innerHTML = `<div class="history">
                                <p>${nameUser.toLowerCase().charAt(0).toUpperCase()+nameUser.slice(1).toLowerCase()}'s History</p>
                                <img id="smallPicture" src="${imageResource}"   alt="">
                                </div>`;
  
      for(const key of objectiveArray){

        if(key.Orows === null) {
            continue;
        }

        let Oli = document.createElement('li');
        Oli.innerHTML = ` <p>${key.Orows}x${key.Ocolunms} Cells</p>
                          <h1>0${key.Ohours}:${key.OMinutes}:${key.Oseconds}:${key.OmiliSecond}</h1>
                          <p>Lives ${key.Olives}</p>`
  
        objectDetails.append(Oli);
    }

ul.innerHTML="";

rows=null;
column=null;

const PlayAgainMessage = document.querySelector('.PlayAgainMessage');
PlayAgainMessage.style.display = 'block';

PlayAgainMessage.innerHTML = "";
PlayAgainMessage.innerHTML = `   <div class="AnotherSubmit bg-[#12172a] border border-[#555968] shadow dark:bg-gray-800 dark:border-gray-700">
                                    <h1 class="timerOne gripdPlate3">Try <span class="bg-gradient-to-r from-[#53a2fe] to-[#a57af8] inline-block text-transparent bg-clip-text">Again</span></h1>
                                    <div id="repeatAnimation"></div>
                                    <form action="" class="playAgainForm">
                                    <div class="rowsColunms">
                                    <input type="number" class="inputField" id="inputField3" placeholder="Rows:(3-6)" name="rowsCount" min="3" max="6" required>
                                    <input type="number" class="inputField" id="inputField4" placeholder="Columns:(3-6)" name="colunmCount" min="3" max="6" required>

                                    <div>
                                        <input type="submit" class="submitButton" value="Play Again">
                                    </div>
                                    <p>*After you click Play Again button immediately your timer will start. Dont reload your browser during play time otherwise lost your all saved progress.</p>
                                    </form>
                                    </div>`

const playAgainForm = document.querySelector('.playAgainForm');

playAgainForm.addEventListener('submit', e => {

    e.preventDefault();
    const formDate = new FormData(e.target);
    let rowSize = formDate.get('rowsCount');
    let ColunmSize = formDate.get('colunmCount');

    rows=rowSize;
    column=ColunmSize;

    console.log(rows,column)

    milliseconds = 0;
     seconds = 0;
     minutes = 0;
     hours = 0;
     lives=3;

     timerOne.innerHTML = "00:00:00:000";

        hearts.innerHTML="";
     for(let livesCount = 0 ; livesCount<lives ; livesCount++){
        let li = document.createElement('li');
        li.innerHTML = `<img src="./hearts/icons8-heart-64.png" alt="">`;
        hearts.append(li);

    }
    levelContainer.innerHTML ="";

    levelContainer.innerHTML = ` <div class="holderContect">
    <h1 id="modeType">${gameMode}</h1>
    <h1 id="modeType">${levelName} ${levelNumber}</h1>
    </div>

    <div class="levelSetContainer">
        <p>${rows}x${column} Cells</p>
        <img id="levelImage" src="${imageResource}" alt="">
    </div>`

   // startTimer();
    display();
    
    PlayAgainMessage.style.display = 'none';

});
}

