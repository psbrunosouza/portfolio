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
    { name: "Docker" },
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
      <h2 class="font-bold mb-4">Winner Promotion</h2>
      <p>
        A Winner Promotion é uma plataforma online que facilita a compra e gestão de brindes para empresas.
        Nessa ferramente fizemos o desenvolvimento de uma interface de gestão de brindes, 
        utilizamos o React como base para o frot-end e Node JS para a construção do back-end 
        além de outras tecnologias como: Prisma, PostgreSQL, Express.
      </p>
      <ul class="flex gap-2 mt-4">
        <li>
          <a 
            class="inline-flex p-2 bg-highlight text-light items-center gap-2 font-bold" target="_blank" href="https://www.winnerpromotion.com/">
            <p>Site</p>
          </a>
        </li>
      </ul>
    `,
    },
    {
      key: "helio-noticias",
      content: `
      <h2 class="font-bold mb-4">Hélio Rodrigues Notícias</h2>
      <p></p>
      `,
    },
  ];

  setActiveMenu(id);
  profileContentRef.innerHTML =
    profileContents.find((content) => content.key === id)?.content || "";
};

export const setActiveMenu = (id: string) => {
  document.querySelector<HTMLLIElement>(".active")?.classList.remove("active");
  const menuItem = document.querySelector<HTMLLIElement>("#" + id);
  menuItem?.classList.add("active");
};

document.querySelector<HTMLDivElement>("#content")!.innerHTML = template;
setProficiencies(document.querySelector<HTMLDivElement>("#proficiencies")!);

// @ts-ignore
window.setActiveMenu = setActiveMenu;
// @ts-ignore
window.setProject = setProject;
