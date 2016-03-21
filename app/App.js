import React from 'react';
import {render} from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import update from 'react-addons-update';

class AnimatedShoppingList extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            items: [
                {id: 1, name: 'Milk'},
                {id: 2, name: 'Yogurt'},
                {id: 3, name: 'Orange Juice'}
            ]
        }
    }

    handleChange(evt) {
        if (evt.key === 'Enter') {
            let newItem = {id: Date.now(), name: evt.target.value}
            let newItems = update(this.state.items, {
                $push: [newItem]
            });
            evt.target.value = '';
            this.setState({items: newItems});
        }
    }

    handleRemove(i) {
        let newItems = update(this.state.items, {
            $splice: [[i, 1]]
        })
        this.setState({items: newItems});
    }

    render() {
        let shoppingItems = this.state.items.map((item, i)=>(
            <div key={item.id} className="item" onClick={
            this.handleRemove.bind(this,i)
            }>{item.name}</div>
        ));
        return (
            <div>
                <ReactCSSTransitionGroup transitionName="example"
                                         transitionEnterTimeout={300}
                                         transitionLeaveTimeout={300}
                                         transitionAppear={true}
                                         transitionAppearTimeout={300}
                >
                    {shoppingItems}
                    <input type="text" value={this.state.newItem} onKeyDown={this.handleChange.bind(this)}/>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

render(<AnimatedShoppingList/>, document.getElementById('root'))