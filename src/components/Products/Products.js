import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './products.css';

const Products = () => {
  return (
    <>
      <div className='d-flex align-items-center justify-content-between productButtonCOntainer'>
        <Link to={''}>
          <button className='add-product'>All Products</button>
        </Link>
        <Link to={'categories'}>
          <button className='add-product' as={Link} to={'categories'}>
            Categories
          </button>
        </Link>
        <Link to={'inventory'}>
          <button className='add-product' as={Link} to={'inventory'}>
            Inventories
          </button>
        </Link>
      </div>
      <div className='mt-5 d-flex align-items-center justify-content-between'>
        <input
          type='search'
          className='form-control searchBar'
          placeholder='Search Products..'
        />
        <button className='add-product'>Add Product</button>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Products;
<h2>Products</h2>;
