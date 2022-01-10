import './App.css';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Header from './components/Header';
import Hobbies from './components/Hobbies';
import Presentation from './components/Presentation';

const App = () => (
  <div className="App">
    <Header />
    <Presentation />
    <Experiences />
    <Education />
    <Hobbies />
  </div>
);

export default App;
