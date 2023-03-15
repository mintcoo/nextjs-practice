import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store"; //스토어 생성단계에서 export한 커스텀 dispatch, selector hook
import { increment, decrement, fetchAsync } from "../store/features/countSlice";
import { GetServerSideProps, InferGetServerSidePropsType } from "next"; // getServerSideProps type
import { wrapper } from "@/store";

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
// SSR: 서버에서 구동되는 영역
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    console.log("SSR");
    // 서버 영역에서 Redux 사용
    await store.dispatch(fetchAsync("갔냐?"))
    // 전달할 props가 있으면 전달
    return {
      props: {
        message: "SSR!!",
      },
    };
  });

const Home = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  console.log("props오나?", props);
  const dispatch = useAppDispatch();
  // 내가 redux에서 값을 가져오는것
  const { value, status } = useAppSelector((state) => {
    // state가 어떻게 들어오는지 console 찍어보자
    // console.log("?", state);
    return state.counter;
  });
  const [movies, setMovies] = useState<MovieProps[]>([]);
  // SSR 처리되나 보기위해 잠시 주석처리
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);

  // reducer 시험용
  // 불필요한 렌더링을 방지하기 위해서인데 컴포넌트에 속성으로 들어가는 함수는 useCallback으로 감싸주는것이 좋다
  const onIncrement = useCallback(() => dispatch(increment()), []);
  const onDecrement = useCallback(() => dispatch(decrement()), []);
  // redux-thunk
  const onReduxThunk = useCallback(() => dispatch(fetchAsync("갔냐?")), []);
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
      <div className="text-2xl">
        {value} | {status}
      </div>
      <button className="w-10 text-2xl border-2" onClick={onIncrement}>
        +
      </button>
      <button className="w-10 text-2xl border-2" onClick={onDecrement}>
        -
      </button>
      <button className="w-10 text-2xl border-2" onClick={onReduxThunk}>
        X
      </button>
    </div>
  );
};

export default Home;
