import { lazy, Suspense, useEffect, useState } from 'react';
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
import GameEdit from "./components/game-edit/GameEdit"
import ErrorBoundary from "./components/ErrorBoundary";
import AuthGuard from "./components/guards/AuthGuard";
import GuestGuard from "./components/guards/GuestGuard";
// import GameDetails from "./components/game-details/GameDetails"
const GameDetails = lazy(() => import('./components/game-details/GameDetails'));


function App() {

    const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/data/movies`)
        .then((res) => res.json())
        .then(result => {
            setMovies(result);
        })
  }, []);
    

  return (
    <ErrorBoundary>
    <AuthProvider>
      <div id="box">
        <Header />
        <Suspense fallback={<h1 style={{color: 'white'}}>Loading...</h1>}>
        <ul>
            {movies.map(movie => <li style={{color: 'white', fontSize: '30px'}} key={movie._id}>{movie.title}</li>)}
        </ul>
        <Routes>
          <Route path={Path.Home} element={<Home />}/>
          <Route path="/games" element={<GamesList />}/>
          <Route path="/games/:gameId" element={<GameDetails />} />

          <Route element={<GuestGuard />}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register />}/>
          </Route>
          
          <Route element={<AuthGuard />}>
            <Route path="/games/create" element={<GameCreate />}/>
            <Route path={Path.GameEdit} element={<GameEdit />} />
            <Route path={Path.Logout} element={<Logout />} />
          </Route>
        </Routes>
        </Suspense>
      </div>
    </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
