import React, { Component } from 'react';
import { ListGroup, Badge, Container, Row, Col } from 'reactstrap';
import TaskItem from './TaskItem';
import '../App.css';

class Tasks extends Component {
  deleteTask(id){
    this.props.onDelete(id);
  }
  render() {
    let taskItems;
    if(this.props.tasks){
      taskItems = this.props.tasks.map(task =>{
        return(
          <ListGroup key={task.id} >
            <TaskItem onDelete={this.deleteTask.bind(this)} task={task}/>
          </ListGroup>
        );
      });
  } 
    return (
      <div className="Tasks">
        <hr className="my-2" />
        <br/>
        <center> <h2><Badge color="info" pill>Task list</Badge></h2> </center>  
        <div className="center-div">
          <Container>
            <Row>
              <Col>
                {taskItems}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

Tasks.propTypes = {
  tasks: React.PropTypes.array,
  onDelete: React.PropTypes.func
}
export default Tasks;
