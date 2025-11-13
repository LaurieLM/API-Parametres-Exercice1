async function getPosts(route) {
  // Récupération des données
  const res = await fetch(`https://dummyjson.com/posts/${route}`);
  const response = await res.json();
  console.log(response);

  // DOM
  const bodyElement = document.querySelector("body");

  // Affichage
  const newH2 = document.createElement("h2");
  const newP = document.createElement("p");

  bodyElement.innerHTML = "";

  newH2.textContent = `${response.title}`;
  newP.textContent = `${response.body}`;

  bodyElement.appendChild(newH2);
  bodyElement.appendChild(newP);
}

const btnPost1 = document.querySelector("#post-1");
const btnPost2 = document.querySelector("#post-2");
const btnPost3 = document.querySelector("#post-3");

// POST 1
btnPost1.addEventListener("click", () => {
  getPosts(1);
});

// POST 2
btnPost2.addEventListener("click", () => {
  getPosts(2);
});

// POST 3
btnPost3.addEventListener("click", () => {
  getPosts(3);
});
