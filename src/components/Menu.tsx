// mui
import { IconButton, Tooltip } from "@mui/material";

// mui - icons
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AppsIcon from "@mui/icons-material/Apps";
import MailIcon from "@mui/icons-material/Mail";
import ExperienceIcon from "@mui/icons-material/Work";
import CertificatesIcon from "@mui/icons-material/Article";
// react-scroll
import { Link } from "react-scroll";

const Menu = () => {
  return (
    <div
      className="fixed bottom-0 sm:bottom-10 w-full sm:w-fit left-1/2 -translate-x-1/2 bg-accent rounded-t-xl sm:rounded-full py-3 px-6 flex items-center justify-between sm:justify-center gap-4 sm:gap-12 z-30"
    >
      <Link to="home" smooth>
        <Tooltip title="Home" placement="top" arrow>
          <IconButton className="group">
            <HomeIcon className="text-white group-hover:text-secondary" />
          </IconButton>
        </Tooltip>
      </Link>

      <Link to="about" smooth>
        <Tooltip title="Sobre" placement="top" arrow>
          <IconButton className="group">
            <PersonIcon className="text-white group-hover:text-secondary" />
          </IconButton>
        </Tooltip>
      </Link>

      <Link to="projects" smooth>
        <Tooltip title="Conhecimentos" placement="top" arrow>
          <IconButton className="group">
            <AppsIcon className="text-white group-hover:text-secondary" />
          </IconButton>
        </Tooltip>
      </Link>

      <Link to="Work" smooth>
        <Tooltip title="Trabalho" placement="top" arrow>
          <IconButton className="group">
            <ExperienceIcon className="text-white group-hover:text-secondary" />
          </IconButton>
        </Tooltip>
      </Link>

      <Link to="Certificates" smooth>
        <Tooltip title="Certificados" placement="top" arrow>
          <IconButton className="group">
            <CertificatesIcon className="text-white group-hover:text-secondary" />
          </IconButton>
        </Tooltip>
      </Link>

    </div>
  );
};

export default Menu;
