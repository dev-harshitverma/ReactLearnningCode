import './App.css';
import Cards from "./components/cards";
import CurrentDateTime from './components/CurrentDateTime';
import Marge from './components/Marge';
import Netflix from './components/netflix';
import { ShowTime } from './components/ShowTime';
import Game from './components/SmallGame';


function App() {
  return (
    <>
      <Cards/>
      <Netflix/>
      <Netflix/>
      <CurrentDateTime/>
      <Marge/>
      <Game/>
      <ShowTime/>
      
    </>
  );
}

export default App;
