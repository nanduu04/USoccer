// Create an event --> how to do
// Form to fill in the information 
// Get location from user and fill it in??

import React, {Component} from 'react'


class Create extends React.Component {
    state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    };
  
    change = e => {
      this.props.onChange({ [e.target.name]: e.target.value });
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  
    onSubmit = e => {
      e.preventDefault();
      // this.props.onSubmit(this.state);
      this.setState({
        firstName: "",
        lastName: "",
        username: "",
        eventType: "",
        time: ""
      });
      this.props.onChange({
        firstName: "",
        lastName: "",
        username: "",
        eventType: "",
        time: ""
      });
    };
  
    render() {
      return (
        <form>
          <input
            name="firstName"
            placeholder="First name"
            value={this.state.firstName}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="lastName"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="email"
            placeholder="Email"
            value={this.state.eventType}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="Time"
            type="time"
            value={this.state.time}
            onChange={e => this.change(e)}
          />
          <br />
          <button onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
      );
    }
  }

  class CreateEvent extends Component {
    state = {
      fields: {}
    };
  
    onChange = updatedValue => {
      this.setState({
        fields: {
          ...this.state.fields,
          ...updatedValue
        }
      });
    };
  
    render() {
      return (
        <div >
          <Create onChange={fields => this.onChange(fields)} />
          <p>
            {JSON.stringify(this.state.fields, null, 2)}
          </p>
        </div>
      );
    }
  }
  
  export default CreateEvent;