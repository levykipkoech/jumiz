import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '-Jumiz' : 'Jumiz'}</title>
        <meta name="description" content="ecommerce website"/>
        <link rel="icon" href="/flavi.ico"/>
      </Head>
      <div className='flex min-h-screen flex-col justify-between'>
        <header>
            <nav className='flex h-12 justify'>
                <Link href='/'>
                    <a className='text-lg font-bold'>jumiz</a>
                </Link>
                <div>
                    <Link href='/cart'>Cart</Link>
                    <Link href='/login'>Login</Link>
                </div>
            </nav>
        </header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
}
