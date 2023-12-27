// react
import { useState } from "react";

// assets
import projectsPageImg from "../assets/projects-page.svg";

// components
import { Button, Card, Reveal } from "../components";

// data
import { works } from "../data";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

type Category = "LigaGG" | "Kampjo" | "Ford" | "Sofitel" | "Itgoal";

const Works = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Ford");

  const filteredWorks = () => {
    if (activeCategory === "LigaGG") {
      return works.filter((item) => item.category === "LigaGG");
    } if(activeCategory === "Ford"){
      return works.filter((item) => item.category === "Ford");
    }if(activeCategory === "Sofitel"){
      return works.filter((item) => item.category === "Sofitel");
    }if(activeCategory === "Itgoal"){
      return works.filter((item) => item.category === "Itgoal");
    }else {
      return works.filter((item) => item.category === "Kampjo");
    }
  };

  return (
    <div
      id="Work"
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
              Minhas <span className="text-secondary"> experiencias</span>
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
              secondary={activeCategory === "Ford" ? true : false}
              onClick={() => setActiveCategory("Ford")}
            >
              Ford
            </Button>

            <Button
              secondary={activeCategory === "LigaGG" ? true : false}
              onClick={() => setActiveCategory("LigaGG")}
            >
              LigaGG
            </Button>

            <Button
              secondary={activeCategory === "Kampjo" ? true : false}
              onClick={() => setActiveCategory("Kampjo")}
            >
              Kampjo
            </Button>

            <Button
              secondary={activeCategory === "Sofitel" ? true : false}
              onClick={() => setActiveCategory("Sofitel")}
            >
              Sofitel
            </Button>

            <Button
              secondary={activeCategory === "Itgoal" ? true : false}
              onClick={() => setActiveCategory("Itgoal")}
            >
              Itgoal
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

                    <p> <strong>Periodo:</strong> {item.data}
                    </p>

                    <br />
                    <p> 
                      <strong>{item.inWork}</strong> 
                    </p>

                    <p>{item.tools}</p>

                  </div>
                ))}

              </p>     
              
            </Reveal>
      
        </div>
      
          <div className="sm:block hidden">
            {filteredWorks().map((item) => (
              <a href={item.link} target="_blank">
                <br /><br />
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
