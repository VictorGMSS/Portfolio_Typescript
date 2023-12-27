// views
import { About, Hero, Knowledges, Work, Certificates} from "./views";

// components
import { Menu } from "./components";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Knowledges />
      <Work />
      <Certificates />
      <Menu />
    </>
  );
}

export default App;
