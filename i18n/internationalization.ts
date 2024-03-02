import i18next from "i18next";

i18next.init({
  lng: "en",
  debug: true,
  resources: {
    en: {
      translation: {
        main: {
          title: "Welcome,",
          titles: {
            experiences: "Experiência",
          },
          description: `My name is Bruno, and I am a software developer with expertise in front-end, 
          back-end, mobile, and game development. I have a track record of delivering diverse systems, 
          ranging from industry-focused management tools to small product portals and applications. 
          I am passionate about clean code, design patterns, UI/UX, responsiveness, and creating beautiful,
           well-crafted interfaces.
          `,
          experiences: {
            title: "Experiences",
            ekaizen: {
              name: "Ekaizen Digital",
              description: ` Currently, I work at <strong>Ekaizen Digital</strong> and serve as a frontend developer. 
              My main responsibility lies in creating Angular interfaces for industrial and management tools such as personnel management, 
              resource management, product management, etc. `,
            },
            topzap: {
              name: "Topzap",
              description: `I worked as a Fullstack developer, focusing on the company's main tool, <strong>Topzap</strong>. 
              It's a condominium management tool that enables tracking incidents reported by residents through the WhatsApp API.`,
            },
          },
        },
        buttons: {
          seeWebsite: "See Website",
          discontinued: "Discontinued",
        },
        projects: {
          functionalities: "Functionalities",
          tecnologies: "Tecnologies",
          winnerPromotion: {
            name: "Winner Promotion",
            description:
              "A Winner Promotion is an online promotion application for corporate promotions.",
            functionalities: `
              <li class="ml-8">Catalogue of promotions: browse and find the perfect promotion for your campaign.</li>
              <li class="ml-8">Promotion management: Manage promotions, update the stock and personalize the promotion.</li>
              <li class="ml-8">Campaign management: Create, edit and manage campaigns.</li>
            `,
            tecnologies: `
              <li class="ml-8">React: Front-end interface development</li>
              <li class="ml-8">Node JS: API construction</li>
              <li class="ml-8">PostgreSQL: Relational database for the tool</li>
              <li class="ml-8">Prisma: ORM for database management</li>
              <li class="ml-8">Express: Library for API construction</li>
              <li class="ml-8">AWS: AWS services for image management</li>
              <li class="ml-8">Heroku: Heroku services for application deployment</li>
            `,
          },
          helioNews: {
            name: "Hélio Rodrigues Notícias",
            description: `
              The Hélio Notícias App is an application that allows you to follow the work undertaken by Councilor Hélio Rodrigues. 
              Through this application, it was possible to track the progress and status of the work undertaken by the councilor, 
              including demands and work schedule. However, as of the present moment, the application has been discontinued.
            `,
            functionalities: `
              <li class="ml-8">Demand tracking: Track open and completed demands of the councilor.</li>
              <li class="ml-8">Work schedule: View the schedule of appointments and events of the councilor.</li>
              <li class="ml-8">News and announcements: Receive news and announcements about the work of the councilor.</li>
            `,
            tecnologies: `
              <li class="ml-8">Ionic: Mobile interface creation</li>
              <li class="ml-8">Firebase: Non-relational database and image management</li>
              <li class="ml-8">Tailwind: CSS library for styling</li>
              <li class="ml-8">Google OAuth2: Implementation of login via Google and other social networks</li>
            `,
          },
          majorisUi: {
            name: "Majoris UI",
            description: `
              A library of components built with Angular, designed primarily for use in Angular frontend projects. 
              Majoris UI was developed to be used in both mobile and desktop applications. It is still under development, 
              but if you wish to follow and make contributions, please visit the repository on GitHub. The library will include components such as Inputs, 
              Buttons, Cards, Toasts, Alerts, etc. Additionally, there will be more complex components like Tables, Charts, etc.
            `,
          },
        },
        titles: {
          projects: "Projects",
          proficiencies: "Proficiencies",
        },
        menu: {
          helioNews: "Hélio Rodrigues News",
        },
      },
    },
    pt: {
      translation: {
        main: {
          title: "Seja bem vindo,",
          titles: {
            experiences: "Experiências",
          },
          description: `Me chamo Bruno sou um desenvolvedor de software, com habilidades em front-end,
      back-end, mobile e jogos. Já desenvolvi diversos sistemas, desde
      ferramentas de gerenciamento voltadas a indústria, quanto pequenos
      portais de produtos e aplicativos. Sou apaixonado por código limpo,
      padrões de projeto, UI/UX, responsividade e interfaces bonitas e bem
      elaboradas.`,
          experiences: {
            title: "Experiência",
            ekaizen: {
              name: "Ekaizen Digital",
              description: ` Atualmente atuo na <strong>Ekaizen Digital</strong> e estou trabalhando como desenvolvedor frontend.
      Minha principal responsabilidade reside na criação de interfaces Angular voltadas a ferramentas industriais e de gerênciamento como:
      Gestão de pessoas, gestão de recursos, gestão de produtos, etc. `,
            },
            topzap: {
              name: "Topzap",
              description: `Atuei como desenvolvedor Fullstack, trabalhando na ferramenta principal da empresa, <strong>Topzap</strong>.
      Uma ferramenta de gestão de condominios que permitia acompanhar as ocorrências enviadas pelos residêntes através da API do whatsapp.`,
            },
          },
        },
        buttons: {
          seeWebsite: "Ver Site",
          discontinued: "Descontinuado",
        },
        projects: {
          functionalities: "Funcionalidades",
          tecnologies: "Tecnologias",
          winnerPromotion: {
            name: "Winner Promotion",
            description:
              "A Winner Promotion é uma aplicação online para gestão de brindes corporativos.",
            functionalities: `
              <li class="ml-8">Catálogo de brindes: navegue e encontre o brinde ideal para sua campanha.</li>
              <li class="ml-8">Gerênciamento de brindes: Gerêncie os brindes, atualize o estoque e personalize o brinde.</li>
              <li class="ml-8">Gerênciamento de campanhas: Crie, edite e gerêncie campanhas.</li>
            `,
            tecnologies: `
              <li class="ml-8">React: Criação da interface front-end</li>
              <li class="ml-8">Node JS: Construção da API</li>
              <li class="ml-8">PostgreSQL: Banco de dados relacional da ferramenta</li>
              <li class="ml-8">Prisma: ORM para gerenciamento do banco de dados</li>
              <li class="ml-8">Express: Biblioteca para construção da API</li>
              <li class="ml-8">AWS: Serviços AWS para o gerênciamento de imagens</li>
              <li class="ml-8">Heroku: Serviços Heroku para publicação da aplicação</li>  
            `,
          },
          helioNews: {
            name: "Hélio Rodrigues Notícias",
            description: `
              O Hélio Notícias App é um aplicativo que permite acompanhar o trabalho empreendido pelo veredor Hélio Rodrigues.
        Através deste aplicativo é possível acompanhar o progresso e o andamento do trabalho empreendido pelo veredor, através
        das demandas e da agenda de trabalho. Até o presente momento a aplicação foi descontinuada.
            `,
            functionalities: `
              <li class="ml-8">Acompanhamento de demandas: acompanhe as demandas em aberto e finalizadas do vereador.</li>
              <li class="ml-8">Agenda de trabalho: visualize a agenda de compromissos e eventos do vereador.</li>
              <li class="ml-8">Notícias e comunicados: receba notícias e comunicados sobre o trabalho do vereador.</li>
            `,
            tecnologies: `
              <li class="ml-8">Ionic: Criação da interface mobile</li>
              <li class="ml-8">Firebase: Banco de dados não relacional e gestão de imagens</li>
              <li class="ml-8">Tailwind: Biblioteca CSS para estilização</li>
              <li class="ml-8">Google OAuth2: Implementação do login via google e outras redes sociais</li>
            `,
          },
          majorisUi: {
            name: "Majoris UI",
            description: `
              Uma bibliteca de componentes construídos com Angular, para utilizar principalmente em projetos front-end angular. 
              O Majoris UI foi desenvolvido para ser utilizado em aplicativos mobile e desktop. Ainda em em desenvolvimento, mas se desejar
              acompanhar e fazer contribuições, acesse o repositório no GitHub. 
              A biblioteca possuirá componentes como: Inputs, Buttons, Cards, Toasts, Alerts, etc. Porém componentes mais complexos, como: 
              Tables, Charts, etc.
            `,
          },
        },
        titles: {
          projects: "Projetos",
          proficiencies: "Proficiências",
        },
        menu: {
          helioNews: "Helio Rodrigues Notícias",
        },
      },
    },
  },
});
