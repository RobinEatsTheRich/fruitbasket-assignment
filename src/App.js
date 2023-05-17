import React from 'react';
import './App.css';
import FruitContainer from "./components/FruitContainer/FruitContainer";
import Button from "./components/Button/Button";


function App() {

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <article>
          <FruitContainer
            name= "🍌Bananen"
            />
          <FruitContainer
              name= "🍓Aardbeien"
          />
          <FruitContainer
              name= "🍏Appels"
          />
          <FruitContainer
              name= "🥝Kiwis"
          />


          <Button
              id="resetButton"
          >Reset!
          </Button>
        </article>
    </>
  );
}

export default App;
