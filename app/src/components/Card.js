import { Col } from 'react-bootstrap';

export const Card = (props) => {
  return (
    <>
      <Col md={4}>
        <img src={`https://image.idus.com/image/files/efae594b68294be2b6b03849ec6aaef5_512.jpg`} alt="shoes_alt" width={"80%"} />
        <h4>☃️크리스마스 슈톨렌☃️</h4>
        <p>{props.shoes.price}</p>
      </Col>
    </>
  );
};
