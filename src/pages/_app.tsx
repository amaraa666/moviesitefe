import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';
import { Layout } from '@/component/Layout';
import { MySearchText } from '@/component/useContext';


export interface IMovieFilter {
    isFiltered: Boolean;
    searchText: any
};

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const Obj: any = {
      isFiltered: false,
      searchText: "",
  }
  const [myVal, setMyVal] = useState<IMovieFilter>(Obj)


  return (
    <>
      <MySearchText.Provider value={{ myVal, setMyVal }} >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MySearchText.Provider>
    </>
  );
}
