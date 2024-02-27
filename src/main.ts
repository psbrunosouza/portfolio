import "./main.css";
import template from "./main.html?raw";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = template;
// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
