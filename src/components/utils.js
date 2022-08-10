export const initialValues = {
    name: "",
    email: "",
    chanel: "",
  }

export const onSubmit = (values) => {
    console.log(" submit values ====>", values);
  }
export const validate = (values) => {
    let errors = {};
    if (!values.name || values.name === "") errors.name = "required";
    if (!values.email || values.email === "") errors.email = "required";
    if (!values.chanel || values.chanel === "") errors.chanel = "required";
    return errors;
  }