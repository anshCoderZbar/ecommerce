export const WomenFilterData = [
  {
    id: 1,
    name: "Category",
    filters: [
      {
        id: 1,
        name: "Dresses",
        slug: "dresses",
      },
      {
        id: 2,
        name: "Tops",
        slug: "tops",
      },
      {
        id: 3,
        name: "Bottoms",
        slug: "bottoms",
      },
      {
        id: 4,
        name: "Outerwear",
        slug: "outerwear",
      },
      {
        id: 5,
        name: "Activewear",
        slug: "activewear",
      },
      {
        id: 6,
        name: "Accessories",
        slug: "accessories",
      },
    ],
  },
  {
    id: 2,
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
