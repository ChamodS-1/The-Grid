const showLeaderBoard = document.getElementById('showLeaderBoard');
const questionMark = document.getElementById('questionMark');

showLeaderBoard.addEventListener('click',()=> {
    leadeboardPallet.style.display = 'block';
    startingMessage.style.display = 'none';

    leader = true;

    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', ()=> {

        

        leadeboardPallet.style.display = 'none';

        if(leader){
      
        startingMessage.style.display = 'block';

        }
        //console.log('clickeddd');
      })
})


questionMark.addEventListener('click',()=> {

    const aboutDetails = document.querySelector('.aboutDetails');

    aboutDetails.style.display = 'block';
    startingMessage.style.display = 'none';

    const aboutClose = document.getElementById('aboutClose');
    aboutClose.addEventListener('click', ()=> {

        aboutDetails.style.display = 'none';
        startingMessage.style.display = 'block';

      })
})
