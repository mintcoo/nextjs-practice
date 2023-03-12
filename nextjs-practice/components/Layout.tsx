import { useRouter } from "next/router";
import { useRef } from "react";
import NavBar from "./NavBar";
import Seo from "./Seo";

export default function Layout({ children }: { children: any }) {
	const router = useRouter();
  // console.log(router.pathname,"z");
	const titleList: any = useRef({ "/": "Home", "/about": "About" });
	return (
		<>
			<Seo title={titleList.current[router.pathname]} />
			<NavBar />
			<div>{children}</div>
		</>
	);
}
