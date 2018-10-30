import React from 'react'

const Todo = props => {
  return(
    <div>
      <span>{props.todotext}</span><button onClick= {() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  )
}

export default Todo;
