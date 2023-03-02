import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import Header from "./layouts/CarBrands/Header";
import Sidebar from "./layouts/CarBrands/Sidebar";
import CarBrands from "./pages/CarBrands";
import CarBrandsMobile from "./pages/CarBrandsMobile";
import useWindowSize from "./utils/useWindowSize";

const { Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <>
      {!isMobile ? (
        <div>
          <Layout>
            <Sider width={240} collapsed={collapsed}>
              <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            </Sider>
            <Layout>
              <Layout.Header style={{ padding: 0 }}>
                <Header />
              </Layout.Header>
              <Content
                style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}
              >
                <CarBrands />
              </Content>
            </Layout>
          </Layout>
        </div>
      ) : (
        <CarBrandsMobile />
      )}
    </>
  );
}

export default App;
