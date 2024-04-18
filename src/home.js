import home from './cafe.jpg'
function addHome() {
  let parentDiv = document.getElementById("content");
  parentDiv.innerHTML = "";
  let homeHeader = document.createElement("h1");
  homeHeader.textContent = "Coffee Time";
  let homeText = document.createElement("p");
  homeText.textContent =
    "Welcome to coffee time. Here we pride ourselves on making coffee using only the best freshly roasted beans! Our baristas can make several different coffee drinks, tailored precisely to your taste, please have a look at our menu to see what is available.";
  let homeimg = new  Image();
  homeimg.src= home;

  parentDiv.append(homeHeader, homeText ,homeimg);
}

export { addHome };
