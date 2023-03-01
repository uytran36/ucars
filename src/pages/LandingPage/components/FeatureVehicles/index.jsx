import { Button, Card, Image } from "antd";
import React, { useEffect, useState } from "react";
import { getCarList } from "../../../../data/fakeAPI";
import styles from "./styles.module.less";

function FeatureVehicles() {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getCarList();
      if (response.status === 200) {
        setCarList(response.data);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className={styles["title-wrapper"]}>
        <div>
          <div className={styles["title"]}>Our Featured Vehicles.</div>
          <div className={styles["description"]}>
            One of our biggest product to be featured and that has sold out the
            most.
          </div>
        </div>
        <Button className={styles["btn-start"]}>View More</Button>
      </div>
      <div className={styles["slide-scrollable"]}>
        {carList.map((car, index) => (
          <div key={index} className={styles["slide-item"]}>
            {!car.isAd ? (
              <div className={styles["slide-item-wrapper"]}>
                <Image src={car.img} preview={false} />
                <div className={styles["slide-item-info"]}>
                  <div>
                    <div className={styles["slide-item-title"]}>{car.name}</div>
                    <div className={styles["slide-item-description"]}>
                      {car.description}
                    </div>
                  </div>
                  <div>
                    <div className={styles["slide-item-type"]}>{car.type}</div>
                    <div className={styles["slide-item-price"]}>
                      {car.price}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles["slide-item-ad"]}>
                <Image src={car.img} preview={false} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureVehicles;
