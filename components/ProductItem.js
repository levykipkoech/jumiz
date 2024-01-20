/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image';
'use client'
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        
          <img
            src={product.image}
            width={640}
            height={480}
            alt={product.name}
            className="rounded shadow cursor-pointer"
          />
        
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          
            {product.name}
          
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button className="primary-button" type="button">
          add to cart
        </button>
      </div>
    </div>
  );
}
