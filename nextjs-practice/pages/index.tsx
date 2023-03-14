import Link from "next/link";
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
        // <Link
        //   // 이건 사용자에게 보여줄 url 주소
        //   as={`movies/${movie.id}`}
        //   href={{
        //     // url을 [id] 이런식으로 정의하면 query에 id값을 담아 보내야한다
        //     // pathname: `/movies/${movie.id}`, << 이건 다른방법
        //     pathname: `/movies/[id]`,
        //     query: {
        //       id: movie.id,
        //       title: movie.title,
        //     },
        //   }}
        //   key={movie.id}
        // >
        // 주소에 영화제목을 띄워주기위해 우선 아래코드로 진행
        <Link href={`movies/${movie.original_title}/${movie.id}`}>
          <div>
            <h4>{movie.original_title}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
