// Callback Hell / Pyramid of Doom
getUserData(function (userData) {
  getUserMessages(userData.id, function (userMessages) {
    getUserLocation(userData.id, function (userLocation) {
      renderData(userData, userMessages, userLocation)
    })
  })
})

function getUserData (callback) {
  var data = {name: "Danny", Age: 26, id: 1211}
  //setTimeout roughly simulates an HTTP request.
  setTimeout(function () {
    callback(data)
  }, 0);
}

function getUserMessages (userId, callback) {
  var data = [{text: 'hello'}, {text: 'Do you like music?'}, {text: 'Numbers are cool.'}]
  //setTimeout roughly simulates an HTTP request.
  setTimeout(function () {
    callback(data)
  }, 0)
}

function getUserLocation (userId, callback) {
  var data = {state: 'CO', city: 'Denver'}
  //setTimeout roughly simulates an HTTP request.
  setTimeout(function () {
    callback(data)
  }, 0)
}

function renderData (user, messages, location) {
  console.log(user, messages, location)
}

let promise1 = new Promise(getUserData());
let promise2 = new Promise(getUserMessages());
let promise3 = new Promise(getUserLocation());
let promise4 = new Promise(renderData());

let myPromises = [promise1, promise2, promise3, promise4];

Promise.all(myPromises)
       .then(console.log)
