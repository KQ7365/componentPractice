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
render();
