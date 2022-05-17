import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return <MoralisProvider
  appId="ehC5qObt2WNQgS9sP648NxGuWa9XxR1QzvdjCqHO"
  serverUrl="https://rf8u4jlyyr1s.usemoralis.com:2053/server">
  
  <Component {...pageProps} />

 </MoralisProvider>
}

export default MyApp
