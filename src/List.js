import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
  constructor(props) {
    super(props);
  }

  createTasks = (item, i) => {
    const { state, deleteItem } = this.props;
    // console.log('List state', state);
    return (
      <Item state={state} key={i} item={item} index={i} deleteItem={ deleteItem } />
    )
  }

  render() {
    // entries is an array of the item objects that each have a text property
    // pull down props
    // iterate through this.props.items and add the items to itemNodes
    // place itemNodes within the ul
    const { state } = this.props;
    // iterate forward and assign index
    // console.log('state items', state.items)
    const itemNodes = state.items.slice().map(this.createTasks);
    // console.log('Nodes', itemNodes)

    return (
      <ul className="list">
        {itemNodes}
      </ul>
    )
  }
}

export default List;