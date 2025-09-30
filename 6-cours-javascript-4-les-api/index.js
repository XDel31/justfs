//XMLHttpRequest
function reqListener() {
  console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
//req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
/*
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();
*/
//-----------
// FETCH
//-----------
/*
fetch("monUrl")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));
*/
/*
fetch("data.txt")
  .then((res) => res.text())
  .then((data) => console.log(data));

fetch("data.json")
  .then((res) => res.json())
  .then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};
*/

//fetch("data.json", init).then((res) => console.log(res));

//-----------
//CRUD
// Create (POST)
// Read (GET)
//Update (PUT)
//Delete (DELETE)
const toPost = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "From Scratch",
    message: "Comment ça va ?",
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts", toPost).then(() =>
    console.log("data envoyée")
  );
});

const toDelete = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
  mode: "cors",
  credentials: "same-origin",
};

btnDelete.addEventListener("click", () => {
  fetch("http://localhost:3000/posts/42ae", toDelete).then(() =>
    console.log("Data supprimé")
  );
});

//------------
// Asynchrone
//------------
/*
setTimeout(() => {
  console.log("test");
}, 2000);
*/
// promise - Ne sera executé qu'à l'issue de la réponse du fetch
//fetch("monlien").then((res) => res);

// async / await
async function fetchData() {
  await fetch("monlien");
  //attend que le await soit exécuté avant de faire la suite

  executeFunction();
}

//La même chose en fonction anonyme
const fetchData2 = async () => {
  await fetch("monlien");
  //attend que le await soit exécuté avant de faire la suite

  executeFunction();
};

//------------
// JSON
//------------
/*
//Méthode .json() qui s'auto-résout en renvoyant le body de la requête
fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    //Stringify => convertit en JSON
    let settings = JSON.stringify(data);
    console.log(settings);
    //Parse => transform json en objet js
    console.log(JSON.parse(settings));
  });
  */

//------------
// Web API
//------------

// CLIENT STORAGE
//---------------
/*
// Local Storage
//---------------
// Cookies 4 ko - local storage 10 Mo
localStorage.data = "Je stock la data";

//récuperation
console.log(localStorage.getItem("data"));
console.log(localStorage.data);

//suppression
localStorage.clear("data");

const obj = {
  name: "Denis",
  age: 22,
};

localStorage.user = JSON.stringify(obj);

console.log(JSON.parse(localStorage.user));
*/

// Session Storage
//---------------
/*
sessionStorage.dataSettings = "55px";
console.log(sessionStorage.dataSettings);
sessionStorage.clear("dataSettings");
*/

// Cookies
//---------------
document.cookie = "userName=FromScratch";

//Bonne pratique
document.cookie = "pseudo=FS;path=/;max-age=4500000;secure";
