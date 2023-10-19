window.addEventListener("mousemove", function (e) {});

function hasClassName(inElement, inClassName) {
  var regExp = new RegExp("(?:^|\\s+)" + inClassName + "(?:\\s+|$)");
  return regExp.test(inElement.className);
}

function addClassName(inElement, inClassName) {
  if (!hasClassName(inElement, inClassName))
    inElement.className = [inElement.className, inClassName].join(" ");
}

function removeClassName(inElement, inClassName) {
  if (hasClassName(inElement, inClassName)) {
    var regExp = new RegExp("(?:^|\\s+)" + inClassName + "(?:\\s+|$)", "g");
    var curClasses = inElement.className;
    inElement.className = curClasses.replace(regExp, " ");
  }
}

function toggleClassName(inElement, inClassName) {
  if (hasClassName(inElement, inClassName))
    removeClassName(inElement, inClassName);
  else addClassName(inElement, inClassName);
}

function toggleShape() {
  console.log(">>> / file: main.js:28 / toggleShape:", toggleShape);
  var shape = document.getElementById("shape");
  if (hasClassName(shape, "ring")) {
    removeClassName(shape, "ring");
    addClassName(shape, "cube");
  } else {
    removeClassName(shape, "cube");
    addClassName(shape, "ring");
  }

  var stage = document.getElementById("stage");
  if (hasClassName(shape, "ring"))
    stage.style.webkitTransform = "translateZ(-200px)";
  else stage.style.webkitTransform = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".h-container");
  const audio = document.querySelector("#music");

  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.setProperty("--index", i);
    container.appendChild(heart);
    const randomPosition = Math.random() * 100;
    heart.style.left = `${randomPosition}%`;
  }

  const shape = document.getElementById("shape");
  shape.addEventListener("click", () => {
    toggleShape();
    audio.play();
  });
});
