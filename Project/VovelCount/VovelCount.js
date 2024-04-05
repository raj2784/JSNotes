const str = "JS is an amizing language for we development";
const vovel = ["a", "e", "i", "o", "u"];

function FindVovelCount(data) {
  let count = 0;
  let arrayData = data.toLowerCase().split("");

  arrayData.forEach((element) => {
    vovel.includes(element) && count++;
  });
  return count;
}

const res = FindVovelCount(str);
console.log(res);
