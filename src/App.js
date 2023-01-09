import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from './Home';
import UserDetails from "./UserDetails"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/fetch' element={<UserDetails/>}/>
      </Routes>
    </BrowserRouter>
     
     
    </div>
  );
}

export default App;
