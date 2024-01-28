import Display from '@/components/Display';
import data from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function ProductScreen() {
  const router = useRouter();
  const { query } = router;
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Display title={product.name}>
      <div>
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            priority
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>catagory: {product.category}</li>
            <li>Brand :{product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div className="card p-5">
          <div className="mb-2 flex justify-between">
            <div>price</div>
            <div>${product.price}</div>
          </div>
          <div className="mb-2 flex justify-between">
            <div>status</div>
            <div>{product.countInStock > 0 ? 'in stock' : 'unavailable'}</div>
          </div>
          <button className='primary-button w-full'>add to cart</button>
        </div>
      </div>
    </Display>
  );
}
