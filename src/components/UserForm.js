import React from "react";
import { reset, Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "Required";
  } else if (values.firstname.length > 15) {
    errors.firstname = "Must be 15 characters or less";
  }
  if (!values.lastname) {
    errors.lastname = "Required";
  } else if (values.lastname.length > 15) {
    errors.lastname = "Must be 15 characters or less";
  }
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }
  if (!values.address) {
    errors.address = "Required";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.length != 10 && isNaN(Number(values.phone))) {
    errors.phone = "Must be valid phone number";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div className="col-md6 form-group ">
      <input
        {...input}
        placeholder={label}
        type={type}
        className="form-control"
      />
      {touched && (error && <span className="text-danger">{error}</span>)}
    </div>
  </div>
);

const UserForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  // console.log(props);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="firstname"
          component="input"
          type="text"
          placeholder="First Name"
          component={renderField}
          label="Firstname"
        />
      </div>

      <div>
        <Field
          name="lastname"
          component="input"
          type="text"
          placeholder="Last Name"
          component={renderField}
          label="Lastname"
        />
      </div>

      <div>
        <Field
          name="username"
          component="input"
          type="text"
          placeholder="Username"
          component={renderField}
          label="Username"
        />
      </div>

      <div>
        <Field
          name="email"
          component="input"
          type="email"
          placeholder="Email"
          component={renderField}
          label="Email"
        />
      </div>

      <div>
        <Field
          name="phone"
          component="input"
          type="phone"
          placeholder="9999999999"
          component={renderField}
          label="Phone"
        />
      </div>

      <div>
        <Field
          name="address"
          component="textarea"
          component={renderField}
          label="Address"
        />
      </div>

      <div className="row">
        {/* disabled={pristine || submitting} */}
        <div className="col-md-1">
          <button type="submit" className="btn btn-info" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        <div className="col-md-1">
          <button
            type="button"
            className="btn btn-dark"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </button>
        </div>
        <div className="col-md-1">
          <Link to="/users">
            <button type="button" className="btn btn-dark">
              Back
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "simple",
  validate // <--- validation function given to redux-form
})(UserForm);
