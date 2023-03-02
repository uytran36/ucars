import React, { useState, useEffect } from "react";
import { NavBar, Space, Form, Button, Input } from "antd-mobile";
import { Divider, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { CloseOutline } from "antd-mobile-icons";
import styles from "./styles.module.less";
import { beforeUpload, getBase64 } from "../../../utils/upload";

function AddBrand({ setIsAdd }) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [isDone, setIsDone] = useState(false);

  const [form] = Form.useForm();

  const name = Form.useWatch("name", form);
  const models = Form.useWatch("models", form);
  const description = Form.useWatch("description", form);

  useEffect(() => {
    if (
      !name ||
      name === "" ||
      !models ||
      models === "" ||
      !description ||
      description === ""
    ) {
      setIsDone(false);
    } else {
      setIsDone(true);
    }
  }, [name, models, description]);

  const left = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ "--gap": "16px" }}>
        <CloseOutline onClick={() => setIsAdd(false)} />
      </Space>
    </div>
  );

  const uploadButton = (
    <div>{loading ? <LoadingOutlined /> : <PlusOutlined />}</div>
  );

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  return (
    <>
      <NavBar
        backArrow={false}
        left={left}
        style={{ borderBottom: "1px solid #F1F1F1" }}
      >
        <div className={styles["add-header"]}>Add Car Brand</div>
      </NavBar>
      <div className={styles["add-body-wrapper"]}>
        <div className={styles["form-wrapper"]}>
          <div className={styles["form-title"]}>Brand Logo</div>
          <Upload
            name="avatar"
            listType="picture-card"
            className={`avatar-uploader ${styles["uploader"]}`}
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{
                  width: "100%",
                }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
          <div className={styles["form-title"]}>Brand Details</div>
          <Form
            form={form}
            style={{
              "--border-top": "none",
              "--border-bottom": "none",
            }}
          >
            <Form.Item
              style={{
                "--padding-left": "0px",
              }}
              label="Brand Name"
              name="name"
            >
              <Input />
            </Form.Item>
            <Form.Item
              style={{
                "--padding-left": "0px",
              }}
              label="Total Models"
              name="models"
            >
              <Input />
            </Form.Item>
            <Form.Item
              style={{
                "--padding-left": "0px",
                "--border-bottom": "none",
              }}
              label="Description"
              name="description"
            >
              <Input />
            </Form.Item>
          </Form>
        </div>
        <div className={styles["add-footer"]}>
          <Divider />
          <div>
            <Button
              className={styles[`add-btn`]}
              disabled={!isDone}
              color="primary"
              fill="solid"
              onClick={() => setIsAdd(false)}
            >
              Create Brand
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddBrand;
