import * as Yup from "yup";

export default Yup.object().shape({
  username: Yup.string()
    .min(3,"username must be at least 3 characters long!")
    .required("Name is required!"),
  password: Yup.string()
    .min(3, "Password Must be at Least 3 Characters Long!")
    .required("Please Enter A Password!"),
  instructor: Yup.boolean(),
})