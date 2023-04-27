import { json } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

export async function getProducts() {
  const response = await fetch("http://localhost:3011/api/products");

  if (!response.ok) {
    const data = response;
    console.log(data);

    throw json(
      { message: "Could not fetch : " + response.url },
      {
        status: response.status,
        statusText: `${response.statusText}! ${`Cannot fetch ${response.url}`}`,
      }
    );
  } else {
    const data = await response.json();
    const products = await data.products;
    return products;
  }
}

export async function deleteProduct(id, navigate) {
  try {
    await axios.delete(`http://localhost:3011/api/products/${id}`);
    message.success("Delete Succes");
    navigate("/products");
  } catch (err) {
    console.log(err);
    if (err.response?.data.message) {
      message.error(err.response.data.message);
      return;
    }
    message.error(err.message, 1.5, () => {
      message.error(`Cannot fetch ${err.config.url}`, 5);
    });
  }
}

export const postProduct = async (newProduct, navigate) => {
  try {
    await axios.post(`http://localhost:3011/api/products`, newProduct);
    navigate("/products");
    message.success("Product saved");
  } catch (error) {
    console.log(error);
    // message.error("Failed Add Product");
    throw error;
  }
};

export const editProduct = async (idProduct, productBaru, navigate) => {
  try {
    console.log(productBaru);
    await axios.patch(
      `http://localhost:3011/api/products/${idProduct}`,
      productBaru
    );

    navigate("/products");
    message.success("succes");
  } catch (err) {
    // console.log(err);
    throw err;
  }
};
