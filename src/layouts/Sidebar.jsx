import React, { useState } from "react";
import { Menu, Image, Divider, Button } from "antd";
import Icon, {
  InfoCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import logo from "../assets/logo.svg";
import styles from "./sidebar.module.less";
import CarSvg from "../assets/CarSvg";
import CalendarSvg from "../assets/CalendarSvg.jsx";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const CarIcon = (props) => <Icon component={CarSvg} {...props} />;
const CalendarIcon = (props) => <Icon component={CalendarSvg} {...props} />;

function Sidebar({ collapsed, setCollapsed }) {
  const [current, setCurrent] = useState("brand");
  const [isClickedSetting, setIsClickedSetting] = useState(false);

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    setIsClickedSetting(false);
  };

  const items = [
    {
      label: "Car Brand",
      key: "brand",
      icon: <CarIcon />,
      style: { padding: "0px" },
    },

    getItem(
      <div style={{ marginLe: 10 }}>Folder</div>,
      "folder",
      <CalendarIcon />,
      Array.from([1, 2, 3, 4]).map((item) => getItem(`Menu Item`, item))
    ),
    {
      label: "Tasks",
      key: "tasks",
      icon: <CalendarIcon />,
      style: { padding: "0px" },
    },
    {
      label: "Modules",
      key: "modules",
      icon: <CalendarIcon />,
      style: { padding: "0px" },
    },
    {
      label: "Notification",
      key: "noti",
      icon: <CalendarIcon />,
      style: { padding: "0px" },
    },
  ];

  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar-menu"]}>
        <div className={styles["sidebar-header"]}>
          {!collapsed && <Image src={logo} width={102} preview={false} />}
          {!collapsed ? (
            <MenuFoldOutlined
              className={styles["collapse-icon"]}
              onClick={() => setCollapsed(true)}
            />
          ) : (
            <MenuUnfoldOutlined
              className={styles["collapse-icon"]}
              onClick={() => setCollapsed(false)}
            />
          )}
        </div>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="inline"
          items={items}
          className={styles[`menu${collapsed ? "-collapsed" : ""}`]}
        />
      </div>

      <div>
        <Divider className={styles[`divider${collapsed ? "-collapsed" : ""}`]} />
        <div
          className={styles[`setting-btn${isClickedSetting ? "-active" : ""}`]}
          onClick={() => {
            setIsClickedSetting(!isClickedSetting);
            setCurrent("");
          }}
        >
          <SettingOutlined />
          {!collapsed && <span>Setting</span>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
