import React from "react";
import { Layout } from "antd";
import Header from "../../layouts/LandingPage/Header";
import Footer from "../../layouts/LandingPage/Footer";
import styles from "./styles.module.less";

const { Content } = Layout;

function LandingPage() {
  return (
    <Layout className={styles["layout-wrapper"]}>
      <Layout.Header
        style={{
          backgroundColor: "#ffffff",
          height: "fit-content",
          padding: 0,
        }}
      >
        <Header />
      </Layout.Header>
      <Content>Content</Content>
      <Layout.Footer
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default LandingPage;
