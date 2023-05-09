"use client";
import { Layout, Col, Row, Space, Typography, Drawer } from "antd";
import React, { useState } from "react";
import color from "../theme/color.js";
import ImageComponent from "./common/ImageComponent.tsx";
import CompanyLogo from "../assets/images/NETC.CO_BIG.D.png";
import Link from "next/link.js";
import CustomButton from "./common/Button.tsx";
import Football from "../assets/images/Football.png";
import Badminton from "../assets/images/wepik-export-20230503165646.png";
import FootballPlaying from "../assets/images/soccer-players-action-professional-stadium (2).jpg";
import BadmintonPlaying from "../assets/images/two-young-women-playing-badminton-gym-space-concept-game-pair (2).jpg";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const { Header, Footer, Content } = Layout;

const LandingLayout: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout
      style={{
        backgroundColor: color["blue-1"],
        overflowX: "hidden",
        minHeight: "100%",
        width: "100%",
      }}
    >
      {/* Header */}
      <Header
        className="landing-header"
        style={{
          backgroundColor: color["primary"],
          color: color["blue-1"],
          position: "fixed",
          zIndex: "9999",
          width: "100vw",
          height: "auto",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Row
          wrap={false}
          gutter={8}
          style={{
            width: "100%",
            maxWidth: "1280px",
            padding: "20px 0",
          }}
        >
          <Col
            // span={12}
            xxl={12}
            xl={12}
            lg={20}
            md={20}
            xs={20}
          >
            <Link href="https://www.netcompany.com/vi/contact">
              <Typography 
                level={2} 
                style={{
                  fontFamily:"Font-Roboto-Slab",
                  fontSize:'32px',
                  color:color['blue-1'],
                }}
              > 
                netcompany
              </Typography>
            </Link>
          </Col>
          <Col span={12} xxl={12} xl={12} lg={0} md={0} xs={0}>
            <Space
              size="large"
              style={{
                flex: "flex",
                flexFlow: "row nowrap",
                justifyContent: "flex-end",
                minWidth: "100%",
                height: "auto",
              }}
            >
              <Link
                href="/about"
                style={{
                  color: color["blue-1"],
                  fontFamily:'Font-Roboto-Slab',
                }}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                style={{
                  color: color["blue-1"],
                  fontFamily:'Font-Roboto-Slab',
                }}
              >
                Contact
              </Link>
              <CustomButton
                size="middle"
                href="/login"
                target="login"
                style={{
                  backgroundColor: color["blue-1"],
                  color: color["primary"],
                }}
              >
                Login Now
              </CustomButton>
            </Space>
          </Col>
          <Col xxl={0} xl={0} lg={4} md={4} xs={4}>
            <Space
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "end",
              }}
            >
              <CustomButton
                type="text"
                onClickFunction={() => {
                  showDrawer();
                }}
              >
                <MenuOutlined
                  style={{
                    fontSize: "28px",
                    color: color["blue-1"],
                  }}
                />
              </CustomButton>
            </Space>
          </Col>
        </Row>
      </Header>

      {/* Drawer */}

      <Drawer
        title={
         
        <Typography
          level={1}
          style={{
            color:color['blue-1'],
            fontFamily:'Font-Roboto-Slab',
            fontSize:'32px',
            fontWeight:'bold'
          }}>netcompany</Typography>}
        placement={"bottom"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"bottom"}
        size="large"
        style={{
          backgroundColor: color["primary"],
        }}
      >
        <Space
          direction="vertical"
          style={{
            width: "100%",
            display: "flex",
          }}
        >
          <Link
            href="/about"
          >
            <Typography 
            level={2}
            style={{
              color: color["blue-1"],
              fontFamily:'Font-Roboto-Slab',
              fontSize:'28px',
              '&:hover':{
                textDecoration:'underlined'
              }
            }}>
              About Us
            </Typography>
            
          </Link>
          <Link
            href="/contact"
          >
            <Typography 
            level={2}
            style={{
              color: color["blue-1"],
              fontFamily:'Font-Roboto-Slab',
              fontSize:'28px'
            }}>
              Contact
            </Typography>
          </Link>
          <Link
            href="/login"
          >
            <Typography 
            level={2}
            style={{
              color: color["blue-1"],
              fontFamily:'Font-Roboto-Slab',
              fontSize:'28px'
            }}>
              Login Now
            </Typography>
          </Link>
        </Space>
      </Drawer>

      {/* Content */}
      <Content
        className="landing-body"
        style={{
          minWidth: "100vw",
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center",
          overflowX: "hidden",
        }}
      >
        <Col
          xxl={12}
          xl={0}
          lg={0}
          md={0}
          xs={0}
          style={{
            position: "absolute",
            left: "-10%",
            top: "15%",
            zIndex: 2,
          }}
        >
          <ImageComponent
            key="Football"
            src={Football}
            alt="Football"
            width={800}
            height={790}
            style={{
              transform: `matrix(-1, 0, 0, 1, 0, 0)`,
            }}
          />
        </Col>

        {/* Intro Section */}
        <Col
          className="introduction-container"
          style={{
            backgroundColor: color["blue-1"],
            color: color["primary"],
            padding: "250px 0",
            width: "100%",
            maxWidth: "1280px",
            height: "auto",
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignItems: "center",
            overflowX:'hidden'
          }}
        >
          <Space
            size="middle"
            style={{
              width: "100%",
              display: "flex",
              flexFlow: "column nowrap",
              justifyContent: "center",
              alignItems: "center",
              height: "auto",
            }}
          >
            <Typography.Title
              level={1}
              style={{
                margin: "0",
                textAlign: "center",
                fontFamily: "Font-Roboto-Slab",
                fontSize: "60px",
                color: color["primary"],
              }}
            >
              Tournament Organizer
            </Typography.Title>
            <Typography.Title
              level={3}
              style={{
                margin: "0",
                textAlign: "center",
                fontFamily: "Font-Roboto-Slab",
                fontSize: "52px",
                color: color["primary"],
              }}
            >
              netcompany
            </Typography.Title>

            <Typography.Paragraph
              style={{
                width: "100%",
                maxWidth: "650px",
                textAlign: "center",
                fontFamily: "Font-Roboto-Slab",
                margin: "0",
                fontSize: "16px",
                fontWeight: "semibold",
                color: color["primary"],
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard
            </Typography.Paragraph>
            <CustomButton
              type="primary"
              size="large"
              style={{
                backgroundColor: color["primary"],
                color: color["blue-1"],
                paddingInline: "40px",
              }}
            >
              Get Started
            </CustomButton>
          </Space>
        </Col>

        <Col
          xxl={12}
          xl={0}
          lg={0}
          md={0}
          xs={0}
          style={{
            position: "absolute",
            right: "0",
            top: "8.9%",
            zIndex: 2,
          }}
        >
          <ImageComponent
            key="Badminton"
            src={Badminton}
            alt="Badminton"
            width={880}
            height={690}
          />
        </Col>

        {/* About Us Section */}
        <Row
          className="about-us-container"
          style={{
            backgroundColor: color["blue-2"],
            color: color["primary"],
            width: "100vw",
            height: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col
            xxl={24}
            xl={24}
            lg={24}
            md={24}
            xs={24}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Space
              direction="vertical"
              style={{
                width: "100%",
                maxWidth: "1280px",
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                paddingInline: "20px",
              }}
            >
              <Typography.Title
                level={3}
                style={{
                  width: "fit-content",
                  margin: "0",
                  fontFamily: "Font-Roboto",
                  fontSize: "32px",
                  color: color["primary"],
                }}
              >
                About Us
              </Typography.Title>
              <Typography.Title
                level={2}
                style={{
                  width: "fit-content",
                  margin: "0",
                  fontFamily: "Font-Roboto",
                  fontSize: "52px",
                  color: color["primary"],
                }}
              >
                Sport Organizer
              </Typography.Title>
              <Typography.Title
                level={2}
                style={{
                  width: "fit-content",
                  margin: "0",
                  fontFamily: "Font-Roboto",
                  fontSize: "52px",
                  color: color["primary"],
                }}
              >
                Since 2023!
              </Typography.Title>
              <Typography.Paragraph
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  textAlign: "justify",
                  fontFamily: "Font-Roboto-Slab",
                  margin: "0",
                  color: color["primary"],
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard
              </Typography.Paragraph>
            </Space>
          </Col>
          {/* Image Container */}
          <Col
            xxl={6}
            xl={0}
            lg={0}
            md={0}
            xs={0}
            style={{
              position: "absolute",
              right: "30%",
              top: "83%",
            }}
          >
            <ImageComponent
              key="FootballPlaying"
              src={FootballPlaying}
              alt="FootballPlaying"
              width={260}
              height={420}
            />
          </Col>
          <Col
            xxl={6}
            xl={0}
            lg={0}
            md={0}
            xs={0}
            style={{
              position: "absolute",
              right: "14%",
              top: "80%",
            }}
          >
            <ImageComponent
              key="BadmintonPlaying"
              src={BadmintonPlaying}
              alt="BadmintonPlaying"
              width={260}
              height={420}
            />
          </Col>
        </Row>
      </Content>

      {/* Footer */}
      <Footer
        className="landing-footer"
        style={{
          backgroundColor: color["blue-1"],
          color: color["primary"],
          width: "100vw",
          height: "300px",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Space
          direction="vertical"
          style={{
            width: "100%",
            maxWidth: "1280px",
          }}
        >
          <Space
            style={{
              width: "100%",
            }}
          >
            <Typography.Title
              level={4}
              style={{
                color: color["primary"],
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "Font-Roboto-Slab",
              }}
            >
              netcompany
            </Typography.Title>
          </Space>

          <Space
            direction="horizontal"
            style={{
              width: "100%",
              maxWidth: "900px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            <Space direction="vertical" style={{ display: "flex" }}>
              <Link
                href="/"
                style={{
                  color: color["primary"],
                  fontSize: "16px",
                  fontWeight: "semibold",
                  fontFamily: "Font-Roboto-Slab",
                }}
              >
                About Us
              </Link>
              <Link
                href="/"
                style={{
                  color: color["primary"],
                  fontSize: "16px",

                  fontWeight: "semibold",
                  fontFamily: "Font-Roboto-Slab",
                }}
              >
                Business
              </Link>
              <Link
                href="/"
                style={{
                  color: color["primary"],
                  fontSize: "16px",
                  fontWeight: "semibold",
                  fontFamily: "Font-Roboto-Slab",
                }}
              >
                Jobs
              </Link>
              <Link
                href="/"
                style={{
                  color: color["primary"],
                  fontSize: "16px",
                  fontWeight: "bold",
                  fontFamily: "Font-Roboto-Slab",
                }}
              >
                Sell Your Content
              </Link>
            </Space>
            <Space direction="vertical" style={{ display: "flex" }}>
              <Link
                href="/"
                style={{
                  color: color["primary"],
                  fontSize: "16px",
                  fontWeight: "semibold",
                  fontFamily: "Font-Roboto-Slab",
                }}
              >
                Terms and Condition
              </Link>
              <Link
                href="/"
                style={{
                  color: color["primary"],
                  fontSize: "16px",
                  fontWeight: "semibold",
                  fontFamily: "Font-Roboto-Slab",
                }}
              >
                Copyright information
              </Link>
              <Link
                href="/"
                style={{
                  color: color["primary"],
                  fontSize: "16px",
                  fontWeight: "semibold",
                  fontFamily: "Font-Roboto-Slab",
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                style={{
                  color: color["primary"],
                  fontSize: "16px",
                  fontWeight: "semibold",
                  fontFamily: "Font-Roboto-Slab",
                }}
              >
                Cookies
              </Link>
            </Space>
            <Space direction="vertical" style={{ display: "flex" }}>
              <Link
                href="/"
                style={{
                  color: color["primary"],
                  fontSize: "16px",
                  fontWeight: "semibold",
                  fontFamily: "Font-Roboto-Slab",
                }}
              >
                Support
              </Link>
              <Link
                href="/"
                style={{
                  color: color["primary"],
                  fontSize: "16px",
                  fontWeight: "semibold",
                  fontFamily: "Font-Roboto-Slab",
                }}
              >
                FAQ
              </Link>
              <Link
                href="/"
                style={{
                  color: color["primary"],
                  fontSize: "16px",
                  fontWeight: "semibold",
                  fontFamily: "Font-Roboto-Slab",
                }}
              >
                Contact
              </Link>
            </Space>
          </Space>
        </Space>
      </Footer>
    </Layout>
  );
};

export default LandingLayout;
