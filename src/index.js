import _ from 'lodash';
import './assets/css/main.css'; // with css rules enabled in webpack
import './assets/scss/main.scss';
import Icon from './assets/img/github.png';

import Data from './data/data.xml';
import Notes from './data/data.csv';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add('sm-icon');

    element.appendChild(myIcon);

    console.log('%cindex.js line:24 Data', 'color: #007acc;', Data);
    console.log('%cindex.js line:25 Notes', 'color: #007acc;', Notes);

    return element;
}

document.body.appendChild(component());