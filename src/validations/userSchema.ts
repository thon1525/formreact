import * as yup from "yup";

const userSchema = yup.object().shape({
    id: yup.number().required().min(1).max(100),
    username: yup.string().required().min(1).max(25),
  password: yup.string().required().min(8).max(25),
  age: yup.string().required().min(2).max(100),
  image: yup.string().required(),

});

export { userSchema };