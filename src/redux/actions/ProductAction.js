import StoreApi from "../../apis/StoreApi";
import { ActionTypes } from "../constants/action-types";

export const fetchProduct = () => {
  return async function (dispatch, getState) {
    const response = await StoreApi.get("/products");
    console.log({ response });
    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: response.data,
    });
  };
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
