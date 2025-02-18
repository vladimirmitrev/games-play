import { Link } from "react-router-dom";
import Path from "../../../paths";
import { pathToUrl } from "../../../utils/pathUtils";

const LatestGame = ({
    title,
    imageUrl,
    _id,
}) => {
  return (
    <div className="game">
      <div className="image-wrap">
        <img src={imageUrl} />
      </div>
      <h3>{title}</h3>
      <div className="rating">
        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
      </div>
      <div className="data-buttons">
        <Link to={pathToUrl(Path.GameDetails, {gameId: _id})} className="btn details-btn">
          Details
        </Link>
      </div>
    </div>
  );
};

export default LatestGame;
