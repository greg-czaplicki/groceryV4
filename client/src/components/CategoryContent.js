import React from "react";

import Item from "./Item";

const CategoryContent = ({ items, category }) => {
  const renderItems = () => {
    if (!items) return <p>Loading...</p>;
    return items.map(item => <Item item={item} key={item._id} />);
  };

  const renderCategoryName = () => {
    if (items.length > 0) return <h3>{category.name}</h3>;
  };

  return (
    <div>
      {renderCategoryName()}
      {renderItems()}
    </div>
  );
};

export default CategoryContent;
