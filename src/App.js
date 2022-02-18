
import './App.css'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom';
import Minigame from './pages/MiniGame/Minigame';
import User from './pages/User/User';

function App() {
  return (
    <div className="App">     
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/minigame" element={<Minigame/>} />
        <Route path = '*' element={<Home />}></Route>
        <Route path ='/user/:id' element={<User/>}/> 
      </Routes>
    </div>
  )
}

export default App
