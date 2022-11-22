import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {console.log(movie)}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={`${movie.large_cover_image}`} alt="배경이미지" />
          <h2>{movie.title_long}</h2>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
