'use strict';

const imgDefault = "http://placehold.it/300x300"
let imgImage = 'http://www.fillmurray.com/300/300';

let userImage = document.querySelector('.tittle').innerHTML;

if (userImage) {
    document.querySelector('.box-one').innerHTML = `<img src= ${imgImage}>`;
} else {
    document.querySelector('.box-one').innerHTML = `<img src= ${imgDefault}>`;
};
