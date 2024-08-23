// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    edit: false,
    updateTitle: '',
  }

  onEdit = () => {
    const {todoDetails} = this.props
    this.setState({
      edit: true,
      updateTitle: todoDetails.title,
    })
  }

  onSave = () => {
    this.setState({edit: false})
  }

  onChangeTodo = event => {
    this.setState({updateTitle: event.target.value})
  }

  render() {
    const {todoDetails, deleteTodo, onToggle} = this.props
    const {edit, updateTitle} = this.state

    return (
      <li className={todoDetails.completed ? 'todo completed' : 'todo'}>
        {edit ? (
          <>
            <input
              className="todo-input"
              type="text"
              value={updateTitle}
              onChange={this.onChangeTodo}
            />
            <button className="button" type="button" onClick={this.onSave}>
              Save
            </button>
          </>
        ) : (
          <div className="todos-container">
            <input
              className="checkbox-input"
              type="checkbox"
              checked={todoDetails.completed}
              onChange={() => onToggle(todoDetails.id)}
            />
            <p className="title">{todoDetails.title}</p>
            <div className="buttons-container">
              <button className="button" type="button" onClick={this.onEdit}>
                Edit
              </button>
              <button
                className="delete-button"
                type="button"
                onClick={() => deleteTodo(todoDetails.id)}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </li>
    )
  }
}

export default TodoItem
