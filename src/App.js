import React, { Component } from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todo=[
  {
    name: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state={
      todoList: todo,
      life: 42
    }
  }

  toggleItem = id => {
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      } else{
        return item;
      }
    })
    this.setState({
      todoList: newTodoList
    })
  }

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todoList, newItem]
    })
  }

  render() {
    console.log('rendering...');

    return (
      <div>
        <h2>Todo App!</h2>
        <TodoForm addItem={this.addItem}/>
        <TodoList
          todo={this.state.todoList}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
