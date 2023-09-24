import * as Yup from "yup";

import { VALIDATION_ERROR_MSGS_PASSWORD } from "./validationErrorMsgs";

export const RESET_PASSWORD_SCHEMA = Yup.object({
  password: Yup.string()
    .min(8, VALIDATION_ERROR_MSGS_PASSWORD.MIN_STRING_LENGTH)
    .max(20, VALIDATION_ERROR_MSGS_PASSWORD.MAX_STRING_LENGTH)
    .required(VALIDATION_ERROR_MSGS_PASSWORD.REQUIRED),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
