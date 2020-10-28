import React, {Component} from 'react'
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";

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

//Delete Todo
delTodo = (id) =>{
        this.setState({
            todos:[...this.state.todos.filter(
                todo => todo.id !==id
            )]
        });
}



    render(){
    return(
        <div>
        <Header/>
        <AddTodo/>
        <Todos
            todos={this.state.todos}
            markComplete={this.markComplete} delTodo={this.delTodo}
        />
        </div>
    )
  }
}

export default App;
