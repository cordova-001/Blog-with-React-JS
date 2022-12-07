import './App.css';
import './my-style.css';
import Navbar from './navbar';
import Help from './help';
import Home from './home';
import List from './list';
import Usestate from './usestate';


const name = 'Akorede Ahmad the software architect'
const greetings = 'May the blessings of Allah be with you today and always'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

      <Help />

      <div className="content">
        <h1>
          {name}
        </h1>
        <p> {greetings} </p>
        <List />
        <Usestate />
      </div>
    </div>
  );
}

export default App;
