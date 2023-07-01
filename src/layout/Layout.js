import Head from 'next/head'
import React from 'react'
import { Container } from './LayoutStyles'

export const Layout = ({title, children}) => {
  return (
    <>
    <Head>
      <title>{title ? title + "- Tamjid Mostafa" : "Tamjid Mostafa"}</title>
      <meta name='description' content='Portfolio Website'/>
      <link rel='icon' href='/favicon.ico'/>
    </Head>
    <Container>
     <main>{children}</main> 
    </Container>
    </>
  )
}
