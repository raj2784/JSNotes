//create promise
const promises1 = new Promise(function (resolve, reject) {
  //do async task
  //DB calls, cryprography, network call,
  setTimeout(function () {
    console.log("promise 1 created");
    resolve();
  }, 1000);
});

//promise consumed
promises1.then(function () {
  console.log("promise 2 consumed");
});

// another method to create promise without holding in to variable using new key word
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("promise 2 created");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise 2 consumed");
});

//promises passed data in resolve and than consumed into then as paramter below is example of user
const promises3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Raj", email: "raj@gmail.com" });
  }, 1000);
});

promises3.then(function (user) {
  console.log(user);
});

//promises with reject
const promises4 = new Promise(function (resolve, reject) {
  setInterval(function () {
    let error = true;
    if (!error) {
      resolve({ username: "raj2784", password: "123" });
    } else {
      reject("got error");
    }
  });
}, 1000);

promises4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is eighter resolve or rejected");
  });

// promises with async and await
//IMPORTANT
//but try catch must use to handle error part
const promises5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "123" });
    } else {
      reject("Error : something went wrong");
    }
  }, 1000);
});

async function consumedPromises5() {
  try {
    const res = await promises5;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
consumedPromises5();

//fetch with function
async function getAllUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.org/users");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Error");
  }
}
getAllUsers();

//API Call fetch and then
fetch("https://api.github.com/users/raj2784")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
