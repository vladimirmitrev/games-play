import withAuth from "../HOC/withAuth";
import LatestGame from "./latest-game/latest-game";
import * as gameService from "../../services/gameService";
import { useEffect, useState } from "react";

const Home = ({
    email,
    _id,
}) => {
    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        gameService.getLatest()
            .then(result => {
                setLatestGames(result);
            } )
    }, []);

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {/* <!-- Display div: with information about every game (if any) --> */}
                {latestGames.map(game => <LatestGame key={game._id} {...game}/>)}
                {/* <!-- Display paragraph: If there is no games  --> */}
                {!latestGames.length && ( 
                    <p className="no-articles">No games yet</p>
                    )}
            </div>
            <h1 style={{color: 'green'}}>{email}</h1>
            <h1 style={{color: 'green'}}>{_id}</h1>
        </section>
    );
}

const EnhancedHome = withAuth(Home);

export default EnhancedHome;