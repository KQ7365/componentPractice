// Set up the transient state data structure and provide initial values
const transientState = {
  // "id": 1, WE DONT NEED id since JSON or API adds it automatically
  ownsBlueJeans: false, //We can set it as true or false
  socioLocationId: 0, //this will be a number but we want state to be at 0
};

// Functions to modify each property of transient state
export const setOwnsBlueJeans = (chosenOwnership) => {
  //now we will update the value of this transient state variable. Remember, we dont want it actually reaching back to our transientState variable, but rather this function.
  transientState.ownsBlueJeans = chosenOwnership;
  console.log(transientState); //This is so i can watch state change. And make sure wits working correctly
};
export const setSocioLocationId = (chosenLocation) => {
  transientState.socioLocationId = chosenLocation;
  console.log(transientState);
};

// Function to convert transient state to permanent state
export const saveSurveySubmission = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };
  const response = await fetch(
    "http://localhost:8000/submissions",
    postOptions
  ); //remember these postOptions are to clarify we are making a POST and not a GET
};
