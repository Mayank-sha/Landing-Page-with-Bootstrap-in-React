import { ArrowRight } from 'react-bootstrap-icons'
import * as Icon from 'react-bootstrap-icons';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';
import Team from './Team';
import Portfolio from './Portfolio';
import Service from './service';
import About from './About';
import Carousel from './Carousel';

function App() {
  return (
    <div>
      <Navbar/> 
      <Carousel/>
      <About/>
      <Service/>
      <Portfolio/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
