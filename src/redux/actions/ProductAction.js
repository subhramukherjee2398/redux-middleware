import StoreApi from "../../apis/StoreApi";
import { ActionTypes } from "../constants/action-types";

export const fetchProduct = () => async (dispatch) => {
  const response = await StoreApi.get("/products");
  dispatch({
    type: ActionTypes.FETCH_PRODUCTS,
    payload: response.data,
  });
};

export const ProductDetail = (id) => async (dispatch) => {
  const response = await StoreApi.get(`/products/${id}`);
  console.log("call");
  dispatch({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: response.data,
  });
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
