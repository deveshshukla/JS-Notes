'use strict';

// update body
document.querySelector('body').style.backgroundColor = "#212121";
document.querySelector('body').style.color = "#fff";

let addList = (lang) => {
    let li = document.createElement('li');

    // Not a optimized approach: travers all tree
    // li.innerHTML = `${lang}`;

    // Optimized one
    let text = document.createTextNode(lang);
    li.appendChild(text);

    //append to html
    document.querySelector('.langList').appendChild(li);
}

addList('JavaScript');
addList('Java');
addList('React');
addList('Node');
addList('Express');

// Update elements ----------------->

// using innerHtml
let firstEle = document.querySelector('li:first-child');
firstEle.innerHTML = 'Python';

// using textContent
let secEle = document.querySelector('li:nth-child(2)');
secEle.textContent = 'JavaScript';

// using outerHTML
let lastEle = document.querySelector('li:last-child');
lastEle.outerHTML = '<li>Java</li>';

// remove element
// firstEle.remove();