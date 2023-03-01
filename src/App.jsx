import React, { useState } from "react";
import { Layout } from "antd";
import Header from "./layouts/CarBrands/Header";
import Sidebar from "./layouts/CarBrands/Sidebar";
import CarBrands from "./pages/CarBrands";


const {  Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout>
        <Sider width={240} collapsed={collapsed}>
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        </Sider>
        <Layout>
          <Layout.Header style={{ padding: 0 }}>
            <Header />
          </Layout.Header>
          <Content style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
            <CarBrands />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
