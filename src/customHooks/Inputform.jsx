import React from 'react'
import { useForm } from "react-hook-form";
import { useCart } from './useCart';

const Inputform = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { cart, setCart } = useCart()

    const onSubmit = (data) => {
        setCart(data);
    };


    return (
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
                >
                    <h2 className="text-2xl font-bold text-center text-gray-700">Add Product</h2>

                    {/* ID */}
                    <div>
                        <input
                            type="number"
                            placeholder="Product ID"
                            {...register("id", { required: "ID is required" })}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.id && <p className="text-red-500 text-sm">{errors.id.message}</p>}
                    </div>

                    {/* Product Name */}
                    <div>
                        <input
                            type="text"
                            placeholder="Product Name"
                            {...register("productName", { required: "Product name is required" })}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.productName && <p className="text-red-500 text-sm">{errors.productName.message}</p>}
                    </div>

                    {/* Price */}
                    <div>
                        <input
                            type="number"
                            placeholder="Price"
                            {...register("price", { required: "Price is required", min: { value: 1, message: "Price must be greater than 0" } })}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                    </div>

                    {/* Description */}
                    <div>
                        <textarea
                            placeholder="Description"
                            rows={3}
                            {...register("description", { required: "Description is required" })}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        />
                        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                    </div>

                    {/* Image URL */}
                    <div>
                        <input
                            type="text"
                            placeholder="Image URL"
                            {...register("image", { required: "Image URL is required" })}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </>
    )
}

export default Inputform

