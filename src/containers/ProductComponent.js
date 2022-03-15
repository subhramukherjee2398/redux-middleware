import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  const renderList = products.map((ele) => {
    const { id, title, image, price, category } = ele;
    return (
      <div className="four wide column" key={id}>
          <Link to={`/product/${id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} width="50px" height="50px" />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
}

export default ProductComponent;
