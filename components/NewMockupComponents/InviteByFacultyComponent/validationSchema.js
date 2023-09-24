import * as Yup from "yup";

import { VALIDATION_ERROR_MSGS_EMAIL } from "./validationErrorMsgs";

export const FORGET_PASSWORD_SCHEMA = Yup.object({
  name: Yup.string().min(3, "Name is not valid").required("Name is required"),
  email: Yup.string()
    .email(VALIDATION_ERROR_MSGS_EMAIL.EMAIL_ADDRESS)
    .required(VALIDATION_ERROR_MSGS_EMAIL.REQUIRED),
    usaState: Yup.number().required("State is required"),
    university: Yup.number().required("University is required")
});

export const INVITE_BY_FACULTY_SCHEMA = Yup.object({
  name: Yup.string().min(3, "Name is not valid").required("Name is required"),
  email: Yup.string()
    .email(VALIDATION_ERROR_MSGS_EMAIL.EMAIL_ADDRESS)
    .required(VALIDATION_ERROR_MSGS_EMAIL.REQUIRED)
});
