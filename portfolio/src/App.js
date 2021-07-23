import Hero from "./components/Hero.js"
import About from './components/About.js';
import Services from './components/Services.js';
import Projects from './components/Projects.js';
import Testimonials from './components/Testimonials.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
