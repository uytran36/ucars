import { Button, Col, Image, Row } from "antd";
import React from "react";
import location from "../../assets/location.svg";
import email from "../../assets/email.svg";
import phone from "../../assets/phone.svg";
import logo from "../..//assets/logo.svg";
import styles from "./header.module.less";

function Header() {
  return (
    <div>
      <Row className={styles["info-row"]}>
        <Col span={5}>
          <div className={styles["location"]}>
            <Image src={location} preview={false} />
            <div>71 Ayer Rajah Crescent, #06-14, Singapore 139951</div>
          </div>
        </Col>
        <Col span={4} className={styles["email-col"]}>
          <div className={styles["email"]}>
            <Image src={email} preview={false} />
            <div>Email us at: hello@carbuyer.com.sg</div>
          </div>
        </Col>
        <Col span={3} offset={12}>
          <div className={styles["phone"]}>
            <Image src={phone} preview={false} />
            <div>
              <div>+65 8808 7905</div>
              <div>+7 (700) 51 51 518</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className={styles["menu-row"]}>
        <Col span={8}>
          <a>
            <Image src={logo} preview={false} height={38} />
          </a>
        </Col>
        <Col span={8}>
          <Row className={styles["options"]}>
            <Col span={6}>New Cars</Col>
            <Col span={6}>Used Cars</Col>
            <Col span={6}>Reviews</Col>
            <Col span={6}>News</Col>
          </Row>
        </Col>
        <Col span={8} className={styles["btn-col"]}>
          <Button className={styles["login-btn"]}>Login</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
