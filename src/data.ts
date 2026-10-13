export const siteInfo = {
  name: "Nelson Matsinhe",
  fullName: "Nelson Alexandre Matsinhe",
  role: "Desenvolvedor Full-Stack",
  location: "Maputo, Moçambique",
  email: "nelson.a.matsinhe@gmail.com",
  phone: "+258 84 501 3839",
  contactIntro: "Aberto a oportunidades de trabalho e colaborações.",
  heroIntro: "Desenvolvo aplicações web e modernizo plataformas com Laravel e React. Também cuido da infraestrutura: domínios, alojamento e backups.",
  cv: "/portfolio/cv/Nelson_Matsinhe_CV.pdf",
  profile: [
    "Antes de alterar um produto, procuro perceber como ele funciona e quem o usa. Assim acrescento funcionalidades sem estragar o que já funciona e deixo o sistema fácil de manter.",
    "Sou estudante de Informática na Universidade Eduardo Mondlane (UEM), no 3.º ano, com conclusão prevista em 2027. Tenho mais de 3 anos de experiência em desenvolvimento web.",
    "Estou aberto a oportunidades de trabalho e colaborações.",
  ],
  social: {
    github: "https://github.com/NelsonMatsinhe",
    linkedin: "https://linkedin.com/in/nelson-matsinhe",
    whatsapp: "https://wa.me/258845013839",
  },
};

export const technologies = {
  daily: ["Laravel", "React", "PHP", "JavaScript", "TypeScript", "MySQL", "PostgreSQL", "WordPress/WooCommerce", "Git"],
  also: ["React Native", "Vue.js", "Java", "Python", "Bootstrap", "SharePoint", "Linux", "Docker"],
};

export const technologyGroups = [
  { label: "As que uso no dia a dia", items: technologies.daily },
  { label: "Também trabalho com", items: technologies.also },
];

export const featuredTechnologies = technologies.daily.slice(0, 4);

export interface Project {
  id: string;
  title: string;
  type: string;
  short: string;
  description: string;
  contribution?: string;
  tech: string[];
  features: string[];
  url?: string;
  image?: string;
  images?: string[];
  imageWidth?: number;
  imageHeight?: number;
  caseStudy?: {
    context?: string;
    challenge?: string;
    approach?: string;
    decisions?: string[];
    outcome?: string;
  };
}

