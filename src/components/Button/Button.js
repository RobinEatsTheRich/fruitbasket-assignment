import React from 'react';
function Button ({ buttonType , isDisabled , onClick , children }){
    return(
        <button
            type={buttonType}
            disabled={isDisabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
export default Button;