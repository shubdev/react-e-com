import React from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../data/PRODUCTS';
const Product = () => {
    const params = useParams();
    const product = PRODUCTS[params.productId]
    return (
        <>
            <div>
                {product.title}
            </div>

        </>
    )
}

export default Product