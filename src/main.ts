import i18next from "i18next";
import "./main.css";
import template from "./main.html?raw";

export const setProjectDefault = () => {
  const profileContentRef =
    document.querySelector<HTMLDivElement>("#profile-content")!;

  const profileContent: string = `
    <h1 class="font-bold mb-4">${i18next.t("main.title")}</h1>
    <p>
      ${i18next.t("main.description")}
    </p>

    <h2 class="my-4">${i18next.t("main.experiences.title")}</h2>
    <h3>Ekaizen Digital</h3>
    <p>
      ${i18next.t("main.experiences.ekaizen.description")}
    </p>

    <h3 class="mt-4 ">Topzap</h3>
    <p>
      ${i18next.t("main.experiences.topzap.description")}
    </p>
  `;

  profileContentRef.innerHTML = profileContent;
};

export const setI18nLanguage = (language: string) => {
  i18next.changeLanguage(language);
};

document.querySelector<HTMLDivElement>("#app")!.innerHTML = template;
document.addEventListener("DOMContentLoaded", () => {
  setProjectDefault();
});

// @ts-ignore
window.setProjectDefault = setProjectDefault;
// @ts-ignore
window.setI18nLanguage = setI18nLanguage;
