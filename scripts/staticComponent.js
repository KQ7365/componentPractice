//We will build component to handle yes or no choice using two radio buttons
//radio buttons need to always share same name

export const OwnAttireChoice = () => {
  let html = "<h2>Do you own these types of clothes?</h2>";
  html += "<input type='radio' name='ownsAttire' value='true' /> Yes";
  html += "<input type='radio' name='ownsAttire' value='false' /> No";
  return html;
};
