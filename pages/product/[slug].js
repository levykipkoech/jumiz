// pages/product/[slug].js

import Display from '@/components/Display';
import data from '@/utils/data';
import { useRouter } from 'next/router';
import React from 'react';


export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Display title={product.name}>
      <h1>{product.name}</h1>
    </Display>
  );
}
