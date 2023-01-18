import './App.css';
import { Episodes } from './components/Episodes';
import { MainSession } from './components/MainSession';
import { NavBar } from './components/NavBar';
import { Prices } from './components/Prices';
import { SessionTwo } from './components/SessionTwo';

function App() {
  return (
    <>
      <NavBar />
      <MainSession />
      <SessionTwo />
      <Episodes />
      <Prices />
    </>
  );
}

export default App;
