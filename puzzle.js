// JavaScript file for the movement and shuffling of the first puzzle
// Map puzzle
// switch separate tiles in Puzzles
function switchPuzzle(element1, element2){
  var res = document.getElementById(element1).className;
  document.getElementById(element1).className = document.getElementById(element2).className;
  document.getElementById(element2).className = res;
}

function randomize(){
  for(var r = 1; r <= 3; r++){
    for(var c = 1; c <= 3; c++){
      var r2 = Math.floor(Math.random() * 3 +1);
      var c2 = Math.floor(Math.random() * 3 +1);
      switchPuzzle("element"+r+c, "element"+r2+c2);
    }
  }
}

function clickAction(r,c){
  var element = document.getElementById("element" + r + c);
  //need to track the location of the empty space, that allows
  //for puzzle shuffling
  //Check if empty space is on the right hand side
  var peice = element.className;
  if(peice != "t9"){
    if(c < 3){
      if(document.getElementById("element"+r+(c+1)).className =="t9"){
        switchPuzzle("element"+r+c,"element"+r+(c+1));
        return;
      }
    }
    //white space on left
    if(c > 1){
      if(document.getElementById("element"+r+(c-1)).className == "t9"){
        switchPuzzle("element"+r+c,"element"+r+(c-1));
        return;
      }
    }
    //white space above
    if(r > 1){
      if(document.getElementById("element"+(r-1)+c).className == "t9"){
        switchPuzzle("element" +r+c, "element"+(r-1)+c);
        return;
      }
    }
    //white space below
    if(r < 3){
      if(document.getElementById("element"+(r+1)+c).className=="t9"){
        switchPuzzle("element"+r+c, "element"+(r+1)+c);
        return;
      }
    }
  }
}
