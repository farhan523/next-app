import * as Yup from "yup";

import {
  VALIDATION_ERROR_MSGS_FIRSTNAME,
  VALIDATION_ERROR_MSGS_LASTNAME,
  VALIDATION_ERROR_MSGS_EMAIL,
  VALIDATION_ERROR_MSGS_PASSWORD,
  VALIDATION_ERROR_MSGS_CONFIRMPASSWORD,
} from "./validationErrorMsgs";

export const LOGIN_SCHEMA = Yup.object({
  firstName: Yup.string().required(VALIDATION_ERROR_MSGS_FIRSTNAME.REQUIRED),
  lastName: Yup.string().required(VALIDATION_ERROR_MSGS_LASTNAME.REQUIRED),
  email: Yup.string()
    .email(VALIDATION_ERROR_MSGS_EMAIL.EMAIL_ADDRESS)
    .required(VALIDATION_ERROR_MSGS_EMAIL.REQUIRED),
  password: Yup.string()
    .min(8, VALIDATION_ERROR_MSGS_PASSWORD.MIN_STRING_LENGTH)
    .max(20, VALIDATION_ERROR_MSGS_PASSWORD.MAX_STRING_LENGTH)
    .required(VALIDATION_ERROR_MSGS_PASSWORD.REQUIRED),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], VALIDATION_ERROR_MSGS_CONFIRMPASSWORD.NOT_MATCHING)
    .required(VALIDATION_ERROR_MSGS_CONFIRMPASSWORD.NOT_MATCHING),
});
