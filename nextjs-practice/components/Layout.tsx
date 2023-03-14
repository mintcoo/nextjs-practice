import { useRouter } from "next/router";
import { useRef } from "react";
import NavBar from "./NavBar";
import Seo from "./Seo";

export default function Layout({ children }: { children: any }) {
	const router = useRouter();
	const titleList: any = useRef({ "/": "Home", "/about": "About", "/movies/([a-zA-Z0-9]+)" : "Movies" });
  console.log(titleList.current["/movies/asd"]);
	return (
		<>
			<Seo title={titleList.current[router.pathname]} />
			<NavBar />
			<div>{children}</div>
		</>
	);
}
