import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    console.log('%cindex.js line:6 "Entra"', 'color: #007acc;', "Entra");

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());