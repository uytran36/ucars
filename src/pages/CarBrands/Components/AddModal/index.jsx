import React, { useState } from "react";
import {
  Upload,
  Modal,
  Divider,
  Form,
  Input,
  Row,
  Col,
  Dropdown,
  Button,
} from "antd";
import {
  CloseOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import axios from "axios";
import moment from "moment";
import styles from "./styles.module.less";
import { createCarBrand } from "../../../../data/fakeAPI";
import Status from "../../../../components/Status";
import { beforeUpload, getBase64 } from "../../../../utils/upload";

const items = [
  {
    key: "1",
    label: <Status status="active" disable />,
    value: "active",
  },
  {
    key: "2",
    label: <Status status="inactive" disable />,
    value: "inactive",
  },
];

function AddModal({ isModalOpen, setIsModalOpen }) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [form] = Form.useForm();
  const statusWatch = Form.useWatch("status", form);

  const handleOk = async () => {
    const values = form.getFieldsValue();

    let bodyFormData = new FormData();
    bodyFormData.append("image", imageUrl?.split(",")?.[1]);

    // const res = await axios.post(
    //   "https://api.imgbb.com/1/upload?expiration=600&key=bd76800115deafd3015d107d402acdda",
    //   bodyFormData
    // );

    // createCarBrand({
    //   ...values,
    //   status: statusWatch === undefined ? "active" : statusWatch,
    //   models: 0,
    //   updated: moment().format("DD/MM/YYYY"),
    //   logo: res.data.data.url,
    // });

    form.resetFields();
    setImageUrl("");
    setIsModalOpen(false);
  };

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

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className={styles["title-upload"]}>Brand Logo</div>
    </div>
  );

  const onClick = ({ key }) => {
    form.setFieldValue("status", items.find((item) => item.key === key).value);
  };

  return (
    <Modal
      title={
        <div>
          <div className={styles["title"]}>Add Car Brand</div>
          <div className={styles["description"]}>Setup new car brand</div>
        </div>
      }
      open={isModalOpen}
      onOk={handleOk}
      onCancel={() => setIsModalOpen(false)}
      closeIcon={
        <div className={styles["close-icon"]}>
          <CloseOutlined />
        </div>
      }
      className={styles["modal-add"]}
      footer={[
        <Button
          key="back"
          className={styles["btn-cancel"]}
          onClick={() => {
            form.resetFields();
            setIsModalOpen(false);
          }}
        >
          Cancel
        </Button>,
        <Button
          key="submit"
          className={styles["btn-submit"]}
          loading={loading}
          onClick={handleOk}
        >
          Create Brand
        </Button>,
      ]}
    >
      <div className={styles["title-logo"]}>Brand Logo</div>
      <Divider />
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
      <div className={styles["title-detail"]}>Brand detail</div>
      <Divider />
      <Form form={form} layout="vertical">
        <Form.Item>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                label={<div className={styles["form-label"]}>Brand Name</div>}
                name="name"
              >
                <Input placeholder="Input Content" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<div className={styles["form-label"]}>Brand Status</div>}
                name="status"
              >
                <Dropdown
                  menu={{ items, onClick }}
                  dropdownRender={(menu) => (
                    <div className={styles["menu-dropdown"]}>{menu}</div>
                  )}
                >
                  <div>
                    <Status
                      status={
                        statusWatch !== undefined ? statusWatch : "active"
                      }
                    />
                  </div>
                </Dropdown>
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          label={<div className={styles["form-label"]}>Brand Description</div>}
          name="description"
        >
          <Input.TextArea
            rows={3}
            placeholder="Input Content"
            className={styles["input-description"]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddModal;
