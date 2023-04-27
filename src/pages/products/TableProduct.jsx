import { Await } from "react-router-dom";
import { Suspense } from "react";
import { Table, Empty, Spin, Button } from "antd";
import * as AiIcons from "react-icons/ai";
import sx from "./Products.module.css";

function TableProduct({ products, columns, error, showModal }) {
  const emptyText = (
    <div>
      <Empty
        imageStyle={{ height: "3rem" }}
        image={
          <AiIcons.AiOutlineSmile
            style={{ fontSize: "40px", color: "black" }}
          />
        }
        description={
          <div className={sx.empty}>
            <h4>Data not found</h4>
            <Button
              onClick={showModal}
              type="primary"
              className={sx.addNewTable}
              style={{
                backgroundColor: "#C37D24",
              }}
            >
              Add New Product
            </Button>
          </div>
        }
      />
    </div>
  );

  return (
    <div>
      <Suspense
        fallback={
          <Spin
            size="large"
            style={{ textAlign: "center", marginTop: "6rem" }}
          />
        }
      >
        <Await resolve={products} errorElement={<p style={{
          color: 'white', 
          textAlign: 'center'
        }}>{error}</p>}>
          {(loadedProducts) => (
            <>
              <Table
                pagination={false}
                className="tablee"
                columns={columns}
                dataSource={loadedProducts.map((product) => {
                  return {
                    key: product.id,
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: product.quantity,
                    image: product.image,
                    category:
                      product.category.name.substring(0, 1).toUpperCase() +
                      product.category.name.substring(1).toLowerCase(),
                  };
                })}
                locale={{
                  emptyText: emptyText,
                }}
              />
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export default TableProduct;
