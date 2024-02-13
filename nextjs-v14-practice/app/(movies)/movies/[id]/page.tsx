interface IProps {
  params: { id: string };
}

export default function MovieDetail({ params: { id } }: IProps) {
  return <h1>Movie Detail {id}</h1>;
}
