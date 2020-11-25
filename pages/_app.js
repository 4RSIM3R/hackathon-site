import '../styles/globals.css'
import { appWithTranslation } from '../i18n'

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  
  return {
    pageProps
  }
}

export default appWithTranslation(MyApp)
