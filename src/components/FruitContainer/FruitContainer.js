import React from 'react';
import Button from "../Button/Button";

function FruitContainer ({ name , fruitCount , setFruitCount , children }){
    [fruitCount, setFruitCount] = React.useState(0);

    return(
        <div className="fruitContainer">
            <h2>
                {name}
            </h2>
            <Button
                isDisabled={fruitCount<1}
                onClick={() => setFruitCount(fruitCount-1)}
            >-
            </Button>
            <p>{fruitCount}</p>
            <Button
                onClick={() => setFruitCount(fruitCount+1)}
            >+
            </Button>
            {children}
        </div>
    );
}
export default FruitContainer;