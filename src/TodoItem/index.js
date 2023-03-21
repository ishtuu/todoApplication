import './index.css'

const TodoItem = props => {
    const {todoDetails, onDeleteTodo} = props
    const {id, title} = todoDetails

    const onDelete = () => {
        onDeleteTodo(id)
    }

    return(
        <li className="todolist">
            <h1 className='title'>{title}</h1>
            <button type="button" onClick={onDelete} className='button'>Delete</button>
        </li>
    )
}

export default TodoItem
