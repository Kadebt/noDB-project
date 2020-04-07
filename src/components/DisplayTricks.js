import React, { Component } from 'react'
import EditTrick from './EditTrick'
// import './DeleteTrick'
import GoSkate from './GoSkate'
// import Tricks from '../tricks.json'


class Display extends Component{
    
    constructor(){
        super()
        this.state = {
            visible: false
        }
    }
        render() {

        const goSkatemap = this.props.tricks.map(tricksdata => {
            return <div>
                <GoSkate
                key={tricksdata.id}
                tricks={tricksdata}
                name={tricksdata.name}
                flips={tricksdata.flips}
                rotation={tricksdata.rotations}/>
            </div>
        })
        
         const mapped = this.props.tricks.map(tricksdata=>{
            return <div>
                <EditTrick
                key={tricksdata.id}
                tricks={tricksdata}
                name={tricksdata.name}
                flips={tricksdata.flips}
                rotation={tricksdata.rotations}
                editTrick={this.props.editTrick}
                deleteTrick={this.props.deleteTrick}/>
                </div>
        })
        // const changeName = props.tricks.map(tricks => {
        //     return(
        //         <EditTrick
        //         key={tricks.id}
        //         tricks={tricks}
        //         editTrick={this.props.editTrick}
        //         deleteTrick={this.props.deleteTrick}/>
        //     )
        // })
        return(
           <div>
             {this.state.visible ? <div>{mapped}</div> : null}

              {this.state.visible ? <button onClick={() => {
                   this.setState({ visible: false })
               }}>
                   Reset</button> : <button onClick={() => {
                       this.setState({ visible: true })
                   }}>Go Pro</button>}
                   <div><EditTrick/></div>
                     <div><GoSkate/></div>
           </div> 
        )
    }
}
    

export default Display