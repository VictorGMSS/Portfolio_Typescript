// assets
import homePageImg from "../assets/Background_1.svg";
import homePageIllustation from "../assets/hero-illustration-data.svg";
import downloadIcon from "../assets/download-btn-icon.svg";
import downloadPDF from "../assets/Curriculo_Victor_Martins_2025.pdf";
// components
import { Button } from "../components";

// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${homePageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col 
          xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="w-full xl:w-fit">
          <motion.h1
            variants={fadeIn("down")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="w-full xl:w-fit text-center xl:text-start text-3xl sm:text-6xl lg:text-8xl
              font-bolt text-textPrimary uppercase"
          >
            Victor Gabriel
            <br />
            <span style={{ color: '#09DBFF' }}>
              <Typewriter
                words={["Data scientist", "Cientista de dados"]}
                cursor
                cursorStyle="_"
                typeSpeed={250}
                deleteSpeed={150}
                loop
              />
            </span>
          </motion.h1>
          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start"
          >

            <a 
              className="w-full sm:w-auto" 
              href="https://www.linkedin.com/in/victorgms/"
              target="_blank"
            >
           <Button secondary>Me contate</Button></a>
            <a 
              className="w-full sm:w-auto" 
              href={downloadPDF} 
              download="Curriculo Victor Martins 2025"
            >
              
            <Button icon={downloadIcon}>Download CV</Button></a>
            
          </motion.div>
        </div>

        <motion.img
          variants={scale()}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          src={homePageIllustation}
          alt=""
          className="max-w-full sm:max-w-[401px]"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Hero;