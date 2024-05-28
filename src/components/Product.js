import React from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

export default function Product(props) {
  const { product, add } = props;
  return (
    <div style={{ width: "18rem" }}>
      <Button onClick={() => add(product)} variant="primary">
        buy
      </Button>
      <Carousel>
        <Carousel.Item>
          <Image src="boat1.png" rounded text="First slide" />
          <Carousel.Caption>
            <h3>ZAZOU</h3>
            <p>
              Побудований для досвідченого постійного клієнта Benetti, який
              тепер переїжджає на новий 50-метровий сталевий корпус Benetti
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="boat2.jpg " rounded text="Second slide" />
          <Carousel.Caption>
            <h3>ILLUSION PLUS</h3>
            <p>
              ILLUSION PLUS з її вражаючою голландською військово-морською
              архітектурою від Azure та Rainsford Saunders поєднує в собі разючі
              лінії.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="boat3.png" rounded text="Third slide" />
          <Carousel.Caption>
            <h3>SKAT</h3>
            <p>
              SKAT, що у перекладі з датської означає «скарб», - це революційна
              яхта, що складається з кутів та гострих граней, спроектована
              відомим військово-морським архітектором Еспеном Оейно.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
