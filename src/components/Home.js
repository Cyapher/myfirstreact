import logo from '../logo.svg';
import '../App.css';
import Greet from './Greet'; // does not need .js; both are js files
import Message from './Message';
import Button from './Button';
import Hello from './Hello';
import Employee from './Employee';
import NavBar from './NavBar';

/*
functional/stateless component
- has no state; most simplest component; made for simple logic and program
- all in js are objects 

class/statefull component
- 

jsx = java script xml/ html object(?)
 
 */

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <img src={"https://www.seekpng.com/png/full/172-1729819_every-spread-of-the-2013-2014-marshall-yearbook.png"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. --- ginagawa mo carlos
        </p>
        <p>{Hello()}</p>
        <Greet name="Sir Bryan">
        <Message/>
        </Greet>
        <Greet name="Michael">
        <Button/>
        <p>Pag di mo pinindot babagsak ka</p>
        </Greet>
        <Greet name="Vennett"></Greet>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
