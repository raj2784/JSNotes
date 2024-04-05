const clickMe = document.querySelector("#clickMe");
const donotClickMe = document.querySelector("#donotClickMe");
const ok = document.getElementById("ok");
const notOk = document.getElementById("notOk");

const worker = new Worker("worker.js");

window.addEventListener("DOMContentLoaded", (event) => {
  // clickMe.addEventListener("click", () => {
  //   let i;
  //   for (i = 0; i <= 1000000000; i++) {}
  //   const res1 = (ok.innerHTML = i);
  //   console.log(res1);
  // });

  //below task is taking longer so we use worker thread, so other task can be achived while executing the longer task

  clickMe.addEventListener("click", function (e) {
    e.preventDefault();
    worker.postMessage("");
    worker.onmessage = (e) => {
      const res1 = (ok.innerHTML = e.data);
      console.log(res1);
    };
  });

  donotClickMe.addEventListener("click", function (e) {
    e.preventDefault();
    const res2 = (notOk.innerHTML = "Second was Clicked");
    console.log(res2);
  });
});
