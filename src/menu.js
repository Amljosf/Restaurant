
import home from './coffee.jpg'

function addMenu() {
  let parentDiv = document.getElementById("content");
  parentDiv.innerHTML = "";
  let menuHeader = document.createElement("h1");
  menuHeader.textContent = "Our Menu";
  let menuText = document.createElement("p");
  menuText.innerHTML =
    "<ul><li>Coffe- 10</li><li>milk-15</li><li>ice coffe - 20</li></ul>";
    let homeimg = new  Image();
    homeimg.src= home;
  
  parentDiv.append(menuHeader, menuText,homeimg);
}

export { addMenu };
