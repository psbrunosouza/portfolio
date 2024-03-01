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
      <h2 class="font-bold mb-4">Hélio Notícias App</h2>
      <p>
        O Hélio Notícias App é um aplicativo que permite acompanhar o trabalho empreendido pelo veredor Hélio Rodrigues.
        Através deste aplicativo é possível acompanhar o progresso e o andamento do trabalho empreendido pelo veredor, através
        das demandas e da agenda de trabalho. Até o presente momento a aplicação foi descontinuada.
        
      </p>
      `,
    },
    {
      key: "majoris-ui",
      content: `
      <h2 class="font-bold mb-4">Majoris UI</h2>
      <p>
        Uma bibliteca de componentes construídos com Angular, para utilizar principalmente em projetos front-end angular. 
        O Majoris UI foi desenvolvido para ser utilizado em aplicativos mobile e desktop. Ainda em em desenvolvimento, mas se desejar
        acompanhar e fazer contribuições, acesse o repositório no GitHub. 
        A biblioteca possuirá componentes como: Inputs, Buttons, Cards, Toasts, Alerts, etc. Porém componentes mais complexos, como: 
        Tables, Charts, etc.
      </p>
      <ul class="flex gap-2 mt-4">
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
