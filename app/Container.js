import React,{Component} from 'react';
import Snack from './Snack';
import ShoppingCart from './ShoppingCart';
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';

class Container extends Component{
    render(){
        return (
            <div>
                <Snack name="Chips"/>
                <Snack name="Caupcake"/>
                <Snack name="Donute"/>
                <Snack name="Doritos"/>
                <Snack name="Popcorn"/>
                <ShoppingCart />
            </div>
        )
    }
}
export default DragDropContext(HTML5Backend)(Container)