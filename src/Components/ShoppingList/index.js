import React from 'react';
import './style.scss';

function ShoppingList() {
    return(
        <div className="ShoppingList">
            <h2>Shopping List</h2>
            <div className="shopping-list-container">
                <input type="checkbox" value="apple"/>
                <label>Apples</label>
                <br/>
                <input type="checkbox" value="tomato"/>
                <label>Tomatoes</label>
                <br/>
                <input type="checkbox" value="Cinnamon"/>
                <label>Cinnamon</label>
                <br/>
            </div>
        </div>
    );
}

export default ShoppingList;