// TODO: acrescentar resultados mensuráveis confirmados (ex.: tempo de carregamento ou número de produtos).
export const projects: Project[] = [
  {
    id: "informacao-publica-tempo", title: "Informação Pública Tempo", type: "Portal de informação",
    short: "Portal de informação pública da Revista Tempo.",
    description: "O portal organiza conteúdos de interesse público para consulta online.",
    contribution: "Participo no desenvolvimento e na evolução do portal.",
    tech: ["Laravel", "React"],
    features: ["Informação pública da Revista Tempo"],
    url: "https://infopublica.tempo.co.mz/",
    imageWidth: 1356, imageHeight: 603,
    image: "/portfolio/projects/informacao-publica-tempo/Screenshot%20From%202026-10-08%2013-03-18.webp",
    images: ["/portfolio/projects/informacao-publica-tempo/Screenshot%20From%202026-10-08%2013-03-18.webp", "/portfolio/projects/informacao-publica-tempo/Screenshot%20From%202026-10-08%2013-04-00.webp"],
  },
  {
    id: "lugarcerto", title: "LugarCerto.co.mz", type: "Marketplace de serviços",
    short: "Liga clientes a prestadores de serviços para pesquisa, comparação e contratação.",
    description: "A plataforma aproxima clientes e prestadores de serviços.",
    contribution: "Participei no desenvolvimento da plataforma.",
    tech: [],
    features: ["Pesquisa de prestadores", "Comparação de serviços", "Contacto e contratação de prestadores"],
    url: "https://lugarcerto.co.mz/",
  },
  {
    id: "klc-marketplace", title: "KLC Marketplace", type: "Marketplace",
    short: "Marketplace de comércio eletrónico.",
    description: "Marketplace de comércio eletrónico.",
    contribution: "Melhorei o layout e a usabilidade, corrigi bugs, implementei meta tags de SEO e fiz testes de usabilidade.",
    tech: [],
    features: ["Melhorias de layout e usabilidade", "Correção de bugs", "Meta tags de SEO", "Testes de usabilidade"],
    url: "https://klcmarket.shop/",
    imageWidth: 1356, imageHeight: 603,
    image: "/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-56-40.webp",
    images: ["/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-56-40.webp", "/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-57-00.webp", "/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-57-43.webp", "/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-58-00.webp"],
  },
  {
    id: "precos-baixos", title: "PrecosBaixos.co.mz", type: "Comércio eletrónico",
    short: "Loja online com catálogo de produtos e gestão de encomendas.",
    description: "Plataforma de comércio eletrónico baseada em WordPress e WooCommerce.",
    contribution: "Participei na integração do catálogo de produtos, na gestão de encomendas e na manutenção.",
    tech: ["WordPress", "WooCommerce"],
    features: ["Catálogo de produtos", "Gestão de encomendas", "Funcionalidades de comércio eletrónico"],
    url: "https://precosbaixos.co.mz/",
    imageWidth: 1284, imageHeight: 523,
    image: "/portfolio/projects/precos-baixos/PB.webp", images: ["/portfolio/projects/precos-baixos/PB.webp"],
  },
  {
    id: "versalmovie", title: "VersalMovie", type: "Aplicação móvel",
    short: "Aplicação para pesquisar filmes e séries, consultar trailers e guardar favoritos.",
    description: "O VersalMovie consulta o catálogo do TMDB e apresenta informação sobre filmes e séries.",
    contribution: "Criei o projeto em React Native e integrei a API do TMDB.",
    tech: ["React Native", "TMDB API"],
    features: ["Pesquisa de filmes e séries", "Detalhes e elenco", "Consulta de trailers", "Gestão de favoritos"],
    imageWidth: 1356, imageHeight: 603,
    image: "/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-49-11.webp",
    images: ["/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-49-11.webp", "/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-49-29.webp", "/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-49-50.webp", "/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-50-07.webp"],
  },
  {
    id: "sistema-estaleiro", title: "Sistema de Gestão de Estaleiro", type: "Sistema de gestão",
    short: "Sistema Java para gerir produção, stock, vendas, clientes e relatórios de estaleiros.",
    description: "O sistema reúne áreas de gestão de estaleiros de materiais de construção.",
    tech: ["Java"],
    features: ["Produção de blocos e pavês", "Stock e matérias-primas", "Vendas e clientes", "Relatórios"],
  },
];

export const experience = [
  {
    company: "Revista Tempo, Lda", role: "Desenvolvedor Web", period: "Dez. 2025 — presente",
    points: [
      "Colaborei na migração do portal de WordPress para Laravel e React.",
      "Desenvolvi scripts de automação e corrigi bugs.",
      "Trabalhei na otimização do desempenho do portal.",
      "Colaborei com equipas na definição de requisitos.",
    ],
  },
  {
    company: "KLC Tecnologia e Inovação", role: "Colaborador de Desenvolvimento", period: "Jun. — dez. 2025",
    points: [
      "Melhorei o layout e a usabilidade do KLC Marketplace e corrigi bugs.",
      "Implementei meta tags de SEO e trabalhei na otimização do desempenho e na acessibilidade.",
      "Criei protótipos para clientes e realizei testes de usabilidade.",
    ],
  },
  {
    company: "Startup-Tecal Consultoria", role: "Desenvolvedor Web e Gestor de Website", period: "2024 — 2025",
    points: [
      "Desenvolvi o website institucional.",
      "Geri o domínio e o alojamento do website.",
      "Tratei da segurança, dos backups e da documentação técnica.",
    ],
  },
  {
    company: "GrowIT", role: "Gestor de Conteúdo e Desenvolvimento Web", period: "2022 — 2024",
    points: [
      "Desenvolvi sites institucionais e lojas com WooCommerce.",
      "Trabalhei em intranets Microsoft SharePoint.",
      "Levantei requisitos e prestei suporte técnico.",
    ],
  },
];
