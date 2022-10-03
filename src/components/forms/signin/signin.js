import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";

function SignIn() {
  let dispatch = useDispatch();
  let handleSubmit = (values) => {
    let emailId = "monika@gmail.com";
    let pwd = "monika1234";

    if (values.email === emailId && values.password === pwd) {
      dispatch({ type: "SIGNIN" });
    } else {
      dispatch({ type: "SIGNOUT" });
    }
  };
  let handleValidation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = " Email cannot be empty";
    }
    // if (!values.password) {
    //   errors.password = "Password cannot be empty";
    // } else if (values.password.length < 8) {
    //   errors.password = "Password should have minimum 8 characters";
    // }
    return errors;
  };

  let validatePassword = (value) => {
    if (!value) {
      return "password cant be empty";
    } else if (value.length < 8) {
      return "Password should have minimum 8 characters";
    }
    return undefined;
  };

  return (
    <div>
      <h1>Sign In</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(e) => handleSubmit(e)}
        validate={(e) => handleValidation(e)}
      >
        {(props) => (
          <Form>
            <div>
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label>Password</label>
              <Field
                type="password"
                name="password"
                validate={(e) => validatePassword(e)}
              />
              <ErrorMessage name="password">
                {(error) => <p style={{ color: "red" }}>{error}</p>}
              </ErrorMessage>
            </div>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default SignIn;
