// Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';

// My css file
import '../src/style.css'

// Media Query
import '../src/media-query.css'

// Route
import { Routes, Route } from "react-router-dom"

// Components
import Header from './Components/Header & Footer/Header';
import MobileHeader from './Components/Header & Footer/Mobile-Header';
import Home from './Components/Sections/Home';
import About from './Components/Sections/About';
import Services from './Components/Sections/Services';
import Portfolio from './Components/Sections/Portfolio';
import Blog from './Components/Sections/Blog';
import Contact from './Components/Sections/Contact';


function App() {
  return (

    <>

      {/* PC Header */}
      <Header></Header>

      {/* Mobile Header */}
      <MobileHeader></MobileHeader>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

    </>

  );
}

export default App;
