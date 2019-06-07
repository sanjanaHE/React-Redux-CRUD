import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ActionCreators from "../actions/userAction";
import Table from "react-bootstrap/Table";

class Users extends React.PureComponent {
  componentWillMount() {
    console.log("COMPONENT DID MOUNT");
    this.props.actions.getUsers();
    this.setState({ users: this.props.users.data });
  }

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  //to redirect to add page
  routeChangeAdd = () => {
    let path = `/add`;
    this.props.history.push(path);
  };
  handleUpdate = id => {
    let path = `/usersUpdate/${id}`;
    this.props.history.push(path);
  };
  handleDelete = id => {
    this.props.actions.userDelete(id);
  };
  componentWillUnmount() {
    this.props = null;
  }
  render() {
    // console.log("PROP", this.props.users.data);
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-10">
            <h3>Users</h3>
          </div>
          <div className="col-md-2 float-right">
            <button
              type="button"
              className="btn btn-info"
              onClick={this.routeChangeAdd}
            >
              Add
            </button>
          </div>
        </div>

        <div>
          {this.props.users.deleted ? (
            <h3 className="text-danger">User deleted !</h3>
          ) : null}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.users.data != undefined ? (
                this.props.users.data.map((user, index) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>

                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        value={user.id}
                        name="userUpdate"
                        onClick={() => this.handleUpdate(user.id)}
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        value={user.id}
                        name="userDelete"
                        onClick={() => this.handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <p>loading</p>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
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
)(Users);
