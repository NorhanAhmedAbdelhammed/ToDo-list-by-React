import React, { Component } from 'react'
import './App.css';
import ViewData from './components/ViewData/ViewData';
import AddItem from './components/AddItem/AddItem'


export class App extends Component {
  state = {
    items: [
      { id: 1, project: "react project 1", task: "home page" },
      { id: 2, project: "react project 2", task: "products page" },
      { id: 3, project: "react project 3", task: "home page" }
    ]
  }

  deleteItem = (idItem)=>{
    const newItem = this.state.items.filter(item => { return item.id !== idItem})
    this.setState({items:newItem})
  }

  addItem = (newItem) =>{
    let items=this.state.items
    newItem.id=Math.random()
    items.push(newItem)
    this.setState({items})
  }

  render() {
    return (
      <div className="app container" >
        <h1>ToDo List</h1>
        <AddItem  addItem={this.addItem}/>
        <ViewData data={this.state.items} deleteItem={this.deleteItem} />
      </div>
    )
  }
}

export default App
