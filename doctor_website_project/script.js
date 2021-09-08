function myMove() {
	var width = ((window.innerWidth>0)?window.innerWidth : screen.width) - 300;
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 0.1);
  function frame() {
    if (pos == width) {
      elem.style.left = width/4 + "px"
      document.getElementById("demo").style.display = "block";
    } else {
      pos+=2; 
       elem.style.left = pos + "px"; 
    }
  }

}