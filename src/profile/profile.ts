import "./profile.css";
import template from "./profile.html?raw";

const getDescriptions = (subtitle: HTMLHeadElement) => {
  const subtitles = [
    "A experienced Software Developer, crafting beautiful web experiences.",
  ];
  subtitle.innerHTML = subtitles[Math.floor(Math.random() * subtitles.length)];
};

document.querySelector<HTMLDivElement>("#content")!.innerHTML = template;
getDescriptions(document.querySelector<HTMLHeadElement>("#subtitle")!);
