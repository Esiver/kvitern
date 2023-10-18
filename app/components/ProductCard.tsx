
import React from 'react'
import AddToCart from './AddToCart'

const ProductCard = () => {
  return (
    <div className='product__card block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
        <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Product Name
        </h2>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sunt ab error laudantium deserunt ea natus, porro soluta maiores quos. Saepe tempora minima voluptate accusantium quos excepturi minus blanditiis corrupti!
        </p>
        <AddToCart>
            Add to Cart!
        </AddToCart>

    </div>
  )
}

export default ProductCard