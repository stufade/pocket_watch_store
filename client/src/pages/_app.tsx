import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="max-w-[1480px] mx-auto my-8 px-8 md:px-16 lg:px-[125px]">
			<Header />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
