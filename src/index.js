// CSS
import "./styles.css";

import { renderHomePage } from "./home.js";
import { renderMenuPage } from "./menu.js";
import { renderAboutPage } from "./about.js";

const container = document.getElementById('content');
const headerNav = document.getElementById('header-nav');

container.innerHTML = '';
container.appendChild(renderHomePage());

function handleNavigation(e) {
    const target = e.target.closest('button');

    if (!target) {
        return;
    }

    if (target.classList.contains('home')) {
        container.innerHTML = '';
        container.appendChild(renderHomePage());
    } else if (target.classList.contains('menu')) {
        container.innerHTML = '';
        container.appendChild(renderMenuPage());
    } else if (target.classList.contains('about')) {
        container.innerHTML = '';
        container.appendChild(renderAboutPage());
    }
}

headerNav.addEventListener('click', handleNavigation);
