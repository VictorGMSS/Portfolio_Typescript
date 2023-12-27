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
    link: `https://www.linkedin.com/company/ford-brasil/`
  },

  {
    id: 1,
    category: "FullStack",
    img: Python,
    title: "Python",
    link: `https://www.linkedin.com/company/ford-brasil/`
  },

  {
    id: 2,
    category: "FullStack",
    img: Django,
    title: "Django",
    link: `https://www.linkedin.com/company/ford-brasil/`
  },

  {
    id: 3,
    category: "FullStack",
    img: JavaScript,
    title: "JavaScript",
    link: `https://www.linkedin.com/company/ford-brasil/`
  },

  {
    id: 4,
    category: "FullStack",
    img: React,
    title: "React",
    link: `https://www.linkedin.com/company/ford-brasil/`
  },

  {
    id: 5,
    category: "FullStack",
    img: NodeJS,
    title: "NodeJS",
    link: `https://www.linkedin.com/company/ford-brasil/`
  },

  {
    id: 6,
    category: "FullStack",
    img: HTML5,
    title: "HTML5",
    link: `https://www.linkedin.com/company/ford-brasil/`
  },

  {
    id: 7,
    category: "FullStack",
    img: CSS,
    title: "CSS",
    link: `https://www.linkedin.com/company/ford-brasil/`
  },

  {
    id: 8,
    category: "FullStack",
    img: Tailwind,
    title: "Tailwind",
    link: `https://www.linkedin.com/company/ford-brasil/`
  },

  {
    id: 9,
    category: "FullStack",
    img: AWS,
    title: "AWS",
    link: `https://www.linkedin.com/company/ford-brasil/`
  },

  {
    id: 10,
    category: "Dados",
    img: Python,
    title: "Python",
    link: `https://www.linkedin.com/company/itgoal/`
  },

  {
    id: 11,
    category: "Dados",
    img: Numpy,
    title: "Numpy",
    link: `https://www.linkedin.com/company/itgoal/`
  },

  {
    id: 12,
    category: "Dados",
    img: Matplotlib,
    title: "Matplotlib",
    link: `https://www.linkedin.com/company/itgoal/`
  },

  {
    id: 13,
    category: "Dados",
    img: Excel,
    title: "Excel",
    link: `https://www.linkedin.com/company/itgoal/`
  },

  {
    id: 14,
    category: "Dados",
    img: VBA,
    title: "VBA",
    link: `https://www.linkedin.com/company/itgoal/`
  },

  {
    id: 15,
    category: "Dados",
    img: Pandas,
    title: "Pandas",
    link: `https://www.linkedin.com/company/itgoal/`
  },
];
