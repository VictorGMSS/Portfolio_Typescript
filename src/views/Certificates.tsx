// react
import { useState } from "react";

// assets
import projectsPageImg from "../assets/projects-page.svg";

// components
import { Button, Card, Reveal } from "../components";

// data
import { works } from "../dataCertificates";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

type Category = "DIO" | "Alura" | "Unisantos";

const Works = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Unisantos");

  const filteredWorks = () => {
    if (activeCategory === "DIO") {
      return works.filter((item) => item.category === "DIO");
    } if(activeCategory === "Unisantos"){
      return works.filter((item) => item.category === "Unisantos");
    }else {
      return works.filter((item) => item.category === "Alura");
    }
  };

  return (
    <div
      id="Certificates"
      className="min-h-screen flex items-center justify-center relative"
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
              Meus <span className="text-secondary"> Certificados</span>
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
              secondary={activeCategory === "Unisantos" ? true : false}
              onClick={() => setActiveCategory("Unisantos")}
            >
              Unisantos
            </Button>

            <Button
              secondary={activeCategory === "DIO" ? true : false}
              onClick={() => setActiveCategory("DIO")}
            >
              Digital Innovation One
            </Button>

            <Button
              secondary={activeCategory === "Alura" ? true : false}
              onClick={() => setActiveCategory("Alura")}
            >
              Alura
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

          <div className="flex-1 flex flex-col gap-4">
            <Reveal>
              <p 
                className="text-left xl:text-start text-base sm:text-lg text-textSecondary" 
                style={{ color: 'white', marginLeft: '3%'}}>

                <div className="sm:hidden">
                  {filteredWorks().map((item) => (
                    <a href={item.link} target="_blank">
                      <Card imgSrc={item.img} title={item.title} />
                    </a>
                  ))}
                </div>

                <br />

                {filteredWorks().map((item) => (
                  <div key={item.id}>

                    <p>{item.description}</p>
                    <br />

                    <a href={item.link} target="_blank" className="text-secondary lg:text-[25px]"> 
                      <strong>Ver certificado</strong> 
                    </a>

                  </div>
                ))}

              </p>     
              
            </Reveal>
      
        </div>
      
          <div className="sm:block hidden">
            {filteredWorks().map((item) => (
              <a href={item.link} target="_blank">
                <Card imgSrc={item.img} title={item.title} />
              </a>
            ))}
          </div>
          
          </motion.div>
          
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>

  );
};

export default Works;
