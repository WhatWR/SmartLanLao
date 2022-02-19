
import './App.css'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom';
import Minigame from './pages/MiniGame/Minigame';
import User from './pages/User/User';
import Admin from './pages/Admin/Admin'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {
  return (
    <div className="App">     
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/minigame" element={<Minigame/>} />
        <Route path = '*' element={<Home />}></Route>
        <Route path ='/user/:id' element={<User/>}/> 
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    
    </div>
  )
}

export default App
