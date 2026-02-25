import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/PRODUCTS';
import ProductCard from '../components/ProductCard';
import { CustomButton } from '../components/CustomButton';
import Inputform from '../components/Inputform';

const ProductPage = () => {

    const nevigate = useNavigate();
    const [showForm, setshowForm] = useState(false);

    return (
        <>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="flex justify-between items-center gap-6 mb-10">
                    <h1 className="text-3xl font-bold">
                        Our Products
                    </h1>

                    <CustomButton
                        label="Add New Product"
                        className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold'
                        onClick={() => nevigate("/addnewproductform", setshowForm(true))}

                    />
                </div>
                {
                    showForm === true ? <Inputform /> : " "
                }

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