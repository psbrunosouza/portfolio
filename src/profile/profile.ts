import "./profile.css";
import template from "./profile.html?raw";

document.querySelector<HTMLDivElement>("#content")!.innerHTML = template;
// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
