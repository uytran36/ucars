import React from "react";
import { Layout } from "antd";
import Header from "../../layouts/LandingPage/Header";
import Footer from "../../layouts/LandingPage/Footer";
import styles from "./styles.module.less";
import Cover from "./components/Corver";
import ListCar from "./components/ListCar";
import HowItWorks from "./components/HowItWorks";
import FeatureVehicles from "./components/FeatureVehicles";
import AskAndInfo from "./components/AskAndInfo";

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
      <Content
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <Cover />
        <ListCar />
        <HowItWorks />
        <FeatureVehicles />
        <AskAndInfo />
      </Content>
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
