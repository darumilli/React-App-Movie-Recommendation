// This is the movie card component
import "./styles/Card.css";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();
    const imgPath = "https://image.tmdb.org/t/p/w342";

    // opening the clicked movie
    const goToMovie = () => {
        navigate(`/search/${movie.title}`);
        window.location.reload();
    };

    return (
        <div onClick={goToMovie} className="Main-Card">
            {movie.poster_path && (
                <img
                    src={`${imgPath}${movie.poster_path}`}
                    alt={movie.title}
                    title={movie.title}
                    className="Poster"
                />
            )}
        </div>
    );
};

export default MovieCard;