//Movie 컴포넌트 만들기 전
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  //async await (모던한 방식 - 짧은 버전)
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  //async await (모던한 방식 - 긴버전)
  // const getMovies = async () => {
  //   const response = await fetch(
  //     "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
  //   );
  //   const json = await response.json();
  //   setMovies(json.data.movies);
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   getMovies();
  // }, []);

  // useEffect(() => {
  //   // fetch(
  //   //   "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
  //   // )
  //   //   .then((response) => response.json())
  //   //   .then((json) => {
  //   //     setMovies(json.data.movies);
  //   //     setLoading(false);
  //   //   });
  // }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} alt={"movies cover"} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li> //map함수 돌린때 key값은 꼭 명시.(고유한 값)
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
