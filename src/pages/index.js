//next components
import Head from "next/head";

//components
import { Main } from "../components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Crud</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </>
  );
}
