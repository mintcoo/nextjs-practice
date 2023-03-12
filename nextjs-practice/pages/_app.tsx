// import NavBar from "@/components/NavBar";
import type { AppProps } from "next/app";
import { useEffect, useRef, useState } from "react";
// 여기 _app파일에서만 이렇게 globals.css 가져올 수 있다
import "../styles/globals.css";
// @ts-ignore 
import ReactPlayer from "react-player";
import Layout from "@/components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
	const youtube = useRef<any>(null);
	const [src, setSrc] = useState<string>("");
	const [init, setInit] = useState<boolean>(false);
	const [playing, setPlaying] = useState<boolean>(true);
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
			<Component {...pageProps} />
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
