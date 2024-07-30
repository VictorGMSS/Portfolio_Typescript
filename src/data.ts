import Ford from "./assets/Ford_logo.png";
import LigaGG from "./assets/Logo_ligagg.png";
import Kampjo from "./assets/Kampjo_logo.png";
import Sofitel from "./assets/sofitel_logo.png";
import Itgoal from "./assets/itgoal_logo.png";
import SysManager from "./assets/Sys-Manager_logo.png";
interface Work {
  id: number;
  category: string;
  img: string;
  title: string;
  description: string;
  inWork: string,
  tools: string,
  link: string,
  data: string,
}

export const works: Work[] = [
  {
    id: 0,
    category: "Ford",
    img: Ford,
    title: "Ford",
    description: `
      Como bolsista na Ford, participei de um projeto para criar uma plataforma de cálculos de junta. 
      Utilizei inicialmente Python e Django, mas devido a problemas internos no escopo do projeto, migramos para Typescript no back-end e ReactJS, 
      HTML5 e Bootstrap no front-end. Transferimos a aplicação para o Sharepoint, utilizando PNP/SP e SPFX. Concluímos o projeto com sucesso, 
      tornando a aplicação funcional e disponível para todos os funcionários da Ford na área correspondente. 

      Utilizei Typescript e NodeJS para realização dos cálculos, abrangendo desde manipulações de matrizes até características únicas das juntas. 
      Transformei esses cálculos em uma plataforma intuitiva com ReactJS, HTML, CSS3, Bootstrap e armazenei os dados das juntas, 
      usuários e materiais da Ford por meio do SharePoint.
    `,

    inWork: `
      Na Ford estou atuei com as seguintes ferramentas:
    `,

    tools: `
      PostgreSQL, JavaScript, Python, Typescript, NodeJS, Django framework,  
      ReactJS, HTML5, Bootstrap, CSS3 e Sharepoint.
    `, 

    link: `https://www.linkedin.com/company/ford-brasil/`,

    data: `11/2021 - 12/2023`
  },

  {
    id: 1,
    category: "LigaGG",
    img: LigaGG,
    title: "LigaGG",
    description: `
      Durante meu período de formação a Liga GG foi meu ultimo estágio, agora após estar formado continuo atuando de forma voluntaria, 
      trabalhando de forma remota consegui aprender muito, construindo automatizações que juntam: Python(Colab) para automatização de 
      tarefas, manipulação de planilhas .xlsx para salvar os dados na nuvem, RIOT API, pandas e as mais diversas bibliotecas Python.
    `,

    inWork: `
      Na LigaGG estou atuando nas seguintes responsabilidades:
    `,

    tools: `
      processos de ETL com Python e Pandas, realizando a manutenção das automatizações, trabalhando com a Riot API para extrair dados, 
      automatizações de tabelas dos campeonatos feitos pela liga, realizando cálculos para ranquear os jogadores e equipes do 
      Automatização dos sorteios que abrangem todos os confrontos do campeonato.
    `,

    link: `https://www.linkedin.com/company/liga-gg/mycompany/`,

    data: `09/2021 - atualmente`
  },

  {
    id: 2,
    category: "Kampjo",
    img: Kampjo,
    title: "Kampjo",
    description: `
      A Kampjo foi minha segunda atuação em organizações de esports, lá eu, principalemente 
      forneço apoio a construção a plataforma web que tem o intuito de agregar vagas na 
      área de esports e facilitar a marcação de scrims. Aqui tenho meu primeiro contato 
      com construção de plataformas web, utilizando Python com Django para o Back-end 
      e PostrgresSQL para o banco de dados.
    `,

    inWork: `
      Na Kampjo estou atuei nas seguintes responsabilidades:
    `,

    tools: `
      desenvolvendo o back-end, utilizando serviços da AWS, auxiliando em controle de API's, 
      armazenando dados no PostgresSQL, utilizando framework Django e Django Rest Framework, 
      desenvolvimento com a linguagem de programação Python.
    `,

    link: `https://x.com/kampjogg?s=20`,

    data: `10/2021 - 12/2022`
  },

  {
    id: 3,
    category: "Sofitel",
    img: Sofitel,
    title: "Sofitel Jequitimar",
    description: `
      Nesta oportunidade de estágio trabalhei principalmente com manutenções internas, atendendo hospedes e funcionários que 
      tivessem algum chamado relacionado a tecnologia (chamados esses que iam desde manutenção de telefones digitais, 
      até configurações de softwares da empresa). Este estágio foi muito importante, pois, por ser minha primeira 
      experiência profissional me trouxe grandes aprendizados, não só na área mas também na boa convivência no 
      ambiente de trabalho, me habilitando para empregos futuros.
    `,

    inWork: `
      No Sofitel atuei nas seguintes responsabilidades:
    `,

    tools: `
      Manutenções internas de hardware e software, Atendendo chamados de hóspedes, Noções básicas de redes internas, 
      Formatação de computadores e Tabelas e formulas no Excel.
    `,

    link: `https://www.linkedin.com/company/sofitel/`,

    data: `01/2020 - 03/2020`
  },

  {
    id: 4,
    category: "Itgoal",
    img: Itgoal,
    title: "Itgoal",
    description: `
      Durante meu tempo na ITGoal atuei de forma remota, pela primeira vez por conta da pandemia. 
      Esta também foi minha primeira experiência com Startups (Tanto atuando na ITgoal quanto 
      com seus clientes), utilizei principalmente os softwares da Zoho e a linguagem de 
      programação Deluge para atender e solucionar chamados à mim confiados.
    `,

    inWork: `
      Na ItGoal atuei nas seguintes responsabilidades:
    `,

    tools: `
      desenvolvimento com a linguagem Deluge, solução de chamados do software Zoho, participações nas reuniões com clientes, 
      manipulando dados Excel, experiência com Startups
    `,

    link: `https://www.linkedin.com/company/itgoal/`,

    data: `04/2021 - 05/2021`
  },

  {
    id: 5,
    category: "SysManager",
    img: SysManager,
    title: "Sys Manager",
    description: `
      Na Sys Manager, atuei como desenvolvedor fullstack pleno, alocado em um projeto para uma empresa parceira. Minhas principais responsabilidades incluíram: 
      Desenvolvimento de back-end utilizando Node.js, implementação de funcionalidades com TypeScript, Node.js e GO, desenvolvimento de interfaces front-end 
      utilizando ReactJS e JavaScript, utilização de ferramentas como Docker, GIT e GitLab para gerenciar e versionar o código, customização do código-fonte 
      do Grafana para atender às necessidades específicas do projeto, desenvolvimento de software focado em aplicações para internet, sistemas embarcados e 
      arquiteturas cliente-servidor.
    `,

    inWork: `
      Na Sys Manager atuei nas seguintes responsabilidades:
    `,

    tools: `
      Conteinerização com Docker, versionamentoi com GIT e GitLab, front-end com ReactJS e JavaScript, back-end com TypeScript, Node.js e GO.
    `,

    link: `https://www.linkedin.com/company/sysmanager/`,

    data: `02/2024 - 07/2024`
  },
];
