import React, { useRef, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../assets/css/popup.css';

export default function Contact(props) {
  const { toggle } = props;
  const divRef = useRef(null);

  //MOVE TO COMPONENT/CONTAINER<-
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
      //clicked outside the div, close
      toggle();
    }
  };

  return (
    <div className="popup">
      <div ref={divRef} className="popup-inner">
        <Formik
          initialValues={{ name: '', contactEmail: '', comment: '' }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(50, 'Must be 50 characters or less')
              .required('Name is Required'),
            contactEmail: Yup.string()
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
            <h2>Contact CS</h2>
            <hr />
            <label htmlFor="name">Your Name</label>
            <Field id="name" name="name" type="text" />
            <div><ErrorMessage name="name" /></div>

            <label htmlFor="contactEmail">Email Address</label>
            <Field id="contactEmail" name="contactEmail" type="email" />
            <div><ErrorMessage name="contactEmail" /></div>

            <label htmlFor="comment">Comment</label>
            <Field id="comment" name="comment" as="textarea" />
            <div><ErrorMessage name="comment" /></div>

            <button type="submit">Submit</button>
            <button type="button" onClick={props.toggle}>Close</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}