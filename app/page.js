import React from 'react';
import Display from '@/components/Display';
import ProductItem from '@/components/ProductItem';
import data from '@/utils/data';
import Head from 'next/head';

export default function Home({title}) {
  return (
    <section>
       <Head>
        <title>{`${title ? title + '-' : ''}Jumiz`}</title>
        <meta name="description" content="ecommerce website" />
        <link rel="icon" href="/flavi.ico" />
      </Head>
    <Display title='home page'>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </Display>
    </section>
  );
}
