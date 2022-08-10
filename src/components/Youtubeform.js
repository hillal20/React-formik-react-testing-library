import React from "react";
import { useFormik } from "formik";
import { validationSchema } from "./yupFile";
import { initialValues, onSubmit, validate } from "./utils";

const YoutubeForm = () => {
  const fromIK = useFormik({
    initialValues,
    onSubmit,
    // validate, we could use the yup validation dependency
    validationSchema,
  });

  console.log(" error  ===> ", fromIK.errors);
  console.log(" touched   ===> ", fromIK.touched);
  return (
    <form className="form" onSubmit={fromIK.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        id="name"
        type="text"
        // value={fromIK.values.name}
        // onChange={fromIK.handleChange}
        // onBlur={fromIK.handleBlur}
        {...fromIK.getFieldProps("name")}
      />
      {fromIK.touched.name && fromIK.errors.name && (
        <div className="error">{fromIK.errors.name}</div>
      )}
      <label htmlFor="email">E-mail</label>
      <input
        name="email"
        id="email"
        type="email"
        // value={fromIK.values.email}
        // onChange={fromIK.handleChange}
        // onBlur={fromIK.handleBlur}
        {...fromIK.getFieldProps("email")}
      />
      {fromIK.touched.email && fromIK.errors.email && (
        <div className="error">{fromIK.errors.email}</div>
      )}
      <label htmlFor="chanel">Chanel</label>
      <input
        name="chanel"
        id="chanel"
        type="text"
        // value={fromIK.values.chanel}
        // onChange={fromIK.handleChange}
        // onBlur={fromIK.handleBlur}
        {...fromIK.getFieldProps("chanel")}
      />
      {fromIK.touched.chanel && fromIK.errors.chanel && (
        <div className="error">{fromIK.errors.chanel}</div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default YoutubeForm;
