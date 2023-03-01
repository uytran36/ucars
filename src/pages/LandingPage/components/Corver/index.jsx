import { Button } from "antd";
import React from "react";
import cover from "../../../../assets/cover.png";
import styles from "./styles.module.less";

function Cover() {
  return (
    <div
      className={styles["cover-wrapper"]}
      style={{
        backgroundImage: `url(${cover})`,
      }}
    >
      <div className={styles["cover-detail"]}>
        <div className={styles["cover-title"]}>Car Marketplace</div>
        <div className={styles["cover-description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer.
        </div>
        <Button className={styles["btn-start"]}>Get Started</Button>
      </div>
    </div>
  );
}

export default Cover;
