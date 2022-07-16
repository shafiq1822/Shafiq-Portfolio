import './App.css';
import Header from './Components/Header/Header';
// import Nav from './Components/Nav/Nav'
import Nav1 from './Components/Nav1/Nav1'
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
    {/* <Nav/> */}
    <Nav1/>
    <Header/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
