import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "./yupFile";
import { initialValues, onSubmit } from "./utils";

const FormikFormReactContext = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="form">
        <label htmlFor="name">Name</label>
        <Field name="name" id="name" type="text" />
        <ErrorMessage name="name" />
        <label htmlFor="email">E-mail</label>
        <Field name="email" id="email" type="email" />
        <ErrorMessage name="email" />
        <label htmlFor="chanel">Chanel</label>
        <Field name="chanel" id="chanel" type="text" />
        <ErrorMessage name="chanel" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikFormReactContext;
