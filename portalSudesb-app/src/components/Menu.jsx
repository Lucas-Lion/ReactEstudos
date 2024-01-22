import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import CarouselContent from "./carousel";
import Services from "./services";
import Birthday from "./birthday";
import "../index.css";

const { Header, Content, Footer } = Layout;
const items = new Array(5).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `Prodeb`,
  className: "custom-menu-item",
}));
const MenuBar = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          selectable={false}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
        <figure className="logo-right" />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        ></Breadcrumb>

        <section className="Carousel">
          <CarouselContent />
        </section>

        <div className="teste2">
          <section>
            <Services />
          </section>
          <section>
            <Birthday />
          </section>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
        className="footer"
      >
        Created by Lucas Lion © {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default MenuBar;
