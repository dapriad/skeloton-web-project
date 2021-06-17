import _ from 'lodash';
import './assets/css/main.css'; // with css rules enabled in webpack
import './assets/scss/main.scss';
import Icon from './assets/img/github.png';

import Data from './data/data.xml';
import Notes from './data/data.csv';

import toml from './data/data.toml';
import yaml from './data/data.yaml';
import json from './data/data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`


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