do {function getColor () {
  return '#' + Math.random().toString(16).slice(2,8)
}
  function setBackground() {
    var bgColor = getColor();
    document.body.style.background = bgColor;
  }
}
while (true) {
  document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      setBackground()
    }
  }
}
//current goals: figure out how to make it run by itself
//and prompt the user to start it.
