var sdisplay=document.getElementById("10:09");
var seasonorbreak=document.getElementById("timetitle");
var pause=document.getElementById("Pause");
var reset=document.getElementById("Reset");
var lmldispaly=document.getElementById("LmL");
var lmrdispaly=document.getElementById("LmR");
var timetitle=document.getElementById("timetitle");
var valueL=0;
var valueS=0;
//button
var lmlminus=document.getElementById("LmL-");
var lmlplus=document.getElementById("LmL+");
//button
var lmrminus=document.getElementById("LmR-");
var lmrplus=document.getElementById("LmR+");
//clock timer
async function delayedGreeting(sbcount) {
  while(1)
  { 
  sbcount++;
  timetitle.innerHTML=`Season ${sbcount}`;
  myTimer(valueL);
  sdisplay.style.color="rgba(0, 0, 255, 0.425)";
  await sleep(60000);
   timetitle.innerHTML=`Break ${sbcount}`;
   myTimer(valueS);
   sdisplay.style.color="rgb(182, 11, 11)";
   await sleep(60000);
  }
}
//sleep
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function timer(Sm)
{sdisplay.innerHTML =Sm + ":" + 00;
startTimer();
function startTimer() {
  var presentTime = sdisplay.innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  sdisplay.innerHTML =m + ":" + s;
  if (m==0 && s==0)
  {
    return
  }
  setTimeout(startTimer, 1000);
}
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec};
  if (sec < 0) {sec = "59"};
  return sec;
}
}
//sdisplay
function myTimer(Sm) {
  timer(Sm)
}
//Lmr
lmrplus.addEventListener("click",function click()
{ valueS=valueS+1
  lmrdispaly.innerHTML=`${valueS} min`
});
lmrminus.addEventListener("click",function click()
{ if (valueS===0)
  {
    return 
   }
  valueS=valueS-1
  lmrdispaly.innerHTML=`${valueS} min`
});
//Lml
lmlplus.addEventListener("click",function click()
{ valueL=valueL+1
  lmldispaly.innerHTML=`${valueL} min`
});
lmlminus.addEventListener("click",function click()
{ if (valueL===0)
  {
    return 
   }
  valueL=valueL-1
  lmldispaly.innerHTML=`${valueL} min`
});
//last head and reset

reset.addEventListener("click",function click()
{ valueL=0;
  valueS=0;
  value=0;
  lmldispaly.innerHTML=`${valueL} min`
  lmrdispaly.innerHTML=`${valueS} min`
  sdisplay.innerHTML=`${value}:${value}${value}`
  timetitle.innerHTML='Season'
});;
var sbcount=0;
pause.addEventListener("click",function click()
{ 
  if(pause.innerHTML=="Pause")
  { 
    pause.innerHTML="Start"
  }
  else{
    pause.innerHTML="Pause"
    delayedGreeting(sbcount);
  }

});
