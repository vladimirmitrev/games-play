import { useContext, useEffect, useMemo, useReducer, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as gameService from '../../services/gameService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import reducer from "./commentReducer";
import useForm from "../../hooks/useForm";
import Path from "../../paths";
import { pathToUrl } from "../../utils/pathUtils";

const GameDetails = () => {
    const { email, userId } = useContext(AuthContext);
    const { gameId } = useParams();
    const [game, setGame] = useState({});
    const [comments, dispatch] = useReducer(reducer, []);
    // const [comments, setComments] = useState([]);
    
    useEffect(() => {
        gameService.getOne(gameId)
            .then(setGame);

        commentService.getAll(gameId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                })
            });
    }, [gameId])
    
    const addCommentHandler = async (values) => {

        // e.preventDefault();

        // const formData = new FormData(e.currentTarget);


        const newComment = await commentService.create(
            gameId,
            values.comment,
         );

         newComment.owner = { email };
        //  setComments(state => [...state, {...newComment, owner: { email }}]);
        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
    }

    //TODO: temporary solution for form reinitialization 
    const initialValues = useMemo(() => ({
        comment: '',
    }), []);

    const { values, onChange, onSubmit } = useForm(addCommentHandler, initialValues);

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />
                    <h1>{game.title}</h1>
                    <span className="levels">{game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({_id, text, owner: { email }}) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}                        
                    </ul>
                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                    
                </div>
                { userId === game._ownerId && (
                    <div className="buttons">
                        <Link to={pathToUrl(Path.GameEdit, { gameId})} className="button">Edit</Link>
                        <Link to={Path.GameDelete} className="button">Delete</Link>
                    </div>
                )}
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onSubmit}>
                    {/* <input type="text" name="username" placeholder="Type username"/> */}
                    <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
}

export default GameDetails;