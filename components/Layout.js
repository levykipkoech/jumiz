import Head from 'next/head';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '- Jumiz':'Jumiz'}</title>
        <meta name="description" content="Ecommerce website"></meta>
        <link rel="icon" href="flavicon.ico"></link>
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>header</header>
        <main>{children}</main>
        <footer>footer </footer>
      </div>
    </>
  );
}
