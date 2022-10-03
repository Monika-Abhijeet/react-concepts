import { Formik, Form, Field, ErrorMessage } from "formik";
function SignIn() {
  function handleSubmit(values) {
    console.log(values);
  }

  function handleValidate(values) {
    const errors = {};
    if (!values.email) {
      errors.email = "Email cannot be empty";
    }
    if (!values.password) {
      errors.password = "Password cannot be empty";
    } else if (values.password.length < 8) {
      errors.password = "password should be min 8 chars";
    }
    console.log(errors);
    return errors;
  }
  return (
    <div>
      <h1>signin</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        validate={(e) => {
          handleValidate(e);
        }}
      >
        {(props) => (
          <Form>
            <div>
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div>
              <label>Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password">
                {(error) => <p>{error}</p>}
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
