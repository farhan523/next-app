import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.reducer";
import nafFormReducer from "./nafForm.reducer";
import sessionAuditReducer from "./sessionAudit.reducer";

let reducer = {
  user: userReducer,
  nafForm: nafFormReducer,
  sessionAudit: sessionAuditReducer
};

export default configureStore({
  reducer: reducer,
});
