import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/Homepage';
import Post from './components/Post';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>

        <Route path='/' element={<Homepage/>}/>

        <Route path='/post' element={<Post/>}/>

      </Routes>
    </div>
  );
}

export default App;
