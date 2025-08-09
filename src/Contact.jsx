import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './assets/css/login.css';

export default function Contact(props) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <Formik
          initialValues={{ name: '', email: '', comment: '' }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(50, 'Must be 50 characters or less')
              .required('Name is Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Email is Required'),
            comment: Yup.string()
              .max(1000, 'Must be 1000 characters or less')
              .required('Comment is Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <label htmlFor="name">Your Name</label>
            <Field id="name" name="name" type="text" />
            <div><ErrorMessage name="name" /></div>

            <label htmlFor="email">Email Address</label>
            <Field id="email" name="email" type="email" />
            <div><ErrorMessage name="email" /></div>

            <button type="submit">Submit</button>
            <button type="button" onClick={props.toggle}>Close</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}