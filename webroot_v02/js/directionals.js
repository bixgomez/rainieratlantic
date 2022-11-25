function createDirectionals() {
  console.log('Creating directionals');

  //get big map div.
  // const bigmMapDiv = document.getElementsByClassName('element--bigmap');

  // make directionals.
  const northDir = document.createElement('img');
  const eastDir  = document.createElement('img');
  const southDir = document.createElement('img');
  const westDir  = document.createElement('img');

  northDir.src = 'i/n.gif';
  eastDir.src  = 'i/e.gif';
  southDir.src = 'i/s.gif';
  westDir.src  = 'i/w.gif';

  northDir.classList.add('directional', 'directional--north');
  eastDir.classList.add('directional', 'directional--east');
  southDir.classList.add('directional', 'directional--south');
  westDir.classList.add('directional', 'directional--west');

  bigmMapDiv.appendChild(northDir);
  bigmMapDiv.appendChild(eastDir);
  bigmMapDiv.appendChild(southDir);
  bigmMapDiv.appendChild(westDir);

}

export { createDirectionals };
