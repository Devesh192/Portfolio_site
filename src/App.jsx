import logo from './logo.svg';
import './App.css';
import './index.css';
import Header from './component/navbar';
import Home from './component/home';
import Resume from './component/resume';
import Footer from './component/footer';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Redirect,
  Routes
} from "react-router-dom";
import About from './component/about';
import Sidebar from './component/sidebar';
import Contact from './component/contact';
import Contact2 from './component/contact2';
import ContactMe from './component/contact';
import Skill from './component/skills';

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <div className='dev bg-green-gradient'>
          {/* <div className=' '>
            <Header />
          </div> */}
          <div className=''>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact2" element={<Contact2 />} />
              <Route path="/contact" element={<ContactMe />} />
              <Route path="/skills" element={<Skill />} />


            </Routes>
          </div>
          {/* <div className='justify-end'>
            <Footer />
          </div> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
