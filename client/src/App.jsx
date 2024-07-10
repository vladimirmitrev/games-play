import { useState } from "react";
import {Routes, Route, useNavigate} from "react-router-dom";

import * as authService from './services/authService';
import AuthContext from "./contexts/authContext"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import GamesList from "./components/games-list/GameList"
import GameCreate from "./components/game-create/GameCreate"
import GameDetails from "./components/game-details/GameDetails"
import Path from "./paths";


function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
        console.log(values);
        const result = await authService.login(values.email, values.password);

        setAuth(result);
        navigate(Path.Home);
    };

  return (
    <AuthContext.Provider value={{loginSubmitHandler}}>
      <div id="box">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/games" element={<GamesList />}/>
          <Route path="/games/create" element={<GameCreate />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/games/:gameId" element={<GameDetails />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  )
}

export default App
