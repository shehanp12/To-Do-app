import React, {Component} from 'react'
import TodoApp from "./components/Todo";

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

    render(){
    return(
        <div>
        <TodoApp todos={this.state.todos} />
        </div>
    )
  }
}

export default App;
