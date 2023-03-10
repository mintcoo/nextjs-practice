import { useEffect, useRef, useState } from "react";
// import IframeResizer from "iframe-resizer-react";
// import ReactPlayer from "react-player";

const Home = () => {
  // const youtube = useRef<any>(null);
  // const [src, setSrc] = useState<string>("");
  // const [init, setInit] = useState<boolean>(false);
  // const [playing, setPlaying] = useState<boolean>(true);
  // useEffect(() => {
  //   // alert("들어오자마자 실행?");
  //   // play();
  //   setSrc(`https://www.youtube.com/watch?v=jUNz-uTF--E`);
  //   setInit(true);
  // }, []);
  // const onClick = () => {
  //   console.log("클릭했냐?");
  //   setPlaying((prev) => !prev);
  // };

  return (
    <div>
      <h1 className="text-red-600">HOME</h1>
      {/* <div className="hidden">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jUNz-uTF--E?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowfullscreen
        ></iframe>
      </div> */}

      {/* {init ? (
        <ReactPlayer
          ref={youtube}
          playing={playing}
          loop={true}
          url={src}
          style={{ display: "none" }}
        />
      ) : null}
      <button onClick={onClick}>{playing ? "⏸" : "▶"}</button> */}
    </div>
  );
};

export default Home;
