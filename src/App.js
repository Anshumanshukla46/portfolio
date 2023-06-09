import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Work from './Components/Work';

// tailwindcss work with mobile first approach

function App() {
  return (
    <div>
      <Navbar />
      <Home />

      {/* try to add image on left and content on right : tried but couldn't done */}
      {/* <Homei /> */}

      <About />
      <Skills />
      <Work />

      <Contact />
    </div>
  );
}

export default App;
