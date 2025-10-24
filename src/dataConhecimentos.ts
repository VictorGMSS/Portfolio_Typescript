import HTML5 from "./assets/Html5_logo.png";
import CSS from "./assets/css_logo.png";
import Typescript from "./assets/typescript_logo.png";
import Python from "./assets/python_logo.png";
import React from "./assets/react_logo.png";
import NodeJS from "./assets/nodeJS_logo.png";
import Django from "./assets/django_logo.png";
import JavaScript from "./assets/javascript_logo.png";
import Tailwind from "./assets/tailwind_logo.png";
import AWS from "./assets/AWS_logo.png";
import Numpy from "./assets/numpy_logo.png";
import Matplotlib from "./assets/matplotlib_logo.png";
import Excel from "./assets/excel_logo.png";
import VBA from "./assets/VBA_logo.png";
import Pandas from "./assets/pandas_logo.png";
import Docker from "./assets/Docker_logo.png";
import PostgreSQL from "./assets/postgresql_logo.png";
import MySQL from "./assets/MySQL_logo.png";

interface Work {
  id: number;
  category: string;
  img: string;
  title: string;
  link: string,
}

export const works: Work[] = [

  {
    id: 0,
    category: "FullStack",
    img: Typescript,
    title: "Typescript",
    link: `https://www.alura.com.br/artigos/o-que-e-typescript?srsltid=AfmBOoo40L2z1lU0W3pWQzNjS6lscmrln-HHAS9oDXYAtCY-cl6bfhbz`
  },

  {
    id: 1,
    category: "FullStack",
    img: Python,
    title: "Python",
    link: `https://www.alura.com.br/artigos/python?srsltid=AfmBOorohkVKAR2O9HWc_0PcBlA2qpnneacqrlX9nAne5bjeMcv8bcG0`
  },

  {
    id: 2,
    category: "FullStack",
    img: Django,
    title: "Django",
    link: `https://www.alura.com.br/artigos/django-framework?srsltid=AfmBOopEmk59ZYb9urBIevvZtVMZOBl2gprhccF9IYD0GOUTO5-M7kaw`
  },

  {
    id: 3,
    category: "FullStack",
    img: JavaScript,
    title: "JavaScript",
    link: `https://www.alura.com.br/artigos/javascript?srsltid=AfmBOorz8i9Qyb7Du7QXYkCLZl4o9GbqxA0HDxsHno_q50ij30hCp07f`
  },

  {
    id: 4,
    category: "FullStack",
    img: React,
    title: "React",
    link: `https://www.alura.com.br/artigos/react-js?srsltid=AfmBOoqQYCTcDtpZA79uZmTkXVp_eXTqp_adpnfQu_JAcV1BPBfIf55s`
  },

  {
    id: 5,
    category: "FullStack",
    img: NodeJS,
    title: "NodeJS",
    link: `https://www.alura.com.br/artigos/node-js`
  },

  {
    id: 6,
    category: "FullStack",
    img: HTML5,
    title: "HTML5",
    link: `https://www.alura.com.br/artigos/html?srsltid=AfmBOooMFYWxMqeO6zcs_t52VimFDCkVHsfIBI8qZIqDm7-agaMDoFQ_`
  },

  {
    id: 7,
    category: "FullStack",
    img: CSS,
    title: "CSS",
    link: `https://www.alura.com.br/artigos/css?srsltid=AfmBOopbT3bLE8A3MW3e3Ef-c2qIFUcJ9el93ggZ0F5zFc9w8q7ohQd_`
  },

  {
    id: 8,
    category: "FullStack",
    img: Tailwind,
    title: "Tailwind",
    link: `https://www.alura.com.br/artigos/tailwind-framework-bootstrap-tailwind`
  },

  {
    id: 9,
    category: "FullStack",
    img: AWS,
    title: "AWS",
    link: `https://aws.amazon.com/pt/what-is-aws/`
  },

  {
    id: 16,
    category: "FullStack",
    img: Docker,
    title: "Docker",
    link: `https://www.hostinger.com.br/tutoriais/o-que-e-docker`
  },

  {
    id: 10,
    category: "Dados",
    img: Python,
    title: "Python",
    link: `https://www.alura.com.br/artigos/python?srsltid=AfmBOorohkVKAR2O9HWc_0PcBlA2qpnneacqrlX9nAne5bjeMcv8bcG0`
  },

  {
    id: 11,
    category: "Dados",
    img: Numpy,
    title: "Numpy",
    link: `https://www.alura.com.br/artigos/numpy-computacao-cientifica-com-python`
  },

  {
    id: 12,
    category: "Dados",
    img: Matplotlib,
    title: "Matplotlib",
    link: `https://www.alura.com.br/artigos/criando-graficos-no-python-com-a-matplotlib`
  },

  {
    id: 13,
    category: "Dados",
    img: Excel,
    title: "Excel",
    link: `https://www.alura.com.br/artigos/excel-para-financas?srsltid=AfmBOooSTF4YSOCshOKW_G1dbNZMEYV2-rLGCRrw80Zvutmsqh-DqLcN`
  },

  {
    id: 14,
    category: "Dados",
    img: VBA,
    title: "VBA",
    link: `https://www.techtudo.com.br/dicas-e-tutoriais/2022/12/o-que-e-vba-no-excel-e-como-usar-veja-exemplos-comandos-e-tutorial.ghtml`
  },

  {
    id: 15,
    category: "Dados",
    img: Pandas,
    title: "Pandas",
    link: `https://www.alura.com.br/artigos/relevancia-vba?srsltid=AfmBOoqj_FxBD5cE430_RFg6S0KsrkZryeWCBNZvHJZghF0SENy1w10d`
  },
  {
    id: 16,
    category: "Dados",
    img: PostgreSQL,
    title: "PostgreSQL",
    link: `https://www.alura.com.br/artigos/indices-no-postgresql?srsltid=AfmBOorMkqusiSqNmKAzULb0JlP1ib3TGuerP4B3nZy5VppzWwYREM-B`
  },
  {
    id: 16,
    category: "Dados",
    img: MySQL,
    title: "MySQL",
    link: `https://www.alura.com.br/artigos/my-sql-administrator`
  },
];
