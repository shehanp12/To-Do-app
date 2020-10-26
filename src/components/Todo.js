import  React,{Component} from  'react'
import TodoItem from "./TodoItem";

class  TodoApp extends Component{
    render(){
        return this.props.todos.map((todo) => (
            <TodoItem todo={todo}/>

            ));


    }
}

export  default  TodoApp;
