import React from 'react';
import Card from 'react-bootstrap/Card';
import './food.scss';

function Food(props) {
  return (
    <Card style={{ backgroundColor: '#404755' }}>
      <Card.Body>
        <Card.Title className="food">{props.food}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Food;
