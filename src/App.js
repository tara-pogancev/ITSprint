import logo from './logo.svg';
import './App.css';

import NavBar from './NavBar';
import Body from './Body';

function App() {
  const name= 'Onur'
  return (
    <div>
      <NavBar name={name}/>
      <Body name={name}/>
    </div>
  );
}

export default App;
