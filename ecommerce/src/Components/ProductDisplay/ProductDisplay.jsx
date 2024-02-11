import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}= props;
    const {addtocart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
        </div>
        <div className="productdisplay-img">
            <img className="productdisplay-main-img" src={product.image} alt=""/>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt=""></img>
                <img src={star_icon} alt=""></img>
                <img src={star_icon} alt=""></img>
                <img src={star_icon} alt=""></img>
                <img src={star_dull_icon} alt=""></img>
                <p>(125)</p>
            </div>
        <div className="productdisplay-right-prices">
        <div className="product-display-right-price-new">
                ${product.new_price}
            </div>
            <div className="product-display-right-price-old">
                ${product.old_price}
            </div>
           
        </div>
        <div className="productdisplay-right-description">
        Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse" is crafted from a lightweight and breathable fabric blend, ensuring both comfort and style. The material composition may include a mix of cotton and polyester, providing a soft feel against the skin with a hint of stretch for a flattering fit. The striped pattern adds a touch of sophistication, while the flutter sleeves, overlap collar, and peplum hem contribute to a chic and trendy aesthetic.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addtocart(product.id)}}>Add To CART</button>
        <p className="productdisplay-right-category"><span>Category :</span>Women , T-shirt , Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
