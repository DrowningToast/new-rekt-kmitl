import { Chakra_Petch } from "next/font/google";

const chakra = Chakra_Petch({
  subsets: ["thai"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-chakra",
});
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rektistrar KMITL</title>
      </Head>
      <div className={`${chakra.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
