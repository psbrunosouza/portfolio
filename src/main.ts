import "./main.css";
import template from "./main.html?raw";

export const setProjectDefault = () => {
  const profileContentRef =
    document.querySelector<HTMLDivElement>("#profile-content")!;

  const profileContent: string = `
    <h2 class="font-bold mb-4">Seja bem vindo,</h2>
    <p>
      me chamo Bruno sou um desenvolvedor de software, com habilidades em front-end,
      back-end, mobile e jogos. Já desenvolvi diversos sistemas, desde
      ferramentas de gerenciamento voltadas a indústria, quanto pequenos
      portais de produtos e aplicativos. Sou apaixonado por código limpo,
      padrões de projeto, UI/UX, responsividade e interfaces bonitas e bem
      elaboradas.
    </p>

    <h3 class="my-4">Experiências</h3>
    <h4>Ekaizen Digital</h4>
    <p>
      Atualmente atuo na <strong>Ekaizen Digital</strong> e estou trabalhando como desenvolvedor frontend.
      Minha principal responsabilidade reside na criação de interfaces Angular voltadas a ferramentas industriais e de gerênciamento como:
      Gestão de pessoas, gestão de recursos, gestão de produtos, etc. 
    </p>

    <h4 class="mt-4">Topzap</h4>
    <p>
      Atuei como desenvolvedor Fullstack, trabalhando na ferramenta principal da empresa, <strong>Topzap</strong>.
      Uma ferramenta de gestão de condominios que permitia acompanhar as ocorrências enviadas pelos residêntes através da API do whatsapp.
    </p>
  `;

  profileContentRef.innerHTML = profileContent;
};

// @ts-ignore
window.setProjectDefault = setProjectDefault;
document.querySelector<HTMLDivElement>("#app")!.innerHTML = template;
document.addEventListener("DOMContentLoaded", () => {
  setProjectDefault();
});
