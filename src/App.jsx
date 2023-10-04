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

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <div className='dev bg-black-gradient'>
          <div className=' bg-stone-800 '>
            <Header />
          </div>
          <div className=''>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />
              {/* <Route path="/my-app" element={<Home />} /> */}
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <div className='justify-end'>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
