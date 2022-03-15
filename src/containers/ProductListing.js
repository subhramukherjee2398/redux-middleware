import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {setProducts}  from "../redux/actions/ProductAction";
import ProductComponent from "./ProductComponent";

function ProductListing() {
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent/>
    </div>
  );
}

export default ProductListing;
