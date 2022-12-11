import { useEffect, useState } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'

let ColorBtn = styled.button`
  background: ${props => props.bg};
  color: ${props => props.bg == 'blue' ? 'white' : 'black'};
  padding: 10px;
`;

export const Detail = (props) => {


  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      console.log(1);
      clearTimeout(timer);
    };
  }, []);

  id = parseInt(id);
  const shoe = props.shoes.find((e) => {
    return e.id === id;
  });

  return (
    <>
      <button onClick={() => { setCount(count + 1) }}>{count}</button>
      {
        alert === true ? <Alert variant='warning'>
          D.C. 20% for 2seconds!
        </Alert> : null
      }

      <ColorBtn bg="red" />
      <ColorBtn bg="blue" />
      <ColorBtn bg="black" />
      <Row>
        <Col md={6}>
          <img src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`} width="100%" />
        </Col>
        <Col md={6}>
          <h4>{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}원</p>
          <button>주문하기</button>
        </Col>
      </Row>
    </>
  );
};