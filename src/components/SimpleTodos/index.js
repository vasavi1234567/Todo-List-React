import {Component} from 'react'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    completed: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    completed: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    completed: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    completed: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    completed: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    completed: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    completed: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    completed: false,
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    newTitle: '',
    newCount: 1,
  }

  addTodo = () => {
    const {newTitle, newCount} = this.state
    const newTodo = Array.from({length: newCount}, (_, i) => ({
      id: Date.now() + i,
      title: newTitle,
      completed: false,
    }))
    this.setState(prevState => ({
      todosList: [...prevState.todosList, ...newTodo],
      newTitle: '',
      newCount: 1,
    }))
  }

  onChangeTodo = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  deleteTodo = id => {
    this.setState(prevState => {
      const filteredData = prevState.todosList.filter(todo => todo.id !== id)
      return {todosList: filteredData}
    })
  }

  onToggle = id => {
    this.setState(prevState => {
      const filteredData = prevState.todosList.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      )
      return {todosList: filteredData}
    })
  }

  render() {
    const {todosList, newTitle, newCount} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">Simple Todos</h1>
          <div className="add-todo-container">
            <input
              className="input"
              type="text"
              name="newTitle"
              value={newTitle}
              onChange={this.onChangeTodo}
              placeholder="Enter Todo Title"
            />
            <input
              className="input"
              type="number"
              name="newCount"
              value={newCount}
              onChange={this.onChangeTodo}
              placeholder="Enter number of Todos"
            />
            <button type="button" onClick={this.addTodo}>
              Add
            </button>
          </div>
          <ul className="list-container">
            {todosList.map(todo => (
              <TodoItem
                todoDetails={todo}
                key={todo.id}
                deleteTodo={this.deleteTodo}
                onToggle={this.onToggle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
