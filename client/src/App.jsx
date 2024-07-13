import {Routes, Route} from "react-router-dom";

import {AuthProvider} from "./contexts/authContext"
import Path from "./paths";

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Logout from "./components/logout/Logout";
import Register from "./components/register/Register"
import GamesList from "./components/games-list/GameList"
import GameCreate from "./components/game-create/GameCreate"
import GameDetails from "./components/game-details/GameDetails"
import GameEdit from "./components/game-edit/GameEdit"
import ErrorBoundary from "./components/ErrorBoundary";
import BasicAuthGuard from "./components/guards/BasicAuthGuard";


function App() {
    

  return (
    <ErrorBoundary>
    <AuthProvider>
      <div id="box">
        <Header />
        <Routes>
          <Route path={Path.Home} element={<Home />}/>
          <Route path="/games" element={<GamesList />}/>
          <Route path="/games/create" element={<BasicAuthGuard><GameCreate /></BasicAuthGuard>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/games/:gameId" element={<GameDetails />} />
          <Route path={Path.GameEdit} element={<BasicAuthGuard><GameEdit /></BasicAuthGuard>} />
          <Route path={Path.Logout} element={<Logout />} />
        </Routes>
      </div>
    </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
