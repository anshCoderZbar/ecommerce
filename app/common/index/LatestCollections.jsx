import React from "react";
import { ProductCategories } from "components/Product-categories";

import { MenCategory } from "mock/categories/Men";

export const LatestCollection = () => {
  return <ProductCategories category={MenCategory} />;
};
