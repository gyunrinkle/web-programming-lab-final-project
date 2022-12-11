import { Col } from 'react-bootstrap';

export const Card = (props) => {
  return (
    <>
      <Col md={4}>
        <img src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`} alt="shoes_alt" width={"80%"} />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Col>
    </>
  );
};
