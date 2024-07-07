import { useEffect, useState } from "react";
import * as gamesService from '../../services/gameService'
import GameListItem from "./game-list-item/GameListItem";

const GamesList = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gamesService.getAll()
        .then(result => setGames(result))
    },[]);

    console.log(games);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.map(game => (
                <GameListItem key={game._id} {...game}/>
            ))}

            {games.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}

        </section>
    );
}

export default GamesList;