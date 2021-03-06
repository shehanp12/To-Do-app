import  React,{Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{

    markComplete =(e) =>{
        console.log(this.props)
    }


    getStyle = () =>{

       return {
           background : '#f4f4f4',
           padding:'10px',
           borderBottom:'1px #ccc dotted',
           textDecoration:this.props.todo.completed ? 'line-through': 'none'
       }
    }


    render(){
        const {id,title} =this.props.todo
        return(
            <div style={this.getStyle()}>
          <p>
              <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '}
              {title}
              <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
          </p>
            </div>

        )
    }
}




//PropTypes
TodoItem.propTypes= {
    todo:PropTypes.object.isRequired
}

const btnStyle= {

    background:'#0000FF',
    color:'#FF0000',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'

}

export  default  TodoItem;