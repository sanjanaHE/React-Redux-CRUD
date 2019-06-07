import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ActionCreators from "./../actions/userAction";
import UserForm from "../components/UserForm";

class UpdateUser extends React.PureComponent {
  constructor(props) {
    // console.log("in update user");
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
  componentWillMount() {
    this.props.actions.getUserFromId(this.props.match.params.id);
  }
  //   componentDidMount() {
  //     this.setState({
  //       firstname: this.props.users.udata.first_name,
  //       lastname: this.props.users.udata.last_name,
  //       email: this.props.users.udata.email
  //     });
  //   }
  render() {
    console.log("PROPS", this.props);
    const user =
      this.props.users && this.props.users.udata && this.props.users.udata;
    if (user) {
      const transformedUser = {
        firstname: user.first_name,
        lastname: user.last_name,
        email: user.email
      };
      return (
        <body>
          <h3>Update User</h3>
          <UserForm initialValues={transformedUser} onSubmit={this.onSubmit} />
          <h3 className="text-success">{this.state.sucessMessage}</h3>
        </body>
      );
    }
    return <div>Failed to retreive user data...</div>;
  }

  onSubmit = value => {
    // console.log("IN SUBMIT", value);
    // this.setState({ userData: value });
    this.props.actions.updateUser(this.props.match.params.id, value);
    this.setState({ sucessMessage: "Successfully updated user!" });
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
)(UpdateUser);
