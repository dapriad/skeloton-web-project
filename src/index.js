import _ from 'lodash';
import './assets/css/main.css'; // with css rules enabled in webpack
import './assets/scss/main.scss';
import Icon from './assets/img/github.png';

function component() {
    const element = document.createElement('div');

    console.log('%cindex.js line:6 "Entra"', 'color: #007acc;', "Entra");

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add('sm-icon');

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());