import React, { Component } from 'react';

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'Ainda não clicou',
        };
      }
    
      render() {
        return (
          <button className="square" onClick={() => this.setState({value: 'Clicou aqui'})}>
            {this.state.value}
          </button>
        );
      }
}

export default ShoppingList