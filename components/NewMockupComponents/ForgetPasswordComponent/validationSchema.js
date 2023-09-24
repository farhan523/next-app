import * as Yup from "yup";

import { VALIDATION_ERROR_MSGS_EMAIL } from "./validationErrorMsgs";

export const FORGET_PASSWORD_SCHEMA = Yup.object({
  email: Yup.string()
    .email(VALIDATION_ERROR_MSGS_EMAIL.EMAIL_ADDRESS)
    .required(VALIDATION_ERROR_MSGS_EMAIL.REQUIRED),
});
