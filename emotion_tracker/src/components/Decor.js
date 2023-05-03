import React, {useEffect, useState} from 'react';
import '../css/App.css'

const doDecor = (color) => {
    const amount = 10;
    
    for (let i = 0; i < amount; i++){
        let elem = document.createElement('div');
        let rand = Math.floor(Math.random()*100);
        elem.className = "deco";
        elem.style.left = rand+"%";
        elem.style.top = Math.floor(Math.random()*-100) +"px"
        elem.style.backgroundColor = color ? color : "white";
        document.body.appendChild(elem);
        setTimeout(() => {document.body.removeChild(elem)}, 2000);
    }
    
};
const doDecorAlt = (color) => {
    let elem = document.createElement('div');
    let elem2 = document.createElement('div');
    elem.className = "decor";
    elem2.className = "decor";
    elem.id = "deco2";
    elem2.id = "deco3";
    elem.style.backgroundColor = color ? color : "white";
    elem2.style.backgroundColor = color ? color : "white";
    document.body.appendChild(elem);
    document.body.appendChild(elem2);
    setTimeout(() => {document.body.removeChild(elem); 
        document.body.removeChild(elem2)}, 3000);
    
};
export {doDecor, doDecorAlt};