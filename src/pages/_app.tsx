import '../styles/app.css';
import type { AppProps } from 'next/app';
import ContextWrapper from "../context/ContextWrapper";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ContextWrapper>
  <Component {...pageProps} />
  </ContextWrapper>
);

export default MyApp;
