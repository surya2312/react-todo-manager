import React, { Component } from 'react';
import uuid from 'uuid';
import { Form, FormGroup, Input, Container, Row, Col, InputGroup, InputGroupButton } from 'reactstrap';

class AddTask extends Component {
  constructor(){
    super();
    this.state = {
      newTask:{}
    }
  }
  static defaultProps ={
    statusOptions : ['incomplete', 'complete', 'In progress']
  }

  handleSubmit(e){
    
    if(this.title.value === ''){
      alert('Title is required');
    }else{
      this.setState({
        newTask :{
          id: uuid.v4(),
          title:this.title.value,
          status: 'incomplete'
        }}, function(){
          console.log(this.state.newTask);
          this.props.addTask(this.state.newTask);
        });
    } 
    e.preventDefault();
  }
  render() {
    /*let statusOptions = this.props.statusOptions.map(status =>{
      return <option key={status} value={status}>{status}</option>
    }); */
    return (
      <div>
        <Form className="well" onSubmit={this.handleSubmit.bind(this)}>
         <Container className="container-div">
            <Row>
              <Col>
                <FormGroup>
                  <InputGroup>
                    <Input type="text"
                      name="title"
                      getRef={(input) => (this.title = input)}
                      id="title"
                      placeholder="Add a task..."/>
                      <InputGroupButton color="primary">Add Task</InputGroupButton>
                  </InputGroup>
                </FormGroup>
                <hr className="my-2" />
              </Col>
            </Row>
          </Container>  
        </Form>
      </div>
    );
  }
}


AddTask.propTypes = {
  status: React.PropTypes.array,
  addTask: React.PropTypes.func
}

export default AddTask;

/*

        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label> Title</label><br/>
            <input type="text" ref="title"/>
          </div>
          <div>
            <label> Status</label><br/>
            <select ref="status">
              {statusOptions}
            </select>
          </div>
          <input type="submit" value="submit"/>
        </form>
        #eceeef
*/