import React, {useState} from 'react';
import Button from "../Button/Button";
import FruitContainer from "../FruitContainer/FruitContainer";

function FruitContainersParent (){

    const [bananaCount, setBananaCount] = useState(0);
    const [strawberryCount, setStrawberryCount] = useState(0);
    const [appleCount, setAppleCount] = useState(0);
    const [kiwiCount, setKiwiCount] = useState(0);

    function resetAllFruit(){
        setBananaCount(0);
        setStrawberryCount(0);
        setAppleCount(0);
        setKiwiCount(0);
    }

    return(
        <article>
            <FruitContainer
                name= "🍌Bananen"
                fruitCount={bananaCount}
                onClickIncrease={() => setBananaCount(bananaCount+1)}
                onClickDecrease={() => setBananaCount(bananaCount-1)}
            />
            <FruitContainer
                name= "🍓Aardbeien"
                fruitCount={strawberryCount}
                onClickIncrease={() => setStrawberryCount(strawberryCount+1)}
                onClickDecrease={() => setStrawberryCount(strawberryCount-1)}
            />
            <FruitContainer
                name= "🍏Appels"
                fruitCount={appleCount}
                onClickIncrease={() => setAppleCount(appleCount+1)}
                onClickDecrease={() => setAppleCount(appleCount-1)}
            />
            <FruitContainer
                name= "🥝Kiwis"
                fruitCount={kiwiCount}
                onClickIncrease={() => setKiwiCount(kiwiCount+1)}
                onClickDecrease={() => setKiwiCount(kiwiCount-1)}
            />


            <Button
                id="resetButton"
                onClick={resetAllFruit}
            >Reset
            </Button>
        </article>
    );
}
export default FruitContainersParent;