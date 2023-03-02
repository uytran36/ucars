import { Grid, Image, NavBar, Space, Swiper, TabBar } from "antd-mobile";
import {
  ArrowRightOutlined,
  HomeFilled,
  UserOutlined,
} from "@ant-design/icons";
import logo from "../../assets/logo_short.png";
import searchIcon from "../../assets/search.svg";
import React from "react";
import styles from "./styles.module.less";
import cover from "../../assets/coverImg.png";
import toyota from "../../assets/to.png";
import bmw from "../../assets/bm.png";
import honda from "../../assets/ho.png";
import nissan from "../../assets/nis.png";
import mercedes from "../../assets/mer.png";
import kia from "../../assets/ki.png";
import hyundai from "../../assets/hyun.png";
import mazda from "../../assets/maz.png";
import audi from "../../assets/au.png";
import more from "../../assets/more.png";
import car from "../../assets/car Type.png";
import car1 from "../../assets/car Type-1.png";
import car2 from "../../assets/car Type-2.png";
import car3 from "../../assets/car Type-3.png";
import car4 from "../../assets/car Type-4.png";
import car5 from "../../assets/car Type-5.png";
import car6 from "../../assets/car Type-6.png";
import car7 from "../../assets/car Type-7.png";
import usedCar from "../../assets/Used Car Listing.png";
import usedCar1 from "../../assets/Used Car Listing 1.png";
import usedCar2 from "../../assets/Used Car Listing 2.png";
import usedCar3 from "../../assets/Used Car Listing 3.png";
import usedCar4 from "../../assets/Used Car Listing 4.png";
import newCar from "../../assets/New Car Listing.png";
import newCar1 from "../../assets/New Car Listing 1.png";
import newCar2 from "../../assets/New Car Listing 2.png";
import newCar3 from "../../assets/New Car Listing 3.png";
import newCar4 from "../../assets/New Car Listing 4.png";
import news from "../../assets/Highlight News Card.png";
import news1 from "../../assets/Highlight News Card-1.png";
import news2 from "../../assets/Highlight News Card-2.png";
import news3 from "../../assets/Highlight News Card-3.png";
import news4 from "../../assets/Highlight News Card-4.png";
import newsIcon from "../../assets/news.svg";

const left = (
  <div>
    <Image src={logo} width={120} height={40} fit="fill" />
  </div>
);

const right = (
  <div style={{ marginRight: 8 }}>
    <Space>
      <Image src={searchIcon} width={20} height={20} fit="fill" />
    </Space>
  </div>
);

