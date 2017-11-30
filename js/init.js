window.addEventListener('keydown', playSound);   //plays music when keysdown

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');      //adding the animations
    audio.currentTime = 0;              
    audio.play();
  }

  
 const keys = Array.from(document.querySelectorAll('.key'));
 keys.forEach(key => key.addEventListener('transitionend', removeTransition));  //loop within all keys ans removes the transition  

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;  // will only listen to transform css
    e.target.classList.remove('playing');  //remove the effect
  }

  

 
  