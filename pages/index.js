import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <p className="description">
        5 p.m., Sunday.
        Your final exams are starting. There are two papers tomorrow, one at 10 AM, and the other at 3 PM. What will be your likely state?

        </p>
      </main>

      <Footer />
    </div>
  )
}
