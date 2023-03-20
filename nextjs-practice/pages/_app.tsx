// import NavBar from "@/components/NavBar";
import type { AppProps } from "next/app";
import { useEffect, useRef, useState } from "react";
// 여기 _app파일에서만 이렇게 globals.css 가져올 수 있다
import "../styles/globals.css";
// @ts-ignore
import ReactPlayer from "react-player";
import Layout from "@/components/Layout";
import { wrapper } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const youtube = useRef<any>(null);
  const [src, setSrc] = useState<string>("");
  const [init, setInit] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(true);
  // 트랜지션 관련
  const [isShow, setIsShow] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    // alert("들어오자마자 실행?");
    // play();
    setSrc(`https://www.youtube.com/watch?v=jUNz-uTF--E`);
    setInit(true);
  }, []);
  const onClick = () => {
    console.log("클릭했냐?");
    setPlaying((prev) => !prev);
  };
  return (
    <Layout>
      {/* <NavBar /> */}
      {/* <PersistGate loading={<div>loading...</div>} persistor={persistor}> */}
      <AnimatePresence key={router.route}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      {/* </PersistGate> */}
      {init ? (
        <ReactPlayer
          ref={youtube}
          playing={playing}
          loop={true}
          url={src}
          style={{ display: "none" }}
        />
      ) : null}
      <div className="text-3xl cursor-pointer" onClick={onClick}>
        {playing ? "⏸" : "▶"}
      </div>
      <style jsx global>{`
        // body {
        //   color: blue;
        // }
      `}</style>
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
