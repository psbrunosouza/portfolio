import i18next from "i18next";

i18next.init({
  lng: "pt",
  debug: true,
  resources: {
    en: {
      translation: {
        main: {
          title: "Welcome,",
          description: `My name is Bruno, and I am a software developer with expertise in front-end, 
          back-end, mobile, and game development. I have a track record of delivering diverse systems, 
          ranging from industry-focused management tools to small product portals and applications. 
          I am passionate about clean code, design patterns, UI/UX, responsiveness, and creating beautiful,
           well-crafted interfaces.
          `,
          experiences: {
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
          seeWebsite: "See Website",
        },
        projects: {
          winnerPromotion: {
            name: "Winner Promotion",
            description:
              "A Winner Promotion is an online promotion application for corporate promotions.",
          },
        },
      },
    },
    pt: {
      translation: {
        main: {
          title: "Seja bem vindo,",
          description: `Me chamo Bruno sou um desenvolvedor de software, com habilidades em front-end,
      back-end, mobile e jogos. Já desenvolvi diversos sistemas, desde
      ferramentas de gerenciamento voltadas a indústria, quanto pequenos
      portais de produtos e aplicativos. Sou apaixonado por código limpo,
      padrões de projeto, UI/UX, responsividade e interfaces bonitas e bem
      elaboradas.`,
          experiences: {
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
        },
        projects: {
          winnerPromotion: {
            name: "Winner Promotion",
            description:
              "A Winner Promotion é uma aplicação online para gestão de brindes corporativos.",
          },
        },
      },
    },
  },
});
