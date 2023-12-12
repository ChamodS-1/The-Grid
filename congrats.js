function congratss(){

    conDetails = {
        Ohours : hours,
        OMinutes : minutes,
        Oseconds : seconds,
        OmiliSecond : milliseconds,
        source : imageResource,
        playerName : nameUser
        
      }

      leaderBoardDetailsArray.push(conDetails);

    contragulations.innerHTML = "";
    contragulations.innerHTML = ` <div class="finalCongrats bg-[#12172a] border border-[#555968] shadow dark:bg-gray-800 dark:border-gray-700">
    <h1 class="timerOne campingOverTitle">You did it </h1>
    <h1 class="gripdPlate2 bg-gradient-to-r from-[#db26a5] to-[#5a9efd] inline-block text-transparent bg-clip-text"> Champion</h1>
   
    <img id="winingPic" class="winningStar" src="./animations/Floating-gold-coin-unscreen.gif" alt="">

    <h4 class="timerOne">CAMPAING COMPLETED</h4>
    <h1 class="gripdPlate5 bg-gradient-to-r from-[#db26a5] to-[#5a9efd] inline-block text-transparent bg-clip-text"> Your name added to the LeaderBoard</h1>
   
    <div class="finalWinCampzing">
    <h1 class="timerOne">${hours}:${minutes}:${seconds}:${milliseconds}</h1>
    </div>

    <input type="button" class="submitButton2" id="gotoLeader" value="Leaderboard">
    <input type="button" class="submitButton" id="congrats" value="New Game">

</div>`

contragulations.style.display = 'block';

const gotoLeader = document.getElementById('gotoLeader');
const congrats = document.getElementById('congrats');

gotoLeader.addEventListener('click', ()=> {

      leader = false;

      winnignDetails.innerHTML = "";

      for(const key of leaderBoardDetailsArray){

        let holders = document.createElement('li');
        holders.innerHTML = `<img src="${key.source}" alt="">
                            <p>${key.playerName}</p>
                            <p>0${key.Ohours}:${key.OMinutes}:${key.Oseconds}:${key.OmiliSecond}</p>`
  
        winnignDetails.append(holders);
    }

   // leadeboardPallet.innerHTML = "";
   // leadeboardPallet.innerHTML = 

    leadeboardPallet.style.display = 'block';
    contragulations.style.display = 'none';

    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', ()=> {

        leadeboardPallet.style.display = 'none';
        
        if(!leader){

        contragulations.style.display = 'block';
        //console.log('clickeddd');
        }
      })
  })

congrats.addEventListener('click', ()=> {

  startingMessage.style.display = 'block';

  contragulations.style.display = 'none';
  //console.log('clickeddd');
})
}