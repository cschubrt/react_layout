import React, { useRef, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../assets/css/popup.css';

export default function Login(props) {
  const { toggle } = props;
  const divRef = useRef(null);

  //attach listener for click outside of our dynamic div
  useEffect(() => {
    document.addEventListener('mousedown', handleBoundary);
    return () => {
      //cleanup
      document.removeEventListener('mousedown', handleBoundary);
    }
  }, []);

  const handleBoundary = (e) => {
    if (divRef.current && !divRef.current.contains(e.target)) {
      //clicked outside the div
      toggle();
    }
  };

  return (
    <div className="popup">
      <div ref={divRef} className="popup-inner">
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is Required'),
            password: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Password is Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <h2>Login CS</h2>
            <hr />
            <label htmlFor="email">Email Address</label>
            <Field id="email" name="email" type="email" />
            <div><ErrorMessage name="email" /></div>

            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="text" />
            <div><ErrorMessage name="password" /></div>

            <button type="submit">Submit</button>
            <button type="button" onClick={toggle}>Close</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}