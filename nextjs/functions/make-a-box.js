import { useEffect } from "react";

// Import variables we exported from the variables.module.scss partial.
import { boxWidth, boxHeight, fontSizeBox } from '../styles/variables.module.scss'

// https://www.webtutpro.com/solve-document-is-not-defined-errors-in-next-js-26fea778b868
// https://dev.to/typicoul/fixing-next-js-referenceerror-document-is-not-defined-2jgi

function makeABox() {
    useEffect(() => {
        const findMyNewBox = document.getElementById('myNewBox')
        if (findMyNewBox) {
            findMyNewBox.remove()
        }
        console.log( boxWidth )
        console.log( boxHeight )
        console.log( fontSizeBox )
        const html = `${boxWidth} x ${boxHeight}`
        const boxContainer = document.getElementsByClassName('boxes')[0]
        const myNewBox = document.createElement('div')
        myNewBox.setAttribute('id', 'myNewBox');
        myNewBox.classList.add('box');
        myNewBox.innerHTML = html;
        
        // Set width and height of box based on our original Sass variables.
        myNewBox.style.width = boxWidth;
        myNewBox.style.height = boxHeight;
        
        boxContainer.appendChild(myNewBox)
    }, []);
}

export { makeABox }