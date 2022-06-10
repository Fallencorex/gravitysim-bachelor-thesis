import Settings from "./settings.js"

export function randomObject (sIndexKey) { // Random image for object
  const settings = new Settings();
  const imagePlanetsPath = settings.imagePlanetsPath;
  let imageLink;
  let randomNumber;
  switch (sIndexKey) {
    case 1:   imageLink = imagePlanetsPath.asteroid[0];
              break;
    case 2: 
              randomNumber = Math.floor(Math.random() * (9 - 2) + 2);
              if (randomNumber === 2) imageLink = imagePlanetsPath.jupiter[0];
              if (randomNumber === 3) imageLink = imagePlanetsPath.earth[0];
              if (randomNumber === 4) imageLink = imagePlanetsPath.mars[0];
              if (randomNumber === 5) imageLink = imagePlanetsPath.mercury[0];
              if (randomNumber === 6) imageLink = imagePlanetsPath.neptune[0];
              if (randomNumber === 7) imageLink = imagePlanetsPath.saturn[0];
              if (randomNumber === 8) imageLink = imagePlanetsPath.uranus[0];
              if (randomNumber === 9) imageLink = imagePlanetsPath.venus[0];
              break;
    case 3:
              randomNumber = Math.floor(Math.random() * (10 - 12) + 12);
              if (randomNumber === 10) imageLink = imagePlanetsPath.sun[0];
              if (randomNumber === 11) imageLink = imagePlanetsPath.redGiant[0];
              if (randomNumber === 12) imageLink = imagePlanetsPath.blueSquenceStar[0];
              break;
    case 4:
              imageLink = imagePlanetsPath.blackhole[0];
              break;                  
    default: 
              imageLink = imagePlanetsPath.none[0];
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

