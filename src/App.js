
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import Minigame from './pages/MiniGame/Minigame';

function App() {
  return (
    <div className="App">     
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/minigame" element={<Minigame/>} />
        <Route path = '*' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
