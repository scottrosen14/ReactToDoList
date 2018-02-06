import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { state, addItem } = this.props;
    return (
      <div className="header">
        <h1>To Do List</h1>
        <form onSubmit={addItem}>
          <input className="enterItem" ref={ (a) => this._inputElement = a }
           placeholder="enter task" />
          <input className="addBtn" type="submit" value="Add Item"/>
        </form>
      </div>
    )
  }
}

export default Header;