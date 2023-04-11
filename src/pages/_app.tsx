import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';
import { Layout } from '@/component/Layout';
import { MySearchText } from '@/component/useContext';


export interface IMovieFilter {
  filter: {
    isFiltered: Boolean;
    searchText: any
    rated: number
  }
}
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const Obj: any = {
    filter: {
      isFiltered: false,
      searchText: "",
    }
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
