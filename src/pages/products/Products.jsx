import { useState } from "react";
import {
  defer,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { message, Spin } from "antd";
import {
  deleteProduct,
  editProduct,
  getProducts,
  postProduct,
} from "../../utils/api";

import axios from "axios";
import sx from "./Products.module.css";
import ModalProduct from "./ModalProduct";
import ColumnTableProduct from "./ColumnTableProduct";

function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idProduct, setIdProduct] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [images, setImages] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);

  const data = useLoaderData();
  const products = data.products;
  const navigate = useNavigate();
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  async function errorMessage() {
    try {
      const data = await useLoaderData();
      const product = await data.products;
      return product;
    } catch (error) {
      setError(`Error ${error.status} : ${error.statusText}`);
    }
  }
  errorMessage();

  // myfuncGETPRODUCT
  async function getProduct(id) {
    try {
      const response = await axios.get(
        `http://localhost:3011/api/products/${id}`
      );
      setIdProduct(response.data.id);
      setName(response.data.name);
      setPrice(response.data.price);
      setQuantity(response.data.quantity);
      setImages(response.data.image);
      setCategory(response.data.category.name);
    } catch (err) {
      console.log(err);
      return;
    }
  }

  // myfuncDELETEPRODUCT
  function deleteHandler(id) {
    deleteProduct(id, navigate);
  }

  // myfuncSHOWMODAL
  const showModal = (id) => {
    if (id.length) {
      getProduct(id);
    }
    setIsModalOpen(true);
  };

  // myfuncHANDLEOK
  async function handleOk(event) {
    event.preventDefault();

    const product = {
      name,
      price: +price,
      quantity: +quantity,
      image: images,
      category: {
        name: category,
      },
    };

    console.log(idProduct);
    if (idProduct) {
      try {
        await editProduct(idProduct, product, navigate); // myfuncPATCH
        setIdProduct("");
        setName("");
        setPrice("");
        setQuantity("");
        setImages("");
        setCategory("");
        setIsModalOpen(false);
        return;
      } catch (err) {
        message.error(err.response.data.errors);
        return;
      }
    } else {
      try {
        await postProduct(product, navigate); // myfuncPOSTPRODUCT
        setIdProduct("");
        setName("");
        setPrice("");
        setQuantity("");
        setImages("");
        setCategory("");
        setIsModalOpen(false);
        return;
      } catch (err) {
        console.log(err);
        message.error(err.response.data.errors);
        return;
      }
    }
  }

  const handleCancel = () => {
    setIsModalOpen(false);
    setIdProduct("");
    setName("");
    setPrice("");
    setQuantity("");
    setImages("");
    setCategory("");
  };

  return (
    <>
      {loading ? (
        <div className={sx.tableProducts}>
          <Spin
            size="large"
            style={{
              marginTop: "9rem",
            }}
          />
        </div>
      ) : (
        <div className={sx.tableProducts}>
          <button className={sx.newProduct} onClick={showModal}>
            Add Product
          </button>
          <ColumnTableProduct
            products={products}
            deleteHandler={deleteHandler}
            showModal={showModal}
            error={error}
          />
          <ModalProduct
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
            name={name}
            price={price}
            quantity={quantity}
            images={images}
            category={category}
            setName={setName}
            setPrice={setPrice}
            setQuantity={setQuantity}
            setImages={setImages}
            setCategory={setCategory}
          />
        </div>
      )}
    </>
  );
}

export default ProductsPage;

export async function loader() {
  return defer({ products: getProducts() });
}
