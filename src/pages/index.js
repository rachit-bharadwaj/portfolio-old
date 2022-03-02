import Head from 'next/head'
import { About, Footer, Navbar, Projects, Technologies, Welcome } from '../components'

const Home = () => {
  return (
    <div className="bg-[#100f24] p-2 font-ubuntu">
    
      <Head>
        <title>Portfolio-Rachit Bharadwaj</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Navbar />
        <Welcome />
        <Projects />
        <Technologies />
        <About />
        <Footer />

      </body>

    </div>
  )
}

export default Home
