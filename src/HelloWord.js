import React, { Component } from 'react';
import StateInput from './StateInput';
import ShoppingList from './ShoppingList';

class HelloWord extends Component {
    constructor(props){
        super(props)

        console.log(props, this.props)

        this.state = {
            name: 'Rafael Augusto',
            txt: this.props
        }

        this.updateInputName = this.updateInputName.bind(this)
    }

    updateInputName(e) {
        return this.setState({
            name: e.target.value
        })
    }

    render(){
        const result = 4;
        const style = {
            color: '#ff0000',
            fontSize: 50
        }
        return (

            <div className="myClass-from-react">
                <div>
                    <input type="text" name="name" value={this.state.name} onChange={this.updateInputName} />
                </div>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
                <StateInput />
                <ShoppingList name="Mark" />
                <h1 style={style}>Hello Word React</h1>
                <h4>{ result === 2 * 2 ? 'TRUE' :  'FALSE'}</h4>
                <span>{this.state.name}</span>
            </div>
        )
    }
}

export default HelloWord