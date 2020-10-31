import React from 'react';
import Card from 'react-bootstrap/Card';
import './food.scss';
// <Card>
//   <h2>{props.food}</h2>
// </Card>

function Food(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="food">{props.food}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Food;
