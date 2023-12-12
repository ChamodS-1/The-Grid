function playAgainNewCampaing(){

    levelNumber++;
    console.log(levelNumber);

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

campaingIterate++
    console.log(campaingIterate);

rows++;
column++;

console.log(rows,column);

        hearts.innerHTML="";
     for(let livesCount = 0 ; livesCount<lives ; livesCount++){
        let li = document.createElement('li');
        li.innerHTML = `<img src="./hearts/icons8-heart-64.png" alt="">`;
        hearts.append(li);

    }

    levelContainer.innerHTML = ` <div class="holderContect">
    <h1 id="modeType">${gameMode}</h1>
    <h1 id="modeType2">${levelName} ${levelNumber}</h1>
    </div>

    <div class="levelSetContainer">
        <p>${rows}x${column} Cells</p>
        <img id="levelImage" src="${imageResource}" alt="">
    </div>`
   
   // startTimer();
    display();   
}

