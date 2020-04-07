import React, {Component} from 'react'

class EditTrick extends Component{
    constructor(){
        super()
        this.state = {
            editing: false,
            input: ''
        }
        this.toggle = this.toggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSaveTrick = this.handleSaveTrick.bind(this)
    }
    toggle(){
        this.setState({
            editing: !this.state.editing
        })
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    handleSaveTrick(){
        this.props.editTrick(this.props.tricks.id, this.state.input)
        this.toggle()
    }
    
    render() {
        console.log(this.props)
    return(
        <div>
            {this.state.editing ? (
                <div>
                    <input onChange={this.handleChange}/>
                    <button onClick={this.toggle}>Cancel</button>
                    <button onClick={this.handleSaveTrick }>Save</button>
                </div>
            ) : (
            <div className="show-all">
            <p><button onClick={this.toggle}>edit</button>{this.props.name}</p> 
            <p>{this.props.flips}</p> 
            <p> {this.props.rotation}</p>
            <button
                onClick={() => this.props.deleteTrick(this.props.tricks.id)}
                >
                Delete
            </button>
            </div>
            )}
            {/* <button
                onClick={() => this.props.deleteTrick(this.props.tricks.id)}
                >
                Delete
            </button> */}
        </div>
    )
}
}
export default EditTrick