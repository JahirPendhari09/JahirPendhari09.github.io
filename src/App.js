import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
import { ActivityGraph } from './components/ActivityGraph';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <ActivityGraph/>
      <Contact/>
    </div>
  );
}

export default App;
