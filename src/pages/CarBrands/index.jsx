import { Button, Dropdown, Space, Input, Radio, Image, Row, Col } from "antd";
import React, { useState, useEffect } from "react";
import { PlusOutlined, DownOutlined, SearchOutlined } from "@ant-design/icons";
import styles from "./styles.module.less";
import { getCarBrands } from "../../data/fakeAPI";
import CarBrandItem from "./Components/CarBrandItem";
import AddModal from "./Components/AddModal";
import CarBrandDetail from "./Components/CarBrandDetail";

const items = [
  {
    key: "1",
    label: "All",
  },
  {
    key: "2",
    label: "Last Updated",
  },
  {
    key: "3",
    label: "Brand Name",
  },
  {
    key: "4",
    label: "Number of Models",
  },
];

function CarBrands() {
  const [selectedItem, setSelectedItem] = React.useState(items[0]);
  const [searchValue, setSearchValue] = React.useState("");
  const [data, setData] = React.useState([]);
  const [value, setValue] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClickDetail, setIsClickDetail] = useState(false);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    async function getDataCarBrands() {
      const res = await getCarBrands();
      if (res?.status === 200) {
        setData(res?.data);
      }
    }

    getDataCarBrands();
  }, []);

  const onClick = ({ key }) => {
    setSelectedItem(items.find((item) => item.key === key));
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      {!isClickDetail ? (
        <div className={styles["container"]}>
          <div className={styles["header"]}>
            <div className={styles["header-title"]}>
              <div>CAR BRANDS LIST</div>
              <Dropdown menu={{ items, onClick }}>
                <Space size={0}>
                  <DownOutlined style={{ marginRight: 17 }} />
                  <div>View {selectedItem.label}</div>
                </Space>
              </Dropdown>
              <Input
                placeholder="Search car brand"
                className={styles["search-input"]}
                onChange={(e) => setSearchValue(e.target.value)}
                prefix={<SearchOutlined />}
              />
            </div>

            <Button
              className={styles["add-btn"]}
              icon={<PlusOutlined />}
              onClick={() => setIsModalOpen(true)}
            >
              Add Brand
            </Button>
          </div>

          <div className={styles["content"]}>
            <Radio.Group
              style={{ width: "100%" }}
              onChange={onChange}
              value={value}
            >
              <Space style={{ width: "100%" }} direction="vertical">
                {data
                  .filter((item) => {
                    return item.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase());
                  })
                  .map((item, index) => (
                    <Radio value={item.id} style={{ width: "100%" }}>
                      <CarBrandItem
                        {...item}
                        isLast={index === data.length - 1}
                        setIsClickDetail={setIsClickDetail}
                        setDetail={setDetail}
                      />
                    </Radio>
                  ))}
              </Space>
            </Radio.Group>
          </div>
          <AddModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
      ) : (
        <div>
          <CarBrandDetail setIsClickDetail={setIsClickDetail} detail={detail} />
        </div>
      )}
    </>
  );
}

export default CarBrands;
