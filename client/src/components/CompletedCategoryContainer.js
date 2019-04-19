import React from "react";
import { connect } from "react-redux";
import CompletedCategory from "./CompletedCategory";

const CompletedCategoryContainer = ({ categories, isLoading }) => {
  const renderCategories = () => {
    if (isLoading) return <h3>Loading...</h3>;

    return categories.map(category => (
      <CompletedCategory category={category} key={category._id} />
    ));
  };
  return (
    //! REMOVE STYLES
    <div style={{ marginBottom: 60, padding: 20 }}>{renderCategories()}</div>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categories.payload,
    isLoading: state.categories.isLoading
  };
};

export default connect(mapStateToProps)(CompletedCategoryContainer);
