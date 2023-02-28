import React, { useState } from "react";
import { Menu, Avatar } from "antd";
import {
  InfoCircleOutlined,
  BellOutlined,
  DownOutlined,
} from "@ant-design/icons";
import styles from "./header.module.less";

function Header() {
  const [current, setCurrent] = useState("info");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items = [
    {
      key: "info",
      icon: <InfoCircleOutlined style={{ fontSize: 21 }} />,
      style: { padding: "0px", marginRight: "21px" },
    },
    {
      key: "noti",
      icon: <BellOutlined style={{ fontSize: 21 }} />,
      style: { padding: "0px", marginRight: "20px" },
    },
    {
      label: (
        <div style={{ border: "none" }}>
          <Avatar src={""} />
          <span className={styles["username"]}>Admin</span>
          <DownOutlined className={styles["username-icon"]} />
        </div>
      ),
      key: "user",
      style: { padding: "0px", marginRight: "28px" },
    },
  ];

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{ justifyContent: "flex-end" }}
      className={styles["header"]}
    />
  );
}

export default Header;
