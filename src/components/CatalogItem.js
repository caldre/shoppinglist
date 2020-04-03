import React from "react";

const CatalogItem = (props) => {
  const { name, description, price } = props.value;

  return (
    <div className="catalog-item-wrapper">
      <div className="product-image" />
      <h3 className="catalog-item-header">{name}</h3>
      <br />
      <div className="catalog-item-description">{description}</div>
      <br />
      <div className="catalog-item-price">{price}€</div>
    </div>
  );
};

export default CatalogItem;
