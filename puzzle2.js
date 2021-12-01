// switch separate tiles in Puzzles
function switchPuzzle2(e1, e2){
  var res = document.getElementById(e1).className;
  document.getElementById(e1).className = document.getElementById(e2).className;
  document.getElementById(e2).className = res;
}

function randomize2(){
  for(var r = 1; r <= 3; r++){
    for(var c = 1; c <= 3; c++){
      var r2 = Math.floor(Math.random() * 3 +1);
      var c2 = Math.floor(Math.random() * 3 +1);
      switchPuzzle2("e"+r+c, "e"+r2+c2);
    }
  }
}

function clickAction2(r,c){
  var element = document.getElementById("e" + r + c);
  //need to track the location of the empty space, that allows
  //for puzzle shuffling
  //Check if empty space is on the right hand side
  var peice = element.className;
  if(peice != "s9"){
    if(c < 3){
      if(document.getElementById("e"+r+(c+1)).className =="s9"){
        switchPuzzle2("e"+r+c,"e"+r+(c+1));
        return;
      }
    }
    //white space on left
    if(c > 1){
      if(document.getElementById("e"+r+(c-1)).className == "s9"){
        switchPuzzle2("e"+r+c,"e"+r+(c-1));
        return;
      }
    }
    //white space above
    if(r > 1){
      if(document.getElementById("e"+(r-1)+c).className == "s9"){
        switchPuzzle2("e" +r+c, "e"+(r-1)+c);
        return;
      }
    }
    //white space below
    if(r < 3){
      if(document.getElementById("e"+(r+1)+c).className=="s9"){
        switchPuzzle2("e"+r+c, "e"+(r+1)+c);
        return;
      }
    }
  }
}
