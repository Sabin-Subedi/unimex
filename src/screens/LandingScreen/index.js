import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/Navabar";
import "./landing.scss";

const cardData = [
  {
    image: "degen.svg",
    name: "Degen Protocol",
    subTitle: "Easy going",
    subTitleColor: "color_green_light",
    glowStyle: {
      background:
        "radial-gradient(50% 50% at 50% 50%, #F9FFB1 0%, rgba(78, 176, 1, 0) 100%)",
      mixBlendMode: "screen",
      // opacity: 0.5,
      filter: "blur(88px)",
    },
    buttonColor:
      "linear-gradient(0deg, rgba(240, 255, 65, 0.72), rgba(240, 255, 65, 0.72)), radial-gradient(49.67% 100% at 50% 100%, rgba(198, 255, 126, 0.4) 0%, rgba(105, 222, 167, 0) 100%), linear-gradient(270deg, rgba(105, 222, 167, 0.6) 0%, rgba(105, 222, 167, 0.42) 100%)",
  },
  {
    image: "apemex.svg",
    name: "Apemex Network",
    subTitle: "Easy going",
    subTitleColor: "color_brown_light",
    glowStyle: {
      background:
        "radial-gradient(50% 50% at 50% 50%, #FFEE53 0%, rgba(167, 150, 0, 0) 100%)",
      mixBlendMode: "screen",
      // opacity: 0.5,
      filter: "blur(88px)",
    },
    buttonColor:
      "radial-gradient(89.12% 170% at 50% 100%, rgba(255, 245, 0, 0.4) 0%, rgba(255, 166, 84, 0) 100%), linear-gradient(0deg, #FFD336, #FFD336), radial-gradient(49.67% 100% at 50% 100%, rgba(255, 173, 126, 0.4) 0%, rgba(255, 229, 92, 0) 100%), linear-gradient(270deg, rgba(105, 222, 167, 0.5) 0%, rgba(105, 222, 167, 0.35) 100%)",
  },
  {
    image: "farm.svg",
    name: "Farm Space",
    subTitle: "Easy going",
    subTitleColor: "color_brown_light",
    glowStyle: {
      background:
        "radial-gradient(50% 50% at 50% 50%, #FFB053 0%, rgba(176, 1, 1, 0) 100%)",
      mixBlendMode: "screen",
      filter: "blur(88px)",
    },
    buttonColor:
      "radial-gradient(89.12% 170% at 50% 100%, rgba(255, 202, 66, 0.4) 0%, rgba(255, 166, 84, 0) 100%), linear-gradient(0deg, #FF7A41, #FF7A41), radial-gradient(49.67% 100% at 50% 100%, rgba(255, 173, 126, 0.4) 0%, rgba(255, 229, 92, 0) 100%), linear-gradient(270deg, rgba(105, 222, 167, 0.5) 0%, rgba(105, 222, 167, 0.35) 100%)",
  },
];

export default function LandingScreen() {
  return (
    <div className="background">
      <div className="overlay"></div>
      <NavigationBar />
      <main className="hero_section">
        <div>
          <Container>
            <Row className="align-items-center d-flex  flex-column flex-md-row">
              <Col className="p-5 d-flex align-item-center justify-content-center w-full">
                <Image
                  src="/image/hero.svg"
                  alt="Hero"
                  className="hero_image"
                />
              </Col>
              <Col className="pe-5">
                <h4 className="text-white fw-bold">
                  The Unimex Network is an interconnected ecosystem of DeFi
                  applications.
                </h4>
                <p className="color_green hero_text fs-6 my-3">
                  The main idea behind the network is to generate mutual
                  incentive structures for the flow of capital. This is intended
                  to create a long-term feedback loop where value is
                  redistributed between ecosystem token stakers and lenders,
                  from across various chains and products.
                </p>
                <Button className="text-white fs-6 fw-bold mt-4">
                  Buy UMX
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="hero_overlay_image"></div>
      </main>

      <section className="py-5 pb-0 pb-md-5 my-5 mb-0 mb-md-5 card_section ">
        <Container className="py-5 px-5">
          <Row className="gap-3 align-items-center px-md-5">
            {cardData.map((card, index) => (
              <Col
                key={index}
                className="d-flex flex-column align-items-center mb-3 mb-md-0"
              >
                <div className="position-relative w-full d-flex align-item-center justify-content-center w-full">
                  <Image
                    src={`/image/${card.image}`}
                    alt="Degen"
                    className="card_img"
                  />
                  <div
                    className="position-absolute top-0 left-0 right-0 bottom-0 w-half"
                    zIndex="-1"
                    style={{
                      height: "100%",
                      ...card.glowStyle,
                    }}
                  ></div>
                </div>
                <h4 className="text-white">{card.name}</h4>
                <p className={card.subTitleColor}>{card.subTitle}</p>
                <Button
                  className="text-white fw-bold mt-4"
                  style={{
                    backgroundBlendMode: "hue, normal, normal",
                    boxShadow: "0px 9px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  color={card.buttonColor}
                >
                  Learn more
                </Button>
              </Col>
            ))}
          </Row>
        </Container>
        <div className="bottom_overlay_image"></div>
      </section>

      <Footer />
    </div>
  );
}
