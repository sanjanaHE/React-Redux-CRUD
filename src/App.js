import React from "react";
import "./App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ActionCreators from "./actions/userAction";
import UserForm from "./components/UserForm";

class AddUser extends React.PureComponent {
  constructor(props) {
    console.log("in add user");
    super(props);
    this.state = {
      sucessMessage: null,
      userData: {
        firstname: "",
        lastname: "",
        username: "",
        address: "",
        phone: "",
        email: ""
      }
    };
  }

  render() {
    return (
      <body>
        <h3>Add User</h3>
        <UserForm
          initialValues={this.state.userData}
          onSubmit={this.onSubmit}
        />
        <h3 className="text-success">{this.state.sucessMessage}</h3>
      </body>
    );
  }
  onSubmit = value => {
    console.log("IN SUBMIT", value);
    // this.setState({ userData: value });
    this.props.actions.addUser(this.state.userData);
    this.setState({
      sucessMessage: "Successfully added user!"
    });
  };
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
