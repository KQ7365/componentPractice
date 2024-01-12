import { multipleChoicesOffered } from "./DynamicComponent.js";
import { saveSubmission } from "./SaveSubmission.js";
import { SubmissionList } from "./SubmissionList.js";
import { OwnAttireChoice } from "./staticComponent.js";

console.log("hello world");

//grab the container id to dynamically render
const container = document.querySelector("#container");

//build all the HTML
const render = async () => {
  //variable holds the whole component
  const attireOwnerHtml = OwnAttireChoice();
  const locationsHtml = await multipleChoicesOffered();
  const buttonHTML = saveSubmission();
  const submissionHTML = await SubmissionList();

  //render the container
  container.innerHTML = `
  ${attireOwnerHtml}
  ${locationsHtml}
  ${buttonHTML}
  ${submissionHTML}`;
};

//listening for custom Event from transient state and POST function
//the first argument comes from where we named this custom Event. In this example, it came from the TransientState.js POST function
//second argument is the render function...notice no ()
document.addEventListener("newSubmissionCreated", render);

render();
