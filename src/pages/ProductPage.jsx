import React from 'react'
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';


const PRODUCTS = [
    {
        id: 1,
        title: "iPhone 15",
        price: 79999,
        category: "Electronics",
        // image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
        rating: 4.6,
        description: "Latest Apple smartphone with A16 chip."
    },
    {
        id: 2,
        title: "Nike Air Max",
        price: 4999,
        category: "Footwear",
        // image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        rating: 4.3,
        description: "Comfortable and stylish running shoes."
    },
    {
        id: 3,
        title: "MacBook Air M4",
        price: 114999,
        category: "Electronics",
        // image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        rating: 4.8,
        description: "Lightweight laptop with powerful M4 chip."
    },
    {
        id: 4,
        title: "Samsung 4K TV",
        price: 55999,
        category: "Electronics",
        // image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
        rating: 4.4,
        description: "Ultra HD Smart TV with vibrant display."
    }
]
const ProductPage = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-8">
                <h1 className="text-3xl font-bold text-center mb-10">
                    Our Products
                </h1>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {PRODUCTS.map((product, index) => (
                        <Link to={`/product/${index}`}>
                            <ProductCard key={product.id} product={product} />
                        </Link>
                    ))}
                </div>

            </div >
        </>

    )
}

export default ProductPage