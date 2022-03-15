import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetail, selectedProduct } from "../redux/actions/ProductAction";

const ProductDeatils = () => {
  const { productId}  = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
  dispatch(ProductDetail(productId))
  },[]);
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  return (
    <div>
      <div className="ui grid container">
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img
                  className="ui fluid image"
                  src={image}
                  alt="productimg"
                  width="70px"
                  height="60px"
                />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <p className="ui teal tag label">${price}</p>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeatils;
