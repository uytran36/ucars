import {
  Col,
  Row,
  Radio,
  Space,
  Select,
  Button,
  InputNumber,
  Divider,
  List,
  Checkbox,
  Card,
  Image,
} from "antd";
import React, { useEffect, useState } from "react";
import { getCarDetailList } from "../../../../data/fakeAPI";
import currency from "../../../../assets/currency.png";
import styles from "./styles.module.less";

function RenderTypeCars({ setTypeUsed }) {
  return (
    <Radio.Group
      className={styles["type-wrapper"]}
      onChange={(e) => setTypeUsed(e.target.value)}
    >
      <Space direction="vertical">
        <Radio value="New Car ( Authorised Dealer)">
          New Car ( Authorised Dealer)
        </Radio>
        <Radio value="New Car ( Parallel Importer )">
          New Car ( Parallel Importer )
        </Radio>
        <Radio value="Used Cars">Used Cars</Radio>
      </Space>
    </Radio.Group>
  );
}

function RenderPriceRange({ setPriceLeft, setPriceRight }) {
  return (
    <div className={styles["price-wrapper"]}>
      <div className={styles["price-title"]}>Price Range</div>
      <div className={styles["price-item-wrapper"]}>
        <div className={styles["price-item"]}>
          <div className={styles["price-item-title"]}>Min</div>
          <div className={styles["price"]}>
            <InputNumber
              defaultValue={10000}
              min={0}
              max={1000000}
              formatter={(value) =>
                `S$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\w\$\s?|(,*)/g, "")}
              bordered={false}
              onChange={(value) => setPriceLeft(value)}
            />
          </div>
        </div>
        <div className={styles["price-separate"]}>-</div>
        <div className={styles["price-item"]}>
          <div className={styles["price-item-title"]}>Max</div>
          <div className={styles["price"]}>
            <InputNumber
              defaultValue={100000}
              formatter={(value) =>
                `S$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\w\$\s?|(,*)/g, "")}
              bordered={false}
              onChange={(value) => setPriceRight(value)}
            />
          </div>
        </div>
      </div>
      <Divider />
      <div className={styles["btn-wrapper"]}>
        <Button type="text" className={styles["clear-btn"]}>
          Clear
        </Button>
        <Button className={styles["save-btn"]}>Save</Button>
      </div>
    </div>
  );
}

function RenderVehicleType({ setCount }) {
  return (
    <div className={styles["price-wrapper"]}>
      <div className={styles["price-title"]}>Vehicle Type</div>
      <div className={styles["checkbox-wrapper"]}>
        <Checkbox.Group
          onChange={(checkedValues) => setCount(checkedValues.length)}
        >
          <Row>
            <Col span={8}>
              <Checkbox value={1}>Bus</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value={2}>Lorry</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value={3}>SUV</Checkbox>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Checkbox value={4}>Classic Car</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value={5}>MPV</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value={6}>Truck</Checkbox>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Checkbox value={7}>Coupe</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value={8}>Pickup</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value={9}>Van (Passenger)</Checkbox>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Checkbox value={10}>Convertible</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value={11}>Sedan</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value={12}>Van (Goods)</Checkbox>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Checkbox value={13}>Hatchback</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value={14}>Sport Car</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value={15}>Wagon</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </div>
      <Divider />
      <div className={styles["btn-wrapper"]}>
        <Button type="text" className={styles["clear-btn"]}>
          Clear
        </Button>
        <Button className={styles["save-btn"]}>Save</Button>
      </div>
    </div>
  );
}

