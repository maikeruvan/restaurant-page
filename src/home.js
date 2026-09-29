import restaurantImg from "./images/restaurant.jpg";

const div = document.createElement('div');
const h1 = document.createElement('h1');
const img = document.createElement('img');
const p = document.createElement('p');

export function renderHomePage() {
    const fragment = document.createDocumentFragment();

    h1.innerText = 'This is my ODIN restaurant project for webpack!';
    div.appendChild(h1)

    img.src = restaurantImg;
    div.appendChild(img)

    p.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur, illum nisi ipsum omnis perspiciatis et nulla ab? Repellat qui, animi facilis mollitia illo perferendis obcaecati! Magnam beatae soluta voluptas.';
    div.appendChild(p)

    fragment.appendChild(div);

    return fragment;
}
