import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import {Routes, Route} from "react-router-dom"
import Register from "./components/register/Register"
import GamesList from "./components/games-list/GameList"
import GameCreate from "./components/game-create/GameCreate"


function App() {

  return (
    <>
      <div id="box">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/games" element={<GamesList />}/>
          <Route path="/games/create" element={<GameCreate />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
