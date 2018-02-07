import React, { Component } from 'react';
import './App.css';
// import Header from './Header';
import List from './List';

// TodoApp
//   -TodoHeader
//   -List
//     -Item
//     -Item


class App extends Component {
  constructor() {
    super()
    this.state = {
      current: '',
      items: []
    };
  }

  handleChange = (e) => {
    // every time you press a key the state will reset
    this.setState({current: e.target.value})
    // console.log('state', this.state)
  }

  addItem = (e) => {
    e.preventDefault();
    // make copy of items array
    let itemsCopy = this.state.items.slice();
    if (this.state.current !== "") {
      // add to beginning of copied array
      itemsCopy.unshift({
        text: this.state.current,
        isDone: false
      });
      this.setState({
        current: '',
        items: itemsCopy
      })
      // console.log('state', this.state)
    }
  }

  deleteItem = (index) => {
    const {state} = this;
    // copy the state where items is backwards
    // 3, 2, 1, 0
    let itemsCopy = state.items.slice();
    // iterate forward
    let itemsFiltered = itemsCopy.filter(function(item, i) {
      return i !== index;
    })
    this.setState({items: itemsFiltered})
  }

  markDone = (index) => {
    // copy items
    // when you click on item, if items[index].isDone then switch to notDone
    // if an item is done, make text red
    const itemsCopy = this.state.items.slice();
    itemsCopy[index].isDone = itemsCopy[index].isDone ? false : true;
    this.setState({items: itemsCopy});
  }

  render() {
    const { state, addItem, deleteItem, handleChange, markDone } = this;
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <form onSubmit={addItem}>
            <input type="text" onChange={handleChange} value={state.current}placeholder="enter task" />
            <input className="addBtn" type="submit" value="Add Item"/>
          </form>
        </div>
        <List state={state} items={state.items} deleteItem= {deleteItem} markDone={markDone} />
      </div>
    );
  }
}

export default App;
