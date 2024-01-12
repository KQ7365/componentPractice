import { setSocioLocationId } from "./TransientState.js";

const handleChoicesOfferedChange = (changeEvent) => {
  if (changeEvent.target.name === "location") {
    const convertToString = parseInt(changeEvent.target.value);
    setSocioLocationId(convertToString);
  }
};

export const multipleChoicesOffered = async () => {
  //fetch the data from our api
  const response = await fetch("http://localhost:8000/socioLocations");
  //get our api response and turn the string response into an object using .json()
  const locations = await response.json();

  document.addEventListener("change", handleChoicesOfferedChange);

  let choicesHtml = "<h2>Which type of area do you live in?</h2>";
  locations.map((locObj) => {
    choicesHtml += `<input type='radio' name='location' value='${locObj.id}' /> ${locObj.label}`;
  });

  return choicesHtml;
};
