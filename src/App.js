import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Route } from 'react-router';
import Func from './components/Func/Func';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/" render={()=><Home/>}/>
      <Route path="/function" render={()=><Func/>} />
    </div>
  );
}

export default App;
