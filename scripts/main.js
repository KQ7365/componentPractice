import { multipleChoicesOffered } from "./DynamicComponent.js";
import { OwnAttireChoice } from "./staticComponent.js";

console.log("hello world");

//grab the container id to dynamically render
const container = document.querySelector("#container");

//build all the HTML
const render = async () => {
  //variable holds the whole component
  const attireOwnerHtml = OwnAttireChoice();
  const locationsHtml = await multipleChoicesOffered();

  //render the container
  container.innerHTML = `
  ${attireOwnerHtml}
  ${locationsHtml}`;
};
render();
