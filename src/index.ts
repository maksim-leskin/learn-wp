import './index.html';
import './index.scss';
import url from './img/code.png';
import { mult, sum } from './modules/calc';

const createImage = (url: string):HTMLImageElement => {
  const img = new Image();
  img.src = url;
  img.width = 700;
  return img;
};

const renderImage = () => {
  const imgWrap = document.querySelector('.img');
  const image = createImage(url);

  if (imgWrap instanceof HTMLDivElement) {
    imgWrap.append(image);
  }
};

const init = async () => {
  const x: number = 5;
  const y: number = 21;

  console.log('mult(x, y): ', mult(x, y));
  console.log('sum(y, x): ', await sum(y, x));
  renderImage();
};

init();
