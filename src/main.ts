import i18next from "i18next";
import "./main.css";
import template from "./main.html?raw";

export const setProjectDefault = () => {
  const profileContentRef =
    document.querySelector<HTMLDivElement>("#profile-content")!;

  const profileContent: string = `
    <h2 class="font-bold mb-4">${i18next.t("main.title")}</h2>
    <p>
      ${i18next.t("main.description")}
    </p>

    <h3 class="my-4">${i18next.t("main.experiences.title")}</h3>
    <h4>Ekaizen Digital</h4>
    <p>
      ${i18next.t("main.experiences.ekaizen.description")}
    </p>

    <h4 class="mt-4">Topzap</h4>
    <p>
      ${i18next.t("main.experiences.topzap.description")}
    </p>
  `;

  profileContentRef.innerHTML = profileContent;
};

document.querySelector<HTMLDivElement>("#app")!.innerHTML = template;
document.addEventListener("DOMContentLoaded", () => {
  setProjectDefault();
});

// @ts-ignore
window.setProjectDefault = setProjectDefault;
