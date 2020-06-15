// import App from 'next/app'
import Head from 'next/head';
import '../components/Header/Header.scss';
import '../components/About/About.scss';
import '../components/InfoCard/InfoCard.scss';
import '../theme/main.scss';

function MyApp({ Component, pageProps }) {
    return (
      <>
        <Head>
          <title>Kevin's portfolio</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
    /* MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps }
  }*/ 
  
  export default MyApp
  