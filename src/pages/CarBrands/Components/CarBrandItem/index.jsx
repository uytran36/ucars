import { Button, Image, Row, Col } from "antd";
import React from "react";
import styles from "./styles.module.less";

function CarBrandItem({
  id,
  logo,
  name,
  description,
  models,
  updated,
  status,
  isLast,
  setIsClickDetail,
  setDetail,
}) {
  return (
    <Row className={styles[`brand-item-wrapper${isLast ? "-last" : ""}`]}>
      <Col span={3} style={{ textAlign: "center" }}>
        <Image src={logo} width={64} height={64} preview={false} />
      </Col>
      <Col span={11} className={`${styles["brand-info"]} ${styles[status]}`}>
        <div className={styles["brand-name"]}>{name}</div>
        <div className={styles["brand-description"]}>
          <div>{description}</div>
          <div>{models} Models</div>
        </div>
      </Col>
      <Col span={4} className={styles["brand-last-update"]}>
        <div>Last Update</div>
        <div>{updated}</div>
      </Col>
      <Col span={3}>
        <div className={styles["brand-status"]}>
          <div className={styles[`circle-${status}`]} />
          <div className={styles[`status-${status}`]}>{status}</div>
        </div>
      </Col>
      <Col span={3}>
        <Button
          className={styles["detail-btn"]}
          onClick={() => {
            setIsClickDetail(true);
            setDetail({
              id,
              logo,
              name,
              description,
              models,
              updated,
              status,
            });
          }}
        >
          View Details
        </Button>
      </Col>
    </Row>
  );
}

export default CarBrandItem;
