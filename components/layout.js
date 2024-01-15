import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '-Jumiz' : 'Jumiz'}</title>
        <meta name="description" content="ecommerce website" />
        <link rel="icon" href="/flavi.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between px-4 shadow-md items-center">
            <Link href="/" className="text-lg font-bold">
              jumiz
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                cart
              </Link>
              <Link href="/login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className='flex h-10 shadow-inner justify-center items-center'>copyright @ 2024 jumiz</footer>
      </div>
    </>
  );
}
