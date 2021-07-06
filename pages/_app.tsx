import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Web3ReactProvider, useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { useEagerConnect, useInactiveListener } from '../hooks/hooks';

function getLibrary(provider, connector) {
  // return new ethers.providers.Web3Provider(window.ethereum); // this will vary according to whether you use e.g. ethers or web3.js
  const library = new Web3Provider(provider);
  library.pollingInterval = 120000;
  return library;
}

function MyApp({ Component, pageProps }: AppProps) {
  const context = useWeb3React<Web3Provider>();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>();
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}
export default MyApp;
