import React from 'react'
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/PRODUCTS';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-8">
                <h1 className="text-3xl font-bold text-center mb-10">
                    Our Products
                </h1>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {PRODUCTS.map((product, index) => (
                        <Link to={`/product/${index}`} key={product.id}>
                            <ProductCard key={product.id} product={product} />
                        </Link>
                    ))}
                </div>

            </div >
            <div>prodcut page...</div>
        </>

    )
}

export default ProductPage