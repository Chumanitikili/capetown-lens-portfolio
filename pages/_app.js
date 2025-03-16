import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Add any client-side initialization here
    console.log('App mounted');
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

// Add error handling
MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    try {
      pageProps = await Component.getInitialProps(ctx);
    } catch (error) {
      console.error('Error in getInitialProps:', error);
      // Handle error appropriately
    }
  }

  return { pageProps };
};

export default MyApp; 