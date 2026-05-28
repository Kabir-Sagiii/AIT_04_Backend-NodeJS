import React from "react";
import axios from "axios";
const post_url = "http://localhost:3000/api/user/user";
const url = "http://localhost:3000/api/product/products";
function Products() {
  const getProductsBasedOnCategory = () => {
    axios
      .get(url, {
        params: {
          //Define Query Parameters as propertis
          category: "electronics",
          rating: 4.5,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addUser = () => {
    axios
      .post(
        post_url,
        { name: "s1" },
        {
          params: {
            city: "Delhi",
          },
        },
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Products Component</h1> <br />
      <button
        style={{ padding: "13px 20px" }}
        onClick={getProductsBasedOnCategory}
      >
        Send Get Request with Query Params
      </button>
      <button style={{ padding: "13px 20px" }} onClick={addUser}>
        Send Post Request with Query Params
      </button>
    </div>
  );
}

export default Products;
