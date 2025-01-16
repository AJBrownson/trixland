'use client';

import ProductTable from "components/admin/products/product-table"

const Products = () => {
  return (
    <div className="mt-5">
    <div className="flex justify-end mb-4">
    <button className="rounded-lg bg-brand-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
               Add Products
       </button>
    </div>

    <ProductTable />
    </div>
  );
};

export default Products;
