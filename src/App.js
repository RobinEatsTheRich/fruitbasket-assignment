import React from 'react';
import './App.css';
import FruitContainer from "./components/FruitContainer/FruitContainer";
import Button from "./components/Button/Button";


function App() {

  const [bananaCount, setBananaCount] = React.useState(0);
  const [strawberryCount, setStrawberryCount] = React.useState(0);
  const [appleCount, setAppleCount] = React.useState(0);
  const [kiwiCount, setKiwiCount] = React.useState(0);

  function resetFruitCounts(){
    setBananaCount(0);
    setStrawberryCount(0);
    setAppleCount(0);
    setKiwiCount(0);
  }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <article>
          <FruitContainer
            name= "🍌Bananen"
            fruitCount={bananaCount}
            setFruitCount={setBananaCount}
            />
          <FruitContainer
              name= "🍓Aardbeien"
              fruitCount={strawberryCount}
              setFruitCount={setStrawberryCount}
          />
          <FruitContainer
              name= "🍏Appels"
              fruitCount={appleCount}
              setFruitCount={setAppleCount}
          />
          <FruitContainer
              name= "🥝Kiwis"
              fruitCount={kiwiCount}
              setFruitCount={setKiwiCount}
          />
          <Button onClick={() => resetFruitCounts()}>
            Reset!
          </Button>
        </article>
    </>
  );
}

export default App;
