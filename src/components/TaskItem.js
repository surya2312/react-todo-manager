import React, { Component } from 'react';
import {ListGroupItem, Badge } from 'reactstrap';

class TaskItem extends Component {
  deleteTask(id){
    this.props.onDelete(id);
  }
  render() {
    return (
        <ListGroupItem className="Task justify-content-between">
          <span>
            <strong>{this.props.task.title}</strong> | {this.props.task.status} 
          </span>
          <h5>
            <Badge color="danger" onClick={this.deleteTask.bind(this, this.props.task.id)}>Delete</Badge>
          </h5>
        </ListGroupItem>
    );
  }
}


TaskItem.propTypes = {
  task: React.PropTypes.object,
  onDelete: React.PropTypes.func
}
export default TaskItem;
