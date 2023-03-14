import { useRouter } from "next/router";
// import { useRef } from "react";
type MovieDetailParams = [string, string];

export default function Detail() {
  const router = useRouter();
  console.log(router.query.params);

  // 혹시나 저처럼 왜 || [] 를 추가해주면 되는건지 궁금하신분들을 위해 남겨봅니다.
  // 기본적으로 미리 렌더링이 되기때문에 먼저 html 파일이 내려온다는건 다들 아실겁니다. 이때 문제가 아직 js들이 다운로드가 안됐기 때문에 useRouter()로 정보를 제대로 가져오질 못하는 상태입니다. 그렇기 때문에 초기에는 빈 배열을 추가해줘서 오류가 발생하지 않도록 해주고, js가 내려가서 다시 렌더링하게되면 그 때는 빈 배열이 아닌 router.query.params에서 값을 가져와서 뿌려주는거죠.
  // 정확하게 보고싶으신 분들은 검사 -> 네트워크 -> slow 3g 로 설정하신 후에 페이지 렌더링 확인하시면 먼저 html쪽 뜨고나서 js까지 모두 다운로드 된 후에야 title이 보이는걸 볼 수 있으실거예요.
  const [title, id] = (router.query.params || []) as MovieDetailParams;

  return <div>{/* <h4 className="text-2xl">{title}</h4> */}</div>;
}


// getServerSideProps (타입스크립트와 함께 사용하기)
// ```
// import { GetServerSideProps } from 'next'

// export const getServerSideProps: GetServerSideProps = async (context : any) => {
//   return {
//     props: {
//       params: context.params,
//     },
//   };
// }

// function Page({ data }: InferGetServerSidePropsType< typeof getServerSideProps>)
