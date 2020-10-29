import React, {Component} from 'react'
import  {BrowserRouter  as Router, Route } from 'react-router-dom';
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import './App.css'
import {v4 as uuid} from 'uuid';
import About from "./components/pages/About";


class App extends Component {

    state = {
        todos: [
            {
                id:uuid.v4,
                title:"Complete the assignment",
                completed:false
            },
            {
                id:uuid.v4,
                title: "Talk with next client",
                completed: false
            },
            {
                id:uuid.v4,
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

//Add Todo
addTodo = (title) =>{

        const newTodo = {
            id:uuid.v4,
            title,
            completed:false
        }

        this.setState({todos:[...this.state.todos,newTodo]});

}
    render(){
    return(
        <Router>
            <div>
                <Header/>
                <Route exact path="/"  render={props =>(
                    <React.Fragment>
                        <AddTodo  addTodo={this.addTodo}/>
                        <Todos
                            todos={this.state.todos}
                            markComplete={this.markComplete} delTodo={this.delTodo}
                        />
                    </React.Fragment>

                )}/>
                <Route path="/about" component={About} />


            </div>
        </Router>

    )
  }
}

export default App;
