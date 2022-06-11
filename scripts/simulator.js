// import classes and additional functions
import Settings from "./settings.js"
import Displaying from "./displaying.js"
import Gravity from "./gravity.js";
import { clears, randomObject, collision } from "./functions.js";

// create an object of class and get its properties
const settings = new Settings();
const g = settings.g;
const dt = settings.dt;
const chainlet = settings.chainlet;
const canvasElement = settings.canvasElement;
const canvasContext = canvasElement.getContext("2d");
const timeRangeElement = settings.timeRangeElement;
const gravityRangeElement = settings.gravityRangeElement;
const outTimeElement = settings.outTimeElement;
const outGravityElement = settings.outGravityElement;
const fixedElement = settings.fixedElement;
const pathsElement = settings.pathsElement;
const collisionElement = settings.collisionElement;
const objectElement = settings.objectElement;
const scenesElement = settings.scenesElement;
const scaleElement = settings.scaleElement
const clearElement = settings.clearUniverseElement;
const width = (canvasElement.width = window.innerWidth);
const height = (canvasElement.height = window.innerHeight);
const imageInterfacePath = settings.imageInterfacePath;
const imagePlanetsPath = settings.imagePlanetsPath;
const numberScenes = ['first', 'second', 'third', 'fourth', 'fifth'];
const typeScenes = [settings.scenesNone, settings.scenes1NewtonLaw, settings.scenesTwoObjects, settings.scenesNBodyProblem, settings.scenesSolarSystem];
let fixed = settings.fixed;
let scale = settings.scale;
let mousePX = settings.mousePX;
let mousePY = settings.mousePY;
let mouseX = settings.mouseX;
let mouseY = settings.mouseY;
let dragging = settings.dragging;

// Scrolling ban
document.body.style.overflow = "hidden";

//---------------------------------------------------------------------------------------//


const model = new Gravity(g, dt); // Set an object of class and give parameters: g && dt
model.objects = clears(numberScenes[0], typeScenes); // and give object

//const disp = new Displaying(canvasContext, chainlet);


const updateModel = valuez => {
  valuez.forEach(mass => mass["Displaying"] = new Displaying(canvasContext, chainlet));
};


updateModel(model.objects);

// Event listeners
scenesElement.addEventListener("change", () => {
  const changeScene = scenesElement.value;
  model.objects = clears(changeScene, typeScenes);
  updateModel(model.objects);
}, false);

clearElement.addEventListener("click", () => {
  model.objects = clears(numberScenes[0], typeScenes);
  updateModel(model.objects);
  scenesElement.value = numberScenes[0];
}, false);

canvasElement.addEventListener("mousedown", e => {
  mousePX = e.clientX;
  mousePY = e.clientY;
  dragging = true;
}, false);

canvasElement.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
}, false);

canvasElement.addEventListener("mouseup", e => {
  const sIndexValue = objectElement.value;
  const sIndexKey = objectElement.selectedIndex;
  const resultPath = randomObject(sIndexKey);
  let objectName;
  let x = (mousePX - width / 2) / scale;
  let y = (mousePY - height / 2) / scale;
  let sx = (e.clientX - mousePX) / 100;
  let sy = (e.clientY - mousePY) / 100;
  console.log(resultPath + ' ' + imagePlanetsPath.neptune[0])
  switch (resultPath) {
    case imagePlanetsPath.none[0] : objectName = imagePlanetsPath.none[1]; break;
    case imagePlanetsPath.asteroid[0] : objectName = imagePlanetsPath.asteroid[1]; break;
    case imagePlanetsPath.blueSquenceStar[0] : objectName = imagePlanetsPath.blueSquenceStar[1]; break;
    case imagePlanetsPath.earth[0] : objectName = imagePlanetsPath.earth[1]; break;
    case imagePlanetsPath.jupiter[0] : objectName = imagePlanetsPath.jupiter[1]; break;
    case imagePlanetsPath.mars[0] : objectName = imagePlanetsPath.mars[1]; break;
    case imagePlanetsPath.mercury[0] : objectName = imagePlanetsPath.mercury[1]; break;
    case imagePlanetsPath.neptune[0] : objectName = imagePlanetsPath.neptune[1]; break;
    case imagePlanetsPath.redGiant[0] : objectName = imagePlanetsPath.redGiant[1]; break;
    case imagePlanetsPath.saturn[0] : objectName = imagePlanetsPath.saturn[1]; break;
    case imagePlanetsPath.sun[0] : objectName = imagePlanetsPath.sun[1]; break;
    case imagePlanetsPath.uranus[0] : objectName = imagePlanetsPath.uranus[1]; break;
    case imagePlanetsPath.venus[0] : objectName = imagePlanetsPath.venus[1]; break;
  }

  fixed = (fixedElement.checked) ? true : false;  

  model.objects.push({
    name: objectName,
    imageClass: resultPath,
    fixed,
    m: parseFloat(sIndexValue),
    x,
    y,
    sx,
    sy,
    Displaying: new Displaying(canvasContext, chainlet)
  });
  dragging = false;
}, false);

timeRangeElement.addEventListener("input", function () {
  model.dt = timeRangeElement.value;
  outTimeElement.innerHTML = model.dt;
});

gravityRangeElement.addEventListener("input", function () {
  model.g = gravityRangeElement.value;
  outGravityElement.innerHTML = model.g;
});

scaleElement.addEventListener("change", function (e) {
  scale = e.target.value;
  const objectLength = model.objects.length;
  for (let i = 0; i < objectLength; i++) {
    const objectI = model.objects[i];
    objectI.Displaying.scales();
  }
})

const rendering = () => {

  const renderImage = new Image();
  renderImage.src = imageInterfacePath[0];
  canvasContext.drawImage(renderImage, 0, 0, width, height);

  model.acceleration();
  model.position();

  const objectLength = model.objects.length;

  for (let i = 0; i < objectLength; i++) {

    const objectI = model.objects[i];
    const movable = model.objects[i].fixed;
    const imageClass = model.objects[i].imageClass;
    const x = width / 2 + objectI.x * scale;
    const y = height / 2 + objectI.y * scale;
    let destroy = false;

    if (collisionElement.checked) {
      for (let j = 0; j < objectLength; j++) {
        if (i !== j) {
          const objectJ = model.objects[j];
          destroy = collision(objectI, objectJ);
          if (destroy) {
            model.objects.splice(i);
            model.objects.splice(j);
            break;
          }
        }
      }
    }

    if (destroy) { break; }
    if (pathsElement.checked) { objectI.Displaying.paths(x, y, movable); }

    objectI.Displaying.planets(x, y, imageClass, scale);
    objectI.Displaying.information(model.objects[objectLength - 1], width, height);
  }
  if (dragging) {
    renderImage.src = imageInterfacePath[1];
    canvasContext.stroke();
    canvasContext.beginPath();
    canvasContext.arc(mousePX - 25, mousePY - 25, 1, 0, 2 * Math.PI);
    for (let i = 1; i < 10; i++) {
      canvasContext.arc(mouseX, mouseY, 1 * i, 0, 2 * Math.PI);
      canvasContext.fillStyle = `rgb(255, 255, 255)`;
      canvasContext.fill();
    }
    canvasContext.drawImage(renderImage, mouseX - 25, mouseY - 25, 50, 50);
    canvasContext.fillStyle = `rgb(255, 255, 255)`;
  }
  requestAnimationFrame(rendering);
};

requestAnimationFrame(rendering);