function LandingPageMobile() {
  return (
    <div>
      <NavBar
        className={styles["navbar"]}
        backArrow={false}
        left={left}
        right={right}
      />
      <div className={styles["cover"]}>
        <Image src={cover} width="100%" height="100%" fit="fill" />
        <div className={styles["title"]}>Popular Brands</div>
        <Grid columns={5} gap={8} style={{ marginBottom: 24 }}>
          <Grid.Item>
            <Image src={toyota} />
          </Grid.Item>
          <Grid.Item>
            <Image src={bmw} />
          </Grid.Item>
          <Grid.Item>
            <Image src={mercedes} />
          </Grid.Item>
          <Grid.Item>
            <Image src={hyundai} />
          </Grid.Item>
          <Grid.Item>
            <Image src={mazda} />
          </Grid.Item>
          <Grid.Item>
            <Image src={audi} />
          </Grid.Item>
          <Grid.Item>
            <Image src={nissan} />
          </Grid.Item>
          <Grid.Item>
            <Image src={kia} />
          </Grid.Item>
          <Grid.Item>
            <Image src={honda} />
          </Grid.Item>
          <Grid.Item style={{ textAlign: "center" }}>
            <Image src={more} width="50%" style={{ margin: "4px auto" }} />
            <div>More</div>
          </Grid.Item>
        </Grid>
        <div className={styles["title"]}>Car Type</div>
        <Swiper indicator={() => null} stuckAtBoundary={false}>
          <Swiper.Item key={1} style={{ width: "fit-content" }}>
            <Image src={car} />
          </Swiper.Item>
          <Swiper.Item key={2} style={{ width: "fit-content" }}>
            <Image src={car1} />
          </Swiper.Item>
          <Swiper.Item key={3} style={{ width: "fit-content" }}>
            <Image src={car2} />
          </Swiper.Item>
          <Swiper.Item key={4} style={{ width: "fit-content" }}>
            <Image src={car3} />
          </Swiper.Item>
          <Swiper.Item key={5} style={{ width: "fit-content" }}>
            <Image src={car4} />
          </Swiper.Item>
          <Swiper.Item key={6} style={{ width: "fit-content" }}>
            <Image src={car5} />
          </Swiper.Item>
          <Swiper.Item key={7} style={{ width: "fit-content" }}>
            <Image src={car6} />
          </Swiper.Item>
          <Swiper.Item key={8} style={{ width: "fit-content" }}>
            <Image src={car7} />
          </Swiper.Item>
        </Swiper>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className={styles["title"]}>Used Cars</div>
          <ArrowRightOutlined style={{ fontSize: 20, marginTop: 26 }} />
        </div>
        <Swiper indicator={() => null} stuckAtBoundary={false}>
          <Swiper.Item key={1} style={{ width: "fit-content" }}>
            <Image src={usedCar} />
          </Swiper.Item>
          <Swiper.Item key={2} style={{ width: "fit-content" }}>
            <Image src={usedCar1} />
          </Swiper.Item>
          <Swiper.Item key={3} style={{ width: "fit-content" }}>
            <Image src={usedCar2} />
          </Swiper.Item>
          <Swiper.Item key={4} style={{ width: "fit-content" }}>
            <Image src={usedCar3} />
          </Swiper.Item>
          <Swiper.Item key={5} style={{ width: "fit-content" }}>
            <Image src={usedCar4} />
          </Swiper.Item>
        </Swiper>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className={styles["title"]}>New Cars</div>
          <ArrowRightOutlined style={{ fontSize: 20, marginTop: 26 }} />
        </div>
        <Swiper indicator={() => null} stuckAtBoundary={false}>
          <Swiper.Item key={1} style={{ width: "fit-content" }}>
            <Image src={newCar} />
          </Swiper.Item>
          <Swiper.Item key={2} style={{ width: "fit-content" }}>
            <Image src={newCar1} />
          </Swiper.Item>
          <Swiper.Item key={3} style={{ width: "fit-content" }}>
            <Image src={newCar2} />
          </Swiper.Item>
          <Swiper.Item key={4} style={{ width: "fit-content" }}>
            <Image src={newCar3} />
          </Swiper.Item>
          <Swiper.Item key={5} style={{ width: "fit-content" }}>
            <Image src={newCar4} />
          </Swiper.Item>
        </Swiper>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className={styles["title"]}>Latest News</div>
          <ArrowRightOutlined style={{ fontSize: 20, marginTop: 26 }} />
        </div>
        <Swiper indicator={() => null} stuckAtBoundary={false}>
          <Swiper.Item key={1} style={{ width: "fit-content" }}>
            <Image src={news} />
          </Swiper.Item>
          <Swiper.Item key={2} style={{ width: "fit-content" }}>
            <Image src={news1} />
          </Swiper.Item>
          <Swiper.Item key={3} style={{ width: "fit-content" }}>
            <Image src={news2} />
          </Swiper.Item>
          <Swiper.Item key={4} style={{ width: "fit-content" }}>
            <Image src={news3} />
          </Swiper.Item>
          <Swiper.Item key={5} style={{ width: "fit-content" }}>
            <Image src={news4} />
          </Swiper.Item>
        </Swiper>
      </div>
      <TabBar className={styles["bottom-nav"]}>
        <TabBar.Item key={1} icon={<HomeFilled />} title={"Home"} />
        <TabBar.Item key={2} icon={<Image src={newsIcon} />} title={"Home"} />
        <TabBar.Item key={3} icon={<UserOutlined />} title={"Home"} />
      </TabBar>
    </div>
  );
}

export default LandingPageMobile;
