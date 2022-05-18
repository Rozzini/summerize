import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from "react-moralis";

const serverUrl = "https://7vdeu3klidts.usemoralis.com:2053/server" //process.env.NEXT_PUBLIC_SERVER_URL;
const appId = "bZtfqtoCFfTVJYqyigsAcXZ3kyYo4P08mAtjmH9b" //process.env.NEXT_PUBLIC_APP_ID;
// Moralis.start({serverUrl,appId})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider serverUrl={serverUrl} appId={appId}>
      <Component {...pageProps} />
     </MoralisProvider>
  );
}

export default MyApp