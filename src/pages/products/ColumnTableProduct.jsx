import { Button, Image } from "antd";
import * as AiIcons from "react-icons/ai";
import TableProduct from "./TableProduct";

function ColumnTableProduct({ products, deleteHandler, showModal,error }) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      align: "center",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "center",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      align: "center",
    },
    {
      title: "Image",
      key: "image",
      dataIndex: "image",
      align: "center",
      render: (url) => <Image src={url} height={50} />,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            danger
            onClick={() => {
              deleteHandler(record.id);
            }}
          >
            <AiIcons.AiOutlineDelete />
          </Button>
          <Button
            type="primary"
            onClick={() => {
              showModal(record.id);
            }}
          >
            <AiIcons.AiOutlineEdit />
          </Button>
        </>
      ),
    },
  ];

  return <TableProduct columns={columns} products={products} error={error} showModal={showModal}/>;
}

export default ColumnTableProduct;
