import React from "react";
import { DownOutlined } from "@ant-design/icons";
import styles from "./styles.module.less";

function Status({ status, disable }) {
  return (
    <div className={styles[`status-wrapper-${status}`]}>
      <input type="radio" checked className={styles[`radio-${status}`]} />
      <span className={styles[`status-${status}`]}>{status}</span>
      {!disable && (
        <span className={styles[`icon-${status}`]}>
          <DownOutlined />
        </span>
      )}
    </div>
  );
}

export default Status;
