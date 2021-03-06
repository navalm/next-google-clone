import Head from 'next/head'
import Header from 'components/Header'
import MainForm from 'components/MainForm'
import Footer from 'components/Footer'

const Home = () => {
  return (
    <div className={'flex flex-col h-screen'}>
      <Head>
        <title>Next Google Clone - Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header/>
      {/* Body */}
      <MainForm />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
