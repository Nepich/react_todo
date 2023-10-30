import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from "../UI/Button"
import styles from './TodosActions.module.css'

function TodosActions({resetTodos, deletComplitedTodos, complitedTodosExist}){
    return <div className={styles}>
    <Button  
        title='Reset Todos' 
        onClick={resetTodos}>
            <RiRefreshLine />
    </Button>
    <Button 
        title='Clear complited Todos' 
        onClick={deletComplitedTodos} 
        disabled={!complitedTodosExist}>
            <RiDeleteBin2Line/>
    </Button>
    </div>
}

export default TodosActions