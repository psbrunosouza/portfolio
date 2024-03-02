import i18next from "i18next";
import "./profile.css";
import template from "./profile.html?raw";

export const setProficiencies = (proficiencyRef: HTMLDivElement) => {
  [
    { name: "Javascript" },
    { name: "Typescript" },
    { name: "Golang" },
    { name: "Godot" },
    { name: "Angular" },
    { name: "Ionic" },
    { name: "React" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Tailwind" },
    { name: "Bootstrap" },
    { name: "Sass" },
    { name: "Figma" },
    { name: "Node JS" },
    { name: "Prisma" },
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "Express" },
    { name: "Git" },
    { name: "Cypress" },
    { name: "Jest" },
    { name: "Jira" },
  ].forEach((proficiency) => {
    proficiencyRef.innerHTML += `<p class="p-2 bg-accent">${proficiency.name}</p>`;
  });
};

export const setProject = (id: string) => {
  const profileContentRef =
    document.querySelector<HTMLDivElement>("#profile-content")!;

  const profileContents = [
    {
      key: "winner-promotion",
      content: `
      <div class="flex items-center justify-between lg:justify-start gap-4 mb-4">
        <h2 class=" font-bold">Winner Promotion</h2>
        <ul class="flex gap-2">
          <li>
            <a 
              class="inline-flex p-2 bg-highlight text-light items-center gap-2 font-bold" target="_blank" href="https://www.winnerpromotion.com/">
              <p>${i18next.t("buttons.seeWebsite")}</p>
            </a>
          </li>
        </ul>
      </div>
      
      <p>
        ${i18next.t("projects.winnerPromotion.description")}
      </p>
      

      <h3 class="font-bold mt-4">
        ${i18next.t("projects.functionalities")}
      </h3>
      <ul class="list-disc ml-6 ">
        ${i18next.t("projects.winnerPromotion.functionalities")}
      </ul>

      <h3 class="font-bold mt-4">
        ${i18next.t("projects.tecnologies")}
      </h3>
      <ul class="list-disc ml-6 ">
        ${i18next.t("projects.winnerPromotion.tecnologies")}
      </ul>
    `,
    },
    {
      key: "helio-news",
      content: `
      <div class="flex items-center justify-between lg:justify-start gap-4 mb-4">
        <h2 class="font-bold ">Hélio Notícias App</h2>
        <ul class="flex gap-2">
          <li>
            <a 
              class="inline-flex p-2 bg-danger text-light items-center gap-2 font-bold">
              <p>${i18next.t("buttons.discontinued")}</p>
            </a>
          </li>
        </ul>
      </div>
      
      <p>
        ${i18next.t("projects.helioNews.description")}
      </p>

       <h3 class="font-bold mt-4">
        ${i18next.t("projects.functionalities")}
      </h3>
      <ul class="list-disc ml-6 ">
        ${i18next.t("projects.helioNews.functionalities")}
      </ul>

      <h3 class="font-bold mt-4">
        ${i18next.t("projects.tecnologies")}
      </h3>
      <ul class="list-disc ml-6 ">
        ${i18next.t("projects.helioNews.tecnologies")}
      </ul>
      `,
    },
    {
      key: "majoris-ui",
      content: `
      <div class="flex items-center justify-between lg:justify-start gap-4 mb-4">
        <h2 class="font-bold">Majoris UI</h2>
        <ul class="flex gap-2">
          <li>
            <a 
              class="inline-flex p-2 bg-highlight text-light items-center gap-2 font-bold" target="_blank" href="https://github.com/majoris-ui/majoris-ui">
              <p>Github</p>
            </a>
          </li>
          <li>
            <a 
              class="inline-flex p-2 bg-highlight text-light items-center gap-2 font-bold" target="_blank" href="https://www.npmjs.com/package/@majoris-org/majoris-ui">
              <p>NPM</p>
            </a>
          </li>
        </ul>
      </div>

      <p>
        ${i18next.t("projects.majorisUi.description")}
      </p>
      `,
    },
  ];

  setActiveMenu(id);
  profileContentRef.innerHTML =
    profileContents.find(
      (content) =>
        `${content.key}-mobile` === id || `${content.key}-desktop` === id
    )?.content || "";
};

export const setActiveMenu = (id: string) => {
  document.querySelector<HTMLLIElement>(".active")?.classList.remove("active");
  const menuItem = document.querySelector<HTMLLIElement>("#" + id);
  menuItem?.classList.add("active");
};

document.querySelector<HTMLDivElement>("#content")!.innerHTML = template;
setProficiencies(document.querySelector<HTMLDivElement>("#proficiencies")!);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector<HTMLDivElement>("#title-proficiencies")!.innerHTML =
    i18next.t("titles.proficiencies");

  document.querySelector<HTMLDivElement>("#title-projects-mobile")!.innerHTML =
    i18next.t("titles.projects");

  document.querySelector<HTMLDivElement>("#title-projects-desktop")!.innerHTML =
    i18next.t("titles.projects");

  document.querySelector<HTMLDivElement>("#helio-news-mobile")!.innerHTML =
    i18next.t("menu.helioNews");

  document.querySelector<HTMLDivElement>("#helio-news-desktop")!.innerHTML =
    i18next.t("menu.helioNews");
});

// @ts-ignore
window.setActiveMenu = setActiveMenu;
// @ts-ignore
window.setProject = setProject;
