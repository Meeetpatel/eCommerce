import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RElatedProduct/RelatedProduct';

const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams();
  const product =all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}></Breadcrum>
      <ProductDisplay product={product}></ProductDisplay>
      <DescriptionBox></DescriptionBox> 
      <RelatedProduct></RelatedProduct> 
      </div>
  )
}

export default Product
