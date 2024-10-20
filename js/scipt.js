let turn = "x";
const myHeader = document.querySelector(".info");
const myBlocks = Array.from(document.querySelectorAll(".game-blocks .biock"));

myBlocks.forEach((blok) => {
 blok.onclick = function () {
  if (blok.innerHTML == "" && turn === "x") {
    blok.innerHTML = turn;
    turn = "o";
    myHeader.innerHTML = "<span>o</span>";
    blok.classList.add("clicked");
  } else if (blok.innerHTML == "" && turn === "o") {
    blok.innerHTML = turn;
    turn = "x";
    myHeader.innerHTML = "<span>x</span>";
    blok.classList.add("clicked");
  }
 winner();
 };
});

function winner() {
  if(myBlocks[0].innerHTML == myBlocks[1].innerHTML &&
     myBlocks[1].innerHTML == myBlocks[2].innerHTML &&
     myBlocks[2].innerHTML != ""
) 
 end(0,1,2);
 if(myBlocks[0].innerHTML == myBlocks[3].innerHTML &&
    myBlocks[3].innerHTML == myBlocks[6].innerHTML &&
    myBlocks[6].innerHTML != ""
) 
end(0,3,6);
if(myBlocks[0].innerHTML == myBlocks[4].innerHTML &&
    myBlocks[4].innerHTML == myBlocks[8].innerHTML &&
    myBlocks[8].innerHTML != ""
) 
end(0,4,8);//
if(myBlocks[1].innerHTML == myBlocks[4].innerHTML &&
    myBlocks[4].innerHTML == myBlocks[7].innerHTML &&
    myBlocks[7].innerHTML != ""
) 
end(1,4,7);//
if(myBlocks[2].innerHTML == myBlocks[5].innerHTML &&
    myBlocks[5].innerHTML == myBlocks[8].innerHTML &&
    myBlocks[8].innerHTML != ""
) 
end(2,5,8);//
if(myBlocks[2].innerHTML == myBlocks[4].innerHTML &&
    myBlocks[4].innerHTML == myBlocks[6].innerHTML &&
    myBlocks[6].innerHTML != ""
) 
end(2,4,6);//
if(myBlocks[6].innerHTML == myBlocks[7].innerHTML &&
    myBlocks[7].innerHTML == myBlocks[8].innerHTML &&
    myBlocks[8].innerHTML != ""
) 
end(6,7,8);
if(myBlocks[3].innerHTML == myBlocks[4].innerHTML &&
    myBlocks[4].innerHTML == myBlocks[5].innerHTML &&
    myBlocks[5].innerHTML != ""
) 
end(3,4,5);//
}

function end(a, b, c) {
 myBlocks[a].style.backgroundColor = "red";
 myBlocks[b].style.backgroundColor = "red";
 myBlocks[c].style.backgroundColor = "red";
 myHeader.innerHTML = `<span>${myBlocks[a].innerHTML} Winner</span>`
 document.querySelector(".game-blocks").style.pointerEvents = "none";
 document.getElementById("end-game").play();
 setInterval(()=> {
    myHeader.innerHTML += ".";
 }, 1000),
 setTimeout(() => {
    location.reload();
 }, 4000);
}


