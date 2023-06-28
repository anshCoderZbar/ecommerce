export const BoyFilterData = [
  {
    id: 1,
    name: "Category",
    filters: [
      {
        id: 1,
        name: "Boys",
        slug: "boys",
      },
      {
        id: 2,
        name: "Girls",
        slug: "girls",
      },
    ],
  },
  {
    id: 2,
    name: "Age Group",
    filters: [
      {
        id: 1,
        name: "0-2 years",
        slug: "0-2",
      },
      {
        id: 2,
        name: "3-5 years",
        slug: "3-5",
      },
      {
        id: 3,
        name: "6-8 years",
        slug: "6-8",
      },
      {
        id: 4,
        name: "9-12 years",
        slug: "9-12",
      },
    ],
  },
  {
    id: 3,
    name: "Product Type",
    filters: [
      {
        id: 1,
        name: "T-shirt",
        slug: "t_shirt",
      },
      {
        id: 2,
        name: "Shirt",
        slug: "Shirt",
      },
      {
        id: 3,
        name: "Jeans",
        slug: "Jeans",
      },
      {
        id: 4,
        name: "Outerwear",
        slug: "outerwear",
      },
      {
        id: 5,
        name: "Shoes",
        slug: "shoes",
      },
      {
        id: 6,
        name: "Accessories",
        slug: "accessories",
      },
    ],
  },
  {
    id: 4,
    name: "Price Range",
    filters: [
      {
        name: "Under ₹50",
        minPrice: 0,
        maxPrice: 50,
        slug: "50",
      },
      {
        name: "₹50 - ₹100",
        minPrice: 50,
        maxPrice: 100,
        slug: "50-100",
      },
      {
        name: "₹100 - ₹200",
        minPrice: 100,
        maxPrice: 200,
        slug: "100-200",
      },
      {
        name: "Over ₹200",
        minPrice: 200,
        maxPrice: Infinity,
        slug: "200",
      },
    ],
  },
];
