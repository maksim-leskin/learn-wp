import './index.html';
import './index.scss';
import code from './img/code.png'
import { mult, sum } from './modules/calc';

const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = code;
img.width = 700;
imgWrap.append(img);

console.log(mult(3, 4));
console.log(sum(3, 4));