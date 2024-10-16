"use client";

import { Cart } from "../context/cartContext";
import Image from "next/image";
import { useCart } from "../context/cartContext";
import Link from "next/link";
import Popup from "./popup";
import { useState } from "react";

export default function SingleProductCard({ product }: { product: Cart }) {
  const { addToCart } = useCart(); 
  const [isPopUpVisible , setIsPopUpVisible] = useState(false)
  const handleCart = ()=>{
    addToCart(product)
    setIsPopUpVisible(true)
  }

  return (
    <div className="bg-bg min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-y-4 md:flex-row items-center bg-blue-800/10 justify-center mt-10 shadow-2xl rounded-xl md:w-3/4 p-6">
        <div className="md:w-4/5 flex justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={0}
            className="rounded-md h-auto max-h-[350px] md:max-h-[400px] md:w-5/6 object-cover shadow-2xl md:hover:shadow-red-300 transition-transform hover:scale-105"
          />
        </div>
        <div className="md:w-4/6 md:ml-4">
          <h2 className="text-xl font-semibold"> {product.title}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-lg font-bold mt-4">Price ${product.price}</p>
          <div className="flex gap-4"><button
            className="flex items-center justify-center mt-6 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700"
            onClick={handleCart}
          >
            Add to Cart
          </button>
          <Link href={"/product"}><button
            className="flex items-center justify-center mt-6 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700"
            
          >
            Continue Shopping
          </button></Link>
          </div>
          {isPopUpVisible && (
            <Popup 
            message="Your item has been placed in the cart"
            onClose={()=>{setIsPopUpVisible(false)}}/>
          )}
          
        </div>
      </div>
    </div>
  );
}
