import Head from 'next/head'
import MainPage from "../components/main-page";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div className="body h-full">
      <Head>
        <title>Switflow</title>
      </Head>
        <Nav/>
      <main className="h-full">
          <MainPage/>
      </main>
      <footer>
      </footer>
    </div>
  )
}
