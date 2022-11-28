import { useEffect } from "react";

// https://www.webtutpro.com/solve-document-is-not-defined-errors-in-next-js-26fea778b868
// https://dev.to/typicoul/fixing-next-js-referenceerror-document-is-not-defined-2jgi

function createTheLayout() {
  useEffect(() => {
  
    const mainContainer = document.getElementById('rainieratlantic')
  
    document.body.classList.add('page--rainieratlantic')
  
    const elementBigMap = document.createElement('div')
    const elementLilMap = document.createElement('div')
    const elementGuideMap = document.createElement('div')
    const elementTitle = document.createElement('div')
    const elementNav = document.createElement('div')
    const elementInfo = document.createElement('div')

    elementBigMap.classList.add('element', 'element--bigmap');
    elementLilMap.classList.add('element', 'element--lilmap');
    elementGuideMap.classList.add('element', 'element--guidemap');
    elementTitle.classList.add('element', 'element--title');
    elementNav.classList.add('element', 'element--nav');
    elementInfo.classList.add('element', 'element--info');
    
    mainContainer.appendChild(elementBigMap)
    mainContainer.appendChild(elementLilMap)
    mainContainer.appendChild(elementGuideMap)
    mainContainer.appendChild(elementTitle)
    mainContainer.appendChild(elementNav)
    mainContainer.appendChild(elementInfo)
    
    const guideMapImage = document.createElement("img")
    guideMapImage.setAttribute('id', 'guidemap')
    guideMapImage.src = 'i/guidemap.gif'
    elementGuideMap.appendChild(guideMapImage)
  
    const redBox = document.createElement("div")
    
  }, []);
}

export { createTheLayout }
