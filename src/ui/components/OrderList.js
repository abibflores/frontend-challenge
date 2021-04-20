import React from "react";

export const OrderList = ({ handleClick }) => (
    <div className="OrderList">
        <span className="OrderList__Title">Ordenar Lista</span>
        <div className="OrderList__ButtonContainer">
            <button
                className="OrderList__Button"
                type="button"
                onClick={() => handleClick("ascending")}>
                0 - 100 %
            </button>
            <button
                className="OrderList__Button"
                type="button"
                onClick={() => handleClick("descending")}>
                100 - 0 %
            </button>
        </div>
    </div>
);
