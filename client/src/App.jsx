import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import {Routes, Route} from "react-router-dom"
import Register from "./components/register/Register"
import GamesList from "./components/games-list/GameList"
import GameCreate from "./components/game-create/GameCreate"
import GameDetails from "./components/game-details/GameDetails"
import { useState } from "react"


function App() {
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = (values) => {
        console.log(values);
    };

  return (
    <>
      <div id="box">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/games" element={<GamesList />}/>
          <Route path="/games/create" element={<GameCreate />}/>
          <Route path="/login" element={<Login loginSubmitHandler={loginSubmitHandler}/>}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/games/:gameId" element={<GameDetails />} />
        </Routes>
      </div>
    </>
  )
}

export default App
