import React, { useEffect, useState } from "react";
import {
  LeftOutlined,
  LoadingOutlined,
  PlusOutlined,
  DownOutlined,
} from "@ant-design/icons";
import {
  message,
  Upload,
  Divider,
  Form,
  Input,
  Row,
  Col,
  Dropdown,
  Button,
  Image,
} from "antd";
import styles from "./styles.module.less";
import Status from "../../../../components/Status";

function CarBrandDetail({ setIsClickDetail, detail }) {
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [form] = Form.useForm();
  const statusWatch = Form.useWatch("status", form);

  useEffect(() => {
    form.setFieldsValue({
      ...detail,
    });
    setImageUrl(detail.logo);
  }, []);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const items = [
    {
      key: "1",
      label: <Status status="active" disable/>,
      value: "active",
    },
    {
      key: "2",
      label: <Status status="inactive" disable/>,
      value: "inactive",
    },
  ];

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
    <div className={styles["detail-wrapper"]}>
      <div className={styles["title-wrapper"]}>
        <LeftOutlined onClick={() => setIsClickDetail(false)} />
        <div className={styles["title"]}>Brand Details</div>
      </div>

      <div className={styles["title-logo"]}>Brand Logo</div>
      <Divider />
      {isEdit ? (
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
            <div className={styles["upload-wrapper"]}>
              <img
                src={imageUrl}
                alt="avatar"
                style={{
                  width: "100px",
                  height: "100px",
                }}
                className={styles["upload-image"]}
              />
              <div className={styles["upload-hover"]}>
                <div >CHANGE LOGO</div>
              </div>
            </div>
          ) : (
            uploadButton
          )}
        </Upload>
      ) : (
        <Image
          src={detail.logo}
          width={102}
          height={102}
          className={styles["logo-image"]}
        />
      )}
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
                {isEdit ? (
                  <Input placeholder="Input Content" />
                ) : (
                  <div className={styles["form-text"]}>{detail.name}</div>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<div className={styles["form-label"]}>Brand Status</div>}
                name="status"
              >
                {isEdit ? (
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
                ) : (
                  <div>
                    <Status status={detail.status} disable />
                  </div>
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          label={<div className={styles["form-label"]}>Brand Description</div>}
          name="description"
        >
          {isEdit ? (
            <Input.TextArea
              rows={3}
              placeholder="Input Content"
              className={styles["input-description"]}
            />
          ) : (
            <div className={styles["form-textarea"]}>{detail.description}</div>
          )}
        </Form.Item>
      </Form>
      {!isEdit ? (
        <Button className={styles["btn-edit"]} onClick={() => setIsEdit(true)}>
          Edit Infomation
        </Button>
      ) : (
        <Button className={styles["btn-edit"]} onClick={() => setIsEdit(false)}>
          Save Changes
        </Button>
      )}
    </div>
  );
}

export default CarBrandDetail;
