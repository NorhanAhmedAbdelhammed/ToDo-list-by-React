import React, { Component } from 'react'
import './AddItem.css'

class AddItem extends Component {

    state = {
        project:"",
        task:""
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.addItem(this.state)
        this.setState({
            project:"",
            task:""
        })
    }
    render() {
        return (
            <div className="addItem" >
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter Project Name" id="project" onChange={this.handleChange} value={this.state.project} />
                    <input type="text" placeholder="Enter Task Name" id="task" onChange={this.handleChange} value={this.state.task} />
                    <button type="submit"> ADD </button>
                </form>
            </div>
        )
    }
}

export default AddItem
