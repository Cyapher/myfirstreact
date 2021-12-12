import NavBar from './components/NavBar';
import Router from './components/Router';

/*
functional/stateless component
- has no state; most simplest component; made for simple logic and program
- all in js are objects 

class/statefull component
- 

jsx = java script xml/ html object(?)
 
 */

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router/>
    </div>
  );
}

export default App;
