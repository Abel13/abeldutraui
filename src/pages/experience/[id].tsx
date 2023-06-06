import { useRouter } from "next/router";
import React from "react";

const Product: React.FC = () => {
  const { query } = useRouter();
  return <h1>Produto {JSON.stringify(query)}</h1>;
};

export default Product;
