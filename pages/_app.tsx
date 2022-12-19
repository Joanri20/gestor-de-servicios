import { ApolloProvider } from '@apollo/client';
import useApolloClient from 'hooks/useApolloClient';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  const { client } = useApolloClient();
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
