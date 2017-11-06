import React, { Component } from 'react';

class ShoppingList extends Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List</h1>
                <ul>
                    <li>Instagram</li>
                    <li>Whatsapp</li>
                    <li>Facebook</li>
                </ul>
            </div>
        )
    }
}

export default ShoppingList