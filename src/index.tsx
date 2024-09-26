import * as _ from "lodash";
import reportWebVitals from "./reportWebVitals";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "world"], " ");

  return element;
}

document.body.appendChild(component());

reportWebVitals(console.log);
