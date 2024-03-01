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
      <div class="flex items-center gap-4 mb-4">
        <h2 class="font-bold">Winner Promotion</h2>
        <ul class="flex gap-2">
          <li>
            <a 
              class="inline-flex p-2 bg-highlight text-light items-center gap-2 font-bold" target="_blank" href="https://www.winnerpromotion.com/">
              <p>Ver Site</p>
            </a>
          </li>
        </ul>
      </div>
      
      <p>
        A Winner Promotion é uma aplicação online para gestão de brindes corporativos.
      </p>
      

      <h4 class="font-bold mt-4">
        Funcionalidades
      </h4>
      <ul class="list-disc">
        <li class="ml-8">Catálogo de brindes: navegue e encontre o brinde ideal para sua campanha.</li>
        <li class="ml-8">Gerênciamento de brindes: Gerêncie os brindes, atualize o estoque e personalize o brinde.</li>
        <li class="ml-8">Gerênciamento de campanhas: Crie, edite e gerêncie campanhas.</li>
      </ul>

      <h4 class="font-bold mt-4">
        Tecnologias Empreendidas
      </h4>
      <ul class="list-disc">
        <li class="ml-8">React: Criação da interface front-end</li>
        <li class="ml-8">Node JS: Construção da API</li>
        <li class="ml-8">PostgreSQL: Banco de dados relacional da ferramenta</li>
        <li class="ml-8">Prisma: ORM para gerenciamento do banco de dados</li>
        <li class="ml-8">Express: Biblioteca para construção da API</li>
        <li class="ml-8">AWS: Serviços AWS para o gerênciamento de imagens</li>
        <li class="ml-8">Heroku: Serviços Heroku para publicação da aplicação</li>
      </ul>
    `,
    },
    {
      key: "helio-noticias",
      content: `
      <div class="flex items-center gap-4 mb-4">
        <h2 class="font-bold ">Hélio Notícias App</h2>
        <ul class="flex gap-2">
          <li>
            <a 
              class="inline-flex p-2 bg-danger text-light items-center gap-2 font-bold">
              <p>Descontinuado</p>
            </a>
          </li>
        </ul>
      </div>
      
      <p>
        O Hélio Notícias App é um aplicativo que permite acompanhar o trabalho empreendido pelo veredor Hélio Rodrigues.
        Através deste aplicativo é possível acompanhar o progresso e o andamento do trabalho empreendido pelo veredor, através
        das demandas e da agenda de trabalho. Até o presente momento a aplicação foi descontinuada.
      </p>

       <h4 class="font-bold mt-4">
        Funcionalidades
      </h4>
      <ul class="list-disc">
        <li class="ml-8">Acompanhamento de demandas: acompanhe as demandas em aberto e finalizadas do vereador.</li>
        <li class="ml-8">Agenda de trabalho: visualize a agenda de compromissos e eventos do vereador.</li>
        <li class="ml-8">Notícias e comunicados: receba notícias e comunicados sobre o trabalho do vereador.</li>
      </ul>

      <h4 class="font-bold mt-4">
        Tecnologias Empreendidas
      </h4>
      <ul class="list-disc">
        <li class="ml-8">Ionic: Criação da interface mobile</li>
        <li class="ml-8">Firebase: Banco de dados não relacional e gestão de imagens</li>
        <li class="ml-8">Tailwind: Biblioteca CSS para estilização</li>
        <li class="ml-8">Google OAuth2: Implementação do login via google e outras redes sociais</li>
      </ul>
      `,
    },
    {
      key: "majoris-ui",
      content: `
      <div class="flex items-center gap-4 mb-4">
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
        Uma bibliteca de componentes construídos com Angular, para utilizar principalmente em projetos front-end angular. 
        O Majoris UI foi desenvolvido para ser utilizado em aplicativos mobile e desktop. Ainda em em desenvolvimento, mas se desejar
        acompanhar e fazer contribuições, acesse o repositório no GitHub. 
        A biblioteca possuirá componentes como: Inputs, Buttons, Cards, Toasts, Alerts, etc. Porém componentes mais complexos, como: 
        Tables, Charts, etc.
      </p>
      
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
