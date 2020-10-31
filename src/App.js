import React, { useState, useEffect } from 'react';
import Food from './Food';
import Button from 'react-bootstrap/Button';
import foodArr from './data';
import './app.scss';

function App() {
  const [allFoods, setAllFoods] = useState(foodArr);
  const [chosenFood, setChosenFood] = useState('Click below.');

  const getFood = () => {
    let result = randomize(allFoods);
    setChosenFood(result);
    console.log('Clicked. Chosen food is: ', chosenFood);
  };

  const randomize = items => {
    return items[Math.floor(Math.random() * items.length)];
  };

  return (
    <>
      <div className="App">
        <main className="App-header">
          <p>What should I eat?</p>
          <Food food={chosenFood}></Food>
          <Button
            style={{ margin: '10px' }}
            onClick={getFood}
            variant="primary"
          >
            Click Me!
          </Button>
        </main>
      </div>
    </>
  );
}

export default App;
