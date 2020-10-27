import React, {Component} from 'react'
import Todos from "./components/Todos";

class App extends Component{

    state = {
        todos: [
            {
                id:1,
                title:"Complete the assignment",
                completed:false
            },
            {
                id:2,
                title: "Talk with next client",
                completed: false
            },
            {
                id:3,
                title: "Go to the gym",
                completed: false
            }

        ]
    }

markComplete = (id) => {
        this.setState({todos:this.state.todos.map(todo =>{
            if(todo.id === id){
                todo.completed =! todo.completed
            }
            return todo
            })});
}

delTodo = (id) =>{
        this.setState( )

}



    render(){
    return(
        <div>
        <Todos
            todos={this.state.todos}
            markComplete={this.markComplete} delTodo={this.delTodo}
        />
        </div>
    )
  }
}

export default App;
