import { useEffect, useRef } from "react";

const Home = () => {
  const youtube = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    // alert("들어오자마자 실행?");
    console.log("실행");
  }, []);
  // setInterval(() => {
  //   play();
  // }, 3000)
  const play = () => {
    // youtube.current!.click();
    const you = document.querySelector("[aria-label]");
    const you2 = document.querySelector("iframe");
    // console.log(you, "zzz");
    console.log(you2?.contentWindow!.document.querySelector("button"), "zzz");
  };
  return (
    <div>
      <h1>HOME</h1>
      <iframe
        ref={youtube}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/qaO0Wq3Acfs"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Home;
