import { useState, useEffect } from "react";
import Movie from "../component/Movie";
import styles from "./Home.module.css";

function Home() {
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

  return (
    <div className={styles.container}>
      {loading ? (
        <h1 className={styles.loader}>
          <span>Loading...</span>
        </h1>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie //부모 컴포넌트에서 자식 컴포넌트로 정보를 전달 할때는 Prop을 사용한다.
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
