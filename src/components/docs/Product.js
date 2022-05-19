import React from "react";

function Product(props) {
  return (
    <div>
      <div className="product">
        <img src={props.image} alt="" />
        <h4>{props.title}</h4>
        <p>{props.textDetail}</p>
        <button>GET IT </button>
      </div>
    </div>
  );
}

export default Product;