function ListCar() {
  const [typeUsed, setTypeUsed] = useState("New Car ( Authorised Dealer)");
  const [data, setData] = useState([]);
  const [isViewMore, setIsViewMore] = useState(false);
  const [priceLeft, setPriceLeft] = useState(10000);
  const [priceRight, setPriceRight] = useState(100000);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCarDetailList();

      if (res.status === 200) {
        setData(res.data);
      }
    };

    fetchData();
  }, []);

  const handleClickViewMore = () => {
    setIsViewMore(true);
  };

  return (
    <div className={styles["list-car-wrapper"]}>
      <div className={styles["filter"]}>
        <Row style={{ height: "100%" }}>
          <Col span={6} className={styles["filter-item"]}>
            <div className={styles["filter-item-wrapper"]}>
              <div>New/Used</div>
            </div>
            <Select
              value={typeUsed}
              style={{
                width: "100%",
                marginTop: 18,
              }}
              bordered={false}
              dropdownRender={() => RenderTypeCars({ setTypeUsed })}
              className={styles["select"]}
            />
          </Col>
          <Col span={6} className={styles["filter-item"]}>
            <div className={styles["filter-item-wrapper"]}>
              <div>Price Range</div>
            </div>
            <Select
              value={{
                label: (
                  <div>
                    <span>
                      <Image src={currency} preview={false} /> ${" "}
                      {`${priceLeft}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                    <span style={{ padding: "0px 18px" }}> - </span>
                    <span>
                      <Image src={currency} preview={false} />${" "}
                      {`${priceRight}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  </div>
                ),
                value: "1",
              }}
              style={{
                width: "100%",
                marginTop: 18,
              }}
              bordered={false}
              dropdownRender={() =>
                RenderPriceRange({ setPriceLeft, setPriceRight })
              }
              className={styles["select"]}
            />
          </Col>
          <Col span={8} className={styles["filter-item"]}>
            <div className={styles["filter-item-wrapper"]}>
              <div>Vehicle Type</div>
            </div>
            <Select
              value={{
                label: (
                  <div>
                    <span>+{count} More</span>
                  </div>
                ),
                value: "1",
              }}
              style={{
                width: "100%",
                marginTop: 18,
              }}
              bordered={false}
              dropdownRender={() => RenderVehicleType({ setCount })}
              className={styles["select"]}
            />
          </Col>
          <Col span={4} className={styles["filter-item-btn"]}>
            <Button className={styles["btn-search"]}>Search</Button>
          </Col>
        </Row>
      </div>
      <div>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={(item, idx) => (
            <>
              {(idx < 8 || (idx >= 8 && isViewMore)) && (
                <List.Item>
                  {item.isAd === true ? (
                    <Image
                      width={281}
                      height={361}
                      src={item.img}
                      preview={false}
                    />
                  ) : (
                    <Card
                      style={{
                        width: 281,
                        height: 361,
                      }}
                      hoverable
                      cover={<img alt="example" src={item.img} />}
                    >
                      <div className={styles["card-name"]}>{item.name}</div>
                      <div className={styles["card-price-wrapper"]}>
                        <span>{item.priceType}</span>{" "}
                        {item.priceType === "From" && (
                          <>
                            <span className={styles["card-price"]}>
                              $
                              {`${item.price}`.replace(
                                /\B(?=(\d{3})+(?!\d))/g,
                                ","
                              )}
                            </span>{" "}
                          </>
                        )}
                        <span className={styles["card-price-per-month"]}>
                          $
                          {`${item.pricePerMonth}`.replace(
                            /\B(?=(\d{3})+(?!\d))/g,
                            ","
                          )}
                          /mo
                        </span>
                      </div>
                      <div className={styles["card-variant"]}>
                        <span>
                          {item.variant} variant{item.variant > 1 && "s"}
                        </span>
                        {item.withCOE && <span> | with COE</span>}
                      </div>
                      <div className={styles["card-supplier"]}>
                        <Image src={item.logo} preview={false} />
                        <span>{item.supplier}</span>
                      </div>
                    </Card>
                  )}
                </List.Item>
              )}
            </>
          )}
        />
        {data.length > 8 && !isViewMore && (
          <div className={styles["more-btn"]}>
            <Button onClick={handleClickViewMore}>View more new cars</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListCar;
