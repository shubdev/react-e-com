import React from 'react'
import { CustomButton } from './CustomButton';
import { useCart } from '../customHooks/useCart';

const ProductCard = ({ product }) => {
    // product = { title, price, category, rating, description, image }
    // console.log("prod", product);

    const { cart, addToCart } = useCart()

    return (
        <>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-72">

                {/* Image + Category */}
                <div className="relative">
                    <img src={product.image} alt={"image"} className="w-full h-48 object-cover" />
                    <span className="absolute top-3 left-3 bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full capitalize">
                        {product.category}
                    </span>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col gap-2">
                    <h2 className="text-gray-800 font-bold text-lg line-clamp-1">{product.title}</h2>
                    <p className="text-gray-400 text-sm line-clamp-2">{product.description}</p>
                    <span className="text-yellow-500 text-sm">⭐ {product.rating} / 5.0</span>

                    {/* Price + Button */}
                    <div className="flex items-center justify-between mt-2">
                        <p className="text-indigo-600 font-bold text-xl">${product.price}</p>

                        <CustomButton
                            label={"Add to Cart 🛒"}

                            className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200"
                        />

                    </div>
                </div>

            </div>

        </>
    )
}

export default ProductCard