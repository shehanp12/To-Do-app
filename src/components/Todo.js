import  React,{Component} from  'react'
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'

class  TodoApp extends Component{
    render(){
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo}/>

            ));

    }
}

export  default  TodoApp;
//PropTypes
TodoApp.propTypes = {
    todo:PropTypes.array.isRequired
}