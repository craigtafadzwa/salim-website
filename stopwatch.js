

let timer = null;

let hours = 0;
let minutes = 0;
let seconds = 0;

function start() {

  if (timer !== null) {
    clearInterval(timer);
  }

  timer = setInterval(() => {

    seconds++;

    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("display").innerHTML =
      h + ":" + m + ":" + s;

  }, 1000);
}

function stop() {
  clearInterval(timer);
}

function reset() {

  clearInterval(timer);

  hours = 0;
  minutes = 0;
  seconds = 0;

  document.getElementById("display").innerHTML =
    "00:00:00";
}



  
