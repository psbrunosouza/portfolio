import "./main.css";
import template from "./main.html?raw";

export const setProject = () => {
  const profileContentRef =
    document.querySelector<HTMLDivElement>("#profile-content")!;

  const profileContent: string = `
    <h2 class="font-bold mb-4">Hi, I’m Bruno</h2>
    <p>
      Sou um desenvolvedor de software, com habilidades em front-end,
      back-end, mobile e jogos. Já desenvolvi diversos sistemas, desde
      ferramentas de gerenciamento voltadas a indústria, quanto pequenos
      portais de produtos e aplicativos. Sou apaixonado por código limpo,
      padrões de projeto, UI/UX, responsividade e interfaces bonitas e bem
      elaboradas.
    </p>
  `;

  profileContentRef.innerHTML = profileContent;
};

// @ts-ignore
window.setProject = setProject;
document.querySelector<HTMLDivElement>("#app")!.innerHTML = template;
document.addEventListener("DOMContentLoaded", () => {
  setProject();
});
