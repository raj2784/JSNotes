const clock = document.getElementById("clock");
console.log(clock);

setInterval(function () {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  //console.log(currentTime);
  clock.innerHTML = currentTime;
}, 1000);
