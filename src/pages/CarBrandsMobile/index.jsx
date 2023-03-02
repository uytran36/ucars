import React, { useState, useEffect } from "react";
import {
  NavBar,
  Space,
  Toast,
  Image,
  SearchBar,
  List,
  Checkbox,
} from "antd-mobile";
import { AddOutline, CloseOutline } from "antd-mobile-icons";
import searchIcon from "../../assets/search.svg";
import transfer from "../../assets/transfer.png";
import { getCarBrands } from "../../data/fakeAPI";
import styles from "./styles.module.less";
import AddBrand from "./AddBrand";

function CarBrandsMobile() {
  const [data, setData] = React.useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  useEffect(() => {
    async function getDataCarBrands() {
      const res = await getCarBrands();
      if (res?.status === 200) {
        setData(res?.data);
      }
    }

    getDataCarBrands();
  }, []);

  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ "--gap": "16px" }}>
        <AddOutline onClick={() => setIsAdd(true)} />
        <Image
          src={transfer}
          width={24}
          height={24}
          style={{ marginTop: 8 }}
          fit="fill"
        />
      </Space>
    </div>
  );

  return (
    <>
      {!isAdd ? (
        <>
          <NavBar  right={right} />
          <div style={{ margin: "0px 16px 0px 16px" }}>
            <div className={styles["header"]}>Car Brand List</div>
            <SearchBar
              icon={
                <Image src={searchIcon} width={12} height={12} fit="fill" />
              }
              placeholder="Search for car brand"
              onChange={(value) => setSearchValue(value)}
            />
            <List>
              {data
                .filter((item) => {
                  return item.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
                })
                .map((item) => (
                  <List.Item key={item.id} extra={<Checkbox />}>
                    <div className={styles["item-wrapper"]}>
                      <Image
                        src={item.logo}
                        width={48}
                        height={48}
                        style={{ marginRight: 16 }}
                        fit="fill"
                      />
                      <div>
                        <div className={styles["item-name"]}>{item.name}</div>
                        <div className={styles["item-models"]}>
                          {item.models}
                        </div>
                      </div>
                    </div>
                  </List.Item>
                ))}
            </List>
          </div>
        </>
      ) : (
        <AddBrand setIsAdd={setIsAdd} />
      )}
    </>
  );
}

export default CarBrandsMobile;
