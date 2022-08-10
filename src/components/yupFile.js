import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  chanel: Yup.string().required("Required"),
});
