import React from "react";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default function Main(props) {
  const { products, add } = props;
  return (
    <Row className="gap-4 justify-content-center">
      <div style={{ width: "18rem" }}>
        <Carousel>
          {products.map((product) => (
            <Carousel.Item>
              <Button onClick={() => add(product)} variant="primary">
                buy
              </Button>
              <Image
                src={product.image}
                rounded
                text="First slide"
                height="380"
              />
              <Carousel.Caption>
                <h3>{product.name}</h3>
                <p>{product.text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Row>
  );
}
