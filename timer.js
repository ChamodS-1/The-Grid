const levelContainer = document.querySelector('.levelContainer');

let timerInterval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
  timerInterval = setInterval(incrementTimer, 10);
}

function stopTimer() {

  if(freeRoamMode){

  let gameOver;
  let gameWin;

  if(lives===0){
    gameOver = document.querySelector('.gameOver');

   // console.log(hours,minutes,seconds,milliseconds);
    finalTime.innerHTML ="";
    finalTime.innerHTML = `<h1 class="timerOne">${hours}:${minutes}:${seconds}:${milliseconds}</h1>`;
    gameOver.style.display = 'block';

  }else{
    gameWin = document.querySelector('.gameWin');

   // console.log(hours,minutes,seconds,milliseconds);
    finalWin.innerHTML ="";
    finalWin.innerHTML = `<h1 class="timerOne">${hours}:${minutes}:${seconds}:${milliseconds}</h1>`;
    gameWin.style.display = 'block';
  }

  const playAgain = document.getElementById('playAgain');
  const playAgainWin = document.getElementById('playAgainWin');

   const newGame = document.getElementById('newGame');
   const newGameWin = document.getElementById('newGameWin');
  

  playAgain.addEventListener('click', ()=> {
    //console.log('clickeddd');

    playAgainWindow();

    gameOver.style.display = 'none';
  })


  playAgainWin.addEventListener('click', ()=> {

    playAgainWindow();

    gameWin.style.display = 'none';
    //console.log('clickeddd');
  })

  newGame.addEventListener('click', ()=> {

    startingMessage.style.display = 'block';

    gameOver.style.display = 'none';
    //console.log('clickeddd');
  })

  newGameWin.addEventListener('click', ()=> {

    startingMessage.style.display = 'block';

    gameWin.style.display = 'none';
    //console.log('clickeddd');
  })
}else{

  let campaingOver;
  let campaingWin;

  if(lives===0){

    campaingOver = document.querySelector('.campaingOver');
    finalCampaing.innerHTML ="";
    finalCampaing.innerHTML = `<h1 class="timerOne">${hours}:${minutes}:${seconds}:${milliseconds}</h1>`;
    campaingOver.style.display = 'block';

    const newCampaing = document.getElementById('newCampaing');

     newCampaing.addEventListener('click', ()=> {

    startingMessage.style.display = 'block';

    campaingOver.style.display = 'none';
    //console.log('clickeddd');
  })

}else{

  if(campaingIterate===3){
    congratss(); 
    
  }else{

    campaingWin = document.querySelector('.campaingWin');

    campaingWin.innerHTML = "";
    campaingWin.innerHTML = ` <div class="gameWinProMessage bg-[#12172a] border border-[#555968] shadow dark:bg-gray-800 dark:border-gray-700">
    <h1 class="timerOne campingOverTitle">Level ${levelNumber} </h1>
    <h1 class="gripdPlate2 bg-gradient-to-r from-[#f6c02a] to-[#fb006e] inline-block text-transparent bg-clip-text"> Completed</h1>
   
    <img id="winingPic" class="winningStar" src="./animations/Floating-gold-coin-unscreen.gif" alt="">

    <h4 class="timerOne">COMPLETED TIME</h4>
    <div class="finalWinCampzing">
    <h1 class="timerOne">${hours}:${minutes}:${seconds}:${milliseconds}</h1>
    </div>

    <input type="button" class="submitButton" id="nextLevelCamp" value="Next Level">
    <input type="button" class="submitButton" id="newGameWinCamp" value="New Game">

    <p>*If you want go next level click Next Level or if you want to start new game click new game button. Don't reload your browser.</p>

</div>`
   // console.log(hours,minutes,seconds,milliseconds);
   // finalWinCampzing.innerHTML ="";
   // finalWinCampzing.innerHTML = `<h1 class="timerOne">${hours}:${minutes}:${seconds}:${milliseconds}</h1>`;
    campaingWin.style.display = 'block';

  const nextLevelCamp = document.getElementById('nextLevelCamp');
  const newGameWinCamp = document.getElementById('newGameWinCamp');

  newGameWinCamp.addEventListener('click', ()=> {

    startingMessage.style.display = 'block';

    campaingWin.style.display = 'none';
    //console.log('clickeddd');
  })

  nextLevelCamp.addEventListener('click', ()=> {

    playAgainNewCampaing();

    campaingWin.style.display = 'none';
    //
  })

  }
}

}
clearInterval(timerInterval);
}

function incrementTimer() {
  milliseconds += 10;
  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  const formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds) + "." + padMilliseconds(milliseconds);
  document.querySelector('.timerOne').innerText = formattedTime;
}

function pad(value) {
  return value < 10 ? '0' + value : value;
}

function padMilliseconds(value) {
  if (value < 10) {
    return '00' + value;
  } else if (value < 100) {
    return '0' + value;
  } else {
    return value;
  }
}
