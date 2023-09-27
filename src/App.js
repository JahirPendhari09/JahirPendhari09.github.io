import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
      <Projects/>
    </div>
  );
}

export default App;
