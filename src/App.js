import React, { Component } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import uuid from 'uuid';
import './App.css';
import { Badge } from 'reactstrap';


class App extends Component {
 
constructor(){
  super();
  this.state = {
    tasks: []
  }
}

getToDos(){
  this.state = {
    tasks: [
      {
        id: uuid.v4(),
        title:'Laundry',
        status: 'Incomplete'
      },
      {
        id: uuid.v4(),
        title:'Go to Walmart',
        status: 'Incomplete'
      },
      {
        id: uuid.v4(),
        title:'Upload code to github',
        status: 'Incomplete'
      }
    ]
  }
};

componentWillMount(){
  this.getToDos();
}

componentDidMount(){

}

handleAddTask(task){
  let tasks = this.state.tasks;
  tasks.push(task);
  this.setState({tasks:tasks});
}

handleDeleteTask(id){
  let tasks = this.state.tasks;
  let index = tasks.findIndex(x => x.id === id);
  tasks.splice(index,1);
  this.setState({tasks: tasks});
}
render() {
    return (
      <div className="App">
        <center><h1><Badge>My Task Manager</Badge></h1></center>
        <AddTask addTask={this.handleAddTask.bind(this)}/>
        <Tasks tasks={this.state.tasks} onDelete={this.handleDeleteTask.bind(this)}/>
      </div>
    );
  }
}

export default App;