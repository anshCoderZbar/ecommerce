import { object, string, ref } from "yup";

export const loginSchema = object({
  email: string()
    .required("Email is required")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Email must be a valid email"
    ),
  password: string().required("Password is required"),
});

export const registerSchema = object({
  email: string()
    .required("Email is required")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Email must be a valid email"
    ),

  password: string()
    .required("Password is required")
    .matches(/^(?=.*?[a-z])/, "Password must contains alphabets")
    .matches(/^(?=.*?[0-9])/, "Password must contains at least one digit")
    .matches(/^(?! ).*[^ ]$/, "Empty spaces are not allowed")
    .matches(
      /^(?=.*?[#?!@$%^&*-])/,
      "Password must contains one special character"
    )
    .min(8, "Password is too short - should be 8 chars minimum.")
    .max(15, "Password is too long - should be 15 chars maximum."),
  confirm_password: string()
    .required("Password is required")
    .oneOf([ref("password")], "Passwords must match"),
});
