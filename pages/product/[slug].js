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
  const product = data.products.find(x => x.slug === slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    
      <Display title={product.name}>
        <div>
          <Link href="/">back to products</Link>
        </div>
        <div className="grid md:grid-cols-4 md:gap-3">
          <div className="md:span-2 ">
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={640}
              priority
            />
          </div>
        </div>
      </Display>
    
  );
}
