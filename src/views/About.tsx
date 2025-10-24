// assets
import aboutPageImg from "../assets/Background_2.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import githubIcon from "../assets/github-icon.svg";
// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
          items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>

          
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              Sobre <span className="text-secondary"> mim</span>

            </h2>

            
          </Reveal>

          <Reveal>
            <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary" style={{ color: 'white'}}>
              Olá! Sou Victor, formado em Ciência da Computação e atualmente cursando Pós-Graduação em Ciência de Dados.

              Tenho experiência prática em Python, SQL e manipulação de dados, aplicando fundamentos estatísticos e processos de ETL para compreender padrões e gerar valor a partir de dados.

              Atuei em empresas como Ford Brasil, Sys Manager e Kampjo, desenvolvendo soluções que conectam engenharia, automação e análise de dados para apoiar decisões estratégicas.

              Também contribui como Cientista de Dados voluntário na Liga GG, onde desenvolvi pipelines com Python e Pandas integrados à Riot API para análise de desempenho em competições oficiais de eSports.

              Busco aplicar métodos científicos e pensamento analítico para transformar dados em conhecimento e impacto real.

            
            </p>

          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6"
          >
            <SocialMediaIcon imgSrc={linkedinIcon} title="Linkedin" link="https://www.linkedin.com/in/victorgms/" />
            <SocialMediaIcon imgSrc={githubIcon} title="Github" link="https://github.com/VictorGMSS" />
          </motion.div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={aboutIllustration}
            alt=""
            className="max-w-full sm:max-w-[401px]"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default About;
