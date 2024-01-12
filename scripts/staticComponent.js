import { setOwnsBlueJeans } from "./TransientState.js";

//This next function will handle choosing between yes or no and updating our transient state. After this we'll add an event listener inside to component function to make it work.
//This is really just setting up that change. also remember the target.name must match the actual component
/*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
const handleOwnershipChange = (changeEvent) => {
  if (changeEvent.target.name === "ownsAttire") {
    const convertedToBoolean = JSON.parse(changeEvent.target.value);
    setOwnsBlueJeans(convertedToBoolean);
  }
};
//We will build component to handle yes or no choice using two radio buttons
//radio buttons need to always share same name

export const OwnAttireChoice = () => {
  document.addEventListener("change", handleOwnershipChange);

  let html = "<h2>Do you own these types of clothes?</h2>";
  html += "<input type='radio' name='ownsAttire' value='true' /> Yes";
  html += "<input type='radio' name='ownsAttire' value='false' /> No";
  return html;
};
