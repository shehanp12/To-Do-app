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

markComplete = (id) =>{
         console.log(id)
}


    render(){
    return(
        <div>
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
        </div>
    )
  }
}

export default App;
