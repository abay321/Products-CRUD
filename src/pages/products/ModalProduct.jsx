import { Modal, Input, Select, Image } from "antd";
import * as HiIcons from "react-icons/hi";
function ModalProduct({
  isModalOpen,
  handleOk,
  handleCancel,
  name,
  price,
  quantity,
  images,
  category,
  setName,
  setPrice,
  setQuantity,
  setImages,
  setCategory,
}) {
  return (
    <Modal
      open={isModalOpen}
      onOk={(id) => handleOk(id)}
      onCancel={handleCancel}
      closable={false}
    >
      <form className="form">
        <Input
          className="input-name"
          type="text"
          size="large"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          addonBefore={<HiIcons.HiTemplate />}
        />
        <Input
          className="input-price"
          type="number"
          size="large"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          addonBefore={<HiIcons.HiCurrencyDollar />}
        />
        <Input
          className="input-quanity"
          type="number"
          size="large"
          placeholder="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          addonBefore={<HiIcons.HiShoppingCart />}
        />
        <div style={{ display: "flex", gap: "1rem" }}>
          <Input
            className="input-images"
            type="url"
            size="large"
            placeholder="image"
            value={images}
            onChange={(e) => setImages(e.target.value)}
            addonBefore={<HiIcons.HiPhotograph />}
          />
          <Image src={images} width={200} />
        </div>
        <Select
          showSearch
          value={category ? category : "Category"}
          onChange={(value) => setCategory(value)}
          options={[
            {
              value: "handphone",
              label: "Handphone",
            },
            {
              value: "pc",
              label: "Pc",
            },
            {
              value: "tablet",
              label: "Tablet",
            },
          ]}
        />{" "}
      </form>
    </Modal>
  );
}

export default ModalProduct;
