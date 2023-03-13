import { useEffect, useState } from "react";

// 컴포넌트 밖의 변수들은 한번만 실행되네 이거 중요한듯

console.log("여기는 밖인가?");
interface MovieProps {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: [number];
}

const Home = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Home;
