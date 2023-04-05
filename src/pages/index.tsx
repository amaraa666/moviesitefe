import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Movies from '@/component/Movie'

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  return (
    <>
      <Movies />
    </>
  )
}
