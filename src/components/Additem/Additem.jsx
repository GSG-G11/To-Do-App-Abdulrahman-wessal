import React from "react";
import './Additem.css'
class Additem extends React.Component{
state={
    desc:""
}

handleChange=(e)=>{
 
    this.setState({
    desc : e.target.value
}
    )
}
onSubmit=(e)=>{
    e.preventDefault()
    this.props.addItem(this.state)
    this.setState({
        desc:""
    })
}


    render(){
        return(
            <div className="AddItemForm">
                <form onSubmit={this.onSubmit} >
                    <h1>To Do App</h1>
                    <input type="text" id="desc" placeholder="Add task" onChange={this.handleChange} value={this.state.desc}/>
                    <input type="submit" value="Add" className="Add" />
                </form>
            </div>
        )
    }
}

export default Additem
