import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
  }
  onClickClose = () => {
    const { index } = this.props;
    // console.log('props', this.props)
    this.props.deleteItem(index);
  }
  onClickDone = () => {
    const { index } = this.props;
    this.props.markDone(index);
  }
  render () {
    const { state, index } = this.props;
    // console.log('items', items)
    return (
      <li>
        {state.items[index].text}
        <span className="close" onClick={ this.onClickClose }>
        X
        </span>
      </li>
    )
  }
}


export default Item;