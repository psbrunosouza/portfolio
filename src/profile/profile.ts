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
          <a class="inline-flex text-highlight items-center gap-2 font-bold" target="_blank" href="https://www.winnerpromotion.com/">
           <p><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-www" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#276fbf" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
            <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
            <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
            <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
            <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
            <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
            <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
            <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
            <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
          </svg></p>
          <p>Site</p></a>
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
