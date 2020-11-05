import App, { Container } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Container>

      <Head>
      
        <meta content="santri dan teknologi" name="keywords"/>
        <meta content="santri ngoding" name="keywords"/>
        <meta content="santri koding" name="keywords"/>
        <meta content="santri coding" name="keywords"/>
        <meta content="santri milenial" name="keywords"/>
        <meta content="santri berprestasi" name="keywords"/>
        <meta content="santri entrepreneur" name="keywords"/>
        <meta content="santri era globalisasi" name="keywords"/>
        <meta content="santri hebat" name="keywords"/>
        <meta content="darul ulum" name="keywords"/>
        <meta content="santri njoso" name="keywords"/>
        <meta content="santri online" name="keywords"/>
        <meta content="hari santri nasional" name="keywords"/>
        <meta content="santri inovatif" name="keywords"/>
        <meta content="santri keren" name="keywords"/>

        <meta content="hackathon santri" name="keywords"/>
        <meta content="hackathon 2021" name="keywords"/>
        <meta content="hackathon indonesia" name="keywords"/>
        {/* <meta content="hackathon competition 2021" name="keywords"/>
        <meta content="hackathon data science 2021" name="keywords"/>
        <meta content="hackathon event 2021" name="keywords"/>
        <meta content="hackathon fintech" name="keywords"/>

        <meta content="data science" name="keywords"/>
        <meta content="data science and analytics" name="keywords"/>
        <meta content="santri dan data science" name="keywords"/>
        <meta content="data science competition" name="keywords"/>
        <meta content="data science competition indonesia" name="keywords"/>
        <meta content="big data" name="keywords"/>
        <meta content="data warehouse" name="keywords"/>
        <meta content="machine learning" name="keywords"/>
        <meta content="artificial intelligence" name="keywords"/>

        <meta content="fintech competition" name="keywords"/>
        <meta content="fintech syariah" name="keywords"/>
        <meta content="fintech ecosystem" name="keywords"/> */}

        <meta content="Ini sebuah hackathon" name="description"/>

        <title>Hackathon Santri</title>

        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />

      </Head>

      <Component {...pageProps} />

      <style global jsx>{`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
    </Container>
  )
}

export default MyApp
