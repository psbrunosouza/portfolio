import "./profile.css";
import template from "./profile.html?raw";

const setProficiencies = (proficiencyRef: HTMLDivElement) => {
  [
    { name: "Javascript" },
    { name: "Typescript" },
    { name: "Golang" },
    { name: "Angular" },
  ].forEach((proficiency) => {
    proficiencyRef.innerHTML += `<p class="p-2 bg-accent">${proficiency.name}</p>`;
  });
};

export const setActiveMenu = (id: string) => {
  document.querySelector<HTMLLIElement>(".active")?.classList.remove("active");
  const menuItem = document.querySelector<HTMLLIElement>("#" + id);
  menuItem?.classList.add("active");
};

// @ts-ignore
window.setActiveMenu = setActiveMenu;

document.querySelector<HTMLDivElement>("#content")!.innerHTML = template;
setProficiencies(document.querySelector<HTMLDivElement>("#proficiencies")!);
