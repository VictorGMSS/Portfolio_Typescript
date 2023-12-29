// assets
import aboutPageImg from "../assets/about-me-page.svg";
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
              Olá! Sou Victor, um profissional em Ciências da Computação com experiência em estágios presenciais, manutenção interna em hotéis, trabalho 
              remoto com startups e grandes empresas, incluindo a FORD, onde atuei como Full Stack por 2 anos, construindo uma plataforma interna para 
              cálculos de juntas. Voluntariamente, contribuo para projetos de automação, Riot API e Análise de dados na LigaGG. Estou em busca de 
              oportunidades remotas desafiadoras em Ciências da Computação, Back-end, Full Stack, Análise de Dados ou áreas afins. Sou entusiasta 
              de games desde a infância, atualmente imerso no universo dos esportes eletrônicos, e busco constantemente ampliar meus conhecimentos.

            
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
            <SocialMediaIcon imgSrc={githubIcon} title="Instagram" link="https://github.com/VictorGMSS" />
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
