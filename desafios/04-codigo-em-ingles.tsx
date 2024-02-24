// Código em inglês
// https://efficient-sloth-d85.notion.site/Desafio-C-digo-em-ingl-s-ed988aa9dbf747a996d81b894327dfbd

import { useState } from "react";

interface Product {
  title: string;
  price: string;
}

const productsList = [
  {
    title: "Macarrão",
    price: "R$ 25,00",
  },
  {
    title: "Hamburger",
    price: "R$ 30,00",
  },
];

export function ProductsList() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  function searchProduct(search: string) {
    const filteredProduct = productsList.filter((product) =>
      product.title.includes(search)
    );

    setFilteredProducts(filteredProduct);
  }

  return (
    <div>
      <input type="text" onChange={(e) => searchProduct(e.target.value)} />

      {filteredProducts.map((product) => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
