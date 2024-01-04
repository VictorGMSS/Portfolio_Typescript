import Unisantos from "./assets/Unisantos_logo.jpg";
import DIO from "./assets/DIO_logo.png";
import Alura from "./assets/Alura_logo.png";

interface Work {
  id: number;
  category: string;
  img: string;
  title: string;
  description: string;
  certify: string,
  tools: string,
  link: string,
  link2: string,
}

export const works: Work[] = [
  {
    id: 0,
    category: "Unisantos",
    img: Unisantos,
    title: "Unisantos",
    description: `

      Nesta universidade me formei em Ciência da Computação, adquiri conhecimentos abrangentes e habilidades práticas em 
      diversas áreas relacionadas à tecnologia da informação. Minha formação engloba programação, algoritmos, 
      estruturas de dados, desenvolvimento de software, redes, web, sistemas operacionais e banco de dados.

      Nesta universidade me formei em Ciências da Computação, além de uma boa base de matemática e cálculos, 
      fui capacitado com conteúdo de diversas áreas da tecnologia como: Lógica de programação, estrutura de 
      dados, probabilidade, programação, gerenciamento de projetos (PO/PM) e sistemas operacionais.
    `,

    certify: `
      Ver certificado
    `,

    tools: `
      PostgreSQL, JavaScript, Python, Typescript, NodeJS, Django framework,  
      ReactJS, HTML5, Bootstrap, CSS3 e Sharepoint.
    `, 

    link: `https://drive.google.com/file/d/17qVA5fPxLDNpN84V7n9IA1XtG8eb9_xQ/view`,

    link2: `https://www.unisantos.br/`
  },

  {
    id: 1,
    category: "DIO",
    img: DIO,
    title: "Digital Innovation One",
    description: `
      A DIO é uma plataforma gratuita onde qualquer pessoa pode participar de seus bootcamps. Nela tive a 
      oportunidade de concluir diversos módulos, que por sua vez me capacitaram desde o básico até o 
      avançado de algumas linguagens de programação, além disso pude observar com quais ferramentas 
      eu mais me indentificava. Dentre as coisas aprendidas aqui estão: conceitos e melhores 
      práticas com banco de dados PostgreSQL, introdução a programação com Python, Lógica 
      de programação essencial, fundamentos de ETL com Python, análise de dados com 
      Python e Pandas.
    `,

    certify: `
      Na LigaGG estou atuando nas seguintes responsabilidades:
    `,

    tools: `
      processos de ETL com Python e Pandas, realizando a manutenção das automatizações, trabalhando com a Riot API para extrair dados, 
      automatizações de tabelas dos campeonatos feitos pela liga, realizando cálculos para ranquear os jogadores e equipes do 
      Automatização dos sorteios que abrangem todos os confrontos do campeonato.
    `,

    link: `https://drive.google.com/drive/folders/1rSCY8zVyHe79m1fQ5kNa0axyShaBfRtb`,

    link2: `https://www.dio.me`
  },

  {
    id: 2,
    category: "Alura",
    img: Alura,
    title: "Alura",
    description: `
    Nesta plataforma me formei em diversos cursos, mas prossigo estudando nela atualmente. Este é um otimo lugar 
    para quem pretende aprender sobre áreas relacionadas a tecnologia e se capacitar, dentre as ferramentas que 
    pude aprender aqui estão: Html5, CSS3, Python, Django, Java e JavaScript, além de que, estou atualmente 
    estudando TailwindCSS, typescript, NodeJS e ReactJS.
    `,

    certify: `
      Na Kampjo estou atuei nas seguintes responsabilidades:
    `,

    tools: `
      desenvolvendo o back-end, utilizando serviços da AWS, auxiliando em controle de API's, 
      armazenando dados no PostgresSQL, utilizando framework Django e Django Rest Framework, 
      desenvolvimento com a linguagem de programação Python.
    `,

    link: `https://cursos.alura.com.br/user/verxsoficial/fullCertificate/064f0f0dbb1c7ea639cbec10f4849d5f`,

    link2: `https://www.alura.com.br`
  },

];
