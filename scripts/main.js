import { OwnAttireChoice } from "./staticComponent.js";

console.log("hello world");

//grab the container id to dynamically render
const container = document.querySelector("#container");

//build all the HTML
const render = () => {
  //variable holds the whole component
  const attireOwnerHtml = OwnAttireChoice();

  //render the container
  container.innerHTML = attireOwnerHtml;
};
render();
