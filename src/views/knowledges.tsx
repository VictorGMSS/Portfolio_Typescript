// react
import { useState } from "react";

// assets
import projectsPageImg from "../assets/Background_3.svg";

// components
import { Button, Card, Reveal } from "../components";

// data
import { works } from "../dataConhecimentos";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

type Category = "FullStack" | "Dados";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Dados");

  const filteredProjects = () => {
    if (activeCategory === "Dados") {
      return works.filter((item) => item.category === "Dados");
    } else {
      return works.filter((item) => item.category === "FullStack");
    }
  };

  return (
    <div
      id="projects"
      className="min-h-screen relative"
      style={{
        background: `url(${projectsPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              Meus  <span className="text-secondary"> conhecimentos</span>
            </h2>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center gap-4 justify-center xl:justify-start flex-col sm:flex-row"
          >
            <Button
              secondary={activeCategory === "Dados" ? true : false}
              onClick={() => setActiveCategory("Dados")}
            >
              Analise de Dados
            </Button>
            <Button
              secondary={activeCategory === "FullStack" ? true : false}
              onClick={() => setActiveCategory("FullStack")}
            >
              Full stack
            </Button>
            
          </motion.div>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex gap-12 mt-12 flex-wrap justify-center"
          >
            
            {filteredProjects().map((item) => (
              <a href={item.link} target="_blank">
                <Card imgSrc={item.img} title={item.title} />
              </a>
             //<Card imgSrc={item.img} title={item.title}> <img src={item.img}/> </Card>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Projects;