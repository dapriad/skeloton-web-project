import _ from 'lodash';
// import './style.css'; // with css rules enabled in webpack
import './style2.scss';

function component() {
    const element = document.createElement('div');

    console.log('%cindex.js line:6 "Entra"', 'color: #007acc;', "Entra");

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());