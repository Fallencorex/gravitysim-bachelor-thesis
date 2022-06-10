export function randomObject (sIndexKey) { // Random image for object
  let imageLink = '';
  switch (sIndexKey) {
    case 1:   imageLink = 'resources/images/01_asteroid.png';
              break;
    case 2: 
              sIndexKey = Math.floor(Math.random() * 8) + 1;
              imageLink = 'resources/images/02_planet_0' + sIndexKey + '.png';
              break;
    case 3:
              sIndexKey = Math.floor(Math.random() * 3) + 1;
              imageLink = 'resources/images/03_star_0' + sIndexKey + '.png';
              break;
    case 4:
              imageLink = 'resources/images/04_black_hole.png';
              break;                  
    default: 
              imageLink = '';
  }
  return imageLink;
}

export function clears (nameScenes, typeScenes) { // Cleaning up or replacing the simulated environment
    let modelObjects;
    if (nameScenes == 'first') modelObjects = JSON.parse(JSON.stringify(typeScenes[0]));
    if (nameScenes == 'second') modelObjects = JSON.parse(JSON.stringify(typeScenes[1]));
    if (nameScenes == 'third') modelObjects = JSON.parse(JSON.stringify(typeScenes[2]));
    if (nameScenes == 'fourth') modelObjects = JSON.parse(JSON.stringify(typeScenes[3]));
    if (nameScenes == 'fifth') modelObjects = JSON.parse(JSON.stringify(typeScenes[4]));
    return modelObjects;
}

export function collision (objectI, objectJ) { // Experimental function. Collision between objects
  let destroy = true;
  let sX = Math.pow(Math.abs(objectI.x - objectJ.x), 2);
  let sY = Math.pow(Math.abs(objectI.y - objectJ.y), 2);
  let h = Math.sqrt(sX + sY);
  let d = h - 0.15;
  if (d >= 0) destroy = false;
  return destroy;
}

