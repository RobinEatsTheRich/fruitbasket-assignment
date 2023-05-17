import React from 'react';
import Button from "../Button/Button";

function FruitContainer ({ name , fruitCount , onClickDecrease , onClickIncrease }){
    return(
        <div className="fruitContainer">
            <h2>
                {name}
            </h2>
            <Button
                isDisabled={fruitCount<1}
                onClick={onClickDecrease}
            >-</Button>
            <p>{fruitCount}</p>
            <Button
                onClick={onClickIncrease}
            >+</Button>
        </div>
    );
}
export default FruitContainer;