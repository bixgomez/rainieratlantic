// define main div, which is the existing "app".
export const mainDiv = document.getElementById('app');

export function createLayout() {
    console.log('Creating layout');

    // make "big map" div.
    const bigmMapDiv = document.createElement('div')
    bigmMapDiv.classList.add('element', 'element--bigmap')
    mainDiv.appendChild(bigmMapDiv)

    // make "small map" div.
    const lilMapDiv = document.createElement('div')
    lilMapDiv.classList.add('element', 'element--lilmap')
    mainDiv.appendChild(lilMapDiv)

    // make "guide map" div.
    const guideMapDiv = document.createElement('div')
    guideMapDiv.classList.add('element', 'element--guidemap')
    mainDiv.appendChild(guideMapDiv)

    // make "title" div.
    const titleDiv = document.createElement('div')
    titleDiv.classList.add('element', 'element--title')
    mainDiv.appendChild(titleDiv)

    // make "nav" div.
    const navDiv = document.createElement('div')
    navDiv.classList.add('element', 'element--nav')
    mainDiv.appendChild(navDiv)

    // make "info" div.
    const infoDiv = document.createElement('div')
    navDiv.classList.add('element', 'element--nav')
    mainDiv.appendChild(navDiv)

    //get big map div.
    // const bigmMapDiv = document.getElementsByClassName('element--bigmap');
}
