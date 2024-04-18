import { addHome } from './home';
import { addMenu} from './menu';
import { addAbout } from './about';
import './style.css';
addHome();

document.getElementById('home').addEventListener('click', (e) => {
  addHome();
});

document.getElementById('menu').addEventListener('click', (e) => {
    addMenu();
});

document.getElementById('about').addEventListener('click', (e) => {
  addAbout();
});