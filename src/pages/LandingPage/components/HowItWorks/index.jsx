import { Col, Image, Row } from "antd";
import React from "react";
import hiw1 from "../../../../assets/hiw1.png";
import hiw2 from "../../../../assets/hiw2.png";
import hiw3 from "../../../../assets/hiw3.png";
import styles from "./styles.module.less";

function HowItWorks() {
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>How it works</div>
      <div className={styles["description"]}>
        This is how our products works
      </div>
      <Row>
        <Col span={6} offset={1}>
          <Image src={hiw1} preview={false} />
          <div className={styles["item-title"]}>Find Car</div>
          <div className={styles["item-description"]}>
            Our cars are located at prime areas where by there won’t be problem
            with transportation
          </div>
        </Col>
        <Col span={6} offset={2}>
          <Image src={hiw2} preview={false} />
          <div className={styles["item-title"]}>Make payments</div>
          <div className={styles["item-description"]}>
            Our estates comes with good network,portable water , 24hrs light and
            round the clock security.
          </div>
        </Col>
        <Col span={7} offset={2}>
          <Image src={hiw3} preview={false} />
          <div className={styles["item-title"]}>Make it Official </div>
          <div className={styles["item-description"]}>
            We have been in business for over 32 years,for client outside the
            country you can trust us to deliver well.
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HowItWorks;
