import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function SignUp() {
  const signupSchema = Yup.object().shape({
    email: Yup.string()
      .email("invalid email")
      .required("email cannot be empty"),
    firstName: Yup.string().required("Firstname cannot be empty"),
    age: Yup.number().required(),
    password: Yup.string()
      .required("password cannot be empty")
      .min(8, "passwsord week")
      .max(16, "password too long"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "password should match"
    ),
  });

  let handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          age: 0,
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(e) => handleSubmit(e)}
        validationSchema={signupSchema}
      >
        {(props) => (
          <Form>
            <div>
              <label>FirstName</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" />
            </div>
            <div>
              <label>Age</label>
              <Field type="number" name="age" />
              <ErrorMessage name="age" />
            </div>
            <div>
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label>Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" />
            </div>
            <div>
              <label>Confirm Password</label>
              <Field type="password" name="confirmPassword" />
              <ErrorMessage name="confirmPassword" />
            </div>
            <button type="submit">Signup</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
