import { Col, Divider, Image, Input, Row } from "antd";
import React from "react";
import styles from "./footer.module.less";
import location from "../../assets/location-footer.svg";
import email from "../../assets/email.svg";
import phone from "../../assets/phone-footer.svg";
import logo from "../..//assets/logo.svg";
import insta from "../../assets/icon.png";
import fb from "../../assets/icon-1.png";
import telegram from "../../assets/icon-2.png";
import linkedin from "../../assets/icon-3.png";
import youtube from "../../assets/icon-4.png";
import logoFooter from "../../assets/logo-footer.png";

function Footer() {
  return (
    <div className={styles["footer-wrapper"]}>
      <Row>
        <Col span={7}>
          <Image
            src={logoFooter}
            preview={false}
            width={300}
            style={{ marginBottom: 8 }}
          />
          <div className={styles["basic-info"]}>
            <Image src={location} preview={false} width={13} height={13} />
            <div>71 Ayer Rajah Crescent, #06-14, Singapore 139951</div>
          </div>
          <div className={styles["basic-info"]}>
            <Image src={phone} preview={false} width={13} height={13} />
            <div>+65 8808 7905</div>
          </div>
          <div className={styles["basic-info"]}>
            <Image src={email} preview={false} width={13} height={13} />
            <div>hello@carbuyer.com.sg</div>
          </div>
        </Col>
        <Col span={9}>
          <Row className={styles["more-info-title"]}>
            <Col span={7}>About</Col>
            <Col span={10}>Services</Col>
            <Col span={7}>Resources</Col>
          </Row>
          <Row className={styles["more-info-item"]}>
            <Col span={7}>About us</Col>
            <Col span={10}>Buy Used Cars</Col>
            <Col span={7}>News</Col>
          </Row>
          <Row className={styles["more-info-item"]}>
            <Col span={7}>Contact Us</Col>
            <Col span={10}>Buy New Cars</Col>
            <Col span={7}>Sell My Car</Col>
          </Row>
          <Row className={styles["more-info-item"]}>
            <Col span={7}>Careers</Col>
            <Col span={10}>Be a Dealer with UCARS</Col>
            <Col span={7}>COE Prices</Col>
          </Row>
        </Col>
        <Col span={8}>
          <div style={{ marginBottom: 12 }}>
            Get the {<span style={{ color: "#EE1B24" }}>latest</span>}{" "}
            automotive news sent to your inbox!
          </div>
          <Input
            className={styles["subcribe"]}
            addonAfter={<div>Subcribe</div>}
            placeholder="Enter your email"
            style={{ marginBottom: 16 }}
            size="large"
          />
          <div className={styles["follow"]}>
            <div>Follow us</div>
            <div>
              <Image src={insta} preview={false} width={20} height={20} />
              <Image src={fb} preview={false} width={20} height={20} />
              <Image src={telegram} preview={false} width={20} height={20} />
              <Image src={linkedin} preview={false} width={20} height={20} />
              <Image src={youtube} preview={false} width={20} height={20} />
            </div>
          </div>
        </Col>
      </Row>
      <Divider />
      <div className={styles["info-footer"]}>
        <div>
          <div className={styles["conditions"]}>
            <div>Advertising Terms and Conditions</div>
            <div>Platform Terms and Conditions</div>
            <div>Privacy Policy</div>
          </div>
          <div className={styles["owned"]}>
            <Image src={logo} preview={false} height={16} />
            <div>
              CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly owned
              by UCARS Pte Ltd
            </div>
          </div>
        </div>
        <div>© 2022. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
