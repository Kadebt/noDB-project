import React, {Component} from 'react';
// import './compenents/addTrick'
 import DisplayTricks from './components/DisplayTricks'
// import './compenents/goSkate'
import Header from './components/Header'
// import './App.css';
import axios from 'axios';
// import axios from 'axios'

class App extends Component{
  constructor(){
    super()
    this.state = {
      tricks: []
    }
    this.addTrick = this.addTrick.bind(this)
    this.deleteTrick = this.deleteTrick.bind(this)
    this.editTrick = this.editTrick.bind(this)
  }


  componentDidMount() {
    axios.get('/api/tricks').then(res => {
      this.setState({
        tricks: res.data,
      })
    })
  }

  addTrick(trick){
    // axios.post('api/tricks', { newTrick }).then(res => {
    //   this.setState({
    //     tricks: res.data,
    //   })
    // })
  }
  deleteTrick(id){
    axios.delete(`/api/tricks/${+id}`).then(res => {
      this.setState({
        tricks: res.data,
      })
    })
  }
  editTrick(id, newName){
    axios.put(`/api/tricks/${id}`, {
      newName }).then(res => {
        this.setState({
          tricks: res.data
        })
      })
  }
  goSkate(id){

  }
  
  render(){
  return (
    <div>
      <Header />
     {/* <addTricks
      addTrick={this.addTrick}/> */}
      {/* <goSkate
      goSkate={this.goSkate}/> */}
      <DisplayTricks 
      tricks={this.state.tricks}
      displayAllTricks={this.displayAllTricks}
      editTrick={this.editTrick}
     deleteTrick={this.deleteTrick}/>

    </div>
  );
  }
}


export default App;
