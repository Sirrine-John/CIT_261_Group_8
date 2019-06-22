
  function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log("Key code: "+e.keyCode+ " - Letter: "+ e.key.toString());
    console.log(audio);
    console.log(key);
    if (!audio) return;
    audio.currentTime = 0;
    key.classList.add('playing');
    audio.play();

    marginAdd=parseInt(window.getComputedStyle(key).marginTop,10)+10;
    if (marginAdd < 110){
      key.setAttribute("style","margin-top: "+marginAdd.toString()+"px")
    }
    else{
      key.removeAttribute("style");
    }
   console.log(parseInt(window.getComputedStyle(key).marginTop,10)+10);
  }

  function removeTransition(e){
    // console.log(e);
    if (e.propertyName !== 'transform')return;
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => {
    key.addEventListener('transitionend',removeTransition);
  });


  window.addEventListener('keydown', playSound);