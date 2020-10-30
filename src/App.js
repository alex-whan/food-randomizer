import React, { useState } from 'react';
import Food from './Food';
import Button from 'react-bootstrap/Button';

function App() {
  const [allFoods, setAllFoods] = useState([
    'indian',
    'pizza',
    'sandwich',
    'italian',
    'sushi',
    'korean',
    'mexican',
    'mediterranean',
    'asian',
    'burgers',
    'thai',
    'chinese',
    'chicken',
    'greek',
    'vietnamese',
    'ramen',
    'bbq',
    'wings',
    'comfort food',
    'japanese bbq',
    'middle eastern',
    'breakfast and brunch',
    'vegetarian',
    'seafood',
    'ethiopian',
    'taiwanese',
    'north indian',
    'fish and chips',
    'hawaiian',
    'american',
    'latin american',
    'soul food',
    'southern',
    'diner',
    'dumplings',
    'persian',
    'caribbean',
    'spanish',
    'cuban',
    'russian',
    'african',
    'portuguese',
    'moroccan',
    'venezuelan',
    'indonesian',
    'cajun',
    'nepalese',
    'polish',
    'jewish',
    'laotian',
    'eastern european',
  ]);
  const [chosenFood, setChosenFood] = useState('');

  const getFood = () => {
    console.log(randomize(allFoods));
    console.log('Clicked. Chosen food is: ', chosenFood);

    return <Food props={chosenFood}></Food>;
  };

  const randomize = items => {
    return items[Math.floor(Math.random() * items.length)];
  };

  return (
    <div className="App">
      <main className="App-header">
        <p>What should I eat?</p>
        <Button onClick={getFood} variant="primary">
          Click Me!
        </Button>
      </main>
    </div>
  );
}

export default App;
